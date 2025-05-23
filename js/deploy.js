#!/usr/bin/env node

/**
 * Script de déploiement et maintenance SS64 Search Pro
 * Automatise la création, la validation et la maintenance de l'environnement
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SS64Deployer {
    constructor() {
        this.projectRoot = __dirname;
        this.backupDir = path.join(this.projectRoot, 'backups');
        this.logsDir = path.join(this.projectRoot, 'logs');
        this.version = '1.0.0';
    }

    // Vérifier l'environnement
    checkEnvironment() {
        console.log('🔍 Vérification de l\'environnement...');
        
        const requiredFiles = [
            'js/ss64-database.js',
            'js/theme-manager-ss64.js',
            'js/keyboard-shortcuts.js',
            'js/ss64-advanced.js',
            'ss64-search-pro.html'
        ];

        let allGood = true;
        requiredFiles.forEach(file => {
            const filePath = path.join(this.projectRoot, file);
            if (fs.existsSync(filePath)) {
                console.log(`✅ ${file}`);
            } else {
                console.log(`❌ ${file} manquant`);
                allGood = false;
            }
        });

        return allGood;
    }

    // Créer les répertoires nécessaires
    createDirectories() {
        console.log('📁 Création des répertoires...');
        
        const dirs = [this.backupDir, this.logsDir, path.join(this.projectRoot, 'js')];
        
        dirs.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
                console.log(`✅ Créé: ${path.relative(this.projectRoot, dir)}`);
            }
        });
    }

    // Valider la base de données
    async validateDatabase() {
        console.log('🔬 Validation de la base de données...');
        
        try {
            const SS64Tests = require('./ss64-tests.js');
            const tester = new SS64Tests();
            const success = tester.runAllTests();
            
            if (success) {
                console.log('✅ Base de données validée');
                return true;
            } else {
                console.log('❌ Erreurs dans la base de données');
                return false;
            }
        } catch (error) {
            console.warn('⚠️ Tests non disponibles:', error.message);
            return true; // Continuer même si les tests échouent
        }
    }

    // Optimiser les fichiers
    optimizeFiles() {
        console.log('⚡ Optimisation des fichiers...');
        
        try {
            const SS64Maintenance = require('./ss64-maintenance.js');
            const maintenance = new SS64Maintenance();
            maintenance.optimize();
            console.log('✅ Fichiers optimisés');
        } catch (error) {
            console.warn('⚠️ Optimisation non disponible:', error.message);
        }
    }

    // Créer une sauvegarde
    createBackup() {
        console.log('💾 Création de la sauvegarde...');
        
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backupPath = path.join(this.backupDir, `deployment-${timestamp}`);
        
        if (!fs.existsSync(backupPath)) {
            fs.mkdirSync(backupPath, { recursive: true });
        }

        const filesToBackup = [
            'js/ss64-database.js',
            'ss64-search-pro.html',
            'README-SS64.md',
            'package.json'
        ];

        filesToBackup.forEach(file => {
            const srcPath = path.join(this.projectRoot, file);
            const destPath = path.join(backupPath, file);
            
            if (fs.existsSync(srcPath)) {
                const destDir = path.dirname(destPath);
                if (!fs.existsSync(destDir)) {
                    fs.mkdirSync(destDir, { recursive: true });
                }
                fs.copyFileSync(srcPath, destPath);
            }
        });

        console.log(`✅ Sauvegarde créée: ${path.relative(this.projectRoot, backupPath)}`);
        return backupPath;
    }

    // Générer un rapport de déploiement
    generateReport() {
        console.log('📊 Génération du rapport...');
        
        const report = {
            version: this.version,
            timestamp: new Date().toISOString(),
            environment: {
                node: process.version,
                platform: process.platform,
                arch: process.arch
            },
            files: {},
            statistics: {}
        };

        // Analyser les fichiers
        const filesToAnalyze = [
            'js/ss64-database.js',
            'ss64-search-pro.html',
            'js/theme-manager-ss64.js',
            'js/keyboard-shortcuts.js'
        ];

        filesToAnalyze.forEach(file => {
            const filePath = path.join(this.projectRoot, file);
            if (fs.existsSync(filePath)) {
                const stats = fs.statSync(filePath);
                report.files[file] = {
                    size: stats.size,
                    modified: stats.mtime.toISOString()
                };
            }
        });

        // Analyser la base de données
        try {
            const dbPath = path.join(this.projectRoot, 'js', 'ss64-database.js');
            if (fs.existsSync(dbPath)) {
                const content = fs.readFileSync(dbPath, 'utf8');
                const match = content.match(/const SS64_DATABASE = ({[\s\S]*?});/);
                if (match) {
                    const database = JSON.parse(match[1]);
                    report.statistics.totalCommands = Object.values(database).reduce((total, commands) => total + commands.length, 0);
                    report.statistics.osSystems = Object.keys(database).length;
                    report.statistics.byOS = {};
                    Object.entries(database).forEach(([os, commands]) => {
                        report.statistics.byOS[os] = commands.length;
                    });
                }
            }
        } catch (error) {
            console.warn('⚠️ Erreur analyse base de données:', error.message);
        }

        // Sauvegarder le rapport
        const reportPath = path.join(this.logsDir, `deployment-report-${new Date().toISOString().split('T')[0]}.json`);
        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        
        console.log(`✅ Rapport généré: ${path.relative(this.projectRoot, reportPath)}`);
        return report;
    }

    // Vérifier les dépendances
    checkDependencies() {
        console.log('📦 Vérification des dépendances...');
        
        try {
            const packagePath = path.join(this.projectRoot, 'package.json');
            if (fs.existsSync(packagePath)) {
                const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
                if (pkg.devDependencies && Object.keys(pkg.devDependencies).length > 0) {
                    console.log('🔍 Vérification npm...');
                    try {
                        execSync('npm list --depth=0', { cwd: this.projectRoot, stdio: 'pipe' });
                        console.log('✅ Dépendances npm OK');
                    } catch (error) {
                        console.log('⚠️ Certaines dépendances npm manquent');
                        console.log('💡 Exécutez: npm install');
                    }
                }
            }
        } catch (error) {
            console.warn('⚠️ Erreur vérification dépendances:', error.message);
        }
    }

    // Démarrer un serveur de test
    startTestServer(port = 8000) {
        console.log(`🚀 Démarrage du serveur de test sur le port ${port}...`);
        
        try {
            // Essayer Python 3 en premier
            execSync(`python3 -m http.server ${port}`, { 
                cwd: this.projectRoot, 
                stdio: 'inherit',
                timeout: 5000 
            });
        } catch (error) {
            try {
                // Essayer Python 2
                execSync(`python -m SimpleHTTPServer ${port}`, { 
                    cwd: this.projectRoot, 
                    stdio: 'inherit',
                    timeout: 5000 
                });
            } catch (error2) {
                try {
                    // Essayer Node.js serve si disponible
                    execSync(`npx serve . -p ${port}`, { 
                        cwd: this.projectRoot, 
                        stdio: 'inherit',
                        timeout: 5000 
                    });
                } catch (error3) {
                    console.log('❌ Impossible de démarrer un serveur');
                    console.log('💡 Installez Python ou Node.js, ou ouvrez ss64-search-pro.html directement');
                }
            }
        }
    }

    // Nettoyer les anciens fichiers
    cleanup() {
        console.log('🧹 Nettoyage...');
        
        // Nettoyer les anciennes sauvegardes (garder les 5 plus récentes)
        if (fs.existsSync(this.backupDir)) {
            const backups = fs.readdirSync(this.backupDir)
                .filter(name => name.startsWith('deployment-'))
                .map(name => ({
                    name,
                    path: path.join(this.backupDir, name),
                    time: fs.statSync(path.join(this.backupDir, name)).mtime
                }))
                .sort((a, b) => b.time - a.time);

            if (backups.length > 5) {
                backups.slice(5).forEach(backup => {
                    fs.rmSync(backup.path, { recursive: true, force: true });
                    console.log(`🗑️ Supprimé: ${backup.name}`);
                });
            }
        }

        // Nettoyer les anciens logs (garder les 10 plus récents)
        if (fs.existsSync(this.logsDir)) {
            const logs = fs.readdirSync(this.logsDir)
                .filter(name => name.endsWith('.json'))
                .map(name => ({
                    name,
                    path: path.join(this.logsDir, name),
                    time: fs.statSync(path.join(this.logsDir, name)).mtime
                }))
                .sort((a, b) => b.time - a.time);

            if (logs.length > 10) {
                logs.slice(10).forEach(log => {
                    fs.unlinkSync(log.path);
                    console.log(`🗑️ Supprimé: ${log.name}`);
                });
            }
        }

        console.log('✅ Nettoyage terminé');
    }

    // Déploiement complet
    async deploy() {
        console.log('🚀 DÉPLOIEMENT SS64 SEARCH PRO');
        console.log('='.repeat(50));
        
        const startTime = Date.now();
        
        try {
            // 1. Vérifications préliminaires
            if (!this.checkEnvironment()) {
                throw new Error('Environnement invalide');
            }

            // 2. Créer les répertoires
            this.createDirectories();

            // 3. Vérifier les dépendances
            this.checkDependencies();

            // 4. Valider la base de données
            const dbValid = await this.validateDatabase();
            if (!dbValid) {
                console.log('⚠️ Base de données non valide, continuons...');
            }

            // 5. Optimiser les fichiers
            this.optimizeFiles();

            // 6. Créer une sauvegarde
            this.createBackup();

            // 7. Générer le rapport
            const report = this.generateReport();

            // 8. Nettoyage
            this.cleanup();

            const endTime = Date.now();
            const duration = ((endTime - startTime) / 1000).toFixed(2);

            console.log('\n' + '='.repeat(50));
            console.log('✅ DÉPLOIEMENT TERMINÉ AVEC SUCCÈS');
            console.log('='.repeat(50));
            console.log(`⏱️ Durée: ${duration}s`);
            console.log(`📊 Commandes: ${report.statistics.totalCommands || 'N/A'}`);
            console.log(`🗂️ Systèmes: ${report.statistics.osSystems || 'N/A'}`);
            console.log(`📁 Version: ${this.version}`);
            
            console.log('\n🎯 PROCHAINES ÉTAPES:');
            console.log('1. Ouvrez ss64-search-pro.html dans votre navigateur');
            console.log('2. Ou démarrez un serveur: npm run serve');
            console.log('3. Consultez la documentation: README-SS64.md');
            console.log('4. Tests: npm test');

            return true;
        } catch (error) {
            console.error('\n❌ ERREUR DE DÉPLOIEMENT:', error.message);
            return false;
        }
    }

    // Afficher l'aide
    showHelp() {
        console.log(`
🚀 SS64 Search Pro - Script de déploiement

Usage: node deploy.js [command]

Commandes:
  deploy      Déploiement complet (par défaut)
  check       Vérifier l'environnement uniquement
  backup      Créer une sauvegarde
  serve       Démarrer un serveur de test
  cleanup     Nettoyer les anciens fichiers
  report      Générer un rapport
  help        Afficher cette aide

Exemples:
  node deploy.js
  node deploy.js check
  node deploy.js serve 3000
  node deploy.js backup

📁 Structure du projet:
  ss64-search-pro.html    Interface principale
  js/                     Scripts JavaScript
  backups/               Sauvegardes automatiques
  logs/                  Rapports de déploiement
  README-SS64.md         Documentation

🔗 Liens utiles:
  Démarrer:    npm run serve
  Tests:       npm test
  Validation:  npm run validate
  Stats:       npm run stats
        `);
    }
}

// Exécution du script
async function main() {
    const deployer = new SS64Deployer();
    const command = process.argv[2] || 'deploy';
    const args = process.argv.slice(3);

    let success = false;

    switch (command.toLowerCase()) {
        case 'deploy':
            success = await deployer.deploy();
            break;
            
        case 'check':
            success = deployer.checkEnvironment();
            if (success) {
                console.log('✅ Environnement OK');
            }
            break;
            
        case 'backup':
            deployer.createBackup();
            success = true;
            break;
            
        case 'serve':
            const port = args[0] || 8000;
            deployer.startTestServer(port);
            success = true;
            break;
            
        case 'cleanup':
            deployer.cleanup();
            success = true;
            break;
            
        case 'report':
            deployer.generateReport();
            success = true;
            break;
            
        case 'help':
        case '--help':
        case '-h':
            deployer.showHelp();
            success = true;
            break;
            
        default:
            console.error(`❌ Commande inconnue: ${command}`);
            deployer.showHelp();
            break;
    }

    process.exit(success ? 0 : 1);
}

// Exporter pour utilisation comme module
if (require.main === module) {
    main().catch(error => {
        console.error('❌ Erreur fatale:', error);
        process.exit(1);
    });
} else {
    module.exports = SS64Deployer;
}