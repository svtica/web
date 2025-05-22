/**
 * Gestionnaire de Base de Données IP Autonome
 * Utilise les données de https://github.com/sapics/ip-location-db
 * 
 * Pour utilisation en production:
 * 1. Téléchargez ce script
 * 2. Configurez un serveur web pour servir les fichiers CSV
 * 3. Adaptez les URLs selon votre configuration
 */

class IPDatabaseManager {
    constructor(config = {}) {
        this.config = {
            // URLs des bases de données - URLs mises à jour 2024
            databases: {
                // Base pays (fonctionne, vérifiée)
                country: config.countryDB || 'https://raw.githubusercontent.com/sapics/ip-location-db/master/dbip-country/dbip-country-ipv4.csv',
                // Alternatives pour les données détaillées
                city: config.cityDB || null, // Désactivé temporairement - fichiers compressés non pris en charge
                asn: config.asnDB || 'https://raw.githubusercontent.com/sapics/ip-location-db/master/asn/asn-ipv4.csv'
            },
            
            // Configuration du cache
            cachePrefix: 'ipdb_',
            cacheExpiry: 24 * 60 * 60 * 1000, // 24 heures
            useIndexedDB: true, // Utiliser IndexedDB pour les gros fichiers
            
            // Limitation pour éviter de surcharger la mémoire
            maxRecords: config.maxRecords || 100000, // Limite à 100k enregistrements par défaut
            
            // Services de fallback
            fallbackServices: [
                'http://ip-api.com/json/',
                'https://ipapi.co/',
                'https://ipinfo.io/'
            ],
            
            // Callback pour les mises à jour de statut
            onStatusUpdate: config.onStatusUpdate || console.log,
            
            ...config
        };
        
        this.databases = {
            country: null,
            city: null,
            asn: null
        };
        
        this.loadTimes = {};
        this.isLoading = {};
        
        // Initialiser IndexedDB si supporté
        if (this.config.useIndexedDB && 'indexedDB' in window) {
            this.initIndexedDB();
        }
    }
    
    /**
     * Initialiser IndexedDB pour le cache persistant
     */
    async initIndexedDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('IPLocationDB', 1);
            
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve(this.db);
            };
            
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                
                // Store pour les bases de données
                if (!db.objectStoreNames.contains('databases')) {
                    const dbStore = db.createObjectStore('databases', { keyPath: 'type' });
                    dbStore.createIndex('timestamp', 'timestamp', { unique: false });
                }
                
                // Store pour le cache des résultats
                if (!db.objectStoreNames.contains('results')) {
                    const resultStore = db.createObjectStore('results', { keyPath: 'ip' });
                    resultStore.createIndex('timestamp', 'timestamp', { unique: false });
                }
            };
        });
    }
    
    /**
     * Charger une base de données spécifique
     */
    async loadDatabase(type) {
        // Ignore les bases de données désactivées
        if (!this.config.databases[type]) {
            this.config.onStatusUpdate(`Base ${type} désactivée`, 'warning');
            return null;
        }
        
        if (this.isLoading[type]) {
            // Attendre que le chargement en cours se termine
            while (this.isLoading[type]) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            return this.databases[type];
        }
        
        // Vérifier le cache
        if (this.databases[type] && this.loadTimes[type] && 
            (Date.now() - this.loadTimes[type] < this.config.cacheExpiry)) {
            return this.databases[type];
        }
        
        this.isLoading[type] = true;
        
        try {
            this.config.onStatusUpdate(`Chargement de la base ${type}...`, 'loading');
            
            // Essayer de charger depuis IndexedDB
            if (this.db) {
                const cached = await this.getCachedDatabase(type);
                if (cached && (Date.now() - cached.timestamp < this.config.cacheExpiry)) {
                    this.databases[type] = cached.data;
                    this.loadTimes[type] = cached.timestamp;
                    this.config.onStatusUpdate(`Base ${type} chargée depuis le cache: ${cached.data.length} entrées`, 'success');
                    this.isLoading[type] = false;
                    return this.databases[type];
                }
            }
            
            // Charger depuis le réseau
            const response = await fetch(this.config.databases[type]);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const csvData = await response.text();
            const database = this.parseCSV(csvData, type);
            
            // Limiter le nombre d'enregistrements
            if (database.length > this.config.maxRecords) {
                database.splice(this.config.maxRecords);
                this.config.onStatusUpdate(`Base ${type} limitée à ${this.config.maxRecords} entrées`, 'warning');
            }
            
            // Trier pour la recherche binaire
            database.sort((a, b) => a.startIP - b.startIP);
            
            this.databases[type] = database;
            this.loadTimes[type] = Date.now();
            
            // Sauvegarder dans IndexedDB
            if (this.db) {
                await this.cacheDatabase(type, database);
            }
            
            this.config.onStatusUpdate(`Base ${type} chargée: ${database.length} entrées`, 'success');
            
        } catch (error) {
            this.config.onStatusUpdate(`Erreur chargement ${type}: ${error.message}`, 'error');
            // Marquer cette base comme échouée pour éviter les tentatives répétées
            this.databases[type] = null;
            console.warn(`Base ${type} désactivée suite à l'erreur:`, error.message);
        } finally {
            this.isLoading[type] = false;
        }
        
        return this.databases[type];
    }
    
    /**
     * Parser un fichier CSV selon le type de base
     */
    parseCSV(csvData, type) {
        const lines = csvData.split('\n');
        const database = [];
        
        for (const line of lines) {
            if (!line.trim()) continue;
            
            const fields = this.parseCSVLine(line);
            if (fields.length < 3) continue;
            
            try {
                const entry = this.parseEntry(fields, type);
                if (entry) {
                    database.push(entry);
                }
            } catch (e) {
                // Ignorer les lignes malformées
                continue;
            }
        }
        
        return database;
    }
    
    /**
     * Parser une ligne CSV en gérant les guillemets
     */
    parseCSVLine(line) {
        const fields = [];
        let field = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
                if (inQuotes && line[i + 1] === '"') {
                    field += '"';
                    i++; // Skip next quote
                } else {
                    inQuotes = !inQuotes;
                }
            } else if (char === ',' && !inQuotes) {
                fields.push(field);
                field = '';
            } else {
                field += char;
            }
        }
        
        fields.push(field); // Add last field
        return fields;
    }
    
    /**
     * Parser une entrée selon le type de base
     */
    parseEntry(fields, type) {
        const startIP = this.ipToNumber(fields[0]);
        const endIP = this.ipToNumber(fields[1]);
        
        if (isNaN(startIP) || isNaN(endIP)) return null;
        
        const entry = { startIP, endIP };
        
        switch (type) {
            case 'country':
                entry.country = fields[2] || '';
                entry.countryName = fields[3] || '';
                break;
                
            case 'city':
                entry.country = fields[2] || '';
                entry.region = fields[3] || '';
                entry.city = fields[4] || '';
                entry.lat = parseFloat(fields[5]) || 0;
                entry.lon = parseFloat(fields[6]) || 0;
                entry.timezone = fields[7] || '';
                break;
                
            case 'asn':
                entry.asn = fields[2] || '';
                entry.org = fields[3] || '';
                break;
        }
        
        return entry;
    }
    
    /**
     * Convertir une IP en nombre
     */
    ipToNumber(ip) {
        if (typeof ip !== 'string') return NaN;
        return ip.split('.').reduce((acc, octet) => {
            const num = parseInt(octet, 10);
            return isNaN(num) ? NaN : (acc << 8) + num;
        }, 0) >>> 0;
    }
    
    /**
     * Rechercher une IP dans la base de données
     */
    async findIP(ip, databases = ['country', 'asn']) {
        const ipNum = this.ipToNumber(ip);
        if (isNaN(ipNum)) {
            throw new Error('Adresse IP invalide');
        }
        
        const result = { ip };
        
        // Charger les bases demandées (en ignorant les bases désactivées)
        for (const dbType of databases) {
            try {
                const database = await this.loadDatabase(dbType);
                if (!database) continue; // Base désactivée ou échouée
                
                const entry = this.binarySearch(ipNum, database);
                
                if (entry) {
                    Object.assign(result, entry);
                }
            } catch (error) {
                console.warn(`Erreur base ${dbType}:`, error);
                continue;
            }
        }
        
        return Object.keys(result).length > 1 ? result : null;
    }
    
    /**
     * Recherche binaire dans la base
     */
    binarySearch(ipNum, database) {
        if (!database || database.length === 0) return null;
        
        let left = 0;
        let right = database.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const entry = database[mid];
            
            if (ipNum >= entry.startIP && ipNum <= entry.endIP) {
                return entry;
            } else if (ipNum < entry.startIP) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        return null;
    }
    
    /**
     * Service de fallback
     */
    async fallbackLookup(ip) {
        // Services HTTPS uniquement pour éviter Mixed Content
        const httpsServices = [
            {
                url: `https://ipapi.co/${ip || ''}/json/`,
                parser: (data) => {
                    if (data.country_code && data.country_code !== 'undefined') {
                        return {
                            ip: data.ip,
                            country: data.country_code,
                            countryName: data.country_name,
                            region: data.region,
                            city: data.city,
                            org: data.org,
                            timezone: data.timezone,
                            lat: data.latitude,
                            lon: data.longitude,
                            source: 'ipapi.co (HTTPS)'
                        };
                    }
                    return null;
                }
            },
            {
                url: `https://ipinfo.io/${ip || ''}/json`,
                parser: (data) => {
                    if (data.country && !data.error) {
                        const [lat, lon] = (data.loc || ',').split(',');
                        return {
                            ip: data.ip,
                            country: data.country,
                            countryName: data.country,
                            region: data.region,
                            city: data.city,
                            org: data.org,
                            timezone: data.timezone,
                            lat: parseFloat(lat) || null,
                            lon: parseFloat(lon) || null,
                            source: 'ipinfo.io (HTTPS)'
                        };
                    }
                    return null;
                }
            },
            {
                url: `https://freeipapi.com/api/json/${ip || ''}`,
                parser: (data) => {
                    if (data.countryCode) {
                        return {
                            ip: data.ipAddress,
                            country: data.countryCode,
                            countryName: data.countryName,
                            region: data.regionName,
                            city: data.cityName,
                            timezone: data.timeZone,
                            lat: data.latitude,
                            lon: data.longitude,
                            source: 'freeipapi.com (HTTPS)'
                        };
                    }
                    return null;
                }
            }
        ];
        
        for (const service of httpsServices) {
            try {
                const response = await fetch(service.url, { 
                    timeout: 5000,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (!response.ok) continue;
                
                const data = await response.json();
                const result = service.parser(data);
                
                if (result) {
                    return result;
                }
            } catch (error) {
                console.warn(`Erreur service ${service.url}:`, error.message);
                continue;
            }
        }
        
        return null;
    }
    
    /**
     * Recherche principale avec fallback
     */
    async lookup(ip) {
        try {
            // Essayer notre base locale
            let result = await this.findIP(ip);
            
            if (result) {
                result.source = 'Base autonome';
                return result;
            }
            
            // Utiliser le fallback
            result = await this.fallbackLookup(ip);
            if (result) {
                return result;
            }
            
            return null;
            
        } catch (error) {
            this.config.onStatusUpdate(`Erreur lookup ${ip}: ${error.message}`, 'error');
            return null;
        }
    }
    
    /**
     * Obtenir l'IP publique
     */
    async getPublicIP() {
        const services = [
            'https://api.ipify.org?format=json',
            'https://jsonip.com',
            'https://httpbin.org/ip'
        ];
        
        for (const service of services) {
            try {
                const response = await fetch(service, { timeout: 5000 });
                const data = await response.json();
                return data.ip || data.origin;
            } catch (e) {
                continue;
            }
        }
        
        throw new Error('Impossible d\'obtenir l\'IP publique');
    }
    
    /**
     * Sauvegarder la base en cache IndexedDB
     */
    async cacheDatabase(type, data) {
        if (!this.db) return;
        
        const transaction = this.db.transaction(['databases'], 'readwrite');
        const store = transaction.objectStore('databases');
        
        await store.put({
            type,
            data,
            timestamp: Date.now()
        });
    }
    
    /**
     * Récupérer la base depuis le cache IndexedDB
     */
    async getCachedDatabase(type) {
        if (!this.db) return null;
        
        const transaction = this.db.transaction(['databases'], 'readonly');
        const store = transaction.objectStore('databases');
        
        return new Promise((resolve, reject) => {
            const request = store.get(type);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }
    
    /**
     * Nettoyer le cache expiré
     */
    async cleanExpiredCache() {
        if (!this.db) return;
        
        const expiry = Date.now() - this.config.cacheExpiry;
        const transaction = this.db.transaction(['databases', 'results'], 'readwrite');
        
        // Nettoyer les bases expirées
        const dbStore = transaction.objectStore('databases');
        const dbIndex = dbStore.index('timestamp');
        const dbRange = IDBKeyRange.upperBound(expiry);
        
        dbIndex.openCursor(dbRange).onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor) {
                cursor.delete();
                cursor.continue();
            }
        };
        
        // Nettoyer les résultats expirés
        const resultStore = transaction.objectStore('results');
        const resultIndex = resultStore.index('timestamp');
        
        resultIndex.openCursor(dbRange).onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor) {
                cursor.delete();
                cursor.continue();
            }
        };
    }
    
    /**
     * Statistiques des bases de données
     */
    getStats() {
        const stats = {};
        
        for (const [type, db] of Object.entries(this.databases)) {
            if (db) {
                stats[type] = {
                    records: db.length,
                    loadTime: this.loadTimes[type],
                    age: Date.now() - (this.loadTimes[type] || 0)
                };
            }
        }
        
        return stats;
    }
}

// Export pour utilisation en module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IPDatabaseManager;
}

// Utilisation globale
if (typeof window !== 'undefined') {
    window.IPDatabaseManager = IPDatabaseManager;
}

/**
 * Exemple d'utilisation:
 * 
 * const ipManager = new IPDatabaseManager({
 *     maxRecords: 50000, // Limiter à 50k entrées
 *     onStatusUpdate: (message, type) => {
 *         console.log(`[${type}] ${message}`);
 *         // Mettre à jour l'UI
 *     }
 * });
 * 
 * // Rechercher l'IP actuelle
 * const myIP = await ipManager.getPublicIP();
 * const myLocation = await ipManager.lookup(myIP);
 * console.log(myLocation);
 * 
 * // Rechercher une IP spécifique
 * const location = await ipManager.lookup('8.8.8.8');
 * console.log(location);
 * 
 * // Statistiques
 * console.log(ipManager.getStats());
 */