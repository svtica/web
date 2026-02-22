/**
 * Système de navigation unifié
 * Génère automatiquement la navigation pour toutes les pages
 */

class NavigationManager {
    constructor() {
        // Détection du sous-répertoire courant
        this.pathPrefix = this._getPathPrefix();
        
        // Définition de toutes les pages du site
        // url = chemin depuis la racine du site
        this.pages = [
            { name: 'Accueil', url: 'index.html', icon: '🏠' },
            { name: 'Générateurs', url: 'generateur.html', icon: '🔧' },
            { name: 'Réseau', url: 'reseau.html', icon: '🌐' },
            { name: 'Analyseur de courriels', url: 'mha.html', icon: '📧' },
            { name: 'CyberChef', url: 'cyberchef.html', icon: '🍳' },
            { name: 'Conversion', url: 'conversion.html', icon: '📊' },
            { name: 'Calculateur RAID', url: 'raid-calc.html', icon: '💾' },
            { name: 'Conversion Base 64', url: 'base64.html', icon: '🔤' },
            { name: 'Analyseur IAS', url: 'ias-logs.html', icon: '📝' },
            { name: 'Simulateur sauvegardes', url: 'rps.html', icon: '💿' },
            { name: 'Conversions avancées', url: 'conversions-avancees.html', icon: '🔧' },
            { name: 'Générateur WPA-PSK', url: 'wpa-psk-generator.html', icon: '🔐' },
            { name: 'Calculateur Hachage', url: 'calculateur-hachage.html', icon: '🔒' },
            { name: 'CommandHub', url: 'recherche-commandes.html', icon: '🔍' },
            { name: 'Commandes Réseau', url: 'generateur-commandes-reseau.html', icon: '🌐' },
            { name: 'Outils Portables', url: 'tools/index.html', icon: '📦' }
        ];
        
        this.currentPage = this.getCurrentPage();
        this.init();
    }
    
    /**
     * Détecte si on est dans un sous-répertoire et retourne le préfixe approprié
     */
    _getPathPrefix() {
        const pathname = window.location.pathname;
        if (/\/tools\//.test(pathname)) return '../';
        return '';
    }
    
    /**
     * Détermine la page actuelle basée sur l'URL
     */
    getCurrentPage() {
        const pathname = window.location.pathname;
        // Retourne le chemin relatif depuis la racine du site
        const match = pathname.match(/\/(?:tools\/)?([^/]+)$/);
        const filename = match ? match[1] : 'index.html';
        // Inclure le sous-dossier si applicable
        if (/\/tools\//.test(pathname)) return 'tools/' + filename;
        return filename || 'index.html';
    }
    
    /**
     * Initialise la navigation
     */
    init() {
        this.createNavigation();
        this.updateActiveLink();
    }
    
    /**
     * Crée et insère la navigation dans la page
     */
    createNavigation() {
        const navContainer = document.querySelector('nav');
        if (!navContainer) return;
        
        // Vider le contenu existant
        navContainer.innerHTML = '';
        
        // Créer les liens de navigation
        this.pages.forEach(page => {
            const link = document.createElement('a');
            // Ajuster l'URL selon la profondeur du répertoire courant
            link.href = this.pathPrefix + page.url;
            link.innerHTML = `<span class="nav-icon">${page.icon}</span> ${page.name}`;
            link.classList.add('nav-link');
            
            // Marquer le lien actuel
            if (page.url === this.currentPage) {
                link.classList.add('active');
            }
            
            navContainer.appendChild(link);
        });
        
        // Ajouter le bouton de thème dans la navigation
        this.addThemeToggleToNav(navContainer);
    }
    
    /**
     * Ajoute le bouton de changement de thème à la navigation
     */
    addThemeToggleToNav(navContainer) {
        const themeToggle = document.createElement('button');
        themeToggle.id = 'nav-theme-toggle';
        themeToggle.classList.add('nav-theme-toggle');
        themeToggle.innerHTML = '<span class="theme-icon">🌙</span> Thème';
        themeToggle.setAttribute('aria-label', 'Changer le thème');
        
        // Événement de clic
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.themeManager) {
                window.themeManager.toggleTheme();
                this.updateThemeToggleIcon();
            }
        });
        
        navContainer.appendChild(themeToggle);
    }
    
    /**
     * Met à jour l'icône du bouton de thème
     */
    updateThemeToggleIcon() {
        const themeToggle = document.getElementById('nav-theme-toggle');
        const themeIcon = themeToggle?.querySelector('.theme-icon');
        if (themeIcon) {
            const currentTheme = window.themeManager?.getCurrentTheme() || 'dark';
            themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
        }
    }
    
    /**
     * Met à jour le lien actif
     */
    updateActiveLink() {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.getAttribute('href') === this.pathPrefix + this.currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    /**
     * Ajoute une nouvelle page au système de navigation
     */
    addPage(name, url, icon = '📄') {
        this.pages.push({ name, url, icon });
        this.createNavigation();
    }
    
    /**
     * Supprime une page du système de navigation
     */
    removePage(url) {
        this.pages = this.pages.filter(page => page.url !== url);
        this.createNavigation();
    }
    
    /**
     * Obtient toutes les pages
     */
    getPages() {
        return this.pages;
    }
}

// Initialiser le gestionnaire de navigation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    window.navigationManager = new NavigationManager();
});

// Exposer des fonctions globales
window.addPage = function(name, url, icon) {
    if (window.navigationManager) {
        window.navigationManager.addPage(name, url, icon);
    }
};

window.removePage = function(url) {
    if (window.navigationManager) {
        window.navigationManager.removePage(url);
    }
};
