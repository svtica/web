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
                description: 'Mode sombre moderne (par défaut)'
            },
            light: {
                name: 'Clair', 
                icon: '☀️',
                description: 'Mode clair'
            },
            retro: {
                name: 'Retro',
                icon: '💾',
                description: 'Mode rétro synthwave'
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
        document.documentElement.classList.remove('theme-dark', 'theme-light', 'theme-retro');
        
        // Appliquer le nouveau thème
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.classList.add(`theme-${theme}`);
        
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
     * Crée le sélecteur de thème flottant
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
        
        // Bouton principal
        const mainButton = document.createElement('button');
        mainButton.className = 'theme-selector-main';
        mainButton.innerHTML = `<span class="theme-icon">${this.themes[this.currentTheme].icon}</span>`;
        mainButton.setAttribute('aria-label', 'Sélectionner le thème');
        mainButton.title = `Thème actuel: ${this.themes[this.currentTheme].name}`;
        
        // Menu déroulant
        const dropdown = document.createElement('div');
        dropdown.className = 'theme-dropdown';
        
        Object.keys(this.themes).forEach(themeKey => {
            const option = document.createElement('button');
            option.className = 'theme-option';
            option.innerHTML = `
                <span class="theme-icon">${this.themes[themeKey].icon}</span>
                <span class="theme-name">${this.themes[themeKey].name}</span>
            `;
            option.title = this.themes[themeKey].description;
            
            if (themeKey === this.currentTheme) {
                option.classList.add('active');
            }
            
            option.addEventListener('click', () => {
                this.setTheme(themeKey);
                selector.classList.remove('open');
            });
            
            dropdown.appendChild(option);
        });
        
        // Toggle dropdown
        mainButton.addEventListener('click', () => {
            selector.classList.toggle('open');
        });
        
        // Fermer quand on clique ailleurs
        document.addEventListener('click', (e) => {
            if (!selector.contains(e.target)) {
                selector.classList.remove('open');
            }
        });
        
        selector.appendChild(mainButton);
        selector.appendChild(dropdown);
        
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
            }
            
            .theme-selector-main {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 2px solid var(--border-color, #00ff9f);
                background: var(--bg-color, #1a1a2e);
                color: var(--text-color, #00ff9f);
                cursor: pointer;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            }
            
            .theme-selector-main:hover {
                transform: scale(1.1);
                box-shadow: 0 0 20px var(--border-color, #00ff9f);
            }
            
            .theme-dropdown {
                position: absolute;
                top: 60px;
                right: 0;
                background: var(--bg-color, #1a1a2e);
                border: 2px solid var(--border-color, #00ff9f);
                border-radius: 10px;
                padding: 10px;
                min-width: 150px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.3s ease;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
            }
            
            .theme-selector.open .theme-dropdown {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .theme-option {
                width: 100%;
                padding: 8px 12px;
                border: none;
                background: transparent;
                color: var(--text-color, #00ff9f);
                cursor: pointer;
                border-radius: 5px;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: all 0.3s ease;
                font-size: 14px;
            }
            
            .theme-option:hover {
                background: var(--highlight-color, rgba(0, 255, 159, 0.2));
            }
            
            .theme-option.active {
                background: var(--highlight-color, rgba(0, 255, 159, 0.2));
                color: var(--heading-color, #ff00ff);
            }
            
            .theme-icon {
                font-size: 16px;
            }
            
            .theme-name {
                font-size: 14px;
            }
            
            /* Responsive */
            @media (max-width: 768px) {
                .theme-selector {
                    top: 15px;
                    right: 15px;
                }
                
                .theme-selector-main {
                    width: 45px;
                    height: 45px;
                    font-size: 18px;
                }
                
                .theme-dropdown {
                    right: -10px;
                    min-width: 140px;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    /**
     * Met à jour le sélecteur de thème
     */
    updateThemeSelector() {
        const mainButton = document.querySelector('.theme-selector-main .theme-icon');
        const activeOption = document.querySelector('.theme-option.active');
        
        if (mainButton) {
            mainButton.textContent = this.themes[this.currentTheme].icon;
            mainButton.parentElement.title = `Thème actuel: ${this.themes[this.currentTheme].name}`;
        }
        
        // Mettre à jour les options actives
        document.querySelectorAll('.theme-option').forEach(option => {
            option.classList.remove('active');
        });
        
        const currentOption = Array.from(document.querySelectorAll('.theme-option')).find(
            option => option.querySelector('.theme-name').textContent === this.themes[this.currentTheme].name
        );
        
        if (currentOption) {
            currentOption.classList.add('active');
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
