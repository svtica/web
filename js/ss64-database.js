// Base de données SS64 - Commandes de ligne de commande complète
// Générée pour utilisation hors-ligne
// Date: ${new Date().toISOString()}

const SS64_DATABASE = {
  "windows": [
    // Commandes réseau essentielles
    {
      "name": "ping",
      "description": "Envoie des paquets ICMP Echo Request à un hôte réseau pour tester la connectivité",
      "syntax": "ping [-t] [-a] [-n count] [-l size] [-f] [-i TTL] [-v TOS] [-r count] [-s count] [[-j host-list] | [-k host-list]] [-w timeout] [-R] [-S srcaddr] [-c compartment] [-p] [-4] [-6] target_name",
      "examples": [
        "ping google.com",
        "ping -t 192.168.1.1",
        "ping -n 4 8.8.8.8",
        "ping -l 1000 example.com"
      ]
    },
    {
      "name": "ipconfig",
      "description": "Affiche toute la configuration TCP/IP actuelle et actualise les paramètres DHCP et DNS",
      "syntax": "ipconfig [/allcompartments] [/all] [/renew [adapter]] [/release [adapter]] [/renew6[adapter]] [/release6 [adapter]] [/flushdns] [/displaydns] [/registerdns] [/showclassid adapter] [/setclassid adapter [classid]]",
      "examples": [
        "ipconfig",
        "ipconfig /all",
        "ipconfig /flushdns",
        "ipconfig /release",
        "ipconfig /renew"
      ]
    },
    {
      "name": "netstat",
      "description": "Affiche les connexions réseau actives, les tables de routage et les statistiques d'interface réseau",
      "syntax": "netstat [-a] [-b] [-e] [-f] [-n] [-o] [-p proto] [-r] [-s] [-x] [-t] [interval]",
      "examples": [
        "netstat -an",
        "netstat -b",
        "netstat -r",
        "netstat -o",
        "netstat -an | findstr :80"
      ]
    },
    {
      "name": "tracert",
      "description": "Trace l'itinéraire que prennent les paquets IP pour atteindre une destination",
      "syntax": "tracert [-d] [-h maximum_hops] [-j host-list] [-w timeout] [-R] [-S srcaddr] [-4] [-6] target_name",
      "examples": [
        "tracert google.com",
        "tracert -d 8.8.8.8",
        "tracert -h 15 example.com"
      ]
    },
    {
      "name": "nslookup",
      "description": "Affiche des informations que vous pouvez utiliser pour diagnostiquer l'infrastructure DNS",
      "syntax": "nslookup [-opt ...] [name | -] [server]",
      "examples": [
        "nslookup google.com",
        "nslookup google.com 8.8.8.8",
        "nslookup -type=MX example.com"
      ]
    },
    {
      "name": "arp",
      "description": "Affiche et modifie les tables de traduction d'adresses IP vers des adresses physiques utilisées par le protocole de résolution d'adresse (ARP)",
      "syntax": "arp [-a] [-g] [-d inet_addr [if_addr]] [-s inet_addr eth_addr [if_addr]]",
      "examples": [
        "arp -a",
        "arp -a -N 192.168.1.1",
        "arp -d 192.168.1.100"
      ]
    },
    {
      "name": "route",
      "description": "Manipule les tables de routage réseau",
      "syntax": "route [-f] [-p] [command [destination] [mask netmask] [gateway] [metric metric]] [if interface]]",
      "examples": [
        "route print",
        "route add 0.0.0.0 mask 0.0.0.0 192.168.1.1",
        "route delete 10.0.0.0"
      ]
    },
    {
      "name": "netsh",
      "description": "Utilitaire de script de ligne de commande qui vous permet d'afficher ou de modifier la configuration réseau d'un ordinateur",
      "syntax": "netsh [-a AliasFile] [-c Context] [-r RemoteMachine] [-u [DomainName\\]UserName] [-p Password | *] [Command | -f ScriptFile]",
      "examples": [
        "netsh wlan show profiles",
        "netsh int ip show config",
        "netsh firewall show state",
        "netsh wlan connect name=\"WiFiName\""
      ]
    },
    
    // Commandes système
    {
      "name": "tasklist",
      "description": "Affiche une liste des processus actuellement en cours d'exécution sur l'ordinateur local ou distant",
      "syntax": "tasklist [/s computer [/u [domain\\]user [/p password]]] [/m [module] | /svc | /v] [/fi filter] [/fo format] [/nh]",
      "examples": [
        "tasklist",
        "tasklist /svc",
        "tasklist /m",
        "tasklist /fi \"STATUS eq running\""
      ]
    },
    {
      "name": "taskkill",
      "description": "Termine une ou plusieurs tâches ou processus",
      "syntax": "taskkill [/s computer [/u [domain\\]user [/p [password]]]] {[/fi filter] [...] | /pid processid [...] | /im imagename [...]} [/t] [/f]",
      "examples": [
        "taskkill /im notepad.exe",
        "taskkill /pid 1234",
        "taskkill /f /im chrome.exe",
        "taskkill /f /fi \"STATUS eq not responding\""
      ]
    },
    {
      "name": "systeminfo",
      "description": "Affiche les informations de configuration d'un ordinateur et de son système d'exploitation",
      "syntax": "systeminfo [/s computer [/u [domain\\]user [/p [password]]]] [/fo {TABLE | LIST | CSV}] [/nh]",
      "examples": [
        "systeminfo",
        "systeminfo /fo csv",
        "systeminfo /s computername"
      ]
    },
    {
      "name": "whoami",
      "description": "Affiche les informations de nom d'utilisateur, de groupe et d'identificateur de sécurité (SID) pour l'utilisateur actuellement connecté sur le système local",
      "syntax": "whoami [/upn | /fqdn | /logonid] [/user] [/groups] [/priv] [/fo {TABLE | LIST | CSV}] [/all]",
      "examples": [
        "whoami",
        "whoami /groups",
        "whoami /priv",
        "whoami /all"
      ]
    },
    {
      "name": "wmic",
      "description": "Windows Management Instrumentation Command-line",
      "syntax": "wmic [global switches] <command>",
      "examples": [
        "wmic computersystem get model,name,manufacturer",
        "wmic process list brief",
        "wmic logicaldisk get size,freespace,caption",
        "wmic service where \"state='running'\" get name,displayname"
      ]
    },
    
    // Commandes fichiers/dossiers
    {
      "name": "dir",
      "description": "Affiche la liste des fichiers et sous-répertoires d'un répertoire",
      "syntax": "dir [drive:][path][filename] [/a[[:]attributes]] [/b] [/c] [/d] [/l] [/n] [/o[:]sortorder] [/p] [/q] [/r] [/s] [/t[:]timefield] [/w] [/x] [/4]",
      "examples": [
        "dir",
        "dir /s",
        "dir *.txt",
        "dir /ah",
        "dir /od"
      ]
    },
    {
      "name": "copy",
      "description": "Copie un ou plusieurs fichiers vers un autre emplacement",
      "syntax": "copy [/a | /b] source [/a | /b] [+ source [/a | /b] [+ ...]] [destination [/a | /b]] [/v] [/n] [/y | /-y] [/z] [/l]",
      "examples": [
        "copy file1.txt file2.txt",
        "copy *.txt d:\\backup\\",
        "copy /y source.txt dest.txt"
      ]
    },
    {
      "name": "xcopy",
      "description": "Copie des fichiers et des arborescences de répertoires",
      "syntax": "xcopy source [destination] [/a | /m] [/d[:date]] [/p] [/s [/e]] [/v] [/w] [/c] [/i] [/q] [/f] [/l] [/g] [/h] [/r] [/t] [/u] [/k] [/n] [/o] [/x] [/y] [/-y] [/z] [/exclude:file1[+file2][+file3]...]",
      "examples": [
        "xcopy c:\\source d:\\backup /s /e",
        "xcopy *.doc d:\\docs\\ /d",
        "xcopy /s /e /h /y source dest"
      ]
    },
    {
      "name": "robocopy",
      "description": "Utilitaire de copie de fichiers robuste pour Windows",
      "syntax": "robocopy source destination [file [file]...] [options]",
      "examples": [
        "robocopy c:\\source d:\\dest /e",
        "robocopy /s /purge source dest",
        "robocopy /mir /z /log:backup.log source dest"
      ]
    },
    {
      "name": "del",
      "description": "Supprime un ou plusieurs fichiers",
      "syntax": "del [/p] [/f] [/s] [/q] [/a[[:]attributes]] names",
      "examples": [
        "del *.tmp",
        "del /s /q temp\\*.*",
        "del /f /a:h hiddenfile.txt"
      ]
    },
    {
      "name": "md",
      "description": "Crée un répertoire",
      "syntax": "md [drive:]path",
      "examples": [
        "md newfolder",
        "mkdir c:\\temp\\backup",
        "md \"folder with spaces\""
      ]
    },
    {
      "name": "rd",
      "description": "Supprime un répertoire",
      "syntax": "rd [/s] [/q] [drive:]path",
      "examples": [
        "rd temp",
        "rd /s /q oldfolder",
        "rmdir /s backup"
      ]
    },
    {
      "name": "attrib",
      "description": "Affiche ou modifie les attributs de fichier",
      "syntax": "attrib [{+|-}r] [{+|-}a] [{+|-}s] [{+|-}h] [{+|-}i] [drive:][path][filename] [/s [/d] [/l]]",
      "examples": [
        "attrib +h secret.txt",
        "attrib -r *.doc",
        "attrib +s +h /s /d folder"
      ]
    },

    // Commandes utilisateurs et sécurité
    {
      "name": "net",
      "description": "Gère les ressources réseau",
      "syntax": "net [accounts | computer | config | continue | file | group | help | helpmsg | localgroup | pause | session | share | start | statistics | stop | time | use | user | view]",
      "examples": [
        "net user",
        "net user john password123 /add",
        "net localgroup administrators john /add",
        "net share"
      ]
    }
  ],

  "linux": [
    // Commandes système de base
    {
      "name": "ls",
      "description": "Liste le contenu des répertoires",
      "syntax": "ls [OPTION]... [FILE]...",
      "examples": [
        "ls",
        "ls -la",
        "ls -lh",
        "ls -R",
        "ls -lt"
      ]
    },
    {
      "name": "cd",
      "description": "Change le répertoire courant",
      "syntax": "cd [DIRECTORY]",
      "examples": [
        "cd /home/user",
        "cd ..",
        "cd ~",
        "cd -"
      ]
    },
    {
      "name": "pwd",
      "description": "Affiche le répertoire de travail actuel",
      "syntax": "pwd [OPTION]...",
      "examples": [
        "pwd"
      ]
    },
    {
      "name": "mkdir",
      "description": "Crée des répertoires",
      "syntax": "mkdir [OPTION]... DIRECTORY...",
      "examples": [
        "mkdir newdir",
        "mkdir -p path/to/dir",
        "mkdir -m 755 folder"
      ]
    },
    {
      "name": "rmdir",
      "description": "Supprime des répertoires vides",
      "syntax": "rmdir [OPTION]... DIRECTORY...",
      "examples": [
        "rmdir emptydir",
        "rmdir -p path/to/empty/dir"
      ]
    },
    {
      "name": "rm",
      "description": "Supprime des fichiers et répertoires",
      "syntax": "rm [OPTION]... FILE...",
      "examples": [
        "rm file.txt",
        "rm -rf directory",
        "rm -i *.tmp",
        "rm -f file.txt"
      ]
    },
    {
      "name": "cp",
      "description": "Copie des fichiers ou répertoires",
      "syntax": "cp [OPTION]... [-T] SOURCE DEST",
      "examples": [
        "cp file1.txt file2.txt",
        "cp -r dir1 dir2",
        "cp -p file.txt backup/"
      ]
    },
    {
      "name": "mv",
      "description": "Déplace/renomme des fichiers et répertoires",
      "syntax": "mv [OPTION]... [-T] SOURCE DEST",
      "examples": [
        "mv file1.txt file2.txt",
        "mv file.txt /tmp/",
        "mv *.txt documents/"
      ]
    },
    
    // Visualisation et édition de fichiers
    {
      "name": "cat",
      "description": "Affiche le contenu d'un fichier",
      "syntax": "cat [OPTION]... [FILE]...",
      "examples": [
        "cat file.txt",
        "cat file1.txt file2.txt",
        "cat -n file.txt"
      ]
    },
    {
      "name": "less",
      "description": "Visualise le contenu d'un fichier page par page",
      "syntax": "less [OPTION]... [FILE]...",
      "examples": [
        "less file.txt",
        "less +G file.txt",
        "ps aux | less"
      ]
    },
    {
      "name": "head",
      "description": "Affiche les premières lignes d'un fichier",
      "syntax": "head [OPTION]... [FILE]...",
      "examples": [
        "head file.txt",
        "head -n 20 file.txt",
        "head -c 100 file.txt"
      ]
    },
    {
      "name": "tail",
      "description": "Affiche les dernières lignes d'un fichier",
      "syntax": "tail [OPTION]... [FILE]...",
      "examples": [
        "tail file.txt",
        "tail -n 50 file.txt",
        "tail -f /var/log/syslog"
      ]
    },
    {
      "name": "nano",
      "description": "Éditeur de texte simple en ligne de commande",
      "syntax": "nano [OPTIONS] [[+LINE[,COLUMN]] FILE]...",
      "examples": [
        "nano file.txt",
        "nano +25 file.txt",
        "nano -w file.txt"
      ]
    },
    {
      "name": "vi",
      "description": "Éditeur de texte vi/vim",
      "syntax": "vi [OPTION]... [FILE]...",
      "examples": [
        "vi file.txt",
        "vim +10 file.txt",
        "vi -r file.txt"
      ]
    },
    
    // Recherche et filtrage
    {
      "name": "grep",
      "description": "Recherche des motifs dans les fichiers texte",
      "syntax": "grep [OPTIONS] PATTERN [FILE...]",
      "examples": [
        "grep \"error\" /var/log/syslog",
        "grep -r \"TODO\" .",
        "grep -n \"main\" *.c",
        "grep -i \"pattern\" file.txt"
      ]
    },
    {
      "name": "find",
      "description": "Recherche des fichiers et répertoires",
      "syntax": "find [path...] [expression]",
      "examples": [
        "find . -name \"*.txt\"",
        "find /home -type d",
        "find . -mtime -7",
        "find /var -size +100M"
      ]
    },
    {
      "name": "locate",
      "description": "Trouve rapidement des fichiers par nom",
      "syntax": "locate [OPTION]... PATTERN...",
      "examples": [
        "locate filename",
        "locate \"*.pdf\"",
        "locate -i FILE"
      ]
    },
    {
      "name": "which",
      "description": "Localise une commande",
      "syntax": "which [options] [--] COMMAND...",
      "examples": [
        "which python",
        "which -a gcc",
        "which ls"
      ]
    },
    {
      "name": "whereis",
      "description": "Localise le binaire, les sources et les pages de manuel d'une commande",
      "syntax": "whereis [options] [-BMS directory... -f] name...",
      "examples": [
        "whereis ls",
        "whereis -b gcc",
        "whereis -m python"
      ]
    },
    
    // Gestion des processus
    {
      "name": "ps",
      "description": "Affiche les processus en cours d'exécution",
      "syntax": "ps [options]",
      "examples": [
        "ps aux",
        "ps -ef",
        "ps -u username",
        "ps --forest"
      ]
    },
    {
      "name": "top",
      "description": "Affiche et met à jour les processus en cours d'exécution",
      "syntax": "top [options]",
      "examples": [
        "top",
        "top -u username",
        "top -p PID"
      ]
    },
    {
      "name": "htop",
      "description": "Visualiseur de processus interactif amélioré",
      "syntax": "htop [options]",
      "examples": [
        "htop",
        "htop -u username",
        "htop -p PID"
      ]
    },
    {
      "name": "kill",
      "description": "Termine des processus par PID",
      "syntax": "kill [options] <pid> [...]",
      "examples": [
        "kill 1234",
        "kill -9 1234",
        "kill -TERM 1234"
      ]
    },
    {
      "name": "killall",
      "description": "Termine des processus par nom",
      "syntax": "killall [options] name...",
      "examples": [
        "killall firefox",
        "killall -9 chrome",
        "killall -u username"
      ]
    },
    {
      "name": "jobs",
      "description": "Affiche les tâches actives",
      "syntax": "jobs [options] [job_spec ...]",
      "examples": [
        "jobs",
        "jobs -l",
        "jobs -p"
      ]
    },
    {
      "name": "bg",
      "description": "Met une tâche en arrière-plan",
      "syntax": "bg [job_spec ...]",
      "examples": [
        "bg",
        "bg %1",
        "bg %+"
      ]
    },
    {
      "name": "fg",
      "description": "Met une tâche en avant-plan",
      "syntax": "fg [job_spec]",
      "examples": [
        "fg",
        "fg %1",
        "fg %-"
      ]
    },
    {
      "name": "nohup",
      "description": "Exécute des commandes à l'abri des interruptions",
      "syntax": "nohup COMMAND [ARGS]...",
      "examples": [
        "nohup ./script.sh &",
        "nohup python app.py > output.log 2>&1 &"
      ]
    },
    
    // Permissions et propriété
    {
      "name": "chmod",
      "description": "Modifie les permissions des fichiers et répertoires",
      "syntax": "chmod [OPTION]... MODE[,MODE]... FILE...",
      "examples": [
        "chmod 755 script.sh",
        "chmod +x file",
        "chmod -R 644 /path/to/dir",
        "chmod u+w,g-w,o-r file.txt"
      ]
    },
    {
      "name": "chown",
      "description": "Modifie le propriétaire et le groupe des fichiers",
      "syntax": "chown [OPTION]... [OWNER][:[GROUP]] FILE...",
      "examples": [
        "chown user file.txt",
        "chown user:group file.txt",
        "chown -R user:group directory"
      ]
    },
    {
      "name": "chgrp",
      "description": "Modifie le groupe propriétaire des fichiers",
      "syntax": "chgrp [OPTION]... GROUP FILE...",
      "examples": [
        "chgrp staff file.txt",
        "chgrp -R users directory"
      ]
    },
    {
      "name": "umask",
      "description": "Définit le masque de création de fichier",
      "syntax": "umask [-p] [-S] [mode]",
      "examples": [
        "umask",
        "umask 022",
        "umask -S"
      ]
    },
    
    // Réseau
    {
      "name": "ping",
      "description": "Teste la connectivité réseau",
      "syntax": "ping [options] destination",
      "examples": [
        "ping google.com",
        "ping -c 4 8.8.8.8",
        "ping -i 2 192.168.1.1"
      ]
    },
    {
      "name": "wget",
      "description": "Télécharge des fichiers depuis le web",
      "syntax": "wget [option]... [URL]...",
      "examples": [
        "wget http://example.com/file.zip",
        "wget -r -np http://example.com/",
        "wget -c http://example.com/large-file.zip"
      ]
    },
    {
      "name": "curl",
      "description": "Transfère des données vers/depuis des serveurs",
      "syntax": "curl [options] [URL...]",
      "examples": [
        "curl http://example.com",
        "curl -O http://example.com/file.zip",
        "curl -X POST -d \"data\" http://api.example.com"
      ]
    },
    {
      "name": "ssh",
      "description": "Client SSH pour connexions sécurisées",
      "syntax": "ssh [options] [user@]hostname [command]",
      "examples": [
        "ssh user@server.com",
        "ssh -p 2222 user@server.com",
        "ssh -L 8080:localhost:80 user@server.com"
      ]
    },
    {
      "name": "scp",
      "description": "Copie sécurisée de fichiers via SSH",
      "syntax": "scp [options] source... target",
      "examples": [
        "scp file.txt user@server:/path/",
        "scp -r directory user@server:",
        "scp user@server:file.txt ."
      ]
    },
    {
      "name": "netstat",
      "description": "Affiche les connexions réseau et les statistiques",
      "syntax": "netstat [options]",
      "examples": [
        "netstat -tuln",
        "netstat -r",
        "netstat -i"
      ]
    },
    
    // Archives et compression
    {
      "name": "tar",
      "description": "Archive et extrait des fichiers",
      "syntax": "tar [options] [archive-file] [file or directory to be archived]",
      "examples": [
        "tar -czf archive.tar.gz directory/",
        "tar -xzf archive.tar.gz",
        "tar -tzf archive.tar.gz"
      ]
    },
    {
      "name": "gzip",
      "description": "Compresse ou décompresse des fichiers",
      "syntax": "gzip [options] [file ...]",
      "examples": [
        "gzip file.txt",
        "gzip -d file.txt.gz",
        "gzip -9 file.txt"
      ]
    },
    {
      "name": "zip",
      "description": "Crée des archives ZIP",
      "syntax": "zip [options] zipfile files...",
      "examples": [
        "zip archive.zip file1.txt file2.txt",
        "zip -r archive.zip directory/",
        "zip -9 archive.zip file.txt"
      ]
    },
    {
      "name": "unzip",
      "description": "Extrait des archives ZIP",
      "syntax": "unzip [options] zipfile [file(s) ...]",
      "examples": [
        "unzip archive.zip",
        "unzip archive.zip -d /path/to/extract/",
        "unzip -l archive.zip"
      ]
    },

    // Gestion des services (systemd)
    {
      "name": "systemctl",
      "description": "Contrôle systemd et les services",
      "syntax": "systemctl [OPTIONS...] COMMAND [NAME...]",
      "examples": [
        "systemctl status nginx",
        "systemctl start apache2",
        "systemctl enable ssh",
        "systemctl list-units"
      ]
    },

    // Informations système
    {
      "name": "df",
      "description": "Affiche l'utilisation de l'espace disque des systèmes de fichiers",
      "syntax": "df [OPTION]... [FILE]...",
      "examples": [
        "df -h",
        "df -i",
        "df /home"
      ]
    },
    {
      "name": "du",
      "description": "Affiche l'utilisation de l'espace disque des répertoires",
      "syntax": "du [OPTION]... [FILE]...",
      "examples": [
        "du -h",
        "du -sh *",
        "du -h --max-depth=1"
      ]
    },
    {
      "name": "free",
      "description": "Affiche la quantité de mémoire libre et utilisée",
      "syntax": "free [options]",
      "examples": [
        "free -h",
        "free -m",
        "free -g"
      ]
    }
  ],

  "macos": [
    // Commandes spécifiques macOS
    {
      "name": "brew",
      "description": "Gestionnaire de paquets pour macOS",
      "syntax": "brew [command] [options] [formula]",
      "examples": [
        "brew install git",
        "brew update",
        "brew list",
        "brew search package",
        "brew upgrade"
      ]
    },
    {
      "name": "defaults",
      "description": "Accède aux préférences système de macOS",
      "syntax": "defaults [read|write|delete] domain key [value]",
      "examples": [
        "defaults write com.apple.dock autohide -bool true",
        "defaults read com.apple.dock",
        "defaults write com.apple.finder AppleShowAllFiles TRUE"
      ]
    },
    {
      "name": "diskutil",
      "description": "Utilitaire de gestion des disques",
      "syntax": "diskutil [verb] [options]",
      "examples": [
        "diskutil list",
        "diskutil info disk0",
        "diskutil repairPermissions /"
      ]
    },
    {
      "name": "launchctl",
      "description": "Interface pour launchd (gestionnaire de services)",
      "syntax": "launchctl [subcommand] [options] [arguments...]",
      "examples": [
        "launchctl list",
        "launchctl load ~/Library/LaunchAgents/service.plist",
        "launchctl unload ~/Library/LaunchAgents/service.plist"
      ]
    },
    {
      "name": "softwareupdate",
      "description": "Gère les mises à jour du système",
      "syntax": "softwareupdate [options]",
      "examples": [
        "softwareupdate -l",
        "softwareupdate -i -a",
        "softwareupdate -i \"macOS Update\""
      ]
    },
    {
      "name": "system_profiler",
      "description": "Affiche les informations système détaillées",
      "syntax": "system_profiler [options] [dataType1 ... dataTypeN]",
      "examples": [
        "system_profiler SPHardwareDataType",
        "system_profiler SPSoftwareDataType",
        "system_profiler SPNetworkDataType"
      ]
    },
    {
      "name": "pmset",
      "description": "Gère les paramètres de gestion d'énergie",
      "syntax": "pmset [options] [assertions]",
      "examples": [
        "pmset -g batt",
        "pmset -g thermstate",
        "sudo pmset -a standby 0"
      ]
    },
    {
      "name": "screencapture",
      "description": "Capture d'écran en ligne de commande",
      "syntax": "screencapture [options] [file]",
      "examples": [
        "screencapture screenshot.png",
        "screencapture -c",
        "screencapture -R 100,100,400,400 region.png"
      ]
    },
    {
      "name": "say",
      "description": "Synthèse vocale",
      "syntax": "say [options] [message]",
      "examples": [
        "say \"Hello World\"",
        "say -v Alex \"This is a test\"",
        "say -f textfile.txt"
      ]
    },
    {
      "name": "caffeinate",
      "description": "Empêche le système de se mettre en veille",
      "syntax": "caffeinate [options] [command]",
      "examples": [
        "caffeinate -s",
        "caffeinate -t 3600",
        "caffeinate ./long-running-script.sh"
      ]
    },
    {
      "name": "open",
      "description": "Ouvre des fichiers et applications",
      "syntax": "open [options] file ...",
      "examples": [
        "open file.txt",
        "open -a Safari",
        "open .",
        "open -a \"Visual Studio Code\" project/"
      ]
    },
    {
      "name": "mdls",
      "description": "Liste les métadonnées Spotlight d'un fichier",
      "syntax": "mdls [options] file ...",
      "examples": [
        "mdls document.pdf",
        "mdls -name kMDItemContentType file.jpg"
      ]
    },
    {
      "name": "mdfind",
      "description": "Recherche avec Spotlight depuis la ligne de commande",
      "syntax": "mdfind [options] query",
      "examples": [
        "mdfind \"kind:pdf\"",
        "mdfind -name \"*.txt\"",
        "mdfind -onlyin ~/Documents invoice"
      ]
    },
    {
      "name": "textutil",
      "description": "Manipule et convertit des fichiers texte",
      "syntax": "textutil [options] file ...",
      "examples": [
        "textutil -convert html file.rtf",
        "textutil -convert txt file.doc"
      ]
    },
    {
      "name": "ditto",
      "description": "Copie des fichiers et dossiers",
      "syntax": "ditto [options] src ... dst",
      "examples": [
        "ditto source_folder destination_folder",
        "ditto -c -k source archive.zip"
      ]
    },

    // Commandes communes avec Linux mais avec spécificités macOS
    {
      "name": "ls",
      "description": "Liste le contenu des répertoires (version BSD)",
      "syntax": "ls [options] [file ...]",
      "examples": [
        "ls -la",
        "ls -lG",
        "ls -@ file.txt"
      ]
    },
    {
      "name": "find",
      "description": "Recherche des fichiers et répertoires (version BSD)",
      "syntax": "find [path ...] [expression]",
      "examples": [
        "find . -name \"*.txt\"",
        "find /Users -type d -name Documents"
      ]
    }
  ],

  "powershell": [
    // Cmdlets de base
    {
      "name": "Get-Process",
      "description": "Obtient les processus en cours d'exécution sur l'ordinateur local ou distant",
      "syntax": "Get-Process [[-Name] <String[]>] [-ComputerName <String[]>] [-Module] [-FileVersionInfo] [<CommonParameters>]",
      "examples": [
        "Get-Process",
        "Get-Process -Name \"notepad\"",
        "Get-Process | Sort-Object CPU -Descending",
        "Get-Process chrome | Stop-Process"
      ]
    },
    {
      "name": "Get-Service",
      "description": "Obtient les services sur l'ordinateur local ou distant",
      "syntax": "Get-Service [[-Name] <String[]>] [-ComputerName <String[]>] [-DependentServices] [-RequiredServices] [-Include <String[]>] [-Exclude <String[]>] [<CommonParameters>]",
      "examples": [
        "Get-Service",
        "Get-Service -Name \"Spooler\"",
        "Get-Service | Where-Object {$_.Status -eq \"Running\"}",
        "Get-Service W* | Stop-Service"
      ]
    },
    {
      "name": "Test-Connection",
      "description": "Envoie des paquets de requête d'écho ICMP ou ping à un ou plusieurs ordinateurs",
      "syntax": "Test-Connection [-ComputerName] <String[]> [-AsJob] [-DcomAuthentication <AuthenticationLevel>] [-WsmanAuthentication <String>] [-Protocol <String>] [-BufferSize <Int32>] [-ComputerName <String[]>] [-Count <Int32>] [-Credential <PSCredential>] [-Source <String[]>] [-Impersonation <ImpersonationLevel>] [-ThrottleLimit <Int32>] [-TimeToLive <Int32>] [-Delay <Int32>] [<CommonParameters>]",
      "examples": [
        "Test-Connection google.com",
        "Test-Connection -ComputerName 192.168.1.1 -Count 3",
        "Test-Connection -ComputerName server01,server02"
      ]
    },
    {
      "name": "Get-EventLog",
      "description": "Obtient les événements dans un journal d'événements ou une liste des journaux d'événements sur l'ordinateur local ou distant",
      "syntax": "Get-EventLog [-LogName] <String> [-ComputerName <String[]>] [-Newest <Int32>] [-After <DateTime>] [-Before <DateTime>] [-UserName <String[]>] [<CommonParameters>]",
      "examples": [
        "Get-EventLog -LogName System -Newest 10",
        "Get-EventLog -LogName Application -EntryType Error",
        "Get-EventLog Security | Where-Object {$_.TimeWritten -gt (Get-Date).AddDays(-1)}"
      ]
    },
    {
      "name": "Get-ChildItem",
      "description": "Obtient les éléments et les éléments enfants dans un ou plusieurs emplacements spécifiés",
      "syntax": "Get-ChildItem [[-Path] <String[]>] [[-Filter] <String>] [-Include <String[]>] [-Exclude <String[]>] [-Recurse] [-Depth <UInt32>] [-Force] [-Name] [-Attributes <FlagsExpression[FileAttributes]>] [-Directory] [-File] [-Hidden] [-ReadOnly] [-System] [<CommonParameters>]",
      "examples": [
        "Get-ChildItem",
        "Get-ChildItem -Path C:\\ -Recurse",
        "Get-ChildItem *.txt",
        "Get-ChildItem -Directory"
      ]
    },
    {
      "name": "Set-Location",
      "description": "Définit l'emplacement de travail actuel vers un emplacement spécifié",
      "syntax": "Set-Location [[-Path] <String>] [-LiteralPath <String>] [-PassThru] [-StackName <String>] [<CommonParameters>]",
      "examples": [
        "Set-Location C:\\Users",
        "Set-Location ..",
        "cd C:\\Windows",
        "sl D:\\Projects"
      ]
    },
    {
      "name": "Get-Content",
      "description": "Obtient le contenu de l'élément à l'emplacement spécifié",
      "syntax": "Get-Content [-Path] <String[]> [-ReadCount <Int64>] [-TotalCount <Int64>] [-Tail <Int32>] [-Filter <String>] [-Include <String[]>] [-Exclude <String[]>] [-Force] [-Credential <PSCredential>] [-Delimiter <String>] [-Wait] [-Raw] [-Encoding <FileSystemCmdletProviderEncoding>] [-Stream <String>] [<CommonParameters>]",
      "examples": [
        "Get-Content file.txt",
        "Get-Content -Path log.txt -Tail 10",
        "Get-Content C:\\temp\\*.txt"
      ]
    },
    {
      "name": "Set-Content",
      "description": "Écrit du nouveau contenu ou remplace le contenu existant dans un fichier",
      "syntax": "Set-Content [-Path] <String[]> [-Value] <Object[]> [-PassThru] [-Filter <String>] [-Include <String[]>] [-Exclude <String[]>] [-Force] [-Credential <PSCredential>] [-WhatIf] [-Confirm] [-Encoding <FileSystemCmdletProviderEncoding>] [-Stream <String>] [<CommonParameters>]",
      "examples": [
        "Set-Content -Path file.txt -Value \"Hello World\"",
        "\"New content\" | Set-Content file.txt",
        "Set-Content -Path log.txt -Value (Get-Date)"
      ]
    },
    {
      "name": "Copy-Item",
      "description": "Copie un élément d'un emplacement vers un autre",
      "syntax": "Copy-Item [-Path] <String[]> [[-Destination] <String>] [-Container] [-Force] [-Filter <String>] [-Include <String[]>] [-Exclude <String[]>] [-Recurse] [-PassThru] [-Credential <PSCredential>] [-WhatIf] [-Confirm] [<CommonParameters>]",
      "examples": [
        "Copy-Item file.txt backup.txt",
        "Copy-Item -Path source -Destination dest -Recurse",
        "Copy-Item C:\\temp\\*.txt D:\\backup\\"
      ]
    },
    {
      "name": "Move-Item",
      "description": "Déplace un élément d'un emplacement vers un autre",
      "syntax": "Move-Item [-Path] <String[]> [[-Destination] <String>] [-Force] [-Filter <String>] [-Include <String[]>] [-Exclude <String[]>] [-PassThru] [-Credential <PSCredential>] [-WhatIf] [-Confirm] [<CommonParameters>]",
      "examples": [
        "Move-Item file.txt C:\\Temp\\",
        "Move-Item -Path oldname.txt -Destination newname.txt",
        "Move-Item *.log D:\\logs\\"
      ]
    },
    {
      "name": "Remove-Item",
      "description": "Supprime les éléments spécifiés",
      "syntax": "Remove-Item [-Path] <String[]> [-Filter <String>] [-Include <String[]>] [-Exclude <String[]>] [-Recurse] [-Force] [-Credential <PSCredential>] [-WhatIf] [-Confirm] [<CommonParameters>]",
      "examples": [
        "Remove-Item file.txt",
        "Remove-Item -Path folder -Recurse -Force",
        "Remove-Item *.tmp"
      ]
    },
    {
      "name": "New-Item",
      "description": "Crée un nouvel élément",
      "syntax": "New-Item [-Path] <String[]> [-ItemType <String>] [-Value <Object>] [-Force] [-Credential <PSCredential>] [-WhatIf] [-Confirm] [<CommonParameters>]",
      "examples": [
        "New-Item -Path file.txt -ItemType File",
        "New-Item -Path folder -ItemType Directory",
        "New-Item test.txt -ItemType File -Value \"Content\""
      ]
    },
    {
      "name": "Get-WmiObject",
      "description": "Obtient des instances de classes WMI ou des informations sur les classes disponibles",
      "syntax": "Get-WmiObject [-Class] <String> [[-Property] <String[]>] [-Filter <String>] [-Amended] [-DirectRead] [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <String>] [-EnableAllPrivileges] [-Authority <String>] [-Credential <PSCredential>] [-ThrottleLimit <Int32>] [-ComputerName <String[]>] [-Namespace <String>] [<CommonParameters>]",
      "examples": [
        "Get-WmiObject -Class Win32_ComputerSystem",
        "Get-WmiObject Win32_Process",
        "Get-WmiObject -Class Win32_LogicalDisk | Where-Object {$_.DriveType -eq 3}"
      ]
    },
    {
      "name": "Invoke-Command",
      "description": "Exécute des commandes sur des ordinateurs locaux et distants",
      "syntax": "Invoke-Command [-ScriptBlock] <ScriptBlock> [-NoNewScope] [-InputObject <PSObject>] [-ArgumentList <Object[]>] [<CommonParameters>]",
      "examples": [
        "Invoke-Command -ScriptBlock {Get-Process}",
        "Invoke-Command -ComputerName Server01 -ScriptBlock {Get-Service}",
        "Invoke-Command -ScriptBlock {param($name) Get-Process $name} -ArgumentList \"notepad\""
      ]
    },
    {
      "name": "Get-History",
      "description": "Obtient une liste des commandes entrées pendant la session en cours",
      "syntax": "Get-History [[-Id] <Int64[]>] [[-Count] <Int32>] [<CommonParameters>]",
      "examples": [
        "Get-History",
        "Get-History -Count 5",
        "history",
        "Get-History | Where-Object {$_.CommandLine -like \"*Get-Process*\"}"
      ]
    },
    {
      "name": "Clear-History",
      "description": "Supprime les entrées de l'historique des commandes PowerShell",
      "syntax": "Clear-History [[-Id] <Int32[]>] [[-Count] <Int32>] [-Newest] [-WhatIf] [-Confirm] [<CommonParameters>]",
      "examples": [
        "Clear-History",
        "Clear-History -Id 5,10,15",
        "Clear-History -Count 10 -Newest"
      ]
    },
    {
      "name": "Get-Help",
      "description": "Affiche des informations sur les commandes et concepts PowerShell",
      "syntax": "Get-Help [[-Name] <String>] [-Path <String>] [-Category <String[]>] [-Component <String[]>] [-Functionality <String[]>] [-Role <String[]>] [-Full] [-Detailed] [-Examples] [-Parameter <String>] [-Online] [-ShowWindow] [<CommonParameters>]",
      "examples": [
        "Get-Help Get-Process",
        "Get-Help *service*",
        "Get-Help Get-Process -Examples",
        "Get-Help about_variables"
      ]
    },
    {
      "name": "Where-Object",
      "description": "Sélectionne des objets d'une collection en fonction de leurs valeurs de propriété",
      "syntax": "Where-Object [-FilterScript] <ScriptBlock> [-InputObject <PSObject>] [<CommonParameters>]",
      "examples": [
        "Get-Process | Where-Object {$_.CPU -gt 100}",
        "Get-Service | Where-Object Status -eq \"Running\"",
        "1..10 | Where-Object {$_ % 2 -eq 0}"
      ]
    },
    {
      "name": "Select-Object",
      "description": "Sélectionne des objets ou propriétés d'objets",
      "syntax": "Select-Object [[-Property] <Object[]>] [-InputObject <PSObject>] [-ExcludeProperty <String[]>] [-ExpandProperty <String>] [-First <Int32>] [-Last <Int32>] [-Unique] [-Wait] [-Index <Int32[]>] [<CommonParameters>]",
      "examples": [
        "Get-Process | Select-Object Name, CPU",
        "Get-Service | Select-Object -First 5",
        "Get-ChildItem | Select-Object Name, Length, LastWriteTime"
      ]
    },
    {
      "name": "Sort-Object",
      "description": "Trie des objets par valeurs de propriété",
      "syntax": "Sort-Object [[-Property] <Object[]>] [-InputObject <PSObject>] [-Descending] [-Unique] [-Top <Int32>] [-Bottom <Int32>] [<CommonParameters>]",
      "examples": [
        "Get-Process | Sort-Object CPU",
        "Get-ChildItem | Sort-Object LastWriteTime -Descending",
        "Get-Service | Sort-Object Status, Name"
      ]
    },
    {
      "name": "Format-Table",
      "description": "Formate la sortie sous forme de table",
      "syntax": "Format-Table [[-Property] <Object[]>] [-AutoSize] [-RepeatHeader] [-HideTableHeaders] [-Wrap] [-GroupBy <Object>] [-View <String>] [-ShowError] [-DisplayError] [-Force] [-Expand <String>] [-InputObject <PSObject>] [<CommonParameters>]",
      "examples": [
        "Get-Process | Format-Table Name, CPU",
        "Get-Service | Format-Table -AutoSize",
        "Get-ChildItem | Format-Table Name, Length -Wrap"
      ]
    }
  ]
};

// Export pour utilisation dans les modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SS64_DATABASE;
}

// Disponible globalement dans le navigateur
if (typeof window !== 'undefined') {
  window.SS64_DATABASE = SS64_DATABASE;
}

// Statistiques de la base de données
const STATS = {
  totalCommands: Object.values(SS64_DATABASE).reduce((total, commands) => total + commands.length, 0),
  byOS: Object.fromEntries(
    Object.entries(SS64_DATABASE).map(([os, commands]) => [os, commands.length])
  )
};

console.log('📊 Base de données SS64 chargée:');
console.log(`   Total: ${STATS.totalCommands} commandes`);
Object.entries(STATS.byOS).forEach(([os, count]) => {
  console.log(`   ${os}: ${count} commandes`);
});
