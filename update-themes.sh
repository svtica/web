#!/bin/bash

# Script pour ajouter le système de thèmes à toutes les pages HTML

# Liste des pages à modifier
pages=(
    "cyberchef.html"
    "generateur.html"
    "generateur-commandes-reseau.html"
    "ias-logs.html"
    "menu.html"
    "mha.html"
    "raid-calc.html"
    "recherche-ss64.html"
    "reseau.html"
    "rps.html"
    "wpa-psk-generator.html"
)

# Lignes à ajouter dans le <head>
CSS_LINES='
    <!-- CSS - Thèmes -->
    <link rel="stylesheet" href="css/synthwave-dark.css">
    <link rel="stylesheet" href="css/light-theme.css">
    
    <!-- Theme Manager JavaScript -->
    <script src="js/theme-manager.js"></script>'

# Script d'initialisation à ajouter avant </body>
INIT_SCRIPT='
    <!-- Theme initialization -->
    <script>
        document.addEventListener('\''DOMContentLoaded'\'', function() {
            if (!localStorage.getItem('\''theme'\'')) {
                localStorage.setItem('\''theme'\'', '\''dark'\'');
                document.documentElement.setAttribute('\''data-theme'\'', '\''dark'\'');
            }
        });
    </script>'

echo "🚀 Ajout du système de thèmes aux pages HTML..."

for page in "${pages[@]}"; do
    if [ -f "$page" ]; then
        echo "📄 Traitement de $page..."
        
        # Sauvegarder l'original
        cp "$page" "${page}.backup"
        
        # Ajouter les CSS après le <title> (ou après charset si pas de title)
        sed -i '/<title>/a\'"$CSS_LINES" "$page" 2>/dev/null || \
        sed -i '/<meta charset/a\'"$CSS_LINES" "$page"
        
        # Ajouter le script d'initialisation avant </body>
        sed -i '/<\/body>/i\'"$INIT_SCRIPT" "$page"
        
        echo "✅ $page modifié avec succès"
    else
        echo "⚠️  $page non trouvé"
    fi
done

echo "🎉 Terminé ! Système de thèmes ajouté à toutes les pages."
echo "💾 Les fichiers originaux sont sauvegardés avec l'extension .backup"
