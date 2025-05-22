// Gestionnaire de raccourcis clavier pour SS64
// Fournit des raccourcis pratiques pour naviguer et utiliser l'interface

class KeyboardShortcuts {
    constructor() {
        this.shortcuts = new Map();
        this.isEnabled = true;
        this.helpVisible = false;
        
        this.initializeShortcuts();
        this.createHelpPanel();
        this.bindEvents();
        this.loadSettings();
    }

    // Initialiser les raccourcis par défaut
    initializeShortcuts() {
        // Raccourcis de navigation
        this.addShortcut('ctrl+k', 'Focus sur la recherche', () => {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        });

        this.addShortcut('escape', 'Effacer la recherche', () => {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = '';
                if (typeof performSearch === 'function') {
                    performSearch();
                }
                searchInput.focus();
            }
        });

        this.addShortcut('enter', 'Lancer la recherche', (e) => {
            if (e.target.id === 'searchInput' && typeof performSearch === 'function') {
                performSearch();
            }
        });

        // Raccourcis pour les OS
        this.addShortcut('ctrl+1', 'Tous les OS', () => {
            if (typeof selectOS === 'function') selectOS('all');
        });

        this.addShortcut('ctrl+2', 'Windows', () => {
            if (typeof selectOS === 'function') selectOS('windows');
        });

        this.addShortcut('ctrl+3', 'Linux', () => {
            if (typeof selectOS === 'function') selectOS('linux');
        });

        this.addShortcut('ctrl+4', 'macOS', () => {
            if (typeof selectOS === 'function') selectOS('macos');
        });

        this.addShortcut('ctrl+5', 'PowerShell', () => {
            if (typeof selectOS === 'function') selectOS('powershell');
        });

        // Raccourcis d'action
        this.addShortcut('ctrl+e', 'Exporter les résultats', () => {
            if (typeof exportResults === 'function') {
                exportResults();
            }
        });

        this.addShortcut('ctrl+b', 'Créer une sauvegarde', () => {
            if (typeof toggleBookmark === 'function') {
                showToast('💾 Sauvegarde créée', 'success');
            }
        });

        this.addShortcut('f1', 'Aide / Raccourcis', (e) => {
            e.preventDefault();
            this.toggleHelp();
        });

        this.addShortcut('ctrl+,', 'Panneau admin', () => {
            if (typeof toggleAdminPanel === 'function') {
                toggleAdminPanel();
            }
        });

        // Raccourcis de thème
        this.addShortcut('ctrl+shift+t', 'Thème suivant', () => {
            if (window.themeManager) {
                window.themeManager.nextTheme();
            }
        });

        this.addShortcut('ctrl+shift+r', 'Réinitialiser le thème', (e) => {
            e.preventDefault();
            if (window.themeManager) {
                window.themeManager.resetTheme();
            }
        });

        // Raccourcis pour les filtres
        this.addShortcut('ctrl+f', 'Basculer les filtres avancés', (e) => {
            e.preventDefault();
            if (typeof toggleAdvancedFilters === 'function') {
                toggleAdvancedFilters();
            }
        });

        // Navigation dans les résultats
        this.addShortcut('ctrl+up', 'Résultat précédent', (e) => {
            e.preventDefault();
            this.navigateResults(-1);
        });

        this.addShortcut('ctrl+down', 'Résultat suivant', (e) => {
            e.preventDefault();
            this.navigateResults(1);
        });

        // Copie rapide
        this.addShortcut('ctrl+shift+c', 'Copier la première syntaxe', () => {
            const firstSyntax = document.querySelector('.command-syntax');
            if (firstSyntax) {
                const text = firstSyntax.textContent.replace('Syntaxe :', '').trim();
                if (typeof copyToClipboard === 'function') {
                    copyToClipboard(text);
                }
            }
        });

        // Raccourcis numériques pour les commandes rapides
        for (let i = 1; i <= 9; i++) {
            this.addShortcut(`alt+${i}`, `Commande rapide ${i}`, () => {
                const quickCommands = document.querySelectorAll('.quick-command');
                if (quickCommands[i - 1]) {
                    quickCommands[i - 1].click();
                }
            });
        }
    }

    // Ajouter un raccourci
    addShortcut(combination, description, callback) {
        const key = this.normalizeKey(combination);
        this.shortcuts.set(key, {
            combination: combination,
            description: description,
            callback: callback,
            enabled: true
        });
    }

    // Supprimer un raccourci
    removeShortcut(combination) {
        const key = this.normalizeKey(combination);
        this.shortcuts.delete(key);
    }

    // Normaliser la combinaison de touches
    normalizeKey(combination) {
        return combination.toLowerCase()
            .replace(/\s+/g, '')
            .split('+')
            .sort()
            .join('+');
    }

    // Obtenir la représentation de l'événement clavier
    getEventKey(event) {
        const keys = [];
        
        if (event.ctrlKey) keys.push('ctrl');
        if (event.altKey) keys.push('alt');
        if (event.shiftKey) keys.push('shift');
        if (event.metaKey) keys.push('meta');
        
        const key = event.key.toLowerCase();
        if (!['control', 'alt', 'shift', 'meta'].includes(key)) {
            keys.push(key);
        }
        
        return keys.sort().join('+');
    }

    // Gestionnaire d'événements clavier
    handleKeyDown(event) {
        if (!this.isEnabled) return;
        
        // Ignorer si on est dans un champ de saisie (sauf certains raccourcis)
        const isInput = ['input', 'textarea', 'select'].includes(event.target.tagName.toLowerCase());
        const allowedInInput = ['escape', 'f1', 'ctrl+k'];
        
        const eventKey = this.getEventKey(event);
        
        if (isInput && !allowedInInput.some(allowed => this.normalizeKey(allowed) === eventKey)) {
            return;
        }
        
        const shortcut = this.shortcuts.get(eventKey);
        if (shortcut && shortcut.enabled) {
            try {
                shortcut.callback(event);
                this.showShortcutFeedback(shortcut.combination);
            } catch (error) {
                console.error('Erreur raccourci clavier:', error);
            }
        }
    }

    // Afficher un feedback visuel du raccourci utilisé
    showShortcutFeedback(combination) {
        const feedback = document.createElement('div');
        feedback.textContent = `⌨️ ${combination}`;
        feedback.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
            z-index: 10001;
            pointer-events: none;
            animation: shortcutFeedback 1s ease-out forwards;
        `;
        
        // Ajouter l'animation CSS si elle n'existe pas
        if (!document.getElementById('shortcut-animations')) {
            const style = document.createElement('style');
            style.id = 'shortcut-animations';
            style.textContent = `
                @keyframes shortcutFeedback {
                    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                    20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
                    100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(feedback);
        setTimeout(() => {
            if (document.body.contains(feedback)) {
                document.body.removeChild(feedback);
            }
        }, 1000);
    }

    // Créer le panneau d'aide
    createHelpPanel() {
        const helpPanel = document.createElement('div');
        helpPanel.id = 'shortcuts-help-panel';
        helpPanel.innerHTML = `
            <div style="
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(0, 0, 0, 0.7);
                z-index: 10000;
                display: none;
                align-items: center;
                justify-content: center;
                padding: 20px;
            " onclick="keyboardShortcuts.toggleHelp()">
                <div style="
                    background: white;
                    border-radius: 12px;
                    padding: 30px;
                    max-width: 600px;
                    width: 100%;
                    max-height: 80vh;
                    overflow-y: auto;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                " onclick="event.stopPropagation()">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h2 style="margin: 0; color: var(--primary-color);">⌨️ Raccourcis clavier</h2>
                        <button onclick="keyboardShortcuts.toggleHelp()" style="
                            background: none; border: none; font-size: 24px; cursor: pointer; color: #999;
                        ">×</button>
                    </div>
                    
                    <div id="shortcuts-list" style="display: grid; gap: 15px;">
                        ${this.generateShortcutsList()}
                    </div>
                    
                    <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #eee;">
                        <div style="display: flex; gap: 10px; justify-content: center;">
                            <button onclick="keyboardShortcuts.toggleShortcuts()" id="toggle-shortcuts-btn" style="
                                padding: 8px 16px; border: 1px solid var(--primary-color);
                                background: white; color: var(--primary-color); border-radius: 4px; cursor: pointer;
                            ">Désactiver les raccourcis</button>
                            <button onclick="keyboardShortcuts.resetShortcuts()" style="
                                padding: 8px 16px; border: 1px solid #6c757d;
                                background: white; color: #6c757d; border-radius: 4px; cursor: pointer;
                            ">Réinitialiser</button>
                            <button onclick="keyboardShortcuts.exportShortcuts()" style="
                                padding: 8px 16px; border: 1px solid var(--success-color);
                                background: white; color: var(--success-color); border-radius: 4px; cursor: pointer;
                            ">Exporter</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(helpPanel);
    }

    // Générer la liste des raccourcis pour l'aide
    generateShortcutsList() {
        const categories = {
            'Navigation': ['ctrl+k', 'escape', 'enter'],
            'Systèmes': ['ctrl+1', 'ctrl+2', 'ctrl+3', 'ctrl+4', 'ctrl+5'],
            'Actions': ['ctrl+e', 'ctrl+b', 'ctrl+f', 'ctrl+,'],
            'Thèmes': ['ctrl+shift+t', 'ctrl+shift+r'],
            'Résultats': ['ctrl+up', 'ctrl+down', 'ctrl+shift+c'],
            'Aide': ['f1']
        };

        let html = '';
        for (const [category, shortcuts] of Object.entries(categories)) {
            html += `<div style="margin-bottom: 20px;">
                <h4 style="margin: 0 0 10px 0; color: var(--primary-color); font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">${category}</h4>
                <div style="display: grid; gap: 8px;">`;
            
            shortcuts.forEach(shortcut => {
                const normalized = this.normalizeKey(shortcut);
                const config = this.shortcuts.get(normalized);
                if (config) {
                    html += `
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: #f8f9fa; border-radius: 4px;">
                            <span style="font-family: 'Courier New', monospace; background: #e9ecef; padding: 2px 8px; border-radius: 3px; font-size: 12px;">
                                ${config.combination.toUpperCase()}
                            </span>
                            <span style="margin-left: 15px;">${config.description}</span>
                        </div>
                    `;
                }
            });
            
            html += '</div></div>';
        }

        // Ajouter les raccourcis numériques
        html += `<div style="margin-bottom: 20px;">
            <h4 style="margin: 0 0 10px 0; color: var(--primary-color); font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Commandes rapides</h4>
            <div style="padding: 8px 12px; background: #f8f9fa; border-radius: 4px;">
                <span style="font-family: 'Courier New', monospace; background: #e9ecef; padding: 2px 8px; border-radius: 3px; font-size: 12px;">
                    ALT + 1-9
                </span>
                <span style="margin-left: 15px;">Exécuter les commandes rapides (1-9)</span>
            </div>
        </div>`;

        return html;
    }

    // Basculer l'affichage de l'aide
    toggleHelp() {
        const panel = document.getElementById('shortcuts-help-panel');
        if (panel) {
            this.helpVisible = !this.helpVisible;
            panel.style.display = this.helpVisible ? 'flex' : 'none';
            
            if (this.helpVisible) {
                // Mettre à jour la liste au cas où des raccourcis auraient changé
                document.getElementById('shortcuts-list').innerHTML = this.generateShortcutsList();
                this.updateToggleButton();
            }
        }
    }

    // Basculer l'activation des raccourcis
    toggleShortcuts() {
        this.isEnabled = !this.isEnabled;
        this.saveSettings();
        this.updateToggleButton();
        
        const status = this.isEnabled ? 'activés' : 'désactivés';
        if (typeof showToast === 'function') {
            showToast(`⌨️ Raccourcis ${status}`, 'info');
        }
    }

    // Mettre à jour le bouton de basculement
    updateToggleButton() {
        const btn = document.getElementById('toggle-shortcuts-btn');
        if (btn) {
            btn.textContent = this.isEnabled ? 'Désactiver les raccourcis' : 'Activer les raccourcis';
            btn.style.color = this.isEnabled ? 'var(--danger-color)' : 'var(--success-color)';
            btn.style.borderColor = this.isEnabled ? 'var(--danger-color)' : 'var(--success-color)';
        }
    }

    // Naviguer dans les résultats
    navigateResults(direction) {
        const results = document.querySelectorAll('.command-result');
        if (results.length === 0) return;

        let current = document.querySelector('.command-result.highlighted');
        let index = 0;

        if (current) {
            index = Array.from(results).indexOf(current);
            current.classList.remove('highlighted');
            index += direction;
        }

        // Boucler si nécessaire
        if (index < 0) index = results.length - 1;
        if (index >= results.length) index = 0;

        const target = results[index];
        if (target) {
            target.classList.add('highlighted');
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Ajouter un style pour la surbrillance si il n'existe pas
            if (!document.getElementById('navigation-highlight-style')) {
                const style = document.createElement('style');
                style.id = 'navigation-highlight-style';
                style.textContent = `
                    .command-result.highlighted {
                        border-left: 6px solid var(--warning-color) !important;
                        box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3) !important;
                        transform: translateY(-2px) !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    }

    // Réinitialiser les raccourcis
    resetShortcuts() {
        this.shortcuts.clear();
        this.initializeShortcuts();
        this.saveSettings();
        
        if (typeof showToast === 'function') {
            showToast('⌨️ Raccourcis réinitialisés', 'success');
        }
        
        // Mettre à jour l'affichage si l'aide est ouverte
        if (this.helpVisible) {
            document.getElementById('shortcuts-list').innerHTML = this.generateShortcutsList();
        }
    }

    // Exporter les raccourcis
    exportShortcuts() {
        const config = {
            shortcuts: Array.from(this.shortcuts.entries()).map(([key, config]) => ({
                key: key,
                combination: config.combination,
                description: config.description,
                enabled: config.enabled
            })),
            settings: {
                enabled: this.isEnabled
            },
            exported: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ss64-shortcuts-config.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        if (typeof showToast === 'function') {
            showToast('⌨️ Configuration exportée', 'success');
        }
    }

    // Sauvegarder les paramètres
    saveSettings() {
        const settings = {
            enabled: this.isEnabled,
            customShortcuts: Array.from(this.shortcuts.entries())
                .filter(([key, config]) => config.custom)
                .map(([key, config]) => ({
                    key: key,
                    combination: config.combination,
                    description: config.description
                }))
        };
        
        localStorage.setItem('ss64ShortcutsSettings', JSON.stringify(settings));
    }

    // Charger les paramètres
    loadSettings() {
        try {
            const saved = localStorage.getItem('ss64ShortcutsSettings');
            if (saved) {
                const settings = JSON.parse(saved);
                this.isEnabled = settings.enabled !== false; // Par défaut activé
                
                // Charger les raccourcis personnalisés
                if (settings.customShortcuts) {
                    settings.customShortcuts.forEach(shortcut => {
                        // Ajouter les raccourcis personnalisés
                        this.shortcuts.set(shortcut.key, {
                            combination: shortcut.combination,
                            description: shortcut.description,
                            callback: () => {}, // Callback par défaut
                            enabled: true,
                            custom: true
                        });
                    });
                }
            }
        } catch (error) {
            console.warn('Erreur chargement paramètres raccourcis:', error);
        }
    }

    // Lier les événements
    bindEvents() {
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        
        // Nettoyer la surbrillance lors du clic
        document.addEventListener('click', () => {
            const highlighted = document.querySelector('.command-result.highlighted');
            if (highlighted) {
                highlighted.classList.remove('highlighted');
            }
        });
    }
}

// Auto-initialisation
let keyboardShortcuts;
document.addEventListener('DOMContentLoaded', function() {
    keyboardShortcuts = new KeyboardShortcuts();
    
    // Ajouter un indicateur visuel dans l'interface
    const indicator = document.createElement('div');
    indicator.innerHTML = '⌨️ F1';
    indicator.title = 'Appuyez sur F1 pour voir les raccourcis clavier';
    indicator.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 6px 10px;
        border-radius: 15px;
        font-size: 12px;
        z-index: 1000;
        cursor: pointer;
        transition: all 0.3s;
        opacity: 0.7;
    `;
    
    indicator.onmouseover = () => { indicator.style.opacity = '1'; };
    indicator.onmouseout = () => { indicator.style.opacity = '0.7'; };
    indicator.onclick = () => keyboardShortcuts.toggleHelp();
    
    document.body.appendChild(indicator);
});

// Export pour utilisation externe
if (typeof window !== 'undefined') {
    window.KeyboardShortcuts = KeyboardShortcuts;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = KeyboardShortcuts;
}