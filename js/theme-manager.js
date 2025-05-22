// Gestionnaire de thèmes
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'dark'; // Mode sombre par défaut
        this.init();
    }

    init() {
        // Appliquer le thème sauvegardé
        this.setTheme(this.currentTheme);
        
        // Créer le bouton de commutation
        this.createThemeToggle();
        
        // Écouter les changements de préférence système
        this.listenToSystemTheme();
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        // Mettre à jour l'icône du bouton
        this.updateToggleButton();
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    createThemeToggle() {
        // Créer le bouton de commutation
        const toggleButton = document.createElement('button');
        toggleButton.id = 'theme-toggle';
        toggleButton.className = 'theme-toggle-btn';
        toggleButton.setAttribute('aria-label', 'Basculer le thème');
        toggleButton.innerHTML = this.getToggleIcon();
        
        // Ajouter les styles CSS
        const style = document.createElement('style');
        style.textContent = `
            .theme-toggle-btn {
                position: fixed;
                top: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 2px solid var(--border-color);
                background: var(--bg-color);
                color: var(--text-color);
                cursor: pointer;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                z-index: 1000;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            }
            
            .theme-toggle-btn:hover {
                transform: scale(1.1);
                box-shadow: 0 0 20px var(--border-color);
            }
            
            .theme-toggle-btn:active {
                transform: scale(0.95);
            }
            
            /* Animation de rotation */
            .theme-toggle-btn.rotating {
                animation: rotate 0.5s ease-in-out;
            }
            
            @keyframes rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            /* Responsive */
            @media (max-width: 768px) {
                .theme-toggle-btn {
                    top: 15px;
                    right: 15px;
                    width: 45px;
                    height: 45px;
                    font-size: 18px;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Ajouter l'événement de clic
        toggleButton.addEventListener('click', () => {
            toggleButton.classList.add('rotating');
            setTimeout(() => {
                toggleButton.classList.remove('rotating');
            }, 500);
            this.toggleTheme();
        });
        
        // Ajouter le bouton au body
        document.body.appendChild(toggleButton);
    }

    getToggleIcon() {
        if (this.currentTheme === 'dark') {
            return '☀️'; // Soleil pour passer au mode clair
        } else {
            return '🌙'; // Lune pour passer au mode sombre
        }
    }

    updateToggleButton() {
        const button = document.getElementById('theme-toggle');
        if (button) {
            button.innerHTML = this.getToggleIcon();
            button.setAttribute('title', 
                this.currentTheme === 'dark' ? 
                'Passer au mode clair' : 
                'Passer au mode sombre'
            );
        }
    }

    listenToSystemTheme() {
        // Écouter les changements de préférence système (optionnel)
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addListener((e) => {
                // Ne changer automatiquement que si l'utilisateur n'a pas de préférence sauvegardée
                if (!localStorage.getItem('theme')) {
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    // Méthode pour obtenir le thème actuel
    getCurrentTheme() {
        return this.currentTheme;
    }

    // Méthode pour forcer un thème spécifique
    forceTheme(theme) {
        if (theme === 'dark' || theme === 'light') {
            this.setTheme(theme);
        }
    }
}

// Initialiser le gestionnaire de thèmes quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});

// Exposer quelques fonctions globales pour faciliter l'utilisation
window.toggleTheme = function() {
    if (window.themeManager) {
        window.themeManager.toggleTheme();
    }
};

window.setTheme = function(theme) {
    if (window.themeManager) {
        window.themeManager.forceTheme(theme);
    }
};

window.getCurrentTheme = function() {
    if (window.themeManager) {
        return window.themeManager.getCurrentTheme();
    }
    return 'dark';
};
