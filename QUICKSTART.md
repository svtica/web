# 🚀 Démarrage Rapide - SS64 Search Pro

## Installation et premier lancement

### Option 1: Lancement direct (recommandé)
1. Ouvrez le fichier `ss64-search-pro.html` dans votre navigateur
2. C'est tout ! L'application fonctionne hors-ligne

### Option 2: Serveur local
```bash
# Avec Python (recommandé)
python3 -m http.server 8000
# Ou python -m http.server 8000

# Avec Node.js
npm run serve

# Avec le script de déploiement
node deploy.js serve
```

Puis ouvrez: http://localhost:8000/ss64-search-pro.html

## ⚡ Raccourcis clavier essentiels

| Raccourci | Action |
|-----------|--------|
| `Ctrl+K` | Focus recherche |
| `F1` | Aide complète |
| `Ctrl+1-5` | Changer d'OS |
| `Ctrl+E` | Exporter résultats |
| `Ctrl+F` | Filtres avancés |
| `Escape` | Vider recherche |

## 🔍 Exemples de recherche

- **Recherche simple**: `ping`
- **Recherche partielle**: `net` (trouve netstat, netsh, etc.)
- **Par description**: `network` (trouve toutes les commandes réseau)
- **Combinée**: `copy file` (trouve copy, xcopy, robocopy, etc.)

## 🎨 Personnalisation

### Changer de thème
- Cliquez sur 🎨 en haut à droite
- Ou utilisez `Ctrl+Shift+T` pour passer au suivant

### Filtres avancés
- Activez/désactivez avec `Ctrl+F`
- Triez par pertinence, nom, OS, ou popularité
- Limitez le nombre de résultats
- Recherche exacte ou floue

## 📚 Fonctionnalités principales

### ⭐ Favoris
- Cliquez sur l'étoile pour sauvegarder une commande
- Accès via le panneau admin (`Ctrl+,`)

### 📊 Statistiques
- Historique de vos recherches
- Commandes les plus utilisées
- Statistiques détaillées dans l'admin

### 💾 Export/Import
- Exportez vos résultats en JSON
- Partagez des commandes individuelles
- Sauvegardez votre configuration

## 🛠️ Administration

Accès: `Ctrl+,` ou bouton "Admin"

### Base de données
- Enrichir automatiquement
- Exporter/Importer
- Statistiques détaillées

### Paramètres
- Gérer l'historique
- Nettoyer les favoris
- Réinitialiser la configuration

## 🧪 Tests et maintenance

```bash
# Tests automatiques
npm test

# Validation de la base
npm run validate

# Optimisation
npm run optimize

# Sauvegarde
npm run backup

# Statistiques
npm run stats

# Déploiement complet
npm run deploy
```

## 📁 Structure du projet

```
ss64-search-pro/
├── ss64-search-pro.html      # Interface principale
├── js/
│   ├── ss64-database.js      # Base de données (200+ commandes)
│   ├── theme-manager-ss64.js # Gestionnaire de thèmes
│   ├── keyboard-shortcuts.js # Raccourcis clavier
│   └── ss64-advanced.js      # Fonctionnalités avancées
├── deploy.js                 # Script de déploiement
├── ss64-maintenance.js       # Outils de maintenance
├── ss64-tests.js            # Tests automatiques
├── README-SS64.md           # Documentation complète
└── package.json             # Configuration projet
```

## 🎯 Conseils d'utilisation

### Recherche efficace
1. **Commencez simple**: tapez juste le début du nom
2. **Utilisez les filtres**: par OS ou type de commande
3. **Explorez les suggestions**: cliquez sur les commandes populaires
4. **Copiez rapidement**: clic sur les exemples pour copier

### Navigation rapide
1. **Onglets OS**: filtrez par système d'exploitation
2. **Tri intelligent**: par pertinence, nom, ou popularité
3. **Navigation clavier**: `Ctrl+↑/↓` dans les résultats
4. **Recherche vocale**: si supportée par votre navigateur

### Personnalisation avancée
1. **Thèmes**: 8 thèmes prédéfinis + import personnalisé
2. **Raccourcis**: modifiables et exportables
3. **Filtres**: sauvegardés automatiquement
4. **Favoris**: synchronisés entre sessions

## 🐛 Dépannage

### La base ne se charge pas
- Vérifiez que `js/ss64-database.js` existe
- Ouvrez la console (F12) pour voir les erreurs
- Essayez en mode navigation privée

### Recherche lente
- Réduisez le nombre de résultats (filtres)
- Désactivez la recherche dans descriptions/syntaxe
- Videz l'historique de recherche

### Interface cassée
- Videz le cache du navigateur (Ctrl+F5)
- Réinitialisez les paramètres (admin > settings)
- Testez dans un autre navigateur

## 📞 Support

- **Documentation**: README-SS64.md
- **Tests**: `npm test`
- **Validation**: `npm run validate`
- **Rapport**: `npm run report`

## 🎉 Fonctionnalités avancées

### Mode expert
- Recherche par regex (dans filtres avancés)
- Export automatique des statistiques
- Synchronisation avec services externes
- API REST pour intégration

### Extensibilité
- Thèmes personnalisés (JSON)
- Commandes personnalisées
- Plugins via JavaScript
- Intégration avec d'autres outils

---

**🚀 Prêt à commencer ?**
Ouvrez `ss64-search-pro.html` et commencez à explorer les 200+ commandes disponibles !

**💡 Astuce**: Appuyez sur `F1` dans l'interface pour voir tous les raccourcis disponibles.