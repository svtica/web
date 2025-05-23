// Script d'extraction complète de la base de données SS64
// À exécuter dans Node.js pour traiter tous les fichiers HTML

const fs = require('fs').promises;
const path = require('path');
const { JSDOM } = require('jsdom');

class SS64CompleteExtractor {
    constructor(ss64Path) {
        this.ss64Path = ss64Path;
        this.database = {
            windows: [],
            linux: [],
            macos: [],
            powershell: [],
            access: []
        };
        
        this.osMapping = {
            'nt': 'windows',
            'bash': 'linux', 
            'osx': 'macos',
            'ps': 'powershell',
            'access': 'access'
        };
    }

    async extractAll() {
        console.log('🚀 Extraction complète SS64...');
        
        try {
            // Traiter chaque dossier OS
            for (const [folder, osName] of Object.entries(this.osMapping)) {
                const folderPath = path.join(this.ss64Path, folder);
                
                try {
                    const stats = await fs.stat(folderPath);
                    if (stats.isDirectory()) {
                        console.log(`📁 Traitement ${folder} -> ${osName}`);
                        await this.processOSFolder(folderPath, osName);
                    }
                } catch (error) {
                    console.log(`⚠️ Dossier ${folder} non trouvé, ignoré`);
                }
            }
            
            this.showStats();
            return this.database;
            
        } catch (error) {
            console.error('❌ Erreur extraction:', error);
            throw error;
        }
    }

    async processOSFolder(folderPath, osName) {
        try {
            const files = await fs.readdir(folderPath);
            const htmlFiles = files.filter(f => f.endsWith('.html') && f !== 'index.html');
            
            console.log(`   📄 ${htmlFiles.length} fichiers HTML trouvés`);
            
            for (const file of htmlFiles) {
                const filePath = path.join(folderPath, file);
                await this.processHTMLFile(filePath, osName);
            }
            
        } catch (error) {
            console.error(`❌ Erreur dossier ${osName}:`, error.message);
        }
    }

    async processHTMLFile(filePath, osName) {
        try {
            const html = await fs.readFile(filePath, 'utf8');
            const commandName = path.basename(filePath, '.html');
            
            const commandInfo = this.extractCommandFromHTML(html, commandName, osName);
            
            if (commandInfo) {
                this.database[osName].push(commandInfo);
            }
            
        } catch (error) {
            console.error(`❌ Erreur fichier ${filePath}:`, error.message);
        }
    }

    extractCommandFromHTML(html, commandName, osName) {
        try {
            const dom = new JSDOM(html);
            const doc = dom.window.document;
            
            // Extraire le titre et la description
            const title = doc.querySelector('title')?.textContent || '';
            const description = this.extractDescription(doc, title);
            
            // Extraire la syntaxe
            const syntax = this.extractSyntax(doc, commandName);
            
            // Extraire les exemples
            const examples = this.extractExamples(doc, commandName);
            
            return {
                name: commandName,
                description: description,
                syntax: syntax,
                examples: examples
            };
            
        } catch (error) {
            console.error(`❌ Erreur parsing ${commandName}:`, error.message);
            return null;
        }
    }

    extractDescription(doc, title) {
        // Chercher la description dans différents endroits possibles
        const selectors = [
            'p:first-of-type',
            '.description',
            'blockquote p',
            'h2 + p',
            'h3 + p'
        ];
        
        let description = '';
        
        for (const selector of selectors) {
            const element = doc.querySelector(selector);
            if (element) {
                description = element.textContent.trim();
                if (description.length > 20) break;
            }
        }
        
        // Si rien trouvé, utiliser le titre
        if (!description && title) {
            const titleParts = title.split(' - ');
            description = titleParts.length > 1 ? titleParts[1] : titleParts[0];
        }
        
        return this.cleanText(description);
    }

    extractSyntax(doc, commandName) {
        // Patterns de recherche pour la syntaxe
        const syntaxPatterns = [
            'Syntax',
            'SYNTAX', 
            'Synopsis',
            'Usage',
            'Format'
        ];
        
        let syntax = '';
        
        // Chercher par texte de header
        for (const pattern of syntaxPatterns) {
            const headers = doc.querySelectorAll('h2, h3, h4, b, strong');
            for (const header of headers) {
                if (header.textContent.includes(pattern)) {
                    const nextElement = header.nextElementSibling;
                    if (nextElement) {
                        syntax = nextElement.textContent.trim();
                        if (syntax) break;
                    }
                }
            }
            if (syntax) break;
        }
        
        // Chercher dans les blocs de code
        if (!syntax) {
            const codeBlocks = doc.querySelectorAll('pre, code, .code, .syntax');
            for (const block of codeBlocks) {
                const text = block.textContent.trim();
                if (text.includes(commandName) && text.length < 200) {
                    syntax = text;
                    break;
                }
            }
        }
        
        // Syntaxe par défaut
        if (!syntax) {
            syntax = `${commandName} [options]`;
        }
        
        return this.cleanText(syntax);
    }

    extractExamples(doc, commandName) {
        const examples = [];
        
        // Chercher les sections d'exemples
        const exampleHeaders = doc.querySelectorAll('h2, h3, h4, b, strong');
        
        for (const header of exampleHeaders) {
            const headerText = header.textContent.toLowerCase();
            if (headerText.includes('example') || headerText.includes('exemple')) {
                
                let current = header.nextElementSibling;
                while (current && examples.length < 5) {
                    
                    // Si on trouve un autre header, on s'arrête
                    if (current.tagName && current.tagName.match(/^H[1-6]$/)) {
                        break;
                    }
                    
                    const text = current.textContent?.trim();
                    if (text && text.includes(commandName) && text.length < 100) {
                        examples.push(this.cleanText(text));
                    }
                    
                    current = current.nextElementSibling;
                }
                
                if (examples.length > 0) break;
            }
        }
        
        // Chercher dans les blocs de code
        if (examples.length === 0) {
            const codeBlocks = doc.querySelectorAll('pre, code, .example, .code');
            for (const block of codeBlocks) {
                const lines = block.textContent.split('\n');
                for (const line of lines) {
                    const cleanLine = line.trim();
                    if (cleanLine.startsWith(commandName) && cleanLine.length < 100) {
                        examples.push(cleanLine);
                        if (examples.length >= 3) break;
                    }
                }
                if (examples.length >= 3) break;
            }
        }
        
        // Exemples par défaut
        if (examples.length === 0) {
            examples.push(commandName);
            examples.push(`${commandName} --help`);
        }
        
        return examples;
    }

    cleanText(text) {
        return text
            .replace(/\s+/g, ' ')
            .replace(/[\r\n]+/g, ' ')
            .trim()
            .substring(0, 500); // Limiter la longueur
    }

    showStats() {
        console.log('\n📊 Statistiques d\'extraction:');
        let total = 0;
        for (const [os, commands] of Object.entries(this.database)) {
            const count = commands.length;
            total += count;
            console.log(`   ${os}: ${count} commandes`);
        }
        console.log(`   Total: ${total} commandes`);
    }

    async saveDatabase(outputPath) {
        const jsContent = this.generateJSDatabase();
        await fs.writeFile(outputPath, jsContent, 'utf8');
        console.log(`💾 Base sauvegardée: ${outputPath}`);
    }

    generateJSDatabase() {
        const timestamp = new Date().toISOString();
        const total = Object.values(this.database).reduce((sum, cmds) => sum + cmds.length, 0);
        
        return `// Base de données SS64 - Extraction automatique complète
// Date de génération: ${timestamp}
// Total des commandes: ${total}

const SS64_DATABASE = ${JSON.stringify(this.database, null, 2)};

// Export pour utilisation dans les modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SS64_DATABASE;
}

// Disponible globalement dans le navigateur
if (typeof window !== 'undefined') {
    window.SS64_DATABASE = SS64_DATABASE;
}

// Statistiques de la base de données
const STATS = {
    totalCommands: Object.values(SS64_DATABASE).reduce((total, commands) => total + commands.length, 0),
    byOS: Object.fromEntries(
        Object.entries(SS64_DATABASE).map(([os, commands]) => [os, commands.length])
    ),
    generated: '${timestamp}'
};

console.log('📊 Base de données SS64 chargée:');
console.log(\`   Total: \${STATS.totalCommands} commandes\`);
Object.entries(STATS.byOS).forEach(([os, count]) => {
    console.log(\`   \${os}: \${count} commandes\`);
});
`;
    }
}

// Script principal
async function main() {
    const ss64Path = '../webtools/ss64';
    const outputPath = './js/ss64-database.js';
    
    console.log('🎯 Extraction complète SS64');
    console.log(`📁 Source: ${ss64Path}`);
    console.log(`💾 Sortie: ${outputPath}`);
    
    try {
        const extractor = new SS64CompleteExtractor(ss64Path);
        const database = await extractor.extractAll();
        await extractor.saveDatabase(outputPath);
        
        console.log('✅ Extraction terminée avec succès!');
        
    } catch (error) {
        console.error('❌ Erreur:', error);
        process.exit(1);
    }
}

// Exécuter
main();
