#!/usr/bin/env node

/**
 * Script de maintenance pour la base de données CommandHub
 * Usage: node commandhub-maintenance.js [command] [options]
 * 
 * Commandes disponibles:
 * - validate: Valider la base de données
 * - stats: Afficher les statistiques
 * - extract: Extraire de nouvelles commandes
 * - merge: Fusionner deux bases de données
 * - optimize: Optimiser la taille de la base
 * - backup: Créer une sauvegarde
 * - restore: Restaurer depuis une sauvegarde
 */

const fs = require('fs');
const path = require('path');

class CommandHubMaintenance {
    constructor() {
        this.databasePath = path.join(__dirname, 'commandhub-database.js');
        this.backupDir = path.join(__dirname, 'backups');
        this.database = null;
    }

    // Charger la base de données
    loadDatabase() {
        try {
            const content = fs.readFileSync(this.databasePath, 'utf8');
            // Extraire la partie JSON de la variable JS
            const match = content.match(/const COMMANDHUB_DATABASE = ({[\s\S]*?});/);
            if (match) {
                this.database = JSON.parse(match[1]);
                console.log('✅ Base de données chargée');
                return true;
            } else {
                throw new Error('Format de base de données invalide');
            }
        } catch (error) {
            console.error('❌ Erreur lors du chargement:', error.message);
            return false;
        }
    }

    // Sauvegarder la base de données
    saveDatabase() {
        try {
            const timestamp = new Date().toISOString();
            const totalCommands = Object.values(this.database).reduce((total, commands) => total + commands.length, 0);
            
            const jsContent = `// Base de données CommandHub - Générée automatiquement
// Date: ${timestamp}
// Total des commandes: ${totalCommands}

const COMMANDHUB_DATABASE = ${JSON.stringify(this.database, null, 2)};

// Export pour utilisation dans les modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COMMANDHUB_DATABASE;
}

// Disponible globalement dans le navigateur
if (typeof window !== 'undefined') {
    window.COMMANDHUB_DATABASE = COMMANDHUB_DATABASE;
}`;

            fs.writeFileSync(this.databasePath, jsContent, 'utf8');
            console.log('✅ Base de données sauvegardée');
            return true;
        } catch (error) {
            console.error('❌ Erreur lors de la sauvegarde:', error.message);
            return false;
        }
    }

    // Valider la structure de la base de données
    validate() {
        if (!this.loadDatabase()) return false;

        console.log('🔍 Validation en cours...');
        let isValid = true;
        let totalCommands = 0;
        const issues = [];

        for (const [osType, commands] of Object.entries(this.database)) {
            if (!Array.isArray(commands)) {
                issues.push(`❌ ${osType}: Doit être un tableau`);
                isValid = false;
                continue;
            }

            console.log(`📁 Validation ${osType}: ${commands.length} commandes`);
            
            commands.forEach((cmd, index) => {
                const required = ['name', 'description', 'syntax', 'examples'];
                const missing = required.filter(field => !cmd[field]);
                
                if (missing.length > 0) {
                    issues.push(`❌ ${osType}[${index}] ${cmd.name || 'UNNAMED'}: Champs manquants: ${missing.join(', ')}`);
                    isValid = false;
                }

                if (cmd.name && typeof cmd.name !== 'string') {
                    issues.push(`❌ ${osType}[${index}]: 'name' doit être une chaîne`);
                    isValid = false;
                }

                if (cmd.examples && !Array.isArray(cmd.examples)) {
                    issues.push(`❌ ${osType}[${index}] ${cmd.name}: 'examples' doit être un tableau`);
                    isValid = false;
                }
            });

            totalCommands += commands.length;
        }

        console.log(`\n📊 Résultat de validation:`);
        console.log(`   Total des commandes: ${totalCommands}`);
        console.log(`   Status: ${isValid ? '✅ VALIDE' : '❌ ERREURS TROUVÉES'}`);

        if (issues.length > 0) {
            console.log(`\n🚨 Problèmes détectés (${issues.length}):`);
            issues.forEach(issue => console.log(`   ${issue}`));
        }

        return isValid;
    }

    // Afficher les statistiques détaillées
    stats() {
        if (!this.loadDatabase()) return false;

        console.log('📊 Statistiques de la base de données CommandHub\n');

        const totalCommands = Object.values(this.database).reduce((total, commands) => total + commands.length, 0);
        
        console.log(`📋 Aperçu général:`);
        console.log(`   Total des commandes: ${totalCommands}`);
        console.log(`   Systèmes supportés: ${Object.keys(this.database).length}`);

        console.log(`\n📁 Répartition par système:`);
        for (const [osType, commands] of Object.entries(this.database)) {
            const percentage = ((commands.length / totalCommands) * 100).toFixed(1);
            console.log(`   ${osType.padEnd(12)} : ${commands.length.toString().padStart(3)} commandes (${percentage}%)`);
        }

        console.log(`\n📈 Analyse des commandes:`);
        
        // Commandes avec le plus d'exemples
        const commandsByExamples = [];
        for (const [osType, commands] of Object.entries(this.database)) {
            commands.forEach(cmd => {
                commandsByExamples.push({
                    name: cmd.name,
                    os: osType,
                    exampleCount: cmd.examples ? cmd.examples.length : 0
                });
            });
        }
        
        const topExamples = commandsByExamples
            .sort((a, b) => b.exampleCount - a.exampleCount)
            .slice(0, 5);
            
        console.log(`   Top 5 commandes avec exemples:`);
        topExamples.forEach((cmd, i) => {
            console.log(`   ${(i + 1)}. ${cmd.name} (${cmd.os}): ${cmd.exampleCount} exemples`);
        });

        // Analyse des descriptions
        const avgDescLength = [];
        for (const [osType, commands] of Object.entries(this.database)) {
            const lengths = commands.map(cmd => cmd.description.length);
            const avg = lengths.reduce((a, b) => a + b, 0) / lengths.length;
            avgDescLength.push({ os: osType, avgLength: Math.round(avg) });
        }

        console.log(`\n📝 Longueur moyenne des descriptions:`);
        avgDescLength.forEach(stat => {
            console.log(`   ${stat.os.padEnd(12)} : ${stat.avgLength} caractères`);
        });

        return true;
    }

    // Optimiser la base de données
    optimize() {
        if (!this.loadDatabase()) return false;

        console.log('🔧 Optimisation en cours...');
        let optimizations = 0;

        for (const [osType, commands] of Object.entries(this.database)) {
            commands.forEach(cmd => {
                // Nettoyer les espaces superflus
                if (cmd.description) {
                    const cleaned = cmd.description.replace(/\s+/g, ' ').trim();
                    if (cleaned !== cmd.description) {
                        cmd.description = cleaned;
                        optimizations++;
                    }
                }

                if (cmd.syntax) {
                    const cleaned = cmd.syntax.replace(/\s+/g, ' ').trim();
                    if (cleaned !== cmd.syntax) {
                        cmd.syntax = cleaned;
                        optimizations++;
                    }
                }

                // Nettoyer les exemples
                if (cmd.examples) {
                    cmd.examples = cmd.examples
                        .map(ex => ex.replace(/\s+/g, ' ').trim())
                        .filter(ex => ex.length > 0);
                }

                // Supprimer les doublons dans les exemples
                if (cmd.examples) {
                    const unique = [...new Set(cmd.examples)];
                    if (unique.length !== cmd.examples.length) {
                        cmd.examples = unique;
                        optimizations++;
                    }
                }
            });
        }

        if (optimizations > 0) {
            this.saveDatabase();
            console.log(`✅ Optimisation terminée: ${optimizations} améliorations`);
        } else {
            console.log('✅ Base de données déjà optimisée');
        }

        return true;
    }

    // Créer une sauvegarde
    backup() {
        if (!this.loadDatabase()) return false;

        if (!fs.existsSync(this.backupDir)) {
            fs.mkdirSync(this.backupDir, { recursive: true });
        }

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backupPath = path.join(this.backupDir, `commandhub-backup-${timestamp}.json`);

        const backupData = {
            timestamp: new Date().toISOString(),
            database: this.database,
            metadata: {
                totalCommands: Object.values(this.database).reduce((total, commands) => total + commands.length, 0),
                version: '1.0'
            }
        };

        try {
            fs.writeFileSync(backupPath, JSON.stringify(backupData, null, 2), 'utf8');
            console.log(`✅ Sauvegarde créée: ${backupPath}`);
            return true;
        } catch (error) {
            console.error('❌ Erreur lors de la sauvegarde:', error.message);
            return false;
        }
    }

    // Restaurer depuis une sauvegarde
    restore(backupFile) {
        if (!fs.existsSync(backupFile)) {
            console.error(`❌ Fichier de sauvegarde non trouvé: ${backupFile}`);
            return false;
        }

        try {
            const backupData = JSON.parse(fs.readFileSync(backupFile, 'utf8'));
            
            if (!backupData.database) {
                throw new Error('Format de sauvegarde invalide');
            }

            this.database = backupData.database;
            
            if (this.saveDatabase()) {
                console.log(`✅ Base restaurée depuis: ${backupFile}`);
                if (backupData.metadata) {
                    console.log(`   Date: ${backupData.timestamp}`);
                    console.log(`   Commandes: ${backupData.metadata.totalCommands}`);
                }
                return true;
            }
        } catch (error) {
            console.error('❌ Erreur lors de la restauration:', error.message);
            return false;
        }
    }

    // Fusionner deux bases de données
    merge(otherDatabasePath) {
        if (!this.loadDatabase()) return false;

        if (!fs.existsSync(otherDatabasePath)) {
            console.error(`❌ Fichier non trouvé: ${otherDatabasePath}`);
            return false;
        }

        try {
            let otherDatabase;
            const content = fs.readFileSync(otherDatabasePath, 'utf8');
            
            // Essayer de parser comme JSON
            try {
                otherDatabase = JSON.parse(content);
            } catch {
                // Essayer d'extraire depuis un fichier JS
                const match = content.match(/const COMMANDHUB_DATABASE = ({[\s\S]*?});/);
                if (match) {
                    otherDatabase = JSON.parse(match[1]);
                } else {
                    throw new Error('Format non reconnu');
                }
            }

            let merged = 0;
            let skipped = 0;

            for (const [osType, commands] of Object.entries(otherDatabase)) {
                if (!this.database[osType]) {
                    this.database[osType] = [];
                }

                commands.forEach(newCmd => {
                    const exists = this.database[osType].some(existing => existing.name === newCmd.name);
                    if (!exists) {
                        this.database[osType].push(newCmd);
                        merged++;
                    } else {
                        skipped++;
                    }
                });
            }

            if (merged > 0) {
                this.saveDatabase();
            }

            console.log(`✅ Fusion terminée:`);
            console.log(`   ${merged} commandes ajoutées`);
            console.log(`   ${skipped} commandes ignorées (doublons)`);

            return true;
        } catch (error) {
            console.error('❌ Erreur lors de la fusion:', error.message);
            return false;
        }
    }

    // Afficher l'aide
    help() {
        console.log(`
🛠️  Script de maintenance CommandHub

Usage: node commandhub-maintenance.js <command> [options]

Commandes disponibles:
  validate              Valider la structure de la base de données
  stats                 Afficher les statistiques détaillées
  optimize              Optimiser et nettoyer la base de données
  backup                Créer une sauvegarde timestampée
  restore <file>        Restaurer depuis une sauvegarde
  merge <file>          Fusionner avec une autre base de données
  help                  Afficher cette aide

Exemples:
  node commandhub-maintenance.js validate
  node commandhub-maintenance.js backup
  node commandhub-maintenance.js restore backups/commandhub-backup-2024-01-01.json
  node commandhub-maintenance.js merge other-database.json

📁 Fichiers:
  Base principale: ${this.databasePath}
  Sauvegardes:     ${this.backupDir}/
        `);
    }
}

// Exécution du script
function main() {
    const args = process.argv.slice(2);
    const command = args[0];
    const maintenance = new CommandHubMaintenance();

    if (!command) {
        maintenance.help();
        process.exit(1);
    }

    let success = false;

    switch (command.toLowerCase()) {
        case 'validate':
            success = maintenance.validate();
            break;
        case 'stats':
            success = maintenance.stats();
            break;
        case 'optimize':
            success = maintenance.optimize();
            break;
        case 'backup':
            success = maintenance.backup();
            break;
        case 'restore':
            if (args[1]) {
                success = maintenance.restore(args[1]);
            } else {
                console.error('❌ Fichier de sauvegarde requis');
                console.log('Usage: node commandhub-maintenance.js restore <backup-file>');
            }
            break;
        case 'merge':
            if (args[1]) {
                success = maintenance.merge(args[1]);
            } else {
                console.error('❌ Fichier de base à fusionner requis');
                console.log('Usage: node commandhub-maintenance.js merge <database-file>');
            }
            break;
        case 'help':
        case '--help':
        case '-h':
            maintenance.help();
            success = true;
            break;
        default:
            console.error(`❌ Commande inconnue: ${command}`);
            maintenance.help();
            break;
    }

    process.exit(success ? 0 : 1);
}

// Exporter pour utilisation comme module
if (require.main === module) {
    main();
} else {
    module.exports = CommandHubMaintenance;
}