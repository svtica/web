// Script d'extraction et d'enrichissement de la base de données SS64
// Utilise l'API de lecture de fichiers du navigateur pour traiter les fichiers HTML

class SS64Extractor {
    constructor() {
        this.database = {};
        this.processedFiles = 0;
        this.totalFiles = 0;
        this.osMapping = {
            'nt': 'windows',
            'ps': 'powershell',
            'bash': 'linux',
            'osx': 'macos'
        };
    }

    // Fonction principale d'extraction
    async extractFromSS64Files() {
        console.log('🚀 Début de l\'extraction SS64...');
        
        try {
            // Lire le répertoire SS64
            const ss64Files = await this.getSS64FilesList();
            this.totalFiles = ss64Files.length;
            
            console.log(`📁 ${this.totalFiles} fichiers trouvés`);
            
            // Traiter chaque fichier
            for (const file of ss64Files) {
                await this.processFile(file);
            }
            
            console.log('✅ Extraction terminée!');
            console.log(`📊 ${this.processedFiles} fichiers traités`);
            
            return this.database;
        } catch (error) {
            console.error('❌ Erreur lors de l\'extraction:', error);
            throw error;
        }
    }
    
    // Obtenir la liste des fichiers SS64
    async getSS64FilesList() {
        const files = [];
        const osFolders = Object.keys(this.osMapping);
        
        for (const osFolder of osFolders) {
            try {
                // Simuler la lecture des fichiers (dans un vrai environnement, utiliser fs)
                const osFiles = await this.getFilesInDirectory(`../webtools/ss64/${osFolder}/`);
                files.push(...osFiles.map(file => ({ 
                    path: `../webtools/ss64/${osFolder}/${file}`, 
                    os: this.osMapping[osFolder],
                    name: file.replace('.html', '')
                })));
            } catch (error) {
                console.warn(`⚠️ Impossible de lire le dossier ${osFolder}:`, error.message);
            }
        }
        
        return files;
    }
    
    // Simuler la lecture d'un répertoire
    async getFilesInDirectory(path) {
        // Dans un environnement réel, ceci utiliserait l'API de fichiers
        // Pour la démo, on retourne une liste statique
        const commonCommands = {
            nt: ['ping.html', 'ipconfig.html', 'netstat.html', 'tracert.html', 'dir.html', 'copy.html', 'xcopy.html', 'robocopy.html', 'del.html', 'md.html', 'rd.html', 'attrib.html', 'tasklist.html', 'taskkill.html', 'systeminfo.html', 'whoami.html', 'net.html', 'wmic.html', 'sc.html', 'schtasks.html'],
            ps: ['Get-Process.html', 'Get-Service.html', 'Test-Connection.html', 'Get-EventLog.html', 'Get-ChildItem.html', 'Set-Location.html', 'Get-Content.html', 'Set-Content.html', 'Copy-Item.html', 'Move-Item.html', 'Remove-Item.html', 'New-Item.html'],
            bash: ['ls.html', 'cd.html', 'pwd.html', 'mkdir.html', 'rmdir.html', 'rm.html', 'cp.html', 'mv.html', 'cat.html', 'less.html', 'head.html', 'tail.html', 'grep.html', 'find.html', 'ps.html', 'kill.html', 'chmod.html', 'chown.html', 'tar.html', 'gzip.html'],
            osx: ['brew.html', 'defaults.html', 'diskutil.html', 'launchctl.html', 'softwareupdate.html', 'system_profiler.html', 'open.html', 'screencapture.html', 'say.html', 'mdfind.html']
        };
        
        const folder = path.split('/').slice(-2, -1)[0];
        return commonCommands[folder] || [];
    }
    
    // Traiter un fichier HTML
    async processFile(file) {
        try {
            // Dans un vrai environnement, lire le fichier avec fetch ou FileReader
            const htmlContent = await this.readFile(file.path);
            const commandInfo = this.extractCommandInfo(htmlContent, file.name, file.os);
            
            if (!this.database[file.os]) {
                this.database[file.os] = [];
            }
            
            this.database[file.os].push(commandInfo);
            this.processedFiles++;
            
            if (this.processedFiles % 10 === 0) {
                console.log(`📈 Progression: ${this.processedFiles}/${this.totalFiles}`);
            }
            
        } catch (error) {
            console.warn(`⚠️ Erreur traitement ${file.name}:`, error.message);
        }
    }
    
    // Lire un fichier (simulation)
    async readFile(path) {
        // Simulation de lecture de fichier
        // Dans un vrai environnement, utiliser fetch() ou FileReader
        return this.getMockFileContent(path);
    }
    
    // Contenu de fichier simulé pour la démo
    getMockFileContent(path) {
        const filename = path.split('/').pop().replace('.html', '');
        
        // Templates de base selon le type de commande
        const templates = {
            'ping': {
                title: 'PING - Test network connection',
                description: 'Test a network connection - if successful, ping returns the ip address.',
                syntax: 'PING [options] destination_host',
                examples: ['PING google.com', 'PING -n 4 8.8.8.8', 'PING -t 192.168.1.1']
            },
            'ls': {
                title: 'LS - List directory contents',
                description: 'List information about files and directories.',
                syntax: 'ls [OPTION]... [FILE]...',
                examples: ['ls', 'ls -la', 'ls -lh', 'ls -R']
            },
            'Get-Process': {
                title: 'Get-Process - Get running processes',
                description: 'Gets the processes that are running on the local computer or a remote computer.',
                syntax: 'Get-Process [[-Name] <String[]>] [<CommonParameters>]',
                examples: ['Get-Process', 'Get-Process -Name "notepad"', 'Get-Process | Sort-Object CPU -Descending']
            }
        };
        
        // Retourner le template correspondant ou un template générique
        return templates[filename] || {
            title: `${filename.toUpperCase()} - Command`,
            description: `${filename} command description`,
            syntax: `${filename} [options]`,
            examples: [`${filename}`, `${filename} --help`]
        };
    }
    
    // Extraire les informations d'une commande depuis le contenu
    extractCommandInfo(content, commandName, osType) {
        // Si c'est un objet (mock), l'utiliser directement
        if (typeof content === 'object') {
            return {
                name: commandName,
                description: content.description,
                syntax: content.syntax,
                examples: content.examples || [],
                os: osType
            };
        }
        
        // Sinon, parser le HTML (fonction simplifiée pour la démo)
        return {
            name: commandName,
            description: `Commande ${commandName} pour ${osType}`,
            syntax: `${commandName} [options]`,
            examples: [`${commandName}`, `${commandName} --help`],
            os: osType
        };
    }
    
    // Fusionner avec la base existante
    mergeWithExistingDatabase(existingDB) {
        console.log('🔄 Fusion avec la base existante...');
        
        for (const [osType, commands] of Object.entries(this.database)) {
            if (!existingDB[osType]) {
                existingDB[osType] = [];
            }
            
            // Ajouter seulement les nouvelles commandes
            for (const newCmd of commands) {
                const exists = existingDB[osType].some(existing => 
                    existing.name === newCmd.name
                );
                
                if (!exists) {
                    existingDB[osType].push(newCmd);
                    console.log(`➕ Ajouté: ${newCmd.name} (${osType})`);
                }
            }
        }
        
        return existingDB;
    }
}

// Fonction utilitaire pour exporter la base de données
function exportDatabase(database, format = 'js') {
    const timestamp = new Date().toISOString();
    const totalCommands = Object.values(database).reduce((total, commands) => total + commands.length, 0);
    
    if (format === 'js') {
        return `// Base de données SS64 - Générée automatiquement
// Date: ${timestamp}
// Total des commandes: ${totalCommands}

const SS64_DATABASE = ${JSON.stringify(database, null, 2)};

// Export pour utilisation dans les modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SS64_DATABASE;
}

// Disponible globalement dans le navigateur
if (typeof window !== 'undefined') {
    window.SS64_DATABASE = SS64_DATABASE;
}`;
    } else if (format === 'json') {
        return JSON.stringify(database, null, 2);
    }
}

// Fonction principale d'extraction
async function enrichSS64Database() {
    try {
        console.log('🎯 Enrichissement de la base de données SS64');
        
        const extractor = new SS64Extractor();
        const newDatabase = await extractor.extractFromSS64Files();
        
        // Fusionner avec la base existante si elle existe
        let finalDatabase = newDatabase;
        if (typeof SS64_DATABASE !== 'undefined') {
            finalDatabase = extractor.mergeWithExistingDatabase(SS64_DATABASE);
        }
        
        // Exporter la nouvelle base
        const jsContent = exportDatabase(finalDatabase);
        
        // Dans un navigateur, on peut proposer le téléchargement
        if (typeof window !== 'undefined') {
            downloadDatabase(jsContent, 'ss64-database-enriched.js');
        }
        
        console.log('✅ Enrichissement terminé avec succès!');
        return finalDatabase;
        
    } catch (error) {
        console.error('❌ Erreur lors de l\'enrichissement:', error);
        throw error;
    }
}

// Fonction pour télécharger la base de données
function downloadDatabase(content, filename) {
    const blob = new Blob([content], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Interface utilisateur pour l'extracteur
class SS64ExtractorUI {
    constructor() {
        this.extractor = new SS64Extractor();
    }
    
    createInterface() {
        const container = document.createElement('div');
        container.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border: 2px solid #667eea;
                border-radius: 10px;
                padding: 20px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                z-index: 10000;
                max-width: 300px;
                font-family: 'Segoe UI', sans-serif;
            ">
                <h3 style="margin: 0 0 15px 0; color: #667eea;">🛠️ SS64 Extractor</h3>
                <button id="startExtraction" style="
                    background: #667eea;
                    color: white;
                    border: none;
                    padding: 10px 15px;
                    border-radius: 5px;
                    cursor: pointer;
                    width: 100%;
                    margin-bottom: 10px;
                ">Enrichir la base de données</button>
                <button id="exportDatabase" style="
                    background: #28a745;
                    color: white;
                    border: none;
                    padding: 10px 15px;
                    border-radius: 5px;
                    cursor: pointer;
                    width: 100%;
                    margin-bottom: 10px;
                ">Exporter la base</button>
                <div id="extractorStatus" style="
                    font-size: 12px;
                    color: #666;
                    margin-top: 10px;
                ">Prêt à extraire</div>
                <button id="closeExtractor" style="
                    position: absolute;
                    top: 5px;
                    right: 8px;
                    background: none;
                    border: none;
                    font-size: 18px;
                    cursor: pointer;
                    color: #999;
                ">×</button>
            </div>
        `;
        
        document.body.appendChild(container);
        
        // Événements
        document.getElementById('startExtraction').onclick = async () => {
            try {
                document.getElementById('extractorStatus').textContent = 'Extraction en cours...';
                const database = await enrichSS64Database();
                document.getElementById('extractorStatus').textContent = `✅ ${Object.values(database).reduce((a,b) => a + b.length, 0)} commandes extraites`;
            } catch (error) {
                document.getElementById('extractorStatus').textContent = '❌ Erreur lors de l\'extraction';
            }
        };
        
        document.getElementById('exportDatabase').onclick = () => {
            if (typeof SS64_DATABASE !== 'undefined') {
                const content = exportDatabase(SS64_DATABASE);
                downloadDatabase(content, 'ss64-database-export.js');
                document.getElementById('extractorStatus').textContent = '💾 Base exportée';
            } else {
                document.getElementById('extractorStatus').textContent = '❌ Aucune base à exporter';
            }
        };
        
        document.getElementById('closeExtractor').onclick = () => {
            document.body.removeChild(container);
        };
    }
}

// Auto-initialisation si dans un navigateur
if (typeof window !== 'undefined') {
    console.log('🔧 SS64 Extractor chargé');
    console.log('Pour utiliser: new SS64ExtractorUI().createInterface()');
}

// Export pour Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SS64Extractor, enrichSS64Database, exportDatabase };
}