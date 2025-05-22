// Suite du script JavaScript pour la recherche SS64 avancée

// Fonction pour générer des suggestions de recherche
function generateSearchSuggestions(query) {
    const allCommands = [];
    Object.values(database).forEach(commands => {
        commands.forEach(cmd => {
            if (!allCommands.includes(cmd.name)) {
                allCommands.push(cmd.name);
            }
        });
    });
    
    // Trouver des commandes similaires
    return allCommands
        .filter(cmd => {
            const distance = levenshteinDistance(query.toLowerCase(), cmd.toLowerCase());
            return distance <= 2 && distance > 0;
        })
        .slice(0, 8);
}

// Calcul de la distance de Levenshtein pour les suggestions
function levenshteinDistance(str1, str2) {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[str2.length][str1.length];
}

// Fonction pour surligner les correspondances
function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    return text.replace(regex, '<mark style="background: linear-gradient(135deg, #ffeb3b 0%, #ffc107 100%); padding: 2px 4px; border-radius: 3px; font-weight: bold;">$1</mark>');
}

// Échapper les caractères spéciaux pour regex
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Fonction pour obtenir le nom d'affichage de l'OS
function getOSDisplayName(os) {
    const names = {
        windows: 'Windows',
        linux: 'Linux',
        macos: 'macOS',
        powershell: 'PowerShell'
    };
    return names[os] || os;
}

// Fonction pour mettre à jour les statistiques
function updateStats(resultCount = null, query = null) {
    if (!isLoaded) return;
    
    const statsInfo = document.getElementById('statsInfo');
    
    if (resultCount !== null && query) {
        statsInfo.innerHTML = `
            🎯 <strong>${resultCount}</strong> commande${resultCount > 1 ? 's' : ''} trouvée${resultCount > 1 ? 's' : ''} pour "<strong>${query}</strong>"
            ${currentOS !== 'all' ? ` dans <strong>${getOSDisplayName(currentOS)}</strong>` : ''}
        `;
    } else {
        const totalCommands = Object.values(database).reduce((total, commands) => total + commands.length, 0);
        const currentCommands = currentOS === 'all' ? totalCommands : database[currentOS]?.length || 0;
        
        statsInfo.innerHTML = `
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">${currentCommands}</div>
                    <div class="stat-label">${currentOS !== 'all' ? getOSDisplayName(currentOS) : 'Total'}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${database.windows?.length || 0}</div>
                    <div class="stat-label">Windows</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${database.linux?.length || 0}</div>
                    <div class="stat-label">Linux</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${database.macos?.length || 0}</div>
                    <div class="stat-label">macOS</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${database.powershell?.length || 0}</div>
                    <div class="stat-label">PowerShell</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${bookmarks.length}</div>
                    <div class="stat-label">Favoris</div>
                </div>
            </div>
        `;
    }
}

// Fonction pour copier dans le presse-papiers
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('✅ Copié dans le presse-papiers');
        }).catch(err => {
            console.error('Erreur de copie:', err);
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

// Fonction de copie alternative
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showToast('✅ Copié dans le presse-papiers');
        } else {
            showToast('❌ Impossible de copier');
        }
    } catch (err) {
        console.error('Erreur de copie:', err);
        showToast('❌ Erreur lors de la copie');
    }
    
    document.body.removeChild(textArea);
}

// Fonction pour afficher un toast
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.textContent = message;
    
    const colors = {
        info: '#333',
        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545'
    };
    
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        z-index: 10000;
        font-size: 14px;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-in forwards';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Gestion des filtres avancés
function toggleAdvancedFilters() {
    const filters = document.getElementById('advancedFilters');
    const button = document.querySelector('.toggle-filters');
    
    if (filters.classList.contains('show')) {
        filters.classList.remove('show');
        button.textContent = '🔧 Filtres';
    } else {
        filters.classList.add('show');
        button.textContent = '🔧 Masquer';
    }
}

// Export des résultats
function exportResults() {
    if (lastResults.length === 0) {
        showToast('❌ Aucun résultat à exporter', 'warning');
        return;
    }
    
    const data = {
        query: document.getElementById('searchInput').value,
        timestamp: new Date().toISOString(),
        os: currentOS,
        results: lastResults.map(cmd => ({
            name: cmd.name,
            os: cmd.os,
            description: cmd.description,
            syntax: cmd.syntax,
            examples: cmd.examples
        }))
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ss64-search-results-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast(`📥 ${lastResults.length} résultats exportés`, 'success');
}

// Partage des résultats
function shareResults() {
    if (lastResults.length === 0) {
        showToast('❌ Aucun résultat à partager', 'warning');
        return;
    }
    
    const query = document.getElementById('searchInput').value;
    const url = `${window.location.origin}${window.location.pathname}?q=${encodeURIComponent(query)}&os=${currentOS}`;
    
    if (navigator.share) {
        navigator.share({
            title: `Recherche SS64: ${query}`,
            text: `${lastResults.length} commandes trouvées pour "${query}"`,
            url: url
        }).then(() => {
            showToast('🔗 Partagé avec succès', 'success');
        }).catch(err => {
            copyToClipboard(url);
            showToast('🔗 URL copiée dans le presse-papiers');
        });
    } else {
        copyToClipboard(url);
        showToast('🔗 URL copiée dans le presse-papiers');
    }
}

// Partage d'une commande spécifique
function shareCommand(name, os) {
    const url = `${window.location.origin}${window.location.pathname}?cmd=${encodeURIComponent(name)}&os=${os}`;
    
    if (navigator.share) {
        navigator.share({
            title: `Commande SS64: ${name}`,
            text: `Commande ${name} pour ${getOSDisplayName(os)}`,
            url: url
        }).then(() => {
            showToast('🔗 Commande partagée', 'success');
        }).catch(err => {
            copyToClipboard(url);
            showToast('🔗 URL de la commande copiée');
        });
    } else {
        copyToClipboard(url);
        showToast('🔗 URL de la commande copiée');
    }
}

// Afficher les détails d'une commande
function showCommandDetails(name, os) {
    const cmd = findCommand(name, os);
    if (!cmd) return;
    
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.5);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        " onclick="this.remove()">
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
                    <h2 style="margin: 0; color: var(--primary-color);">${cmd.name}</h2>
                    <button onclick="this.closest('[style*=\"position: fixed\"]').remove()" style="
                        background: none; border: none; font-size: 24px; cursor: pointer; color: #999;
                    ">×</button>
                </div>
                <div style="margin-bottom: 15px;">
                    <span style="
                        background: var(--success-color); color: white; padding: 4px 8px; 
                        border-radius: 12px; font-size: 12px; text-transform: uppercase;
                    ">${getOSDisplayName(os)}</span>
                </div>
                <div style="margin-bottom: 20px;">
                    <strong>Description:</strong><br>
                    ${cmd.description}
                </div>
                <div style="margin-bottom: 20px;">
                    <strong>Syntaxe:</strong><br>
                    <code style="
                        background: #f8f9fa; padding: 10px; border-radius: 4px; 
                        display: block; font-family: 'Courier New', monospace;
                    ">${cmd.syntax}</code>
                </div>
                ${cmd.examples && cmd.examples.length > 0 ? `
                    <div>
                        <strong>Exemples:</strong><br>
                        ${cmd.examples.map(ex => `
                            <code style="
                                background: #e8f5e8; padding: 8px; border-radius: 4px; 
                                display: block; margin: 5px 0; font-family: 'Courier New', monospace;
                                cursor: pointer;
                            " onclick="copyToClipboard('${ex.replace(/'/g, "\\'")}')">$ ${ex}</code>
                        `).join('')}
                    </div>
                ` : ''}
                <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: center;">
                    <button onclick="copyToClipboard('${cmd.syntax.replace(/'/g, "\\'")}'); showToast('Syntaxe copiée')" style="
                        padding: 8px 16px; background: var(--primary-color); color: white;
                        border: none; border-radius: 4px; cursor: pointer;
                    ">Copier syntaxe</button>
                    <button onclick="toggleBookmark('${cmd.name}', '${os}'); this.textContent = bookmarks.some(b => b.name === '${cmd.name}' && b.os === '${os}') ? '⭐ En favoris' : '☆ Ajouter aux favoris'" style="
                        padding: 8px 16px; background: var(--warning-color); color: white;
                        border: none; border-radius: 4px; cursor: pointer;
                    ">${bookmarks.some(b => b.name === cmd.name && b.os === os) ? '⭐ En favoris' : '☆ Ajouter aux favoris'}</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Gestion du panneau d'administration
function toggleAdminPanel() {
    const panel = document.getElementById('adminPanel');
    const overlay = document.getElementById('adminOverlay');
    
    if (panel.classList.contains('show')) {
        panel.classList.remove('show');
        overlay.style.display = 'none';
    } else {
        panel.classList.add('show');
        overlay.style.display = 'block';
        updateAdminStats();
    }
}

function showAdminTab(tab) {
    // Mettre à jour les onglets
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-content').forEach(c => c.classList.remove('active'));
    
    document.querySelector(`[onclick="showAdminTab('${tab}')"]`).classList.add('active');
    document.getElementById(`admin-${tab}`).classList.add('active');
}

function updateAdminStats() {
    const statsContainer = document.getElementById('adminStats');
    const totalCommands = Object.values(database).reduce((total, commands) => total + commands.length, 0);
    const totalSearches = searchHistory.length;
    const totalBookmarks = bookmarks.length;
    const totalUsage = Object.values(usageStats.all || {}).reduce((a, b) => a + b, 0);
    
    statsContainer.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <div style="font-size: 2em; font-weight: bold; color: var(--primary-color);">${totalCommands}</div>
                <div>Commandes totales</div>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <div style="font-size: 2em; font-weight: bold; color: var(--info-color);">${totalSearches}</div>
                <div>Recherches effectuées</div>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <div style="font-size: 2em; font-weight: bold; color: var(--warning-color);">${totalBookmarks}</div>
                <div>Commandes favorites</div>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
                <div style="font-size: 2em; font-weight: bold; color: var(--success-color);">${totalUsage}</div>
                <div>Utilisations totales</div>
            </div>
        </div>
        
        <h4 style="margin-top: 20px;">Historique de recherche (dernières 10)</h4>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; max-height: 200px; overflow-y: auto;">
            ${searchHistory.slice(0, 10).map(query => `
                <div style="padding: 5px 0; border-bottom: 1px solid #dee2e6; cursor: pointer;" 
                     onclick="document.getElementById('searchInput').value = '${query}'; performSearch(); toggleAdminPanel();">
                    "${query}"
                </div>
            `).join('') || '<em>Aucune recherche effectuée</em>'}
        </div>
        
        <h4 style="margin-top: 20px;">Commandes les plus utilisées</h4>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
            ${Object.entries(usageStats.all || {})
                .sort(([,a], [,b]) => b - a)
                .slice(0, 10)
                .map(([cmd, count]) => `
                    <div style="display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px solid #dee2e6;">
                        <span style="font-family: 'Courier New', monospace;">${cmd}</span>
                        <span style="background: var(--primary-color); color: white; padding: 2px 6px; border-radius: 10px; font-size: 12px;">${count}</span>
                    </div>
                `).join('') || '<em>Aucune utilisation enregistrée</em>'}
        </div>
    `;
}

// Fonctions d'administration
function enrichDatabase() {
    showToast('🔄 Enrichissement de la base de données...', 'info');
    
    if (typeof enrichSS64Database === 'function') {
        enrichSS64Database().then(newDatabase => {
            database = newDatabase;
            updateOSBadges();
            updateStats();
            showToast('✅ Base de données enrichie avec succès!', 'success');
        }).catch(error => {
            console.error('Erreur enrichissement:', error);
            showToast('❌ Erreur lors de l\'enrichissement', 'error');
        });
    } else {
        showToast('❌ Module d\'enrichissement non disponible', 'error');
    }
}

function exportDatabase() {
    const data = {
        database: database,
        metadata: {
            exportDate: new Date().toISOString(),
            totalCommands: Object.values(database).reduce((total, commands) => total + commands.length, 0),
            version: '1.0'
        }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ss64-database-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('💾 Base de données exportée', 'success');
}

function importDatabase() {
    document.getElementById('importFile').click();
}

function handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.database && typeof data.database === 'object') {
                database = data.database;
                updateOSBadges();
                updateStats();
                showToast('📤 Base de données importée avec succès!', 'success');
            } else {
                throw new Error('Format de fichier invalide');
            }
        } catch (error) {
            console.error('Erreur import:', error);
            showToast('❌ Erreur lors de l\'import du fichier', 'error');
        }
    };
    
    reader.readAsText(file);
    event.target.value = ''; // Reset input
}

function resetDatabase() {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser la base de données ? Cette action est irréversible.')) {
        // Recharger la base originale
        if (typeof SS64_DATABASE !== 'undefined') {
            database = { ...SS64_DATABASE };
            updateOSBadges();
            updateStats();
            showToast('🔄 Base de données réinitialisée', 'success');
        }
    }
}

function clearSearchHistory() {
    if (confirm('Vider l\'historique de recherche ?')) {
        searchHistory = [];
        saveUserPreferences();
        showToast('🧹 Historique de recherche vidé', 'success');
        updateAdminStats();
    }
}

function clearBookmarks() {
    if (confirm('Vider tous les favoris ?')) {
        bookmarks = [];
        saveUserPreferences();
        showToast('📚 Favoris vidés', 'success');
        updateStats();
        
        // Mettre à jour l'affichage si on est dans les résultats
        if (lastResults.length > 0) {
            displayResults(lastResults, document.getElementById('searchInput').value);
        }
    }
}

function resetSettings() {
    if (confirm('Restaurer tous les paramètres par défaut ?')) {
        localStorage.removeItem('ss64CurrentOS');
        localStorage.removeItem('ss64SearchHistory');
        localStorage.removeItem('ss64Bookmarks');
        localStorage.removeItem('ss64UsageStats');
        
        // Réinitialiser les variables
        currentOS = 'all';
        searchHistory = [];
        bookmarks = [];
        usageStats = {};
        
        // Mettre à jour l'interface
        selectOS('all');
        updateStats();
        
        showToast('⚙️ Paramètres restaurés', 'success');
    }
}

// Gestion des paramètres d'URL
function handleURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    const os = urlParams.get('os');
    const cmd = urlParams.get('cmd');
    
    if (os && os !== currentOS) {
        selectOS(os);
    }
    
    if (query) {
        document.getElementById('searchInput').value = query;
        performSearch();
    } else if (cmd) {
        document.getElementById('searchInput').value = cmd;
        performSearch();
    }
}

// Initialisation après chargement
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter les styles pour les animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Gérer les paramètres d'URL après un délai pour s'assurer que la base est chargée
    setTimeout(handleURLParams, 1000);
});