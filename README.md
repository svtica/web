# 🛠️ Web Tools for Sysadmins

Ensemble d'outils web pour Sysadmins et facilement portables, sans pub, sans cookies, sans tracking, sans prérequis.

## 📋 Table des matières

- [🚀 Démarrage rapide](#-démarrage-rapide)
- [🔧 Outils disponibles](#-outils-disponibles)
- [📚 Documentation SS64 Search Pro](#-documentation-ss64-search-pro)
- [🛠️ Caractéristiques techniques](#-caractéristiques-techniques)
- [📥 Installation et utilisation](#-installation-et-utilisation)
- [🔧 Personnalisation](#-personnalisation)
- [🤝 Contribution](#-contribution)
- [📄 Licence et disclaimer](#-licence-et-disclaimer)

---

## 🚀 Démarrage rapide

### Utilisation immédiate
1. Ouvrez `index.html` dans votre navigateur
2. Tous les outils fonctionnent hors-ligne
3. Aucune configuration requise

### Serveur local (optionnel)
```bash
# Python
python3 -m http.server 8000

# Node.js
npm run serve
```

---

## 🔧 Outils disponibles

### 🔐 Générateurs de sécurité

#### Générateur de mots de passe
- Mots de passe sécurisés personnalisables
- Entrées SPF pour configuration email
- Algorithmes cryptographiques robustes

#### Générateur WPA-PSK
- **Algorithme** : PBKDF2-SHA1 avec 4096 itérations
- **Interface moderne** avec barre de progression
- **Validation en temps réel** et sécurité locale
- **Clés 256 bits** conformes aux standards

#### Calculateur de hachage
- **Algorithmes** : MD5, SHA-1, SHA-256, SHA-384, SHA-512
- **Support fichiers** : Upload et traitement de tout type
- **Support texte** : Hachage en temps réel
- **Vérification d'intégrité** : Idéal pour forensique

### 🌐 Outils réseau

#### Analyseur réseau complet
- Identification d'adresse IP
- Calculateur de sous-réseau et CIDR
- Identification des classes réseau
- Conversion d'adresse IP
- Calcul de superNETs

#### Générateur de commandes réseau
- **PING** : Tests de connectivité avec options avancées
- **TRACEROUTE** : Traçage de routes réseau
- **NETSTAT** : Analyse des connexions et ports
- **NSLOOKUP** : Requêtes DNS avec types d'enregistrement
- **WGET/CURL** : Téléchargements et requêtes HTTP
- **PORT SCAN** : Scan avec nmap, netcat, telnet

### 📧 Analyseur de courriels
- Analyse complète des en-têtes email
- Détection de spam et phishing
- Traçage de l'origine des messages
- Validation DKIM/SPF/DMARC

### 🍳 CyberChef
- **Chiffrement** : AES, RSA, Blowfish, etc.
- **Encodage** : Base64, URL, HTML, etc.
- **Compression** : ZIP, GZIP, Brotli
- **Analyse de données** : Regex, parsing, extraction

### 📊 Outils de conversion

#### Convertisseur standard
- Conversion de tailles (octets, bits)
- Temps de transfert réseau
- Calcul de dégagement de chaleur
- Conversion de casse de texte

#### Conversions avancées
- **Température** : Celsius, Fahrenheit, Kelvin
- **Pression** : Pascal, Bar, PSI, Atmosphère
- **Vitesse** : km/h, m/s, mph, nœuds
- **Puissance** : Watts, Kilowatts, Chevaux-vapeur, BTU/h
- **Bases numériques** : Décimal, Binaire, Hexadécimal, Octal

#### Calculateur date/heure avancé
- **Calculateur** : Différences entre dates, ajout/soustraction
- **Convertisseur** : Formats ISO, RFC, locaux
- **Fuseaux horaires** : Conversion mondiale temps réel
- **Timestamps** : Unix, millisecondes, SQL/Excel
- **Jours ouvrés** : Avec prise en compte jours fériés

### 💾 Calculateur RAID
- Tous types de RAID (0, 1, 5, 6, 10, etc.)
- Calcul automatique selon nombre de disques
- Informations détaillées par configuration
- Estimation de performance et redondance

### 🔤 Outils d'encodage
- **Encodeur/Décodeur Base64**
- **Conversion de formats**
- **Analyse hexadécimale**
- **Manipulation de chaînes**

### 📝 Analyseurs de logs
- **IAS/NPS** : Analyse complète des logs d'authentification
- **Format standardisé** : Parsing automatique
- **Détection d'anomalies** : Tentatives d'intrusion
- **Rapports détaillés** : Statistiques et graphiques

### 💿 Simulateur de sauvegardes
- **Simulateur Veeam** : Planification et test
- **Calcul d'espace** : Estimation stockage requis
- **Planification** : Stratégies de sauvegarde
- **Optimisation** : Conseils de performance

---

## 📚 Documentation SS64 Search Pro

### 🎯 Vue d'ensemble
Base de données hors-ligne complète de commandes SS64 (Windows CMD, PowerShell, Linux, macOS) avec interface de recherche avancée.

### 📊 Statistiques
- **Total** : 200+ commandes documentées
- **Windows** : 50+ commandes CMD
- **Linux** : 70+ commandes Bash
- **macOS** : 30+ commandes Terminal
- **PowerShell** : 50+ cmdlets

### ⚡ Démarrage rapide

#### Raccourcis clavier essentiels
| Raccourci | Action |
|-----------|--------|
| `Ctrl+K` | Focus recherche |
| `F1` | Aide complète |
| `Ctrl+1-5` | Changer d'OS |
| `Ctrl+E` | Exporter résultats |
| `Ctrl+F` | Filtres avancés |
| `Escape` | Vider recherche |

#### Exemples de recherche
- **Recherche simple** : `ping`
- **Recherche partielle** : `net` (trouve netstat, netsh, etc.)
- **Par description** : `network` (trouve toutes les commandes réseau)
- **Combinée** : `copy file` (trouve copy, xcopy, robocopy, etc.)

### ✨ Fonctionnalités avancées

#### Interface de recherche
- **Recherche intelligente** avec score de pertinence
- **Filtrage par OS** (Windows, Linux, macOS, PowerShell)
- **Suggestions automatiques** en cas de faute de frappe
- **Recherche temps réel** (300ms de délai)
- **Copie en un clic** des commandes et syntaxes

#### Fonctionnalités utilisateur
- **Favoris** : Sauvegarde des commandes importantes
- **Historique** : Recherches persistantes
- **Statistiques** : Utilisation des commandes
- **Export/Import** : Base de données et configuration
- **Partage** : Résultats et commandes individuelles
- **Mode hors-ligne** : Fonctionnement complet sans internet

#### Panneau d'administration
- **Enrichissement automatique** de la base
- **Statistiques détaillées** d'utilisation
- **Gestion des paramètres** utilisateur
- **Sauvegarde/Restauration** des données

### 📋 Structure de la base de données

#### Format d'une commande
```javascript
{
  "name": "ping",                    // Nom de la commande
  "description": "Description...",   // Description détaillée
  "syntax": "ping [options] host",  // Syntaxe complète
  "examples": [                     // Exemples d'utilisation
    "ping google.com",
    "ping -c 4 8.8.8.8"
  ],
  "os": "windows"                   // Système d'exploitation
}
```

#### Systèmes supportés
- **Windows** : CMD et utilitaires système
- **Linux** : Bash et commandes système
- **macOS** : Terminal et outils spécifiques
- **PowerShell** : Cmdlets et fonctions

### 🔍 Algorithme de recherche

#### Score de pertinence
- **Correspondance exacte** : 100 points
- **Début du nom** : 80 points
- **Contenu du nom** : 60 points
- **Description** : 30 points
- **Syntaxe** : 20 points
- **Exemples** : 15 points
- **Popularité** : jusqu'à 20 points bonus

#### Suggestions intelligentes
- Distance de Levenshtein ≤ 2
- Commandes similaires phonétiquement
- Historique de recherche personnel

### 💾 Gestion des données

#### Stockage local
- **Favoris** : localStorage du navigateur
- **Historique** : localStorage du navigateur
- **Statistiques** : localStorage du navigateur
- **Aucune donnée** envoyée vers serveurs externes

#### Export/Import
```javascript
// Format de sauvegarde
{
  "database": { /* base de données */ },
  "metadata": {
    "exportDate": "2024-01-01T00:00:00.000Z",
    "totalCommands": 200,
    "version": "1.0"
  }
}
```

#### Nettoyage des données
```javascript
// Vider toutes les données utilisateur
localStorage.removeItem('ss64SearchHistory');
localStorage.removeItem('ss64Bookmarks');
localStorage.removeItem('ss64UsageStats');
```

---

## 🛠️ Caractéristiques techniques

### Sécurité et confidentialité
- **100% local** : Aucune donnée envoyée sur le réseau
- **Sans cookies** : Pas de tracking ni stockage de données personnelles
- **Sans publicité** : Interface propre et fonctionnelle
- **Sans prérequis** : Fonctionne dans tout navigateur moderne

### Compatibilité

#### Navigateurs supportés
- ✅ Chrome/Chromium 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

#### Fonctionnalités par navigateur
| Fonctionnalité | Chrome | Firefox | Safari | Edge |
|----------------|---------|---------|---------|------|
| Recherche | ✅ | ✅ | ✅ | ✅ |
| Favoris | ✅ | ✅ | ✅ | ✅ |
| Copie presse-papier | ✅ | ✅ | ✅ | ✅ |
| Partage natif | ✅ | ❌ | ✅ | ✅ |
| Export fichiers | ✅ | ✅ | ✅ | ✅ |

#### Responsive design
- 📱 Mobile first
- 💻 Desktop optimisé
- 📟 Tablette compatible
- 🖥️ Grands écrans supportés

### Performance
- **Calculs optimisés** : Web Workers pour opérations lourdes
- **Interface réactive** : Mise à jour temps réel
- **Léger** : Pas de dépendances externes lourdes
- **Rapide** : Chargement instantané

---

## 📥 Installation et utilisation

### Installation simple
1. Téléchargez l'ensemble des fichiers
2. Ouvrez `index.html` dans votre navigateur
3. Tous les outils fonctionnent localement

### Utilisation en ligne
Accédez directement aux outils via votre navigateur web.

### Intégration
Chaque outil est indépendant et peut être intégré individuellement dans vos projets.

### Tests et maintenance
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

---

## 🔧 Personnalisation

### Thèmes
- 8 thèmes prédéfinis
- Import de thèmes personnalisés
- Variables CSS modifiables
- Sauvegarde des préférences

### Variables CSS principales
```css
:root {
    --primary-color: #667eea;      /* Couleur principale */
    --secondary-color: #764ba2;    /* Couleur secondaire */
    --success-color: #28a745;      /* Couleur succès */
    /* ... autres variables ... */
}
```

### Ajouter des commandes
```javascript
// Dans ss64-database.js
{
  "name": "nouvelle-commande",
  "description": "Description de la nouvelle commande",
  "syntax": "nouvelle-commande [options]",
  "examples": ["nouvelle-commande --help"],
  "os": "linux"
}
```

### Ajouter de nouveaux OS
1. Étendre l'objet `database` avec la nouvelle clé
2. Ajouter l'onglet dans le HTML
3. Mettre à jour la fonction `getOSDisplayName()`

---

## 🚨 Dépannage

### Base de données non chargée
**Symptômes** : Message "Base de données non chargée"
**Solutions** :
1. Vérifier que `ss64-database.js` est présent
2. Vérifier les erreurs dans la console (F12)
3. S'assurer que le serveur web sert les fichiers JS

### Recherche lente
**Symptômes** : Délai important lors des recherches
**Solutions** :
1. Réduire le nombre max de résultats
2. Désactiver recherche dans descriptions/syntaxe
3. Vider l'historique de recherche

### Interface cassée
**Symptômes** : Mise en page incorrecte
**Solutions** :
1. Vider le cache du navigateur (Ctrl+F5)
2. Vérifier la console pour erreurs CSS/JS
3. Tester dans un navigateur différent

### Export impossible
**Symptômes** : Boutons d'export non fonctionnels
**Solutions** :
1. Vérifier les permissions de téléchargement
2. Tester dans un onglet privé/incognito
3. Vérifier les extensions de blocage

---

## 🤝 Contribution

### Signalement de bugs
1. Ouvrir la console navigateur (F12)
2. Reproduire le problème
3. Noter les messages d'erreur
4. Décrire les étapes de reproduction

### Ajout de nouvelles fonctionnalités
- **Rapports de bugs** : Signaler les problèmes rencontrés
- **Suggestions** : Proposer nouveaux outils ou améliorations
- **Code** : Contribuer au développement
- **Documentation** : Améliorer la documentation

### Standards de contribution
1. Respecter les formats JSON/CSS existants
2. Maintenir la compatibilité mobile
3. Tester sur plusieurs navigateurs
4. Documenter les changements

---

## 📄 Licence et disclaimer

### Licence
Distribué sous licence MIT. Voir `LICENSE` pour plus d'informations.

### Disclaimer
Ce dépôt partage des travaux remarquables trouvés sur Internet au fil du temps. Si la source est un autre projet actif, la première ligne devrait inclure l'emplacement du projet source (repo) et sa licence respective.

Nous ne revendiquons pas la propriété de tout ce qui se trouve ici. Certains codes ont été réutilisés, certaines versions ont été modifiées et d'autres traduites.

L'objectif principal est de permettre aux administrateurs système d'avoir un dépôt simple à utiliser pour leur faciliter le quotidien.

Les informations contenues sont fournies "en l'état" sans garantie d'aucune sorte.

---

## 🔗 Liens utiles

- **Repository GitHub** : [github.com/svtica/web](https://github.com/svtica/web)
- **Issues** : Rapporter des bugs ou suggérer des améliorations
- **Wiki** : Documentation technique détaillée

---

## 📜 Historique des versions

### v1.0 (Décembre 2024)
- ✨ Interface de recherche SS64 complète
- 📊 Base de données de 200+ commandes
- 🔧 Panneau d'administration
- 💾 Export/Import de données
- 📱 Design responsive
- 🔐 Outils de sécurité avancés
- 🌐 Générateurs de commandes réseau
- 📅 Calculateur date/heure avancé
- 🔄 Conversions multi-unités

---

*Dernière mise à jour : Décembre 2024*

**🚀 Prêt à commencer ?**
Ouvrez `index.html` et commencez à explorer tous les outils disponibles !

**💡 Astuce** : Appuyez sur `F1` dans l'interface SS64 Search Pro pour voir tous les raccourcis disponibles.
