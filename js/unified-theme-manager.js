/**
 * Gestionnaire de thèmes unifié et amélioré
 * Supporte les modes: dark (par défaut), light, et retro
 */

class UnifiedThemeManager {
    constructor() {
        // Définir les thèmes disponibles
        this.themes = {
            dark: {
                name: 'Sombre',
                icon: '🌙',
                description: 'Mode sombre moderne (par défaut)',
                css: null
            },
            light: {
                name: 'Clair',
                icon: '☀️',
                description: 'Mode clair',
                css: null
            },
            retro: {
                name: 'Retro',
                icon: '💾',
                description: 'Mode rétro synthwave',
                css: null
            },
            msn: {
                name: 'MSN Messenger',
                icon: '🦋',
                description: 'MSN Messenger 7.x / Windows XP Luna Blue',
                css: 'css/msn-messenger.css'
            },
            icq: {
                name: 'ICQ',
                icon: '🌼',
                description: 'ICQ 2000-2003',
                css: 'css/icq.css'
            },
            mirc: {
                name: 'mIRC',
                icon: '📟',
                description: 'mIRC 6.x IRC terminal',
                css: 'css/mirc.css'
            },
            winxp: {
                name: 'Windows XP',
                icon: '🪟',
                description: 'Windows XP Luna Silver / Office XP',
                css: 'css/winxp-luna.css'
            }
        };
        
        // Thème par défaut: sombre
        this.currentTheme = localStorage.getItem('unified-theme') || 'dark';
        this.init();
    }
    
    /**
     * Initialisation du gestionnaire de thèmes
     */
    init() {
        this.setTheme(this.currentTheme);
        this.createThemeSelector();
        this.listenToSystemTheme();
        
        // Mettre à jour l'icône de navigation si elle existe
        setTimeout(() => {
            this.updateNavigationThemeIcon();
        }, 100);
    }
    
    /**
     * Applique un thème spécifique
     */
    setTheme(theme) {
        if (!this.themes[theme]) {
            console.warn(`Thème ${theme} non reconnu, utilisation du thème sombre`);
            theme = 'dark';
        }
        
        // Supprimer tous les attributs de thème existants
        document.documentElement.removeAttribute('data-theme');
        const themeClasses = Object.keys(this.themes).map(k => `theme-${k}`);
        document.documentElement.classList.remove(...themeClasses);

        // Appliquer le nouveau thème
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.classList.add(`theme-${theme}`);

        // Charger/décharger les CSS dynamiques
        this.loadThemeCSS(theme);
        
        this.currentTheme = theme;
        localStorage.setItem('unified-theme', theme);
        
        // Mettre à jour les éléments UI
        this.updateThemeSelector();
        this.updateNavigationThemeIcon();
        
        // Événement personnalisé pour notifier le changement
        window.dispatchEvent(new CustomEvent('themeChanged', { 
            detail: { theme: theme, themeName: this.themes[theme].name }
        }));
    }
    
    /**
     * Charge le fichier CSS associé au thème (si applicable)
     */
    loadThemeCSS(theme) {
        // Supprimer tout CSS de thème dynamique existant
        const existing = document.getElementById('dynamic-theme-css');
        if (existing) {
            existing.remove();
        }

        // Charger le CSS du nouveau thème si nécessaire
        const themeInfo = this.themes[theme];
        if (themeInfo && themeInfo.css) {
            const link = document.createElement('link');
            link.id = 'dynamic-theme-css';
            link.rel = 'stylesheet';
            // Déterminer le préfixe de chemin (support des sous-répertoires)
            const pathPrefix = /\/tools\//.test(window.location.pathname) ? '../' : '';
            link.href = pathPrefix + themeInfo.css;
            document.head.appendChild(link);
        }
    }

    /**
     * Bascule entre les thèmes (cycle)
     */
    toggleTheme() {
        const themeKeys = Object.keys(this.themes);
        const currentIndex = themeKeys.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themeKeys.length;
        const nextTheme = themeKeys[nextIndex];
        
        this.setTheme(nextTheme);
    }
    
    /**
     * Crée le sélecteur de thème flottant avec un select dropdown
     */
    createThemeSelector() {
        // Supprimer l'ancien sélecteur s'il existe
        const existingSelector = document.getElementById('theme-selector');
        if (existingSelector) {
            existingSelector.remove();
        }

        const selector = document.createElement('div');
        selector.id = 'theme-selector';
        selector.className = 'theme-selector';

        // Label
        const label = document.createElement('label');
        label.className = 'theme-selector-label';
        label.htmlFor = 'theme-select-dropdown';
        label.textContent = this.themes[this.currentTheme].icon;
        label.title = `Thème actuel: ${this.themes[this.currentTheme].name}`;

        // Select dropdown
        const select = document.createElement('select');
        select.id = 'theme-select-dropdown';
        select.className = 'theme-select-dropdown';
        select.setAttribute('aria-label', 'Sélectionner le thème');

        // Optgroup: Classiques
        const classicGroup = document.createElement('optgroup');
        classicGroup.label = 'Thèmes modernes';

        // Optgroup: Retro
        const retroGroup = document.createElement('optgroup');
        retroGroup.label = 'Thèmes rétro';

        const modernThemes = ['dark', 'light', 'retro'];

        Object.keys(this.themes).forEach(themeKey => {
            const option = document.createElement('option');
            option.value = themeKey;
            option.textContent = `${this.themes[themeKey].icon} ${this.themes[themeKey].name}`;
            option.title = this.themes[themeKey].description;

            if (themeKey === this.currentTheme) {
                option.selected = true;
            }

            if (modernThemes.includes(themeKey)) {
                classicGroup.appendChild(option);
            } else {
                retroGroup.appendChild(option);
            }
        });

        select.appendChild(classicGroup);
        select.appendChild(retroGroup);

        select.addEventListener('change', (e) => {
            this.setTheme(e.target.value);
        });

        selector.appendChild(label);
        selector.appendChild(select);

        // Ajouter les styles CSS
        this.addThemeSelectorStyles();

        // Ajouter au body
        document.body.appendChild(selector);
    }
    
    /**
     * Ajoute les styles CSS pour le sélecteur de thème
     */
    addThemeSelectorStyles() {
        if (document.getElementById('theme-selector-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'theme-selector-styles';
        style.textContent = `
            .theme-selector {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                font-family: inherit;
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .theme-selector-label {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 2px solid var(--border-color, #00ff9f);
                background: var(--bg-color, #1a1a2e);
                color: var(--text-color, #00ff9f);
                cursor: pointer;
                font-size: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                flex-shrink: 0;
            }

            .theme-selector-label:hover {
                transform: scale(1.1);
                box-shadow: 0 0 15px var(--border-color, #00ff9f);
            }

            .theme-select-dropdown {
                padding: 6px 28px 6px 10px;
                border: 2px solid var(--border-color, #00ff9f);
                border-radius: 8px;
                background: var(--bg-color, #1a1a2e);
                color: var(--text-color, #00ff9f);
                font-size: 13px;
                font-family: inherit;
                cursor: pointer;
                outline: none;
                transition: all 0.3s ease;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                appearance: none;
                -webkit-appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%2300ff9f'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 8px center;
                min-width: 160px;
            }

            .theme-select-dropdown:hover,
            .theme-select-dropdown:focus {
                border-color: var(--heading-color, #ff00ff);
                box-shadow: 0 0 15px var(--border-color, #00ff9f);
            }

            .theme-select-dropdown option,
            .theme-select-dropdown optgroup {
                background: var(--bg-color, #1a1a2e);
                color: var(--text-color, #00ff9f);
                font-size: 13px;
                padding: 4px 8px;
            }

            .theme-select-dropdown optgroup {
                font-weight: bold;
                font-style: normal;
            }

            /* Responsive */
            @media (max-width: 768px) {
                .theme-selector {
                    top: 12px;
                    right: 12px;
                }

                .theme-selector-label {
                    width: 34px;
                    height: 34px;
                    font-size: 15px;
                }

                .theme-select-dropdown {
                    min-width: 130px;
                    font-size: 12px;
                    padding: 4px 24px 4px 8px;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    /**
     * Met à jour le sélecteur de thème
     */
    updateThemeSelector() {
        const label = document.querySelector('.theme-selector-label');
        const select = document.getElementById('theme-select-dropdown');

        if (label) {
            label.textContent = this.themes[this.currentTheme].icon;
            label.title = `Thème actuel: ${this.themes[this.currentTheme].name}`;
        }

        if (select) {
            select.value = this.currentTheme;
        }
    }
    
    /**
     * Met à jour l'icône du thème dans la navigation
     */
    updateNavigationThemeIcon() {
        const navThemeIcon = document.querySelector('#nav-theme-toggle .theme-icon');
        if (navThemeIcon) {
            navThemeIcon.textContent = this.themes[this.currentTheme].icon;
        }
    }
    
    /**
     * Écoute les changements de préférence système
     */
    listenToSystemTheme() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addListener((e) => {
                // Ne changer automatiquement que si l'utilisateur n'a pas de préférence sauvegardée
                if (!localStorage.getItem('unified-theme')) {
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }
    
    /**
     * Obtient le thème actuel
     */
    getCurrentTheme() {
        return this.currentTheme;
    }
    
    /**
     * Obtient les informations du thème actuel
     */
    getCurrentThemeInfo() {
        return this.themes[this.currentTheme];
    }
    
    /**
     * Obtient tous les thèmes disponibles
     */
    getAvailableThemes() {
        return this.themes;
    }
    
    /**
     * Force un thème spécifique
     */
    forceTheme(theme) {
        if (this.themes[theme]) {
            this.setTheme(theme);
            return true;
        }
        return false;
    }
}

// Initialiser le gestionnaire de thèmes unifié quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new UnifiedThemeManager();
});

// Exposer des fonctions globales pour la compatibilité
window.toggleTheme = function() {
    if (window.themeManager) {
        window.themeManager.toggleTheme();
    }
};

window.setTheme = function(theme) {
    if (window.themeManager) {
        return window.themeManager.forceTheme(theme);
    }
    return false;
};

window.getCurrentTheme = function() {
    if (window.themeManager) {
        return window.themeManager.getCurrentTheme();
    }
    return 'dark';
};
