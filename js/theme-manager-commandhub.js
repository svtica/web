// Gestionnaire de thèmes pour CommandHub
// Permet de basculer entre différents thèmes visuels

class ThemeManager {
    constructor() {
        this.currentTheme = 'default';
        this.themes = {
            default: {
                name: 'Défaut',
                description: 'Thème par défaut avec dégradés bleus',
                colors: {
                    primary: '#667eea',
                    secondary: '#764ba2',
                    success: '#28a745',
                    warning: '#ffc107',
                    danger: '#dc3545',
                    info: '#17a2b8',
                    light: '#f8f9fa',
                    dark: '#343a40'
                }
            },
            dark: {
                name: 'Sombre',
                description: 'Mode sombre pour une utilisation prolongée',
                colors: {
                    primary: '#6c63ff',
                    secondary: '#3c4142',
                    success: '#00d084',
                    warning: '#ffb400',
                    danger: '#ff5722',
                    info: '#00bcd4',
                    light: '#2c3e50',
                    dark: '#1a1a1a'
                },
                bodyBackground: 'linear-gradient(135deg, #2c3e50 0%, #3c4142 100%)',
                containerBackground: '#34495e',
                textColor: '#ecf0f1',
                borderColor: '#4a5568'
            },
            ocean: {
                name: 'Océan',
                description: 'Thème bleu océan apaisant',
                colors: {
                    primary: '#0077be',
                    secondary: '#005580',
                    success: '#00a86b',
                    warning: '#ff8c00',
                    danger: '#e74c3c',
                    info: '#3498db',
                    light: '#ecf8ff',
                    dark: '#2c5aa0'
                },
                bodyBackground: 'linear-gradient(135deg, #0077be 0%, #005580 100%)'
            },
            forest: {
                name: 'Forêt',
                description: 'Thème vert nature et écologique',
                colors: {
                    primary: '#2d5016',
                    secondary: '#3d6b1e',
                    success: '#52c41a',
                    warning: '#faad14',
                    danger: '#ff4d4f',
                    info: '#1890ff',
                    light: '#f6ffed',
                    dark: '#1c3a0d'
                },
                bodyBackground: 'linear-gradient(135deg, #2d5016 0%, #3d6b1e 100%)'
            },
            sunset: {
                name: 'Coucher de soleil',
                description: 'Thème chaleureux orange et rouge',
                colors: {
                    primary: '#ff6b35',
                    secondary: '#d84315',
                    success: '#4caf50',
                    warning: '#ff9800',
                    danger: '#f44336',
                    info: '#2196f3',
                    light: '#fff3e0',
                    dark: '#bf360c'
                },
                bodyBackground: 'linear-gradient(135deg, #ff6b35 0%, #d84315 100%)'
            },
            purple: {
                name: 'Violet',
                description: 'Thème moderne violet et magenta',
                colors: {
                    primary: '#9c27b0',
                    secondary: '#673ab7',
                    success: '#4caf50',
                    warning: '#ff9800',
                    danger: '#f44336',
                    info: '#2196f3',
                    light: '#f3e5f5',
                    dark: '#4a148c'
                },
                bodyBackground: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)'
            },
            monochrome: {
                name: 'Monochrome',
                description: 'Style minimaliste noir et blanc',
                colors: {
                    primary: '#333333',
                    secondary: '#666666',
                    success: '#555555',
                    warning: '#777777',
                    danger: '#000000',
                    info: '#444444',
                    light: '#f5f5f5',
                    dark: '#222222'
                },
                bodyBackground: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                containerBackground: '#ffffff',
                textColor: '#333333'
            },
            cyberpunk: {
                name: 'Cyberpunk',
                description: 'Thème futuriste néon et sombre',
                colors: {
                    primary: '#00ff41',
                    secondary: '#ff0080',
                    success: '#00ff87',
                    warning: '#ffff00',
                    danger: '#ff0040',
                    info: '#00ffff',
                    light: '#0a0a0a',
                    dark: '#000000'
                },
                bodyBackground: 'linear-gradient(135deg, #0a0a0a 0%, #1a0033 100%)',
                containerBackground: '#111111',
                textColor: '#00ff41',
                borderColor: '#00ff41',
                customCSS: `
                    .container {
                        border: 2px solid #00ff41;
                        box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
                    }
                    .command-result {
                        background: rgba(0, 255, 65, 0.05);
                        border: 1px solid rgba(0, 255, 65, 0.2);
                    }
                    .search-input {
                        background: #000000;
                        color: #00ff41;
                        border: 2px solid #00ff41;
                    }
                `
            }
        };
        
        this.loadSavedTheme();
        this.createThemeSelector();
    }

    // Charger le thème sauvegardé
    loadSavedTheme() {
        const saved = localStorage.getItem('commandhubTheme');
        if (saved && this.themes[saved]) {
            this.currentTheme = saved;
        }
        this.applyTheme(this.currentTheme);
    }

    // Sauvegarder le thème actuel
    saveTheme() {
        localStorage.setItem('commandhubTheme', this.currentTheme);
    }

    // Appliquer un thème
    applyTheme(themeName) {
        if (!this.themes[themeName]) {
            console.warn(`Thème inconnu: ${themeName}`);
            return;
        }

        const theme = this.themes[themeName];
        this.currentTheme = themeName;

        // Supprimer l'ancien style personnalisé
        const existingStyle = document.getElementById('theme-custom-styles');
        if (existingStyle) {
            existingStyle.remove();
        }

        // Créer le nouveau style
        const style = document.createElement('style');
        style.id = 'theme-custom-styles';
        
        let css = `
            :root {
                --primary-color: ${theme.colors.primary};
                --secondary-color: ${theme.colors.secondary};
                --success-color: ${theme.colors.success};
                --warning-color: ${theme.colors.warning};
                --danger-color: ${theme.colors.danger};
                --info-color: ${theme.colors.info};
                --light-color: ${theme.colors.light};
                --dark-color: ${theme.colors.dark};
            }
        `;

        if (theme.bodyBackground) {
            css += `
                body {
                    background: ${theme.bodyBackground} !important;
                }
            `;
        }

        if (theme.containerBackground) {
            css += `
                .container {
                    background: ${theme.containerBackground} !important;
                }
            `;
        }

        if (theme.textColor) {
            css += `
                body, .container, h1, h2, h3, h4, h5, h6, p, div, span {
                    color: ${theme.textColor} !important;
                }
                .command-description, .stats-info {
                    color: ${theme.textColor} !important;
                }
            `;
        }

        if (theme.borderColor) {
            css += `
                .container, .search-section, .command-result, .quick-access {
                    border-color: ${theme.borderColor} !important;
                }
            `;
        }

        if (theme.customCSS) {
            css += theme.customCSS;
        }

        style.textContent = css;
        document.head.appendChild(style);

        this.saveTheme();
        this.updateThemeSelector();
        
        // Déclencher un événement personnalisé
        window.dispatchEvent(new CustomEvent('themeChanged', { 
            detail: { theme: themeName, config: theme } 
        }));
    }

    // Créer le sélecteur de thème
    createThemeSelector() {
        // Vérifier si le sélecteur existe déjà
        if (document.getElementById('theme-selector')) {
            return;
        }

        const selector = document.createElement('div');
        selector.id = 'theme-selector';
        selector.innerHTML = `
            <div style="
                position: fixed;
                top: 70px;
                right: 20px;
                background: white;
                border: 2px solid var(--primary-color);
                border-radius: 8px;
                padding: 15px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                z-index: 9999;
                min-width: 200px;
                display: none;
            " id="theme-panel">
                <h4 style="margin: 0 0 15px 0; color: var(--primary-color);">🎨 Thèmes CommandHub</h4>
                <div id="theme-options">
                    ${Object.entries(this.themes).map(([key, theme]) => `
                        <div class="theme-option" data-theme="${key}" style="
                            padding: 8px 12px;
                            margin: 5px 0;
                            border-radius: 4px;
                            cursor: pointer;
                            border: 1px solid #ddd;
                            transition: all 0.3s;
                            ${key === this.currentTheme ? 'background: var(--primary-color); color: white;' : ''}
                        ">
                            <strong>${theme.name}</strong><br>
                            <small style="opacity: 0.7;">${theme.description}</small>
                        </div>
                    `).join('')}
                </div>
                <div style="margin-top: 15px; display: flex; gap: 5px;">
                    <button onclick="themeManager.resetTheme()" style="
                        flex: 1; padding: 6px 12px; border: 1px solid #ddd;
                        background: white; border-radius: 4px; cursor: pointer;
                    ">Reset</button>
                    <button onclick="themeManager.exportTheme()" style="
                        flex: 1; padding: 6px 12px; border: 1px solid #ddd;
                        background: white; border-radius: 4px; cursor: pointer;
                    ">Export</button>
                </div>
            </div>
            <button id="theme-toggle" style="
                position: fixed;
                top: 20px;
                right: 70px;
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 6px;
                cursor: pointer;
                font-size: 14px;
                z-index: 10000;
                transition: all 0.3s;
            " title="Changer de thème">🎨</button>
        `;

        document.body.appendChild(selector);

        // Événements
        document.getElementById('theme-toggle').onclick = () => {
            const panel = document.getElementById('theme-panel');
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        };

        // Cliquer à l'extérieur pour fermer
        document.addEventListener('click', (e) => {
            const panel = document.getElementById('theme-panel');
            const toggle = document.getElementById('theme-toggle');
            if (!panel.contains(e.target) && e.target !== toggle) {
                panel.style.display = 'none';
            }
        });

        // Options de thème
        document.querySelectorAll('.theme-option').forEach(option => {
            option.onclick = () => {
                const themeName = option.dataset.theme;
                this.applyTheme(themeName);
                document.getElementById('theme-panel').style.display = 'none';
            };
        });
    }

    // Mettre à jour le sélecteur de thème
    updateThemeSelector() {
        document.querySelectorAll('.theme-option').forEach(option => {
            const themeName = option.dataset.theme;
            if (themeName === this.currentTheme) {
                option.style.background = 'var(--primary-color)';
                option.style.color = 'white';
            } else {
                option.style.background = 'white';
                option.style.color = 'inherit';
            }
        });
    }

    // Réinitialiser au thème par défaut
    resetTheme() {
        this.applyTheme('default');
        showToast('🎨 Thème réinitialisé', 'success');
    }

    // Exporter la configuration du thème actuel
    exportTheme() {
        const config = {
            name: this.currentTheme,
            theme: this.themes[this.currentTheme],
            exported: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `commandhub-theme-${this.currentTheme}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast('🎨 Thème exporté', 'success');
    }

    // Importer un thème personnalisé
    importTheme(themeConfig) {
        try {
            if (themeConfig.name && themeConfig.theme) {
                this.themes[themeConfig.name] = themeConfig.theme;
                this.applyTheme(themeConfig.name);
                this.recreateThemeSelector();
                showToast(`🎨 Thème "${themeConfig.theme.name}" importé`, 'success');
                return true;
            }
            throw new Error('Format de thème invalide');
        } catch (error) {
            showToast('❌ Erreur import thème: ' + error.message, 'error');
            return false;
        }
    }

    // Recréer le sélecteur après import
    recreateThemeSelector() {
        const existing = document.getElementById('theme-selector');
        if (existing) {
            existing.remove();
        }
        this.createThemeSelector();
    }

    // Créer un thème personnalisé
    createCustomTheme(name, colors, options = {}) {
        const customTheme = {
            name: name,
            description: options.description || 'Thème personnalisé',
            colors: { ...this.themes.default.colors, ...colors }
        };

        if (options.bodyBackground) customTheme.bodyBackground = options.bodyBackground;
        if (options.containerBackground) customTheme.containerBackground = options.containerBackground;
        if (options.textColor) customTheme.textColor = options.textColor;
        if (options.borderColor) customTheme.borderColor = options.borderColor;
        if (options.customCSS) customTheme.customCSS = options.customCSS;

        this.themes[name.toLowerCase().replace(/\s+/g, '_')] = customTheme;
        this.recreateThemeSelector();
        
        return customTheme;
    }

    // Obtenir la liste des thèmes disponibles
    getAvailableThemes() {
        return Object.keys(this.themes);
    }

    // Obtenir le thème actuel
    getCurrentTheme() {
        return {
            name: this.currentTheme,
            config: this.themes[this.currentTheme]
        };
    }

    // Basculer vers le thème suivant
    nextTheme() {
        const themes = Object.keys(this.themes);
        const currentIndex = themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        this.applyTheme(themes[nextIndex]);
        showToast(`🎨 Thème: ${this.themes[themes[nextIndex]].name}`, 'info');
    }

    // Basculer vers le thème précédent
    previousTheme() {
        const themes = Object.keys(this.themes);
        const currentIndex = themes.indexOf(this.currentTheme);
        const prevIndex = currentIndex === 0 ? themes.length - 1 : currentIndex - 1;
        this.applyTheme(themes[prevIndex]);
        showToast(`🎨 Thème: ${this.themes[themes[prevIndex]].name}`, 'info');
    }
}

// Auto-initialisation
let themeManager;
document.addEventListener('DOMContentLoaded', function() {
    themeManager = new ThemeManager();
    
    // Raccourcis clavier pour changer de thème
    document.addEventListener('keydown', function(e) {
        // Ctrl+Shift+T pour le thème suivant
        if (e.ctrlKey && e.shiftKey && e.key === 'T') {
            e.preventDefault();
            themeManager.nextTheme();
        }
        // Ctrl+Shift+R pour réinitialiser le thème
        if (e.ctrlKey && e.shiftKey && e.key === 'R') {
            e.preventDefault();
            themeManager.resetTheme();
        }
    });
});

// Export pour utilisation externe
if (typeof window !== 'undefined') {
    window.ThemeManager = ThemeManager;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
}