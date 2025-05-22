/**
 * Script utilitaire pour migrer les pages existantes vers le nouveau système
 * Permet de convertir facilement les pages HTML existantes
 */

class PageMigrator {
    constructor() {
        this.templatePath = 'template-unified.html';
        this.initializeMigrator();
    }
    
    /**
     * Initialise l'interface de migration
     */
    initializeMigrator() {
        this.createMigratorInterface();
        this.loadExistingPages();
    }
    
    /**
     * Crée l'interface utilisateur pour la migration
     */
    createMigratorInterface() {
        const migrator = document.createElement('div');
        migrator.id = 'page-migrator';
        migrator.className = 'migrator-interface';
        migrator.innerHTML = `
            <div class="migrator-panel">
                <h3>🔄 Migration des Pages</h3>
                <p>Cet outil vous aide à migrer vos pages vers le nouveau système unifié.</p>
                
                <div class="migration-steps">
                    <h4>Étapes de migration :</h4>
                    <ol>
                        <li>Sélectionnez une page à migrer</li>
                        <li>Vérifiez le contenu extrait</li>
                        <li>Générez le nouveau fichier</li>
                        <li>Remplacez l'ancien fichier</li>
                    </ol>
                </div>
                
                <div class="file-selector">
                    <label for="page-select">Sélectionner une page :</label>
                    <select id="page-select">
                        <option value="">-- Choisir une page --</option>
                    </select>
                </div>
                
                <div class="migration-preview" id="migration-preview" style="display: none;">
                    <h4>Aperçu du contenu à migrer :</h4>
                    <textarea id="content-preview" rows="10" cols="80"></textarea>
                    <br>
                    <button onclick="migrator.generateMigratedPage()">Générer la page migrée</button>
                </div>
                
                <div class="migration-result" id="migration-result" style="display: none;">
                    <h4>Page migrée générée :</h4>
                    <textarea id="migrated-content" rows="15" cols="80"></textarea>
                    <br>
                    <button onclick="migrator.downloadMigratedPage()">Télécharger la page</button>
                </div>
                
                <div class="migration-instructions">
                    <h4>Instructions pour appliquer la migration :</h4>
                    <ul>
                        <li>Téléchargez le fichier généré</li>
                        <li>Remplacez l'ancien fichier par le nouveau</li>
                        <li>Testez la page dans votre navigateur</li>
                        <li>Ajustez le CSS spécifique si nécessaire</li>
                    </ul>
                </div>
                
                <button onclick="migrator.toggleMigrator()" class="close-migrator">Fermer</button>
            </div>
        `;
        
        // Ajouter les styles
        this.addMigratorStyles();
        
        // Ajouter au body
        document.body.appendChild(migrator);
        
        // Ajouter les événements
        this.attachEvents();
    }
    
    /**
     * Ajoute les styles CSS pour l'interface de migration
     */
    addMigratorStyles() {
        if (document.getElementById('migrator-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'migrator-styles';
        style.textContent = `
            .migrator-interface {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: var(--bg-color, white);
                border: 2px solid var(--border-color, #ccc);
                border-radius: 10px;
                padding: 20px;
                max-width: 90vw;
                max-height: 90vh;
                overflow-y: auto;
                z-index: 1000;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                font-family: inherit;
                color: var(--text-color, black);
            }
            
            .migrator-panel h3 {
                margin-top: 0;
                color: var(--heading-color, #333);
            }
            
            .migration-steps ol {
                background: var(--highlight-color, #f5f5f5);
                padding: 10px 20px;
                border-radius: 5px;
                margin: 10px 0;
            }
            
            .file-selector {
                margin: 15px 0;
            }
            
            .file-selector select {
                width: 100%;
                padding: 8px;
                border: 1px solid var(--border-color, #ccc);
                border-radius: 5px;
                background: var(--bg-color, white);
                color: var(--text-color, black);
            }
            
            .migration-preview, .migration-result {
                margin: 15px 0;
                padding: 15px;
                border: 1px solid var(--border-color, #ccc);
                border-radius: 5px;
                background: var(--highlight-color, #f9f9f9);
            }
            
            .migration-preview textarea, .migration-result textarea {
                width: 100%;
                border: 1px solid var(--border-color, #ccc);
                border-radius: 3px;
                padding: 8px;
                font-family: monospace;
                background: var(--bg-color, white);
                color: var(--text-color, black);
            }
            
            .migrator-interface button {
                background: var(--button-color, #007cba);
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 5px;
                cursor: pointer;
                margin: 5px;
            }
            
            .migrator-interface button:hover {
                background: var(--heading-color, #005a9e);
            }
            
            .close-migrator {
                position: absolute;
                top: 10px;
                right: 10px;
                background: #dc3545 !important;
            }
            
            .migration-instructions ul {
                background: var(--highlight-color, #e9ecef);
                padding: 10px 20px;
                border-radius: 5px;
                margin: 10px 0;
            }
        `;
        
        document.head.appendChild(style);
    }
    
    /**
     * Charge la liste des pages existantes
     */
    loadExistingPages() {
        const pageSelect = document.getElementById('page-select');
        const pages = [
            'base64.html',
            'calculateur-date-heure.html',
            'calculateur-hachage.html',
            'conversion.html',
            'conversions-avancees.html',
            'cyberchef.html',
            'generateur.html',
            'generateur-commandes-reseau.html',
            'ias-logs.html',
            'mha.html',
            'raid-calc.html',
            'recherche-ss64.html',
            'reseau.html',
            'rps.html',
            'wpa-psk-generator.html'
        ];
        
        pages.forEach(page => {
            const option = document.createElement('option');
            option.value = page;
            option.textContent = page;
            pageSelect.appendChild(option);
        });
    }
    
    /**
     * Attache les événements
     */
    attachEvents() {
        const pageSelect = document.getElementById('page-select');
        pageSelect.addEventListener('change', (e) => {
            if (e.target.value) {
                this.loadPageContent(e.target.value);
            }
        });
    }
    
    /**
     * Charge et analyse le contenu d'une page
     */
    async loadPageContent(pagePath) {
        try {
            const response = await fetch(pagePath);
            const htmlContent = await response.text();
            
            // Extraire le contenu de la page
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, 'text/html');
            
            // Extraire le titre
            const title = doc.querySelector('title')?.textContent || 'Page sans titre';
            
            // Extraire le contenu principal (tout ce qui n'est pas nav, script, style)
            const container = doc.querySelector('.container');
            let mainContent = '';
            
            if (container) {
                // Supprimer les éléments de navigation
                const navElements = container.querySelectorAll('nav');
                navElements.forEach(nav => nav.remove());
                
                mainContent = container.innerHTML;
            } else {
                // Fallback : extraire le body sans nav et scripts
                const body = doc.querySelector('body');
                if (body) {
                    const clone = body.cloneNode(true);
                    clone.querySelectorAll('nav, script, style').forEach(el => el.remove());
                    mainContent = clone.innerHTML;
                }
            }
            
            // Afficher l'aperçu
            document.getElementById('migration-preview').style.display = 'block';
            document.getElementById('content-preview').value = mainContent;
            
            // Stocker les données pour la génération
            this.currentPageData = {
                filename: pagePath,
                title: title.replace(' - Outils Sysadmin', ''),
                content: mainContent
            };
            
        } catch (error) {
            console.error('Erreur lors du chargement de la page:', error);
            alert('Erreur lors du chargement de la page. Assurez-vous que le fichier existe.');
        }
    }
    
    /**
     * Génère la page migrée
     */
    generateMigratedPage() {
        if (!this.currentPageData) {
            alert('Aucune page sélectionnée');
            return;
        }
        
        const template = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>${this.currentPageData.title} - Outils Sysadmin</title>
    <meta name="description" content="${this.currentPageData.title} - Outils web pour Sysadmins">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- Fonts -->
    <link rel="stylesheet" href="fonts/font.css" type="text/css" charset="utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    
    <!-- CSS Unifié -->
    <link rel="stylesheet" href="css/unified-theme.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="images/favicon.png">
</head>
<body>
    <!-- Arrière-plans animés -->
    <div class="background"></div>
    <div class="grid"></div>
    
    <!-- Navigation (sera générée automatiquement) -->
    <nav id="main-navigation">
        <!-- La navigation sera injectée ici par navigation.js -->
    </nav>
    
    <!-- Contenu principal -->
    <div class="container fade-in">
        ${this.currentPageData.content}
    </div>
    
    <!-- Scripts -->
    <script src="js/unified-theme-manager.js"></script>
    <script src="js/navigation.js"></script>
    
    <!-- Initialisation -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // S'assurer que le thème sombre est appliqué par défaut
            if (!localStorage.getItem('unified-theme')) {
                localStorage.setItem('unified-theme', 'dark');
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        });
    </script>
</body>
</html>`;
        
        // Afficher le résultat
        document.getElementById('migration-result').style.display = 'block';
        document.getElementById('migrated-content').value = template;
    }
    
    /**
     * Télécharge la page migrée
     */
    downloadMigratedPage() {
        if (!this.currentPageData) return;
        
        const content = document.getElementById('migrated-content').value;
        const blob = new Blob([content], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = this.currentPageData.filename.replace('.html', '-migrated.html');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        URL.revokeObjectURL(url);
    }
    
    /**
     * Toggle l'interface de migration
     */
    toggleMigrator() {
        const migrator = document.getElementById('page-migrator');
        if (migrator) {
            migrator.style.display = migrator.style.display === 'none' ? 'block' : 'none';
        }
    }
}

// Créer l'instance globale
window.migrator = new PageMigrator();

// Bouton pour ouvrir/fermer le migrator
const toggleButton = document.createElement('button');
toggleButton.innerHTML = '🔄 Migration';
toggleButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    background: #28a745;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
`;
toggleButton.onclick = () => window.migrator.toggleMigrator();
document.body.appendChild(toggleButton);
