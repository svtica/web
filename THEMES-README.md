# Système de Thèmes - Mode Sombre/Clair

Ce système permet de basculer entre un thème sombre (synthwave) et un thème clair sur votre site web.

## Fonctionnalités

### ✨ Caractéristiques principales
- **Mode sombre par défaut** (synthwave avec effets néon)
- **Mode clair élégant** (design moderne et propre)
- **Bouton de bascule flottant** en haut à droite
- **Sauvegarde automatique** de la préférence utilisateur
- **Transitions fluides** entre les thèmes
- **Design responsive** sur tous les appareils

### 🎯 Utilisation

#### Bouton de bascule
- Un bouton rond flottant apparaît en haut à droite de chaque page
- 🌙 = Mode sombre actuel, cliquer pour passer au mode clair
- ☀️ = Mode clair actuel, cliquer pour passer au mode sombre
- Animation de rotation lors du changement

#### Fonctions JavaScript disponibles
```javascript
// Basculer entre les thèmes
toggleTheme();

// Forcer un thème spécifique
setTheme('dark');   // Force le mode sombre
setTheme('light');  // Force le mode clair

// Obtenir le thème actuel
getCurrentTheme();  // Retourne 'dark' ou 'light'
```

## Structure des fichiers

### 📁 Fichiers ajoutés/modifiés

#### CSS
- `css/synthwave-dark.css` - Thème sombre (version améliorée)
- `css/light-theme.css` - Thème clair
- `css/synthwave.css` - **CONSERVÉ** (ancien fichier inchangé)

#### JavaScript
- `js/theme-manager.js` - Gestionnaire de thèmes

#### Templates
- `template-with-themes.html` - Template pour nouvelles pages
- `index-original.html` - Sauvegarde de l'ancien index.html

### 🔧 Implémentation dans vos pages

#### Pour une nouvelle page
1. Utilisez le template `template-with-themes.html`
2. Remplacez les variables :
   - `{{PAGE_TITLE}}` - Titre de la page
   - `{{PAGE_DESCRIPTION}}` - Description de la page
   - `{{PAGE_CONTENT}}` - Contenu HTML de la page

#### Pour une page existante
Ajoutez dans le `<head>` :
```html
<!-- CSS - Thèmes -->
<link rel="stylesheet" href="css/synthwave-dark.css">
<link rel="stylesheet" href="css/light-theme.css">

<!-- Theme Manager JavaScript -->
<script src="js/theme-manager.js"></script>
```

Ajoutez avant la fermeture du `</body>` :
```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    });
</script>
```

## Personnalisation

### 🎨 Variables CSS
Chaque thème utilise des variables CSS pour faciliter la personnalisation :

#### Thème sombre
```css
:root[data-theme="dark"] {
    --bg-color: #1a1a2e;
    --text-color: #00ff9f;
    --heading-color: #ff00ff;
    --link-color: #00ffff;
    --button-color: #ff00ff;
    --border-color: #00ff9f;
    --highlight-color: rgba(0, 255, 159, 0.2);
}
```

#### Thème clair
```css
:root[data-theme="light"] {
    --bg-color: #f5f5f5;
    --text-color: #2c2c2c;
    --heading-color: #8e44ad;
    --link-color: #2980b9;
    --button-color: #8e44ad;
    --border-color: #8e44ad;
    --highlight-color: rgba(142, 68, 173, 0.1);
}
```

### 🔧 Personnaliser le bouton de bascule
Modifiez les styles dans `js/theme-manager.js` section `.theme-toggle-btn` :

```css
.theme-toggle-btn {
    /* Position, taille, couleurs, etc. */
    top: 20px;      /* Distance du haut */
    right: 20px;    /* Distance de la droite */
    width: 50px;    /* Largeur */
    height: 50px;   /* Hauteur */
}
```

## Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (versions modernes)
- ✅ Support mobile complet
- ✅ Sauvegarde localStorage
- ✅ Graceful degradation si JavaScript désactivé

## Dépannage

### Le thème ne se charge pas
1. Vérifiez que les fichiers CSS sont bien liés
2. Vérifiez que `theme-manager.js` est chargé
3. Ouvrez la console développeur pour voir les erreurs

### Le bouton n'apparaît pas
1. Vérifiez que `theme-manager.js` est chargé après le DOM
2. Vérifiez qu'il n'y a pas d'erreurs JavaScript
3. Vérifiez les styles CSS du bouton

### La préférence n'est pas sauvegardée
1. Vérifiez que localStorage est supporté/activé
2. Vérifiez qu'il n'y a pas d'erreurs de sécurité (CORS)

## Migration depuis l'ancien système

L'ancien fichier `css/synthwave.css` est conservé mais non utilisé. Le nouveau système utilise :
- `css/synthwave-dark.css` (version améliorée)
- `css/light-theme.css` (nouveau thème clair)

Pour revenir à l'ancien système, remplacez simplement les liens CSS par :
```html
<link rel="stylesheet" href="css/synthwave.css">
```

---

*Système créé avec amour pour une expérience utilisateur optimale ! 🌙☀️*
