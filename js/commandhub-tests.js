// Tests automatisés pour la base de données CommandHub
// Usage: node commandhub-tests.js ou npm test

const fs = require('fs');
const path = require('path');

class CommandHubTests {
    constructor() {
        this.testResults = {
            passed: 0,
            failed: 0,
            total: 0,
            failures: []
        };
        this.database = null;
    }

    // Charger la base de données pour les tests
    loadDatabase() {
        try {
            const dbPath = path.join(__dirname, 'js', 'commandhub-database.js');
            const content = fs.readFileSync(dbPath, 'utf8');
            const match = content.match(/const COMMANDHUB_DATABASE = ({[\s\S]*?});/);
            if (match) {
                this.database = JSON.parse(match[1]);
                return true;
            }
            throw new Error('Format de base invalide');
        } catch (error) {
            this.fail('Chargement base de données', error.message);
            return false;
        }
    }

    // Méthodes utilitaires pour les tests
    pass(testName) {
        this.testResults.passed++;
        this.testResults.total++;
        console.log(`✅ ${testName}`);
    }

    fail(testName, message) {
        this.testResults.failed++;
        this.testResults.total++;
        this.testResults.failures.push({ test: testName, message });
        console.log(`❌ ${testName}: ${message}`);
    }

    assert(condition, testName, message = 'Assertion failed') {
        if (condition) {
            this.pass(testName);
        } else {
            this.fail(testName, message);
        }
    }

    assertEqual(actual, expected, testName) {
        if (actual === expected) {
            this.pass(testName);
        } else {
            this.fail(testName, `Expected "${expected}", got "${actual}"`);
        }
    }

    // Tests de structure de base
    testDatabaseStructure() {
        console.log('\n📋 Tests de structure de base');
        
        this.assert(
            this.database !== null,
            'Base de données chargée',
            'Base de données non chargée'
        );

        this.assert(
            typeof this.database === 'object',
            'Base de données est un objet'
        );

        const expectedOS = ['windows', 'linux', 'macos', 'powershell'];
        expectedOS.forEach(os => {
            this.assert(
                this.database.hasOwnProperty(os),
                `OS ${os} présent dans la base`
            );
            
            if (this.database[os]) {
                this.assert(
                    Array.isArray(this.database[os]),
                    `${os} est un tableau`
                );
            }
        });
    }

    // Tests de cohérence des commandes
    testCommandConsistency() {
        console.log('\n🔍 Tests de cohérence des commandes');
        
        for (const [osType, commands] of Object.entries(this.database)) {
            if (!Array.isArray(commands)) continue;
            
            const commandNames = new Set();
            
            commands.forEach((cmd, index) => {
                const testPrefix = `${osType}[${index}]`;
                
                // Test des champs requis
                const requiredFields = ['name', 'description', 'syntax', 'examples'];
                requiredFields.forEach(field => {
                    this.assert(
                        cmd.hasOwnProperty(field),
                        `${testPrefix} a le champ '${field}'`,
                        `Champ manquant: ${field}`
                    );
                });

                // Test des types de données
                if (cmd.name) {
                    this.assert(
                        typeof cmd.name === 'string' && cmd.name.length > 0,
                        `${testPrefix} nom valide`,
                        'Le nom doit être une chaîne non vide'
                    );

                    // Test de doublons
                    this.assert(
                        !commandNames.has(cmd.name),
                        `${testPrefix} nom unique`,
                        `Doublon détecté: ${cmd.name}`
                    );
                    commandNames.add(cmd.name);
                }

                if (cmd.description) {
                    this.assert(
                        typeof cmd.description === 'string' && cmd.description.length > 10,
                        `${testPrefix} description valide`,
                        'Description trop courte (< 10 caractères)'
                    );
                }

                if (cmd.syntax) {
                    this.assert(
                        typeof cmd.syntax === 'string' && cmd.syntax.length > 0,
                        `${testPrefix} syntaxe valide`
                    );
                }

                if (cmd.examples) {
                    this.assert(
                        Array.isArray(cmd.examples),
                        `${testPrefix} exemples est un tableau`
                    );

                    this.assert(
                        cmd.examples.length > 0,
                        `${testPrefix} a des exemples`,
                        'Aucun exemple fourni'
                    );
                }
            });
        }
    }

    // Tests de qualité du contenu
    testContentQuality() {
        console.log('\n⭐ Tests de qualité du contenu');
        
        for (const [osType, commands] of Object.entries(this.database)) {
            if (!Array.isArray(commands)) continue;
            
            commands.forEach((cmd, index) => {
                const testPrefix = `${osType}[${index}] ${cmd.name}`;
                
                // Test de la longueur des descriptions
                if (cmd.description) {
                    this.assert(
                        cmd.description.length >= 20,
                        `${testPrefix} description suffisante`,
                        `Description trop courte: ${cmd.description.length} caractères`
                    );

                    this.assert(
                        cmd.description.length <= 500,
                        `${testPrefix} description pas trop longue`,
                        `Description trop longue: ${cmd.description.length} caractères`
                    );
                }

                // Test de la syntaxe
                if (cmd.syntax && cmd.name) {
                    this.assert(
                        cmd.syntax.toLowerCase().includes(cmd.name.toLowerCase()),
                        `${testPrefix} syntaxe contient le nom de la commande`
                    );
                }

                // Test des exemples
                if (cmd.examples && cmd.examples.length > 0) {
                    const hasRelevantExample = cmd.examples.some(ex => 
                        ex.toLowerCase().includes(cmd.name.toLowerCase())
                    );
                    this.assert(
                        hasRelevantExample,
                        `${testPrefix} a un exemple pertinent`
                    );

                    // Test de la longueur des exemples
                    cmd.examples.forEach((example, exIndex) => {
                        this.assert(
                            example.length >= 3 && example.length <= 100,
                            `${testPrefix} exemple ${exIndex + 1} longueur valide`,
                            `Exemple trop court/long: "${example}"`
                        );
                    });
                }
            });
        }
    }

    // Tests de performance
    testPerformance() {
        console.log('\n⚡ Tests de performance');
        
        const startTime = Date.now();
        let totalCommands = 0;
        
        for (const commands of Object.values(this.database)) {
            if (Array.isArray(commands)) {
                totalCommands += commands.length;
            }
        }
        
        const loadTime = Date.now() - startTime;
        
        this.assert(
            loadTime < 100,
            'Chargement rapide de la base',
            `Temps de chargement: ${loadTime}ms`
        );

        this.assert(
            totalCommands >= 50,
            'Nombre suffisant de commandes',
            `Seulement ${totalCommands} commandes trouvées`
        );

        // Test de la taille de la base
        const dbPath = path.join(__dirname, 'js', 'commandhub-database.js');
        const stats = fs.statSync(dbPath);
        const sizeKB = Math.round(stats.size / 1024);
        
        this.assert(
            sizeKB < 500,
            'Taille de fichier raisonnable',
            `Taille: ${sizeKB}KB (limite: 500KB)`
        );

        console.log(`📊 Métriques: ${totalCommands} commandes, ${sizeKB}KB, ${loadTime}ms`);
    }

    // Tests de compatibilité
    testCompatibility() {
        console.log('\n🌐 Tests de compatibilité');
        
        // Test de sérialisation JSON
        try {
            const jsonString = JSON.stringify(this.database);
            const parsed = JSON.parse(jsonString);
            this.pass('Sérialisation JSON');
        } catch (error) {
            this.fail('Sérialisation JSON', error.message);
        }

        // Test des caractères spéciaux
        for (const [osType, commands] of Object.entries(this.database)) {
            if (!Array.isArray(commands)) continue;
            
            commands.forEach((cmd, index) => {
                if (cmd.description) {
                    const hasControlChars = /[\x00-\x1F\x7F]/.test(cmd.description);
                    this.assert(
                        !hasControlChars,
                        `${osType}[${index}] ${cmd.name} description sans caractères de contrôle`
                    );
                }
            });
        }
    }

    // Tests de recherche simulée
    testSearchSimulation() {
        console.log('\n🔍 Tests de simulation de recherche');
        
        const testQueries = ['ping', 'ls', 'get', 'copy', 'find'];
        
        testQueries.forEach(query => {
            let resultsFound = 0;
            
            for (const [osType, commands] of Object.entries(this.database)) {
                if (!Array.isArray(commands)) continue;
                
                commands.forEach(cmd => {
                    if (cmd.name && cmd.name.toLowerCase().includes(query.toLowerCase())) {
                        resultsFound++;
                    }
                });
            }
            
            this.assert(
                resultsFound > 0,
                `Recherche "${query}" trouve des résultats`,
                `Aucun résultat pour "${query}"`
            );
        });
    }

    // Tests de régression
    testRegression() {
        console.log('\n🛡️ Tests de régression');
        
        // Commandes essentielles qui doivent toujours être présentes
        const essentialCommands = {
            windows: ['ping', 'ipconfig', 'dir'],
            linux: ['ls', 'grep', 'find'],
            macos: ['ls', 'find'],
            powershell: ['Get-Process', 'Get-Service']
        };

        for (const [osType, essential] of Object.entries(essentialCommands)) {
            if (!this.database[osType]) continue;
            
            essential.forEach(cmdName => {
                const found = this.database[osType].some(cmd => 
                    cmd.name.toLowerCase() === cmdName.toLowerCase()
                );
                this.assert(
                    found,
                    `Commande essentielle présente: ${osType}/${cmdName}`
                );
            });
        }
    }

    // Exécuter tous les tests
    runAllTests() {
        console.log('🧪 Démarrage des tests CommandHub\n');
        
        if (!this.loadDatabase()) {
            return false;
        }

        this.testDatabaseStructure();
        this.testCommandConsistency();
        this.testContentQuality();
        this.testPerformance();
        this.testCompatibility();
        this.testSearchSimulation();
        this.testRegression();

        this.printResults();
        return this.testResults.failed === 0;
    }

    // Afficher les résultats finaux
    printResults() {
        console.log('\n' + '='.repeat(50));
        console.log('📊 RÉSULTATS DES TESTS');
        console.log('='.repeat(50));
        
        console.log(`✅ Tests réussis: ${this.testResults.passed}`);
        console.log(`❌ Tests échoués: ${this.testResults.failed}`);
        console.log(`📋 Total: ${this.testResults.total}`);
        
        const successRate = ((this.testResults.passed / this.testResults.total) * 100).toFixed(1);
        console.log(`📈 Taux de réussite: ${successRate}%`);

        if (this.testResults.failed > 0) {
            console.log('\n🚨 ÉCHECS DÉTAILLÉS:');
            this.testResults.failures.forEach((failure, index) => {
                console.log(`${index + 1}. ${failure.test}: ${failure.message}`);
            });
        }

        const status = this.testResults.failed === 0 ? '✅ SUCCÈS' : '❌ ÉCHEC';
        console.log(`\n🏁 Statut final: ${status}`);
    }
}

// Exécution des tests
if (require.main === module) {
    const tester = new CommandHubTests();
    const success = tester.runAllTests();
    process.exit(success ? 0 : 1);
}

module.exports = CommandHubTests;