// Base de données CommandHub - Extraction automatique complète
// Date de génération: 2025-05-23T01:23:08.685Z
// Total des commandes: 1787

const COMMANDS_DATABASE = {
  "windows": [
    {
      "name": "addusers",
      "description": "Automate the creation of a large number of users. For current OS's this is unsupported, consider using a PowerShell script with New-ADUser, Set-ADAccountPassword, Add-ADPrincipalGroupMembership and Enable-ADAccount",
      "syntax": "addusers [options]",
      "examples": [
        "addusers",
        "addusers --help"
      ]
    },
    {
      "name": "admodcmd-custom",
      "description": "The -custom switch allows you to name the attribute you wish to modify. This operation is only supported against attributes of the following types: Boolean, Case Insensitive String, Distinguished Name, DN Binary, IA5-String, Integer, Numerical String, Unicode String.",
      "syntax": "admodcmd-custom [options]",
      "examples": [
        "admodcmd-custom",
        "admodcmd-custom --help"
      ]
    },
    {
      "name": "admodcmd-ex",
      "description": "Exchange Related Attributes:",
      "syntax": "admodcmd-ex [options]",
      "examples": [
        "admodcmd-ex",
        "admodcmd-ex --help"
      ]
    },
    {
      "name": "admodcmd-mail",
      "description": "Mailbox related Attributes:",
      "syntax": "admodcmd-mail [options]",
      "examples": [
        "admodcmd-mail",
        "admodcmd-mail --help"
      ]
    },
    {
      "name": "admodcmd-ts",
      "description": "Windows 2003 or later is required to modify Terminal Server attributes.",
      "syntax": "admodcmd-ts [options]",
      "examples": [
        "admodcmd-ts",
        "admodcmd-ts --help"
      ]
    },
    {
      "name": "admodcmd-user",
      "description": "User Account Settings:",
      "syntax": "admodcmd-user [options]",
      "examples": [
        "admodcmd-user",
        "admodcmd-user --help"
      ]
    },
    {
      "name": "admodcmd",
      "description": "Active Directory Bulk Modify Tool (Command Line Version) There is also a GUI for this tool called admodify.exe",
      "syntax": "admodcmd [options]",
      "examples": [
        "admodcmd [-dn BaseDN] [-p pagesize] [-s] [-server servername]",
        "admodcmd [-dn BaseDN] [-p pagesize] [-s] [-server servername]"
      ]
    },
    {
      "name": "arp",
      "description": "ARP - Address Resolution Protocol. Display and modify the IP-to-Physical address translation tables used by address resolution protocol.",
      "syntax": "C:\\> arp -a",
      "examples": [
        "arp",
        "arp --help"
      ]
    },
    {
      "name": "assoc",
      "description": "Display or change the association between a file extension and a fileType",
      "syntax": "assoc [options]",
      "examples": [
        "assoc",
        "assoc --help"
      ]
    },
    {
      "name": "associate",
      "description": "One step file association. This utility does the job of both ASSOC and FTYPE, in one step. ASSOCIATE assigns an extension directly with an executable application. This is done by automatically adding a new FileType to the system registry.",
      "syntax": "associate [options]",
      "examples": [
        "associate",
        "associate --help"
      ]
    },
    {
      "name": "attrib",
      "description": "Display or change file attributes. Find Filenames.",
      "syntax": "attrib [options]",
      "examples": [
        "attributes:"
      ]
    },
    {
      "name": "bcdboot",
      "description": "Set up a system partition, repair the boot environment located on the system partition.",
      "syntax": "C:\\> bcdboot C:\\Windows",
      "examples": [
        "bcdboot",
        "bcdboot --help"
      ]
    },
    {
      "name": "bcdedit",
      "description": "Manage Boot Configuration Data (BCD) data stores.",
      "syntax": "bcdedit [options]",
      "examples": [
        "bcdedit /setdbgsettings type value command."
      ]
    },
    {
      "name": "bitsadmin",
      "description": "Manage the Background Intelligent Transfer Service (BITS). The BITS Service can be used to transfer large files from remote hosts. BITS supports throttled and asynchronous transfer of files between machines using idle network bandwidth. This service is used by Windows Update, SUS, SMS and many third party packages.",
      "syntax": "C:\\> Bitsadmin /info SS64 /verbose | find \"STATE: TRANSFERRED\" C:\\> IF %ERRORLEVEL% EQU 0 bitsadmin /complete SS64",
      "examples": [
        "bitsadmin /setaclflags MyJob OGDS",
        "bitsadmin /setaclflags MyJob OGD",
        "bitsadmin /setproxysettings MyJob PRECONFIG"
      ]
    },
    {
      "name": "browstat",
      "description": "Get NetBIOS browser and PDC information. NetBIOS was deprecated in Windows 2000 and above, BROWSTAT is not supported on Server 2008 R2.",
      "syntax": "C:\\>browstat dn List of transports currently bound to the browser 1 \\Device\\NetBT_Tcpip_{B1AFFCA2-6410-4644-9FE7-BA6C274FD4F3}",
      "examples": [
        "browstat",
        "browstat --help"
      ]
    },
    {
      "name": "cacls",
      "description": "Display or modify Access Control Lists (ACLs) for files and folders.",
      "syntax": "cacls [options]",
      "examples": [
        "cacls",
        "cacls --help"
      ]
    },
    {
      "name": "call",
      "description": "Call one batch program from another, or call a subroutine.",
      "syntax": "call [options]",
      "examples": [
        "call :myGetFunc var1 var2 var3"
      ]
    },
    {
      "name": "caspol",
      "description": "Code Access Security Policy Tool. Modify security policy for the machine policy level, the user policy level, and the enterprise policy level.",
      "syntax": "caspol [options]",
      "examples": [
        "caspol",
        "caspol --help"
      ]
    },
    {
      "name": "cd",
      "description": "Change Directory - Select a Folder (and drive)",
      "syntax": "cd \\My folder",
      "examples": [
        "cd \\My folder",
        "cd \"\\My folder\""
      ]
    },
    {
      "name": "certreq",
      "description": "Request certificate from a certification authority (CA), retrieve a response to a previous request from a CA, create a new request from an .inf file, accept and install a response to a request, construct a cross-certification or qualified subordination request from an existing CA certificate or request, or to sign a cross-certification or qualified subordination request.",
      "syntax": "certreq -new request.inf result.txt",
      "examples": [
        "certreq -new request.inf result.txt",
        "certreq -submit result.txt certificate.cer",
        "certreq -accept c:\\certificates\\certificate.cer"
      ]
    },
    {
      "name": "certutil",
      "description": "Dump and display certification authority (CA) configuration information, configure Certificate Services, back up and restore CA components, verify certificates, key pairs or certificate chains.",
      "syntax": "certutil -hashfile c:\\demo\\anything.txt SHA256",
      "examples": [
        "certutil -encodehex -f strings64.exe strings5.hex 5   -  without addresses",
        "certutil -encodehex -f strings64.exe strings2.hex 2   -  pure binary (rarely used)",
        "certutil -encodehex -f strings64.exe strings1.hex 1  - base64 without certificate headers"
      ]
    },
    {
      "name": "change",
      "description": "Change Terminal Server Session properties, use when installing software on a terminal server.",
      "syntax": "change [options]",
      "examples": [
        "change",
        "change --help"
      ]
    },
    {
      "name": "chcp",
      "description": "Change the active console Code Page. The default code page is determined by the Windows Locale.",
      "syntax": "chcp",
      "examples": [
        "chcp",
        "chcp 65001"
      ]
    },
    {
      "name": "chkdsk",
      "description": "Check Disk - check and repair disk problems",
      "syntax": "chkdsk [options]",
      "examples": [
        "chkdsk",
        "chkdsk --help"
      ]
    },
    {
      "name": "chkntfs",
      "description": "Check the NTFS file system with CHKDSK",
      "syntax": "chkntfs [options]",
      "examples": [
        "chkntfs",
        "chkntfs --help"
      ]
    },
    {
      "name": "choice",
      "description": "Accept user input to a batch file. Choice allows single key-presses to be captured from the keyboard.",
      "syntax": "choice [options]",
      "examples": [
        "choice",
        "choice --help"
      ]
    },
    {
      "name": "cipher",
      "description": "Encrypt or Decrypt files and folders. Without parameters cipher will display the encryption state of the current folder and files. NTFS volumes only.",
      "syntax": "cipher [options]",
      "examples": [
        "cipher",
        "cipher --help"
      ]
    },
    {
      "name": "cleanmgr-registry",
      "description": "A set of entries to turn on a typical selection of cleanmgr options:",
      "syntax": "cleanmgr-registry [options]",
      "examples": [
        "cleanmgr-registry",
        "cleanmgr-registry --help"
      ]
    },
    {
      "name": "cleanmgr",
      "description": "Automated cleanup of Temporary files, Internet files, downloaded files, recycle bin.",
      "syntax": "cleanmgr [options]",
      "examples": [
        "cleanmgr",
        "cleanmgr --help"
      ]
    },
    {
      "name": "clip",
      "description": "Copy the result of any command to the Windows clipboard.",
      "syntax": "clip.exe",
      "examples": [
        "clip.exe"
      ]
    },
    {
      "name": "cls",
      "description": "If the screen is successfully cleared %ERRORLEVEL% = unchanged, typically this will be 0 but if a previous command set an errorlevel, that will be preserved (this is a bug).",
      "syntax": "cls [options]",
      "examples": [
        "cls",
        "cls --help"
      ]
    },
    {
      "name": "cmd",
      "description": "Start a new CMD shell and (optionally) run a command/executable program.",
      "syntax": "cmd",
      "examples": [
        "cmd",
        "cmd.exe --% /c dir \"C:\\financial $accounts\\\" /w",
        "cmd.exe /c dir $folder --%/w"
      ]
    },
    {
      "name": "cmdkey",
      "description": "Create, list or delete stored user names, passwords or credentials.",
      "syntax": "cmdkey /list",
      "examples": [
        "cmdkey /list"
      ]
    },
    {
      "name": "color",
      "description": "Sets the default console foreground and background colours.",
      "syntax": "color [options]",
      "examples": [
        "color",
        "color --help"
      ]
    },
    {
      "name": "commands",
      "description": "Commands marked • are Internal commands only available within the CMD shell. All other commands (not marked with •) are external commands. External commands may be used under the CMD shell, PowerShell, or directly from START-RUN.",
      "syntax": "commands [options]",
      "examples": [
        "commands",
        "commands --help"
      ]
    },
    {
      "name": "comp",
      "description": "Compare two files (or sets of files). Display items which do not match.",
      "syntax": "comp [options]",
      "examples": [
        "comp",
        "comp --help"
      ]
    },
    {
      "name": "compact",
      "description": "Display or alter the compression of files on NTFS partitions.",
      "syntax": "compact [options]",
      "examples": [
        "compact",
        "compact --help"
      ]
    },
    {
      "name": "compress",
      "description": "Compress one or more files.",
      "syntax": "COMPRESS demo.txt compressed.txt",
      "examples": [
        "compress",
        "compress --help"
      ]
    },
    {
      "name": "con2prt",
      "description": "Connect or disconnect a Printer All commands issued using this utility will affect only the user currently logged in. Con2prt is therefore ideal for managing NETWORK printer connections when used in a login script.",
      "syntax": "con2prt [options]",
      "examples": [
        "con2prt",
        "con2prt --help"
      ]
    },
    {
      "name": "convert",
      "description": "Convert a FAT16 or a FAT32 DISK volume to NTFS.",
      "syntax": "C:\\> convert e: /fs:ntfs /v",
      "examples": [
        "convert [Volume] /fs:ntfs [/v] [/cvtarea:FileName] [/nosecurity] [/x]"
      ]
    },
    {
      "name": "con_",
      "description": "CON (short for Console) is an input device, not a command.",
      "syntax": "con_ [options]",
      "examples": [
        "con_",
        "con_ --help"
      ]
    },
    {
      "name": "copy",
      "description": "Copy one or more files to another location.",
      "syntax": "copy [options]",
      "examples": [
        "copy",
        "copy --help"
      ]
    },
    {
      "name": "coreinfo",
      "description": "Show the mapping between logical processors and the physical processor, NUMA node, and socket on which they reside.",
      "syntax": "coreinfo.exe > coreinfo.txt",
      "examples": [
        "coreinfo [-c][-f][-g][-l][-n][-s][-m][-v] -c",
        "coreinfo.exe > coreinfo.txt"
      ]
    },
    {
      "name": "csccmd",
      "description": "Run this utility on a client PC to configure offline files. Offline files (CSC) allow the client PC to access copies of network files while disconnected from the network/domain. Files can be synchronized with the network when connected.",
      "syntax": "csccmd /MOVESHARE:\\\\oldserver\\share \\\\newserver\\share csccmd /RESID",
      "examples": [
        "csccmd /MOVESHARE:\\\\oldserver\\share \\\\newserver\\share",
        "csccmd /RESID"
      ]
    },
    {
      "name": "csvde",
      "description": "Import or Export Active Directory data to a file. The syntax of these two commands is identical, the difference being that one works with CSV files and one with LDIF files.",
      "syntax": "csvde [options]",
      "examples": [
        "csvde",
        "csvde --help"
      ]
    },
    {
      "name": "curl",
      "description": "Transfer data from or to a server, using one of the supported protocols (HTTP, HTTPS, FTP, FTPS, SCP, SFTP, TFTP, DICT, TELNET, LDAP or FILE). The command is designed to work without user interaction.",
      "syntax": "C:\\> curl https://example.com StatusCode : 200 StatusDescription : OK Content : <!doctype html> <html>...",
      "examples": [
        "curl [options...] url"
      ]
    },
    {
      "name": "date",
      "description": "Display or change the date.",
      "syntax": "Short Date Format HKCU\\Control Panel\\International\\sShortDate Date Separator HKCU\\Control Panel\\International\\sDate Country Code HKCU\\Control Panel\\International\\iCountry Locale HKCU\\Control Panel\\International\\Locale",
      "examples": [
        "date",
        "date --help"
      ]
    },
    {
      "name": "defrag",
      "description": "Defragment hard drive volumes.",
      "syntax": "defrag [options]",
      "examples": [
        "defrag",
        "defrag --help"
      ]
    },
    {
      "name": "del",
      "description": "Delete one or more files.",
      "syntax": "del [options]",
      "examples": [
        "del",
        "del --help"
      ]
    },
    {
      "name": "delayedexpansion",
      "description": "Delayed Expansion will cause variables within a batch file to be expanded at execution time rather than at parse time, this option is turned on with the SETLOCAL EnableDelayedExpansion command.",
      "syntax": "delayedexpansion [options]",
      "examples": [
        "delayedexpansion",
        "delayedexpansion --help"
      ]
    },
    {
      "name": "delprof",
      "description": "Delete windows user profiles.",
      "syntax": "delprof /D:14",
      "examples": [
        "delprof /D:14"
      ]
    },
    {
      "name": "deltree",
      "description": "Very old versions of Windows (Windows 95 and earlier) had the DELTREE command to delete all sub-folders and files. Newer versions of Windows do not have this command, but we can easily write a short batch script to do the same thing.",
      "syntax": "deltree.cmd \"c:\\demo\\sample files\"",
      "examples": [
        "deltree.cmd \"c:\\demo\\sample files\""
      ]
    },
    {
      "name": "devcon",
      "description": "Device Manager",
      "syntax": "devcon -m:\\\\pc64 find pci\\*",
      "examples": [
        "devcon.exe [-r] [-m:\\\\machine] command [arg...]",
        "devcon.exe help command",
        "devcon -m:\\\\pc64 find pci\\*"
      ]
    },
    {
      "name": "dir",
      "description": "Display a list of files and subfolders.",
      "syntax": "dir /a c:\\demo\\",
      "examples": [
        "dir /a c:\\demo\\",
        "dir /b c:\\demo\\",
        "dir c:\\demo\\ h:\\work\\"
      ]
    },
    {
      "name": "diruse",
      "description": "Display disk usage.",
      "syntax": "diruse [options]",
      "examples": [
        "diruse",
        "diruse --help"
      ]
    },
    {
      "name": "diskpart-format",
      "description": "Format a disk for use with Windows using the DISKPART command.",
      "syntax": "diskpart-format [options]",
      "examples": [
        "diskpart-format",
        "diskpart-format --help"
      ]
    },
    {
      "name": "diskpart",
      "description": "Disk Administration, Partition a disk. This page documents the Windows 8/10 + Server 2008-2016 versions of Diskpart.",
      "syntax": "diskpart [options]",
      "examples": [
        "diskpart",
        "diskpart --help"
      ]
    },
    {
      "name": "diskshadow",
      "description": "Volume Shadow Copy Service. By default, DiskShadow uses an interactive command interpreter similar to that of DiskRAID or DiskPart. DiskShadow also includes a scriptable mode.",
      "syntax": "C:\\> diskshadow.exe list shadows all",
      "examples": [
        "diskshadow",
        "diskshadow -s script.txt"
      ]
    },
    {
      "name": "diskuse",
      "description": "Display disk usage.",
      "syntax": "diskuse [options]",
      "examples": [
        "diskuse",
        "diskuse --help"
      ]
    },
    {
      "name": "dism",
      "description": "Deployment Image Servicing and Management tool. DISM enumerates, installs, uninstalls, configures, and updates features and packages in Windows images. The commands that are available depend on the image being serviced and whether the image is offline or running (online).",
      "syntax": "output_format",
      "examples": [
        "dism",
        "dism --help"
      ]
    },
    {
      "name": "displayswitch",
      "description": "Specify which display to use and how to use it.",
      "syntax": "displayswitch [options]",
      "examples": [
        "displayswitch",
        "displayswitch --help"
      ]
    },
    {
      "name": "dnscmd",
      "description": "Manage DNS servers, unattended setup and configuration of new DNS servers.",
      "syntax": "dnscmd [options]",
      "examples": [
        "dnscmd",
        "dnscmd --help"
      ]
    },
    {
      "name": "doskey",
      "description": "Recall and edit commands at the DOS prompt, and create macros. You cannot run a Doskey macro from a batch file.",
      "syntax": "doskey /macros >macros.cmd",
      "examples": [
        "doskey /macros >macros.cmd"
      ]
    },
    {
      "name": "driverquery",
      "description": "Display a list of all installed device drivers and their properties.",
      "syntax": "driverquery",
      "examples": [
        "driverquery  [/s Computer] [/u Domain\\User /p Password]",
        "driverquery",
        "driverquery /s ipaddress"
      ]
    },
    {
      "name": "dsacls",
      "description": "View or Edit ACLs (access control entries) for objects in Active Directory.",
      "syntax": "C:\\> dsacls \"OU=Laptops,OU=AcmeCo,DC=ss64,DC=Com\" /G Domain\\JDoe:GRGE;computer",
      "examples": [
        "dsacls",
        "dsacls --help"
      ]
    },
    {
      "name": "dsadd-computer",
      "description": "Add a computer object to active directory.",
      "syntax": "dsadd-computer [options]",
      "examples": [
        "dsadd-computer",
        "dsadd-computer --help"
      ]
    },
    {
      "name": "dsadd-contact",
      "description": "Add a contact to active directory.",
      "syntax": "dsadd-contact [options]",
      "examples": [
        "dsadd-contact",
        "dsadd-contact --help"
      ]
    },
    {
      "name": "dsadd-group",
      "description": "Add a group to active directory.",
      "syntax": "dsadd-group [options]",
      "examples": [
        "dsadd-group",
        "dsadd-group --help"
      ]
    },
    {
      "name": "dsadd-ou",
      "description": "Add an OU to active directory.",
      "syntax": "dsadd-ou [options]",
      "examples": [
        "dsadd-ou",
        "dsadd-ou --help"
      ]
    },
    {
      "name": "dsadd-quota",
      "description": "Add a quota to active directory.",
      "syntax": "dsadd-quota [options]",
      "examples": [
        "dsadd-quota",
        "dsadd-quota --help"
      ]
    },
    {
      "name": "dsadd-user",
      "description": "Add a user account to active directory.",
      "syntax": "dsadd-user [options]",
      "examples": [
        "dsadd-user",
        "dsadd-user --help"
      ]
    },
    {
      "name": "dsadd",
      "description": "Add active directory object.",
      "syntax": "dsadd [options]",
      "examples": [
        "dsadd",
        "dsadd --help"
      ]
    },
    {
      "name": "dsget-computer",
      "description": "Display computer object(s) from active directory.",
      "syntax": "dsget-computer [options]",
      "examples": [
        "dsget-computer",
        "dsget-computer --help"
      ]
    },
    {
      "name": "dsget-contact",
      "description": "Display contact(s) from active directory.",
      "syntax": "dsget-contact [options]",
      "examples": [
        "dsget-contact",
        "dsget-contact --help"
      ]
    },
    {
      "name": "dsget-group",
      "description": "Display group(s) from active directory.",
      "syntax": "dsget-group [options]",
      "examples": [
        "dsget-group",
        "dsget-group --help"
      ]
    },
    {
      "name": "dsget-ou",
      "description": "Display OU(s) from active directory.",
      "syntax": "dsget-ou [options]",
      "examples": [
        "dsget-ou",
        "dsget-ou --help"
      ]
    },
    {
      "name": "dsget-partition",
      "description": "Display Partition(s) from active directory.",
      "syntax": "dsget-partition [options]",
      "examples": [
        "dsget-partition",
        "dsget-partition --help"
      ]
    },
    {
      "name": "dsget-quota",
      "description": "Display quota(s) from active directory.",
      "syntax": "dsget-quota [options]",
      "examples": [
        "dsget-quota",
        "dsget-quota --help"
      ]
    },
    {
      "name": "dsget-server",
      "description": "Display server(s) from active directory.",
      "syntax": "dsget-server [options]",
      "examples": [
        "dsget-server",
        "dsget-server --help"
      ]
    },
    {
      "name": "dsget-subnet",
      "description": "Display subnet(s) from active directory.",
      "syntax": "dsget-subnet [options]",
      "examples": [
        "dsget-subnet",
        "dsget-subnet --help"
      ]
    },
    {
      "name": "dsget-user",
      "description": "Display user(s) from active directory.",
      "syntax": "dsget-user [options]",
      "examples": [
        "dsget-user",
        "dsget-user --help"
      ]
    },
    {
      "name": "dsget",
      "description": "View active directory objects.",
      "syntax": "dsget [options]",
      "examples": [
        "dsget",
        "dsget --help"
      ]
    },
    {
      "name": "dsmod-computer",
      "description": "Modify a computer object in active directory.",
      "syntax": "dsmod-computer [options]",
      "examples": [
        "dsmod-computer",
        "dsmod-computer --help"
      ]
    },
    {
      "name": "dsmod-contact",
      "description": "Modify a contact in active directory.",
      "syntax": "dsmod-contact [options]",
      "examples": [
        "dsmod-contact",
        "dsmod-contact --help"
      ]
    },
    {
      "name": "dsmod-group",
      "description": "Modify a group in active directory.",
      "syntax": "dsmod-group [options]",
      "examples": [
        "dsmod-group",
        "dsmod-group --help"
      ]
    },
    {
      "name": "dsmod-ou",
      "description": "Modify an OU in active directory.",
      "syntax": "dsmod-ou [options]",
      "examples": [
        "dsmod-ou",
        "dsmod-ou --help"
      ]
    },
    {
      "name": "dsmod-partition",
      "description": "Modify a partition in active directory.",
      "syntax": "dsmod-partition [options]",
      "examples": [
        "dsmod-partition",
        "dsmod-partition --help"
      ]
    },
    {
      "name": "dsmod-quota",
      "description": "Modify a quota in active directory.",
      "syntax": "dsmod-quota [options]",
      "examples": [
        "dsmod-quota",
        "dsmod-quota --help"
      ]
    },
    {
      "name": "dsmod-server",
      "description": "Modify a server in active directory.",
      "syntax": "dsmod-server [options]",
      "examples": [
        "dsmod-server",
        "dsmod-server --help"
      ]
    },
    {
      "name": "dsmod-user",
      "description": "Modify a user account in active directory.",
      "syntax": "dsmod-user [options]",
      "examples": [
        "dsmod-user",
        "dsmod-user --help"
      ]
    },
    {
      "name": "dsmod",
      "description": "Modify active directory object.",
      "syntax": "dsmod [options]",
      "examples": [
        "dsmod",
        "dsmod --help"
      ]
    },
    {
      "name": "dsmove",
      "description": "Rename or Move an active directory object (user, computer, group..) to a different Organisational Unit (OU).",
      "syntax": "C:\\> set _andy=\"CN=Andrew Gorden,OU=Europe,DC=ss64,DC=Com\" C:\\> dsmove %_andy% -newname \"Andrew Gordon\"",
      "examples": [
        "dsmove",
        "dsmove --help"
      ]
    },
    {
      "name": "dsquery-computer",
      "description": "Search for computers in active directory.",
      "syntax": "dsquery-computer [options]",
      "examples": [
        "dsquery-computer",
        "dsquery-computer --help"
      ]
    },
    {
      "name": "dsquery-contact",
      "description": "Search for contacts in active directory.",
      "syntax": "dsquery-contact [options]",
      "examples": [
        "dsquery-contact",
        "dsquery-contact --help"
      ]
    },
    {
      "name": "dsquery-group",
      "description": "Search for Groups in active directory.",
      "syntax": "dsquery-group [options]",
      "examples": [
        "dsquery-group",
        "dsquery-group --help"
      ]
    },
    {
      "name": "dsquery-ldap",
      "description": "Find objects in the directory using a Lightweight Directory Access Protocol (LDAP) query.",
      "syntax": "dsquery-ldap [options]",
      "examples": [
        "dsquery-ldap",
        "dsquery-ldap --help"
      ]
    },
    {
      "name": "dsquery-ou",
      "description": "Search for an OU in active directory.",
      "syntax": "dsquery-ou [options]",
      "examples": [
        "dsquery-ou",
        "dsquery-ou --help"
      ]
    },
    {
      "name": "dsquery-partition",
      "description": "Search for Partition objects in active directory.",
      "syntax": "dsquery-partition [options]",
      "examples": [
        "dsquery-partition",
        "dsquery-partition --help"
      ]
    },
    {
      "name": "dsquery-quota",
      "description": "Search for a Quota in active directory.",
      "syntax": "dsquery-quota [options]",
      "examples": [
        "dsquery-quota",
        "dsquery-quota --help"
      ]
    },
    {
      "name": "dsquery-server",
      "description": "Search for a server in active directory.",
      "syntax": "dsquery-server [options]",
      "examples": [
        "dsquery-server",
        "dsquery-server --help"
      ]
    },
    {
      "name": "dsquery-site",
      "description": "Search for a site in active directory.",
      "syntax": "dsquery-site [options]",
      "examples": [
        "dsquery-site",
        "dsquery-site --help"
      ]
    },
    {
      "name": "dsquery-user",
      "description": "Search for users in active directory.",
      "syntax": "dsquery-user [options]",
      "examples": [
        "dsquery-user",
        "dsquery-user --help"
      ]
    },
    {
      "name": "dsquery",
      "description": "Search for an active directory object.",
      "syntax": "$arrComputerList = $(&dsquery computer -limit 0)|%{$_.Split(\"=\")[1].replace(\",OU\",\"\").replace(\",CN\",\"\")}",
      "examples": [
        "dsquery",
        "dsquery --help"
      ]
    },
    {
      "name": "dsrm",
      "description": "Delete objects from active directory.",
      "syntax": ": C:\\> dsrm -subtree -exclude -noprompt -c \"OU=AcmeCo,DC=ss64,DC=Com\"",
      "examples": [
        "dsrm",
        "dsrm --help"
      ]
    },
    {
      "name": "echo",
      "description": "Display messages on screen, turn command-echoing on or off.",
      "syntax": "echo:",
      "examples": [
        "echo:"
      ]
    },
    {
      "name": "else",
      "description": "Else is an option for the IF command",
      "syntax": "else [options]",
      "examples": [
        "else",
        "else --help"
      ]
    },
    {
      "name": "empty",
      "description": "CMD Batch script to show if a folder is empty:",
      "syntax": "empty [options]",
      "examples": [
        "empty",
        "empty --help"
      ]
    },
    {
      "name": "endlocal",
      "description": "End localisation of environment changes in a batch file. Pass variables from one batch file to another.",
      "syntax": "endlocal [options]",
      "examples": [
        "endlocal",
        "endlocal --help"
      ]
    },
    {
      "name": "equ",
      "description": "EQU is an 'Equal To' comparison operator for the IF command",
      "syntax": "equ [options]",
      "examples": [
        "equ",
        "equ --help"
      ]
    },
    {
      "name": "errorlevel",
      "description": "Almost all applications and utilities will set an Exit Code when they complete/terminate.",
      "syntax": "command1 if %errorlevel% EQU 0 (echo OK ) Else ( Echo ERROR FAILED &color CF ) command2 if %errorlevel% EQU 0 (echo OK ) Else ( Echo ERROR FAILED &color CF )",
      "examples": [
        "errorlevel",
        "errorlevel --help"
      ]
    },
    {
      "name": "eventcreate",
      "description": "Add a message to the Windows event log, requires administrator rights.",
      "syntax": "eventcreate [options]",
      "examples": [
        "eventcreate",
        "eventcreate --help"
      ]
    },
    {
      "name": "exit",
      "description": "Close the current batch script, exit the current subroutine or close the CMD.EXE session, optionally setting an errorlevel.",
      "syntax": "::Ctrl-C cmd /c exit -1073741510",
      "examples": [
        "exitCode   Sets the %ERRORLEVEL% to a numeric number."
      ]
    },
    {
      "name": "expand",
      "description": "Uncompress one or more compressed .CAB cabinet files.",
      "syntax": "expand [options]",
      "examples": [
        "expand",
        "expand --help"
      ]
    },
    {
      "name": "explorer",
      "description": "Command-line switches that you can use to open the GUI Windows Explorer (Explorer.exe).",
      "syntax": "%windir%\\explorer.exe microsoft-edge:https://ss64.com",
      "examples": [
        "explorer",
        "explorer --help"
      ]
    },
    {
      "name": "extract",
      "description": "Uncompress one or more compressed .CAB cabinet files.",
      "syntax": "extract [options]",
      "examples": [
        "extract",
        "extract --help"
      ]
    },
    {
      "name": "fc",
      "description": "Compare the contents of two files or sets of files. Display any lines which do NOT match.",
      "syntax": "& fc.exe",
      "examples": [
        "fc",
        "fc --help"
      ]
    },
    {
      "name": "find",
      "description": "Search for a text string in a file & display all the lines where it is found.",
      "syntax": "C:\\> FOR %G IN (*.txt) do (find /n /i \"SearchWord\" \"%G\")",
      "examples": [
        "find",
        "find --help"
      ]
    },
    {
      "name": "findstr-escapes",
      "description": "FindStr Search strings that include quotes and or backslashes must be escaped as follows.",
      "syntax": "findstr-escapes [options]",
      "examples": [
        "findstr-escapes",
        "findstr-escapes --help"
      ]
    },
    {
      "name": "findstr-linebreaks",
      "description": "FINDSTR breaks lines immediately after every <LF>. The presence or absence of <CR> has no impact on line breaks.",
      "syntax": "findstr-linebreaks [options]",
      "examples": [
        "findstr-linebreaks",
        "findstr-linebreaks --help"
      ]
    },
    {
      "name": "findstr",
      "description": "Search for a text string in a file (or multiple files) unlike the simple FIND command FINDSTR supports more complex regular expressions.",
      "syntax": "findstr /nrc:\"^[A-a]\"",
      "examples": [
        "findstr /nrc:\"^[A-a]\"",
        "findstr /nrc:\"^[a-A]\""
      ]
    },
    {
      "name": "fltmc",
      "description": "Manage MiniFilter drivers. Load a Filter driver, Unload a Filter driver, List filter information, List all instances or the instances associated with a Filter or Volume, List all volumes (including the network redirectors), Attach or Detach a filter from a Volume.",
      "syntax": "fltmc [options]",
      "examples": [
        "fltmc",
        "fltmc --help"
      ]
    },
    {
      "name": "for",
      "description": "Conditionally perform a command several times.",
      "syntax": "FOR %%G... DO (for %%U... do ...)",
      "examples": [
        "for",
        "for --help"
      ]
    },
    {
      "name": "for2",
      "description": "Conditionally perform a command on several files.",
      "syntax": "for2 [options]",
      "examples": [
        "for2",
        "for2 --help"
      ]
    },
    {
      "name": "forfiles",
      "description": "Select a file (or set of files) and execute a command on each file. Batch processing.",
      "syntax": "C:\\> forfiles /m testfile.txt /c \"cmd /c Del testfile.txt \" /d -5",
      "examples": [
        "forfiles",
        "forfiles --help"
      ]
    },
    {
      "name": "format",
      "description": "Format a disk for use with Windows.",
      "syntax": "@echo off Echo Warning this will reformat the entire D: disk!PAUSE format D: /FS:NTFS /x",
      "examples": [
        "format D: /FS:NTFS /x"
      ]
    },
    {
      "name": "for_cmd",
      "description": "Loop command: against the results of another command.",
      "syntax": "for_cmd [options]",
      "examples": [
        "for_cmd",
        "for_cmd --help"
      ]
    },
    {
      "name": "for_d",
      "description": "Conditionally perform a command on several Directories/Folders.",
      "syntax": "for_d [options]",
      "examples": [
        "for_d",
        "for_d --help"
      ]
    },
    {
      "name": "for_f",
      "description": "Loop command: against a set of files - conditionally perform a command against each item.",
      "syntax": "for_f [options]",
      "examples": [
        "for_f",
        "for_f --help"
      ]
    },
    {
      "name": "for_l",
      "description": "Conditionally perform a command for a range of numbers.",
      "syntax": "for_l [options]",
      "examples": [
        "for_l",
        "for_l --help"
      ]
    },
    {
      "name": "for_r",
      "description": "Loop through files (Recurse subfolders)",
      "syntax": "for_r [options]",
      "examples": [
        "for_r",
        "for_r --help"
      ]
    },
    {
      "name": "freedisk",
      "description": "Checks to see if a specified amount of disk space is available.",
      "syntax": "freedisk 50mb",
      "examples": [
        "freedisk 50mb"
      ]
    },
    {
      "name": "fsutil",
      "description": "File and Volume specific commands, Hardlink management, Quota management, USN, Sparse file, Object ID and Reparse point management.",
      "syntax": "FSUTIL file createnew filename length Eg : fsutil file createnew C:\\testfile.txt 1000",
      "examples": [
        "fsutil",
        "fsutil --help"
      ]
    },
    {
      "name": "ftp",
      "description": "File Transfer Protocol. (Not Secure, for Secure FTP utilities see the links page.)",
      "syntax": "C:\\> ftp speedtest.tele2.net User: anonymous Password: 230 Login successful. ftp>",
      "examples": [
        "ftp>",
        "ftp://username@ftpserver.address.com",
        "ftp://speedtest.tele2.net"
      ]
    },
    {
      "name": "ftype",
      "description": "Display or change the link between a FileType and an executable program.",
      "syntax": "ftype [options]",
      "examples": [
        "ftype",
        "ftype --help"
      ]
    },
    {
      "name": "geq",
      "description": "GEQ is a 'Greater Than or Equal To' comparison operator for the IF command",
      "syntax": "geq [options]",
      "examples": [
        "geq",
        "geq --help"
      ]
    },
    {
      "name": "getmac",
      "description": "Display the Media Access Control (MAC) address and list of network protocols associated with each address for all network cards in each computer, either locally or across a network.",
      "syntax": "getmac /fo table /nh /v",
      "examples": [
        "getmac [/s Computer [/u Domain\\User [/p Password]]]",
        "getmac /fo table /nh /v",
        "getmac /s server64"
      ]
    },
    {
      "name": "goto",
      "description": "Direct a batch program to jump to a labelled line.",
      "syntax": "goto eof",
      "examples": [
        "goto eof",
        "goto nextsub",
        "goto:eof"
      ]
    },
    {
      "name": "gpresult",
      "description": "Display Resultant Set of Policy information for a remote user and computer.",
      "syntax": "C:\\> gpresult /z >C:\\batch\\policy.txt",
      "examples": [
        "gpresult [/s Computer [/u [Domain\\]UserName [/p [Password]]]]"
      ]
    },
    {
      "name": "gpupdate",
      "description": "Update Group Policy settings.",
      "syntax": "gpupdate [options]",
      "examples": [
        "gpupdate",
        "gpupdate --help"
      ]
    },
    {
      "name": "gtr",
      "description": "GTR is a 'Greater Than' comparison operator for the IF command",
      "syntax": "gtr [options]",
      "examples": [
        "gtr",
        "gtr --help"
      ]
    },
    {
      "name": "help",
      "description": "Online help for Microsoft Windows - most commands will give help when run with /? or -? (COMMAND /? or COMMAND -?) GUI Help is available from START - Help or by running the help files directly from C:\\WINDOWS\\help\\",
      "syntax": "help [options]",
      "examples": [
        "help",
        "help --help"
      ]
    },
    {
      "name": "hostname",
      "description": "Display the host name portion of the full computer name of the computer.",
      "syntax": "C:\\> hostname",
      "examples": [
        "hostname",
        "hostname --help"
      ]
    },
    {
      "name": "icacls",
      "description": "Change file and folder permissions - display or modify Access Control Lists (ACLs) for files and folders. iCACLS resolves various issues that occur when using the older CACLS & XCACLS",
      "syntax": "icacls",
      "examples": [
        "icacls",
        "icacls",
        "icacls \"C:\\demo\\example\" /inheritance:e /T"
      ]
    },
    {
      "name": "iexpress-sed",
      "description": "The Self Extraction Directive (SED) file controls the options used when building an installation (INF-based setup) package.",
      "syntax": "iexpress-sed [options]",
      "examples": [
        "iexpress-sed",
        "iexpress-sed --help"
      ]
    },
    {
      "name": "iexpress",
      "description": "Create a self extracting ZIP file archive. iexpress 2.0 must be run with elevated permissions.",
      "syntax": "iexpress.exe",
      "examples": [
        "iexpress.exe"
      ]
    },
    {
      "name": "if",
      "description": "Conditionally perform a command.",
      "syntax": "variable command",
      "examples": [
        "if %_tempvar% EQU 1 Command_to_run_if_either_is_true"
      ]
    },
    {
      "name": "ifmember",
      "description": "Find out if the current user is a member of one or more groups.",
      "syntax": "ifmember [options]",
      "examples": [
        "ifmember",
        "ifmember --help"
      ]
    },
    {
      "name": "index-2",
      "description": "Commands marked • are Internal commands only available within the CMD shell. All other commands (not marked with •) are external commands. External commands may be used under the CMD shell, PowerShell, or directly from START-RUN.",
      "syntax": "index-2 [options]",
      "examples": [
        "index-2",
        "index-2 --help"
      ]
    },
    {
      "name": "inuse",
      "description": "Replace files that are currently in use by the OS, requires a reboot.",
      "syntax": "inuse.exe \\\\server64\\install\\shiny.dll c:\\program files\\ss64\\shiny.dll /y",
      "examples": [
        "inuse.exe \\\\server64\\install\\shiny.dll c:\\program files\\ss64\\shiny.dll /y"
      ]
    },
    {
      "name": "ipconfig",
      "description": "Configure IP (Internet Protocol configuration)",
      "syntax": "ipconfig /release",
      "examples": [
        "ipconfig /release",
        "ipconfig /release",
        "ipconfig /renew"
      ]
    },
    {
      "name": "label",
      "description": "Edit a disk label.",
      "syntax": "C:\\> label d:SS64",
      "examples": [
        "label   The name for the volume."
      ]
    },
    {
      "name": "leq",
      "description": "LEQ is a 'Less Than or Equal To' comparison operator for the IF command",
      "syntax": "leq [options]",
      "examples": [
        "leq",
        "leq --help"
      ]
    },
    {
      "name": "lgpo",
      "description": "Local Group Policy Object utility.",
      "syntax": "C:\\> lgpo /b c:\\gpobackups\\",
      "examples": [
        "lgpo",
        "lgpo --help"
      ]
    },
    {
      "name": "lodctr",
      "description": "Load PerfMon performance counters (update registry values).",
      "syntax": "C:\\> lodctr /r",
      "examples": [
        "lodctr",
        "lodctr --help"
      ]
    },
    {
      "name": "logman",
      "description": "Manage Performance Monitor & performance logs from the command line.",
      "syntax": "logman [options]",
      "examples": [
        "logman [create|query|start|stop|delete|update|import|export] [options]",
        "logman start perf_log",
        "logman update perf_log -si 10 -f csv -v mmddhhmm"
      ]
    },
    {
      "name": "logoff",
      "description": "Logon Type 2 – Interactive - Log on at the local keyboard / screen (see the event description for a computer name).",
      "syntax": "logoff [options]",
      "examples": [
        "logoff",
        "logoff --help"
      ]
    },
    {
      "name": "logtime",
      "description": "Create logtime.txt and add the date, time and a message.",
      "syntax": "logtime [options]",
      "examples": [
        "logtime",
        "logtime --help"
      ]
    },
    {
      "name": "lss",
      "description": "LSS is a 'Less Than' comparison operator for the IF command",
      "syntax": "lss [options]",
      "examples": [
        "lss",
        "lss --help"
      ]
    },
    {
      "name": "makecab-directives",
      "description": "Directives begin with a period (\".\"), followed by a command name, and possibly by (blank delimited) arguments.",
      "syntax": "makecab-directives [options]",
      "examples": [
        "makecab-directives",
        "makecab-directives --help"
      ]
    },
    {
      "name": "makecab",
      "description": "Create compressed .CAB file. A .CAB Cabinet file is a Lossless Data Compression format.",
      "syntax": "C:\\> makecab \"recording.wav\" \"recording.cab\" /L \"C:\\Archive\"",
      "examples": [
        "makecab",
        "makecab --help"
      ]
    },
    {
      "name": "manage-bde",
      "description": "BitLocker Drive Encryption: Configuration Tool. Configure BitLocker Drive Encryption on disk volumes.",
      "syntax": "manage-bde -on -h",
      "examples": [
        "manage-bde[.exe] -parameter [arguments]",
        "manage-bde -on -h",
        "manage-bde -status"
      ]
    },
    {
      "name": "mapisend",
      "description": "Send email from the command line.",
      "syntax": "mapisend [options]",
      "examples": [
        "mapisend",
        "mapisend --help"
      ]
    },
    {
      "name": "mbsacli",
      "description": "Baseline Security Analyzer.",
      "syntax": "mbsacli [options]",
      "examples": [
        "mbsacli [/c|/i|/r|/d domainname|ipaddress|ipaddressrange]"
      ]
    },
    {
      "name": "md",
      "description": "Make Directory - Create a new folder/directory.",
      "syntax": "md [options]",
      "examples": [
        "md",
        "md --help"
      ]
    },
    {
      "name": "mklink",
      "description": "Create a symbolic link to a directory or a file, or create a hard file link or directory junction.",
      "syntax": "mklink [options]",
      "examples": [
        "mklink",
        "mklink --help"
      ]
    },
    {
      "name": "mode",
      "description": "Configure a system device: COM / LPT port, or CMD console CON.",
      "syntax": "mode LPTn[:] [c][,[l][,r]] mode LPTn[:] [cols=c] [lines=l]",
      "examples": [
        "mode LPTn[:] [c][,[l][,r]]",
        "mode LPTn[:] [cols=c] [lines=l]"
      ]
    },
    {
      "name": "more",
      "description": "Display output one screen at a time. MORE can be used to run any executable command (or batch file) and pause the screen output one screen at a time. MORE can also be used to TYPE the contents of any file to the screen.",
      "syntax": "more [options]",
      "examples": [
        "more",
        "more --help"
      ]
    },
    {
      "name": "mountvol",
      "description": "Link volumes without requiring a drive letter. Create, delete or list a volume mount point. NTFS junction mount points can only be used with local NTFS directories, (unlike DFS junction points which will target a network share). MOUNTVOL can be found on the Windows CD i386 folder.",
      "syntax": "C:\\> mountvol",
      "examples": [
        "mountvol",
        "mountvol --help"
      ]
    },
    {
      "name": "move",
      "description": "Move a file from one folder to another",
      "syntax": "move [options]",
      "examples": [
        "move",
        "move --help"
      ]
    },
    {
      "name": "moveuser",
      "description": "Move a local user account into a domain or move a user account between machines.",
      "syntax": "moveuser [options]",
      "examples": [
        "moveuser",
        "moveuser --help"
      ]
    },
    {
      "name": "msg",
      "description": "Send a pop-up message to a user.",
      "syntax": "C:\\> msg user64 \"The system will shutdown at 10pm\"",
      "examples": [
        "msg",
        "msg --help"
      ]
    },
    {
      "name": "msiexec",
      "description": "Microsoft Windows Installer.",
      "syntax": "msiexec /i \"C:\\Install\\ss64app.msi\"",
      "examples": [
        "msiexec /i \"C:\\Install\\ss64app.msi\"",
        "msiexec /uninstall \"{5AFF6499-63BA-4A36-83B2-8D256404AC3D}\" /log \"C:\\install\\ss64app.txt\"",
        "msiexec /a MSIFile /qb TARGETDIR=DestinationDirectory"
      ]
    },
    {
      "name": "msinfo32",
      "description": "System Information - display details about hardware configuration, computer components, software and drivers.",
      "syntax": "msinfo32 /report C:\\TEMP\\test.txt",
      "examples": [
        "msinfo32 /report C:\\TEMP\\test.txt",
        "msinfo32 /nfo C:\\TEMP\\test.nfo",
        "msinfo32 /computer Server64"
      ]
    },
    {
      "name": "mstsc",
      "description": "Connect and login to a remote machine using the Remote Desktop Protocol (RDP) also known as Terminal Server Connection (TSC).",
      "syntax": "mstsc [options]",
      "examples": [
        "mstsc",
        "mstsc --help"
      ]
    },
    {
      "name": "nbtstat",
      "description": "Display protocol statistics and current TCP/IP connections using NBT (NetBIOS over TCP/IP). NetBIOS has been deprecated since 2000 disabling NetBIOS can greatly enhance the security status of a network.",
      "syntax": "nbtstat [options]",
      "examples": [
        "nbtstat",
        "nbtstat --help"
      ]
    },
    {
      "name": "neq",
      "description": "NEQ is a 'Not Equal to' comparison operator for the IF command",
      "syntax": "neq [options]",
      "examples": [
        "neq",
        "neq --help"
      ]
    },
    {
      "name": "net-config",
      "description": "The NET CONFIG command is used to manage network resources. The NET COMPUTER command is used to add or remove a computer from the domain.",
      "syntax": "net-config [options]",
      "examples": [
        "net-config",
        "net-config --help"
      ]
    },
    {
      "name": "net-help",
      "description": "The NET command is used to display help as follows: The syntax for displaying help differs from other commands: Provide brief help with any NET command",
      "syntax": "net-help [options]",
      "examples": [
        "net-help",
        "net-help --help"
      ]
    },
    {
      "name": "net-print",
      "description": "The NET PRINT command is used to manage Network Print jobs. This command was deprecated in Windows 7 and removed completely in Windows 10. However, you can perform many of the same tasks using Windows PowerShell cmdlets, VB Script, Prnjobs.vbs or Windows Management Instrumentation (WMI) Display the job# of current print jobs NET PRINT \\\\ComputerName\\ShareName Hold a print job waiting in the printer queue NET PRINT [\\\\ComputerName] job# /HOLD Release a print job that has been held. NET PRINT [\\\\C",
      "syntax": "net-print [options]",
      "examples": [
        "net-print",
        "net-print --help"
      ]
    },
    {
      "name": "net-service",
      "description": "The NET command is used to manage services as follows:",
      "syntax": "net-service [options]",
      "examples": [
        "net-service",
        "net-service --help"
      ]
    },
    {
      "name": "net-session",
      "description": "The NET command is used to manage open files and user sessions.",
      "syntax": "net-session [options]",
      "examples": [
        "net-session",
        "net-session --help"
      ]
    },
    {
      "name": "net-share",
      "description": "The NET Share command is used to manage file/printer shares.",
      "syntax": "net-share [options]",
      "examples": [
        "net-share",
        "net-share --help"
      ]
    },
    {
      "name": "net-time",
      "description": "The NET TIME Command is used to manage Network Print jobs and Network Time.",
      "syntax": "net-time [options]",
      "examples": [
        "net-time",
        "net-time --help"
      ]
    },
    {
      "name": "net-use",
      "description": "Map a drive letter to a remote server/share.",
      "syntax": "net-use [options]",
      "examples": [
        "net-use",
        "net-use --help"
      ]
    },
    {
      "name": "net-useradmin",
      "description": "The NET command is used to manage user accounts and groups.",
      "syntax": "net-useradmin [options]",
      "examples": [
        "net-useradmin",
        "net-useradmin --help"
      ]
    },
    {
      "name": "net-view",
      "description": "The NET Command is used to manage File Shares, Printer Shares and sessions.",
      "syntax": "net-view [options]",
      "examples": [
        "net-view",
        "net-view --help"
      ]
    },
    {
      "name": "net",
      "description": "The NET Command is used to manage network resources as follows:",
      "syntax": "net [options]",
      "examples": [
        "net",
        "net --help"
      ]
    },
    {
      "name": "netdom-add",
      "description": "Add a workstation or server account to the domain. In Windows 10 use the Add-Computer PowerShell cmdlet instead.",
      "syntax": "netdom-add [options]",
      "examples": [
        "netdom-add",
        "netdom-add --help"
      ]
    },
    {
      "name": "netdom-bdc",
      "description": "Rename an NT 4.0 backup domain controller (move it to a new domain)",
      "syntax": "netdom-bdc [options]",
      "examples": [
        "netdom-bdc",
        "netdom-bdc --help"
      ]
    },
    {
      "name": "netdom-computername",
      "description": "Manage the primary and alternate names for a computer, Netdom can safely rename a domain controller or a server. In Windows 10 use the Set-adComputer PowerShell cmdlet instead.",
      "syntax": "netdom-computername [options]",
      "examples": [
        "netdom-computername",
        "netdom-computername --help"
      ]
    },
    {
      "name": "netdom-join",
      "description": "Join a workstation or member server to the domain. In Windows 10 use the Add-Computer cmdlet instead.",
      "syntax": "netdom-join [options]",
      "examples": [
        "netdom-join",
        "netdom-join --help"
      ]
    },
    {
      "name": "netdom-move",
      "description": "Move a workstation or member server to a new domain. In Windows 10 use the Add-Computer PowerShell cmdlet instead.",
      "syntax": "netdom-move [options]",
      "examples": [
        "netdom-move",
        "netdom-move --help"
      ]
    },
    {
      "name": "netdom-query",
      "description": "Query the domain for information.",
      "syntax": "netdom-query [options]",
      "examples": [
        "netdom-query",
        "netdom-query --help"
      ]
    },
    {
      "name": "netdom-remove",
      "description": "Remove a workstation or server from the domain. In Windows 10 use the Remove-Computer PowerShell cmdlet instead.",
      "syntax": "netdom-remove [options]",
      "examples": [
        "netdom-remove",
        "netdom-remove --help"
      ]
    },
    {
      "name": "netdom-renamecomputer",
      "description": "Rename a computer. In Windows 10 use Rename-Computer PowerShell cmdlet instead.",
      "syntax": "netdom-renamecomputer [options]",
      "examples": [
        "netdom-renamecomputer",
        "netdom-renamecomputer --help"
      ]
    },
    {
      "name": "netdom-reset",
      "description": "Reset the secure connection between a workstation and a domain controller.",
      "syntax": "netdom-reset [options]",
      "examples": [
        "netdom-reset",
        "netdom-reset --help"
      ]
    },
    {
      "name": "netdom-resetpwd",
      "description": "Reset the machine account password for a domain controller. In Windows 10 use the Reset-ComputerMachinePassword PowerShell cmdlet instead.",
      "syntax": "netdom-resetpwd [options]",
      "examples": [
        "netdom-resetpwd",
        "netdom-resetpwd --help"
      ]
    },
    {
      "name": "netdom-trust",
      "description": "Manage or verify the trust relationship between domains.",
      "syntax": "netdom-trust [options]",
      "examples": [
        "netdom-trust",
        "netdom-trust --help"
      ]
    },
    {
      "name": "netdom-verify",
      "description": "Verify the secure connection between a workstation and a domain controller. In Windows 10 use the Test-ComputerSecureChannel PowerShell cmdlet instead.",
      "syntax": "netdom-verify [options]",
      "examples": [
        "netdom-verify",
        "netdom-verify --help"
      ]
    },
    {
      "name": "netdom",
      "description": "Domain Manager - Manage Machine Accounts and Passwords.",
      "syntax": "netdom [options]",
      "examples": [
        "netdom",
        "netdom --help"
      ]
    },
    {
      "name": "netsh",
      "description": "Configure Network Interfaces, Windows Firewall, Routing & remote access.",
      "syntax": "C:\\> netsh advfirewall firewall set rule group=\"File and Printer Sharing\" new enable=Yes C:\\> netsh advfirewall firewall set rule group=\"File and Printer Sharing\" new enable=No",
      "examples": [
        "netsh add helper  - Install the specified helper DLL",
        "netsh advfirewall consec ?              - Display a list of commands.",
        "netsh advfirewall consec add            - Add a new connection security rule."
      ]
    },
    {
      "name": "netstat",
      "description": "Display current TCP/IP network connections and protocol statistics.",
      "syntax": "netstat [options]",
      "examples": [
        "netstat",
        "netstat --help"
      ]
    },
    {
      "name": "netuseroptions",
      "description": "The NET Command is used to manage network resources as follows: options are as follows: /active:{no | yes} Enable or disable the user account. The default is yes (login is allowed) Disabling an account does not immediately log off any user sessions. /comment:\"text\" A descriptive comment (48 characters). /countrycode:nnn Use the OS country codes to implement specified language files for help and error messages. 0 = default country code. /expires:{date | never} Cause the user account to expire. da",
      "syntax": "netuseroptions [options]",
      "examples": [
        "netuseroptions",
        "netuseroptions --help"
      ]
    },
    {
      "name": "nltest",
      "description": "Network Location Test - List domain controllers(DCs), Force a remote shutdown, Query the status of trust, test trust relationships and the state of domain controller replication.",
      "syntax": "nltest",
      "examples": [
        "nltest",
        "nltest /dclist:ss64dom",
        "nltest /user:\"user64\""
      ]
    },
    {
      "name": "now",
      "description": "Display Message with current Date and Time",
      "syntax": "now [options]",
      "examples": [
        "now",
        "now --help"
      ]
    },
    {
      "name": "nslookup",
      "description": "Lookup IP addresses on a NameServer.",
      "syntax": "C:\\> nslookup -querytype=TXT -timeout=10 porttest.dns-oarc.net",
      "examples": [
        "nslookup",
        "nslookup --help"
      ]
    },
    {
      "name": "ntbackup",
      "description": "Backup to tape: drives, folders and systemstate. In Vista and above wbadmin and PowerShell have replaced NTBACKUP.",
      "syntax": "@bks file name",
      "examples": [
        "ntbackup",
        "ntbackup --help"
      ]
    },
    {
      "name": "ntdsutil",
      "description": "Active Directory Domain Services management, database/metadata maintenance, etc.",
      "syntax": "ntdsutil roles \"select operation target\" \"connections\" \"connect to server server64\" quit \"list roles for connected server\" quit quit quit",
      "examples": [
        "ntdsutil roles",
        "ntdsutil r \"sel o t\" c \"co t s server64\" q \"l r f c s\" q q q",
        "ntdsutil rol \"sel op targ\" conn \"conn to serv server64\" qu \"li rol fo conn serv\" qu qu qu"
      ]
    },
    {
      "name": "ntrights",
      "description": "Edit user account privileges.",
      "syntax": "ntrights -u Users +r SeInteractiveLogonRight",
      "examples": [
        "ntrights -u Users +r SeInteractiveLogonRight",
        "ntrights -u ss64Dom\\Ashley +r SeBatchLogonRight -m \\\\server64",
        "ntrights -u ss64Dom\\Admin-Local +r SeShutdownPrivilege"
      ]
    },
    {
      "name": "nul_",
      "description": "The null device is a special file that discards all data written to it, but reports that the write operation succeeded.",
      "syntax": "nul_ [options]",
      "examples": [
        "nul_",
        "nul_ --help"
      ]
    },
    {
      "name": "nvspbind",
      "description": "Modify network bindings. Especially useful in Server Core environments with the Hyper-V role enabled. Windows 8 /2008/2012 n.b. this is an 'unsupported' tool.",
      "syntax": "C:\\> nvspbind {F93642D9-9085-4EEF-9669154AD4391ED7} \"pci\\ven_8086&dev_10c9&subsys_a03c8086\" \"Intel(R) Gigabit ET Dual",
      "examples": [
        "nvspbind",
        "nvspbind --help"
      ]
    },
    {
      "name": "openfiles",
      "description": "Query or display open files, disconnect files opened by network users.",
      "syntax": "openfiles [options]",
      "examples": [
        "openfiles",
        "openfiles --help"
      ]
    },
    {
      "name": "path",
      "description": "Display or set a search path for executable files at the command line.",
      "syntax": "Syntax PATH pathname [;pathname] [;pathname] [;pathname]... PATH PATH ; Key pathname : drive letter and/or folder ; : the command 'PATH ;' will clear the path",
      "examples": [
        "pathname : drive letter and/or folder"
      ]
    },
    {
      "name": "pathping",
      "description": "Trace route and provide network latency and packet loss for each router and link in the path. Combines the functionality of PING and TRACERT.",
      "syntax": "pathping [options]",
      "examples": [
        "pathping",
        "pathping --help"
      ]
    },
    {
      "name": "pause",
      "description": "Pause the execution of a batch file",
      "syntax": "pause [options]",
      "examples": [
        "pause",
        "pause --help"
      ]
    },
    {
      "name": "perms",
      "description": "Display a user’s ACL access permissions for a file. Output from PERMS can be incomplete in cases where a user has inherited permission through membership of a group.",
      "syntax": "perms [options]",
      "examples": [
        "perms",
        "perms --help"
      ]
    },
    {
      "name": "ping",
      "description": "Test a network connection - if successful, ping returns the ip address.",
      "syntax": "@Echo off Echo Logging ping responses, press CTRL-C to stop :start Ping -n 1 example.com | find \"TTL=\" >>c:\\pingtest.txt Echo . Ping -n 16 127.0.0.1>nul goto start",
      "examples": [
        "ping",
        "ping --help"
      ]
    },
    {
      "name": "pktmon",
      "description": "Monitor internal packet propagation and packet drop reports. Run all PktMon commands from an Elevated command prompt.",
      "syntax": "pktmon filter add -p 20",
      "examples": [
        "pktmon filter add -p 20",
        "pktmon filter list",
        "pktmon start --etw"
      ]
    },
    {
      "name": "popd",
      "description": "Change directory back to the path/folder most recently stored by the PUSHD command. POPD will also remove any temporary drive maps created by PUSHD",
      "syntax": "popd",
      "examples": [
        "popd"
      ]
    },
    {
      "name": "portqry",
      "description": "Port Query - Display the status of TCP and UDP ports, troubleshoot TCP/IP connectivity and security, return LDAP base query info, SMTP, POP3, IMAP4 status, enumerate SQL Server instances (UDP port 1434), Local ports, local services running (and the DLL modules loaded by each).",
      "syntax": "portqry [options]",
      "examples": [
        "portqry -n name_to_query [-p protocol]",
        "portqry -local [-wt seconds] [-l logfile] [-v]",
        "portqry -wpid pid [-wt seconds] [-l logfile] [-v]"
      ]
    },
    {
      "name": "powercfg",
      "description": "Control power settings, configure Hibernate/Standby modes.",
      "syntax": "For /f \"tokens=2 delims=:(\" %%G in ('powercfg /getActiveScheme') do ( Powercfg /setAcValueIndex %%G SUB_BUTTONS sButtonAction 0 Powercfg /setActive %%G )",
      "examples": [
        "powercfg [Options]"
      ]
    },
    {
      "name": "print-to-file",
      "description": "Windows 7 can be configured to print plain text directly to a specified file without prompting for a filename. This is done by adding a value to the Registry and configuring an additional printer port as follows:",
      "syntax": "print-to-file [options]",
      "examples": [
        "print-to-file",
        "print-to-file --help"
      ]
    },
    {
      "name": "print",
      "description": "Print a file or files to a local or network printer.",
      "syntax": "Echo @PJL RDYMSG DISPLAY =\"Ready Message\" >\\\\server\\printQ",
      "examples": [
        "print",
        "print --help"
      ]
    },
    {
      "name": "printbrm",
      "description": "Print queue Backup/Recovery/Migration.",
      "syntax": "%Windir%\\System32\\spool\\tools\\printbrm.exe",
      "examples": [
        "printbrm",
        "printbrm --help"
      ]
    },
    {
      "name": "prncnfg",
      "description": "Configure a printer (set properties, rename).",
      "syntax": "%Windir%\\System32\\Printing_Admin_Scripts\\en-US\\prncnfg.vbs",
      "examples": [
        "prncnfg",
        "prncnfg --help"
      ]
    },
    {
      "name": "prnmngr",
      "description": "Add, delete and list printers and printer connections, can also display or set the default printer.",
      "syntax": "%Windir%\\System32\\Printing_Admin_Scripts\\en-US\\prnmngr.vbs",
      "examples": [
        "prnmngr",
        "prnmngr --help"
      ]
    },
    {
      "name": "procdump",
      "description": "Monitor an application for CPU spikes and/or generate a crash dump during a CPU spike.",
      "syntax": "C:\\> procdump notepad",
      "examples": [
        "procdump [-a] [[-c|-cl CPU usage] [-u] [-s seconds]] [-n exceeds] [-e [1 [-b]]"
      ]
    },
    {
      "name": "prompt",
      "description": "Change the cmd.exe command prompt.",
      "syntax": "prompt [options]",
      "examples": [
        "prompt",
        "prompt --help"
      ]
    },
    {
      "name": "psexec",
      "description": "Execute a command-line process on a remote machine.",
      "syntax": "psexec -accepteula -s c:\\utils\\pslist.exe -accepteula",
      "examples": [
        "psexec \\\\computer[,computer[,..] [options] command [arguments]",
        "psexec @run_file [options] command [arguments]",
        "psexec -accepteula -s c:\\utils\\pslist.exe -accepteula"
      ]
    },
    {
      "name": "psfile",
      "description": "Show files opened remotely, or close an open file (kill file locks)",
      "syntax": "psfile \\\\workstation64",
      "examples": [
        "psfile [\\\\Computer [-u User [-p Passwd]]]  [[Id | path]  [-c]]",
        "psfile \\\\workstation64"
      ]
    },
    {
      "name": "psgetsid",
      "description": "Display the SID of a computer or a user.",
      "syntax": "psgetsid \\\\workstation64",
      "examples": [
        "psgetsid [\\\\computer[,computer[,...] | @get_file] [-u user [-p passwd]]] [account|SID]",
        "psgetsid \\\\workstation64",
        "psgetsid Niamod"
      ]
    },
    {
      "name": "psinfo",
      "description": "List information about a system including the type of installation, kernel build, registered organization, owner, processor details, physical memory and the system install date.",
      "syntax": "psinfo \\\\workstation64 -d",
      "examples": [
        "psinfo [\\\\computer[,computer[,..]] [options] [filter]",
        "psinfo @file [options] [filter]",
        "psinfo \\\\workstation64 -d"
      ]
    },
    {
      "name": "pskill",
      "description": "Kill processes by name or process ID.",
      "syntax": "pskill \\\\workstation64 notepad",
      "examples": [
        "pskill [- ] [-t] [\\\\computer [-u user] [-p passwd]] process_name | process_id",
        "pskill \\\\workstation64 notepad"
      ]
    },
    {
      "name": "pslist",
      "description": "Process Status, list information about processes running in memory.",
      "syntax": "C:\\> SC \\\\workstation64 start RemoteRegistry C:\\> pslist \\\\workstation64",
      "examples": [
        "pslist [-?] [-t] [-m] [-x] [\\\\computer [-u user] [-p passwd]] [name | pid]",
        "pslist exp"
      ]
    },
    {
      "name": "psloggedon",
      "description": "See who is logged onto a computer, either locally or remotely",
      "syntax": "psloggedon [options]",
      "examples": [
        "psloggedon [- ] [-l] [-x] [\\\\computer | username]"
      ]
    },
    {
      "name": "psloggedon_example",
      "description": "(on a large domain this will take a while to run)",
      "syntax": "psloggedon_example [options]",
      "examples": [
        "psloggedon_example",
        "psloggedon_example --help"
      ]
    },
    {
      "name": "psloglist",
      "description": "Event log records",
      "syntax": "psloglist \\\\workstation64 -h 24 application",
      "examples": [
        "psloglist [- ] [\\\\computer[,computer[,...] | @file",
        "psloglist \\\\workstation64 -h 24 application"
      ]
    },
    {
      "name": "pspasswd",
      "description": "Change account password",
      "syntax": "C:\\> pspasswd \\\\workstation64 jdoe password567",
      "examples": [
        "pspasswd [[\\\\computer[,computer[,..] | @file"
      ]
    },
    {
      "name": "psping",
      "description": "Measure network performance. In addition to standard ICMP ping functionality, PsPing can report the latency of connecting to TCP ports, the latency of TCP round-trip communication between systems, and the TCP bandwidth available to a connection between systems. Besides obtaining min, max, and average values in 0.01ms resolution, you can also use PsPing to generate histograms of the results that are easy to import into a spreadsheet.",
      "syntax": "psping -n 10 -w 3 workstation64",
      "examples": [
        "psping [[-6]|[-4]] [-h [buckets]] [-i interval] [-l requestsize",
        "psping [[-6]|[-4]] [-h [buckets]] [-i interval] [-l requestsize",
        "psping -n 10 -w 3 workstation64"
      ]
    },
    {
      "name": "psservice",
      "description": "View and control services.",
      "syntax": "C:\\> psservice \\\\server64 restart spooler",
      "examples": [
        "psservice [\\\\computer [-u user] [-p passwd]] <command> <options>"
      ]
    },
    {
      "name": "psshutdown",
      "description": "Initiate a shutdown/reboot of a local or remote computer, logoff a user, lock a system.",
      "syntax": "psshutdown \\\\workstation64 -r -e p:2:3",
      "examples": [
        "psshutdown [[\\\\computer[,computer[,..]]] | @file [-u user [-p passwd]]]",
        "psshutdown \\\\workstation64 -r -e p:2:3",
        "psshutdown @c:\\scripts\\computers.txt -s"
      ]
    },
    {
      "name": "pssuspend",
      "description": "Suspend processes on the local or a remote system.",
      "syntax": "pssuspend \\\\workstation64 notepad",
      "examples": [
        "pssuspend [- ] [-r] [\\\\computer [-u user] [-p passwd]] <process name | process id>",
        "pssuspend \\\\workstation64 notepad"
      ]
    },
    {
      "name": "pushd",
      "description": "Change the current directory/folder and store the previous folder/path for use by the POPD command.",
      "syntax": "pushd \"%~dp0\"",
      "examples": [
        "pushd \"%~dp0\""
      ]
    },
    {
      "name": "qgrep",
      "description": "Search file(s) for lines that match a given pattern.",
      "syntax": "qgrep \"arg1 arg2\" FileName.txt",
      "examples": [
        "qgrep \"arg1 arg2\" FileName.txt",
        "qgrep -e \"arg1 arg2\" FileName.txt"
      ]
    },
    {
      "name": "query-process",
      "description": "Display information about processes.",
      "syntax": "query-process [options]",
      "examples": [
        "query-process",
        "query-process --help"
      ]
    },
    {
      "name": "query-session",
      "description": "Display information about user sessions on a Terminal server or a Remote Desktop Session Host (RD Session Host) server.",
      "syntax": "query-session [options]",
      "examples": [
        "query-session",
        "query-session --help"
      ]
    },
    {
      "name": "query-termserver",
      "description": "Display a list of all Terminal server or a Remote Desktop Session Host (RD Session Host) servers on the network.",
      "syntax": "query-termserver [options]",
      "examples": [
        "query-termserver",
        "query-termserver --help"
      ]
    },
    {
      "name": "query-user",
      "description": "Display information about user sessions on a Terminal server or a Remote Desktop Session Host (RD Session Host) server.",
      "syntax": "query-user [options]",
      "examples": [
        "query-user",
        "query-user --help"
      ]
    },
    {
      "name": "rasdial",
      "description": "Manage RAS/DUN connections.",
      "syntax": "rasdial [options]",
      "examples": [
        "rasdial",
        "rasdial --help"
      ]
    },
    {
      "name": "rasphone",
      "description": "Manage Remote Access Service (RAS) connections. This is a part of the Dial-Up Networking service, typically used to connect a PC to an Internet Service Provider.",
      "syntax": "rasphone [options]",
      "examples": [
        "rasphone",
        "rasphone --help"
      ]
    },
    {
      "name": "rd",
      "description": "Remove (or Delete) a Directory.",
      "syntax": "rd [options]",
      "examples": [
        "rd",
        "rd --help"
      ]
    },
    {
      "name": "recover",
      "description": "Recover a damaged file from a defective disk.",
      "syntax": "recover [options]",
      "examples": [
        "recover",
        "recover --help"
      ]
    },
    {
      "name": "reg-types",
      "description": "“Have a place for everything and keep the thing somewhere else; this is not advice, it is merely custom” ~ Mark Twain",
      "syntax": "reg-types [options]",
      "examples": [
        "reg-types",
        "reg-types --help"
      ]
    },
    {
      "name": "reg",
      "description": "Read, Set or Delete registry keys and values, save and restore from a .REG file.",
      "syntax": "Set _reg=HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\SS64.EXE\\Set _prog=C:\\Program Files\\SS64 App\\REG ADD \"%_reg%\\\" /f /v \"SS64.EXE\" /t REG_SZ /d \"%_prog%\\\"",
      "examples": [
        "reg",
        "reg --help"
      ]
    },
    {
      "name": "regedit",
      "description": "Import, export or delete registry settings from a text (.REG) file.",
      "syntax": "regedit /e export.reg HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Audio",
      "examples": [
        "regedit /e export.reg HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Audio",
        "regedit /A ansi.reg HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Audio"
      ]
    },
    {
      "name": "regini",
      "description": "Change Registry Permissions.",
      "syntax": "regini [options]",
      "examples": [
        "regini",
        "regini --help"
      ]
    },
    {
      "name": "regsvr32",
      "description": "Register or unregister OLE controls, such as DLLs and ActiveX controls in the Windows Registry.",
      "syntax": "\\System32\\regsvr32.exe",
      "examples": [
        "regsvr32",
        "regsvr32 --help"
      ]
    },
    {
      "name": "rem",
      "description": "In a batch file REM at the start of a line signifies a comment or REMARK.",
      "syntax": "set var=demo rem %var:=",
      "examples": [
        "rem %var:=",
        "rem %var:*="
      ]
    },
    {
      "name": "ren",
      "description": "Rename a file or files.",
      "syntax": "copy nul 123456789.123 dir /x ren *1* 2*3.?x dir /x",
      "examples": [
        "ren *1* 2*3.?x",
        "ren  *  A?Z*",
        "ren  *  *.txt"
      ]
    },
    {
      "name": "repadmin",
      "description": "Diagnose Active Directory replication problems between domain controllers. Repadmin may be installed if you select the Active Directory Domain Services Tools as part of the RSAT feature or by default, with the AD DS or AD LDS server roles.",
      "syntax": "C:\\> repadmin dc_name /syncall /Adeq",
      "examples": [
        "repadmin command args [/u:{domain\\user}] [/pw:{password | *}]",
        "repadmin /replsummary dc_name  Summary view of current replication health.",
        "repadmin /Queue dc_name       Display items in the queue waiting to be replicated."
      ]
    },
    {
      "name": "replace",
      "description": "Replace one file with another (both having the same filename).",
      "syntax": "C:\\> replace \"C:\\source files\\*.exe\" C:\\delivery",
      "examples": [
        "replace",
        "replace --help"
      ]
    },
    {
      "name": "reset-session",
      "description": "Reset (delete) a Remote Desktop Session.",
      "syntax": "reset-session [options]",
      "examples": [
        "reset-session",
        "reset-session --help"
      ]
    },
    {
      "name": "rmtshare",
      "description": "Manage File and Printer shares, local or on a remote server. Although missing from recent Resource kits, the old version appears to work fine under Windows XP/2003.",
      "syntax": "rmtshare [options]",
      "examples": [
        "rmtshare",
        "rmtshare --help"
      ]
    },
    {
      "name": "robocopy-exit",
      "description": "The return code from Robocopy is a bitmap, defined as follows:",
      "syntax": "robocopy-exit [options]",
      "examples": [
        "robocopy-exit",
        "robocopy-exit --help"
      ]
    },
    {
      "name": "robocopy",
      "description": "Robust File and Folder Copy. By default Robocopy will only copy a file if the source and destination have different time stamps or different file sizes.",
      "syntax": "robocopy [options]",
      "examples": [
        "robocopy",
        "robocopy --help"
      ]
    },
    {
      "name": "route",
      "description": "Manipulate network routing tables. Route packets of network traffic from one subnet to another by modifying the route table.",
      "syntax": "route [options]",
      "examples": [
        "route",
        "route --help"
      ]
    },
    {
      "name": "run",
      "description": "sysdm.cpl SystemProperties or sysdm.cpl DisplaySYSDMCPL",
      "syntax": "rundll32.exe sysdm.cpl,EditEnvironmentVariables",
      "examples": [
        "rundll32.exe sysdm.cpl,EditEnvironmentVariables"
      ]
    },
    {
      "name": "runas",
      "description": "Execute a program under a different user account (non-elevated).",
      "syntax": "runas [options]",
      "examples": [
        "runas",
        "runas --help"
      ]
    },
    {
      "name": "rundll32",
      "description": "Run a 32 bit DLL function. Rundll32 is available on all version of Windows from Windows 95 onwards, but only runs in 32 bit mode.",
      "syntax": "rundll32 [options]",
      "examples": [
        "rundll32",
        "rundll32 --help"
      ]
    },
    {
      "name": "sc",
      "description": "Service Control - Create, Start, Stop, Query or Delete any Windows SERVICE. The command options for SC are case sensitive.",
      "syntax": "SC start schedule",
      "examples": [
        "sc",
        "sc --help"
      ]
    },
    {
      "name": "schtasks",
      "description": "Create / edit a Scheduled Job/Task. The job can be created on the local or a remote computer.",
      "syntax": "schtasks [options]",
      "examples": [
        "schtasks",
        "schtasks --help"
      ]
    },
    {
      "name": "scriptrunner",
      "description": "Run one or more scripts. Supplied with Windows 10 (1607+)",
      "syntax": "ScriptRunner.exe -appvscript cmd \"/c\" \"pause\" -appvscriptrunnerparameters -wait -timeout=20",
      "examples": [
        "scriptrunner",
        "scriptrunner --help"
      ]
    },
    {
      "name": "set",
      "description": "Display, set, or remove CMD environment variables. Changes made with SET will remain only for the duration of the current CMD session.",
      "syntax": "C:\\> SET _dept=Sales and Marketing C:\\> set _ _dept=Sales and Marketing",
      "examples": [
        "set",
        "set --help"
      ]
    },
    {
      "name": "setlocal",
      "description": "Set options to control the visibility of environment variables in a batch file.",
      "syntax": "setlocal [options]",
      "examples": [
        "setlocal",
        "setlocal --help"
      ]
    },
    {
      "name": "setspn",
      "description": "Read, modify, or delete the Service Principal Names (SPN) for an Active Directory service account.",
      "syntax": "When you manipulate SPNs with setspn, the SPN must be entered in the correct format. The format of an SPN is serviceclass/host:port/servicename, in which each item represents a name or value. Unless the service name and port are non standard, you do not have to enter them. For example, the default SPNs for a server named Server64 that is providing remote desktop (RDP) services (TERMSRV) over the default port (TCP 3389) register the following two SPNs in its own Active Directory computer object: ",
      "examples": [
        "setspn",
        "setspn",
        "setspn -x"
      ]
    },
    {
      "name": "setx",
      "description": "Set environment variables permanently, SETX can be used to set Environment Variables for the machine (HKLM) or currently logged on user (HKCU):",
      "syntax": "For /F \"tokens=3\" %%G in ('setx /F example.txt dummyVar /A 1^,4 ^|find \"Extracted value\"') do set _result=%%G :: remove the trailing period set _result=%result:~0,1% Echo %_result%",
      "examples": [
        "setx",
        "setx --help"
      ]
    },
    {
      "name": "sfc",
      "description": "System File Checker",
      "syntax": "sfc [options]",
      "examples": [
        "sfc",
        "sfc --help"
      ]
    },
    {
      "name": "share",
      "description": "List or edit a file share or print share (on any computer)",
      "syntax": "cscript Share.vbs /c /n scratch /p \"c:\\my shared files\" /t Disk /v \"project files\"",
      "examples": [
        "share",
        "share --help"
      ]
    },
    {
      "name": "shell",
      "description": "Desktop merged from %UserProfile%\\Desktop + %Public%\\Desktop\\",
      "syntax": "shell:AppUpdatesFolder",
      "examples": [
        "shell:AppUpdatesFolder",
        "shell:OEM Links",
        "shell:MyComputerFolder"
      ]
    },
    {
      "name": "shellrunas",
      "description": "Launch a program under a different user account (typically an Admin level account).",
      "syntax": "C:\\> shellrunas photoshop.exe",
      "examples": [
        "shellrunas [/netonly] program arguments",
        "shellrunas /reg [/quiet]",
        "shellrunas /regnetonly [/quiet]"
      ]
    },
    {
      "name": "shift",
      "description": "Change the position of command line arguments passed to a batch file.",
      "syntax": "shift [options]",
      "examples": [
        "shift",
        "shift --help"
      ]
    },
    {
      "name": "shortcut",
      "description": "Create a windows shortcut (.LNK file) This utility works under Windows 7 but fails under Windows 10. A good alternative is shortcut.exe from Optimum X. See other alternatives below.",
      "syntax": "CSCRIPT C:\\batch\\myshortcut.vbs",
      "examples": [
        "shortcut.exe -s"
      ]
    },
    {
      "name": "shutdown",
      "description": "Shutdown the computer",
      "syntax": "shutdown /a",
      "examples": [
        "shutdown_options:",
        "shutdown /a",
        "shutdown /r /f   /c \"Demo of Shutdown\" /d up:125:1"
      ]
    },
    {
      "name": "sigcheck",
      "description": "Display file version number, VirusTotal status, timestamp information, and digital signature details, including certificate chains.",
      "syntax": "sigcheck -u -e -vt c:\\windows\\system32",
      "examples": [
        "sigcheck -u -e -vt c:\\windows\\system32"
      ]
    },
    {
      "name": "sleep",
      "description": "Delay execution for a few seconds/minutes (for use within a batch file.)",
      "syntax": "sleep [options]",
      "examples": [
        "sleep",
        "sleep --help"
      ]
    },
    {
      "name": "slmgr",
      "description": "Software Licensing Management Tool. Windows Activation and Key Management Service (KMS)",
      "syntax": "C:\\> cscript C:\\windows\\system32\\slmgr.vbs wkstn64 administrator pa55w0rd1 -dli C:\\> cscript slmgr.vbs -skms 192.168.10.1:8090 C:\\> cscript slmgr.vbs -skms KMSServer:8090",
      "examples": [
        "slmgr [MachineName [Username Password]] [Option]"
      ]
    },
    {
      "name": "slow_browsing",
      "description": "The file permissions set on desktop.ini files can slow down browsing the folder structure. This issue affects Windows clients using mapped drives or UNC connections, this issue was fixed in XP sp2 (Q840309), but from Q326549 has re-emerged in Windows 7.",
      "syntax": "slow_browsing [options]",
      "examples": [
        "slow_browsing",
        "slow_browsing --help"
      ]
    },
    {
      "name": "sort",
      "description": "Sort will accept a redirected or piped file input and TYPE the file, sorted line by line.",
      "syntax": "sort [options]",
      "examples": [
        "sort",
        "sort --help"
      ]
    },
    {
      "name": "ssh",
      "description": "OpenSSH remote login client. In Windows 10 (>1709) this is an optional feature available under Settings > Apps > “Manage optional features”.",
      "syntax": "C:\\> ssh -l xiaoping ssh.example.com",
      "examples": [
        "ssh [options] destination [command]"
      ]
    },
    {
      "name": "start",
      "description": "Start a program, command or batch script (opens in a new window.)",
      "syntax": "start /NODE 1 app1.exe start /NODE 1 app2.exe",
      "examples": [
        "start /NODE 1 app1.exe",
        "start /NODE 1 app2.exe",
        "start /NODE 1 /AFFINITY 0x3 app1.exe"
      ]
    },
    {
      "name": "strings",
      "description": "Search for ANSI and UNICODE strings in binary files.",
      "syntax": "strings *.dll | findstr /i TextToSearchFor",
      "examples": [
        "strings [-a] [-f offset] [-b bytes] [-n length] [-o] [-q] [-s]",
        "strings *.dll | findstr /i TextToSearchFor",
        "strings sample.jpg | findstr /i /c:\"This program cannot be run in DOS mode\""
      ]
    },
    {
      "name": "subinacl",
      "description": "Download latest version (2004) Display or modify Access Control Entries (ACEs) for file and folder Permissions, Ownership and Domain. Access Control Lists apply only to files stored on an NTFS formatted drive, each ACL determines which users (or groups of users) can read or edit the file. When a new file is created it normally inherits ACL's from the folder where it was created.",
      "syntax": "subinacl /noverbose /nostatistic /outputlog=SS64.log /subdirectories \"C:\\Program Files\\My Folder\\*.*\" /display",
      "examples": [
        "subinacl /nostatistic /playfile SS64.log",
        "subinacl /file C:\\demofile.doc /setowner=SS64Dom\\AliceT"
      ]
    },
    {
      "name": "subst",
      "description": "Substitute a drive letter for a network or local path.",
      "syntax": "subst [options]",
      "examples": [
        "subst",
        "subst --help"
      ]
    },
    {
      "name": "superhidden",
      "description": "# Show_SuperHidden.reg",
      "syntax": "superhidden [options]",
      "examples": [
        "superhidden",
        "superhidden --help"
      ]
    },
    {
      "name": "syntax-64bit",
      "description": "Before starting to look at this, its important to be clear about what you mean by \"64 bit\". You can have a 64 bit CPU, a 64 bit operating system and a 64 bit process running.",
      "syntax": "syntax-64bit [options]",
      "examples": [
        "syntax-64bit",
        "syntax-64bit --help"
      ]
    },
    {
      "name": "syntax-admin-share",
      "description": "How to enable access to Windows Administrative Shares C$, D$ etc",
      "syntax": "syntax-admin-share [options]",
      "examples": [
        "syntax-admin-share",
        "syntax-admin-share --help"
      ]
    },
    {
      "name": "syntax-ansi",
      "description": "ANSI colors are available by default in Windows version 1909 or newer. See below for older versions.",
      "syntax": "syntax-ansi [options]",
      "examples": [
        "syntax-ansi",
        "syntax-ansi --help"
      ]
    },
    {
      "name": "syntax-args",
      "description": "A command line argument (or parameter) is any value passed into a batch script:",
      "syntax": "syntax-args [options]",
      "examples": [
        "syntax-args",
        "syntax-args --help"
      ]
    },
    {
      "name": "syntax-autoexec",
      "description": "To run a command as soon as the command prompt is opened:",
      "syntax": "syntax-autoexec [options]",
      "examples": [
        "syntax-autoexec",
        "syntax-autoexec --help"
      ]
    },
    {
      "name": "syntax-banner",
      "description": "Display a string of text in extra large letters, similar to banner printing on a dot matrix printer. This can be useful when you need to read the output from a distance.",
      "syntax": "syntax-banner [options]",
      "examples": [
        "syntax-banner",
        "syntax-banner --help"
      ]
    },
    {
      "name": "syntax-brackets",
      "description": "Parenthesis can be used to split commands across multiple lines. This can make code more readable. Variables will be evaluated for the code block just as if the command was a single line.",
      "syntax": "syntax-brackets [options]",
      "examples": [
        "syntax-brackets",
        "syntax-brackets --help"
      ]
    },
    {
      "name": "syntax-cmd",
      "description": "Notes on working with the Windows CMD shell.",
      "syntax": "syntax-cmd [options]",
      "examples": [
        "syntax-cmd",
        "syntax-cmd --help"
      ]
    },
    {
      "name": "syntax-compatibility",
      "description": "To run old applications in Windows 7 and Windows 10 it is possible to set the compatibility options under File Properties > Compatibility.",
      "syntax": "syntax-compatibility [options]",
      "examples": [
        "syntax-compatibility",
        "syntax-compatibility --help"
      ]
    },
    {
      "name": "syntax-conditional",
      "description": "command1 && command2",
      "syntax": "syntax-conditional [options]",
      "examples": [
        "syntax-conditional",
        "syntax-conditional --help"
      ]
    },
    {
      "name": "syntax-datemath",
      "description": "To add or subtract days from any date, copy the script below or download here and save as DateMath.cmd",
      "syntax": "syntax-datemath [options]",
      "examples": [
        "syntax-datemath",
        "syntax-datemath --help"
      ]
    },
    {
      "name": "syntax-delolder",
      "description": "There are several ways to do this",
      "syntax": "syntax-delolder [options]",
      "examples": [
        "syntax-delolder",
        "syntax-delolder --help"
      ]
    },
    {
      "name": "syntax-dequote",
      "description": "Several routines that can be used to remove quotes from the contents of a variable.",
      "syntax": "syntax-dequote [options]",
      "examples": [
        "syntax-dequote",
        "syntax-dequote --help"
      ]
    },
    {
      "name": "syntax-dpi",
      "description": "The DPI setting of a display monitor is a measure of the number of dots that are visible in a single inch (Dots-per-Inch or Pixels-per-inch).",
      "syntax": "syntax-dpi [options]",
      "examples": [
        "syntax-dpi",
        "syntax-dpi --help"
      ]
    },
    {
      "name": "syntax-elevate",
      "description": "The CMD shell, START and RUNAS commands have no built-in options to elevate or run individual commands 'As Admin' (elevated).",
      "syntax": "syntax-elevate [options]",
      "examples": [
        "syntax-elevate",
        "syntax-elevate --help"
      ]
    },
    {
      "name": "syntax-esc",
      "description": "If a single parameter contains spaces, you can still pass it as one item by surrounding in \"quotes\" - this works well for long filenames. If a parameter is used to supply a filename like this:",
      "syntax": "syntax-esc [options]",
      "examples": [
        "syntax-esc",
        "syntax-esc --help"
      ]
    },
    {
      "name": "syntax-filenames",
      "description": "If a filename contains spaces you must surround it with double quotes: \"my file.txt\" Filenames that include quotes or parenthesis (') are legal filenames but they can still cause problems, particularly within batch files where these characters have special meaning.",
      "syntax": "syntax-filenames [options]",
      "examples": [
        "syntax-filenames",
        "syntax-filenames --help"
      ]
    },
    {
      "name": "syntax-folders",
      "description": "* These OS's require a patch to upgrade from .V2 to separate V3/V4 profiles.",
      "syntax": "syntax-folders [options]",
      "examples": [
        "syntax-folders",
        "syntax-folders --help"
      ]
    },
    {
      "name": "syntax-functions",
      "description": "Packaging up code into a discrete functions, each with a clear purpose is a very common programming technique. Re-using known, tested code, means you can solve problems very quickly by just bolting together a few functions.",
      "syntax": "syntax-functions [options]",
      "examples": [
        "syntax-functions",
        "syntax-functions --help"
      ]
    },
    {
      "name": "syntax-genchr",
      "description": "Generate the ASCII/Unicode character for any byte value.",
      "syntax": "syntax-genchr [options]",
      "examples": [
        "syntax-genchr",
        "syntax-genchr --help"
      ]
    },
    {
      "name": "syntax-getdate",
      "description": "Display the date and time independent of OS Locale, Language or the users chosen date format (Control Panel/Regional).",
      "syntax": "syntax-getdate [options]",
      "examples": [
        "syntax-getdate",
        "syntax-getdate --help"
      ]
    },
    {
      "name": "syntax-gettime",
      "description": "Returns the current time into the variable %_time%",
      "syntax": "syntax-gettime [options]",
      "examples": [
        "syntax-gettime",
        "syntax-gettime --help"
      ]
    },
    {
      "name": "syntax-gmt",
      "description": "Display the current date and time adjusted to Greenwich Mean Time, this can be useful when comparing events across multiple time zones.",
      "syntax": "syntax-gmt [options]",
      "examples": [
        "syntax-gmt",
        "syntax-gmt --help"
      ]
    },
    {
      "name": "syntax-groups",
      "description": "This page describes the different types of Active Directory group, group scope and nesting permissions within and across WANS and domains.",
      "syntax": "syntax-groups [options]",
      "examples": [
        "syntax-groups",
        "syntax-groups --help"
      ]
    },
    {
      "name": "syntax-internal",
      "description": "The Windows CMD shell CMD.exe contains a number of 'internal' commands, additional 'external' commands are also supplied as separate executable files. External commands are generally stored in the C:\\WINDOWS\\System32 folder, this folder is part of the system PATH .",
      "syntax": "syntax-internal [options]",
      "examples": [
        "syntax-internal",
        "syntax-internal --help"
      ]
    },
    {
      "name": "syntax-keyboard",
      "description": "Keyboard shortcuts for the Windows CMD shell and PowerShell.",
      "syntax": "syntax-keyboard [options]",
      "examples": [
        "syntax-keyboard",
        "syntax-keyboard --help"
      ]
    },
    {
      "name": "syntax-logon-types",
      "description": "Windows Event ID 4624 displays a numerical value for the type of login that was attempted.",
      "syntax": "syntax-logon-types [options]",
      "examples": [
        "syntax-logon-types",
        "syntax-logon-types --help"
      ]
    },
    {
      "name": "syntax-loops",
      "description": "There are 2 ways to conditionally process commands in a batch file. IF xxx ELSE yyy - will conditionally perform a command (or a set of commands) FOR aaa DO xxx - will conditionally perform a command several times (for a set of data, or a set of files) Either of these can be combined with the CALL command to run a subroutine like this:",
      "syntax": "syntax-loops [options]",
      "examples": [
        "syntax-loops",
        "syntax-loops --help"
      ]
    },
    {
      "name": "syntax-macros",
      "description": "A macro allows you to embed blocks of code in a variable. Like calling a subroutine or function this allows reusing the same block of code multiple times, the difference is that by placing the code in a variable the performance will be much faster.",
      "syntax": "syntax-macros [options]",
      "examples": [
        "syntax-macros",
        "syntax-macros --help"
      ]
    },
    {
      "name": "syntax-mmc",
      "description": "System Administrator command line shortcuts to popular Microsoft Management Consoles (MMCs).",
      "syntax": "syntax-mmc [options]",
      "examples": [
        "syntax-mmc",
        "syntax-mmc --help"
      ]
    },
    {
      "name": "syntax-nodrives",
      "description": "Hide drive mappings in Windows Explorer and the standard File, Open dialog box.",
      "syntax": "syntax-nodrives [options]",
      "examples": [
        "syntax-nodrives",
        "syntax-nodrives --help"
      ]
    },
    {
      "name": "syntax-ntlm",
      "description": "This setting affects how a Windows computer handles NTLM authentication both as a client and as an authenticating server.",
      "syntax": "syntax-ntlm [options]",
      "examples": [
        "syntax-ntlm",
        "syntax-ntlm --help"
      ]
    },
    {
      "name": "syntax-percent",
      "description": "A common question asked by new batch file programmers is \"why do we need to double the percent symbols when writing a FOR command?\". On the command line %A works fine, so why does a batch need %%A?",
      "syntax": "syntax-percent [options]",
      "examples": [
        "syntax-percent",
        "syntax-percent --help"
      ]
    },
    {
      "name": "syntax-performance-counters",
      "description": "These Performance Monitor counters can be used with TypePerf or LogMan to record Performance data:",
      "syntax": "syntax-performance-counters [options]",
      "examples": [
        "syntax-performance-counters",
        "syntax-performance-counters --help"
      ]
    },
    {
      "name": "syntax-permissions",
      "description": "Permissions can be set on Files and Folders with CACLS or XCACLS. There are 4 types of group: Local Machine, Local Domain, Global Domain, Universal",
      "syntax": "syntax-permissions [options]",
      "examples": [
        "syntax-permissions",
        "syntax-permissions --help"
      ]
    },
    {
      "name": "syntax-printing",
      "description": "Every Print Server has a hidden file share (called Print$) that is used to deliver print Drivers to Windows clients. When a PC connects to a Print Share the drivers on the server and client are compared, if the client is missing the driver; or has an older version; then it will be automatically downloaded. The achilles heel of this system is version control: consider that you have two similar printers on two different print servers. One server has a driver version 26.232 the other has version 26",
      "syntax": "syntax-printing [options]",
      "examples": [
        "syntax-printing",
        "syntax-printing --help"
      ]
    },
    {
      "name": "syntax-random",
      "description": "The Windows CMD shell contains a built-in variable called %RANDOM% that can be used to generate random numbers.",
      "syntax": "syntax-random [options]",
      "examples": [
        "syntax-random",
        "syntax-random --help"
      ]
    },
    {
      "name": "syntax-recovery",
      "description": "When dealing with a Blue Screen of Death at boot - the first option should be to boot into Safe Mode (press F8 during bootup). From safe mode you can run a system restore with %systemroot%\\system32\\restore\\rstrui.exe",
      "syntax": "syntax-recovery [options]",
      "examples": [
        "syntax-recovery",
        "syntax-recovery --help"
      ]
    },
    {
      "name": "syntax-redirection",
      "description": "Success and failure are based on the Exit Code of the command. In most cases the Exit Code is the same as the ErrorLevel",
      "syntax": "syntax-redirection [options]",
      "examples": [
        "syntax-redirection",
        "syntax-redirection --help"
      ]
    },
    {
      "name": "syntax-reghacks",
      "description": "Registry settings for user interface settings and options under Windows 10.",
      "syntax": "syntax-reghacks [options]",
      "examples": [
        "syntax-reghacks",
        "syntax-reghacks --help"
      ]
    },
    {
      "name": "syntax-replace",
      "description": "Use the syntax below to edit and replace the characters assigned to a string variable.",
      "syntax": "syntax-replace [options]",
      "examples": [
        "syntax-replace",
        "syntax-replace --help"
      ]
    },
    {
      "name": "syntax-run",
      "description": "To prepare a new batch script, save the file as plain ASCII text with the file extension .CMD",
      "syntax": "syntax-run [options]",
      "examples": [
        "syntax-run",
        "syntax-run --help"
      ]
    },
    {
      "name": "syntax-security_groups",
      "description": "Special identities are implicit placeholders, they are not listed in Active Directory but are available when applying permissions – membership is automatically calculated by the OS.",
      "syntax": "syntax-security_groups [options]",
      "examples": [
        "syntax-security_groups",
        "syntax-security_groups --help"
      ]
    },
    {
      "name": "syntax-services",
      "description": "A list of the default services in Windows 10 (build 1903).",
      "syntax": "syntax-services [options]",
      "examples": [
        "syntax-services",
        "syntax-services --help"
      ]
    },
    {
      "name": "syntax-settings",
      "description": "These URI's can be used in the Start > Run box, in the Windows Explorer address bar, in a Shortcut or from the command line: START ms-settings:",
      "syntax": "syntax-settings [options]",
      "examples": [
        "syntax-settings",
        "syntax-settings --help"
      ]
    },
    {
      "name": "syntax-share-modes",
      "description": "When an application creates a new file or opens an existing file, it must specify whether it wants to share the file for reading, writing, both, or neither. This is known as the sharing mode.",
      "syntax": "syntax-share-modes [options]",
      "examples": [
        "syntax-share-modes",
        "syntax-share-modes --help"
      ]
    },
    {
      "name": "syntax-shares",
      "description": "Some thoughts on how to arrange shared files. Here we discuss the what rather than the how - there is a separate page covering the technical aspects of folder sharing.",
      "syntax": "syntax-shares [options]",
      "examples": [
        "syntax-shares",
        "syntax-shares --help"
      ]
    },
    {
      "name": "syntax-stampme",
      "description": "Rename a file (or folder) by appending the current date and time to the existing filename:",
      "syntax": "syntax-stampme [options]",
      "examples": [
        "syntax-stampme",
        "syntax-stampme --help"
      ]
    },
    {
      "name": "syntax-strlen",
      "description": "This function can be used to return the length of a string.",
      "syntax": "syntax-strlen [options]",
      "examples": [
        "syntax-strlen",
        "syntax-strlen --help"
      ]
    },
    {
      "name": "syntax-substring",
      "description": "It is possible to retrieve specific characters from a string variable.",
      "syntax": "syntax-substring [options]",
      "examples": [
        "syntax-substring",
        "syntax-substring --help"
      ]
    },
    {
      "name": "syntax-tdiff",
      "description": "Given two time values in hours, minutes and seconds, calculate the time difference between them.",
      "syntax": "syntax-tdiff [options]",
      "examples": [
        "syntax-tdiff",
        "syntax-tdiff --help"
      ]
    },
    {
      "name": "syntax-timer",
      "description": "This script by bluesxman on the forum can be used to accurately measure the time elapsed by some other process or script. To use it start the timer with CALL timer.cmd start, then run the other process and then CALL timer.cmd stop when finished.",
      "syntax": "syntax-timer [options]",
      "examples": [
        "syntax-timer",
        "syntax-timer --help"
      ]
    },
    {
      "name": "syntax-variables",
      "description": "Environment variables are mainly used within batch files, they can be created, modified and deleted for a session using the SET command. To make permanent changes, use SETX Variables can be displayed using either SET or ECHO.",
      "syntax": "syntax-variables [options]",
      "examples": [
        "syntax-variables",
        "syntax-variables --help"
      ]
    },
    {
      "name": "syntax-which",
      "description": "Show the full path to an executable file.",
      "syntax": "syntax-which [options]",
      "examples": [
        "syntax-which",
        "syntax-which --help"
      ]
    },
    {
      "name": "syntax-wildcards",
      "description": "A few quirks affect the operation of wildcards which are best illustrated by example: To match the filename BAR.TXT any of the following patterns will match: ?AR.TXT BAR.* ??R.TXT B?R.??? BA?.TXT BA??.TXT However the following will fail to match with BAR.TXT ??AR.TXT ?BAR.TXT B??AR.TXT",
      "syntax": "syntax-wildcards [options]",
      "examples": [
        "syntax-wildcards",
        "syntax-wildcards --help"
      ]
    },
    {
      "name": "syntax-xlong",
      "description": "It is possible to create very long filenames/pathnames on NTFS that exceed the 260 character Windows API limit. This typically happens when a folder which is part of a deep hierarchy gets renamed. Very long filenames will often create errors in applications that attempt to open them (even Windows Explorer.)",
      "syntax": "syntax-xlong [options]",
      "examples": [
        "syntax-xlong",
        "syntax-xlong --help"
      ]
    },
    {
      "name": "syntax",
      "description": "Evaluate expressions",
      "syntax": "syntax [options]",
      "examples": [
        "syntax",
        "syntax --help"
      ]
    },
    {
      "name": "sysmon",
      "description": "System Monitor - monitor and log system activity to the Windows event log. By monitoring process creation, network connections, and file changes with SysMon, you can identify malicious or anomalous activity on a network. SysMon should not be confused with Process Monitor, the graphical tool for analysing running processes.",
      "syntax": "sysmon –i -accepteula",
      "examples": [
        "sysmon –i -accepteula",
        "sysmon –i -accepteula –h md5 –n",
        "sysmon –u"
      ]
    },
    {
      "name": "systeminfo",
      "description": "List system configuration.",
      "syntax": "$objects = systeminfo.exe /FO CSV | ConvertFrom-Csv $objects.'Available Physical Memory'",
      "examples": [
        "systeminfo",
        "systeminfo --help"
      ]
    },
    {
      "name": "takeown",
      "description": "Take ownership of a file (Windows 2003/7/2008).",
      "syntax": "takeown [options]",
      "examples": [
        "takeown",
        "takeown --help"
      ]
    },
    {
      "name": "tar",
      "description": "Store, list or extract files in an archive (originally on tape - Tape ARchiver). BSD TAR.exe was added to Windows 10 (1903) from build 17063 or later.",
      "syntax": "C:\\> tar -cvzf C:\\TARS\\sqlbackup.tar.gz *.sql",
      "examples": [
        "tar",
        "tar --help"
      ]
    },
    {
      "name": "taskkill",
      "description": "End one or more processes (by process id or image name).",
      "syntax": "taskkill [options]",
      "examples": [
        "taskkill",
        "taskkill --help"
      ]
    },
    {
      "name": "tasklist",
      "description": "TaskList displays all running applications and services with their Process ID (PID) This can be run on either a local or a remote computer.",
      "syntax": "tasklist [options]",
      "examples": [
        "tasklist",
        "tasklist --help"
      ]
    },
    {
      "name": "telnet",
      "description": "Communicate with another host using the TELNET protocol.",
      "syntax": "ServerManagercmd -install telnet-client",
      "examples": [
        "telnet",
        "telnet --help"
      ]
    },
    {
      "name": "time",
      "description": "Display or set the system time.",
      "syntax": "In Control Panel, Regional settings a Time Appearance can be set. This can be used to change the separator, and the number of characters used to display hours and minutes. To display the time including Seconds and Hundredths of a second: ECHO:| TIME The time Separator, Country Code and Time format can be read from the registry using REG as follows: @Echo off FOR /F \"TOKENS=3\" %%D IN ('REG QUERY ^\"HKEY_CURRENT_USER\\Control Panel\\International^\" /v iCountry ^| find ^\"REG_SZ^\"') DO ( SET _country_c",
      "examples": [
        "time",
        "time --help"
      ]
    },
    {
      "name": "timeout",
      "description": "Delay execution for a few seconds or minutes, for use within a batch file.",
      "syntax": "timeout [options]",
      "examples": [
        "timeout",
        "timeout --help"
      ]
    },
    {
      "name": "timezones",
      "description": "A full, sortable list of time zones.",
      "syntax": "timezones [options]",
      "examples": [
        "timezones",
        "timezones --help"
      ]
    },
    {
      "name": "title",
      "description": "Change the title displayed above the CMD window.",
      "syntax": "Syntax TITLE [string] Key string The title for the command prompt window, up to 243 characters.",
      "examples": [
        "title",
        "title --help"
      ]
    },
    {
      "name": "tlist",
      "description": "Task List. Show the command, command line, working directory, memory usage and DLLs for each running task. This command is no longer supplied with recent versions of the Windows resource kit, having been replaced by TASKLIST, however if you can find a copy Tlist does have the advantage of showing the full path of the process.",
      "syntax": "@ECHO off FOR /f \"tokens=1\" %%G in ('tlist') DO (call :s_item %%G) GOTO :eof :s_item tlist %1 | find \"CmdLine\"",
      "examples": [
        "tlist %1 | find \"CmdLine\""
      ]
    },
    {
      "name": "touch",
      "description": "Change file timestamps",
      "syntax": "touch [options]",
      "examples": [
        "touch",
        "touch --help"
      ]
    },
    {
      "name": "tracert",
      "description": "Trace Route - Find the IP address of any remote host. TRACERT is useful for troubleshooting large networks where several paths can be taken to arrive at the same point, or where many intermediate systems (routers or bridges) are involved.",
      "syntax": "tracert [options]",
      "examples": [
        "tracert",
        "tracert --help"
      ]
    },
    {
      "name": "tree",
      "description": "Display the folder structure of a drive or path as a graphical tree.",
      "syntax": "tree \"C:\\program files\"",
      "examples": [
        "tree \"C:\\program files\"",
        "tree %homedrive%%homepath%",
        "tree $home"
      ]
    },
    {
      "name": "trusted-sites",
      "description": "The script below uses REG query to lookup the Internet Explorer Trusted Sites list, when managed by Group Policy this list is greyed out in the GUI.",
      "syntax": "trusted-sites [options]",
      "examples": [
        "trusted-sites",
        "trusted-sites --help"
      ]
    },
    {
      "name": "tsdiscon",
      "description": "Disconnect a Remote Desktop Session.",
      "syntax": "C:\\> tsdiscon",
      "examples": [
        "tsdiscon [SessionID | SessionName] [/server:ServerName] [/v]"
      ]
    },
    {
      "name": "tskill",
      "description": "End a process running in a session on a Remote Desktop Session Host (RD Session Host) server. Tskill can be used to end any process that belongs to you, unless you are an administrator. Administrators have full access to all tskill functions and can end processes that are running in other user sessions.",
      "syntax": "tskill notepad",
      "examples": [
        "tskill notepad",
        "tskill 6464"
      ]
    },
    {
      "name": "type",
      "description": "Display the contents of one or more text files.",
      "syntax": "type [options]",
      "examples": [
        "type",
        "type --help"
      ]
    },
    {
      "name": "typeperf",
      "description": "Write performance data to the command window or to a log file.To stop Typeperf, press CTRL+C.",
      "syntax": "C:\\> typeperf \"\\Processor(_Total)\\% Processor Time\"",
      "examples": [
        "typeperf counter [counter ...] [options]",
        "typeperf -cf filename  [options]",
        "typeperf -q [object] [options]"
      ]
    },
    {
      "name": "tzutil",
      "description": "Time Zone Utility.",
      "syntax": "%SYSTEMROOT%\\System32\\tzutil.exe /g",
      "examples": [
        "tzutil /s \"Pacific Standard Time\"",
        "tzutil /s \"Pacific Standard Time_dstoff"
      ]
    },
    {
      "name": "ver",
      "description": "Display the current operating system version.",
      "syntax": "ver | find \"6.1\" > nul if %ERRORLEVEL% == 0 goto ver_2008R2",
      "examples": [
        "ver | find \"6.1\" > nul"
      ]
    },
    {
      "name": "verify",
      "description": "To check that files are saved to disk correctly; the system can re-read the disk after saving to verify that the file is readable.",
      "syntax": "verify [options]",
      "examples": [
        "verify",
        "verify --help"
      ]
    },
    {
      "name": "vmconnect",
      "description": "Connect to a Hyper-V Virtual Machine.",
      "syntax": "vmconnect [options]",
      "examples": [
        "vmconnect.exe ServerName VMName [-C count]",
        "vmconnect.exe ServerName [VMName] -G GUID [-C count]"
      ]
    },
    {
      "name": "vol",
      "description": "Display the volume label of a disk.",
      "syntax": "vol c: h:",
      "examples": [
        "vol c: h:"
      ]
    },
    {
      "name": "vssadmin",
      "description": "Display the current volume shadow copy backups and all installed shadow copy writers and providers.",
      "syntax": "vssadmin [options]",
      "examples": [
        "vssadmin",
        "vssadmin --help"
      ]
    },
    {
      "name": "w32tm",
      "description": "Time Service Utility.",
      "syntax": "w32tm /resync",
      "examples": [
        "w32tm /resync",
        "w32tm.exe /ntte"
      ]
    },
    {
      "name": "waitfor",
      "description": "Wait for or send a signal. Waitfor is used to synchronize events between one or more networked computers.",
      "syntax": "C:\\> waitfor /t 60 simon",
      "examples": [
        "waitfor [/s Computer [/u [Domain\\]User [/p [Password]]]] /si SignalName"
      ]
    },
    {
      "name": "wbadmin",
      "description": "Windows Backup Administration. The syntax below is for Windows Server 2008 R2 or later, other than where stated. See docs.microsoft.com for earlier versions.",
      "syntax": "C:\\> wbadmin enable backup –addtarget:\\\\backupshare\\BK1 –include: d:\\demo –user:SS64dom\\user64 –password:pass30r6 –schedule:00:00,19:00",
      "examples": [
        "wbadmin",
        "wbadmin --help"
      ]
    },
    {
      "name": "wecutil",
      "description": "Windows Event Collector Utility. Create and manage subscriptions to events forwarded from remote event sources that support WS-Management protocol.",
      "syntax": "C:\\> wecutil gs sub1",
      "examples": [
        "wecutil command [Argument [Argument] ...] [/Option:VALUE [/Option:VALUE] ...]",
        "wecutil COMMAND -?"
      ]
    },
    {
      "name": "wevtutil",
      "description": "Retrieve information about event logs and publishers. Archive logs in a self-contained format, Enumerate the available logs, Install and uninstall event manifests, run queries, Exports events (from an event log, from a log file, or using a structured query) to a specified file, Clear event logs.",
      "syntax": "@echo off for /f \"tokens=*\" %%G in ('wevtutil.exe el') do (wevtutil.exe cl \"%%G\")",
      "examples": [
        "wevtutil qe Application /c:50 /rd:true /f:text"
      ]
    },
    {
      "name": "where",
      "description": "Locate and display files in a directory tree. The WHERE command is roughly equivalent to the UNIX 'which' command. By default, the search is done in the current directory and in the PATH.",
      "syntax": "where [options]",
      "examples": [
        "where",
        "where --help"
      ]
    },
    {
      "name": "whoami",
      "description": "Display user, group and privileges for the current user.",
      "syntax": "whoami",
      "examples": [
        "whoami [/upn | /fqdn | /logonid]",
        "whoami {[/user] [/groups] [/priv]} [/fo Format] [/nh]",
        "whoami /all [/fo Format] [/nh]"
      ]
    },
    {
      "name": "windiff",
      "description": "Compare the contents of two files or sets of files with a graphical interface.",
      "syntax": "Syntax windiff [path1] [path2] Key path Individual files to compare or a directory of files to compare",
      "examples": [
        "windiff [path1] [path2]"
      ]
    },
    {
      "name": "winrm-enumerate",
      "description": "List instances of RESOURCE_URI, the instances returned can be limited using a filter and dialect (if supported by the resource).",
      "syntax": "winrm-enumerate [options]",
      "examples": [
        "winrm-enumerate",
        "winrm-enumerate --help"
      ]
    },
    {
      "name": "winrm-remote",
      "description": "Windows Remote Management When connecting remotely, you can specify which credentials, authentication mechanisms, proxy access type, proxy credentials and proxy authentication mechanisms to use.",
      "syntax": "winrm-remote [options]",
      "examples": [
        "winrm-remote",
        "winrm-remote --help"
      ]
    },
    {
      "name": "winrm",
      "description": "Windows Remote Management Secure communication with local and remote computers using web services.",
      "syntax": "C:\\WINDOWS\\system32\\winrm.vbs",
      "examples": [
        "winrm g[et] | s[et] | c[reate] | d[elete] | e[numerate] |",
        "winrm get RESOURCE_URI [-SWITCH:VALUE [-SWITCH:VALUE] ...]",
        "winrm get winrm/config"
      ]
    },
    {
      "name": "winrs",
      "description": "On a client you can then open a remote shell connected to DemoServer2 with: winrs -r:DemoServer2 cmd",
      "syntax": "winrs -r:DemoServer2 cmd",
      "examples": [
        "winrs [-/SWITCH[:VALUE]] COMMAND",
        "winrs -r:DemoServer2 cmd",
        "winrs -r:%1 cmd"
      ]
    },
    {
      "name": "wmic",
      "description": "Windows Management Instrumentation Command. Retrieve a huge range of information about local or remote computers. Make configuration changes to multiple remote machines.",
      "syntax": "wmic [options]",
      "examples": [
        "wmic:root\\cli> OS get csname",
        "wmic:root\\cli> quit"
      ]
    },
    {
      "name": "wmicstylesheets",
      "description": "The compilation of Cli.mof, Cliegaliases.mod, and Clialiases.mfl files creates the \\\\root\\cli name space and populates it with aliases.",
      "syntax": "wmicstylesheets [options]",
      "examples": [
        "wmicstylesheets",
        "wmicstylesheets --help"
      ]
    },
    {
      "name": "wpeutil",
      "description": "Run commands during a Windows Preinstallation Environment (WinPE) session.",
      "syntax": "wpeutil [options]",
      "examples": [
        "wpeutil",
        "wpeutil --help"
      ]
    },
    {
      "name": "wpr",
      "description": "Windows Performance Recorder Record system events for analysis with Windows Performance Analyzer (WPA) WPR is part of the Windows Assessment and Deployment Kit (Windows ADK) for Windows 10",
      "syntax": "C:\\> wpr -profiles",
      "examples": [
        "wpr",
        "wpr --help"
      ]
    },
    {
      "name": "wuauclt",
      "description": "Windows Update Agent, download new Windows Update files.",
      "syntax": "C:\\> wuauclt /a /DetectNow",
      "examples": [
        "wuauclt Options"
      ]
    },
    {
      "name": "wusa",
      "description": "Windows Update Standalone Installer.",
      "syntax": "wusa [options]",
      "examples": [
        "wusa.exe d:\\934307\\Windows6.0-KB934307-x86.msu /quiet",
        "wusa.exe D:\\934307\\Windows6.0-KB934307-x86.msu /quiet /norestart"
      ]
    },
    {
      "name": "xcacls",
      "description": "Display or modify Access Control Lists (ACLs) for files and folders. For Vista and greater use icacls.",
      "syntax": "xcacls [options]",
      "examples": [
        "xcacls",
        "xcacls --help"
      ]
    },
    {
      "name": "xcopy",
      "description": "Copy files and/or directory trees to another folder. XCOPY is similar to the COPY command except that it has additional switches to specify both the source and destination in detail.",
      "syntax": "C:\\> xcopy foo.txt bar.txt Does foo.txt specify a file name or directory name on the target (F = file, D = directory)?",
      "examples": [
        "xcopy",
        "xcopy --help"
      ]
    }
  ],
  "linux": [
    {
      "name": "alias",
      "description": "Create an alias, aliases allow a string to be substituted for a word when it is used as the first word of a simple command.",
      "syntax": "Syntax alias [-p] [name[=value] ...] unalias [-a] [name ... ] Key -p Print the current values -a Remove All aliases",
      "examples": [
        "alias [-p] [name[=value] ...]",
        "alias",
        "alias c='clear'"
      ]
    },
    {
      "name": "apt-get",
      "description": "Search for and install software packages (Debian/Ubuntu).",
      "syntax": "$ apt-get update",
      "examples": [
        "apt-get [-sqdyfmubV] [-o= config_string ] [-c= config_file ]",
        "apt-get [-sqdyfmubV] [-o= config_string ] [-c= config_file ]",
        "apt-get [-sqdyfmubV] [-o= config_string ] [-c= config_file ]"
      ]
    },
    {
      "name": "aptitude",
      "description": "Package manager (Debian/Ubuntu).",
      "syntax": "-f",
      "examples": [
        "aptitude [options...] autoclean",
        "aptitude [options...] clean",
        "aptitude [options...] forget-new"
      ]
    },
    {
      "name": "aspell",
      "description": "Spellcheck a file.",
      "syntax": "$ aspell check foo.txt",
      "examples": [
        "aspell check [options] filename"
      ]
    },
    {
      "name": "awk",
      "description": "Find and Replace text, database sort/validate/index",
      "syntax": "awk '$1 == \"Audrey\" {print $2}' numbers.txt",
      "examples": [
        "awk <options> 'Program' Input-File1 Input-File2 ...",
        "awk -f PROGRAM-FILE <options> Input-File1 Input-File2 ...",
        "awk '$1 == \"Audrey\" {print $2}' numbers.txt"
      ]
    },
    {
      "name": "bang",
      "description": "Re-run all or part of a previous command.",
      "syntax": "bang [options]",
      "examples": [
        "bang",
        "bang --help"
      ]
    },
    {
      "name": "base32",
      "description": "Base32 encode/decode data and print to standard output.",
      "syntax": "$ base32 sample.txt > encoded.txt",
      "examples": [
        "base32 [OPTION]... [FILE]"
      ]
    },
    {
      "name": "base64",
      "description": "Base64 encode/decode data and print to standard output.",
      "syntax": "$ base64 sample.txt > encoded.txt",
      "examples": [
        "base64 [OPTION]... [FILE]"
      ]
    },
    {
      "name": "basename",
      "description": "Strip directory and suffix from filenames",
      "syntax": "Syntax basename NAME [SUFFIX] basename OPTION Key --help Display help --version Output version information and exit",
      "examples": [
        "basename NAME [SUFFIX]",
        "basename OPTION",
        "basename ~"
      ]
    },
    {
      "name": "bc",
      "description": "An arbitrary precision calculator language.",
      "syntax": "bc",
      "examples": [
        "bc options file...",
        "bc",
        "bc"
      ]
    },
    {
      "name": "bg",
      "description": "Send a job to background",
      "syntax": "Syntax bg [job_id...]",
      "examples": [
        "bg [job_id...]",
        "bg"
      ]
    },
    {
      "name": "bind",
      "description": "Display current readline key and function bindings, bind a key sequence to a readline function or macro, or set a readline variable.",
      "syntax": "bind",
      "examples": [
        "bind [-m keymap] [-lpsvPSV]",
        "bind [-m keymap] [-q function] [-u function] [-r keyseq]",
        "bind [-m keymap] -f filename"
      ]
    },
    {
      "name": "break",
      "description": "Exit from a for, while, until, or select loop",
      "syntax": "SYNTAX break [n]",
      "examples": [
        "break [n]",
        "break # This line will break out of the loop"
      ]
    },
    {
      "name": "builtin",
      "description": "Run a shell builtin, passing it args, and return its exit status.",
      "syntax": "Syntax builtin [shell-builtin [args]]",
      "examples": [
        "builtin [shell-builtin [args]]",
        "builtin cd \"$@\" && xtitle \"$HOST: $PWD\""
      ]
    },
    {
      "name": "bzip2",
      "description": "Compress or decompress named file(s).",
      "syntax": "$ bzip2 mountetna.csv",
      "examples": [
        "bzip2 [ -cdfkqstvzVL123456789 ] [ filenames ... ]",
        "bzip2recover filename",
        "bzip2 mountetna.csv"
      ]
    },
    {
      "name": "cal",
      "description": "Display a calendar",
      "syntax": "cal [options]",
      "examples": [
        "cal [-mjy] [[month] year]"
      ]
    },
    {
      "name": "case",
      "description": "Conditionally perform a command, case will selectively execute the command-list corresponding to the first pattern that matches word.",
      "syntax": "case",
      "examples": [
        "case",
        "case word in [ [(] pattern [| pattern]...) command-list ;;]... esac",
        "case"
      ]
    },
    {
      "name": "cat",
      "description": "Concatenate and print (display) the content of files.",
      "syntax": "cat",
      "examples": [
        "$ cat myfile.txt"
      ]
    },
    {
      "name": "cd",
      "description": "Change Directory - change the current working directory to a specific Folder.",
      "syntax": "Syntax cd [Options] [Directory] Key -P Do not follow symbolic links -L Follow symbolic links (default)",
      "examples": [
        "$ cd /usr/local/sybase $ pwd /usr/local/sybase",
        "$ cd /var/log $ pwd /var/log",
        "$ cd - $ pwd /usr/local/sybase",
        "$ cd .. $ pwd /usr/local/",
        "$ cd"
      ]
    },
    {
      "name": "cfdisk",
      "description": "Curses based disk partition table manipulator for Linux",
      "syntax": "cfdisk [options]",
      "examples": [
        "cfdisk [ -agvz ] [ -c cylinders ] [ -h heads ]"
      ]
    },
    {
      "name": "chattr",
      "description": "Change file attributes on a Linux file system.",
      "syntax": "chattr",
      "examples": [
        "$ chattr +i /home/user/demo/some-file"
      ]
    },
    {
      "name": "chgrp",
      "description": "Change group ownership. 'chgrp' changes the group ownership of each given File to Group (which can be either a group name or a numeric group id) or to match the same group as an existing reference file.",
      "syntax": "$ chgrp OpsGroup /usr/database/demo.dbf",
      "examples": [
        "chgrp [Options]... {Group | --reference=File} File..."
      ]
    },
    {
      "name": "chkconfig",
      "description": "Update and query runlevel information for system services.",
      "syntax": "# chkconfig: 2345 20 80 # description: Saves and restores system entropy pool for \\ # higher quality random number generation.",
      "examples": [
        "chkconfig",
        "chkconfig --help"
      ]
    },
    {
      "name": "chmod",
      "description": "Change access permissions, change mode.",
      "syntax": "chmod +x filename.sh",
      "examples": [
        "chmod 400 file",
        "chmod 040 file",
        "chmod 004 file",
        "chmod 200 file",
        "chmod 020 file"
      ]
    },
    {
      "name": "chown",
      "description": "Change owner, change the user and/or group ownership of each given File to a new Owner. Chown can also change the ownership of a file to match the user/group of an existing reference file.",
      "syntax": "$ sudo chown Ursula /Users/Shared/MyFile.txt",
      "examples": [
        "chown [Options]... NewOwner File...",
        "chown [Options]... :Group File...",
        "chown [Options]... --reference=RFILE File..."
      ]
    },
    {
      "name": "chpasswd",
      "description": "Update passwords in batch mode.",
      "syntax": "/etc/pam.d/chpasswd",
      "examples": [
        "chpasswd [Options...]"
      ]
    },
    {
      "name": "chroot",
      "description": "Run a command with a different root directory 'chroot' runs a command with a specified root directory. On many systems, only the super-user can do this.",
      "syntax": "SYNTAX chroot NEWROOT [COMMAND [ARGS]...] chroot OPTION",
      "examples": [
        "chroot NEWROOT [COMMAND [ARGS]...]",
        "chroot OPTION"
      ]
    },
    {
      "name": "cksum",
      "description": "Print CRC checksum and byte counts. Computes a cyclic redundancy check (CRC) checksum for each given File, or standard input if none are given or for a File of -",
      "syntax": "Syntax cksum [Option]... [File]...",
      "examples": [
        "cksum [Option]... [File]..."
      ]
    },
    {
      "name": "cmp",
      "description": "Compare two files, and if they differ, tells the first byte and line number where they differ. You can use the 'cmp' command to show the offsets and line numbers where two files differ. 'cmp' can also show all the characters that differ between the two files, side by side.",
      "syntax": "$ cmp tnsnames.ora tnsnames.old",
      "examples": [
        "cmp options... FromFile [ToFile]"
      ]
    },
    {
      "name": "comm",
      "description": "Compare two sorted files line by line. Output the lines that are common, plus the lines that are unique.",
      "syntax": "$ comm -23 <(sort words.txt | uniq) <(sort countries.txt | uniq)",
      "examples": [
        "comm [options]... File1 File2"
      ]
    },
    {
      "name": "command",
      "description": "Run command with arguments ignoring any shell function named command.",
      "syntax": "SYNTAX command [-pVv] command [arguments ...] OPTIONS -P Use a default path -v Verbose -V More verbose",
      "examples": [
        "command [-pVv] command [arguments ...]"
      ]
    },
    {
      "name": "continue",
      "description": "Resume the next iteration of an enclosing for, while, until, or select loop.",
      "syntax": "SYNTAX continue [n]",
      "examples": [
        "continue [n]",
        "continue # Skip rest of this particular loop iteration."
      ]
    },
    {
      "name": "cp",
      "description": "Copy one or more files to another location. Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.",
      "syntax": "$ cp demofile demofile.bak",
      "examples": [
        "cp [options]... Source Dest",
        "cp [options]... Source... Directory"
      ]
    },
    {
      "name": "cpio",
      "description": "Copy files to and from archives. The following archive formats are supported: binary, old ASCII, new ASCII, crc, HPUX binary, HPUX old ASCII, old tar, and POSIX.1 tar. The tar format is provided for compatibility with the tar program. By default, cpio creates binary format archives, for compatibility with older cpio programs. When extracting from archives, cpio automatically recognizes which kind of archive it is reading and can read archives created on machines with a different byte-order.",
      "syntax": "cpio",
      "examples": [
        "cpio {-o|--create} [-0acvABLV] [-C bytes] [-H format] [-M message] [-O [[user@]host:]archive]",
        "cpio {-p|--pass-through} [-0adlmuvLV] [-R [user][:.][group]] [--null] [--reset-access-time]",
        "cpio"
      ]
    },
    {
      "name": "cron",
      "description": "daemon to execute scheduled commands",
      "syntax": "/var/spool/cron",
      "examples": [
        "cron [-n | -p | -s | -m<mailcommand>]",
        "cron -x [ext,sch,proc,pars,load,misc,test,bit]"
      ]
    },
    {
      "name": "crontab",
      "description": "Schedule a command to run at a later time.",
      "syntax": "/etc/anacrontab",
      "examples": [
        "crontab [ -u user ] file",
        "crontab [ -u user ] { -l | -r | -e }"
      ]
    },
    {
      "name": "csplit",
      "description": "Split a file into context-determined pieces.",
      "syntax": "Syntax csplit [options]... FILE PATTERN...",
      "examples": [
        "csplit [options]... FILE PATTERN..."
      ]
    },
    {
      "name": "curl",
      "description": "Transfer data from or to a server, using one of the protocols: HTTP, HTTPS, FTP, FTPS, SCP, SFTP, TFTP, DICT, TELNET, LDAP or FILE. (To transfer multiple files use wget or FTP.)",
      "syntax": "man curl",
      "examples": [
        "curl [options] [URL...]",
        "curl supports (gzip), and save  the  uncompressed  document.",
        "curl will report an error.(HTTP)"
      ]
    },
    {
      "name": "cut",
      "description": "Divide a file into several parts (columns) Writes to standard output selected parts of each line of each input file, or standard input if no files are given or for a file name of '-'.",
      "syntax": "Syntax cut [OPTION]... [FILE]...",
      "examples": [
        "cut [OPTION]... [FILE]..."
      ]
    },
    {
      "name": "date",
      "description": "Display or change the date.",
      "syntax": "Syntax date [option]... [+Format] date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][.ss]]",
      "examples": [
        "$ date --date='2 days ago'",
        "$ STAMPME=$HOME/demo_file_$(date +%Y%m%d-%H%M).txt $ mv $HOME/demo_file"
      ]
    },
    {
      "name": "dc",
      "description": "dc works with postfix notation; rather like many HP Calculators. Basic arithmetic uses the standard + - / * symbols but entered after the digits",
      "syntax": "dc [options]",
      "examples": [
        "dc options"
      ]
    },
    {
      "name": "dd",
      "description": "Data Duplicator, convert and copy a file, write disk headers, boot records, create a boot floppy. dd can make an exact clone of an (unmounted) disk, this will include all blank space so the output destination must be at least as large as the input.",
      "syntax": "dd",
      "examples": [
        "dd [Options]",
        "dd",
        "dd"
      ]
    },
    {
      "name": "ddrescue",
      "description": "Data recovery tool, save data from a crashed partition.",
      "syntax": "# apt-get install ddrescue",
      "examples": [
        "ddrescue [options] infile outfile [logfile]"
      ]
    },
    {
      "name": "declare",
      "description": "Declare variables and give them attributes.",
      "syntax": "declare",
      "examples": [
        "declare [-afFrxi] [-p] [name[=value]]",
        "declare",
        "declare"
      ]
    },
    {
      "name": "df",
      "description": "Disk Free - display free disk space. With no arguments, 'df' reports the space used and available on all currently mounted filesystems (of all types). Otherwise, 'df' reports on the filesystem containing each argument file.",
      "syntax": "df -h",
      "examples": [
        "df [option]... [file]...",
        "df -h",
        "df -h | grep 'File' -A1 | mail -s \"Disk space Report\" you@example.com"
      ]
    },
    {
      "name": "diff",
      "description": "Display the differences between two files, or each corresponding file in two directories. Each set of differences is called a \"diff\" or \"patch\". For files that are identical, diff normally produces no output; for binary (non-text) files, diff normally reports only that they are different.",
      "syntax": "Syntax diff [options] FILES",
      "examples": [
        "diff [options] FILES",
        "diff -I '^[0-9]'"
      ]
    },
    {
      "name": "diff3",
      "description": "Show differences among three files. When two people have made independent changes to a common original, 'diff3' can report the differences between the original and the two changed versions, and can produce a merged file that contains both persons' changes together with warnings about conflicts. The files to compare are MINE, OLDER, and YOURS. At most one of these three file names can be '-', which tells 'diff3' to read the standard input for that file.",
      "syntax": "diff3 [options]",
      "examples": [
        "diff3 [options] mine older yours"
      ]
    },
    {
      "name": "dig-queryopt",
      "description": "dig provides a number of query options which affect the way in which lookups are made and the results displayed. Some of these set or reset flag bits in the query header, some determine which sections of the answer get printed, and others determine the timeout and retry strategies.",
      "syntax": "dig-queryopt [options]",
      "examples": [
        "dig-queryopt",
        "dig-queryopt --help"
      ]
    },
    {
      "name": "dig",
      "description": "A flexible tool for interrogating DNS name servers. It performs DNS lookups and displays the answers that are returned from the name server(s) that were queried. Most DNS administrators use dig to troubleshoot DNS problems because of its flexibility, ease of use and clarity of output. Other lookup tools tend to have less functionality than dig.",
      "syntax": "${HOME}/.digrc",
      "examples": [
        "dig [@server] [-b address] [-c class] [-f filename] [-k filename]",
        "dig [global-queryopt...] [query...]",
        "dig ss64.com"
      ]
    },
    {
      "name": "dir",
      "description": "Briefly list directory contents",
      "syntax": "SYNTAX dir (also installed as 'd')",
      "examples": [
        "dir (also installed as 'd')"
      ]
    },
    {
      "name": "dircolors",
      "description": "Color setup for 'ls', outputs a sequence of shell commands to set up the terminal for color output from 'ls' (and 'dir', etc.).",
      "syntax": "Syntax eval 'dircolors [options]... [file]'",
      "examples": [
        "dircolors",
        "dircolors --help"
      ]
    },
    {
      "name": "dirname",
      "description": "Convert a full pathname to just a path.",
      "syntax": "Syntax dirname pathname",
      "examples": [
        "dirname pathname",
        "dirname"
      ]
    },
    {
      "name": "dirs",
      "description": "Display the list of currently remembered directories.",
      "syntax": "help dirs",
      "examples": [
        "dirs [+N | -N] [-clpv]"
      ]
    },
    {
      "name": "dmesg",
      "description": "Print kernel (and driver) messages, control the kernel ring buffer.",
      "syntax": "Syntax dmesg [ -c ] [ -n level ] [ -s bufsize ]",
      "examples": [
        "dmesg [ -c ] [ -n level ] [ -s bufsize ]"
      ]
    },
    {
      "name": "du",
      "description": "Disk Usage - report the amount of disk space used by the specified files and for each subdirectory.",
      "syntax": "Syntax du [options]... [file]...",
      "examples": [
        "du [options]... [file]...",
        "du -k * | sort -nr | cut -f2 | xargs -d '\\n' du -sh | head -n 10",
        "du -ch --max-depth=2 ~"
      ]
    },
    {
      "name": "echo",
      "description": "Display message on screen, writes each given STRING to standard output, with a space between each and a newline after the last one.",
      "syntax": "help echo",
      "examples": [
        "echo [options]... [String]...",
        "echo \"Hello World\"",
        "echo \"$DEMO\""
      ]
    },
    {
      "name": "egrep",
      "description": "Extended grep - Search file(s) for lines that match an extended expression.",
      "syntax": "Syntax egrep [ options ] 'PATTERN' files ... egrep is the same as 'grep -E' all other options are the same as grep",
      "examples": [
        "egrep [ options ] 'PATTERN' files ...",
        "egrep is the same as 'grep -E'"
      ]
    },
    {
      "name": "eject",
      "description": "Eject removable media",
      "syntax": "eject",
      "examples": [
        "eject -h",
        "eject [-vnrsfmqp] [name]",
        "eject [-vn] -d"
      ]
    },
    {
      "name": "enable",
      "description": "Enable and disable builtin shell commands.",
      "syntax": "enable [options]",
      "examples": [
        "enable [-n] [-p] [-f filename] [-ads] [name ...]"
      ]
    },
    {
      "name": "env",
      "description": "Display, set, or remove environment variables, Run a command in a modified environment.",
      "syntax": "env [options]",
      "examples": [
        "env [OPTION]... [NAME=VALUE]... [COMMAND [ARGS]...]",
        "environment.",
        "environment."
      ]
    },
    {
      "name": "eval",
      "description": "Evaluate several commands/arguments",
      "syntax": "Syntax eval [arguments]",
      "examples": [
        "eval [arguments]",
        "eval"
      ]
    },
    {
      "name": "exec",
      "description": "Execute a command",
      "syntax": "exec",
      "examples": [
        "exec [-cl] [-a name] [command [arguments]]",
        "exec"
      ]
    },
    {
      "name": "exit",
      "description": "Exit from a program, shell or log out of a Unix network.",
      "syntax": "Syntax exit [n] Key n Set the exit status to n (default=0)",
      "examples": [
        "exit [n]",
        "exit",
        "exit"
      ]
    },
    {
      "name": "expand",
      "description": "Convert tabs to spaces, write the contents of each given file, to standard output, with tab characters converted to the appropriate number of spaces. If no file is given, or for a file of '-', write to standard input.",
      "syntax": "Syntax expand [options]... [file]... Options -TAB1[,TAB2]... -t TAB1[,TAB2]... --tabs=TAB1[,TAB2]...",
      "examples": [
        "expand [options]... [file]..."
      ]
    },
    {
      "name": "export",
      "description": "Set an environment variable. The supplied names are marked for automatic export to the environment of subsequently executed commands.",
      "syntax": "export MYDEPT",
      "examples": [
        "export [-fn] [name[=value]]",
        "export -p",
        "export MYDEPT"
      ]
    },
    {
      "name": "expr",
      "description": "Evaluate expressions, evaluates an expression and writes the result on standard output. A blank line below separates increasing precedence groups.",
      "syntax": "expr [options]",
      "examples": [
        "expr expression",
        "expr option",
        "expression returns the part of STRING that matched the"
      ]
    },
    {
      "name": "factor",
      "description": "Print prime factors",
      "syntax": "Syntax factor [number]... factor option",
      "examples": [
        "factor [number]...",
        "factor option"
      ]
    },
    {
      "name": "false",
      "description": "Do nothing, returning a non-zero (false) exit status.",
      "syntax": "Syntax false",
      "examples": [
        "false"
      ]
    },
    {
      "name": "fdformat",
      "description": "Low-level format a floppy disk",
      "syntax": "Syntax fdformat [ -n ] device Options -n No verify. This will disable the verification that is performed after the format.",
      "examples": [
        "fdformat [ -n ] device"
      ]
    },
    {
      "name": "fdisk",
      "description": "Partition table manipulator for Linux",
      "syntax": "cfdisk, fdisk, sfdisk",
      "examples": [
        "fdisk [-u] device",
        "fdisk -l [-u] device ...",
        "fdisk -s partition ..."
      ]
    },
    {
      "name": "fg",
      "description": "Send job to foreground.",
      "syntax": "Syntax fg [job_id...]",
      "examples": [
        "fg [job_id...]",
        "fg",
        "fg %0"
      ]
    },
    {
      "name": "fgrep",
      "description": "Search file(s) for lines that match a fixed string",
      "syntax": "Syntax fgrep <options> ... fgrep is the same as 'grep -F' all other options are the same as grep",
      "examples": [
        "fgrep <options> ...",
        "fgrep is the same as 'grep -F'",
        "fgrep"
      ]
    },
    {
      "name": "file",
      "description": "Determine file type.",
      "syntax": "/usr/share/misc/magic.mgc Default compiled list of magic. /usr/share/misc/magic Directory containing default magic files.",
      "examples": [
        "file [-bchikLNnprsvz0] [--apple] [--mime-encoding] [--mime-type] [-e testname]",
        "file -C [-m magicfiles]",
        "file [--help]"
      ]
    },
    {
      "name": "find",
      "description": "Search a folder hierarchy for filename(s) that meet a desired criteria: Name, Size, File Type - see examples.",
      "syntax": "Syntax find [-H] [-L] [-P] [path...] [expression]",
      "examples": [
        "find [-H] [-L] [-P] [path...] [expression]",
        "find . -mmin +5 -mmin -10",
        "find . -wholename './sr*sc'"
      ]
    },
    {
      "name": "fmt",
      "description": "Reformat paragraph text, fill and join lines to produce output lines of a given width (75 characters by default).",
      "syntax": "fmt [options]",
      "examples": [
        "fmt [option(s)]... [file]..."
      ]
    },
    {
      "name": "fold",
      "description": "Wrap input lines to fit in specified width, writes each FILE ('-' means standard input), or standard input if none are given, to standard output, breaking long lines.",
      "syntax": "Syntax fold [options]... [FILE]...",
      "examples": [
        "fold [options]... [FILE]..."
      ]
    },
    {
      "name": "for",
      "description": "Loop command. The for loop executes a sequence of commands for each member in a list of items.",
      "syntax": "Syntax for name [in words ...]; do commands; done",
      "examples": [
        "for name [in words ...]; do commands; done",
        "for",
        "for (( expr1 ; expr2 ; expr3 )) ; do commands ; done"
      ]
    },
    {
      "name": "fsck",
      "description": "Filesystem consistency check and interactive repair. Journaling file systems avoid the need to run fsck.",
      "syntax": "fsck [options]",
      "examples": [
        "fsck [options] [filesystem] ..."
      ]
    },
    {
      "name": "ftp",
      "description": "File Transfer Protocol",
      "syntax": "ftp ftp://anonymous:@speedtest.tele2.net",
      "examples": [
        "ftp [-options] [-s:filename] [-w:buffer] [host]",
        "ftp ftp://anonymous:@speedtest.tele2.net"
      ]
    },
    {
      "name": "function",
      "description": "Shell functions are a way to group commands for later execution using a single name for the group. They are executed just like a regular command. When the name of a shell function is used as a simple command name, the list of commands associated with that function name will be executed.",
      "syntax": "[ function ] name () { command-list; }",
      "examples": [
        "function",
        "function",
        "function"
      ]
    },
    {
      "name": "fuser",
      "description": "Identify processes using files or sockets, optionally: Kill the process that is accessing the file.",
      "syntax": "$ fuser -km /home",
      "examples": [
        "fuser [-a|-s|-c] [-4|-6] [-n space ] [-k [-i] [-signal ] ] [-muvf] name",
        "fuser -l",
        "fuser -V"
      ]
    },
    {
      "name": "getopts",
      "description": "Each time it is invoked, getopts places the next option in the shell variable name, initializing name if it does not exist, and the index of the next argument to be processed into the variable OPTIND. OPTIND is initialized to 1 each time the shell or a shell script is invoked.",
      "syntax": "getopts [options]",
      "examples": [
        "getopts optstring name [args]"
      ]
    },
    {
      "name": "grep-regex",
      "description": "grep searches input files for lines that match a given pattern.",
      "syntax": "Here is an example shell command that invokes GNU 'grep': grep -i 'hello.*world' menu.h main.c",
      "examples": [
        "grep-regex",
        "grep-regex --help"
      ]
    },
    {
      "name": "grep",
      "description": "Search file(s) for specific text.",
      "syntax": "grep",
      "examples": [
        "grep [options] PATTERN [FILE...]",
        "grep [options] [-e PATTERN | -f FILE] [FILE...]",
        "grep"
      ]
    },
    {
      "name": "groupadd",
      "description": "The following configuration variables in /etc/login.defs change the behavior of this tool: GID_MAX (number), GID_MIN (number) Range of group IDs used for the creation of regular groups by useradd, groupadd, or newusers.",
      "syntax": "Syntax groupadd [options] group",
      "examples": [
        "groupadd [options] group"
      ]
    },
    {
      "name": "groupdel",
      "description": "Delete a user security group.",
      "syntax": "Syntax groupdel group",
      "examples": [
        "groupdel group"
      ]
    },
    {
      "name": "groupmod",
      "description": "Modify a user security group.",
      "syntax": "Syntax groupmod [options] GROUP",
      "examples": [
        "groupmod [options] GROUP"
      ]
    },
    {
      "name": "groups",
      "description": "Print group names a user is in.",
      "syntax": "Syntax groups [username]...",
      "examples": [
        "groups [username]..."
      ]
    },
    {
      "name": "gzip",
      "description": "Compress or decompress named file(s)",
      "syntax": "gzip [options]",
      "examples": [
        "gzip options ..."
      ]
    },
    {
      "name": "hash",
      "description": "Remember the full pathnames of commands specified as name arguments, so they need not be searched for on subsequent invocations.",
      "syntax": "Syntax hash [-r] [-p filename] [name] Options -r Reset, causes the shell to forget all remembered locations. -p Use filename as the location of name (don't search $PATH).",
      "examples": [
        "hash [-r] [-p filename] [name]"
      ]
    },
    {
      "name": "head",
      "description": "Output the first part of files, prints the first part (10 lines by default) of each file.",
      "syntax": "Syntax head [options]... [file]... Options: -NUMBER Return the first NUMBER of lines from the file. (must be the first option specified) -CountOptions",
      "examples": [
        "head [options]... [file]...",
        "head -85 file,txt",
        "head -50 file.txt | tail -10"
      ]
    },
    {
      "name": "history",
      "description": "Pressing the UP arrow will return to previous commands. To return to a previously entered command, type ctrl-r and then begin typing the command. This will finish the command for you as you type. If you can remember to use ctrl-r, it will become invaluable for repeating longer commands. To find a specific command among many previous commands; pipe history through grep: history|grep -i first few letters of command",
      "syntax": "help history",
      "examples": [
        "history",
        "history [n]",
        "history -c"
      ]
    },
    {
      "name": "hostname",
      "description": "Print or set system name",
      "syntax": "Syntax hostname [name]",
      "examples": [
        "hostname [name]"
      ]
    },
    {
      "name": "htop",
      "description": "Interactive Process viewer, find the CPU-intensive programs currently running.",
      "syntax": "$ htop -s USER --delay=50",
      "examples": [
        "$ htop -s USER --delay=50"
      ]
    },
    {
      "name": "iconv",
      "description": "Convert encoding of a file from one character set encoding to another.",
      "syntax": "$ iconv -f ISO-8859-1 -t UTF-8 < input.txt > output.txt",
      "examples": [
        "iconv [Option...] -f encoding -t encoding inputfile",
        "iconv -l"
      ]
    },
    {
      "name": "id",
      "description": "Print real and effective user id (uid) and group id (gid), prints identity information about the given user, or if no user is specified the current process.",
      "syntax": "Syntax id [options]... [username]",
      "examples": [
        "id [options]... [username]"
      ]
    },
    {
      "name": "if",
      "description": "Conditionally perform a command.",
      "syntax": "if",
      "examples": [
        "if test-commands; then",
        "if test-commands; then consequent-commands; fi",
        "if"
      ]
    },
    {
      "name": "ifconfig",
      "description": "Interface configurator - display your ip address, network interfaces, transferred and received data information, configure a network interface. On most modern distributions ifconfig has been depracated, use ip instead.",
      "syntax": "ifconfig",
      "examples": [
        "ifconfig",
        "ifconfig [interface]",
        "ifconfig interface [aftype] options | address ..."
      ]
    },
    {
      "name": "ifup",
      "description": "Bring a network interface up or down",
      "syntax": "ifup -a",
      "examples": [
        "ifup [options] -a | IFACE...",
        "ifup -a",
        "ifup eth0"
      ]
    },
    {
      "name": "import",
      "description": "Capture some or all of an X server screen and save the image to file.",
      "syntax": "Syntax import [ options ... ] [ file ]",
      "examples": [
        "import [ options ... ] [ file ]"
      ]
    },
    {
      "name": "index-2",
      "description": "Commands marked • are bash built-ins Many commands particularly the Core Utils are also available under alternate shells (C shell, Korn shell etc).",
      "syntax": "index-2 [options]",
      "examples": [
        "index-2",
        "index-2 --help"
      ]
    },
    {
      "name": "install",
      "description": "Copy files and set attributes, copies files while setting their permission modes and, if possible, their owner and group.",
      "syntax": "Syntax install [options]... SOURCE DEST install [options]... SOURCE... DIRECTORY install -d [options]... DIRECTORY...",
      "examples": [
        "install [options]... SOURCE DEST",
        "install [options]... SOURCE... DIRECTORY",
        "install -d [options]... DIRECTORY..."
      ]
    },
    {
      "name": "iostat",
      "description": "Report Central Processing Unit (CPU) statistics and i/o statistics for devices, partitions and network filesystems (NFS).",
      "syntax": "$ iostat",
      "examples": [
        "iostat [option(s)] [ device [...] | ALL ]"
      ]
    },
    {
      "name": "ip-address-show",
      "description": "Look at protocol addresses or flush protocol addresses. address can be abbreviated to a or addr",
      "syntax": "ip-address-show [options]",
      "examples": [
        "ip-address-show",
        "ip-address-show --help"
      ]
    },
    {
      "name": "ip-address",
      "description": "The ip address add and del commands, add new addresses or delete old ones. address can be abbreviated to a or addr ip address add - Add new protocol address. ip address delete - Delete protocol address The device name is a required argument. The rest are optional. If no arguments are given, the first address is added/deleted.",
      "syntax": "ip-address [options]",
      "examples": [
        "ip-address",
        "ip-address --help"
      ]
    },
    {
      "name": "ip-addrlabel",
      "description": "IPv6 address label is used for address selection described in RFC 3484. Precedence is managed by userspace, and only label is stored in kernel. addrlabel can be abbreviated to addrl",
      "syntax": "ip-addrlabel [options]",
      "examples": [
        "ip-addrlabel",
        "ip-addrlabel --help"
      ]
    },
    {
      "name": "ip-link-set",
      "description": "Change device attributes. Link is a network device and the corresponding commands display and change the state of devices. link can be abbreviated to l",
      "syntax": "ip-link-set [options]",
      "examples": [
        "ip-link-set",
        "ip-link-set --help"
      ]
    },
    {
      "name": "ip-maddress",
      "description": "Multicast addresses management. maddress can be abbreviated to m or maddr",
      "syntax": "ip-maddress [options]",
      "examples": [
        "ip-maddress",
        "ip-maddress --help"
      ]
    },
    {
      "name": "ip-monitor",
      "description": "State monitoring, monitor the state of devices, addresses and routes continuously.",
      "syntax": "ip-monitor [options]",
      "examples": [
        "ip-monitor",
        "ip-monitor --help"
      ]
    },
    {
      "name": "ip-mroute",
      "description": "Multicast routing cache management - list mroute cache entries. mroute can be abbreviated to mr",
      "syntax": "ip-mroute [options]",
      "examples": [
        "ip-mroute",
        "ip-mroute --help"
      ]
    },
    {
      "name": "ip-neighbour",
      "description": "Neighbour/arp tables management. neighbour can be abbreviated to n or neigh",
      "syntax": "ip-neighbour [options]",
      "examples": [
        "ip-neighbour",
        "ip-neighbour --help"
      ]
    },
    {
      "name": "ip-route",
      "description": "Manipulate route entries in the kernel routing tables keep information about paths to other networked nodes. route can be abbreviated to r",
      "syntax": "ip-route [options]",
      "examples": [
        "ip-route",
        "ip-route --help"
      ]
    },
    {
      "name": "ip-rule",
      "description": "Routing policy database management. rule can be abbreviated to ru",
      "syntax": "ip-rule [options]",
      "examples": [
        "ip-rule",
        "ip-rule --help"
      ]
    },
    {
      "name": "ip-tunnel",
      "description": "Tunnel configuration. tunnel can be abbreviated to t",
      "syntax": "ip-tunnel [options]",
      "examples": [
        "ip-tunnel",
        "ip-tunnel --help"
      ]
    },
    {
      "name": "ip-xfrm",
      "description": "Setting xfrm. xfrm is an IP framework, which can transform format of the datagrams, i.e. encrypt the packets with some algorithm. xfrm policy and xfrm state are associated through templates TMPL_LIST. This framework is used as a part of IPsec protocol.",
      "syntax": "ip-xfrm [options]",
      "examples": [
        "ip-xfrm",
        "ip-xfrm --help"
      ]
    },
    {
      "name": "ip",
      "description": "Show / manipulate routing, devices, policy routing and tunnels.",
      "syntax": "ip a help",
      "examples": [
        "ip [ OPTIONS ] OBJECT { COMMAND | help }",
        "ip link set DEVICE { up | down | arp { on | off } |",
        "ip link show [ DEVICE ]"
      ]
    },
    {
      "name": "jobs",
      "description": "Print currently running jobs and their status.",
      "syntax": "help jobs",
      "examples": [
        "$ jobs"
      ]
    },
    {
      "name": "join",
      "description": "Join lines on a common field, writes to standard output a line for each pair of input lines that have identical join fields.",
      "syntax": "SYNTAX join [Options]... File1 File2",
      "examples": [
        "join [Options]... File1 File2"
      ]
    },
    {
      "name": "kill",
      "description": "Kill a process by specifying its PID, either via a signal or forced termination.",
      "syntax": "help kill",
      "examples": [
        "kill [-s sigspec] [-n signum] [-sigspec] jobspec or pid",
        "kill -l [exit_status]",
        "kill -l [sigspec]"
      ]
    },
    {
      "name": "killall",
      "description": "kill processes by name.",
      "syntax": "killall name",
      "examples": [
        "killall [option(s)] [--] name ...",
        "killall -l",
        "killall -V,--version"
      ]
    },
    {
      "name": "less",
      "description": "Page through text one screenful at a time, Search through output, Edit the command line. less provides more emulation plus extensive enhancements such as allowing backward paging through a file as well as forward movement.",
      "syntax": "less",
      "examples": [
        "less",
        "less [options]",
        "less"
      ]
    },
    {
      "name": "let",
      "description": "Perform arithmetic on shell variables.",
      "syntax": "Syntax let expression [expression]",
      "examples": [
        "let expression [expression]",
        "let",
        "let"
      ]
    },
    {
      "name": "limits.conf",
      "description": "/etc/security/limits.conf",
      "syntax": "/etc/security/limits.conf",
      "examples": [
        "Example lines which might be specified in /etc/security/limits.conf."
      ]
    },
    {
      "name": "link",
      "description": "Create a link to a file",
      "syntax": "Syntax link FILE1 FILE2 link OPTION",
      "examples": [
        "link FILE1 FILE2",
        "link OPTION"
      ]
    },
    {
      "name": "ln",
      "description": "Make links between files, by default, it makes hard links; with the -s option, it makes symbolic (or \"soft\") links.",
      "syntax": "ln",
      "examples": [
        "ln [OPTION]... [-T] OriginalSourceFile NewLinkFile (1st form)",
        "ln [OPTION]... OriginalSourceFile                  (2nd form)",
        "ln [OPTION]... OriginalSourceFile... DIRECTORY     (3rd form)"
      ]
    },
    {
      "name": "local",
      "description": "Create variables",
      "syntax": "SYNTAX local [option] name[=value]",
      "examples": [
        "local [option] name[=value]",
        "local",
        "local"
      ]
    },
    {
      "name": "locate",
      "description": "On modern hardware it is often faster to create and search an uncompressed index file of all filenames than to use the compressed locate database, source: Julia Evans [x]",
      "syntax": "locate [options]",
      "examples": [
        "locate [options] pattern"
      ]
    },
    {
      "name": "logname",
      "description": "Print current login name",
      "syntax": "SYNTAX logname",
      "examples": [
        "logname"
      ]
    },
    {
      "name": "logout",
      "description": "A 'sub-shell' is a shell created after login, either by loading a new shell or opening a window with a graphics interface. A sub-shell usually will not accept the command 'logout' to terminate, you must use 'exit' or ^D. When you terminate a sub-shell, you are returned to the process or shell that created it.",
      "syntax": "Syntax logout [n]",
      "examples": [
        "logout [n]"
      ]
    },
    {
      "name": "look",
      "description": "Display any lines in file which contain string as a prefix.",
      "syntax": "look [options]",
      "examples": [
        "look [-df] [-t termchar] string [file]"
      ]
    },
    {
      "name": "lpc",
      "description": "line printer control program",
      "syntax": "lpc [options]",
      "examples": [
        "lpc [command [argument ...]]",
        "lpc can be used to:"
      ]
    },
    {
      "name": "lpr",
      "description": "off line print - sends a print job to the default system queue.",
      "syntax": "lpr [options]",
      "examples": [
        "lpr [-Pprinter] [-#num] [-C class] [-J job] [-T title] [-U user] [-i [numcols]]",
        "lpr -#3 foo.c bar.c more.c",
        "lpr -C EECS foo.c"
      ]
    },
    {
      "name": "lprm",
      "description": "Remove jobs from the line printer spooling queue",
      "syntax": "lprm [options]",
      "examples": [
        "lprm [-Pprinter] [-] [job# ...] [user ...]",
        "lprm announces the names of any files it removes and is silent if there",
        "lprm will kill off an active daemon, if necessary, before removing any"
      ]
    },
    {
      "name": "ls",
      "description": "List information about files.",
      "syntax": "$ ls ~",
      "examples": [
        "ls [Options]... [File]...",
        "ls"
      ]
    },
    {
      "name": "lsattr",
      "description": "List file attributes on a Linux second extended file system.",
      "syntax": "lsattr [options]",
      "examples": [
        "lsattr [ -RVadv ] [ files... ]"
      ]
    },
    {
      "name": "lsblk",
      "description": "0 Success 1 Failure 32 Not found all specified devices 64 Some specified devices found, some not found.",
      "syntax": "lsblk --help",
      "examples": [
        "lsblk [options] [device...]",
        "lsblk --help",
        "lsblk"
      ]
    },
    {
      "name": "lsenv",
      "description": "The following environment variables affect the execution of ls (and ls-F):",
      "syntax": "lsenv [options]",
      "examples": [
        "lsenv",
        "lsenv --help"
      ]
    },
    {
      "name": "lsof",
      "description": "These two equivalent options select a usage (help) output list. Lsof displays a shortened form of this output when it detects an error in the options supplied to it, after it has displayed messages explaining each error. (Escape the '?' character as your shell requires.)",
      "syntax": "lsof -b",
      "examples": [
        "lsof [ -?abChlnNOPRstUvVX ] [ -A A ] [ -c c ] [ +c c ] [ +|-d d ]",
        "lsof -b"
      ]
    },
    {
      "name": "lspci",
      "description": "List all PCI devices.",
      "syntax": "lspci [options]",
      "examples": [
        "lspci [options]"
      ]
    },
    {
      "name": "m4",
      "description": "macro processor",
      "syntax": "SYNTAX m4 [Options...] [Macro-Definitions...] [Input-File...]",
      "examples": [
        "m4 [Options...] [Macro-Definitions...] [Input-File...]"
      ]
    },
    {
      "name": "man",
      "description": "Format and display help pages.",
      "syntax": "man ./foo.5",
      "examples": [
        "man [-acdfFhkKtwW] [--path] [-m system] [-p string] [-C config_file]",
        "manual page of /usr/bin/groff -Tps -mandoc for ways to pick an alternate format.",
        "man ./foo.5"
      ]
    },
    {
      "name": "mapfile",
      "description": "Read lines from the standard input into the indexed array variable array, or from file descriptor fd if the -u option is supplied. The variable MAPFILE is the default array. The command name readarray may be used as an alias for mapfile, with no difference in operation.",
      "syntax": "mapfile",
      "examples": [
        "mapfile",
        "mapfile [-n count] [-O origin] [-s count] [-t] [-u fd] [-C callback] [-c quantum] [array]",
        "mapfile -t myarray < <(./inner.sh)"
      ]
    },
    {
      "name": "mbadblocks",
      "description": "Check and repair floppy disk problems, test an MS-DOS disk, and mark bad blocks in the FAT",
      "syntax": "Syntax mbadblocks drive:",
      "examples": [
        "mbadblocks drive:"
      ]
    },
    {
      "name": "mkdir",
      "description": "Create new folder(s), if they do not already exist.",
      "syntax": "mkdir [options]",
      "examples": [
        "mkdir [Options] folder...",
        "mkdir \"Name with spaces\""
      ]
    },
    {
      "name": "mkfifo",
      "description": "Make FIFOs (named pipes) with the specified names.",
      "syntax": "mkfifo [options]",
      "examples": [
        "mkfifo [options] NAME..."
      ]
    },
    {
      "name": "mkfile",
      "description": "Create a file.",
      "syntax": "Example mkfile -n ~/newfile.txt",
      "examples": [
        "mkfile [ -nv ] size[b|k|m|g] filename ...",
        "mkfile -n ~/newfile.txt"
      ]
    },
    {
      "name": "mknod",
      "description": "Create a FIFO, character special file, or block special file with the specified name.",
      "syntax": "mknod [options]",
      "examples": [
        "mknod [options]... NAME Type [Major Minor]"
      ]
    },
    {
      "name": "mktemp",
      "description": "Make a temporary file.",
      "syntax": "$ SCRATCH=$(mktemp -t tmp.XXXXXXXXXX)",
      "examples": [
        "mktemp [-d] [-q] [-t prefix] [-u] template ...",
        "mktemp [-d] [-q] [-u] -t prefix"
      ]
    },
    {
      "name": "mmv",
      "description": "Mass Move and rename - Move, copy, append or link Multiple files using wildcard patterns.",
      "syntax": "mmv a b c d",
      "examples": [
        "mmv [Source_Option] [-h] [-d|p] [-g|t] [-v|n] [--] [from to]",
        "mmv            -x (Move except cross device)",
        "mmv"
      ]
    },
    {
      "name": "more",
      "description": "Display output one screen at a time, less provides more emulation and extensive enhancements.",
      "syntax": "more",
      "examples": [
        "more [-dlfpcsu] [-num] [+/ pattern] [+ linenum] [file ...]",
        "more"
      ]
    },
    {
      "name": "most",
      "description": "Browse or page through a text file.",
      "syntax": "When most starts up, it tries to read a system confiuration file and then a personal configuration file. These files can be used to specify keybindings and colors. To bind a key to a particular function use the syntax: setkey function-name key-sequence The setkey command requires two arguments. The function-name argument specifies the function that is to be executed as a response to the keys specified by the key-sequence argument are pressed. For example, setkey \"up\" \"^P\" indicates that when Ctr",
      "examples": [
        "most [-1bCckMstvwz] [+lineno] [+c] [+d] [+s] [+/string] [filename...]",
        "most",
        "most"
      ]
    },
    {
      "name": "mount",
      "description": "mount a file system All files accessible in a Unix system are arranged in one big tree, the file hierarchy, rooted at /. These files can be spread out over several devices. The mount command serves to attach the file system found on some device to the big file tree.",
      "syntax": "SYNTAX mount -a [-fFnrsvw] [-t vfstype] mount [-fnrsvw] [-o options [,...]] device | dir mount [-fnrsvw] [-t vfstype] [-o options] device dir mount [-hV]",
      "examples": [
        "mount -a [-fFnrsvw] [-t vfstype]",
        "mount [-fnrsvw] [-o options [,...]] device | dir",
        "mount [-fnrsvw] [-t vfstype] [-o options] device dir"
      ]
    },
    {
      "name": "mtools",
      "description": "Mtools is a public domain collection of tools to allow Unix systems to manipulate MS-DOS files: read, write, and move around files on an MS-DOS filesystem Mtools are typically used to manipulate FAT formatted floppy disks. Each program attempts to emulate the MS-DOS equivalent command. Mtools is sufficient to give access to MS-DOS filesystems. For instance, commands such as mdir a: work on the a: floppy without any preliminary mounting or initialization (assuming the default '/etc/mtools.conf' w",
      "syntax": "mtools [options]",
      "examples": [
        "mtoolstest        tests and displays the configuration"
      ]
    },
    {
      "name": "mtr",
      "description": "Network diagnostics (traceroute/ping.)",
      "syntax": "$ mtr 192.168.12.34 $ mtr google.com",
      "examples": [
        "mtr [-hvrctglspni46] [--help] [--version] [--report] [--report-cycles COUNT]"
      ]
    },
    {
      "name": "mv",
      "description": "Move or rename files or directories.",
      "syntax": "SYNTAX mv [options]... Source Dest mv [options]... Source... Directory",
      "examples": [
        "mv apple orange.doc",
        "mv orange.doc ~/Documents/orange.doc",
        "for f in *.txt; do mv ./\"$f\" \"${f%txt}htm\"; done",
        "for f in *copy.html; do mv \"$f\" \"${f/copy.txt/.txt}\";done"
      ]
    },
    {
      "name": "nc",
      "description": "Read and write data across networks - arbitrary TCP and UDP connections and listens.",
      "syntax": "# On a computer A with IP 10.10.10.10 we listen on port 64 $ nc -l -p 64",
      "examples": [
        "nc [-46AcCdDhklnrStuUvz] [-b boundif] [-i interval] [-p source_port]",
        "nc host.example.com -p 64"
      ]
    },
    {
      "name": "netstat",
      "description": "Print network connections, routing tables, interface statistics, masquerade connections, and multicast memberships.",
      "syntax": "sudo netstat tunapl",
      "examples": [
        "netstat [address_family_options] [--tcp|-t] [--udp|-u] [--raw|-w] [--listening|-l]",
        "netstat {--route|-r} [address_family_options] [--extend|-e[--extend|-e]]",
        "netstat {--interfaces|-I|-i} [iface] [--all|-a] [--extend|-e]"
      ]
    },
    {
      "name": "nft",
      "description": "Administration tool of the nftables framework for Network Address Translation (NAT), packet filtering and classification. Set up, maintain and inspect packet filtering and classification rules in the Linux kernel, in the nftables framework.",
      "syntax": "nft export json",
      "examples": [
        "nft [ -nNscae ] [ -I directory] [ -f filename | -i | cmd...]",
        "nft -h",
        "nft -v"
      ]
    },
    {
      "name": "nice",
      "description": "Run a command with modified scheduling priority, print or modify the scheduling priority of a job.",
      "syntax": "SYNTAX nice [Option]... [Command [Arg]...] OPTION -n MyADJUSTMENT -MyADJUSTMENT --adjustment=MyADJUSTMENT",
      "examples": [
        "nice [Option]... [Command [Arg]...]"
      ]
    },
    {
      "name": "nl",
      "description": "Number lines and write files, writes each FILE to standard output, with line numbers added to some or all of the lines. If no input file (or '-' ) is given nl will read from standard input.",
      "syntax": "nl [options]",
      "examples": [
        "nl [options]... [File]..."
      ]
    },
    {
      "name": "nohup",
      "description": "No Hang Up. Run a command immune to hangups, runs the given command with hangup signals ignored, so that the command can continue running in the background after you log out.",
      "syntax": "SYNTAX nohup Command [Arg]...",
      "examples": [
        "nohup Command [Arg]...",
        "nohup.out",
        "nohup.out"
      ]
    },
    {
      "name": "notify-send",
      "description": "A program to send desktop notifications, inform the user about an event or display some form of information without getting in the user’s way.",
      "syntax": "$ notify-send \"Hello World\"",
      "examples": [
        "notify-send [OPTIONS] [body]"
      ]
    },
    {
      "name": "nslookup",
      "description": "Query Internet name servers",
      "syntax": "nslookup [options]",
      "examples": [
        "nslookup",
        "nslookup host-to-find",
        "nslookup server"
      ]
    },
    {
      "name": "op",
      "description": "Operator access. A flexible means for system administrators to grant trusted users access to certain root operations without having to give them full superuser privileges.",
      "syntax": "Syntax op mnemonic [arg] Key -V Show version number. -l List available commands. Note that this will only display commands you are permitted to run.",
      "examples": [
        "op mnemonic [arg]"
      ]
    },
    {
      "name": "open",
      "description": "Open a file in its default application, using virtual terminal (VT).",
      "syntax": "Syntax open Files... Options: files The filename(s) to open, wildcards are accepted.",
      "examples": [
        "open Files...",
        "open *.txt"
      ]
    },
    {
      "name": "passwd",
      "description": "Modify a user password.",
      "syntax": "/etc/passwd",
      "examples": [
        "passwd [Options...] [LOGIN]"
      ]
    },
    {
      "name": "paste",
      "description": "Merge lines of files, write to standard output lines consisting of sequentially corresponding lines of each given file, separated by a TAB character.",
      "syntax": "$ paste file1.txt file2.txt > result.txt",
      "examples": [
        "paste [options]... [file]...",
        "paste -s -d '\\t\\n' myfile"
      ]
    },
    {
      "name": "perf",
      "description": "Performance analysis tools for Linux .",
      "syntax": "perf record",
      "examples": [
        "perf [--version] [--help] COMMAND [ARGS]",
        "perf record"
      ]
    },
    {
      "name": "ping",
      "description": "Test a network connection.",
      "syntax": "$ ping -i 5 example.com",
      "examples": [
        "ping",
        "ping --help"
      ]
    },
    {
      "name": "pkill",
      "description": "Kill processes by a full or partial name.",
      "syntax": "pkill",
      "examples": [
        "pkill [-signal] [-fvx] [-n|-o] [-P ppid,...] [-g pgrp,...]",
        "pkill"
      ]
    },
    {
      "name": "popd",
      "description": "Remove the top entry from the directory stack, and cd to the new top directory.",
      "syntax": "help popd",
      "examples": [
        "popd [+N | -N] [-n]"
      ]
    },
    {
      "name": "pr",
      "description": "Prepare files for printing, printing and pagination filter for text files. When multiple input files are specified, each is read, formatted, and written to standard output.",
      "syntax": "pr [options]",
      "examples": [
        "pr [options] [file ...]"
      ]
    },
    {
      "name": "printenv",
      "description": "List the names and values of all environment variables or, with VARIABLE, the value of the environment variable name.",
      "syntax": "printenv [options]",
      "examples": [
        "printenv [OPTION]... [VARIABLE]..."
      ]
    },
    {
      "name": "printf",
      "description": "Format and print data. Write the formatted arguments to the standard output under the control of the format.",
      "syntax": "printf [options]",
      "examples": [
        "printf format [argument]...",
        "printf --help",
        "printf --version"
      ]
    },
    {
      "name": "ps",
      "description": "Process status, information about processes running in memory. If you want a repetitive update of this status, use top.",
      "syntax": "-c Different scheduler info for -l option. -F Extra Full listing. See the -f option, which -F implies. -f Full-format listing. This can be combined with many other UNIX-style options to add additional columns. It also causes the command arguments to be printed. When used with -L, the NLWP (number of threads) and LWP (thread ID) columns will be added. See the c option, the format keyword args, and the format keyword comm. --format format user-defined format. Identical to -o and o. -j Jobs format.",
      "examples": [
        "ps option(s)",
        "ps jaxkuid,-ppid,+pid",
        "ps axk comm o comm,args"
      ]
    },
    {
      "name": "ps_keywords",
      "description": "Here are the different keywords that may be used to control the output format (e.g., with option -o) or to sort the selected processes with the GNU-style --sort option. For example: ps -eo pid,user,args --sort user This version of ps tries to recognize most of the keywords used in other implementations of ps. The following user-defined format specifiers may contain spaces: args, cmd, comm, command, fname, ucmd, ucomm, lstart, bsdstart, start. Some keywords may not be available for sorting.",
      "syntax": "ps_keywords [options]",
      "examples": [
        "ps_keywords",
        "ps_keywords --help"
      ]
    },
    {
      "name": "pushd",
      "description": "Save and then change the current directory. With no arguments, pushd exchanges the top two directories.",
      "syntax": "pushd",
      "examples": [
        "pushd",
        "pushd [dir | +N | -N] [-n]"
      ]
    },
    {
      "name": "pv",
      "description": "Monitor the progress of data through a pipe.",
      "syntax": "Syntax pv [OPTION] [FILE]... pv [-h|-V] Options",
      "examples": [
        "pv [OPTION] [FILE]...",
        "pv [-h|-V]",
        "pv file | nc -w 1 somewhere.com 3000"
      ]
    },
    {
      "name": "pwd",
      "description": "Print Working Directory (shell builtin)",
      "syntax": "Syntax pwd [-LP] Options -P : The pathname printed will not contain symbolic links. -L : The pathname printed can contain symbolic links",
      "examples": [
        "pwd [-LP]",
        "pwd"
      ]
    },
    {
      "name": "quota",
      "description": "Display disk usage and limits, by default only the user quotas are printed.",
      "syntax": "quota [options]",
      "examples": [
        "quota [ -guv | q ]",
        "quota [ -uv | q ] user",
        "quota [ -gv | q ] group"
      ]
    },
    {
      "name": "quotacheck",
      "description": "Scan a file system for disk usage",
      "syntax": "Syntax quotacheck [-g] [-u] [-v] -a quotacheck [-g] [-u] [-v] filesys ...",
      "examples": [
        "quotacheck [-g] [-u] [-v] -a",
        "quotacheck [-g] [-u] [-v] filesys ..."
      ]
    },
    {
      "name": "ram",
      "description": "ram disk device",
      "syntax": "mknod -m 660 /dev/ram b 1 1 chown root:disk /dev/ram",
      "examples": [
        "ram",
        "ram --help"
      ]
    },
    {
      "name": "rar",
      "description": "Archive files with compression.",
      "syntax": "Syntax rar command [-switch_1 -switch_N] archive [files...]",
      "examples": [
        "rar command [-switch_1 -switch_N] archive [files...]",
        "rar.txt.",
        "rar uses -m3 method (Normal compression)."
      ]
    },
    {
      "name": "rcp",
      "description": "Remote Copy - move files between machines. Each file or directory is either a remote filename of the form rname@rhost:path or a local filename.",
      "syntax": "rcp [options]",
      "examples": [
        "rcp [options] file1 file2",
        "rcp [options] file ... directory"
      ]
    },
    {
      "name": "read",
      "description": "Read one line from the standard input, (or from a file) and assign the word(s) to variable name(s).",
      "syntax": "read",
      "examples": [
        "read [-ers] [-a aname]  [-d delim] [-i text] [-n nchars]",
        "read returns after reading exactly nchars characters rather than waiting for a complete line",
        "read"
      ]
    },
    {
      "name": "readonly",
      "description": "The given names are marked readonly and the values of these names can not be changed by subsequent assignment.",
      "syntax": "readonly [options]",
      "examples": [
        "readonly [-aApf] [name] ..."
      ]
    },
    {
      "name": "rem",
      "description": "A comment or remark is indicated by starting the line with the # character",
      "syntax": "# This is a description # Another remark command # Another remark",
      "examples": [
        "rem",
        "rem --help"
      ]
    },
    {
      "name": "rename",
      "description": "Rename files.",
      "syntax": "Syntax rename from to file...",
      "examples": [
        "rename from to file..."
      ]
    },
    {
      "name": "return",
      "description": "Cause a shell function to exit with the return value n.",
      "syntax": "Syntax return [n] Options n Return value i.e. an errorlevel",
      "examples": [
        "return [n]"
      ]
    },
    {
      "name": "rev",
      "description": "Reverse lines of a file.",
      "syntax": "Syntax: rev [file]",
      "examples": [
        "rev [file]"
      ]
    },
    {
      "name": "rm",
      "description": "Remove files (delete/unlink)",
      "syntax": "rm -- \"$filename\"",
      "examples": [
        "rm [options]... file...",
        "rm -- \"$filename\"",
        "rm -rf /$variable"
      ]
    },
    {
      "name": "rmdir",
      "description": "Remove directory, this command will only work if the folders are empty.",
      "syntax": "$ rmdir myfolder",
      "examples": [
        "rmdir [options]... folder(s)..."
      ]
    },
    {
      "name": "rsync",
      "description": "Remote file copy - Synchronize file trees across local disks, directories or across a network.",
      "syntax": "You use rsync in the same way you use rcp. You must specify a source and a destination, one of which can be remote. Perhaps the best way to explain the syntax is some examples: rsync -t *.c foo:src/ this would transfer all files matching the pattern *.c from the current directory to the directory src on the machine foo. If any of the files already exist on the remote system then the rsync remote-update protocol is used to update the file by sending only the differences. See the tech report for d",
      "examples": [
        "rsync -Cavz . ss64:backup",
        "rsync -avuzb --exclude '*~' samba:samba/ .",
        "rsync -Cavuzb . samba:samba/",
        "rsync -az -e ssh --delete ~ftp/pub/samba/ nimbus:\"~ftp/pub/tridge/samba\""
      ]
    },
    {
      "name": "rsync_options",
      "description": "Remote file copy (Synchronize file trees)",
      "syntax": "rsync_options [options]",
      "examples": [
        "rsync_options",
        "rsync_options --help"
      ]
    },
    {
      "name": "scp",
      "description": "Secure copy (remote file copy program)",
      "syntax": "scp /home/simon/file1 kate@ss64.com:/home/kate",
      "examples": [
        "scp [-1246BCpqrv] [-c cipher] [-F ssh_config] [-i identity_file]",
        "scp command-line flag.",
        "scp /home/simon/file1 kate@ss64.com:/home/kate"
      ]
    },
    {
      "name": "screen",
      "description": "Multiplex a physical terminal between several processes (typically interactive shells).",
      "syntax": "exec screen",
      "examples": [
        "screen [ -options ] [ cmd [args] ]",
        "screen -r [[pid.]tty[.host]]",
        "screen -r sessionowner/[[pid.]tty[.host]]"
      ]
    },
    {
      "name": "sdiff",
      "description": "Merge two files interactively. (Show differences) with output to outfile.",
      "syntax": "sdiff [options]",
      "examples": [
        "sdiff -o outfile [options] from-file to-file",
        "sdiff."
      ]
    },
    {
      "name": "sed",
      "description": "SED is a stream editor. A stream editor is used to perform basic text transformations on an input stream (a file or input from a pipeline). While in some ways similar to an editor which permits scripted edits, SED works by making only one pass over the input(s), and is consequently more efficient. But it is SED's ability to filter text in a pipeline which particularly distinguishes it from other types of editors.",
      "syntax": "Syntax sed [options]... Options",
      "examples": [
        "sed [options]..."
      ]
    },
    {
      "name": "select",
      "description": "The select construct allows the easy generation of menus. It has almost the same syntax as the for command.",
      "syntax": "select",
      "examples": [
        "select",
        "select name [in words ...]; do commands; done",
        "select"
      ]
    },
    {
      "name": "seq",
      "description": "Print a sequence of numbers to standard output",
      "syntax": "$ seq 100",
      "examples": [
        "seq [options]... [FIRST [STEP]] LAST..."
      ]
    },
    {
      "name": "set",
      "description": "Change the value of a shell option and set the positional parameters, or display the names and values of shell variables.",
      "syntax": "Syntax set [--abefhkmnptuvxBCEHPT] [-o option-name] [argument …] set [+abefhkmnptuvxBCEHPT] [+o option-name] [argument …]",
      "examples": [
        "set [--abefhkmnptuvxBCEHPT] [-o option-name] [argument …]",
        "set [+abefhkmnptuvxBCEHPT] [+o option-name] [argument …]",
        "set -eu"
      ]
    },
    {
      "name": "shift",
      "description": "The positional parameters from n+1 ... $# are renamed to $1 ... $#-n+1 Parameters represented by the numbers $# to n+1 are unset. n must be a positive number less than or equal to $#. The return status is zero unless n is greater than $# or less than zero.",
      "syntax": "Syntax shift [n] Options n : The number of parameters to shift (default = 1)",
      "examples": [
        "shift [n]"
      ]
    },
    {
      "name": "shopt",
      "description": "Shell Options",
      "syntax": "shopt",
      "examples": [
        "shopt [-pqsu] [-o] [optname ...]",
        "shopt -s histappend",
        "shopt"
      ]
    },
    {
      "name": "shutdown",
      "description": "Shutdown or restart linux",
      "syntax": "shutdown [options]",
      "examples": [
        "shutdown [options] when [message]",
        "shutdown -h now",
        "shutdown -r now"
      ]
    },
    {
      "name": "sleep",
      "description": "Delay for a specified time, pause for an amount of time specified by the sum of the values of the command line arguments.",
      "syntax": "Syntax sleep [NUMBER [smhd]]... Key: s : seconds (default) m : minutes h : hours d : days",
      "examples": [
        "sleep [NUMBER [smhd]]..."
      ]
    },
    {
      "name": "slocate",
      "description": "Security Enhanced version of GNU Locate. Secure Locate provides a secure way to index and quickly search for files on your system. It uses incremental encoding just like GNU locate to compress its database to make searching faster, but it will also store file permissions and ownership so that users will not see files they do not have access to.",
      "syntax": "slocate [options]",
      "examples": [
        "slocate [-qi] [-d path] [--database=path] search string",
        "slocate [-i] [-r regexp] [--regexp=regexp]",
        "slocate [-qv] [-o file] [--output=file]"
      ]
    },
    {
      "name": "sort",
      "description": "Sort text files. Sort, merge, or compare all the lines from the files given (or standard input.)",
      "syntax": "$ sort countries.txt",
      "examples": [
        "sort [options] [file...]",
        "sort --help",
        "sort --version"
      ]
    },
    {
      "name": "source",
      "description": "Read and execute commands from the filename argument in the current shell context.",
      "syntax": "Syntax . filename [arguments] source filename [arguments]",
      "examples": [
        "source filename [arguments]",
        "source",
        "source"
      ]
    },
    {
      "name": "split",
      "description": "Split a file into fixed-size pieces, creates output files containing consecutive sections of INPUT (standard input if none is given or INPUT is '-')",
      "syntax": "$ split -b 100m demo.zip",
      "examples": [
        "split [options] [INPUT [PREFIX]]"
      ]
    },
    {
      "name": "ss",
      "description": "Socket Statistics. Shows information similar to netstat, ss can display more TCP and state information than other tools.",
      "syntax": "ss",
      "examples": [
        "ss",
        "ss [options] [FILTER]",
        "ss -t -a"
      ]
    },
    {
      "name": "ssh",
      "description": "OpenSSH SSH client (remote login program)",
      "syntax": "$ ssh -f -L 1234:localhost:6667 server.example.com sleep 10 $ irc -c ’#users’ -p 1234 pinky 127.0.0.1",
      "examples": [
        "ssh [-1246AaCfgKkMNnqsTtVvXxYy] [-b bind_address] [-c cipher_spec]",
        "ssh needs to ask for a password or passphrase; see also the -f",
        "ssh_config(5)."
      ]
    },
    {
      "name": "stat",
      "description": "Display file or file system status. Mandatory arguments to long options are mandatory for short options too.",
      "syntax": "$ stat -c%A ss64.sh -rw-r--r--",
      "examples": [
        "stat [OPTION]... FILE..."
      ]
    },
    {
      "name": "sticky",
      "description": "Sticky text and append-only directories",
      "syntax": "sticky [options]",
      "examples": [
        "sticky",
        "sticky --help"
      ]
    },
    {
      "name": "strace",
      "description": "Trace system calls and signals.",
      "syntax": "strace [options]",
      "examples": [
        "strace [ -dDffhiqrtttTvVxx ] [ -a column ] [ -e expr ]... [ -o file ] [ -p pid ]...",
        "strace -c [ -D ] [ -e expr ]... [ -O overhead ] [ -S sortby ] [ command [ arg... ] ]"
      ]
    },
    {
      "name": "su",
      "description": "Substitute user identity Run a command with substitute user and group id, allow one user to temporarily become another user. It runs a command (often an interactive shell) with the real and effective user id, group id, and supplemental groups of a given user.",
      "syntax": "su [options]",
      "examples": [
        "su [options]... [user [arg]...]"
      ]
    },
    {
      "name": "sudo",
      "description": "sudo allows a permitted user to execute a command as the superuser or another user, as specified in the sudoers file.",
      "syntax": ": /etc/sudoers",
      "examples": [
        "sudo -K | -L | -V | -h | -k | -l | -v",
        "sudo [-HPSb] [-a auth_type] [-c class|-] [-p prompt]",
        "sudoedit [-S] [-a auth_type] [-p prompt] [-u username|#uid] file [...]"
      ]
    },
    {
      "name": "sum",
      "description": "Print a checksum for a file. 'sum' is provided for compatibility; 'cksum' is preferable in new applications.",
      "syntax": "sum [options]",
      "examples": [
        "sum [options]... [file]..."
      ]
    },
    {
      "name": "suspend",
      "description": "Suspend the execution of this shell until it receives a SIGCONT signal.",
      "syntax": "Syntax suspend [-f] Key -f Do not complain if this is a login shell; just suspend anyway.",
      "examples": [
        "suspend [-f]"
      ]
    },
    {
      "name": "symlink",
      "description": "make a new name for a file",
      "syntax": "Syntax #include int symlink(const char *OldPath, const char *NewPath);",
      "examples": [
        "symlink",
        "symlink --help"
      ]
    },
    {
      "name": "sync",
      "description": "Synchronize data on disk with memory",
      "syntax": "Syntax sync",
      "examples": [
        "sync"
      ]
    },
    {
      "name": "syntax-arrays",
      "description": "Bash provides one-dimensional array variables. Any variable can be used as an array; the declare builtin will explicitly declare an array. There is no maximum limit on the size of an array, nor any requirement that members be indexed or assigned contiguously. Arrays are zero-based.",
      "syntax": "syntax-arrays [options]",
      "examples": [
        "syntax-arrays",
        "syntax-arrays --help"
      ]
    },
    {
      "name": "syntax-bashrc",
      "description": "When bash is invoked as an interactive login shell, or as a non-interactive shell with the --login option, it first reads and executes commands from the file /etc/profile, if that file exists. After reading that file, it looks for ~/.bash_profile, ~/.bash_login, and ~/.profile, in that order, and reads and executes commands from the first one that exists and is readable. The --noprofile option can be used when the shell is started to inhibit this behavior.",
      "syntax": "syntax-bashrc [options]",
      "examples": [
        "syntax-bashrc",
        "syntax-bashrc --help"
      ]
    },
    {
      "name": "syntax-brackets",
      "description": "Grouping a (list of commands) in parentheses causes them to be executed as if they were a single unit. When commands are grouped, redirections can be applied to the entire command list. For example, the output of all the commands in the list can be redirected to a single stream.",
      "syntax": "syntax-brackets [options]",
      "examples": [
        "syntax-brackets",
        "syntax-brackets --help"
      ]
    },
    {
      "name": "syntax-condition",
      "description": "Conditional expressions are often used by bracketed expressions and the test builtin.",
      "syntax": "syntax-condition [options]",
      "examples": [
        "syntax-condition",
        "syntax-condition --help"
      ]
    },
    {
      "name": "syntax-env",
      "description": "When a program is invoked it is given an array of strings called the environment.",
      "syntax": "syntax-env [options]",
      "examples": [
        "syntax-env",
        "syntax-env --help"
      ]
    },
    {
      "name": "syntax-execute",
      "description": "Chain commands to run one after another",
      "syntax": "syntax-execute [options]",
      "examples": [
        "syntax-execute",
        "syntax-execute --help"
      ]
    },
    {
      "name": "syntax-expand",
      "description": "Expansion is performed on the command line after it has been split into tokens.",
      "syntax": "syntax-expand [options]",
      "examples": [
        "syntax-expand",
        "syntax-expand --help"
      ]
    },
    {
      "name": "syntax-file-operators",
      "description": "The following operators return TRUE if..",
      "syntax": "syntax-file-operators [options]",
      "examples": [
        "syntax-file-operators",
        "syntax-file-operators --help"
      ]
    },
    {
      "name": "syntax-here-string",
      "description": "A here string can be considered as a stripped-down form of a here document. It consists of nothing more than COMMAND <<<$WORD, where $WORD is expanded and fed to the stdin of COMMAND.",
      "syntax": "syntax-here-string [options]",
      "examples": [
        "syntax-here-string",
        "syntax-here-string --help"
      ]
    },
    {
      "name": "syntax-here",
      "description": "A here document is a block of text or code which is redirected to an interactive program or a command.",
      "syntax": "syntax-here [options]",
      "examples": [
        "syntax-here",
        "syntax-here --help"
      ]
    },
    {
      "name": "syntax-inputrc",
      "description": "~/.inputrc",
      "syntax": "syntax-inputrc [options]",
      "examples": [
        "syntax-inputrc",
        "syntax-inputrc --help"
      ]
    },
    {
      "name": "syntax-jobs",
      "description": "Job control refers to the ability to selectively stop (suspend) the execution of processes and continue (resume) their execution at a later point. A user typically employs this facility via an interactive interface supplied jointly by the system's terminal driver and Bash.",
      "syntax": "syntax-jobs [options]",
      "examples": [
        "syntax-jobs",
        "syntax-jobs --help"
      ]
    },
    {
      "name": "syntax-keyboard",
      "description": "For example, to move to a directory 'sample1'; Type cd sam ; then press TAB and ENTER. type just enough characters to uniquely identify the directory you wish to open.",
      "syntax": "syntax-keyboard [options]",
      "examples": [
        "syntax-keyboard",
        "syntax-keyboard --help"
      ]
    },
    {
      "name": "syntax-math",
      "description": "The shell allows arithmetic expressions to be evaluated, as one of the shell expansions or by the let builtin.",
      "syntax": "syntax-math [options]",
      "examples": [
        "syntax-math",
        "syntax-math --help"
      ]
    },
    {
      "name": "syntax-parameters",
      "description": "A parameter is an entity that stores values. It can be a name, a number, or one of the special characters listed below. For the shell's purposes, a variable is a parameter denoted by a name.",
      "syntax": "syntax-parameters [options]",
      "examples": [
        "syntax-parameters",
        "syntax-parameters --help"
      ]
    },
    {
      "name": "syntax-permissions",
      "description": "Linux/unix system permissions allow or prevent other users from viewing, modifying or executing any particular file.",
      "syntax": "syntax-permissions [options]",
      "examples": [
        "syntax-permissions",
        "syntax-permissions --help"
      ]
    },
    {
      "name": "syntax-pipe",
      "description": "Redirect the output from one command as input for another. A pipeline is a sequence of simple commands separated by '|'.",
      "syntax": "syntax-pipe [options]",
      "examples": [
        "syntax-pipe",
        "syntax-pipe --help"
      ]
    },
    {
      "name": "syntax-prompt",
      "description": "There are several variables that can be set to control the appearance of the bach command prompt: PS1, PS2, PS3, PS4 and PROMPT_COMMAND the contents are executed just as if they had been typed on the command line.",
      "syntax": "syntax-prompt [options]",
      "examples": [
        "syntax-prompt",
        "syntax-prompt --help"
      ]
    },
    {
      "name": "syntax-pronounce",
      "description": "How do I pronounce vi , or ! , or /* , or ...? You can start a very long and pointless discussion by wondering about this topic on the net. Some people say vye, some say vee-eye (the vi manual suggests this) and some Roman numerologists say six. How you pronounce vi has nothing to do with whether or not you are a true Unix wizard.",
      "syntax": "syntax-pronounce [options]",
      "examples": [
        "syntax-pronounce",
        "syntax-pronounce --help"
      ]
    },
    {
      "name": "syntax-quoting",
      "description": "Quoting is used to remove the special meaning of certain characters or words to the shell. Quoting can be used to disable special treatment for special characters, to prevent reserved words from being recognized as such, and to prevent parameter expansion.",
      "syntax": "syntax-quoting [options]",
      "examples": [
        "syntax-quoting",
        "syntax-quoting --help"
      ]
    },
    {
      "name": "syntax-redirection",
      "description": "Both the input and output of a command can be redirected:",
      "syntax": "syntax-redirection [options]",
      "examples": [
        "syntax-redirection",
        "syntax-redirection --help"
      ]
    },
    {
      "name": "syntax-script",
      "description": "A shell script is a text file containing one or more commands.",
      "syntax": "syntax-script [options]",
      "examples": [
        "syntax-script",
        "syntax-script --help"
      ]
    },
    {
      "name": "syntax-substitution",
      "description": "Substitution allows the output of a command to replace the command itself.",
      "syntax": "syntax-substitution [options]",
      "examples": [
        "syntax-substitution",
        "syntax-substitution --help"
      ]
    },
    {
      "name": "syntax-variables",
      "description": "You can use variables in bash as in any programming language. There are no data types so a variable can contain a number, or a string of characters. There is no need to declare a variable, just assign a value:",
      "syntax": "syntax-variables [options]",
      "examples": [
        "syntax-variables",
        "syntax-variables --help"
      ]
    },
    {
      "name": "syntax-wildcards",
      "description": "Wildcards allow pattern matching within both Regular Expressions and in Globbing.",
      "syntax": "syntax-wildcards [options]",
      "examples": [
        "syntax-wildcards",
        "syntax-wildcards --help"
      ]
    },
    {
      "name": "syntax",
      "description": "Looping constructs:",
      "syntax": "syntax [options]",
      "examples": [
        "syntax",
        "syntax --help"
      ]
    },
    {
      "name": "tac",
      "description": "Concatenate and write files in reverse, copies each FILE ( - means standard input), or standard input if none are given, to standard output, reversing the records (lines by default) in each file separately.",
      "syntax": "tac [options]",
      "examples": [
        "tac [options]... [file]..."
      ]
    },
    {
      "name": "tail",
      "description": "Output the last part of files, print the last part (10 lines by default) of each FILE; tail reads from standard input if no files are given or when given a FILE of -",
      "syntax": "tail",
      "examples": [
        "tail [options]... [file]...",
        "tail"
      ]
    },
    {
      "name": "tar",
      "description": "Store, list or extract files in an archive (originally on tape - Tape ARchiver).",
      "syntax": "tar: can't open /dev/rmt8 : No such device or address tar: can't open /dev/rsmt0 : I/O error",
      "examples": [
        "tar [[-]function] [options] filenames...",
        "tar [[-]function] [options] -C directory-name...",
        "tar: can't open /dev/rmt8 : No such device or address"
      ]
    },
    {
      "name": "tee",
      "description": "Redirect output to multiple files, copies standard input to standard output and also to any files given as arguments. This is useful when you want not only to send some data down a pipe, but also to save a copy.",
      "syntax": "tee",
      "examples": [
        "tee [options]... [file]...",
        "tee"
      ]
    },
    {
      "name": "test",
      "description": "[ is a synonym for test but requires a final argument of ].",
      "syntax": "Syntax test expr [ expr ] [[ expr ]]",
      "examples": [
        "test expr",
        "test",
        "test"
      ]
    },
    {
      "name": "time",
      "description": "Measure the running time of a program.",
      "syntax": "The \"format string\" controls the contents of the 'time' output. It consists of \"resource specifiers\" and \"escapes\", interspersed with plain text. A backslash introduces an \"escape\", which is translated into a single printing character upon output. The valid escapes are listed below. An invalid escape is output as a question mark followed by a backslash. \\t a tab character \\n a newline \\\\ a literal backslash 'time' always prints a newline after printing the resource use information, so normally f",
      "examples": [
        "time [option...] command [arg...]"
      ]
    },
    {
      "name": "timeout",
      "description": "Run a command with a time limit, runs the given command and kills it if it is still running after the specified time interval.",
      "syntax": "timeout 1m LongRunningCommand",
      "examples": [
        "timeout [option] duration command [arg]...",
        "timeout 1m LongRunningCommand"
      ]
    },
    {
      "name": "times",
      "description": "Print out the user and system times used by the shell and its children.",
      "syntax": "Syntax times",
      "examples": [
        "times"
      ]
    },
    {
      "name": "top",
      "description": "Process viewer, find the CPU-intensive programs currently running. See ps for explanations of the field descriptors.",
      "syntax": "$ top -Ps5",
      "examples": [
        "$ top -Ps5"
      ]
    },
    {
      "name": "touch",
      "description": "Change file timestamps, change the access and/or modification times of the specified files.",
      "syntax": "touch sample.txt",
      "examples": [
        "touch [options]... File...",
        "touch sample.txt",
        "touch file{1,2,3,4,5,6,7,8,9,10}"
      ]
    },
    {
      "name": "tput",
      "description": "Set terminal-dependent capabilities, color, position.",
      "syntax": "tput",
      "examples": [
        "tput [-Ttype] capname [parms ... ]",
        "tput [-Ttype] init",
        "tput [-Ttype] reset"
      ]
    },
    {
      "name": "tr",
      "description": "Translate, squeeze, and/or delete characters.",
      "syntax": "Syntax tr [options]... SET1 [SET2]",
      "examples": [
        "tr [options]... SET1 [SET2]",
        "tr",
        "tr aaa xyz"
      ]
    },
    {
      "name": "traceroute",
      "description": "Print the route packets take to network host.",
      "syntax": "traceroute [options]",
      "examples": [
        "traceroute [options] host [packetsize]"
      ]
    },
    {
      "name": "trap",
      "description": "Execute a command when the shell receives a signal.",
      "syntax": "trap",
      "examples": [
        "trap [-lp] [[arg] sigspec ...]",
        "trap",
        "trap cleanup 1 2 3 6"
      ]
    },
    {
      "name": "true",
      "description": "Do nothing, returning a zero (true) exit status",
      "syntax": "Syntax: true",
      "examples": [
        "true"
      ]
    },
    {
      "name": "tsort",
      "description": "Topological sort, perform a topological sort on the given FILE, or standard input if no input file is given or for a FILE of '-'.",
      "syntax": "tsort [options]",
      "examples": [
        "tsort [options] [file]",
        "tsort <<EOF"
      ]
    },
    {
      "name": "tty",
      "description": "Print file name of terminal on standard input, print the file name of the terminal connected to standard input. It prints 'not a tty' if standard input is not a terminal.",
      "syntax": "tty [options]",
      "examples": [
        "tty [option]..."
      ]
    },
    {
      "name": "type",
      "description": "Describe a command. For each name, indicate how it would be interpreted if used as a command name.",
      "syntax": "Syntax type [-aftpP] name [name ...] Key -a Print all the places that contain an executable named name.",
      "examples": [
        "type [-aftpP] name [name ...]"
      ]
    },
    {
      "name": "ulimit",
      "description": "User limits - limit the use of system-wide resources.",
      "syntax": "help ulimit",
      "examples": [
        "ulimit [-abcdefHilmnpqrsStTuvx] [limit]"
      ]
    },
    {
      "name": "umask",
      "description": "User's file creation mask. umask sets an environment variable which automatically sets file permissions on newly created files. i.e. it will set the shell process's file creation mask to mode.",
      "syntax": "Syntax umask [-p] [-S] [mode] Key mode File creation mask -S Print the mask in symbolic format -p Output in a form that can be reused as input",
      "examples": [
        "umask [-p] [-S] [mode]",
        "umask 022"
      ]
    },
    {
      "name": "uname",
      "description": "Print system information, print information about the machine and operating system it is run on. If no options are given, 'uname' acts as if the '-s' option were given.",
      "syntax": "info coreutils aquname invocationaq",
      "examples": [
        "uname [options]..."
      ]
    },
    {
      "name": "unexpand",
      "description": "Convert spaces to tabs, write the contents of each given FILE, or standard input if none are given or for a FILE of '-', to standard output. Strings of two or more space or tab characters are converted to as many tabs as possible followed by as many spaces as are needed.",
      "syntax": "unexpand [options]",
      "examples": [
        "unexpand [options]... [file]..."
      ]
    },
    {
      "name": "uniq",
      "description": "Report or filter out repeated lines in a file. Reads standard input comparing adjacent lines, and writes a copy of each unique input line to the standard output. The second and succeeding copies of identical adjacent input lines are not written.",
      "syntax": "uniq",
      "examples": [
        "uniq [options]... [InputFile [OutputFile]]",
        "uniq",
        "uniq"
      ]
    },
    {
      "name": "units",
      "description": "Convert units from one scale to another. The units are defined in an external data file. You can use the extensive data file that comes with this program, or you can provide your own data file to suit your needs. You can use the program interactively with prompts, or you can use it from the command line.",
      "syntax": "1161 units, 53 prefixes You have:",
      "examples": [
        "units options [FROM-UNIT [TO-UNIT]]",
        "units '2 liters' 'quarts'"
      ]
    },
    {
      "name": "unrar",
      "description": "Extract files from a rar archive.",
      "syntax": "Syntax unrar command [-switch_1 -switch_N] archive [files...] [path...]",
      "examples": [
        "unrar command [-switch_1 -switch_N] archive [files...] [path...]",
        "unrar"
      ]
    },
    {
      "name": "unset",
      "description": "Remove variable or function names",
      "syntax": "help unset",
      "examples": [
        "unset [-fv] [name]"
      ]
    },
    {
      "name": "unshar",
      "description": "Unpack shell archive scripts. Each file is processed in turn, as a shell archive or a collection of shell archives. If no files are given, then standard input is processed instead.",
      "syntax": "unshar [options]",
      "examples": [
        "unshar [options] ... [file... ]"
      ]
    },
    {
      "name": "until",
      "description": "Execute consequent-commands as long as test-commands has an exit status which is not zero.",
      "syntax": "Syntax until test-commands; do consequent-commands; done",
      "examples": [
        "until test-commands; do consequent-commands; done"
      ]
    },
    {
      "name": "useradd",
      "description": "Create a new user or update default new user information .",
      "syntax": "Syntax useradd [options] LOGIN useradd -D useradd -D [options]",
      "examples": [
        "useradd [options] LOGIN",
        "useradd -D",
        "useradd -D [options]"
      ]
    },
    {
      "name": "userdel",
      "description": "Delete a user account and related files.",
      "syntax": "Syntax userdel [options] LOGIN",
      "examples": [
        "userdel [options] LOGIN"
      ]
    },
    {
      "name": "usermod",
      "description": "Modify user account information.",
      "syntax": "usermod [options]",
      "examples": [
        "usermod [options] [user]"
      ]
    },
    {
      "name": "users",
      "description": "Print login names of users currently logged in, print on a single line a blank-separated list of user names of users currently logged in to the current host.",
      "syntax": "Syntax users [OPTION]... [FILE] Key --help display this help and exit --version output version information and exit",
      "examples": [
        "users [OPTION]... [FILE]"
      ]
    },
    {
      "name": "uuencode",
      "description": "uuencode - encode a binary file uudecode - decode a file created by uuencode",
      "syntax": "tar cf - src_tree | compress | uuencode src_tree.tar.Z | mail sys1!sys2!user",
      "examples": [
        "uuencode [-m] [ file ] name"
      ]
    },
    {
      "name": "vi",
      "description": "Linux",
      "syntax": "vi [options]",
      "examples": [
        "vi",
        "vi --help"
      ]
    },
    {
      "name": "vmstat",
      "description": "Report virtual memory statistics: processes, memory, paging, block IO, traps, and cpu activity.",
      "syntax": "vmstat [options]",
      "examples": [
        "vmstat [-a] [-n] [delay [ count]]",
        "vmstat [-f] [-s] [-m]",
        "vmstat [-S unit]"
      ]
    },
    {
      "name": "w",
      "description": "Display who is logged in and what they are doing.",
      "syntax": "w [options]",
      "examples": [
        "w [-hi] [user ...]"
      ]
    },
    {
      "name": "wait",
      "description": "Wait for each specified process to complete and return its termination status.",
      "syntax": "Syntax wait [n ...] Key n A process ID or a job specification",
      "examples": [
        "$ wait 2585"
      ]
    },
    {
      "name": "watch",
      "description": "Execute a program periodically, showing output full screen",
      "syntax": "watch [options]",
      "examples": [
        "watch [options] command options",
        "watch -n 60 from",
        "watch -d ls -l"
      ]
    },
    {
      "name": "wc",
      "description": "Print byte, word, and line counts, count the number of bytes, whitespace-separated words, and newlines in each given FILE, or standard input if none are given or for a FILE of '-'.",
      "syntax": "wc --bytes --words",
      "examples": [
        "wc [options]... [file]...",
        "wc --bytes --words",
        "wc -l"
      ]
    },
    {
      "name": "whereis",
      "description": "Search $path, man pages and source files for an application file.",
      "syntax": "% cd /usr/bin % whereis -u -M /usr/man/man1 -S /usr/src -f *",
      "examples": [
        "whereis [options] files"
      ]
    },
    {
      "name": "which",
      "description": "Locate a program file in the user's path.",
      "syntax": "which",
      "examples": [
        "which [options] [--] program_name [...]",
        "which like the following:",
        "which   (alias | ./which -i !*)"
      ]
    },
    {
      "name": "while",
      "description": "Execute consequent-commands as long as test-commands has an exit status of zero",
      "syntax": "Syntax while test-commands; do consequent-commands; done",
      "examples": [
        "while test-commands; do consequent-commands; done",
        "while"
      ]
    },
    {
      "name": "who",
      "description": "Print who is currently logged in",
      "syntax": "who [options]",
      "examples": [
        "who [options] [file] [am i]"
      ]
    },
    {
      "name": "whoami",
      "description": "Print the current user id and name. Same as id -un.",
      "syntax": "Syntax whoami [options] Options --help Display Help --version Display program version info",
      "examples": [
        "whoami [options]"
      ]
    },
    {
      "name": "write",
      "description": "Send a message to another user.",
      "syntax": "Syntax: write user [ttyname]",
      "examples": [
        "write user [ttyname]"
      ]
    },
    {
      "name": "xargs",
      "description": "Execute a command, passing constructed argument list(s). The arguments are typically a long list of filenames (generated by ls or find) that are passed to xargs via a pipe.",
      "syntax": "$ find ./music -name \"*.mp3\" -print0 | xargs -0 ls",
      "examples": [
        "xargs [options] [command]",
        "xargs will exit."
      ]
    },
    {
      "name": "xdg-open",
      "description": "Open a file or URL in the user's preferred application.",
      "syntax": "Syntax xdg-open file xdg-open URL xdg-open --help xdg-open --manual xdg-open --version Options: files The filename(s) to open, wildcards are accepted.",
      "examples": [
        "xdg-open file",
        "xdg-open URL",
        "xdg-open --help"
      ]
    },
    {
      "name": "xz",
      "description": "xz, unxz, xzcat, lzma, unlzma, lzcat - Compress or decompress .xz and .lzma files",
      "syntax": "file.txt.xz",
      "examples": [
        "xz [option]... [file]...",
        "xzcat  is equivalent to xz --decompress --stdout."
      ]
    },
    {
      "name": "yes",
      "description": "Print the command line argument(s), separated by spaces and followed by a newline, forever until killed. When piped into a command, it will continue until the pipe breaks (i.e., the program completes its execution).",
      "syntax": "yes 123456789 | head -1000 > file.txt",
      "examples": [
        "yes text",
        "yes --help",
        "yes --version"
      ]
    },
    {
      "name": "zip",
      "description": "Package and compress (archive) files.",
      "syntax": "zip [options]",
      "examples": [
        "zip [-aABcdDeEfFghjklLmoqrRSTuvVwXyz!@$] [--longoption ...]",
        "zip -b /tmp stuff *",
        "zip -d foo foo/tom/junk foo/harry/\\* \\*.o"
      ]
    }
  ],
  "macos": [
    {
      "name": "afconvert",
      "description": "Audio File Convert.",
      "syntax": "'mp4f' = MPEG-4 Audio - Lossy (.mp4)",
      "examples": [
        "afconvert [option...] input_file [output_file]",
        "afconvert input_file [-o output_file [option...]]...",
        "afconvert"
      ]
    },
    {
      "name": "afinfo",
      "description": "Audio File Info.",
      "syntax": "$ afinfo jolene.mp3 |grep 'bit rate' bit rate: 320000 bits per second",
      "examples": [
        "afinfo [option...] audio_file(s)"
      ]
    },
    {
      "name": "afplay",
      "description": "Audio File Play.",
      "syntax": "$ afplay music.wav -t 5",
      "examples": [
        "afplay [option...] audio_file",
        "afplay jolene.mp3"
      ]
    },
    {
      "name": "airport",
      "description": "Manage the Apple AirPort interface.",
      "syntax": "$ airport -i",
      "examples": [
        "airport",
        "airport --help"
      ]
    },
    {
      "name": "alias",
      "description": "Create an alias. Aliases allow a string to be substituted for a word. An alias can be used as the first word of any simple command.",
      "syntax": "Syntax alias [-p] [name[=value] ...] unalias [-a] [name...] Key -p Print the current values -a Remove All aliases",
      "examples": [
        "alias [-p] [name[=value] ...]",
        "alias",
        "alias print"
      ]
    },
    {
      "name": "apropos",
      "description": "Search the whatis database for strings.",
      "syntax": "Syntax apropos keyword ...",
      "examples": [
        "apropos keyword ..."
      ]
    },
    {
      "name": "asr",
      "description": "Apple Software Restore; copy volumes (e.g. from disk images.)",
      "syntax": "asr [options]",
      "examples": [
        "asr verb [options]",
        "asr restore --source source --target target [options]",
        "asr server --source source --config configuration [options]"
      ]
    },
    {
      "name": "awk",
      "description": "Find and Replace text within file(s) Pattern-directed scanning and processing language.",
      "syntax": "awk '$1 == \"Audrey\" {print $2}' numbers.txt",
      "examples": [
        "awk  [ -F fs ] [ -v var=value ] [ 'prog' | -f progfile ] [ file ...  ]",
        "awk '$1 == \"Audrey\" {print $2}' numbers.txt",
        "awk '$7 == \"Dec\"'"
      ]
    },
    {
      "name": "bang",
      "description": "Re-run all or part of a previous command.",
      "syntax": "bang [options]",
      "examples": [
        "bang",
        "bang --help"
      ]
    },
    {
      "name": "basename",
      "description": "Strip directory and suffix from filenames",
      "syntax": "basename",
      "examples": [
        "basename string [suffix]",
        "basename [-a] [-s suffix] string [...]",
        "basename"
      ]
    },
    {
      "name": "bash",
      "description": "bash - Launches the Bourne-Again SHell, an sh-compatible shell that incorporates useful features from the Korn and C shells (ksh and csh).",
      "syntax": "bash [options]",
      "examples": [
        "bash [options]"
      ]
    },
    {
      "name": "bc",
      "description": "An arbitrary precision calculator language.",
      "syntax": "bc",
      "examples": [
        "bc options file...",
        "bc",
        "bc"
      ]
    },
    {
      "name": "bg",
      "description": "Send to background",
      "syntax": "Syntax bg [jobspec ...]",
      "examples": [
        "bg [jobspec ...]",
        "bg",
        "bg jobspec"
      ]
    },
    {
      "name": "bind",
      "description": "Display current readline key and function bindings, bind a key sequence to a readline function or macro, or set a readline variable.",
      "syntax": "bind",
      "examples": [
        "bind [-m keymap] [-lpsvPSV]",
        "bind [-m keymap] [-q function] [-u function] [-r keyseq]",
        "bind [-m keymap] -f filename"
      ]
    },
    {
      "name": "bless",
      "description": "Set volume bootability and set the active boot volume. bless has 5 modes of execution: Folder Mode, Mount Mode, Device Mode, NetBoot Mode, and Info Mode.",
      "syntax": "man bless",
      "examples": [
        "bless --folder directory [--folder9 directory] [--file file]",
        "bless --mount directory [--file file] [--setBoot] [--nextonly]",
        "bless --device device [--label name | --labelfile file]"
      ]
    },
    {
      "name": "break",
      "description": "Exit from a for, while, until or select loop.",
      "syntax": "Syntax break [n]",
      "examples": [
        "break [n]",
        "break # This line will break out of the loop"
      ]
    },
    {
      "name": "builtin",
      "description": "Execute the specified shell builtin, passing it arguments, and return its exit status.",
      "syntax": "Syntax builtin shell-builtin [arguments]",
      "examples": [
        "builtin shell-builtin [arguments]"
      ]
    },
    {
      "name": "bzip",
      "description": "Compress (bzip2) or decompress (bunzip2) files. Decompress files to stdout (bzcat) and recover data from damaged bzip2 files (bzip2recover.)",
      "syntax": "Syntax bzip2 [ -cdfkqstvzVL123456789 ] [ filenames ... ] bunzip2 [ -fkvsVL ] [ filenames ... ] bzcat [ -s ] [ filenames ... ] bzip2recover filename",
      "examples": [
        "bzip2 [ -cdfkqstvzVL123456789 ] [ filenames ...  ]",
        "bzip2recover filename",
        "bzip2"
      ]
    },
    {
      "name": "caffeinate",
      "description": "Prevent the system from sleeping on behalf of a utility.",
      "syntax": "caffeinate -u -t 3600",
      "examples": [
        "caffeinate [-disu] [-t timeout] [-w pid] [utility arguments...]",
        "caffeinate -u -t 3600",
        "caffeinate -i make"
      ]
    },
    {
      "name": "cal",
      "description": "Display a calendar. ncal offers an alternative layout, more options and the date of easter.",
      "syntax": "$ mkdir -p $HOME/bin $ ln `which cal` $HOME/bin/ncal $ $HOME/bin/ncal -w",
      "examples": [
        "cal [-jy] [[month] year]",
        "cal [-j] -m month [year]"
      ]
    },
    {
      "name": "calendar",
      "description": "Rreminder service.",
      "syntax": "calendar [options]",
      "examples": [
        "calendar [-a] [-A num] [-B num] [-F friday]",
        "calendar            file in current directory",
        "calendar file to use if no calendar file exists in the current directory."
      ]
    },
    {
      "name": "caller",
      "description": "Return the context of any active subroutine call (a shell function or a script) executed with the . or source builtins.",
      "syntax": "Syntax caller [expr]",
      "examples": [
        "caller [expr]"
      ]
    },
    {
      "name": "cancel",
      "description": "Cancel print jobs.",
      "syntax": "cancel",
      "examples": [
        "cancel [ -E ] [ -U username ] [ -a ] [ -h hostname[:port] ] [ -u username ] [ -x ] [ id ]",
        "cancel",
        "cancel myprinter-42"
      ]
    },
    {
      "name": "case",
      "description": "Expand words, and match against patern.",
      "syntax": "Syntax case word in [ [(] pattern [ | pattern ] ... ) list ;; ] ... esac",
      "examples": [
        "case word in [ [(] pattern [ | pattern ] ... ) list ;; ] ... esac",
        "case",
        "case $ANIMAL in"
      ]
    },
    {
      "name": "cat",
      "description": "Concatenate and print (display) the content of files.",
      "syntax": "cat",
      "examples": [
        "$ cat myfile.txt"
      ]
    },
    {
      "name": "cd",
      "description": "Change Directory - change the current working Folder.",
      "syntax": "$ cd -",
      "examples": [
        "$ cd Documents",
        "$ cd /library/fonts $ pwd cd /library/fonts",
        "$ cd ~/music $ pwd /Users/kate/music",
        "cd ..",
        "$ cd ../.."
      ]
    },
    {
      "name": "chflags",
      "description": "Change a file or folder's flags.",
      "syntax": "$ chflags uchg finance",
      "examples": [
        "$ chflags uchg finance"
      ]
    },
    {
      "name": "chgrp",
      "description": "Change group ownership (update the group ID of files.)",
      "syntax": "$ chgrp OpsGroup /usr/database/demo.dbf",
      "examples": [
        "chgrp [-fhv] [-R [-H | -L | -P]] group file ..."
      ]
    },
    {
      "name": "chmod",
      "description": "Change access permissions, change mode.",
      "syntax": "chmod +x filename.sh",
      "examples": [
        "chmod [-fv] [-R [-H | -L | -P]] mode file ...",
        "chmod [-fv] [-R [-H | -L | -P]] [-a | +a | =a] ACE file ...",
        "chmod [-fhv] [-R [-H | -L | -P]] [ACL_Option] file ..."
      ]
    },
    {
      "name": "chown",
      "description": "Change file owner and/or group.",
      "syntax": "$ sudo chown Ursula /Users/Shared/MyFile.txt",
      "examples": [
        "chown [-fhv] [-R [-H | -L | -P]] owner[:group] file ...",
        "chown [-fhv] [-R [-H | -L | -P]] :group file ...",
        "chown -R .*"
      ]
    },
    {
      "name": "chroot",
      "description": "change the root directory to the supplied directory newroot and exec command, if supplied, or an interactive copy of your shell.",
      "syntax": "chroot [options]",
      "examples": [
        "chroot [-u -user] [-g -group] [-G -group,group,...] newroot [command] [ARGS]"
      ]
    },
    {
      "name": "cksum",
      "description": "Display file checksums and block counts. Writes to the standard output three (whitespace separated) fields for each input file: CRC_checksum Total_no_of_octets Filename",
      "syntax": "CRC_checksum Total_no_of_octets Filename",
      "examples": [
        "cksum [-o 1 | 2 | 3] [file ...]"
      ]
    },
    {
      "name": "cmp",
      "description": "Compare two files. The cmp utility compares two files of any type and writes the results to the standard output. By default, cmp is silent if the files are the same; if they differ, the byte and line number at which the first difference occurred is reported.",
      "syntax": "cmp",
      "examples": [
        "cmp [option..] file1 [file2 [skip1 [skip2]]]",
        "cmp"
      ]
    },
    {
      "name": "comm",
      "description": "Compare two sorted files line by line. Output the lines that are common, plus the lines that are unique.",
      "syntax": "$ comm -23 <(sort words.txt | uniq) <(sort countries.txt | uniq)",
      "examples": [
        "comm [-123i] file1 file2"
      ]
    },
    {
      "name": "command",
      "description": "Run command with args suppressing the normal shell function lookup.",
      "syntax": "help command",
      "examples": [
        "command [-pVv] command [arg...]"
      ]
    },
    {
      "name": "complete",
      "description": "Edit command specific tab-completions.",
      "syntax": "$ complete -f -X '!*.dem' SS64 $ SS64[TAB]",
      "examples": [
        "complete [-abcdefgjksuv] [-o comp-option] [-A action] [-G globpat] [-W wordlist]",
        "complete -pr [name ...]"
      ]
    },
    {
      "name": "continue",
      "description": "Resume the next iteration of the enclosing for, while, until, or select loop.",
      "syntax": "Syntax continue [n] Key -n Resume at the nth enclosing loop",
      "examples": [
        "continue [n]"
      ]
    },
    {
      "name": "cp",
      "description": "Appropriate permissions are required for file creation or overwriting.",
      "syntax": "$ cp old.txt new.txt",
      "examples": [
        "cp [-R [-H | -L | -P]] [-fi | -n] [-pvX] Source_file Target_file",
        "cp [-R [-H | -L | -P]] [-fi | -n] [-pvX] Source_file(s) Target_Folder"
      ]
    },
    {
      "name": "cpio",
      "description": "Copy files to and from archives. This implementation can extract from tar, pax, cpio, zip, jar, ar, and ISO 9660 cdrom images and can create tar, pax, cpio, ar, and shar archives.",
      "syntax": "cpio",
      "examples": [
        "cpio -i [options] [pattern ...] [< archive]",
        "cpio -o [options] < name-list [> archive]",
        "cpio -p [options] dest-dir < name-list"
      ]
    },
    {
      "name": "cron",
      "description": "Daemon to execute scheduled commands (Vixie Cron).",
      "syntax": "/usr/lib/cron/tabs",
      "examples": [
        "cron [-s] [-o] [-x debugflag[,...]]",
        "crontab changed after that) or would run after the change at"
      ]
    },
    {
      "name": "crontab",
      "description": "Schedule a command to run at a later date or time.",
      "syntax": "crontab [options]",
      "examples": [
        "crontab [ -u user ] file",
        "crontab [ -u user ] { -l | -r | -e }"
      ]
    },
    {
      "name": "csplit",
      "description": "Split a file into context-determined pieces. csplit splits file into pieces using the patterns args. If file is a dash (-), csplit will read from standard input.",
      "syntax": "csplit -k foo.1 '%^\\.Sh%' '/^\\.Sh/' '{20}'",
      "examples": [
        "csplit [-ks] [-f prefix] [-n number] file args ...",
        "csplit -k foo.1 '%^\\.Sh%' '/^\\.Sh/' '{20}'",
        "csplit -k - 100 '{19}'"
      ]
    },
    {
      "name": "csrutil",
      "description": "Configure System Integrity Protection (SIP). SIP is available in El Capitan (10.11) and later.",
      "syntax": "csrutil disable && reboot or",
      "examples": [
        "csrutil status   View the SIP status",
        "csrutil enable   Turn SIP on, when booted in Recovery mode",
        "csrutil disable  Turn SIP off, when booted in Recovery mode"
      ]
    },
    {
      "name": "cupsfilter",
      "description": "Convert a file to another format using cups filters.",
      "syntax": "cupsfilter foo.txt > foo.pdf",
      "examples": [
        "cupsfilter [ --list-filters ] [ -D ] [ -U user ] [ -c config-file ] [ -d printer ]",
        "cupsfilter foo.txt > foo.pdf",
        "cupsfilter -m application/pdf -d myprinter -j 42 >preview.pdf"
      ]
    },
    {
      "name": "curl",
      "description": "Transfer data from or to a server, using one of the protocols: HTTP, HTTPS, FTP, FTPS, SCP, SFTP, TFTP, DICT, TELNET, LDAP or FILE. (To transfer multiple files use wget or FTP.)",
      "syntax": "man curl",
      "examples": [
        "curl [options] [URL...]",
        "curl supports (gzip), and save  the  uncompressed  document.",
        "curl will report an error.(HTTP)"
      ]
    },
    {
      "name": "cut",
      "description": "Divide a file into several parts.",
      "syntax": "cut [options]",
      "examples": [
        "cut -b list [-n] [file ...]",
        "cut -c list [file ...]",
        "cut -f list [-d delim] [-s] [file ...]"
      ]
    },
    {
      "name": "date",
      "description": "Display or set date and time. Displays the current date and time when invoked without arguments. Providing arguments will format the date and time in a user-defined way or set the date. Only the superuser can set the date.",
      "syntax": "date [options]",
      "examples": [
        "date [-nu] [-r seconds] [+format]"
      ]
    },
    {
      "name": "dc",
      "description": "Most arithmetic operations are affected by the 'precision value', which you can set with the k command. The default precision value is zero, which means that all arithmetic except for addition and subtraction produces integer results.",
      "syntax": "dc [options]",
      "examples": [
        "dc"
      ]
    },
    {
      "name": "dd",
      "description": "Data Duplicator, convert and copy a file. Copy standard input to the standard output.",
      "syntax": "dd",
      "examples": [
        "dd [operands ...]",
        "dd",
        "dd"
      ]
    },
    {
      "name": "declare",
      "description": "Declare variable(s) and/or give them attributes.",
      "syntax": "declare [options]",
      "examples": [
        "declare [-afFirtx] [-p] [name[=value] ...]"
      ]
    },
    {
      "name": "defaults",
      "description": "Set preferences, the macOS user defaults system works with both the OS and with individual applications.",
      "syntax": "defaults write ... -bool true",
      "examples": [
        "defaults [host] Actions Options",
        "defaults help",
        "defaults [host] find word"
      ]
    },
    {
      "name": "df",
      "description": "Display free disk space. With no arguments, `df' reports the space used and available on all currently mounted filesystems (of all types). Otherwise, `df' reports on the filesystem containing each argument file.",
      "syntax": "df [options]",
      "examples": [
        "df [-b | -h | -H | -k | -m | -P] [-ailn] [-t type]",
        "df -t nonfs,mfs"
      ]
    },
    {
      "name": "diff",
      "description": "Display the differences between two files, or each corresponding file in two directories. Each set of differences is called a \"diff\" or \"patch\". For files that are identical, 'diff' normally produces no output; for binary (non-text) files, 'diff' normally reports only that they are different.",
      "syntax": "Syntax diff [options] from-file to-file",
      "examples": [
        "diff [options] from-file to-file"
      ]
    },
    {
      "name": "diff3",
      "description": "Show differences among three files. When two people have made independent changes to a common original, `diff3' can report the differences between the original and the two changed versions, and can produce a merged file that contains both persons' changes together with warnings about conflicts. The files to compare are mine, older, and yours. At most one of these three file names can be -, which tells diff3 to read the standard input for that file.",
      "syntax": "diff3 [options]",
      "examples": [
        "diff3 [options] mine older yours"
      ]
    },
    {
      "name": "dig-queryopt",
      "description": "dig provides a number of query options which affect the way in which lookups are made and the results displayed. Some of these set or reset flag bits in the query header, some determine which sections of the answer get printed, and others determine the timeout and retry strategies.",
      "syntax": "dig-queryopt [options]",
      "examples": [
        "dig-queryopt",
        "dig-queryopt --help"
      ]
    },
    {
      "name": "dig",
      "description": "A flexible tool for interrogating DNS name servers. It performs DNS lookups and displays the answers that are returned from the name server(s) that were queried. Most DNS administrators use dig to troubleshoot DNS problems because of its flexibility, ease of use and clarity of output. Other lookup tools tend to have less functionality than dig.",
      "syntax": "${HOME}/.digrc",
      "examples": [
        "dig [@server] [-b address] [-c class] [-f filename] [-k filename] [-m]",
        "dig [global-queryopt...] [query...]",
        "dig ss64.com"
      ]
    },
    {
      "name": "dirs",
      "description": "Display the list of currently remembered directories.",
      "syntax": "help dirs",
      "examples": [
        "dirs [-clpv] [+n] [-n]"
      ]
    },
    {
      "name": "diskutil",
      "description": "Disk utilities - Format, Verify, Repair (local disks.) This includes options not available in the Disk utility GUI.",
      "syntax": "Syntax diskutil [quiet] verb [options] VERBS",
      "examples": [
        "diskutil [quiet] verb [options]",
        "diskutil destroyRAID is a deprecated synonym for",
        "diskutil appleRAID delete."
      ]
    },
    {
      "name": "disown",
      "description": "Unbind a job from the current login session. Each jobspec is removed from the table of active jobs.",
      "syntax": "disown [options]",
      "examples": [
        "disown [-ar] [-h] [jobspec ...]"
      ]
    },
    {
      "name": "ditto",
      "description": "Copy directory hierarchies, create and extract archives. Ditto can preserve ownership / permissions, resource forks and file / folder metadata. Ditto will automatically create the destination folder if it doesn’t yet exist, if the destination does exist and contains files, then ditto will merge them.",
      "syntax": "ditto \"~/Desktop/work files\" \"/Volumes/work backup\"",
      "examples": [
        "ditto \"~/Desktop/work files\" \"/Volumes/work backup\"",
        "ditto -rsrc \"~/Desktop/work files\" \"/Volumes/work backup\""
      ]
    },
    {
      "name": "dot_clean",
      "description": "Remove dot-underscore files. Merges ._* files with corresponding native files.",
      "syntax": "dot_clean --keep=dotbar /Volumes/test",
      "examples": [
        "dot_clean [-fmnsv] [--keep=[mostrecent|dotbar|native]] [dir ...]",
        "dot_clean --keep=dotbar /Volumes/test"
      ]
    },
    {
      "name": "drutil",
      "description": "Interact with CD/DVD burners: burn, eject, erase.",
      "syntax": "Syntax drutil [-drive ...] command [command-options-and-arguments] Key",
      "examples": [
        "drutil [-drive ...] command [command-options-and-arguments]"
      ]
    },
    {
      "name": "dscacheutil",
      "description": "Directory Service cache - Gather information, statistics, initiate queries, flush the cache. dscacheutil replaces most of the functionality of thelookupd tool provided prior to OS X Leopard.",
      "syntax": "$ dscacheutil -q user -a name jdoe name: jdoe password: ******** uid: 501 gid: 501 dir: /Users/jdoe shell: /bin/csh gecos: John Doe",
      "examples": [
        "dscacheutil -q category [-a key value]",
        "dscacheutil -cachedump [-buckets] [-entries [category]]",
        "dscacheutil -configuration"
      ]
    },
    {
      "name": "dscl",
      "description": "Directory Service command line utility Create, read, and manage Directory Service data. If invoked without any commands, dscl runs in an interactive mode, reading commands from standard input. Interactive processing is terminated by the quit command. (dscl and the GUI 'Directory utility' replace the older 'NetInfo Manager')",
      "syntax": "dscl . -read /Mounts/ldaphost:\\/Users All pathnames are case-sensitive.",
      "examples": [
        "dscl [options] datasource [command]",
        "dscl . -read /Mounts/ldaphost:\\/Users",
        "dscl . -read /Users/www"
      ]
    },
    {
      "name": "dseditgroup",
      "description": "Directory Service group record manipulation tool.",
      "syntax": "dseditgroup [options]",
      "examples": [
        "dseditgroup [options] [parameters] groupname",
        "dseditgroup mygroup",
        "dseditgroup -o read -n . -u $USER mygroup"
      ]
    },
    {
      "name": "dsenableroot",
      "description": "Enable or disable the root account.",
      "syntax": "$ dsenableroot",
      "examples": [
        "dsenableroot [-d] [-u username] [-p password] [-r rootPassword]"
      ]
    },
    {
      "name": "du",
      "description": "Display disk usage statistics. Lists the file system usage for individual files, if a folder argument is passed argument, du will list usage for each sub folder in that hierarchy. If no file is specified, the current folder (hierarchy) is displayed.",
      "syntax": "du",
      "examples": [
        "du [-H | -L | -P]",
        "du",
        "du"
      ]
    },
    {
      "name": "echo",
      "description": "Display message on screen.",
      "syntax": "$ echo '^G^G^G^G'",
      "examples": [
        "echo [options]... [String]...",
        "echo \"Hello World\"",
        "echo \"$DEMO\""
      ]
    },
    {
      "name": "enable",
      "description": "Enable and disable builtin shell commands",
      "syntax": "$ enable -n test",
      "examples": [
        "enable [-adnps] [-f filename] [name ...]"
      ]
    },
    {
      "name": "env",
      "description": "List or Set environment variables and optionally run a utility.",
      "syntax": "printenv",
      "examples": [
        "The env utility accepts the - option as a synonym for -i.",
        "set - Set a variable. printenv - List environment variables. environ - user environment."
      ]
    },
    {
      "name": "eval",
      "description": "Evaluate several commands/arguments.",
      "syntax": "Syntax eval arg ...",
      "examples": [
        "eval arg ..."
      ]
    },
    {
      "name": "exec",
      "description": "Execute the specified command in place of the current shell.",
      "syntax": "find / -name \"*.png\" -exec cp {} /Users/khalid/backuppics \\;",
      "examples": [
        "exec [-cl] [-a name] [command [arguments]]"
      ]
    },
    {
      "name": "execsnoop",
      "description": "Snoop new process execution. Uses DTrace.",
      "syntax": "$ execsnoop",
      "examples": [
        "execsnoop [-a|-A|-ejhsvZ] [-c command]"
      ]
    },
    {
      "name": "exit",
      "description": "Cause the shell to exit and save history.",
      "syntax": "Syntax exit [n] Key n Set the exit status to n (default=0)",
      "examples": [
        "exit [n]",
        "exit",
        "exit"
      ]
    },
    {
      "name": "expand",
      "description": "expand tabs to spaces, and vice versa.",
      "syntax": "Syntax expand [-tabstop] [-tab1,tab2,...,tabn] file ... unexpand [-a] file ...",
      "examples": [
        "expand [-tabstop] [-tab1,tab2,...,tabn] file ...",
        "expand",
        "expand"
      ]
    },
    {
      "name": "export",
      "description": "Set an environment variable. The supplied names are marked for automatic export to the environment of subsequently executed commands.",
      "syntax": "export $MYDEPT",
      "examples": [
        "export [-fn] [name[=word]] ...",
        "export -p",
        "export $MYDEPT"
      ]
    },
    {
      "name": "expr",
      "description": "Evaluate expression. expr evaluates expression and writes the result to standard output.",
      "syntax": "$ expr //$a : '.*/\\(.*\\)'",
      "examples": [
        "expr expression",
        "expr1 | expr2",
        "expr1 & expr2"
      ]
    },
    {
      "name": "false",
      "description": "Do nothing, returning a non-zero (false) exit status",
      "syntax": "Syntax false",
      "examples": [
        "false"
      ]
    },
    {
      "name": "fc",
      "description": "Fix Command. Edit and re-execute previous commands from your command history.",
      "syntax": "fc [-nlr]",
      "examples": [
        "fc [-e ename] [-nlr] [first] [last]",
        "fc -s [pat=rep] [cmd]",
        "fc  [-nlr]"
      ]
    },
    {
      "name": "fdisk",
      "description": "Partition table manipulator for Darwin UFS/HFS/DOS.",
      "syntax": "$ sudo fdisk /dev/rdisk0",
      "examples": [
        "fdisk [-ieu] [-f mbrname] [-c cylinders] [-h heads] [-s sectors] [-S size] [-b size] disc"
      ]
    },
    {
      "name": "fg",
      "description": "Send job to foreground.",
      "syntax": "Syntax fg [jobspec ...]",
      "examples": [
        "fg [jobspec ...]",
        "fg"
      ]
    },
    {
      "name": "file",
      "description": "/usr/share/file/magic.mgc Default compiled list of magic numbers",
      "syntax": "/usr/share/file/magic.mgc",
      "examples": [
        "file  [-bcdhikLnNprsvz] [-f namefile] [-F separator] [-M magic-files] [-m magicfiles] file ...",
        "file -C [-m magicfile ]",
        "file(2) never read them."
      ]
    },
    {
      "name": "find",
      "description": "Search a folder hierarchy for filename(s) that meet a desired criteria.",
      "syntax": "$ find / \\! -name \"*.c\" -print",
      "examples": [
        "find [-H | -L | -P] [-EXdsx] [-f pathname] [pathname ...] expression",
        "find is used with cpio(1) to process files that are contained in",
        "find . -type f -exec myapp '{}' \\;"
      ]
    },
    {
      "name": "fmt",
      "description": "Simple text formatter. Reformat paragraph text, fill and join lines to produce output lines of a given width (75 characters by default).",
      "syntax": "fmt [options]",
      "examples": [
        "fmt [-cmnps] [-d chars] [-l num] [-t num]"
      ]
    },
    {
      "name": "fold",
      "description": "Wrap text to fit a specified width. Folds the contents of the specified files, or the standard input if no files are specified, breaking the lines to have maximum of 80 characters.",
      "syntax": "fold [options]",
      "examples": [
        "fold [-bs] [-w width] file ..."
      ]
    },
    {
      "name": "for",
      "description": "Loop command. The for loop executes a sequence of commands for each member in a list of items.",
      "syntax": "Syntax for name [in words ...]; do commands; done",
      "examples": [
        "for name [in words ...]; do commands; done",
        "for",
        "for (( expr1 ; expr2 ; expr3 )) ; do commands ; done"
      ]
    },
    {
      "name": "fsck",
      "description": "Filesystem consistency check and interactive repair. Journaling file systems avoid the need to run fsck - macOS Journaling is on by default in macOS 10.3 and above",
      "syntax": "fsck [options]",
      "examples": [
        "fsck -p [-f] [-m mode]",
        "fsck [-b block#] [-l maxparallel] [-q] [-y] [-n] [-m mode] [filesystem]..."
      ]
    },
    {
      "name": "fs_usage",
      "description": "Filesystem usage (process/pathname) Requires root privileges due to the kernel tracing facility it uses to operate.",
      "syntax": "$ sudo fs_usage",
      "examples": [
        "fs_usage [-e] [-w] [-f mode] [pid|cmd [pid|cmd] ...]"
      ]
    },
    {
      "name": "ftp",
      "description": "Internet File Transfer Program.",
      "syntax": "ftp://[user[:password]@]host[:port]/path[/][;type=X]",
      "examples": [
        "ftp [options] -u url file [...] [host]",
        "ftp URL types as supported by auto-fetch (with an optional target",
        "ftp.  An end of file will also terminate the session and"
      ]
    },
    {
      "name": "ftp_options",
      "description": "For basic ftp syntax see the main ftp page",
      "syntax": "ftp_options [options]",
      "examples": [
        "ftp_options",
        "ftp_options --help"
      ]
    },
    {
      "name": "function",
      "description": "Shell functions are a way to group commands for later execution using a single name for the group. They are executed just like a regular command. When the name of a shell function is used as a simple command name, the list of commands associated with that function name will be executed.",
      "syntax": "[ function ] name () { command-list; }",
      "examples": [
        "function",
        "function",
        "function"
      ]
    },
    {
      "name": "fuser",
      "description": "List process IDs of all processes that have one or more files open.",
      "syntax": "$ fuser -fu .",
      "examples": [
        "fuser [ -cfu ] file ...",
        "fuser -fu .",
        "fuser -f drag_file_here_from_finder"
      ]
    },
    {
      "name": "getfileinfo",
      "description": "Get the file attributes on files in an HFS+ directory..",
      "syntax": "getfileinfo [options]",
      "examples": [
        "getfileinfo",
        "getfileinfo --help"
      ]
    },
    {
      "name": "getopt",
      "description": "Parse positional parameters. Break up the options in a command line (for easy parsing by shell procedure), and check for legal options.",
      "syntax": "getopt [options]",
      "examples": [
        "getopt will place  `--' in the arguments at the end of the options,"
      ]
    },
    {
      "name": "getopts",
      "description": "Parse positional parameters.",
      "syntax": "Syntax getopts optstring name [args] Key optstring The option characters to be recognized",
      "examples": [
        "getopts optstring name [args]"
      ]
    },
    {
      "name": "goto",
      "description": "Jump to label and continue execution.",
      "syntax": "goto [options]",
      "examples": [
        "goto word"
      ]
    },
    {
      "name": "grep-pattern",
      "description": "search input files for lines that match a given pattern.",
      "syntax": "grep-pattern [options]",
      "examples": [
        "grep-pattern",
        "grep-pattern --help"
      ]
    },
    {
      "name": "grep",
      "description": "Search file(s) for specific text.",
      "syntax": "Syntax grep <options> \"Search String\" [filename] grep <options> [-e PATTERN] [FILE...] grep <options> [-f FILE] [FILE...] A simple example grep \"Needle in a Haystack\" /etc/*",
      "examples": [
        "grep <options> \"Search String\" [filename]",
        "grep <options> [-e PATTERN] [FILE...]",
        "grep <options> [-f FILE] [FILE...]"
      ]
    },
    {
      "name": "gzip",
      "description": "Compress or decompress files",
      "syntax": "gzip -c file1 > foo.gz gzip -c file2 >> foo.gz",
      "examples": [
        "gzip [ -acdfhlLnNrtvV19 ] [-S suffix] [ name ...  ]",
        "gzip.",
        "gzip -c file1 > foo.gz"
      ]
    },
    {
      "name": "halt",
      "description": "Stop and restart the operating system. When the system is halted with the halt command, the system is powered off.",
      "syntax": "$ sudo halt",
      "examples": [
        "halt [-lnqu]"
      ]
    },
    {
      "name": "hash",
      "description": "Refresh the cached/remembered location of commands. Logging out and in will refresh this automatically, but if you have just updated or reinstalled a package you might want to force an update.",
      "syntax": "help hash",
      "examples": [
        "hash [-lr] [-p filename] [-dt] [name]"
      ]
    },
    {
      "name": "hdiutil",
      "description": "Manipulate disk images (attach, verify, burn, etc).",
      "syntax": "$ hdiutil attach /path/to/diskimage.dmg",
      "examples": [
        "hdiutil verb [options]",
        "hdiutil uses the DiskImages framework to manipulate disk images.  Common",
        "hdiutil attach attempts to intelligently"
      ]
    },
    {
      "name": "head",
      "description": "Display the first lines of a file",
      "syntax": "Syntax head [-n count] [file ...] head [-c bytes] [file ...]",
      "examples": [
        "head [-n count] [file ...]",
        "head [-c bytes] [file ...]"
      ]
    },
    {
      "name": "history",
      "description": "Command Line history.",
      "syntax": "$ history > cmds.txt",
      "examples": [
        "history [n]",
        "history -c",
        "history -d offset"
      ]
    },
    {
      "name": "hostname",
      "description": "Print or Set (temporarily) the name of current host system.",
      "syntax": "hostname",
      "examples": [
        "hostname [-fs] [name-of-host]",
        "hostname"
      ]
    },
    {
      "name": "iconv",
      "description": "Convert encoding of a file from one character set encoding to another.",
      "syntax": "$ iconv -f ISO-8859-1 -t UTF-8 < input.txt > output.txt",
      "examples": [
        "iconv [Option...] -f fromCode -t toCode inputfile...",
        "iconv -l"
      ]
    },
    {
      "name": "id",
      "description": "User identity - display the user and group names (and IDs) The groups utility has been obsoleted by id, and is equivalent to `id -Gn [user]'",
      "syntax": "id -Gn [user]",
      "examples": [
        "id [user]",
        "id -A",
        "id -G [-n] [user]"
      ]
    },
    {
      "name": "if",
      "description": "Conditionally perform a command.",
      "syntax": "if",
      "examples": [
        "if test-commands; then",
        "if test-commands; then consequent-commands; fi",
        "if"
      ]
    },
    {
      "name": "ifconfig",
      "description": "Configure network interface parameters. The ifconfig utility is used to assign an address to a network interface and/or configure network interface parameters.",
      "syntax": "$ ifconfig en0 | grep -o -E '([[:xdigit:]]{1,2}:){5}[[:xdigit:]]{1,2}'",
      "examples": [
        "ifconfig [-L] [-m] [-r] interface [create] [address_family] [address [dest_address]] [parameters]",
        "ifconfig interface destroy",
        "ifconfig -a [-L] [-d] [-m] [-r] [-u] [-v] [address_family]"
      ]
    },
    {
      "name": "info",
      "description": "Display Help information.",
      "syntax": "info [options]",
      "examples": [
        "info [OPTION]... [MENU-ITEM...]",
        "info       Help Menu",
        "info emacs"
      ]
    },
    {
      "name": "install",
      "description": "Install binaries. The file(s) are copied to the target file or directory. If the destination is a directory, then the file is copied into directory with its original filename. If the target file already exists, it is either renamed to file.old if the -b option is given or overwritten if permissions allow. An alternate backup suffix may be specified via the -B option's argument.",
      "syntax": "install [options]",
      "examples": [
        "install [-bCcMpSsv] [-B suffix] [-f flags]",
        "install [-bCcMpSsv] [-B suffix] [-f flags]",
        "install -d [-v] [-g group] [-m mode]"
      ]
    },
    {
      "name": "iosnoop",
      "description": "Snoop I/O events as they occur. Uses DTrace.",
      "syntax": "$ iosnoop",
      "examples": [
        "iosnoop [-a|-A|-Deghinostv] [-d device] [-f filename] [-m mount_point]"
      ]
    },
    {
      "name": "iostat",
      "description": "Report Central Processing Unit (CPU) statistics and i/o statistics for devices, partitions and network filesystems (NFS).",
      "syntax": "$ iostat -w 1 disk0 disk2",
      "examples": [
        "iostat [-CUdKIoT?] [-c count] [-n devs] [-w wait] [drives]",
        "iostat to display specific drives, their names may be supplied on"
      ]
    },
    {
      "name": "ipconfig",
      "description": "View and control IP configuration state.",
      "syntax": "$ ipconfig getoption en0 router 192.168.0.1",
      "examples": [
        "$ ipconfig getoption en0 router 192.168.0.1"
      ]
    },
    {
      "name": "jobs",
      "description": "List active jobs.",
      "syntax": "help jobs",
      "examples": [
        "jobs [-lnprs] [ jobspec ... ]",
        "jobs -x command [ args ... ]"
      ]
    },
    {
      "name": "join",
      "description": "Relational database operator. Performs an `equality join' on the specified files and writes the result to the standard output. The `join field' is the field in each file by which the files are compared. The first field in each line is used by default.",
      "syntax": "join [options]",
      "examples": [
        "join [-a file_number | -v file_number]"
      ]
    },
    {
      "name": "kextfind",
      "description": "Find kernel extensions (kexts) based on a variety of criteria and print information.",
      "syntax": "kextfind [options]",
      "examples": [
        "kextfind [options] [--] [kext_or_directory ...] [query]",
        "kextfind -case-insensitive -not -bundle-id -substring 'com.apple.' -print",
        "kextfind \\( -nonloadable -or -warnings \\) -print -print-diagnostics"
      ]
    },
    {
      "name": "kextstat",
      "description": "Display status of loaded kernel extensions (kexts).",
      "syntax": "$ kextstat | grep -v com.apple",
      "examples": [
        "kextstat [-a] [-h] [-k] [-l] [-b identifier] ..."
      ]
    },
    {
      "name": "kextunload",
      "description": "Find kernel extensions (kexts) based on a variety of criteria and print information.",
      "syntax": "$ sudo kextunload /System/Library/Extensions/ICEKey.kext",
      "examples": [
        "kextunload [options] [--] [kext ...]",
        "kextunload prints only warnings and errors.  You can specify a"
      ]
    },
    {
      "name": "kickstart",
      "description": "/System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources",
      "syntax": "Syntax kickstart option(s)",
      "examples": [
        "kickstart option(s)",
        "kickstart -uninstall -files -install -package RD_Admin_Install.pkg -restart -console",
        "kickstart -install -package RD_Client_Install.pkg -restart -agent"
      ]
    },
    {
      "name": "kill",
      "description": "Kill a process by specifying its PID, either via a signal or forced termination.",
      "syntax": "kill",
      "examples": [
        "$ kill 1293 [2]+ Terminated MyProgram",
        "$ kill -9 1293"
      ]
    },
    {
      "name": "killall",
      "description": "Kill processes by name.",
      "syntax": "$ killall ss64",
      "examples": [
        "killall [-delmsvz] [-help] [-u user] [-t tty] [-c procname] [-SIGNAL] [procname ...]"
      ]
    },
    {
      "name": "last",
      "description": "Indicate the last login of users and ttys.",
      "syntax": "last [options]",
      "examples": [
        "last [-n] [-h host] [-t tty] [user ...]"
      ]
    },
    {
      "name": "launchctl",
      "description": "Interfaces with launchd to load, unload daemons/agents and generally control launchd. launchctl supports taking subcommands on the command line, interactively or even redirected from standard input.",
      "syntax": "$ sudo launchctl list",
      "examples": [
        "launchctl [subcommand [arguments ...]]",
        "launchctl will automatically kill the snapshot instance when the",
        "launchctl to restrict which jobs are loaded into which"
      ]
    },
    {
      "name": "less",
      "description": "Page through text one screenful at a time, search through output. less provides more emulation plus extensive enhancements such as allowing backward paging through a file as well as forward movement.",
      "syntax": "less",
      "examples": [
        "less",
        "less [-[+]aBcCdeEfFgGiIJmMnNqQrRsSuUVwWX~]",
        "less -?"
      ]
    },
    {
      "name": "less_options",
      "description": "Options, Line editing and Language support for the Less command.",
      "syntax": "less_options [options]",
      "examples": [
        "less_options",
        "less_options --help"
      ]
    },
    {
      "name": "let",
      "description": "Evaluate expression.",
      "syntax": "Syntax let expression [expression]",
      "examples": [
        "let expression [expression]",
        "let",
        "let"
      ]
    },
    {
      "name": "lipo",
      "description": "Create or operate on a universal file: convert a universal binary to a single architecture file, or vice versa.",
      "syntax": "lipo [options]",
      "examples": [
        "lipo [input_file]... [-arch arch_type input_file]... [-arch_blank arch_type]...",
        "lipo Stickies.app/Contents/MacOS/Stickies -info"
      ]
    },
    {
      "name": "ln",
      "description": "Make hard links and symbolic links. `ln' creates a new directory entry (linked file) with the same modes as the original file. It is useful for maintaining multiple copies of a file in many places at once without using up storage for the copies; instead, a link 'points' to the original copy. How a link 'points' to a file is one of the differences between a hard and symbolic link.",
      "syntax": "ln",
      "examples": [
        "ln [-fhinsv] OriginalSourceFile [NewLinkFile]",
        "ln [-fhinsv] OriginalSourceFile... NewLinkFile",
        "ln"
      ]
    },
    {
      "name": "local",
      "description": "Set a local (function) variable.",
      "syntax": "Syntax local [option] [name[=value] ...]",
      "examples": [
        "local [option] [name[=value] ...]",
        "local",
        "local"
      ]
    },
    {
      "name": "locate",
      "description": "Database /var/db/locate.database Script to update database /usr/libexec/locate.updatedb",
      "syntax": "Syntax locate pattern",
      "examples": [
        "$ locate foo",
        "$ locate '*.jpg'"
      ]
    },
    {
      "name": "login",
      "description": "Log into the computer. If no user is specified, or if password authentication of the user fails, login prompts for a user name.",
      "syntax": "/etc/nologin",
      "examples": [
        "login [-fp] [-h hostname] [user]",
        "login -f [-lpq] [-h hostname] [user [prog [args...]]]"
      ]
    },
    {
      "name": "logname",
      "description": "Print current login name",
      "syntax": "SYNTAX logname",
      "examples": [
        "logname"
      ]
    },
    {
      "name": "logout",
      "description": "A 'sub-shell' is a shell created after login, either by loading a new shell or opening a window with a graphics interface. A sub-shell usually will not accept the command `logout' to terminate, you must use 'exit' or ^D. When you terminate a sub-shell, you are returned to the process or shell that created it.",
      "syntax": "SYNTAX logout [n]",
      "examples": [
        "logout [n]"
      ]
    },
    {
      "name": "look",
      "description": "Display lines beginning with a given string. As look performs a binary search, the lines in file must be sorted.",
      "syntax": "look",
      "examples": [
        "look [-df] [-t termchar] string [file ...]",
        "look",
        "look"
      ]
    },
    {
      "name": "lp",
      "description": "Print files",
      "syntax": "lp -n 2 filename",
      "examples": [
        "lp [  -E  ]  [ -U username ] [ -c ] [ -d destination[/instance] ] [ -h hostname[:port] ]",
        "lp [ -E ] [ -U username ] [ -c ] [ -h hostname[:port] ] [ -i job-id ]",
        "lp -n 2 filename"
      ]
    },
    {
      "name": "lpc",
      "description": "Line printer control program",
      "syntax": "lpc [options]",
      "examples": [
        "lpc [ command [ parameter(s) ] ]"
      ]
    },
    {
      "name": "lpr",
      "description": "Print files",
      "syntax": "lpr [options]",
      "examples": [
        "lpr  [-E]  [-H server[:port]]  [-U  username] [-P destination[/instance] ]"
      ]
    },
    {
      "name": "lprm",
      "description": "Cancel print jobs that have been queued for printing.",
      "syntax": "lprm [options]",
      "examples": [
        "lprm [ -E ] [ - ] [ -P destination ] [ job ID(s) ]"
      ]
    },
    {
      "name": "lpstat",
      "description": "Printer status information, displays status information about the current classes, jobs, and printers. When run with no arguments, lpstat will list jobs queued by the user.",
      "syntax": "lpstat [options]",
      "examples": [
        "lpstat  [  -E  ] [ -h server ] [ -l ]"
      ]
    },
    {
      "name": "ls-env",
      "description": "The following environment variables affect the execution of ls:",
      "syntax": "ls-env [options]",
      "examples": [
        "ls-env",
        "ls-env --help"
      ]
    },
    {
      "name": "ls",
      "description": "List directory contents.",
      "syntax": "ls-F",
      "examples": [
        "ls [-Option(s)] [file ...]",
        "ls-F [-Option(s)] [file ...]",
        "ls-F"
      ]
    },
    {
      "name": "lsbom",
      "description": "List the contents of an installer's bom (bill of materials) file. This can be used to find out what files an installer will add/replace in your system before running it. It can also list details of a previous install.",
      "syntax": "lsbom [options]",
      "examples": [
        "lsbom [options] [--arch archVal] [-p parameters] bom ...",
        "lsbom bomfile       list the contents of bomfile",
        "lsbom -s bomfile       list only the paths of the contents of the bomfile"
      ]
    },
    {
      "name": "lsof",
      "description": "List open files.",
      "syntax": "lsof",
      "examples": [
        "lsof [options] [names]",
        "lsof reports them as errors and exits with a non-zero return code.",
        "lsof"
      ]
    },
    {
      "name": "lsregister",
      "description": "Reset the Launch Services database.",
      "syntax": "Syntax lsregister: [Options] [path...] [-apps domain[,domain]...] [-libs domain[,domain]...] [-all domain[,domain]...]",
      "examples": [
        "lsregister: [Options] [path...]",
        "lsregister",
        "lsregister"
      ]
    },
    {
      "name": "mdfind",
      "description": "These can be included in the query expression to limit the type of documents returned:",
      "syntax": "$ mdfind image",
      "examples": [
        "mdfind [-live] [-count] [-onlyin directory] query"
      ]
    },
    {
      "name": "mdls",
      "description": "List the metadata attributes for a specified file.",
      "syntax": "$ mdls -n kMDItemCreator /Users/fred/Pictures/Untitled.pxm",
      "examples": [
        "mdls [-name attributeName] [-raw [-nullMarker markerString]] file ..."
      ]
    },
    {
      "name": "mdutil",
      "description": "Manage the metadata stores used by Spotlight.",
      "syntax": "$ mdutil -s /",
      "examples": [
        "mdutil [-pEsav] [-i on | off] volume ..."
      ]
    },
    {
      "name": "mkdir",
      "description": "Make Directory (Create folders)",
      "syntax": "Examples mkdir MyFolder MyFolder/SubFolder \"My Other Folder\"",
      "examples": [
        "mkdir [-pv] [-m mode] folder...",
        "mkdir MyFolder MyFolder/SubFolder \"My Other Folder\""
      ]
    },
    {
      "name": "mkfifo",
      "description": "Make FIFOs (named pipes) Creates the fifos requested, in the order specified, using mode 0666 modified by the current umask.",
      "syntax": "mkfifo [options]",
      "examples": [
        "mkfifo [-m mode] fifo_name ..."
      ]
    },
    {
      "name": "mkfile",
      "description": "Create a file.",
      "syntax": "Example mkfile -n ~/newfile.txt",
      "examples": [
        "mkfile [ -nv ] size[b|k|m|g] filename ...",
        "mkfile -n ~/newfile.txt"
      ]
    },
    {
      "name": "mktemp",
      "description": "Make a temporary file.",
      "syntax": "$ SCRATCH=$(mktemp -t tmp.XXXXXXXXXX)",
      "examples": [
        "mktemp [-d] [-q] [-t prefix] [-u] template ...",
        "mktemp [-d] [-q] [-u] -t prefix"
      ]
    },
    {
      "name": "more",
      "description": "Page through text one screenful at a time, less provides more emulation and extensive enhancements.",
      "syntax": "more",
      "examples": [
        "more [-dlfpcsu] [-num] [+/ pattern] [+ linenum] [file ...]",
        "more"
      ]
    },
    {
      "name": "mount",
      "description": "mount a file system All files accessible in a Unix system are arranged in one big tree, the file hierarchy, rooted at /. These files can be spread out over several devices. The mount command serves to attach the file system found on some device to the big file tree. The system maintains a list of currently mounted file systems. If no arguments are given to mount, this list is printed.",
      "syntax": "mount [options]",
      "examples": [
        "mount [-adfruvw] [-t ufs | lfs | external_type]",
        "mount [-dfruvw] special | node",
        "mount [-dfruvw] [-o options] [-t ufs | lfs | external_type] special node"
      ]
    },
    {
      "name": "mv",
      "description": "Move files and/or folders.",
      "syntax": "mv",
      "examples": [
        "mv [options] source target",
        "mv"
      ]
    },
    {
      "name": "nano",
      "description": "Simple text editor, in the style of the Pine Composer. Nano's ANOther editor, an enhanced free Pico clone. Commands are displayed at the bottom of the screen, and context- sensitive help is provided. nano also implements some missing (or disabled by default) features in Pico, such as \"search and replace\" and \"go to line and column number\".",
      "syntax": "nano [options]",
      "examples": [
        "nano [OPTIONS] [[+LINE,COLUMN] FILE]...",
        "nanorc files; allow suspending; allow a file to be appended to, prepended to, or saved under a"
      ]
    },
    {
      "name": "nc",
      "description": "Read and write data across networks - arbitrary TCP and UDP connections and listens.",
      "syntax": "# On a computer A with IP 10.10.10.10 we listen on port 64 $ nc -l -p 64",
      "examples": [
        "nc [-46AcDCdhklnrtUuvz] [-b boundif] [-i interval] [-p source_port]",
        "nc host.example.com -p 64"
      ]
    },
    {
      "name": "net",
      "description": "Manage network resources. net is part of the Samba suite.",
      "syntax": "net [options]",
      "examples": [
        "net {ads|rap|rpc} options...",
        "net  groupmap  add  {rid=int|sid=string}   unixgroup=string   [type={do-",
        "net groupmap delete {ntgroup=string|sid=SID}"
      ]
    },
    {
      "name": "nice",
      "description": "Run a command with modified priority.",
      "syntax": "Syntax nice [-n increment] Command [Arg]... Key -n increment A positive or negative decimal integer used to modify the system scheduling priority of command",
      "examples": [
        "nice [-n increment] Command [Arg]..."
      ]
    },
    {
      "name": "nl",
      "description": "The page you’re looking for can’t be found. Try the search box above or return to the home page.",
      "syntax": "nl [options]",
      "examples": [
        "nl",
        "nl --help"
      ]
    },
    {
      "name": "nohup",
      "description": "Run a command immune to hangups, runs the given Command with hangup signals (SIGHUP) ignored, so that the command can continue running in the background after you log out.",
      "syntax": "Syntax nohup [Command [Arg]...]",
      "examples": [
        "nohup [Command [Arg]...]",
        "nohup \"$@\" >>~/launch/${logfilename}_stdout.log 2>>~/launch/${logfilename}_stderr.log &"
      ]
    },
    {
      "name": "ntfs-util",
      "description": "NTFS file system utility, supports the mounting, probing, and unmounting of NTFS file systems.",
      "syntax": "ntfs-util [options]",
      "examples": [
        "ntfs-util",
        "ntfs-util --help"
      ]
    },
    {
      "name": "nvram",
      "description": "Manipulate firmware variables.",
      "syntax": "nvram",
      "examples": [
        "nvram [ -p ] [ -f filename ] [ -d name ] [ -c ] [ name [= value ]] ...",
        "nvram"
      ]
    },
    {
      "name": "onintr",
      "description": "On Interupt. Control the action of a shell interrupt.",
      "syntax": "onintr [options]",
      "examples": [
        "onintr -",
        "onintr label"
      ]
    },
    {
      "name": "open",
      "description": "Open a file or folder. The open command opens a file (or a folder or URL), just as if you had double-clicked the file's icon.",
      "syntax": "$ open .",
      "examples": [
        "open [options] [-b bundle_identifier] [-a application] file ...",
        "open it.  Pass a full header name (such as NSView.h) for increased performance."
      ]
    },
    {
      "name": "opensnoop",
      "description": "Snoop file opens as they occur (Dtrace).",
      "syntax": "$ sudo opensnoop",
      "examples": [
        "opensnoop [-a|-A|-ceghsvxZ] [-f pathname] [-n name] [-p PID]",
        "opensnoop will run forever until Ctrl-C is hit"
      ]
    },
    {
      "name": "openssl",
      "description": "OpenSSL command line tool.",
      "syntax": "$ openssl sha1 /Volumes/Install\\ macOS\\ Sierra\\ 12.5.03/Install\\ macOS\\ Sierra.app/Contents/SharedSupport/InstallESD.dmg",
      "examples": [
        "openssl command [ command_opts ] [ command_args ]",
        "openssl [ list-standard-commands | list-message-digest-commands | list-cipher-commands ]",
        "openssl no-XXX [ arbitrary options ]"
      ]
    },
    {
      "name": "osacompile",
      "description": "Compile AppleScripts and other OSA language scripts.",
      "syntax": "$ osacompile -o myNewApp.app myScript.scpt",
      "examples": [
        "osacompile [-l language] [-e command] [-o name] [-d] [-r type:id]"
      ]
    },
    {
      "name": "osascript",
      "description": "Execute AppleScripts and other OSA language scripts. Executes the given script file, or standard input if none is given. Scripts can be plain text or compiled scripts. osascript was designed for use with AppleScript, but will work with any Open Scripting Architecture (OSA) language.",
      "syntax": "$ osascript -e 'tell app \"Safari\" to activate'",
      "examples": [
        "osascript [-l language] [-e command] [-s flags] [programfile]",
        "osascript normally prints its results in human-readable form:",
        "osascript normally prints script errors to stderr, so downstream"
      ]
    },
    {
      "name": "passwd",
      "description": "Modify a user password. First, the user is prompted for their current password. If the current password is correctly typed, a new password is requested. The new password must be entered twice to avoid typing errors.",
      "syntax": "sudo passwd -u root",
      "examples": [
        "passwd [-i infosystem] [-l location] [-u authname] [name]"
      ]
    },
    {
      "name": "paste",
      "description": "Merge corresponding or subsequent lines of files",
      "syntax": "$ paste file1.txt file2.txt > result.txt",
      "examples": [
        "paste [-s] [-d list] file ...",
        "paste -s -d '\\t\\n' myfile"
      ]
    },
    {
      "name": "pbcopy",
      "description": "Copy data from STDIN to the clipboard.",
      "syntax": "Syntax pbcopy [-pboard {general | ruler | find | font}] Key -pboard Specify a pasteboard to copy to. By default the general pasteboard.",
      "examples": [
        "pbcopy  [-pboard {general | ruler | find | font}]"
      ]
    },
    {
      "name": "pbpaste",
      "description": "Paste data from the clipboard to STDOUT.",
      "syntax": "$ pbpaste > ~/ss64.txt",
      "examples": [
        "pbpaste [-pboard {general | ruler  |  find  |  font}]"
      ]
    },
    {
      "name": "pbs",
      "description": "General helper tool.",
      "syntax": "$ /System/Library/CoreServices/pbs \"en-US\"",
      "examples": [
        "pbs [-debug] [-dump] [-dump_cache] [-dump_pboard] [-dump_userdefs]",
        "pbs caches Services information in its userdefs to avoid scanning the entire system every boot."
      ]
    },
    {
      "name": "pico",
      "description": "Simple text editor, in the style of the Pine Composer. commands are displayed at the bottom of the screen, and context- sensitive help is provided. As characters are typed they are immediately inserted into the text.",
      "syntax": "pico [options]",
      "examples": [
        "pico [options] [file]"
      ]
    },
    {
      "name": "ping",
      "description": "Test a network connection.",
      "syntax": "$ ping -i 5 example.com",
      "examples": [
        "ping [-AaCDdfnoQqRrv] [-b boundif] [-c count] [-G sweepmaxsize] [-g sweepminsize]",
        "ping [-AaDdfLnoQqRrv] [-b boundif] [-c count] [-I iface]"
      ]
    },
    {
      "name": "pkill",
      "description": "Kill processes by a full or partial name.",
      "syntax": "pkill",
      "examples": [
        "pkill [-signal] [-ILafilnovx] [-F pidfile] [-G gid] [-P ppid] [-U uid]",
        "pkill.",
        "pkill"
      ]
    },
    {
      "name": "pmset",
      "description": "Power management settings.",
      "syntax": "man pmset",
      "examples": [
        "pmset -g [custom | live | cap | sched | ups | ps | ...full Getting list below]",
        "pmset -u [haltlevel percent] [haltafter minutes] [haltremain minutes]",
        "pmset [-a | -b | -c | -u] [setting value] [...]"
      ]
    },
    {
      "name": "popd",
      "description": "Restore the previous value of the current directory.",
      "syntax": "help popd",
      "examples": [
        "popd [+N | -N] [-n]"
      ]
    },
    {
      "name": "pr",
      "description": "Printing and pagination filter for text files. When multiple input files are specified, each is read, formatted, and written to standard output.",
      "syntax": "pr [options]",
      "examples": [
        "pr [options] [file ...]"
      ]
    },
    {
      "name": "printenv",
      "description": "List the names and values of all environment variables or, with name, the value of the environment variable name.",
      "syntax": "Syntax printenv [name] Options name The name of the environment variable",
      "examples": [
        "printenv [name]"
      ]
    },
    {
      "name": "printf",
      "description": "Format and print data. Write the formatted arguments to the standard output under the control of the format.",
      "syntax": "Syntax printf format [arguments ...]",
      "examples": [
        "printf format [arguments ...]",
        "printf \"%d\\n\" 5",
        "printf \"%f\\n\" 5"
      ]
    },
    {
      "name": "ps",
      "description": "Process status, information about processes running in memory.",
      "syntax": "ps [options]",
      "examples": [
        "ps [-aCcefhjlMmrSTuvwx] [-O fmt] [-o fmt] [-p pid] [-t tty] [-U username]",
        "ps [-L]"
      ]
    },
    {
      "name": "ps_keywords",
      "description": "Keywords for the ps command. Multiple keywords can be space or comma separated.",
      "syntax": "ps_keywords [options]",
      "examples": [
        "ps_keywords",
        "ps_keywords --help"
      ]
    },
    {
      "name": "pushd",
      "description": "Save the value of the current directory.",
      "syntax": "help pushd",
      "examples": [
        "pushd [-n] [dir]      pushd [-n] [+N] [-N]"
      ]
    },
    {
      "name": "pwd",
      "description": "Print Working Directory - the absolute pathname of the current folder (i.e. it tells you where you are).",
      "syntax": "Syntax pwd [-LP] Key -P The pathname printed contains no symbolic links -L The pathname printed can contain symbolic links.",
      "examples": [
        "pwd [-LP]",
        "pwd"
      ]
    },
    {
      "name": "quota",
      "description": "Display disk usage and limits.",
      "syntax": "quota [options]",
      "examples": [
        "quota [-g] [-u] [-v | -q]",
        "quota [-u] [-v | -q] user",
        "quota [-g] [-v | -q] group"
      ]
    },
    {
      "name": "rcp",
      "description": "Copy files between machines. Each file or directory argument is either a remote file name of the form `rname@rhost:path', or a local file name (containing no `:' characters, or a `/' before any `:'s).",
      "syntax": "rcp [options]",
      "examples": [
        "rcp [-Kpx] [-k realm] file1 file2",
        "rcp [-Kprx] [-k realm] file... directory"
      ]
    },
    {
      "name": "read",
      "description": "Read one line from the standard input, (or from a file) and assign the word(s) to variable name(s).",
      "syntax": "$ read MYVAR $ echo You entered $MYVAR",
      "examples": [
        "read [-ers] [-a aname] [-p prompt] [-t timeout]"
      ]
    },
    {
      "name": "readonly",
      "description": "Mark one or more variables or functions as read-only.",
      "syntax": "readonly [options]",
      "examples": [
        "readonly [-apf] [name[=word] ...]"
      ]
    },
    {
      "name": "reboot",
      "description": "Stop and restart the operating system. When the system is halted with the halt command, the system is powered off.",
      "syntax": "reboot [options]",
      "examples": [
        "reboot [-lnq]"
      ]
    },
    {
      "name": "reportcrash",
      "description": "Enable or Disable crash reporting via launchtl.",
      "syntax": "reportcrash [options]",
      "examples": [
        "reportcrash",
        "reportcrash --help"
      ]
    },
    {
      "name": "return",
      "description": "Exit a function with the return value specified by n.",
      "syntax": "Syntax return [n] Key n The value to return",
      "examples": [
        "return [n]"
      ]
    },
    {
      "name": "rev",
      "description": "Reverse lines of a file.",
      "syntax": "Syntax: rev [file]",
      "examples": [
        "rev [file]"
      ]
    },
    {
      "name": "rm",
      "description": "Delete files and folders.",
      "syntax": "rm \"$filename\"",
      "examples": [
        "rm [options] file ...",
        "rm \"$filename\"",
        "rm -rf /$variable"
      ]
    },
    {
      "name": "rmdir",
      "description": "Remove Directory (Delete folders)",
      "syntax": "EXAMPLES To delete all these folders: MyFolder/ MyFolder/SubFolder My Other Folder/ Use the command rmdir MyFolder/SubFolder MyFolder \"My Other Folder\"",
      "examples": [
        "rmdir [-p] folder ...",
        "rmdir MyFolder/SubFolder MyFolder \"My Other Folder\""
      ]
    },
    {
      "name": "rsync",
      "description": "Remote file copy (Synchronize file trees)",
      "syntax": "You use rsync in the same way you use rcp. You must specify a source and a destination, one of which can be remote. Perhaps the best way to explain the syntax is some examples: rsync *.c foo:Source/ This would transfer all files matching the pattern *.c from the current directory to the directory Source on the machine foo. If any of the files already exist on the remote system then the rsync remote-update protocol is used to update the file by sending only the differences. See the tech report fo",
      "examples": [
        "rsync [options] Source [Source...] Destination",
        "rsync -rlpt --stats  Desktop /volumes/LaCieDrive/mybackups",
        "rsync://[User@]Host[:Port]/Source_or_Destination_directory"
      ]
    },
    {
      "name": "rsync_options",
      "description": "Remote file copy (Synchronize file trees)",
      "syntax": "rsync_options [options]",
      "examples": [
        "rsync_options",
        "rsync_options --help"
      ]
    },
    {
      "name": "say",
      "description": "Convert text to audible speech. This tool uses the Speech Synthesis manager to convert input text to audible speech and either play it through the sound output device chosen in System Preferences or save it to an AIFF file.",
      "syntax": "say \"Hello world\"",
      "examples": [
        "say [-v voice] [-o out.aiff | -n name:port ] [-f file.in | string ...]",
        "say -v Agnes \"Isn't it nice to have a computer that will talk to you?\"",
        "say -v Albert \"I have a frog in my throat. No, I mean a real frog!\""
      ]
    },
    {
      "name": "sched",
      "description": "Schedule a command to run at a later time.",
      "syntax": "$ sched 11:00 echo It\\'s eleven o\\'clock.",
      "examples": [
        "$ sched 11:00 echo It\\'s eleven o\\'clock.",
        "$ sched 5pm set prompt='[%h] It\\'s after 5; go home: $'",
        "$ sched +2:15 /usr/lib/uucp/uucico -r1 -sother"
      ]
    },
    {
      "name": "screen",
      "description": "Multiplex a physical terminal between several processes (typically interactive shells).",
      "syntax": "exec screen",
      "examples": [
        "screen [ -options ] [ cmd [args] ]",
        "screen -r [[pid.]tty[.host]]",
        "screen -r sessionowner/[[pid.]tty[.host]]"
      ]
    },
    {
      "name": "screencapture",
      "description": "Capture an image of the whole, or part of the screen.",
      "syntax": "defaults write com.apple.screencapture disable-shadow -bool true killall SystemUIServer",
      "examples": [
        "screencapture [options] [file]"
      ]
    },
    {
      "name": "scselect",
      "description": "Switch between network \"locations\" created in the Network preference pane.",
      "syntax": "scselect [options]",
      "examples": [
        "scselect [-n] [new-location-name]"
      ]
    },
    {
      "name": "scutil",
      "description": "Manage system configuration parameters.",
      "syntax": "scutil --get HostName",
      "examples": [
        "scutil --prefs [preference-file]",
        "scutil -r [-W] { nodename | address | local-address remote-address }",
        "scutil -w dynamic-store-key [-t timeout]"
      ]
    },
    {
      "name": "sdiff",
      "description": "Merge two files interactively. (Show differences) with output to outfile.",
      "syntax": "sdiff [options]",
      "examples": [
        "sdiff -o outfile [options] from-file to-file",
        "sdiff."
      ]
    },
    {
      "name": "security-authorize",
      "description": "“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller",
      "syntax": "security-authorize [options]",
      "examples": [
        "security-authorize",
        "security-authorize --help"
      ]
    },
    {
      "name": "security-authorizedb",
      "description": "“Even in the common affairs of life, in love, friendship, and marriage, how little security have we when we trust our happiness in the hands of others!” ~ William Hazlitt (On Living to One's-Self)",
      "syntax": "security-authorizedb [options]",
      "examples": [
        "security-authorizedb",
        "security-authorizedb --help"
      ]
    },
    {
      "name": "security-cert-verify",
      "description": "“Even in the common affairs of life, in love, friendship, and marriage, how little security have we when we trust our happiness in the hands of others!” ~ William Hazlitt (On Living to One's-Self)",
      "syntax": "security-cert-verify [options]",
      "examples": [
        "security-cert-verify",
        "security-cert-verify --help"
      ]
    },
    {
      "name": "security-cert",
      "description": "“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller",
      "syntax": "security-cert [options]",
      "examples": [
        "security-cert",
        "security-cert --help"
      ]
    },
    {
      "name": "security-cms",
      "description": "“The man who looks for security, even in the mind, is like a man who would chop off his limbs in order to have artificial ones which will give him no pain or trouble” ~ Henry Miller (The Rosy Crucifixion I )",
      "syntax": "security-cms [options]",
      "examples": [
        "security-cms",
        "security-cms --help"
      ]
    },
    {
      "name": "security-db",
      "description": "“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller",
      "syntax": "security-db [options]",
      "examples": [
        "security-db",
        "security-db --help"
      ]
    },
    {
      "name": "security-delete-cert",
      "description": "“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller",
      "syntax": "security-delete-cert [options]",
      "examples": [
        "security-delete-cert",
        "security-delete-cert --help"
      ]
    },
    {
      "name": "security-execute-leaks",
      "description": "“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller",
      "syntax": "security-execute-leaks [options]",
      "examples": [
        "security-execute-leaks",
        "security-execute-leaks --help"
      ]
    },
    {
      "name": "security-export",
      "description": "“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller",
      "syntax": "security-export [options]",
      "examples": [
        "security-export",
        "security-export --help"
      ]
    },
    {
      "name": "security-find-cert",
      "description": "“Even in the common affairs of life, in love, friendship, and marriage, how little security have we when we trust our happiness in the hands of others!” ~ William Hazlitt (On Living to One's-Self)",
      "syntax": "security-find-cert [options]",
      "examples": [
        "security-find-cert",
        "security-find-cert --help"
      ]
    },
    {
      "name": "security-find-id",
      "description": "“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller",
      "syntax": "security-find-id [options]",
      "examples": [
        "security-find-id",
        "security-find-id --help"
      ]
    },
    {
      "name": "security-id",
      "description": "The identity is located by searching the specified keychain(s) for a certificate whose common name contains the given identity string. If no keychains are specified to search, the default search list is used. Different identity preferences can be set for individual key usages. You can differentiate between two identities which contain the same string by providing a SHA-1 hash of the certificate (in addition to, or instead of, the name.) PARTIAL PATHS AND WILDCARDS Prior to 10.5.4, identity prefe",
      "syntax": "security-id [options]",
      "examples": [
        "security-id",
        "security-id --help"
      ]
    },
    {
      "name": "security-internet",
      "description": "“The man who looks for security, even in the mind, is like a man who would chop off his limbs in order to have artificial ones which will give him no pain or trouble” ~ Henry Miller (The Rosy Crucifixion I )",
      "syntax": "security-internet [options]",
      "examples": [
        "security-internet",
        "security-internet --help"
      ]
    },
    {
      "name": "security-keychain-settings",
      "description": "Examples",
      "syntax": "security-keychain-settings [options]",
      "examples": [
        "security-keychain-settings",
        "security-keychain-settings --help"
      ]
    },
    {
      "name": "security-keychain",
      "description": "“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller",
      "syntax": "security-keychain [options]",
      "examples": [
        "security-keychain",
        "security-keychain --help"
      ]
    },
    {
      "name": "security-keypair",
      "description": "“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller",
      "syntax": "security-keypair [options]",
      "examples": [
        "security-keypair",
        "security-keypair --help"
      ]
    },
    {
      "name": "security-password-mgt",
      "description": "“The man who looks for security, even in the mind, is like a man who would chop off his limbs in order to have artificial ones which will give him no pain or trouble” ~ Henry Miller (The Rosy Crucifixion I )",
      "syntax": "security-password-mgt [options]",
      "examples": [
        "security-password-mgt",
        "security-password-mgt --help"
      ]
    },
    {
      "name": "security-password",
      "description": "“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller",
      "syntax": "security-password [options]",
      "examples": [
        "security-password",
        "security-password --help"
      ]
    },
    {
      "name": "security-settings",
      "description": "“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller",
      "syntax": "security-settings [options]",
      "examples": [
        "security-settings",
        "security-settings --help"
      ]
    },
    {
      "name": "security",
      "description": "Administer Keychains, keys, certificates and the Security framework.",
      "syntax": "~/Library/Preferences/com.apple.security.plist",
      "examples": [
        "security [-hilqv] [-p prompt] [command] [command_options] [command_args]"
      ]
    },
    {
      "name": "sed",
      "description": "SED is a stream editor. A stream editor is used to perform basic text transformations on an input stream (a file or input from a pipeline). While in some ways similar to an editor which permits scripted edits, SED works by making only one pass over the input(s), and is consequently more efficient. But it is SED's ability to filter text in a pipeline which particularly distinguishes it from other types of editors.",
      "syntax": "Syntax sed [-an] command [file ...] sed [-an] [-e command] [-f command_file] [file ...] Options",
      "examples": [
        "sed [-an] command [file ...]",
        "sed [-an] [-e command] [-f command_file] [file ...]"
      ]
    },
    {
      "name": "select",
      "description": "Expand words, generate a list of items.",
      "syntax": "Syntax select name [ in word ] ; do list ; done",
      "examples": [
        "select name [ in word ] ; do list ; done",
        "select FILENAME in *;"
      ]
    },
    {
      "name": "serverinfo",
      "description": "Server information.",
      "syntax": "$ if serverinfo -q --perfmode; then echo Performance mode enabled; else echo disabled; fi",
      "examples": [
        "serverinfo [options] command"
      ]
    },
    {
      "name": "set",
      "description": "Change the value of a shell option and set the positional parameters, or display the names and values of shell variables.",
      "syntax": "Syntax set [--abefhkmnptuvxBCEHPT] [-o option-name] [argument …] set [+abefhkmnptuvxBCEHPT] [+o option-name] [argument …]",
      "examples": [
        "set [--abefhkmnptuvxBCEHPT] [-o option-name] [argument …]",
        "set [+abefhkmnptuvxBCEHPT] [+o option-name] [argument …]",
        "set -eu"
      ]
    },
    {
      "name": "setfile",
      "description": "Set attributes of HFS+ files. It attempts to be similar to the setfile command in MPW. It can apply rules to more than one file with the options applying to all files listed.",
      "syntax": "setfile [options]",
      "examples": [
        "setfile",
        "setfile --help"
      ]
    },
    {
      "name": "sharing",
      "description": "Create share points for afp (Apple Filing Protocol), ftp and Microsoft smb services.",
      "syntax": "usr/sbin/sharing",
      "examples": [
        "sharing [-a path [options]] [-e share_point_name [options]]"
      ]
    },
    {
      "name": "shasum",
      "description": "Print or Check SHA Checksums.",
      "syntax": "perl -e \"print qw(abc)\" | shasum",
      "examples": [
        "shasum [OPTION] [FILE]...",
        "shasum [OPTION] --check [FILE]"
      ]
    },
    {
      "name": "shift",
      "description": "Shift positional parameters.",
      "syntax": "Syntax shift [n]",
      "examples": [
        "shift [n]"
      ]
    },
    {
      "name": "shopt",
      "description": "Set shell options - toggle the value of variables which control optional shell behavior.",
      "syntax": "shopt",
      "examples": [
        "shopt [-pqsu] [-o] [optname ...]",
        "shopt"
      ]
    },
    {
      "name": "shutdown",
      "description": "Close down the system at a given time. Shutdown provides an automated shutdown procedure for super-users to nicely notify users when the system is shutting down, saving them from system administrators, hackers, and gurus, who would otherwise not bother with such niceties.",
      "syntax": "/usr/libexec/upsshutdown",
      "examples": [
        "shutdown [-] [-h [-u] | -r | -s | -k] [-o [-n]] time [warning-message ...]"
      ]
    },
    {
      "name": "sips",
      "description": "Scriptable image processing system. sips is used to query or modify raster image files (JPG/GIF/PNG) and ColorSync ICC profiles. Image processing options include flip, rotate, change image format/width/height. Its functionality can also be used through the \"Image Events\" AppleScript suite.",
      "syntax": "$ sips -s format png oldpic.jpg --out newpic.png",
      "examples": [
        "sips [image-query-functions] imagefile ...",
        "sips [profile-query-functions] profile ...",
        "sips [image-modification-functions] imagefile ..."
      ]
    },
    {
      "name": "sleep",
      "description": "Delay for a specified time. Suspends execution for a minimum of seconds. Sleep is usually used to schedule the execution of other commands.",
      "syntax": "sleep [options]",
      "examples": [
        "sleep seconds",
        "sleep 300",
        "sleep 70"
      ]
    },
    {
      "name": "softwareupdate",
      "description": "Check for new and updated versions of your software based on information about your computer and current software.",
      "syntax": "$ sudo softwareupdate -ia",
      "examples": [
        "$ sudo softwareupdate -ia"
      ]
    },
    {
      "name": "sort",
      "description": "Sort text files. Sort, merge, or compare all the lines from the files given (or standard input.)",
      "syntax": "sort",
      "examples": [
        "sort [options...] [file...]",
        "sort has three modes of operation:",
        "sort instead of merge; merging is provided because it is faster,"
      ]
    },
    {
      "name": "source",
      "description": "Execute commands from a file.",
      "syntax": "Syntax . filename [arguments] source filename [arguments]",
      "examples": [
        "source filename [arguments]",
        "source"
      ]
    },
    {
      "name": "split",
      "description": "Split a file into pieces. Read the given file (or standard input if no file is specified) and break it up into files of 1000 lines each.",
      "syntax": "$ split -b 100m demo.zip",
      "examples": [
        "split [-b byte_count[k|m]] [-l line_count] [file [name]]"
      ]
    },
    {
      "name": "sqlite3",
      "description": "SQLite is a public domain zero-configuration, transactional SQL database engine. Used by macOS, Firefox web browser, WIndows 10, Dropbox, Skype and many other client programs.",
      "syntax": "$ sqlite3 demo64.db \"SELECT * FROM Sales;\"",
      "examples": [
        "sqlite3 [OPTIONS] FILENAME [SQL_Command]",
        "sqlite3 demo64",
        "sqlite3 --help"
      ]
    },
    {
      "name": "srm",
      "description": "Securely remove files or directories. srm removes each specified file by overwriting, renaming, and truncating it before unlinking. This prevents other people from undeleting or recovering any information about the file from the command line.",
      "syntax": "srm [options]",
      "examples": [
        "srm [OPTION]... FILE..."
      ]
    },
    {
      "name": "stat",
      "description": "Display the status of a file.",
      "syntax": "stat",
      "examples": [
        "stat [-FLnq] [-f format | -l | -r | -s | -x] [-t timefmt] [file ...]",
        "stat"
      ]
    },
    {
      "name": "sticky",
      "description": "Sticky text and append-only directories",
      "syntax": "sticky [options]",
      "examples": [
        "sticky",
        "sticky --help"
      ]
    },
    {
      "name": "su",
      "description": "Substitute user identity. Switch to a different user/group ID. A shell is executed, and additional arguments may be passed to the shell. If su is executed by root, no password is requested.",
      "syntax": "su [options]",
      "examples": [
        "su [-flm] [login] [-c shell arguments]"
      ]
    },
    {
      "name": "sudo",
      "description": "Execute a command as another user. Allows a permitted user to execute a command as the superuser or another user, as specified in the sudoers file.",
      "syntax": "$ sudo ls /usr/local/protected",
      "examples": [
        "sudo [ -H ] [-P ] [-S ] [ -b ] command",
        "sudo [ -p prompt ] [ -c class|- ]",
        "sudo -V | -h | -l | -L | -v | -k | -K | -s command"
      ]
    },
    {
      "name": "suspend",
      "description": "Suspend the execution of this shell until it receives a SIGCONT signal.",
      "syntax": "Syntax suspend [-f] Key -f Do not complain if this is a login shell; just suspend anyway.",
      "examples": [
        "suspend [-f]"
      ]
    },
    {
      "name": "switch",
      "description": "Conditionally perform a command.",
      "syntax": "Syntax switch (string) case str1: ... breaksw ... default: ... breaksw endsw",
      "examples": [
        "switch (string)"
      ]
    },
    {
      "name": "sw_vers",
      "description": "Print macOS operating system version.",
      "syntax": "sw_vers",
      "examples": [
        "sw_vers",
        "sw_vers -productName",
        "sw_vers -productVersion"
      ]
    },
    {
      "name": "syntax-args",
      "description": "A positional parameter is a parameter denoted by one or more digits, other than the single digit 0. Positional parameters are assigned from the shell's arguments when it is invoked, and may be reas-signed reassigned signed using the set builtin command. Positional parameters may not be assigned to with assignment statements. The positional parameters are temporarily replaced when a shell function is executed (see FUNCTIONS below). When a positional parameter consisting of more than a single digi",
      "syntax": "syntax-args [options]",
      "examples": [
        "syntax-args",
        "syntax-args --help"
      ]
    },
    {
      "name": "syntax-arrays",
      "description": "tcsh provides one-dimensional array variables. Any variable may be used as an array; the set builtin will explicitly declare an array.",
      "syntax": "syntax-arrays [options]",
      "examples": [
        "syntax-arrays",
        "syntax-arrays --help"
      ]
    },
    {
      "name": "syntax-bashkeyboard",
      "description": "For example, to move to a directory 'sample1'; Type cd sam ; then press TAB and ENTER. type just enough characters to uniquely identify the directory you wish to open.",
      "syntax": "syntax-bashkeyboard [options]",
      "examples": [
        "syntax-bashkeyboard",
        "syntax-bashkeyboard --help"
      ]
    },
    {
      "name": "syntax-bashrc",
      "description": "From the bash man page:",
      "syntax": "syntax-bashrc [options]",
      "examples": [
        "syntax-bashrc",
        "syntax-bashrc --help"
      ]
    },
    {
      "name": "syntax-bootable",
      "description": "Use a USB flash drive (or other removable media) as a startup disk from which to install macOS.",
      "syntax": "syntax-bootable [options]",
      "examples": [
        "syntax-bootable",
        "syntax-bootable --help"
      ]
    },
    {
      "name": "syntax-brackets",
      "description": "Grouping a (list of commands) in parentheses causes them to be executed as if they were a single unit. When commands are grouped, redirections can be applied to the entire command list. For example, the output of all the commands in the list can be redirected to a single stream. Group commands in a sub-shell: ( )",
      "syntax": "syntax-brackets [options]",
      "examples": [
        "syntax-brackets",
        "syntax-brackets --help"
      ]
    },
    {
      "name": "syntax-comparison",
      "description": "These operators are similar to those of C and have the same precedence. They include",
      "syntax": "syntax-comparison [options]",
      "examples": [
        "syntax-comparison",
        "syntax-comparison --help"
      ]
    },
    {
      "name": "syntax-condition",
      "description": "Conditional expressions are often used by bracketed expressions and the test builtin.",
      "syntax": "syntax-condition [options]",
      "examples": [
        "syntax-condition",
        "syntax-condition --help"
      ]
    },
    {
      "name": "syntax-defaults",
      "description": "The preferences below can be applied using defaults",
      "syntax": "syntax-defaults [options]",
      "examples": [
        "syntax-defaults",
        "syntax-defaults --help"
      ]
    },
    {
      "name": "syntax-env_vars",
      "description": "Related macOS comands:",
      "syntax": "syntax-env_vars [options]",
      "examples": [
        "syntax-env_vars",
        "syntax-env_vars --help"
      ]
    },
    {
      "name": "syntax-execute",
      "description": "A list is a sequence of one or more pipelines separated by one of the operators ';', '&', '&&', or '||', and optionally terminated by one of ';', '&', or a newline.",
      "syntax": "syntax-execute [options]",
      "examples": [
        "syntax-execute",
        "syntax-execute --help"
      ]
    },
    {
      "name": "syntax-expand",
      "description": "Expansion is performed on the command line after it has been split into tokens.",
      "syntax": "syntax-expand [options]",
      "examples": [
        "syntax-expand",
        "syntax-expand --help"
      ]
    },
    {
      "name": "syntax-file-operators",
      "description": "The following operators return TRUE if..",
      "syntax": "syntax-file-operators [options]",
      "examples": [
        "syntax-file-operators",
        "syntax-file-operators --help"
      ]
    },
    {
      "name": "syntax-filenames",
      "description": "The only two invalid characters for macOS filesystems (UFS, HFS+, and HFSX) are slash ('/') and null ('\\0')",
      "syntax": "syntax-filenames [options]",
      "examples": [
        "syntax-filenames",
        "syntax-filenames --help"
      ]
    },
    {
      "name": "syntax-filesystem",
      "description": "A historical sketch of the filesystem hierarchy. (The modern macOS filesystem adds many other folders to this basic structure).",
      "syntax": "syntax-filesystem [options]",
      "examples": [
        "syntax-filesystem",
        "syntax-filesystem --help"
      ]
    },
    {
      "name": "syntax-here-string",
      "description": "A here string can be considered as a stripped-down form of a here document. It consists of nothing more than COMMAND <<<$WORD, where $WORD is expanded and fed to the stdin of COMMAND.",
      "syntax": "syntax-here-string [options]",
      "examples": [
        "syntax-here-string",
        "syntax-here-string --help"
      ]
    },
    {
      "name": "syntax-here",
      "description": "A here document is a block of text or code which is redirected to an interactive program or a command.",
      "syntax": "syntax-here [options]",
      "examples": [
        "syntax-here",
        "syntax-here --help"
      ]
    },
    {
      "name": "syntax-keybindings",
      "description": "Key binding allow you to swap around the action of keys (or key combinations) on the Mac keyboard.",
      "syntax": "syntax-keybindings [options]",
      "examples": [
        "syntax-keybindings",
        "syntax-keybindings --help"
      ]
    },
    {
      "name": "syntax-keyboard",
      "description": "Screen Capture to disk:",
      "syntax": "syntax-keyboard [options]",
      "examples": [
        "syntax-keyboard",
        "syntax-keyboard --help"
      ]
    },
    {
      "name": "syntax-math",
      "description": "The shell allows arithmetic expressions to be evaluated, as one of the shell expansions or by the let builtin.",
      "syntax": "syntax-math [options]",
      "examples": [
        "syntax-math",
        "syntax-math --help"
      ]
    },
    {
      "name": "syntax-prompt",
      "description": "There are several variables that can be set to control the appearance of the bach command prompt: PS1, PS2, PS3, PS4 and PROMPT_COMMAND the contents are executed just as if they had been typed on the command line.",
      "syntax": "syntax-prompt [options]",
      "examples": [
        "syntax-prompt",
        "syntax-prompt --help"
      ]
    },
    {
      "name": "syntax-quoting",
      "description": "Quoting is used to remove the special meaning of certain characters or words to the shell. Quoting can be used to disable special treatment for special characters, to prevent reserved words from being recognized as such, and to prevent parameter expansion.",
      "syntax": "syntax-quoting [options]",
      "examples": [
        "syntax-quoting",
        "syntax-quoting --help"
      ]
    },
    {
      "name": "syntax-redirection",
      "description": "Both the input and output of a command can be redirected:",
      "syntax": "syntax-redirection [options]",
      "examples": [
        "syntax-redirection",
        "syntax-redirection --help"
      ]
    },
    {
      "name": "syntax-root",
      "description": "1. Open System Preferences | Users and Groups 2. Click on the lock and authenticate with an administrator account. 3. Click Login Options... 4. Click the \"Edit...\" or \"Join...\" button at the bottom right. 5. Click the \"Open Directory Utility...\" button. 6. Click the lock in the Directory Utility window and authenticate with an admin account. 7. Choose 'Enable Root User' from the Edit menu. 8. Enter the root password you wish to use and click OK.",
      "syntax": "syntax-root [options]",
      "examples": [
        "syntax-root",
        "syntax-root --help"
      ]
    },
    {
      "name": "syntax-shellscript",
      "description": "A shell script is an ASCII text file containing one or more commands.",
      "syntax": "syntax-shellscript [options]",
      "examples": [
        "syntax-shellscript",
        "syntax-shellscript --help"
      ]
    },
    {
      "name": "syntax-shell_vars",
      "description": "Variables SET by the shell and variables USED by the shell",
      "syntax": "syntax-shell_vars [options]",
      "examples": [
        "syntax-shell_vars",
        "syntax-shell_vars --help"
      ]
    },
    {
      "name": "syntax-strftime",
      "description": "Common date and time string formats",
      "syntax": "syntax-strftime [options]",
      "examples": [
        "syntax-strftime",
        "syntax-strftime --help"
      ]
    },
    {
      "name": "syntax-substitution",
      "description": "Substitution allows the output of a command to replace the command itself.",
      "syntax": "syntax-substitution [options]",
      "examples": [
        "syntax-substitution",
        "syntax-substitution --help"
      ]
    },
    {
      "name": "syntax-variables",
      "description": "You can use variables in bash as in any programming language. There are no data types so a variable can contain a number, or a string of characters. There is no need to declare a variable, just assign a value:",
      "syntax": "syntax-variables [options]",
      "examples": [
        "syntax-variables",
        "syntax-variables --help"
      ]
    },
    {
      "name": "syntax-wildcards",
      "description": "Wildcards allow pattern matching within both Regular Expressions and in Globbing.",
      "syntax": "syntax-wildcards [options]",
      "examples": [
        "syntax-wildcards",
        "syntax-wildcards --help"
      ]
    },
    {
      "name": "syntax",
      "description": "Looping constructs:",
      "syntax": "syntax [options]",
      "examples": [
        "syntax",
        "syntax --help"
      ]
    },
    {
      "name": "sysctl",
      "description": "Get or set kernel state.",
      "syntax": "sysctl kern.maxproc",
      "examples": [
        "sysctl [-bdehiNnoqx] name[=value] ...",
        "sysctl [-bdehNnoqx] -a",
        "sysctl utility.  This option is ignored if either -N or -n is"
      ]
    },
    {
      "name": "systemsetup",
      "description": "Configure certain per-machine settings typically configured in the System Preferences application. The systemsetup command requires at least \"admin\" privileges to run.",
      "syntax": "$ sudo systemsetup -getcomputername",
      "examples": [
        "systemsetup [-getdate] [-setdate mm:dd:yy] [-gettime] [-settime hh:mm:ss]"
      ]
    },
    {
      "name": "system_profiler",
      "description": "Report system hardware and software configuration.",
      "syntax": "$ system_profiler",
      "examples": [
        "system_profiler [-usage]",
        "system_profiler [-listDataTypes]",
        "system_profiler [-xml] dataType1 ... dataTypeN"
      ]
    },
    {
      "name": "tail",
      "description": "Display the last part of a file. Display the contents of file or, by default, it's standard input, to the standard output.",
      "syntax": "tail",
      "examples": [
        "tail [-F | -f | -r] [-b number | -c number | -n number] [file ...]",
        "tail [-F | -f | -r] [-q] [-b number | -c number | -n number] [file ...]",
        "tail"
      ]
    },
    {
      "name": "tar",
      "description": "Create, add files to, or extract files from an archive file in gnutar format, called a tarfile. Tape ARchiver; manipulate \"tar\" archive files.",
      "syntax": "tar -czvf MyArchive.tgz Source_file or in full tar --create --gzip --verbose --file=MyArchive.tgz Source_file",
      "examples": [
        "tar [bundled-flags args] [file | pattern ...]",
        "tar {-c} [options] [files | directories]",
        "tar {-r | -u} -f archive-file [options] [files | directories]"
      ]
    },
    {
      "name": "tccutil",
      "description": "Manage the privacy database.",
      "syntax": "$ tccutil reset AddressBook",
      "examples": [
        "tccutil reset service"
      ]
    },
    {
      "name": "tcpdump",
      "description": "Dump traffic on a network",
      "syntax": "tcpdump [options]",
      "examples": [
        "tcpdump [ -AdDefgIKlLnNOpqRStuUvxX ] [ -B buffer_size ] [ -c count ]",
        "tcpdump will not print replay prevention field.  Since there is no protocol version  field  in",
        "tcpdump host sundown"
      ]
    },
    {
      "name": "tee",
      "description": "Redirect output to multiple files. Copies standard input to standard output, making a copy in zero or more files. The output is unbuffered.",
      "syntax": "Syntax tee [-ai] [file ...] Options -a Append the output to the files rather than overwriting them. -i Ignore the SIGINT signal. file A pathname of an output file.",
      "examples": [
        "tee [-ai] [file ...]"
      ]
    },
    {
      "name": "test",
      "description": "Condition evaluation. Evaluate an expression and, if it evaluates to true, return a zero (true) exit status; otherwise return 1 (false). If there is no expression, test also returns 1 (false).",
      "syntax": "test expr [ expr ] [[ expr ]]",
      "examples": [
        "test expr",
        "test",
        "test"
      ]
    },
    {
      "name": "textutil",
      "description": "Manipulate text files in various formats.",
      "syntax": "$ textutil -info foo.rtf",
      "examples": [
        "$ textutil -info foo.rtf",
        "$ textutil -convert html foo.rtf",
        "$ textutil -convert rtf -font Times -fontsize 10 foo.txt",
        "$ textutil -cat html -title \"Several Files\" -output index.html *.rtf",
        "$ textutil -convert txt *.doc"
      ]
    },
    {
      "name": "time",
      "description": "Measure the running time of a command.",
      "syntax": "Syntax time [-lp] [command] Options -l The contents of the rusage structure are printed. -p The output is formatted as specified by IEEE Std 1003.2-1992 (POSIX.2)",
      "examples": [
        "time [-lp] [command]"
      ]
    },
    {
      "name": "times",
      "description": "Display shell & shell process times.",
      "syntax": "Syntax times",
      "examples": [
        "times"
      ]
    },
    {
      "name": "tmutil",
      "description": "Time Machine utility, examine and manipulate Time Machine backups, restore data from backups, add or remove exclusions, and compare backups. Several, but not all, verbs require root privileges.",
      "syntax": "$ tmutil addexclusion /ss64docs",
      "examples": [
        "tmutil verb [options]"
      ]
    },
    {
      "name": "top",
      "description": "List running processes on the system, in sorted order. Periodically displays a list of processes on the system in sorted order. The default key for sorting is pid, but other keys can be used instead.",
      "syntax": "$ top -ocpu -s 5",
      "examples": [
        "$ top -ocpu -s 5",
        "$ top -c d"
      ]
    },
    {
      "name": "touch",
      "description": "Change file timestamps. Sets the modification and access times of files to the current time of day. If the file doesn't exist, it is created with default permissions.",
      "syntax": "touch [options]",
      "examples": [
        "touch [-acfhm] [-r file] [-t [[CC]YY]MMDDhhmm[.SS]] file ...",
        "touch 0512301259 MyFile.txt"
      ]
    },
    {
      "name": "tput",
      "description": "Set terminal-dependent capabilities, color, position.",
      "syntax": "tput reset",
      "examples": [
        "tput [-Ttype] capname [parms ... ]",
        "tput [-Ttype] init",
        "tput [-Ttype] reset"
      ]
    },
    {
      "name": "tr",
      "description": "Translate, squeeze, and/or delete characters. Copies the standard input to the standard output with substitution or deletion of selected characters.",
      "syntax": "The LANG, LC_ALL, LC_CTYPE and LC_COLLATE environment variables affect the execution of tr as described in environ(7).",
      "examples": [
        "tr [-Ccsu] string1 string2",
        "tr [-Ccu] -d string1",
        "tr [-Ccu] -s string1"
      ]
    },
    {
      "name": "traceroute",
      "description": "Print the route that packets take to a network host.",
      "syntax": "traceroute [options]",
      "examples": [
        "traceroute [options] host [packetsize]",
        "traceroute hopes that nothing is listening on UDP ports base to base+nhops-1 at the destination",
        "traceroute to nis.nsf.net (35.1.1.48), 30 hops max, 56 byte packet"
      ]
    },
    {
      "name": "traceroute6",
      "description": "Uses the IPv6 protocol hop limit field to elicit an ICMPv6 TIME_EXCEEDED response from each gateway along the path to some host.",
      "syntax": "traceroute6 [options]",
      "examples": [
        "traceroute6 [-dIlnNrvU] [-f firsthop] [-g gateway] [-m hoplimit]"
      ]
    },
    {
      "name": "trap",
      "description": "Execute a command when the shell receives a signal.",
      "syntax": "trap",
      "examples": [
        "trap [-lp] [[arg] sigspec ...]",
        "trap",
        "trap cleanup 1 2 3 6"
      ]
    },
    {
      "name": "trimforce",
      "description": "Enable TRIM commands on third-party solid-state drives.",
      "syntax": "trimforce [options]",
      "examples": [
        "trimforce verb"
      ]
    },
    {
      "name": "true",
      "description": "Do nothing, returning a zero (true) exit status",
      "syntax": "Syntax: true",
      "examples": [
        "true"
      ]
    },
    {
      "name": "tty",
      "description": "Return user's terminal name",
      "syntax": "tty [options]",
      "examples": [
        "tty [-s]"
      ]
    },
    {
      "name": "type",
      "description": "Describe a command. For each name, indicate how it would be interpreted if used as a command name.",
      "syntax": "Syntax type [-aftpP] name [name ...] Key -a Print all the places that contain an executable named name.",
      "examples": [
        "type [-aftpP] name [name ...]"
      ]
    },
    {
      "name": "ulimit",
      "description": "User limits - limit the use of system-wide resources.",
      "syntax": "help ulimit",
      "examples": [
        "ulimit [-acdefHilmnpqrsStuvx [limit]]"
      ]
    },
    {
      "name": "umask",
      "description": "User's file creation mask. Set the shell process's file creation mask to mode.",
      "syntax": "help umask",
      "examples": [
        "umask [-p] [-S] [mode]"
      ]
    },
    {
      "name": "umount",
      "description": "Unmount filesystems. Remove a special device or the remote node (rhost:path) from the filesystem tree at the point node. If either special or node are not provided, the appropriate information is taken from the fstab(5) file.",
      "syntax": "umount [options]",
      "examples": [
        "umount [-fv] special | node",
        "umount -a | -A [-fv] [-h host] [-t type]",
        "umount -a -t nfs,hfs"
      ]
    },
    {
      "name": "uname",
      "description": "Print the Darwin OS Kernel version / release / machine name.",
      "syntax": "$ uname -m i386",
      "examples": [
        "uname [-amnpsrv]"
      ]
    },
    {
      "name": "uniq",
      "description": "Report or filter out repeated lines in a file. Reads standard input comparing adjacent lines, and writes a copy of each unique input line to the standard output. The second and succeeding copies of identical adjacent input lines are not written.",
      "syntax": "uniq",
      "examples": [
        "uniq [-c | -d | -u] [-f fields] [-s chars] [input_file [output_file]]",
        "uniq",
        "uniq"
      ]
    },
    {
      "name": "units",
      "description": "Convert units from one scale to another",
      "syntax": "units [options]",
      "examples": [
        "units [-f filename] [-qv] [from-unit to-unit]"
      ]
    },
    {
      "name": "unset",
      "description": "Remove variable or function names - the opposite of set.",
      "syntax": "Syntax unset [-fv] [name ...] Key -v Each name refers to a shell variable.(default) -f Each name refers to a shell function, and the function definition is removed.",
      "examples": [
        "$ unset myvariable"
      ]
    },
    {
      "name": "until",
      "description": "Execute consequent-commands as long as test-commands has an exit status which is not zero.",
      "syntax": "Syntax until test-commands; do consequent-commands; done",
      "examples": [
        "until test-commands; do consequent-commands; done"
      ]
    },
    {
      "name": "uptime",
      "description": "Show how long system has been running.",
      "syntax": "Syntax uptime",
      "examples": [
        "uptime"
      ]
    },
    {
      "name": "users",
      "description": "Print login names of users currently logged in, print on a single line a blank-separated list of user names of users currently logged in to the current host.",
      "syntax": "Syntax users [OPTION]... [FILE] Key --help display this help and exit --version output version information and exit",
      "examples": [
        "users [OPTION]... [FILE]"
      ]
    },
    {
      "name": "uuencode",
      "description": "Encode/decode a binary file",
      "syntax": "tar cf - src_tree | compress | uuencode src_tree.tar.Z | mail sys1!sys2!user",
      "examples": [
        "uuencode [-m] [-o output_file] [file] name",
        "uuencode algorithm.",
        "uuencode src_tree.tar.Z | mail sys1!sys2!user"
      ]
    },
    {
      "name": "uuidgen",
      "description": "Generate a Unique ID (UUID/GUID)",
      "syntax": "Syntax uuidgen [-hdr] Key -hdr Emit CoreFoundation CFUUID-based source code for using the uuid in a header.",
      "examples": [
        "uuidgen [-hdr]"
      ]
    },
    {
      "name": "vi",
      "description": "macOS",
      "syntax": "vi [options]",
      "examples": [
        "vi",
        "vi --help"
      ]
    },
    {
      "name": "w",
      "description": "Display who is logged in and what they are doing.",
      "syntax": "w [options]",
      "examples": [
        "w [-hi] [user ...]"
      ]
    },
    {
      "name": "wait",
      "description": "Wait for each specified process to complete and return its termination status.",
      "syntax": "Syntax wait [n ...] Key n A process ID or a job specification",
      "examples": [
        "$ wait 2585"
      ]
    },
    {
      "name": "wall",
      "description": "Write a message to users.",
      "syntax": "wall [options]",
      "examples": [
        "wall [-g group] [file]"
      ]
    },
    {
      "name": "wc",
      "description": "Word count, line, character, and byte count.",
      "syntax": "wc -l",
      "examples": [
        "wc [-clmw] [file ...]",
        "wc -l"
      ]
    },
    {
      "name": "whatis",
      "description": "Search the whatis database for complete words.",
      "syntax": "Syntax whatis keyword ...",
      "examples": [
        "whatis keyword ..."
      ]
    },
    {
      "name": "whereis",
      "description": "Locate a program.",
      "syntax": "Syntax whereis [program ...]",
      "examples": [
        "whereis [program ...]",
        "whereis ls"
      ]
    },
    {
      "name": "which",
      "description": "Locate a program file in the user's path",
      "syntax": "which",
      "examples": [
        "which [-as] program ...",
        "which"
      ]
    },
    {
      "name": "while",
      "description": "Execute commands",
      "syntax": "Syntax while test-commands; do consequent-commands; done until test-commands; do consequent-commands; done",
      "examples": [
        "while test-commands; do consequent-commands; done",
        "while"
      ]
    },
    {
      "name": "who",
      "description": "Print all usernames currently logged on, showing for each user the login name, tty name, the date and time of login, and hostname if not local.",
      "syntax": "who [options]",
      "examples": [
        "who [-mTuH] [file]",
        "who am i"
      ]
    },
    {
      "name": "whoami",
      "description": "Print the current user id and name. Same as id -un.",
      "syntax": "Syntax whoami [options] Options --help Display Help --version Display program version info",
      "examples": [
        "whoami [options]"
      ]
    },
    {
      "name": "write",
      "description": "Send a message to another user",
      "syntax": "Syntax: write user [ttyname]",
      "examples": [
        "write user [ttyname]"
      ]
    },
    {
      "name": "xargs",
      "description": "Execute utility, passing constructed argument list(s). Read space, tab, newline and end-of-file delimited arguments from standard input and execute the specified utility with them as arguments. The arguments are typically a long list of filenames (generated by ls or find, for example) that get passed to xargs via a pipe.",
      "syntax": "find . -print0 | xargs -0 touch -t 12310930",
      "examples": [
        "xargs [-0pt] [-E eofstr] [-I replstr [-R replacements]] [-J replstr]"
      ]
    },
    {
      "name": "xattr",
      "description": "Display and manipulate extended attributes of one or more files, including directories and symbolic links.",
      "syntax": "xattr",
      "examples": [
        "xattr [-lrsvx] file ...",
        "xattr -p [-lrsvx] attr_name file ...",
        "xattr -w [-rsx] attr_name attr_value file ..."
      ]
    },
    {
      "name": "xxd",
      "description": "Make a hexdump or do the reverse. xxd creates a hex dump of a given file or standard input. It can also convert a hex dump back to its original binary form. Like uuencode and uudecode it allows the transmission of binary data in an 'email-safe' ASCII representation, but has the advantage of decoding to standard output. Moreover, it can be used to perform binary file patching.",
      "syntax": "xxd [options]",
      "examples": [
        "xxd [options] [infile [outfile]]",
        "xxd -r[evert] [options] [infile [outfile]]",
        "xxd -h[elp]"
      ]
    },
    {
      "name": "yes",
      "description": "Print the command line argument(s), separated by spaces and followed by a newline, forever until killed. When piped into a command, it will continue until the pipe breaks (i.e., the program completes its execution).",
      "syntax": "Syntax yes [text] Key text The text to repeat If no arguments are given, prints 'y' followed by a newline forever until killed with Ctrl-C.",
      "examples": [
        "yes [text]",
        "yes 123456789 | head -1000 > file.txt"
      ]
    },
    {
      "name": "youtube-dl",
      "description": "Download video+audio either single files or entire playlists. Supports YouTube, Vimeo etc.",
      "syntax": "youtube-dl --help",
      "examples": [
        "youtube-dl [OPTIONS] URL [URL...]",
        "youtube-dl --help",
        "youtube-dl"
      ]
    },
    {
      "name": "zip",
      "description": "Package and compress (archive) files.",
      "syntax": "zip -d foo foo/tom/junk \"foo/harry/*\" \"*.o\"",
      "examples": [
        "zip [options] zipfile inpath [inpath...]",
        "zip -b /tmp stuff *",
        "zip -d foo foo/tom/junk foo/harry/\\* \\*.o"
      ]
    }
  ],
  "powershell": [
    {
      "name": "ad",
      "description": "The Active Directory (AD) module may be installed as part of the RSAT feature or by default, with the AD DS or AD LDS server roles.",
      "syntax": "ad [options]",
      "examples": [
        "ad",
        "ad --help"
      ]
    },
    {
      "name": "add-adcomputerserviceaccount",
      "description": "Add one or more service accounts to an AD computer.",
      "syntax": "add-adcomputerserviceaccount [options]",
      "examples": [
        "add-adcomputerserviceaccount",
        "add-adcomputerserviceaccount --help"
      ]
    },
    {
      "name": "add-addomaincontrollerpasswordreplicationpolicy",
      "description": "Add users, computers, and groups to the allowed or denied list of a read-only domain controller password replication policy.",
      "syntax": "add-addomaincontrollerpasswordreplicationpolicy [options]",
      "examples": [
        "add-addomaincontrollerpasswordreplicationpolicy",
        "add-addomaincontrollerpasswordreplicationpolicy --help"
      ]
    },
    {
      "name": "add-adfinegrainedpasswordpolicysubject",
      "description": "Apply a fine-grained password policy to one more users and groups.",
      "syntax": "add-adfinegrainedpasswordpolicysubject [options]",
      "examples": [
        "add-adfinegrainedpasswordpolicysubject",
        "add-adfinegrainedpasswordpolicysubject --help"
      ]
    },
    {
      "name": "add-adgroupmember",
      "description": "Edit an Active Directory group to add one or more members.",
      "syntax": "add-adgroupmember [options]",
      "examples": [
        "add-adgroupmember",
        "add-adgroupmember --help"
      ]
    },
    {
      "name": "add-adprincipalgroupmembership",
      "description": "Edit an AD principal (typically a user but can also be a group or computer) to add membership of one or more Active Directory groups.",
      "syntax": "add-adprincipalgroupmembership [options]",
      "examples": [
        "add-adprincipalgroupmembership",
        "add-adprincipalgroupmembership --help"
      ]
    },
    {
      "name": "add-bitlockerkeyprotector",
      "description": "Add a key protector for a BitLocker volume.",
      "syntax": "add-bitlockerkeyprotector [options]",
      "examples": [
        "add-bitlockerkeyprotector",
        "add-bitlockerkeyprotector --help"
      ]
    },
    {
      "name": "add-bitsfile",
      "description": "Add one or more files to an existing Background Intelligent Transfer Service (BITS) transfer job.",
      "syntax": "add-bitsfile [options]",
      "examples": [
        "add-bitsfile",
        "add-bitsfile --help"
      ]
    },
    {
      "name": "add-computer",
      "description": "Add the local computer to a domain or workgroup. Move a computer account from one domain to another. Add-Computer will create new domain computer accounts as required.",
      "syntax": "PS C:\\> add-computer -domainname SS64Dom -restart",
      "examples": [
        "add-computer",
        "add-computer --help"
      ]
    },
    {
      "name": "add-content",
      "description": "Append content to a specified item or file. You can specify the content by typing the content in the command or by specifying an object that contains the content.",
      "syntax": "C:\\PS> add-content -path *.txt -value \"This is the end\"",
      "examples": [
        "add-content",
        "add-content --help"
      ]
    },
    {
      "name": "add-history",
      "description": "Add entries to the end of the session history (the commands entered during the current session).",
      "syntax": "C:\\PS> import-csv SessionHist.csv | add-history",
      "examples": [
        "add-history"
      ]
    },
    {
      "name": "add-jobtrigger",
      "description": "Add a job trigger to a scheduled job. A \"job trigger\" starts a scheduled job on a one-time or recurring schedule or when an event occurs. To identify the job triggers to add, use the -Trigger parameter. To identify the scheduled job to which the triggers are added, use the -Name, -ID, or -InputObject parameters. To create job triggers for the value of the Trigger parameter, use the New-JobTrigger cmdlet or use a hash table.",
      "syntax": "add-jobtrigger [options]",
      "examples": [
        "add-jobtrigger",
        "add-jobtrigger --help"
      ]
    },
    {
      "name": "add-member",
      "description": "Add a user-defined custom member to a PowerShell object instance.",
      "syntax": "PS C:> $a = get-childitem c:\\ps-test\\test.txt PS C:> $a | add-member -membertype noteproperty -name MyNote -value SomeSampleText PS C:> $a | get-member MyNotePS C:> $a.MyNote SomeSampleText",
      "examples": [
        "add-member",
        "add-member --help"
      ]
    },
    {
      "name": "add-pssnapin",
      "description": "Add one or more PowerShell snap-ins to the current console.",
      "syntax": "PS C:> get-pssnapin -registered | add-pssnapin -passthru",
      "examples": [
        "add-pssnapin",
        "add-pssnapin --help"
      ]
    },
    {
      "name": "add-type",
      "description": "Add a .NET Framework type to a PowerShell session. If a .NET Framework class is added to your PowerShell session with Add-Type, those objects may then be instantiated (with New-Object ), just like any .NET Framework object.",
      "syntax": "add-type [options]",
      "examples": [
        "add-type",
        "add-type --help"
      ]
    },
    {
      "name": "add-windowscapability",
      "description": "Install a Windows capability package on the specified operating system image.",
      "syntax": "add-windowscapability [options]",
      "examples": [
        "add-windowscapability",
        "add-windowscapability --help"
      ]
    },
    {
      "name": "add-windowsfeature",
      "description": "Install specified roles, role services, and features on a computer running Windows Server 2008 R2 for 2012 R2 use Install-WindowsFeature.",
      "syntax": "add-windowsfeature [options]",
      "examples": [
        "add-windowsfeature",
        "add-windowsfeature --help"
      ]
    },
    {
      "name": "backup-gpo",
      "description": "Backup individual group policy objects (GPOs) or all the GPOs in a domain.",
      "syntax": "backup-gpo [options]",
      "examples": [
        "backup-gpo",
        "backup-gpo --help"
      ]
    },
    {
      "name": "bits-2",
      "description": "The page you’re looking for can’t be found. Try the search box above or return to the home page.",
      "syntax": "bits-2 [options]",
      "examples": [
        "bits-2",
        "bits-2 --help"
      ]
    },
    {
      "name": "bits",
      "description": "The Background Intelligent Transfer Service can be used to transfer large files from remote hosts. BITS supports throttled and asynchronous transfer of files between machines using idle network bandwidth.",
      "syntax": "bits [options]",
      "examples": [
        "bits",
        "bits --help"
      ]
    },
    {
      "name": "break",
      "description": "Exit a program loop immediately.",
      "syntax": "break",
      "examples": [
        "break"
      ]
    },
    {
      "name": "call",
      "description": "The call operator (&) allows you to execute a command, script or function.",
      "syntax": "call [options]",
      "examples": [
        "call",
        "call --help"
      ]
    },
    {
      "name": "ccontains",
      "description": "CContains is a conditional operator that will test for the existence of one item in a collection, array or hashtable.",
      "syntax": "Syntax expression -ccontains expression",
      "examples": [
        "ccontains",
        "ccontains --help"
      ]
    },
    {
      "name": "ceq",
      "description": "ceq is a comparison operator that will test if one numeric or string expression is equal to another,",
      "syntax": "Syntax expression -ceq expression",
      "examples": [
        "ceq",
        "ceq --help"
      ]
    },
    {
      "name": "checkpoint-computer",
      "description": "Create a system restore point on the local computer.",
      "syntax": "PS C:\\> checkpoint-computer -description \"SS64\"",
      "examples": [
        "checkpoint-computer",
        "checkpoint-computer --help"
      ]
    },
    {
      "name": "checkpoint-webapplicationmonitoring",
      "description": "Create a checkpoint of the IntelliTrace file for an Internet Information Services (IIS) web application.",
      "syntax": "checkpoint-webapplicationmonitoring [options]",
      "examples": [
        "checkpoint-webapplicationmonitoring",
        "checkpoint-webapplicationmonitoring --help"
      ]
    },
    {
      "name": "clear-adaccountexpiration",
      "description": "Clear the expiration date for an Active Directory account.",
      "syntax": "clear-adaccountexpiration [options]",
      "examples": [
        "clear-adaccountexpiration",
        "clear-adaccountexpiration --help"
      ]
    },
    {
      "name": "clear-content",
      "description": "Delete all the contents of a file without deleting the file itself.",
      "syntax": "PS C:> clear-content c:\\Temp\\* -filter *.log",
      "examples": [
        "clear-content",
        "clear-content --help"
      ]
    },
    {
      "name": "clear-dnsclientcache",
      "description": "Clear the content of the DNS client cache.",
      "syntax": "clear-dnsclientcache [options]",
      "examples": [
        "clear-dnsclientcache",
        "clear-dnsclientcache --help"
      ]
    },
    {
      "name": "clear-eventlog",
      "description": "Delete all entries from a specified event log on a local or remote computer.",
      "syntax": "clear-eventlog [options]",
      "examples": [
        "clear-eventlog",
        "clear-eventlog --help"
      ]
    },
    {
      "name": "clear-history",
      "description": "Delete entries from the command history (the commands entered during the current session). Without parameters, Clear-History will delete all commands from the session history.",
      "syntax": "C:\\PS> clear-history",
      "examples": [
        "clear-history",
        "clear-history --help"
      ]
    },
    {
      "name": "clear-host",
      "description": "Clear the screen.",
      "syntax": "clear-host [options]",
      "examples": [
        "clear-host",
        "clear-host --help"
      ]
    },
    {
      "name": "clear-item",
      "description": "Remove content from a variable, or alias. Remove a registry entry. Clearing an alias will also delete the alias, clearing a variable will empty the variable contents.",
      "syntax": "PS C:> clear-item Variable:MyTestVariable or PS C:> Set-location Variable: PS Variable:\\> clear-item MyTestVariable",
      "examples": [
        "clear-item",
        "clear-item --help"
      ]
    },
    {
      "name": "clear-itemproperty",
      "description": "Delete the value of a property (e.g. a registry value) but not the property itself.",
      "syntax": "C:\\PS> clear-itemproperty -path HKLM:\\Software\\SS64\\DemoKey -name Spud",
      "examples": [
        "clear-itemproperty",
        "clear-itemproperty --help"
      ]
    },
    {
      "name": "clear-variable",
      "description": "Remove the value from a variable. The value will become NULL (empty) but Clear-Variable will preserve the data-type of the object stored in the variable.",
      "syntax": "PS C:\\> clear-variable -name ss64",
      "examples": [
        "clear-variable",
        "clear-variable --help"
      ]
    },
    {
      "name": "cne",
      "description": "cne is a comparison operator that will test if one numeric or string expression is NOT equal to another,",
      "syntax": "Syntax expression -cne expression",
      "examples": [
        "cne",
        "cne --help"
      ]
    },
    {
      "name": "common",
      "description": "The common parameters are a set of cmdlet parameters that you can use with any cmdlet. They're implemented by PowerShell, not by the cmdlet developer, and so they are automatically available to any cmdlet.",
      "syntax": "common [options]",
      "examples": [
        "common parameter; if you do not add the -InformationAction common parameter,"
      ]
    },
    {
      "name": "compare-object",
      "description": "Compare two sets of objects e.g. compare the content within two files, one object is the reference set, one is the difference set. The result indicates where a property value appears: only in the Reference set (<=), only in the Difference set (=>), or in both (==) when -IncludeEqual is specified.",
      "syntax": "PS C:\\> $proc_before = get-process PS C:\\> notepad PS C:\\> $proc_after = get-process PS C:\\> compare-object -referenceobject $proc_before -differenceobject $proc_after -SyncWindow 1000",
      "examples": [
        "compare-object",
        "compare-object --help"
      ]
    },
    {
      "name": "complete-bitstransfer",
      "description": "Complete a Background Intelligent Transfer Service (BITS) transfer job.",
      "syntax": "complete-bitstransfer [options]",
      "examples": [
        "complete-bitstransfer",
        "complete-bitstransfer --help"
      ]
    },
    {
      "name": "complete-transaction",
      "description": "Commit the active transaction. All commands in the transaction are finalized and the data affected by the commands is changed.",
      "syntax": "PS HKCU:\\software> complete-transaction",
      "examples": [
        "complete-transaction",
        "complete-transaction --help"
      ]
    },
    {
      "name": "compress-archive",
      "description": "Create a new archive, or zipped file, from specified files and folders.",
      "syntax": "compress-archive [options]",
      "examples": [
        "compress-archive",
        "compress-archive --help"
      ]
    },
    {
      "name": "connect-pssession",
      "description": "The Connect-PSSession cmdlet reconnects to user-managed PowerShell sessions ( PSSessions ) that were disconnected. It works on sessions that are disconnected intentionally, such as by using Disconnect-PSSession or the InDisconnectedSession parameter of Invoke-Command , and those that were disconnected unintentionally, such as by a temporary network outage.",
      "syntax": "connect-pssession [options]",
      "examples": [
        "connect-pssession",
        "connect-pssession --help"
      ]
    },
    {
      "name": "connect-wsman",
      "description": "Connect to the WinRM service (Remote Management) on a remote computer.",
      "syntax": "connect-wsman [options]",
      "examples": [
        "connect-wsman",
        "connect-wsman --help"
      ]
    },
    {
      "name": "contains",
      "description": "Contains is a conditional operator that will test for the existence of one item in a collection, array or hashtable.",
      "syntax": "Syntax expression -contains expression",
      "examples": [
        "contains",
        "contains --help"
      ]
    },
    {
      "name": "continue",
      "description": "Return to top of a program loop, skip just this iteration of the loop.",
      "syntax": "continue",
      "examples": [
        "continue"
      ]
    },
    {
      "name": "convert-path",
      "description": "Convert a path from a Windows PowerShell path to a Windows PowerShell provider path.",
      "syntax": "PS C:\\> convert-path . C:\\Demo\\work",
      "examples": [
        "convert-path",
        "convert-path --help"
      ]
    },
    {
      "name": "convertfrom-csv",
      "description": "Create objects from CSV variable-length strings that are generated by ConvertTo-CSV.",
      "syntax": "C:\\PS> $date = get-date | convertto-csv -delimiter \";\" C:\\PS> convertfrom-csv -inputobject $date -delimiter \";\"",
      "examples": [
        "convertfrom-csv",
        "convertfrom-csv --help"
      ]
    },
    {
      "name": "convertfrom-json",
      "description": "Convert a JSON-formatted string to a custom object.",
      "syntax": "convertfrom-json [options]",
      "examples": [
        "convertfrom-json",
        "convertfrom-json --help"
      ]
    },
    {
      "name": "convertfrom-securestring",
      "description": "Convert a secure string into an encrypted standard string.",
      "syntax": "PS C:\\> $key = (3,42,2,3,100,34,254,222,1,1,2,23,42,54,33,233,1,64,2,7,6,5,35,43) PS C:\\> $standardstring = convertfrom-securestring $securestring -key $key",
      "examples": [
        "convertfrom-securestring",
        "convertfrom-securestring --help"
      ]
    },
    {
      "name": "convertfrom-stringdata",
      "description": "Convert a string containing one or more key/value pairs to a hash table.",
      "syntax": "C:\\PS>$my_here_string = @' ss64 = The first line of data. # This is a comment ss65 = Another line of data. ss66 = The last line of data. '@ C:\\PS> convertfrom-stringdata -stringdata $my_here_string",
      "examples": [
        "convertfrom-stringdata",
        "convertfrom-stringdata --help"
      ]
    },
    {
      "name": "convertto-csv",
      "description": "Convert .NET Framework objects into Comma-Separated Value (CSV) variable-length strings.",
      "syntax": "C:\\PS> $date = get-date C:\\PS> convertto-csv -inputobject $date -delimiter \";\" -notypeinformation",
      "examples": [
        "convertto-csv",
        "convertto-csv --help"
      ]
    },
    {
      "name": "convertto-html",
      "description": "Create an HTML page from one or more PowerShell objects.",
      "syntax": "PS C:\\> get-date | convertto-html",
      "examples": [
        "convertto-html",
        "convertto-html --help"
      ]
    },
    {
      "name": "convertto-json",
      "description": "Convert an object to a JSON-formatted string.",
      "syntax": "convertto-json [options]",
      "examples": [
        "convertto-json",
        "convertto-json --help"
      ]
    },
    {
      "name": "convertto-securestring",
      "description": "Convert an encrypted standard string into a secure string, can also convert plain text into a secure string.",
      "syntax": "PS C:\\> $my_secure_password = convertto-securestring \"P@ssW0rD!\" -asplaintext -force",
      "examples": [
        "convertto-securestring",
        "convertto-securestring --help"
      ]
    },
    {
      "name": "convertto-xml",
      "description": "Create an XML-based representation of one or more PowerShell objects.",
      "syntax": "PS C:\\> get-date | convertto-xml",
      "examples": [
        "convertto-xml",
        "convertto-xml --help"
      ]
    },
    {
      "name": "copy-item",
      "description": "Copy an item from one location to another within a namespace. Copy files and directories with the FileSystem provider or registry keys and registry entries with the Registry provider.",
      "syntax": "copy-item [options]",
      "examples": [
        "copy-item",
        "copy-item --help"
      ]
    },
    {
      "name": "copy-itemproperty",
      "description": "Copy a property along with its value",
      "syntax": "PS C:\\> copy-itemproperty -path HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run -destination HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Backup -name updateMgr",
      "examples": [
        "copy-itemproperty",
        "copy-itemproperty --help"
      ]
    },
    {
      "name": "disable-adaccount",
      "description": "Disable an Active Directory account.",
      "syntax": "disable-adaccount [options]",
      "examples": [
        "disable-adaccount",
        "disable-adaccount --help"
      ]
    },
    {
      "name": "disable-adoptionalfeature",
      "description": "Disable an Active Directory optional feature.",
      "syntax": "disable-adoptionalfeature [options]",
      "examples": [
        "disable-adoptionalfeature",
        "disable-adoptionalfeature --help"
      ]
    },
    {
      "name": "disable-computerrestore",
      "description": "Disable System Restore on a specified file system drive.",
      "syntax": "PS C:> disable-computerrestore -drive \"C:\\\"",
      "examples": [
        "disable-computerrestore",
        "disable-computerrestore --help"
      ]
    },
    {
      "name": "disable-psbreakpoint",
      "description": "Disable a breakpoint (or several breakpoints) in the current console, for debugging a .ps1 script.",
      "syntax": "PS C:> disable-psbreakpoint -id 0",
      "examples": [
        "disable-psbreakpoint",
        "disable-psbreakpoint --help"
      ]
    },
    {
      "name": "disable-psremoting",
      "description": "Prevent remote users from running commands on the local computer.",
      "syntax": "disable-psremoting [options]",
      "examples": [
        "disable-psremoting",
        "disable-psremoting --help"
      ]
    },
    {
      "name": "disable-pssessionconfiguration",
      "description": "Disable session configurations on the local computer.",
      "syntax": "disable-pssessionconfiguration [options]",
      "examples": [
        "disable-pssessionconfiguration",
        "disable-pssessionconfiguration --help"
      ]
    },
    {
      "name": "disable-scheduledjob",
      "description": "Disable a scheduled job.",
      "syntax": "disable-scheduledjob [options]",
      "examples": [
        "disable-scheduledjob",
        "disable-scheduledjob --help"
      ]
    },
    {
      "name": "disable-windowsoptionalfeature",
      "description": "Disable a feature in a Windows image.",
      "syntax": "disable-windowsoptionalfeature [options]",
      "examples": [
        "disable-windowsoptionalfeature",
        "disable-windowsoptionalfeature --help"
      ]
    },
    {
      "name": "disable-wsmancredssp",
      "description": "Disable Credential Security Service Provider (CredSSP) authentication on a client computer.",
      "syntax": "disable-wsmancredssp [options]",
      "examples": [
        "disable-wsmancredssp",
        "disable-wsmancredssp --help"
      ]
    },
    {
      "name": "disconnect-pssession",
      "description": "Disconnect from a session (an interactive session with a remote computer).",
      "syntax": "disconnect-pssession [options]",
      "examples": [
        "disconnect-pssession",
        "disconnect-pssession --help"
      ]
    },
    {
      "name": "disconnect-wsman",
      "description": "Disconnect the client from the WinRM service on a remote computer.",
      "syntax": "disconnect-wsman [options]",
      "examples": [
        "disconnect-wsman",
        "disconnect-wsman --help"
      ]
    },
    {
      "name": "do",
      "description": "Run a command block based on the results of a conditional test.",
      "syntax": "do [options]",
      "examples": [
        "do",
        "do --help"
      ]
    },
    {
      "name": "enable-adaccount",
      "description": "Enable an Active Directory account.",
      "syntax": "enable-adaccount [options]",
      "examples": [
        "enable-adaccount",
        "enable-adaccount --help"
      ]
    },
    {
      "name": "enable-adoptionalfeature",
      "description": "Enable an Active Directory optional feature.",
      "syntax": "enable-adoptionalfeature [options]",
      "examples": [
        "enable-adoptionalfeature",
        "enable-adoptionalfeature --help"
      ]
    },
    {
      "name": "enable-bitlocker",
      "description": "Enable encryption for a BitLocker volume.",
      "syntax": "enable-bitlocker [options]",
      "examples": [
        "enable-bitlocker",
        "enable-bitlocker --help"
      ]
    },
    {
      "name": "enable-bitLockerautounlock-2",
      "description": "The page you’re looking for can’t be found. Try the search box above or return to the home page.",
      "syntax": "enable-bitLockerautounlock-2 [options]",
      "examples": [
        "enable-bitLockerautounlock-2",
        "enable-bitLockerautounlock-2 --help"
      ]
    },
    {
      "name": "enable-bitlockerautounlock",
      "description": "Enable encryption for a BitLocker volume.",
      "syntax": "enable-bitlockerautounlock [options]",
      "examples": [
        "enable-bitlockerautounlock",
        "enable-bitlockerautounlock --help"
      ]
    },
    {
      "name": "enable-computerrestore",
      "description": "Turn on System Restore on a specified file system drive.",
      "syntax": "PS C:> enable-computerrestore -drive \"C:\\\"",
      "examples": [
        "enable-computerrestore",
        "enable-computerrestore --help"
      ]
    },
    {
      "name": "enable-psbreakpoint",
      "description": "Enable a breakpoint (or several breakpoints) in the current console, for debugging a .ps1 script.",
      "syntax": "PS C:> enable-psbreakpoint -id 0,5",
      "examples": [
        "enable-psbreakpoint",
        "enable-psbreakpoint --help"
      ]
    },
    {
      "name": "enable-psremoting",
      "description": "Configure the computer to receive remote commands. Run PowerShell commands on remote computers.",
      "syntax": "PS C:\\> psexec \\\\PC64 -u adminUser64 -p pa$$w0rd -h -d powershell.exe \"enable-psremoting -force\"",
      "examples": [
        "enable-psremoting",
        "enable-psremoting --help"
      ]
    },
    {
      "name": "enable-pssessionconfiguration",
      "description": "Enable session configurations on the local computer.",
      "syntax": "enable-pssessionconfiguration [options]",
      "examples": [
        "enable-pssessionconfiguration",
        "enable-pssessionconfiguration --help"
      ]
    },
    {
      "name": "enable-scheduledjob",
      "description": "Enable a scheduled job.",
      "syntax": "enable-scheduledjob [options]",
      "examples": [
        "enable-scheduledjob",
        "enable-scheduledjob --help"
      ]
    },
    {
      "name": "enable-windowsoptionalfeature",
      "description": "Enable a feature in a Windows image.",
      "syntax": "enable-windowsoptionalfeature [options]",
      "examples": [
        "enable-windowsoptionalfeature",
        "enable-windowsoptionalfeature --help"
      ]
    },
    {
      "name": "enable-wsmancredssp",
      "description": "Enable Credential Security Service Provider (CredSSP) authentication on a client computer.",
      "syntax": "PS C:> enable-wsmancredssp -role client -delegatecomputer server02.ss64.com",
      "examples": [
        "enable-wsmancredssp",
        "enable-wsmancredssp --help"
      ]
    },
    {
      "name": "enter-pssession",
      "description": "Start an interactive session with a remote computer. This allows running multiple commands.",
      "syntax": "PS C:> enter-pssession -computer Server64Server64\\PS> get-process powershell > C:\\ps-test\\process.txtServer01\\PS> exit-pssession",
      "examples": [
        "enter-pssession",
        "enter-pssession --help"
      ]
    },
    {
      "name": "eq",
      "description": "Eq is a comparison operator that will test if one numeric or string expression is equal to another,",
      "syntax": "Syntax expression -eq expression",
      "examples": [
        "eq",
        "eq --help"
      ]
    },
    {
      "name": "exit-pssession",
      "description": "End an interactive PowerShell session (with a local or remote computer).",
      "syntax": "exit-pssession [options]",
      "examples": [
        "exit-pssession",
        "exit-pssession --help"
      ]
    },
    {
      "name": "expand-archive",
      "description": "Extract files from an archive (zipped) file.",
      "syntax": "expand-archive [options]",
      "examples": [
        "expand-archive",
        "expand-archive --help"
      ]
    },
    {
      "name": "export-alias",
      "description": "Export information about currently-defined aliases to a file.",
      "syntax": "PS C:> export-alias -path alias.txt -as script",
      "examples": [
        "export-alias",
        "export-alias --help"
      ]
    },
    {
      "name": "export-clixml",
      "description": "Export to an XML file, any text string or PowerShell object can be represented in XML.",
      "syntax": "PS C:> \"This text will become XML\" | export-clixml c:\\SimpleDemo.xml",
      "examples": [
        "export-clixml",
        "export-clixml --help"
      ]
    },
    {
      "name": "export-console",
      "description": "Export the current console configuration to a file so that you can reuse or share it. The console configuration saved will include snap-ins and console properties. The file can then be specified when PowerShell is opened making the snap-in available immediately.",
      "syntax": "PS C:>export-console -path $pshome\\Consoles\\ConsoleS1.psc1",
      "examples": [
        "export-console",
        "export-console --help"
      ]
    },
    {
      "name": "export-counter",
      "description": "Export PerformanceCounterSampleSet objects to log files. Export-Counter is designed to export data that is returned by Get-Counter and Import-Counter.",
      "syntax": "PS C:> get-counter \"\\Processor(*)\\% Processor Time\" -max 50 | export-counter -path $home\\myproc.blg",
      "examples": [
        "export-counter",
        "export-counter --help"
      ]
    },
    {
      "name": "export-csv",
      "description": "Export a PowerShell object to a comma-separated values (CSV) file.",
      "syntax": "PS C:> get-process wmiprvse | select-object basePriority,ID,SessionID,WorkingSet | export-csv -path data.csv",
      "examples": [
        "export-csv",
        "export-csv --help"
      ]
    },
    {
      "name": "export-formatdata",
      "description": "Save formatting data from the current session to a file.",
      "syntax": "PS C:> get-formatdata -typename * | export-formatdata -path SS64.format.ps1xml -IncludeScriptBlock",
      "examples": [
        "export-formatdata",
        "export-formatdata --help"
      ]
    },
    {
      "name": "export-modulemember",
      "description": "Specifies the module members that are exported.",
      "syntax": "export-modulemember [options]",
      "examples": [
        "export-modulemember",
        "export-modulemember --help"
      ]
    },
    {
      "name": "export-pssession",
      "description": "Import commands from another session and save them in a Windows PowerShell module.",
      "syntax": "PS C:> $sess = new-pssession -computerName Server64PS C:> export-pssession -session $sess -outputModule Server64",
      "examples": [
        "export-pssession",
        "export-pssession --help"
      ]
    },
    {
      "name": "for",
      "description": "Run a command block based on a conditional test.",
      "syntax": "PS> for($i=1; $i -le 10; $i++){Write-Host $i}",
      "examples": [
        "for (init; condition; repeat)"
      ]
    },
    {
      "name": "foreach-method",
      "description": "Loop through a collection (or a set of properties) and perform an operation (execute a block of statements) against each.",
      "syntax": "foreach-method [options]",
      "examples": [
        "foreach-method",
        "foreach-method --help"
      ]
    },
    {
      "name": "foreach-object",
      "description": "Perform an operation (execute a block of statements) against each item in a collection of input objects, typically passed through the pipeline.",
      "syntax": "PS C:> get-childitem C:\\ | foreach-object -process { $_.length / 1024 }",
      "examples": [
        "foreach-object",
        "foreach-object --help"
      ]
    },
    {
      "name": "foreach",
      "description": "Loop through a set of input objects and perform an operation (execute a block of statements) against each.",
      "syntax": "foreach",
      "examples": [
        "foreach",
        "foreach",
        "foreach"
      ]
    },
    {
      "name": "format-custom",
      "description": "Use a customized view to format PowerShell output.",
      "syntax": "PS C:\\> get-process Winlogon | format-custom -view MyCustomView",
      "examples": [
        "format-custom",
        "format-custom --help"
      ]
    },
    {
      "name": "format-list",
      "description": "Format output as a list of object properties, each on a new line.",
      "syntax": "PS C:\\> get-process | format-list -property name, path",
      "examples": [
        "format-list",
        "format-list --help"
      ]
    },
    {
      "name": "format-table",
      "description": "Format output as a table.",
      "syntax": "PS C:\\> get-pssnapin | format-table -wrap",
      "examples": [
        "format-table",
        "format-table --help"
      ]
    },
    {
      "name": "format-wide",
      "description": "Format objects as a wide table that displays only one property of each object.",
      "syntax": "PS C:\\> get-childitem | format-wide -column 3",
      "examples": [
        "format-wide",
        "format-wide --help"
      ]
    },
    {
      "name": "get-acl",
      "description": "Get the Access Control List (permissions) for a file or registry key.",
      "syntax": "PS C:\\> get-acl C:\\windows",
      "examples": [
        "get-acl [[-Path] path [] ]  [-Filter String]"
      ]
    },
    {
      "name": "get-adaccountauthorizationgroup",
      "description": "Get all the security groups in which an account is a direct or indirect member. The returned set does not include Distribution Groups but can include additional groups that the system would consider the user a member of for authorization purposes.",
      "syntax": "get-adaccountauthorizationgroup [options]",
      "examples": [
        "get-adaccountauthorizationgroup",
        "get-adaccountauthorizationgroup --help"
      ]
    },
    {
      "name": "get-adaccountresultantpasswordreplicationpolicy",
      "description": "Get the resultant password replication policy for an AD account.",
      "syntax": "get-adaccountresultantpasswordreplicationpolicy [options]",
      "examples": [
        "get-adaccountresultantpasswordreplicationpolicy",
        "get-adaccountresultantpasswordreplicationpolicy --help"
      ]
    },
    {
      "name": "get-adcomputer",
      "description": "Get one or more Active Directory computers.",
      "syntax": "get-adcomputer [options]",
      "examples": [
        "get-adcomputer",
        "get-adcomputer --help"
      ]
    },
    {
      "name": "get-adcomputerserviceaccount",
      "description": "Get the service accounts that are hosted by an AD computer.",
      "syntax": "get-adcomputerserviceaccount [options]",
      "examples": [
        "get-adcomputerserviceaccount",
        "get-adcomputerserviceaccount --help"
      ]
    },
    {
      "name": "get-addefaultdomainpasswordpolicy",
      "description": "Get the default password policy for an Active Directory domain.",
      "syntax": "get-addefaultdomainpasswordpolicy [options]",
      "examples": [
        "get-addefaultdomainpasswordpolicy",
        "get-addefaultdomainpasswordpolicy --help"
      ]
    },
    {
      "name": "get-addomain",
      "description": "Get an Active Directory domain.",
      "syntax": "get-addomain [options]",
      "examples": [
        "get-addomain",
        "get-addomain --help"
      ]
    },
    {
      "name": "get-addomaincontroller",
      "description": "Gets one or more AD domain controllers based on discoverable services criteria, search parameters or by providing a domain controller identifier.",
      "syntax": "get-addomaincontroller [options]",
      "examples": [
        "get-addomaincontroller",
        "get-addomaincontroller --help"
      ]
    },
    {
      "name": "get-adfinegrainedpasswordpolicy",
      "description": "Get one or more AD fine grained password policies.",
      "syntax": "get-adfinegrainedpasswordpolicy [options]",
      "examples": [
        "get-adfinegrainedpasswordpolicy",
        "get-adfinegrainedpasswordpolicy --help"
      ]
    },
    {
      "name": "get-adfinegrainedpasswordpolicysubject",
      "description": "Get the users and groups to which a fine grained password policy is applied.",
      "syntax": "get-adfinegrainedpasswordpolicysubject [options]",
      "examples": [
        "get-adfinegrainedpasswordpolicysubject",
        "get-adfinegrainedpasswordpolicysubject --help"
      ]
    },
    {
      "name": "get-adforest",
      "description": "Get an Active Directory forest.",
      "syntax": "get-adforest [options]",
      "examples": [
        "get-adforest",
        "get-adforest --help"
      ]
    },
    {
      "name": "get-adgroup",
      "description": "Get one or more Active Directory groups.",
      "syntax": "get-adgroup [options]",
      "examples": [
        "get-adgroup",
        "get-adgroup --help"
      ]
    },
    {
      "name": "get-adgroupmember",
      "description": "Get the members of an Active Directory group.",
      "syntax": "PS C:\\> get-adgroupmember -Identity \"Administrators\" -Recursive | select DistinguishedName",
      "examples": [
        "get-adgroupmember",
        "get-adgroupmember --help"
      ]
    },
    {
      "name": "get-adobject",
      "description": "Get one or more AD objects.",
      "syntax": "get-adobject [options]",
      "examples": [
        "get-adobject",
        "get-adobject --help"
      ]
    },
    {
      "name": "get-adomaincontrollerpasswordreplicationpolicy",
      "description": "Get the members of the allowed list or denied list of a read-only domain controller's password replication policy.",
      "syntax": "get-adomaincontrollerpasswordreplicationpolicy [options]",
      "examples": [
        "get-adomaincontrollerpasswordreplicationpolicy",
        "get-adomaincontrollerpasswordreplicationpolicy --help"
      ]
    },
    {
      "name": "get-adomaincontrollerpasswordreplicationpolicyusage",
      "description": "Get the Active Directory accounts that are authenticated by a read-only domain controller or that are in the revealed list of the domain controller.",
      "syntax": "get-adomaincontrollerpasswordreplicationpolicyusage [options]",
      "examples": [
        "get-adomaincontrollerpasswordreplicationpolicyusage",
        "get-adomaincontrollerpasswordreplicationpolicyusage --help"
      ]
    },
    {
      "name": "get-adoptionalfeature",
      "description": "Get an Active Directory optional feature.",
      "syntax": "get-adoptionalfeature [options]",
      "examples": [
        "get-adoptionalfeature",
        "get-adoptionalfeature --help"
      ]
    },
    {
      "name": "get-adorganizationalunit",
      "description": "Get one or more Active Directory organizational units.",
      "syntax": "get-adorganizationalunit [options]",
      "examples": [
        "get-adorganizationalunit",
        "get-adorganizationalunit --help"
      ]
    },
    {
      "name": "get-adprincipalgroupmembership",
      "description": "Get the Active Directory groups that have a specified user, computer, group, or service account.",
      "syntax": "PS C:\\> get-adprincipalgroupmembership -server localhost:60000 -identity \"CN=Simon,DC=AppNC\" -partition \"DC=SS64\"",
      "examples": [
        "get-adprincipalgroupmembership",
        "get-adprincipalgroupmembership --help"
      ]
    },
    {
      "name": "get-adrootdse",
      "description": "Get the root of a Directory Server information tree.",
      "syntax": "get-adrootdse [options]",
      "examples": [
        "get-adrootdse",
        "get-adrootdse --help"
      ]
    },
    {
      "name": "get-adserviceaccount",
      "description": "Get one or more Active Directory service accounts.",
      "syntax": "get-adserviceaccount [options]",
      "examples": [
        "get-adserviceaccount",
        "get-adserviceaccount --help"
      ]
    },
    {
      "name": "get-aduser",
      "description": "Get one or more Active Directory users.",
      "syntax": "get-aduser [options]",
      "examples": [
        "get-aduser",
        "get-aduser --help"
      ]
    },
    {
      "name": "get-aduserresultantpasswordpolicy",
      "description": "Get the resultant password policy for a user.",
      "syntax": "get-aduserresultantpasswordpolicy [options]",
      "examples": [
        "get-aduserresultantpasswordpolicy",
        "get-aduserresultantpasswordpolicy --help"
      ]
    },
    {
      "name": "get-alias",
      "description": "Return alias names for Cmdlets. An alias is an alternate (usually shorter) name for a cmdlet, script, function, or executable file. By default, Get-Alias takes an alias and returns the command name, with the -Definition parameter set, Get-Alias will accept a command name and return its alias.",
      "syntax": "PS C:\\> get-alias",
      "examples": [
        "get-alias",
        "get-alias --help"
      ]
    },
    {
      "name": "get-appxpackage",
      "description": "Gets a list of the app packages that are installed in a user profile.",
      "syntax": "get-appxpackage [options]",
      "examples": [
        "get-appxpackage",
        "get-appxpackage --help"
      ]
    },
    {
      "name": "get-authenticodesignature",
      "description": "Get the signature object associated with a file, if the file is not signed, then blank fields will be retrieved.",
      "syntax": "get-authenticodesignature [options]",
      "examples": [
        "get-authenticodesignature",
        "get-authenticodesignature --help"
      ]
    },
    {
      "name": "get-bitlockervolume",
      "description": "Get information about volumes that BitLocker can protect.",
      "syntax": "get-bitlockervolume [options]",
      "examples": [
        "get-bitlockervolume",
        "get-bitlockervolume --help"
      ]
    },
    {
      "name": "get-bitstransfer",
      "description": "Retrieve the associated BitsJob object for an existing Background Intelligent Transfer Service (BITS) transfer job.",
      "syntax": "get-bitstransfer [options]",
      "examples": [
        "get-bitstransfer",
        "get-bitstransfer --help"
      ]
    },
    {
      "name": "get-childitem",
      "description": "Get the items and child items in a folder or registry key. If the item is a container, it gets the items inside the container, known as child items. You can use the Recurse parameter to get items in all child containers. Aliases: dir / ls / gci",
      "syntax": "get-childitem c:\\music\\*.mp3",
      "examples": [
        "get-childitem c:\\music\\*.mp3",
        "get-childitem c:\\music\\ -include *.mp3 -recurse",
        "get-childitem"
      ]
    },
    {
      "name": "get-cimassociatedinstance",
      "description": "Retrieve the CIM instances that are connected to a specific CIM instance by an association.",
      "syntax": "get-cimassociatedinstance [options]",
      "examples": [
        "get-cimassociatedinstance",
        "get-cimassociatedinstance --help"
      ]
    },
    {
      "name": "get-cimclass",
      "description": "Get a list of CIM classes in a specific namespace.",
      "syntax": "get-cimclass [options]",
      "examples": [
        "get-cimclass",
        "get-cimclass --help"
      ]
    },
    {
      "name": "get-ciminstance",
      "description": "Get the CIM instances of a class from a CIM server. Equivalent to the old WMI cmdlet Get-WmiObject , the CIM version uses WSMAN (WinRM) to connect to remote machines and is therefore an order of magnitude faster.",
      "syntax": "get-ciminstance [options]",
      "examples": [
        "get-ciminstance",
        "get-ciminstance --help"
      ]
    },
    {
      "name": "get-cimsession",
      "description": "Get the CIM session objects created in the current wps_1 session.",
      "syntax": "get-cimsession [options]",
      "examples": [
        "get-cimsession",
        "get-cimsession --help"
      ]
    },
    {
      "name": "get-clipboard",
      "description": "Get the current Windows clipboard entry.",
      "syntax": "get-clipboard [options]",
      "examples": [
        "get-clipboard",
        "get-clipboard --help"
      ]
    },
    {
      "name": "get-command",
      "description": "Get basic information about PowerShell commands: cmdlets, files and functions.",
      "syntax": "PS C:\\> get-command -verb set | format-list PS C:\\> get-command -verb set | format list *",
      "examples": [
        "get-command",
        "get-command --help"
      ]
    },
    {
      "name": "get-computerinfo",
      "description": "Get system and operating system properties. PowerShell 5+",
      "syntax": "get-computerinfo [options]",
      "examples": [
        "get-computerinfo",
        "get-computerinfo --help"
      ]
    },
    {
      "name": "get-computerrestorepoint",
      "description": "Gets the restore points on the local computer.",
      "syntax": "PS C:> get-computerrestorepoint",
      "examples": [
        "get-computerrestorepoint",
        "get-computerrestorepoint --help"
      ]
    },
    {
      "name": "get-content",
      "description": "Get the content of the item at the specified location. Get-Content reads the content one line at a time and returns an object for each line.",
      "syntax": "PS C:\\> get-content -Path C:\\myFile.txt",
      "examples": [
        "get-content",
        "get-content --help"
      ]
    },
    {
      "name": "get-counter",
      "description": "Get performance counter data from local and remote computers.",
      "syntax": "PS C:> get-counter -ListSet *",
      "examples": [
        "get-counter",
        "get-counter --help"
      ]
    },
    {
      "name": "get-credential",
      "description": "Get a security credential object based on a user name and password.",
      "syntax": "PS C:\\> Get-WmiObject Win32_DiskDrive -ComputerName Server64 -Credential (get-credential Domain01\\User64)",
      "examples": [
        "get-credential",
        "get-credential --help"
      ]
    },
    {
      "name": "get-culture",
      "description": "Get information about regional settings e.g. current language and keyboard layout.",
      "syntax": "PS C:\\> $c = get-culture PS C:\\> $c | format-list -property * PS C:\\> $c.calendar PS C:\\> $c.datetimeformat PS C:\\> $c.datetimeformat.firstdayofweek",
      "examples": [
        "get-culture",
        "get-culture --help"
      ]
    },
    {
      "name": "get-date",
      "description": "Get the current date and time.",
      "syntax": "get-date | get-member",
      "examples": [
        "get-date | get-member",
        "get-date -month 2 -day 31",
        "get-date -uformat"
      ]
    },
    {
      "name": "get-dnsclientcache",
      "description": "Retrieve the content of the local DNS client cache.",
      "syntax": "get-dnsclientcache [options]",
      "examples": [
        "get-dnsclientcache",
        "get-dnsclientcache --help"
      ]
    },
    {
      "name": "get-dscconfiguration",
      "description": "Get the current configuration of the node. (PowerShell 4.0+)",
      "syntax": "get-dscconfiguration [options]",
      "examples": [
        "get-dscconfiguration",
        "get-dscconfiguration --help"
      ]
    },
    {
      "name": "get-dsclocalconfigurationmanager",
      "description": "Get Local Configuration Manager settings, or meta-configuration, for the node. (PowerShell 4.0+)",
      "syntax": "get-dsclocalconfigurationmanager [options]",
      "examples": [
        "get-dsclocalconfigurationmanager",
        "get-dsclocalconfigurationmanager --help"
      ]
    },
    {
      "name": "get-dscresource",
      "description": "Get Desired State Config. resources from a computer.",
      "syntax": "get-dscresource [options]",
      "examples": [
        "get-dscresource",
        "get-dscresource --help"
      ]
    },
    {
      "name": "get-event",
      "description": "Get the events in the PowerShell event queue for the current session.",
      "syntax": "PS C:\\> get-event",
      "examples": [
        "get-event",
        "get-event --help"
      ]
    },
    {
      "name": "get-eventlog",
      "description": "Get eventlog data, list the event logs.",
      "syntax": "PS C:\\> get-eventlog -newest 50 -logname application",
      "examples": [
        "get-eventlog",
        "get-eventlog --help"
      ]
    },
    {
      "name": "get-eventsubscriber",
      "description": "Get the event subscribers in the current session.",
      "syntax": "get-eventsubscriber [options]",
      "examples": [
        "get-eventsubscriber",
        "get-eventsubscriber --help"
      ]
    },
    {
      "name": "get-executionpolicy",
      "description": "Get the current execution policy for the shell.",
      "syntax": "PS C:\\> get-executionpolicy",
      "examples": [
        "get-executionpolicy",
        "get-executionpolicy --help"
      ]
    },
    {
      "name": "get-filehash",
      "description": "Compute the hash value for a file by using a specified hash algorithm.",
      "syntax": "get-filehash [options]",
      "examples": [
        "get-filehash",
        "get-filehash --help"
      ]
    },
    {
      "name": "get-formatdata",
      "description": "Save formatting data from the current session to a file.",
      "syntax": "PS C:> get-formatdata",
      "examples": [
        "get-formatdata",
        "get-formatdata --help"
      ]
    },
    {
      "name": "get-help",
      "description": "Display information about Windows PowerShell cmdlets and concepts.",
      "syntax": "PS C:\\> get-help *",
      "examples": [
        "get-help",
        "get-help --help"
      ]
    },
    {
      "name": "get-history",
      "description": "Get a list of the commands entered during the current session.",
      "syntax": "get-history -count 1",
      "examples": [
        "get-history -count 1"
      ]
    },
    {
      "name": "get-host",
      "description": "Get host information (PowerShell Version and Region), Gets a reference to the current console host object.",
      "syntax": "PS C:\\> get-host",
      "examples": [
        "get-host",
        "get-host --help"
      ]
    },
    {
      "name": "get-hotfix",
      "description": "Get the hotfixes that have been applied to the local and remote computers.",
      "syntax": "PS C:\\> get-hotfix",
      "examples": [
        "get-hotfix",
        "get-hotfix --help"
      ]
    },
    {
      "name": "get-item",
      "description": "Get a file/registry object (or any other namespace object)",
      "syntax": "PS C:\\> get-item .",
      "examples": [
        "get-item",
        "get-item --help"
      ]
    },
    {
      "name": "get-itemproperty",
      "description": "Get the properties of a specified item.",
      "syntax": "PS C:\\> get-itemproperty C:\\Windows",
      "examples": [
        "get-itemproperty -path HKLM:\\SOFTWARE\\Microsoft\\.NETFramework -name  \"InstallRoot\""
      ]
    },
    {
      "name": "get-job",
      "description": "Get PowerShell background jobs that are running in the current session.",
      "syntax": "PS C:\\> get-job",
      "examples": [
        "get-job",
        "get-job --help"
      ]
    },
    {
      "name": "get-jobtrigger",
      "description": "Get the job triggers of scheduled jobs.",
      "syntax": "get-jobtrigger [options]",
      "examples": [
        "get-jobtrigger",
        "get-jobtrigger --help"
      ]
    },
    {
      "name": "get-location",
      "description": "Get and display the current location.",
      "syntax": "PS C:\\> get-location",
      "examples": [
        "get-location",
        "get-location --help"
      ]
    },
    {
      "name": "get-member",
      "description": "Get the properties and methods of object(s).",
      "syntax": "PS C:\\> get-process | get-member -MemberType property",
      "examples": [
        "get-member"
      ]
    },
    {
      "name": "get-module",
      "description": "Get the modules that have been imported or that can be imported into the current session.",
      "syntax": "get-module [options]",
      "examples": [
        "get-module",
        "get-module --help"
      ]
    },
    {
      "name": "get-pfxcert",
      "description": "Get pfx certificate information. Pfx = Personal Information Exchange, each .pfx file includes both a certificate and a private key.",
      "syntax": "PS C:\\> get-pfxcertificate -filepath C:\\windows\\system32\\ss64.pfx",
      "examples": [
        "get-pfxcert",
        "get-pfxcert --help"
      ]
    },
    {
      "name": "get-process",
      "description": "Get a list of processes running on a machine",
      "syntax": "PS C:> get-process",
      "examples": [
        "get-process",
        "get-process --help"
      ]
    },
    {
      "name": "get-psbreakpoint",
      "description": "Get the breakpoints that are set in the current session, for debugging a .ps1 script.",
      "syntax": "PS C:> get-psbreakpoint",
      "examples": [
        "get-psbreakpoint",
        "get-psbreakpoint --help"
      ]
    },
    {
      "name": "get-pscallstack",
      "description": "Display the current call stack.",
      "syntax": "get-pscallstack [options]",
      "examples": [
        "get-pscallstack",
        "get-pscallstack --help"
      ]
    },
    {
      "name": "get-psdrive",
      "description": "Get drive information (gdr)",
      "syntax": "PS C:\\> get-psdrive",
      "examples": [
        "get-psdrive",
        "get-psdrive --help"
      ]
    },
    {
      "name": "get-psprovider",
      "description": "Get information about a PowerShell provider.",
      "syntax": "PS C:\\> get-psprovider",
      "examples": [
        "get-psprovider",
        "get-psprovider --help"
      ]
    },
    {
      "name": "get-pssession",
      "description": "Get the PowerShell sessions (PSSessions) in the current session.",
      "syntax": "PS C:> get-pssession",
      "examples": [
        "get-pssession",
        "get-pssession --help"
      ]
    },
    {
      "name": "get-pssessionconfiguration",
      "description": "Get the session configurations that have been registered on the local computer. This is an advanced cmdlet for system administrators to manage custom session configurations for their users.",
      "syntax": "PS C:> get-pssessionconfiguration",
      "examples": [
        "get-pssessionconfiguration",
        "get-pssessionconfiguration --help"
      ]
    },
    {
      "name": "get-pssnapin",
      "description": "List PowerShell snap-ins on this computer.",
      "syntax": "get-pssnapin [options]",
      "examples": [
        "get-pssnapin",
        "get-pssnapin --help"
      ]
    },
    {
      "name": "get-random",
      "description": "Get a random number, or select objects randomly from a collection.",
      "syntax": "PS C:> get-random",
      "examples": [
        "get-random",
        "get-random --help"
      ]
    },
    {
      "name": "get-scheduledjob",
      "description": "Get scheduled jobs on the local computer.",
      "syntax": "get-scheduledjob [options]",
      "examples": [
        "get-scheduledjob",
        "get-scheduledjob --help"
      ]
    },
    {
      "name": "get-scheduledjoboption",
      "description": "Get the job options of scheduled jobs.",
      "syntax": "get-scheduledjoboption [options]",
      "examples": [
        "get-scheduledjoboption",
        "get-scheduledjoboption --help"
      ]
    },
    {
      "name": "get-service",
      "description": "Get the services on the local computer.",
      "syntax": "PS C:\\> get-service",
      "examples": [
        "get-service | get-member"
      ]
    },
    {
      "name": "get-smbconnection",
      "description": "Retrieve the connections established from the SMB client to any SMB servers. Users can connect to an SMB share using credentials different than the associated logon credentials so that there will be a connection listed per share per user logon per credential used.",
      "syntax": "get-smbconnection [options]",
      "examples": [
        "get-smbconnection",
        "get-smbconnection --help"
      ]
    },
    {
      "name": "get-smbmapping",
      "description": "Get the drives mapped to an SMB share. Requires PowerShell 5.0+ and Windows 10.",
      "syntax": "get-smbmapping [options]",
      "examples": [
        "get-smbmapping",
        "get-smbmapping --help"
      ]
    },
    {
      "name": "get-tracesource",
      "description": "Get the PowerShell components that are instrumented for tracing.",
      "syntax": "PS C:\\> get-tracesource",
      "examples": [
        "get-tracesource",
        "get-tracesource --help"
      ]
    },
    {
      "name": "get-transaction",
      "description": "Get the current (active) transaction.",
      "syntax": "PS C:\\> get-transaction | get-member",
      "examples": [
        "get-transaction",
        "get-transaction --help"
      ]
    },
    {
      "name": "get-uiculture",
      "description": "Get information about the current User Interface Culture for PowerShell",
      "syntax": "PS C:\\> get-uiculture PS C:\\> get-uiculture | format-list *",
      "examples": [
        "get-uiculture",
        "get-uiculture --help"
      ]
    },
    {
      "name": "get-unique",
      "description": "Return the unique items from a sorted list.",
      "syntax": "PS C:\\> gci C:\\ -include *.xls -recurse |foreach {$_.directoryName} | get-unique",
      "examples": [
        "get-unique",
        "get-unique --help"
      ]
    },
    {
      "name": "get-variable",
      "description": "Get PowerShell variables in the current console.",
      "syntax": "PS C:\\> get-variable p*",
      "examples": [
        "get-variable",
        "get-variable --help"
      ]
    },
    {
      "name": "get-webapplicationmonitoringstatus",
      "description": "Get the monitoring status of all monitored web applications. Returns a list of monitored application objects containing the name of the web application, the name of the application pool, and the monitoring mode. PowerShell 4.0+",
      "syntax": "get-webapplicationmonitoringstatus [options]",
      "examples": [
        "get-webapplicationmonitoringstatus",
        "get-webapplicationmonitoringstatus --help"
      ]
    },
    {
      "name": "get-windowscapability",
      "description": "Get Windows capabilities for an image or a running operating system.",
      "syntax": "get-windowscapability [options]",
      "examples": [
        "get-windowscapability",
        "get-windowscapability --help"
      ]
    },
    {
      "name": "get-windowsfeature",
      "description": "Retrieve information about roles, role services, and features that are available on a computer (Windows Server 2008 R2 - 2012 R2).",
      "syntax": "get-windowsfeature [options]",
      "examples": [
        "get-windowsfeature",
        "get-windowsfeature --help"
      ]
    },
    {
      "name": "get-windowsoptionalfeature",
      "description": "Get information about optional features in a Windows image.",
      "syntax": "get-windowsoptionalfeature [options]",
      "examples": [
        "get-windowsoptionalfeature",
        "get-windowsoptionalfeature --help"
      ]
    },
    {
      "name": "get-winevent",
      "description": "Get events from event logs and event tracing log files on local and remote computers.",
      "syntax": "PS C:\\> get-winevent -listlog *",
      "examples": [
        "get-winevent",
        "get-winevent --help"
      ]
    },
    {
      "name": "get-wmiobject",
      "description": "Get WMI class information, instances of classes or available classes. Deprecated cmdlet.",
      "syntax": "get-wmiobject [options]",
      "examples": [
        "get-wmiobject",
        "get-wmiobject --help"
      ]
    },
    {
      "name": "get-wsmancredssp",
      "description": "Get the Credential Security Service Provider-related configuration.",
      "syntax": "PS C:> get-wsmancredssp",
      "examples": [
        "get-wsmancredssp",
        "get-wsmancredssp --help"
      ]
    },
    {
      "name": "get-wsmaninstance",
      "description": "Display management information for a resource instance specified by a Resource URI.",
      "syntax": "PS C:\\> get-wsmaninstance wmicimv2/win32_service -selectorset @{name=\"spooler\"} -computername server64",
      "examples": [
        "get-wsmaninstance",
        "get-wsmaninstance --help"
      ]
    },
    {
      "name": "group-object",
      "description": "Group objects that contain the same value.",
      "syntax": "PS C:\\> get-childitem *.doc | group-object -property length",
      "examples": [
        "group-object",
        "group-object --help"
      ]
    },
    {
      "name": "if",
      "description": "Conditionally perform a command.",
      "syntax": "Elseif()",
      "examples": [
        "if ( condition ) { commands_to_execute }",
        "if ($_.status -eq \"stopped\") { write-host -f red $_.name $_.status }"
      ]
    },
    {
      "name": "import-alias",
      "description": "Import an alias list from a file.",
      "syntax": "PS C:\\> import-alias SS64.txt",
      "examples": [
        "import-alias",
        "import-alias --help"
      ]
    },
    {
      "name": "import-clixml",
      "description": "Import a CLIXML file and create corresponding objects within PowerShell.",
      "syntax": "PS C:> get-process | export-clixml proc.xml $processes = import-clixml proc.xml",
      "examples": [
        "import-clixml",
        "import-clixml --help"
      ]
    },
    {
      "name": "import-counter",
      "description": "Import performance counter log files (.blg, .csv, .tsv) and create the objects that represent each counter sample in the log.",
      "syntax": "PS C:> $svc = import-counter -path C:\\services.csv",
      "examples": [
        "import-counter",
        "import-counter --help"
      ]
    },
    {
      "name": "import-csv",
      "description": "Import comma-separated value (CSV) files in the format produced by Export-CSV.",
      "syntax": "PS C:\\> get-process | export-csv processes.csv -Delimiter : PS C:\\> $p = import-csv processes.csv -Delimiter :",
      "examples": [
        "import-csv",
        "import-csv --help"
      ]
    },
    {
      "name": "import-gpo",
      "description": "Import Group Policy settings into a specified GPO from a GPO backup.",
      "syntax": "PS C:\\> import-gpo -BackupGpoName SS64 -TargetName DemoGPO -path C:\\Gpobackups",
      "examples": [
        "import-gpo",
        "import-gpo --help"
      ]
    },
    {
      "name": "import-module",
      "description": "Add modules to the current session. Beginning in PowerShell 3.0, modules are imported automatically when any cmdlet or function in the module is used in a command. This feature works on any module in a directory that is included in the value of the PSModulePath environment variable.",
      "syntax": "import-module [options]",
      "examples": [
        "import-module",
        "import-module --help"
      ]
    },
    {
      "name": "import-pssession",
      "description": "Import commands from another session into the current session.",
      "syntax": "PS C:> $sesh = new-pssession -computername Server64PS C:> import-pssession -session $sesh",
      "examples": [
        "import-pssession",
        "import-pssession --help"
      ]
    },
    {
      "name": "index-2",
      "description": "The cmdlets above are listed in A-Z order, matching the Verb- and/or -Noun and/or Alias of the cmdlet (so some duplicates).",
      "syntax": "index-2 [options]",
      "examples": [
        "index-2",
        "index-2 --help"
      ]
    },
    {
      "name": "insert",
      "description": "insert is a method that will insert one string into another.",
      "syntax": "insert [options]",
      "examples": [
        "insert",
        "insert --help"
      ]
    },
    {
      "name": "install-adserviceaccount",
      "description": "Install an Active Directory service account on a computer.",
      "syntax": "install-adserviceaccount [options]",
      "examples": [
        "install-adserviceaccount",
        "install-adserviceaccount --help"
      ]
    },
    {
      "name": "install-windowsfeature",
      "description": "Install one or more roles, role services, or features on either the local or a specified remote server that is running Windows Server 2012 R2. This cmdlet replaces Add-WindowsFeature used in Windows Server 2008 R2.",
      "syntax": "install-windowsfeature [options]",
      "examples": [
        "install-windowsfeature",
        "install-windowsfeature --help"
      ]
    },
    {
      "name": "invoke-cimmethod",
      "description": "Invoke a method of a CIM class or CIM instance. Equivalent to the old WMI cmdlet Invoke-WmiMethod , the CIM version uses WSMAN (WinRM) to connect to remote machines and is therefore an order of magnitude faster.",
      "syntax": "invoke-cimmethod [options]",
      "examples": [
        "invoke-cimmethod",
        "invoke-cimmethod --help"
      ]
    },
    {
      "name": "invoke-command",
      "description": "Run commands on local and remote computers.",
      "syntax": "PS C:\\> invoke-command -ComputerName Workstation64,Workstation65,Workstation66 -ScriptBlock {Get-Process -Name 'firefox'}",
      "examples": [
        "invoke-command",
        "invoke-command --help"
      ]
    },
    {
      "name": "invoke-expression",
      "description": "Run a PowerShell expression. Accepts a string to be executed as code. It is essential that any user input is carefully validated.",
      "syntax": "PS C:\\> $sorting = \"sort-object Name\" PS C:\\> $myExpr = \"get-process | $sorting\" PS C:\\> invoke-expression $myExpr",
      "examples": [
        "invoke-expression",
        "invoke-expression --help"
      ]
    },
    {
      "name": "invoke-history",
      "description": "Runs commands from the session history",
      "syntax": "PS C:\\> invoke-history get-",
      "examples": [
        "invoke-history",
        "invoke-history --help"
      ]
    },
    {
      "name": "invoke-item",
      "description": "Invoke the (provider-specific) default action on an item (like a START command or double click.) This will force the default action to be run on the item. For example a .PDF file will open in whatever program is associated with PDF files.",
      "syntax": "PS C:\\> invoke-item C:\\finances.doc",
      "examples": [
        "invoke-item",
        "invoke-item --help"
      ]
    },
    {
      "name": "invoke-restmethod",
      "description": "Send an HTTP or HTTPS request to a RESTful web service.",
      "syntax": "invoke-restmethod [options]",
      "examples": [
        "invoke-restmethod",
        "invoke-restmethod --help"
      ]
    },
    {
      "name": "invoke-webrequest",
      "description": "Get content from a web page on the Internet.",
      "syntax": "invoke-webrequest [options]",
      "examples": [
        "invoke-webrequest",
        "invoke-webrequest --help"
      ]
    },
    {
      "name": "invoke-wmimethod",
      "description": "Call Windows Management Instrumentation (WMI) methods. The preferred cmdlet is now Invoke-CimMethod. Invoke-CimMethod requires a hash table of key-value pairs while Invoke-WmiMethod requires parameter values in a specific order.",
      "syntax": "PS C:\\> invoke-wmimethod -path win32_process -name create -argumentlist notepad.exe",
      "examples": [
        "invoke-wmimethod",
        "invoke-wmimethod --help"
      ]
    },
    {
      "name": "invoke-wsmanaction",
      "description": "Invoke an action on a specified object via WSMan (Web Services-Management). The objects is specified with -ResourceURI",
      "syntax": "PS C:\\> invoke-wsmanaction -action startservice -resourceuri wmicimv2/win32_service -selectorset @{name=\"spooler\"} -authentication default",
      "examples": [
        "invoke-wsmanaction",
        "invoke-wsmanaction --help"
      ]
    },
    {
      "name": "join-path",
      "description": "Combine a path and one or more child-paths into a single path.",
      "syntax": "PS C:\\> join-path -path c:\\win* -childpath system*",
      "examples": [
        "join-path",
        "join-path --help"
      ]
    },
    {
      "name": "left",
      "description": "There is no built in method to return the Left N characters of a string, but we can use .SubString().",
      "syntax": "left [options]",
      "examples": [
        "left",
        "left --help"
      ]
    },
    {
      "name": "limit-eventlog",
      "description": "Limit the size of the event log and the age of its entries.",
      "syntax": "PS C:\\> limit-eventlog -logname Security -comp Server64, Server65 -retentionDays 7",
      "examples": [
        "limit-eventlog",
        "limit-eventlog --help"
      ]
    },
    {
      "name": "measure-command",
      "description": "Measure running time (for script blocks and cmdlets).",
      "syntax": "PS C:\\> measure-command {get-childitem c:\\windows -include *.txt -recurse} PS C:\\> measure-command {get-childitem c:\\windows -filter \"*.txt\" -recurse}",
      "examples": [
        "measure-command",
        "measure-command --help"
      ]
    },
    {
      "name": "measure-object",
      "description": "Measure the numeric or string properties of objects",
      "syntax": "PS C:\\> get-childitem | measure-object",
      "examples": [
        "measure-object",
        "measure-object --help"
      ]
    },
    {
      "name": "messagebox",
      "description": "Display a message box to the user, optionally with a choice of: OK/Cancel/Yes/No.",
      "syntax": "messagebox [options]",
      "examples": [
        "messagebox",
        "messagebox --help"
      ]
    },
    {
      "name": "move-addirectoryserver",
      "description": "Move the operation master role to an AD directory server.",
      "syntax": "move-addirectoryserver [options]",
      "examples": [
        "move-addirectoryserver",
        "move-addirectoryserver --help"
      ]
    },
    {
      "name": "move-addirectoryserveroperationmasterrole",
      "description": "Move the operation master role to an AD directory server.",
      "syntax": "move-addirectoryserveroperationmasterrole [options]",
      "examples": [
        "move-addirectoryserveroperationmasterrole",
        "move-addirectoryserveroperationmasterrole --help"
      ]
    },
    {
      "name": "move-adobject",
      "description": "Move an AD object or a container of objects to a different container or domain.",
      "syntax": "move-adobject [options]",
      "examples": [
        "move-adobject",
        "move-adobject --help"
      ]
    },
    {
      "name": "move-item",
      "description": "Move an item from one location to another.",
      "syntax": "PS C:\\> Get-Childitem . -recurse -include *.doc | move-item -dest C:\\mydocs",
      "examples": [
        "move-item",
        "move-item --help"
      ]
    },
    {
      "name": "move-itemproperty",
      "description": "Move a property from one location to another.",
      "syntax": "PS C:\\> move-itemproperty HKLM:\\Software\\SS64\\Demo1 ` -Name install_date -Destination HKLM:\\Software\\SS64\\Demo2",
      "examples": [
        "move-itemproperty",
        "move-itemproperty --help"
      ]
    },
    {
      "name": "ne",
      "description": "ne is a comparison operator that will test if one numeric or string expression is NOT equal to another,",
      "syntax": "Syntax expression -ne expression",
      "examples": [
        "ne",
        "ne --help"
      ]
    },
    {
      "name": "new-adcomputer",
      "description": "Create a new AD computer. (use Add-Computer to join a computer to a domain.)",
      "syntax": "new-adcomputer [options]",
      "examples": [
        "new-adcomputer",
        "new-adcomputer --help"
      ]
    },
    {
      "name": "new-adfinegrainedpasswordpolicy",
      "description": "Create a new AD fine-grained policy.",
      "syntax": "new-adfinegrainedpasswordpolicy [options]",
      "examples": [
        "new-adfinegrainedpasswordpolicy",
        "new-adfinegrainedpasswordpolicy --help"
      ]
    },
    {
      "name": "new-adgroup",
      "description": "Create an Active Directory group.",
      "syntax": "new-adgroup [options]",
      "examples": [
        "new-adgroup",
        "new-adgroup --help"
      ]
    },
    {
      "name": "new-adobject",
      "description": "Create an AD object.",
      "syntax": "new-adobject [options]",
      "examples": [
        "new-adobject",
        "new-adobject --help"
      ]
    },
    {
      "name": "new-adorganizationalunit",
      "description": "Create a new Active Directory organizational unit.",
      "syntax": "new-adorganizationalunit [options]",
      "examples": [
        "new-adorganizationalunit",
        "new-adorganizationalunit --help"
      ]
    },
    {
      "name": "new-adserviceaccount",
      "description": "Create a new Active Directory service account.",
      "syntax": "new-adserviceaccount [options]",
      "examples": [
        "new-adserviceaccount",
        "new-adserviceaccount --help"
      ]
    },
    {
      "name": "new-aduser",
      "description": "Create a new Active Directory user.",
      "syntax": "new-aduser [options]",
      "examples": [
        "new-aduser",
        "new-aduser --help"
      ]
    },
    {
      "name": "new-alias",
      "description": "Create a new alias.",
      "syntax": "PS C:\\> new-alias list get-childitem",
      "examples": [
        "new-alias",
        "new-alias --help"
      ]
    },
    {
      "name": "new-ciminstance",
      "description": "Create an instance of a CIM class based on the class definition on either the local computer or a remote computer. The Common Information Model (CIM) is the DMTF standard [DSP0004] for describing the structure and behavior of managed resources such as storage, network, or software components.",
      "syntax": "new-ciminstance [options]",
      "examples": [
        "new-ciminstance",
        "new-ciminstance --help"
      ]
    },
    {
      "name": "new-cimsession",
      "description": "Create a CIM session. A CIM session is a client-side object representing a connection to a local or remote computer.",
      "syntax": "new-cimsession [options]",
      "examples": [
        "new-cimsession",
        "new-cimsession --help"
      ]
    },
    {
      "name": "new-cimsessionoption",
      "description": "Advanced options for New-CimSession.",
      "syntax": "new-cimsessionoption [options]",
      "examples": [
        "new-cimsessionoption",
        "new-cimsessionoption --help"
      ]
    },
    {
      "name": "new-dscchecksum",
      "description": "Create checksum files for DSC documents and resources.",
      "syntax": "new-dscchecksum [options]",
      "examples": [
        "new-dscchecksum",
        "new-dscchecksum --help"
      ]
    },
    {
      "name": "new-event",
      "description": "Create a new event.",
      "syntax": "PS C:\\> new-event -sourceidentifier Timer -sender windows.timer -messagedata \"Test\"",
      "examples": [
        "new-event",
        "new-event --help"
      ]
    },
    {
      "name": "new-eventlog",
      "description": "Create a new classic event log and a new event source on a local or remote computer.",
      "syntax": "PS C:\\> new-eventlog -source TestApp -logname TestLog -MessageResourceFile C:\\Test\\TestApp.dll",
      "examples": [
        "new-eventlog",
        "new-eventlog --help"
      ]
    },
    {
      "name": "new-item",
      "description": "Create a new item in a namespace. Create files and folders, registry keys and registry entries.",
      "syntax": "new-item",
      "examples": [
        "new-item"
      ]
    },
    {
      "name": "new-itemproperty",
      "description": "Set a new property, for an item at a given location.",
      "syntax": "PS HKLM:\\Software> new-itemproperty SS64App -name Demo -Type int -Value 1",
      "examples": [
        "new-itemproperty",
        "new-itemproperty --help"
      ]
    },
    {
      "name": "new-jobtrigger",
      "description": "Create a job trigger for a scheduled job. Import the PSScheduledJob module.",
      "syntax": "new-jobtrigger [options]",
      "examples": [
        "new-jobtrigger",
        "new-jobtrigger --help"
      ]
    },
    {
      "name": "new-module",
      "description": "Create a new dynamic module that exists only in memory.",
      "syntax": "PS C:\\> new-module -scriptblock {function Hello {\"Hello!\"}}",
      "examples": [
        "new-module",
        "new-module --help"
      ]
    },
    {
      "name": "new-object",
      "description": "Create an instance of a .Net or COM object. This allows you to startup and control other applications (including VBScript) from PowerShell.",
      "syntax": "PS C:\\> $voice = new-object -ComObject \"SAPI.SPVoice\" PS C:\\> $voice.speak(\"SS64 taught me everything\")",
      "examples": [
        "new-object",
        "new-object --help"
      ]
    },
    {
      "name": "new-psdrive",
      "description": "Create a temporary or persistent mapped network drive. (ndr, mount)",
      "syntax": "PS C:\\> new-psdrive -name SS64 -psProvider FileSystem -root C:\\MyDocs -persist DIR SS64:",
      "examples": [
        "new-psdrive",
        "new-psdrive --help"
      ]
    },
    {
      "name": "new-pssession",
      "description": "Create a persistent connection to a local or remote computer.",
      "syntax": "PS C:> $sess = new-pssession",
      "examples": [
        "new-pssession",
        "new-pssession --help"
      ]
    },
    {
      "name": "new-pssessionoption",
      "description": "Create an object that contains advanced options for a PSSession.",
      "syntax": "PS C:> $a = new-pssessionoption PS C:> $a.UICulture = (get-UICulture) PS C:> $a.OpenTimeout = (new-timespan -minutes 4) PS C:> $a.MaximumConnectionRedirectionCount = 1",
      "examples": [
        "new-pssessionoption",
        "new-pssessionoption --help"
      ]
    },
    {
      "name": "new-scheduledjoboption",
      "description": "Create an object that contains advanced options for a scheduled job.",
      "syntax": "new-scheduledjoboption [options]",
      "examples": [
        "new-scheduledjoboption",
        "new-scheduledjoboption --help"
      ]
    },
    {
      "name": "new-service",
      "description": "Create a new service, adds an entry in the registry and the service database.",
      "syntax": "PS C:\\> new-service SS64service \"C:\\WINDOWS\\System32\\svchost.exe -k netsvcs\"",
      "examples": [
        "new-service",
        "new-service --help"
      ]
    },
    {
      "name": "new-smbmapping",
      "description": "Create a mapping to an SMB share. Requires PowerShell 5.0+ and Windows 10",
      "syntax": "new-smbmapping [options]",
      "examples": [
        "new-smbmapping",
        "new-smbmapping --help"
      ]
    },
    {
      "name": "new-timespan",
      "description": "Create a TimeSpan object. The resulting object can be used to add or subtract time from a DateTime object to create additional DateTime objects.",
      "syntax": "PS C:\\> $mytspan = new-timespan -hour 1 -minute 90",
      "examples": [
        "new-timespan",
        "new-timespan --help"
      ]
    },
    {
      "name": "new-variable",
      "description": "Create a new variable.",
      "syntax": "PS C:\\> new-variable delivery_day",
      "examples": [
        "new-variable",
        "new-variable --help"
      ]
    },
    {
      "name": "new-webserviceproxy",
      "description": "Create a Web service proxy object for managing the Web Service in PowerShell.",
      "syntax": "new-webserviceproxy [options]",
      "examples": [
        "new-webserviceproxy",
        "new-webserviceproxy --help"
      ]
    },
    {
      "name": "new-wsmaninstance",
      "description": "Create a new instance of a management resource.",
      "syntax": "new-wsmaninstance [options]",
      "examples": [
        "new-wsmaninstance",
        "new-wsmaninstance --help"
      ]
    },
    {
      "name": "new-wsmansessionoption",
      "description": "Configure options (session input parameters) for WSMan cmdlets: Connect-WSMan, Invoke-WSManAction, Get-WSManInstance, Set-WSManInstance.",
      "syntax": "new-wsmansessionoption [options]",
      "examples": [
        "new-wsmansessionoption",
        "new-wsmansessionoption --help"
      ]
    },
    {
      "name": "out-default",
      "description": "Send output to default.",
      "syntax": "PS C:\\> function Out-Default {} PS C:\\> get-date <no output> PS C:\\> Remove-Item function:out-default",
      "examples": [
        "out-default",
        "out-default --help"
      ]
    },
    {
      "name": "out-file",
      "description": "Send output to a file. When you wish to specify parameters, use Out-File instead of the redirection operator (>).",
      "syntax": "PS C:\\> get-process | out-file -filepath C:\\docs\\process.txt",
      "examples": [
        "out-file -filepath C:\\docs\\process.txt -inputobject $a -width 50"
      ]
    },
    {
      "name": "out-gridview",
      "description": "Send output to an interactive table in a separate window.",
      "syntax": "PS C:\\> get-process | out-gridview",
      "examples": [
        "out-gridview",
        "out-gridview --help"
      ]
    },
    {
      "name": "out-host",
      "description": "Send output to the host (typically the console screen).",
      "syntax": "PS C:\\> get-process | out-host -paging",
      "examples": [
        "out-host",
        "out-host --help"
      ]
    },
    {
      "name": "out-null",
      "description": "Send output to null, delete output instead of sending it to the console.",
      "syntax": "PS C:\\> get-childitem | out-null",
      "examples": [
        "out-null",
        "out-null --help"
      ]
    },
    {
      "name": "out-printer",
      "description": "Send output to a printer.",
      "syntax": "PS C:\\> \"Hello, World\" | out-printer \"\\\\Server64\\Prn86754\"",
      "examples": [
        "out-printer -inputobject $myhelp"
      ]
    },
    {
      "name": "out-string",
      "description": "Send objects to the host as a series of strings.",
      "syntax": "PS C:\\> get-content C:\\docs\\test1.txt | out-string",
      "examples": [
        "out-string -inputobject $cult -width 100"
      ]
    },
    {
      "name": "partition-defaults",
      "description": "In many cases, a default value will be used for -Partition if no value is specified. The rules for determining the default value are given below.",
      "syntax": "partition-defaults [options]",
      "examples": [
        "partition-defaults",
        "partition-defaults --help"
      ]
    },
    {
      "name": "path-defaults",
      "description": "In many cases, a default value will be used for -Path if no value is specified. The rules for determining the default value are given below.",
      "syntax": "path-defaults [options]",
      "examples": [
        "path-defaults",
        "path-defaults --help"
      ]
    },
    {
      "name": "pause",
      "description": "Pause and display the message \"Press Enter to continue...\"",
      "syntax": "Syntax pause",
      "examples": [
        "pause"
      ]
    },
    {
      "name": "pop-location",
      "description": "Set the current working location from the stack. (popd) The new location will either be the most recent entry from the stack (created with Push-Location) or the default stack.",
      "syntax": "PS C:\\> pop-location",
      "examples": [
        "pop-location",
        "pop-location --help"
      ]
    },
    {
      "name": "powershell",
      "description": "Launch a PowerShell session and/or run a PowerShell script.",
      "syntax": "::LAUNCHER.CMD @Echo off Cls Pushd %~dp0 C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe -windowstyle Hidden ./your-script.ps1 Popd",
      "examples": [
        "powershell[.exe] [-File FilePath Args] [-NoProfile]",
        "powershell[.exe] -Help | -? | /?",
        "powershell.exe -Command"
      ]
    },
    {
      "name": "psboundparameters",
      "description": "The automatic variable $PSBoundParameters is a hashtable containing the parameters passed to a script or a function. It only includes the values of parameters that were explicitly supplied by the caller, so it does not include any which have been left at the default value.",
      "syntax": "psboundparameters [options]",
      "examples": [
        "psboundparameters",
        "psboundparameters --help"
      ]
    },
    {
      "name": "push-location",
      "description": "Push the current location onto the stack,and optionally change the current location. (pushd)",
      "syntax": "PS C:\\> push-location C:\\Windows",
      "examples": [
        "push-location",
        "push-location --help"
      ]
    },
    {
      "name": "read-host",
      "description": "Read a line of input from the console. Prompt the user for input.",
      "syntax": "PS C:\\> $myname = read-host \"Please enter your name:\"",
      "examples": [
        "read-host",
        "read-host --help"
      ]
    },
    {
      "name": "receive-job",
      "description": "Get the results of PowerShell background jobs in the current session.",
      "syntax": "PS C:\\> $job = start-job -scriptblock {get-process} PS C:\\> receive-job -job $job",
      "examples": [
        "receive-job",
        "receive-job --help"
      ]
    },
    {
      "name": "register-cimindicationevent",
      "description": "Subscribe to indications using a filter expression or a query expression. Equivalent to the old WMI cmdlet Register-WmiEvent , the CIM version uses WSMAN (WinRM) to connect to remote machines and is therefore an order of magnitude faster.",
      "syntax": "register-cimindicationevent [options]",
      "examples": [
        "register-cimindicationevent",
        "register-cimindicationevent --help"
      ]
    },
    {
      "name": "register-engineevent",
      "description": "Subscribe to events that are generated by the PowerShell engine and by New-Event",
      "syntax": "register-engineevent [options]",
      "examples": [
        "register-engineevent",
        "register-engineevent --help"
      ]
    },
    {
      "name": "register-objectevent",
      "description": "Subscribe to the events that are generated by a Microsoft .NET Framework object.",
      "syntax": "register-objectevent [options]",
      "examples": [
        "register-objectevent",
        "register-objectevent --help"
      ]
    },
    {
      "name": "register-pssessionconfiguration",
      "description": "Create and register a new PS session configuration. This is an advanced cmdlet for system administrators to manage custom session configurations for their users.",
      "syntax": "PS C:> $sddl = \"O:NSG:BAD:P(A;;GA;;;BA)S:P(AU;FA;GA;;;WD)(AU;FA;SA;GWGX;;WD)\" PS C:> register-pssessionconfiguration -name AdminShell -securityDescriptorSDDL $sddl _ -maximumReceivedObjectSizeMB 20",
      "examples": [
        "register-pssessionconfiguration",
        "register-pssessionconfiguration --help"
      ]
    },
    {
      "name": "register-scheduledjob",
      "description": "Create a new scheduled job.",
      "syntax": "register-scheduledjob [options]",
      "examples": [
        "register-scheduledjob",
        "register-scheduledjob --help"
      ]
    },
    {
      "name": "register-wmievent",
      "description": "Subscribe to a WMI event. The preferred cmdlet is now Register-CimIndicationEvent.",
      "syntax": "register-wmievent [options]",
      "examples": [
        "register-wmievent",
        "register-wmievent --help"
      ]
    },
    {
      "name": "remove-adcomputer",
      "description": "Remove an AD computer.",
      "syntax": "remove-adcomputer [options]",
      "examples": [
        "remove-adcomputer",
        "remove-adcomputer --help"
      ]
    },
    {
      "name": "remove-adcomputerserviceaccount",
      "description": "Remove one or more service accounts from an AD computer.",
      "syntax": "remove-adcomputerserviceaccount [options]",
      "examples": [
        "remove-adcomputerserviceaccount",
        "remove-adcomputerserviceaccount --help"
      ]
    },
    {
      "name": "remove-addomaincontrollerpasswordreplicationpolicy",
      "description": "Remove users, computers and groups from the allowed or denied list of a read-only domain controller password replication policy.",
      "syntax": "remove-addomaincontrollerpasswordreplicationpolicy [options]",
      "examples": [
        "remove-addomaincontrollerpasswordreplicationpolicy",
        "remove-addomaincontrollerpasswordreplicationpolicy --help"
      ]
    },
    {
      "name": "remove-adfinegrainedpasswordpolicy",
      "description": "Remove an AD fine-grained password policy.",
      "syntax": "remove-adfinegrainedpasswordpolicy [options]",
      "examples": [
        "remove-adfinegrainedpasswordpolicy",
        "remove-adfinegrainedpasswordpolicy --help"
      ]
    },
    {
      "name": "remove-adfinegrainedpasswordpolicysubject",
      "description": "Remove one or more users from a fine grained password policy.",
      "syntax": "remove-adfinegrainedpasswordpolicysubject [options]",
      "examples": [
        "remove-adfinegrainedpasswordpolicysubject",
        "remove-adfinegrainedpasswordpolicysubject --help"
      ]
    },
    {
      "name": "remove-adgroup",
      "description": "Remove an Active Directory group.",
      "syntax": "PS C:\\> remove-adgroup SS64group",
      "examples": [
        "remove-adgroup",
        "remove-adgroup --help"
      ]
    },
    {
      "name": "remove-adgroupmember",
      "description": "Edit an Active Directory group to remove one or more members.",
      "syntax": "PS C:\\> remove-adgroupmember -Identity \"SS64Group\" -Member \"FredB\"",
      "examples": [
        "remove-adgroupmember",
        "remove-adgroupmember --help"
      ]
    },
    {
      "name": "remove-adobject",
      "description": "Remove an Active Directory object.",
      "syntax": "remove-adobject [options]",
      "examples": [
        "remove-adobject",
        "remove-adobject --help"
      ]
    },
    {
      "name": "remove-adorganizationalunit",
      "description": "Modify an Active Directory organizational unit.",
      "syntax": "remove-adorganizationalunit [options]",
      "examples": [
        "remove-adorganizationalunit",
        "remove-adorganizationalunit --help"
      ]
    },
    {
      "name": "remove-adprincipalgroupmembership",
      "description": "Edit an AD principal (typically a user but can also be a group or computer) to remove a membership of one or more Active Directory groups.",
      "syntax": "PS C:\\> get-aduser -server localhost:60000 -Identity \"CN=JohnDoe,DC=AppNC\" _ | remove-adprincipalgroupmembership -memberof \"CN=SS64,DC=AppNC\"",
      "examples": [
        "remove-adprincipalgroupmembership",
        "remove-adprincipalgroupmembership --help"
      ]
    },
    {
      "name": "remove-adserviceaccount",
      "description": "Remove an Active Directory service account.",
      "syntax": "remove-adserviceaccount [options]",
      "examples": [
        "remove-adserviceaccount",
        "remove-adserviceaccount --help"
      ]
    },
    {
      "name": "remove-aduser",
      "description": "Remove an Active Directory user.",
      "syntax": "remove-aduser [options]",
      "examples": [
        "remove-aduser",
        "remove-aduser --help"
      ]
    },
    {
      "name": "remove-appxpackage",
      "description": "Remove an app package from a user account.",
      "syntax": "remove-appxpackage [options]",
      "examples": [
        "remove-appxpackage",
        "remove-appxpackage --help"
      ]
    },
    {
      "name": "remove-bitstransfer",
      "description": "Cancel a Background Intelligent Transfer Service (BITS) transfer job.",
      "syntax": "remove-bitstransfer [options]",
      "examples": [
        "remove-bitstransfer",
        "remove-bitstransfer --help"
      ]
    },
    {
      "name": "remove-ciminstance",
      "description": "Remove a CIM instance from a computer. Equivalent to the old WMI cmdlet Remove-WmiObject , the CIM version uses WSMAN (WinRM) to connect to remote machines and is therefore an order of magnitude faster.",
      "syntax": "remove-ciminstance [options]",
      "examples": [
        "remove-ciminstance",
        "remove-ciminstance --help"
      ]
    },
    {
      "name": "remove-cimsession",
      "description": "Remove one or more CIM session objects from the local wps_1 session.",
      "syntax": "remove-cimsession [options]",
      "examples": [
        "remove-cimsession",
        "remove-cimsession --help"
      ]
    },
    {
      "name": "remove-computer",
      "description": "Remove the local computer from a workgroup or domain.",
      "syntax": "PS C:> remove-computer -credential domain64\\admin64 -passthru -verbose; restart-computer",
      "examples": [
        "remove-computer",
        "remove-computer --help"
      ]
    },
    {
      "name": "remove-event",
      "description": "Delete events from the PowerShell event queue in the current session.",
      "syntax": "PS C:\\> remove-event -sourceIdentifier \"ProcessStarted\"",
      "examples": [
        "remove-event",
        "remove-event --help"
      ]
    },
    {
      "name": "remove-eventlog",
      "description": "Delete an event log or unregister an event source.",
      "syntax": "PS C:\\> remove-eventlog -logname SS64",
      "examples": [
        "remove-eventlog",
        "remove-eventlog --help"
      ]
    },
    {
      "name": "remove-item",
      "description": "Delete the specified items.",
      "syntax": "PS C:\\> remove-item .\\foldertodelete -Force",
      "examples": [
        "remove-item -recurse"
      ]
    },
    {
      "name": "remove-itemproperty",
      "description": "Delete a property and its value from an item. This cmdlet can delete registry values and the data that they store.",
      "syntax": "remove-itemproperty [options]",
      "examples": [
        "remove-itemproperty",
        "remove-itemproperty --help"
      ]
    },
    {
      "name": "remove-job",
      "description": "Delete a PowerShell background job.",
      "syntax": "PS C:\\> $batch = get-job -name BatchJob PS C:\\> $batch | remove-job",
      "examples": [
        "remove-job",
        "remove-job --help"
      ]
    },
    {
      "name": "remove-module",
      "description": "Remove modules from the current session.",
      "syntax": "remove-module [options]",
      "examples": [
        "remove-module",
        "remove-module --help"
      ]
    },
    {
      "name": "remove-psbreakpoint",
      "description": "Delete breakpoints from the current console.",
      "syntax": "PS C:> $brk = Set-PSBreakpoint -script demo.ps1 -variable SS64PS C:> $brk | remove-psbreakpoint",
      "examples": [
        "remove-psbreakpoint",
        "remove-psbreakpoint --help"
      ]
    },
    {
      "name": "remove-psdrive",
      "description": "Remove a Windows PowerShell drive from its location (rdr).",
      "syntax": "PS C:\\> remove-psdrive -name s",
      "examples": [
        "remove-psdrive",
        "remove-psdrive --help"
      ]
    },
    {
      "name": "remove-pssession",
      "description": "Close one or more PowerShell sessions (PSSessions).",
      "syntax": "PS C:> remove-pssession -id 1, 2",
      "examples": [
        "remove-pssession",
        "remove-pssession --help"
      ]
    },
    {
      "name": "remove-pssnapin",
      "description": "Remove PowerShell snap-ins from the current console.",
      "syntax": "PS C:> remove-pssnapinn -name Microsoft.Exchange",
      "examples": [
        "remove-pssnapin",
        "remove-pssnapin --help"
      ]
    },
    {
      "name": "remove-smbmapping",
      "description": "Remove the drives mapped to an SMB share. Requires PowerShell 5.0+ and Windows 10.",
      "syntax": "remove-smbmapping [options]",
      "examples": [
        "remove-smbmapping",
        "remove-smbmapping --help"
      ]
    },
    {
      "name": "remove-variable",
      "description": "Delete a variable and its value.",
      "syntax": "PS C:\\> remove-variable myvar",
      "examples": [
        "remove-variable",
        "remove-variable --help"
      ]
    },
    {
      "name": "remove-windowscapability",
      "description": "Uninstall a Windows capability package from an image.",
      "syntax": "remove-windowscapability [options]",
      "examples": [
        "remove-windowscapability",
        "remove-windowscapability --help"
      ]
    },
    {
      "name": "remove-windowsfeature",
      "description": "Remove specified roles, role services, and features from a computer running Windows Server 2008 R2. For Windows 2012 R2 and greater, use Uninstall-WindowsFeature.",
      "syntax": "remove-windowsfeature [options]",
      "examples": [
        "remove-windowsfeature",
        "remove-windowsfeature --help"
      ]
    },
    {
      "name": "remove-wmiobject",
      "description": "Delete an instance of an existing Windows Management Instrumentation (WMI) class. The preferred cmdlet is now Remove-CimInstance.",
      "syntax": "PS C:\\> notepad PS C:\\> $np = get-wmiobject -query \"select * from win32_process where name='notepad.exe'\" PS C:\\> $np | remove-wmiobject",
      "examples": [
        "remove-wmiobject",
        "remove-wmiobject --help"
      ]
    },
    {
      "name": "remove-wsmaninstance",
      "description": "Delete a management resource instance.",
      "syntax": "remove-wsmaninstance [options]",
      "examples": [
        "remove-wsmaninstance",
        "remove-wsmaninstance --help"
      ]
    },
    {
      "name": "rename-adobject",
      "description": "Change the name of an Active Directory object.",
      "syntax": "rename-adobject [options]",
      "examples": [
        "rename-adobject",
        "rename-adobject --help"
      ]
    },
    {
      "name": "rename-computer",
      "description": "Rename an computer. PowerShell 3.0+",
      "syntax": "rename-computer [options]",
      "examples": [
        "rename-computer",
        "rename-computer --help"
      ]
    },
    {
      "name": "rename-item",
      "description": "Rename an item, in a PowerShell provider namespace.",
      "syntax": "PS C:\\> rename-item -path c:\\docs\\dump.csv -newname Report.xls",
      "examples": [
        "rename-item",
        "rename-item --help"
      ]
    },
    {
      "name": "rename-itemproperty",
      "description": "Rename a property of an item, the value of the property is not changed.",
      "syntax": "PS C:\\> rename-itemproperty -path HKLM:\\Software\\SS64 ` -name config -newname oldconfig",
      "examples": [
        "rename-itemproperty",
        "rename-itemproperty --help"
      ]
    },
    {
      "name": "replace",
      "description": "Replace characters within a string.",
      "syntax": "Syntax .Replace(strOldChar, strNewChar) Key strOldChar The characters to find. strNewChar The characters to replace them with.",
      "examples": [
        "replace",
        "replace --help"
      ]
    },
    {
      "name": "reset-adserviceaccountpassword",
      "description": "Reset the service account password for a computer.",
      "syntax": "reset-adserviceaccountpassword [options]",
      "examples": [
        "reset-adserviceaccountpassword",
        "reset-adserviceaccountpassword --help"
      ]
    },
    {
      "name": "reset-computermachinepassword",
      "description": "Reset the machine account password for the computer.",
      "syntax": "reset-computermachinepassword [options]",
      "examples": [
        "reset-computermachinepassword",
        "reset-computermachinepassword --help"
      ]
    },
    {
      "name": "resolve-path",
      "description": "Resolve the wildcard characters in a path and display the path contents.",
      "syntax": "PS C:\\> resolve-path ~ | format-list",
      "examples": [
        "resolve-path",
        "resolve-path --help"
      ]
    },
    {
      "name": "restart-computer",
      "description": "Restart (\"reboot\") the operating system on local and remote computers.",
      "syntax": "PS C:> restart-computer",
      "examples": [
        "restart-computer",
        "restart-computer --help"
      ]
    },
    {
      "name": "restart-service",
      "description": "Stop and then restart one or more services.",
      "syntax": "PS C:\\> restart-service spooler -force",
      "examples": [
        "restart-service",
        "restart-service --help"
      ]
    },
    {
      "name": "restore-adobject",
      "description": "Restore an Active Directory object.",
      "syntax": "restore-adobject [options]",
      "examples": [
        "restore-adobject",
        "restore-adobject --help"
      ]
    },
    {
      "name": "restore-computer",
      "description": "Restore the computer to a previous state.",
      "syntax": "PS C:> restore-computer 64",
      "examples": [
        "restore-computer",
        "restore-computer --help"
      ]
    },
    {
      "name": "restore-gpo",
      "description": "Restore one or all GPOs in a domain from a GPO backup.",
      "syntax": "restore-gpo [options]",
      "examples": [
        "restore-gpo",
        "restore-gpo --help"
      ]
    },
    {
      "name": "resume-bitlocker",
      "description": "Resume Bitlocker encryption for the specified volume.",
      "syntax": "resume-bitlocker [options]",
      "examples": [
        "resume-bitlocker",
        "resume-bitlocker --help"
      ]
    },
    {
      "name": "resume-bitstransfer",
      "description": "Resume a Background Intelligent Transfer Service (BITS) transfer job.",
      "syntax": "resume-bitstransfer [options]",
      "examples": [
        "resume-bitstransfer",
        "resume-bitstransfer --help"
      ]
    },
    {
      "name": "resume-service",
      "description": "Resume one or more suspended (paused) services.",
      "syntax": "PS C:\\> resume-service tapiSrv",
      "examples": [
        "resume-service",
        "resume-service --help"
      ]
    },
    {
      "name": "return",
      "description": "Exit the current scope, which can be a function, script, or script block.",
      "syntax": "Syntax return return expression",
      "examples": [
        "return",
        "return expression",
        "return"
      ]
    },
    {
      "name": "right",
      "description": "There is no built in method to return the RIght N characters of a string, but we can use .SubString().",
      "syntax": "$startchar = [math]::min($text.length - $Length,$text.length)$startchar = [math]::max(0, $startchar)$right = $text.SubString($startchar ,[math]::min($text.length, $Length))",
      "examples": [
        "right",
        "right --help"
      ]
    },
    {
      "name": "scheduler-errors",
      "description": "Related PowerShell Cmdlets:",
      "syntax": "scheduler-errors [options]",
      "examples": [
        "scheduler-errors",
        "scheduler-errors --help"
      ]
    },
    {
      "name": "scheduler",
      "description": "A Scheduled Job is a background job that can be started automatically on a one-time or recurring schedule.",
      "syntax": "scheduler [options]",
      "examples": [
        "scheduler",
        "scheduler --help"
      ]
    },
    {
      "name": "search-adaccount",
      "description": "Get AD user, computer, or service accounts.",
      "syntax": "search-adaccount [options]",
      "examples": [
        "search-adaccount",
        "search-adaccount --help"
      ]
    },
    {
      "name": "select-object",
      "description": "Select properties of an object or set of objects. Select objects from an array.",
      "syntax": "PS C:\\> get-process | select-object ProcessName,Id,WS",
      "examples": [
        "select-object",
        "select-object --help"
      ]
    },
    {
      "name": "select-string",
      "description": "Search through strings or files for patterns.",
      "syntax": "PS C:\\> \"Hello\",\"HELLO\" | select-string -pattern \"HELLO\" -casesensitive",
      "examples": [
        "select-string -pattern \"Microsoft\" -casesensitive"
      ]
    },
    {
      "name": "select-xml",
      "description": "Find text in an XML string or document using an XPath query.",
      "syntax": "C:\\PS> $path = \"$env:windir\\System32\\WindowsPowerShell\\v1.0\\Types.ps1xml\" C:\\PS> select-xml -path $path -xpath \"/Types/Type/Members/AliasProperty\"",
      "examples": [
        "select-xml",
        "select-xml --help"
      ]
    },
    {
      "name": "send-mailmessage",
      "description": "Send an email message.",
      "syntax": "C:\\PS> send-mailmessage -to \"User01 <user01@example.com>\" -from \"User02 <user02@example.com>\" -subject \"Test mail\"",
      "examples": [
        "send-mailmessage",
        "send-mailmessage --help"
      ]
    },
    {
      "name": "set-acl",
      "description": "Set Access Control List permissions from on a file (or object).",
      "syntax": "PS C:\\> set-acl -path C:\\demo\\cat.txt -AclObject $DogACL",
      "examples": [
        "set-acl",
        "set-acl --help"
      ]
    },
    {
      "name": "set-adaccountcontrol",
      "description": "Modify the user account control (UAC) values for an AD account.",
      "syntax": "set-adaccountcontrol [options]",
      "examples": [
        "set-adaccountcontrol",
        "set-adaccountcontrol --help"
      ]
    },
    {
      "name": "set-adaccountexpiration",
      "description": "Set the expiration date for an Active Directory account.",
      "syntax": "set-adaccountexpiration [options]",
      "examples": [
        "set-adaccountexpiration",
        "set-adaccountexpiration --help"
      ]
    },
    {
      "name": "set-adaccountpassword",
      "description": "Modify the password of an Active Directory account.",
      "syntax": "set-adaccountpassword [options]",
      "examples": [
        "set-adaccountpassword",
        "set-adaccountpassword --help"
      ]
    },
    {
      "name": "set-adcomputer",
      "description": "Modify an AD computer object.",
      "syntax": "set-adcomputer [options]",
      "examples": [
        "set-adcomputer",
        "set-adcomputer --help"
      ]
    },
    {
      "name": "set-addefaultdomainpasswordpolicy",
      "description": "Modify the default password policy for an Active Directory domain.",
      "syntax": "set-addefaultdomainpasswordpolicy [options]",
      "examples": [
        "set-addefaultdomainpasswordpolicy",
        "set-addefaultdomainpasswordpolicy --help"
      ]
    },
    {
      "name": "set-addomain",
      "description": "Modify an Active Directory domain.",
      "syntax": "set-addomain [options]",
      "examples": [
        "set-addomain",
        "set-addomain --help"
      ]
    },
    {
      "name": "set-addomainmode",
      "description": "Set the domain functional level for an AD domain.",
      "syntax": "set-addomainmode [options]",
      "examples": [
        "set-addomainmode",
        "set-addomainmode --help"
      ]
    },
    {
      "name": "set-adfinegrainedpasswordpolicy",
      "description": "Modify an AD fine-grained password policy.",
      "syntax": "set-adfinegrainedpasswordpolicy [options]",
      "examples": [
        "set-adfinegrainedpasswordpolicy",
        "set-adfinegrainedpasswordpolicy --help"
      ]
    },
    {
      "name": "set-adforest",
      "description": "Modify an AD forest.",
      "syntax": "set-adforest [options]",
      "examples": [
        "set-adforest",
        "set-adforest --help"
      ]
    },
    {
      "name": "set-adforestmode",
      "description": "Set the domain functional level for an AD forest.",
      "syntax": "set-adforestmode [options]",
      "examples": [
        "set-adforestmode",
        "set-adforestmode --help"
      ]
    },
    {
      "name": "set-adgroup",
      "description": "Modify an Active Directory group.",
      "syntax": "PS C:\\> set-adgroup -server localhost:60000 -Identity \"CN=AccessControl,DC=AppNC\" -description \"Access Group\" -passthru",
      "examples": [
        "set-adgroup",
        "set-adgroup --help"
      ]
    },
    {
      "name": "set-adobject",
      "description": "Modify an Active Directory object.",
      "syntax": "set-adobject [options]",
      "examples": [
        "set-adobject",
        "set-adobject --help"
      ]
    },
    {
      "name": "set-adorganizationalunit",
      "description": "Modify an Active Directory organizational unit.",
      "syntax": "set-adorganizationalunit [options]",
      "examples": [
        "set-adorganizationalunit",
        "set-adorganizationalunit --help"
      ]
    },
    {
      "name": "set-adserviceaccount",
      "description": "Modify an Active Directory service account.",
      "syntax": "set-adserviceaccount [options]",
      "examples": [
        "set-adserviceaccount",
        "set-adserviceaccount --help"
      ]
    },
    {
      "name": "set-aduser",
      "description": "Modify an Active Directory user.",
      "syntax": "set-aduser [options]",
      "examples": [
        "set-aduser",
        "set-aduser --help"
      ]
    },
    {
      "name": "set-alias",
      "description": "Create or change an alias. An alias is an alternate (usually shorter) name for a cmdlet, script, function, or executable file.",
      "syntax": "PS C:\\> set-alias list get-childitem",
      "examples": [
        "set-alias",
        "set-alias --help"
      ]
    },
    {
      "name": "set-authenticodesignature",
      "description": "Use an authenticode signature to sign a PowerShell script or other file.",
      "syntax": "set-authenticodesignature [options]",
      "examples": [
        "set-authenticodesignature",
        "set-authenticodesignature --help"
      ]
    },
    {
      "name": "set-bitstransfer",
      "description": "Modify the properties of an existing Background Intelligent Transfer Service (BITS) transfer job.",
      "syntax": "set-bitstransfer [options]",
      "examples": [
        "set-bitstransfer",
        "set-bitstransfer --help"
      ]
    },
    {
      "name": "set-ciminstance",
      "description": "Modify a CIM instance on a CIM server by calling the ModifyInstance method of the CIM class. Equivalent to the old WMI cmdlet Set-WmiInstance , the CIM version uses WSMAN (WinRM) to connect to remote machines and is therefore an order of magnitude faster.",
      "syntax": "set-ciminstance [options]",
      "examples": [
        "set-ciminstance",
        "set-ciminstance --help"
      ]
    },
    {
      "name": "set-clipboard",
      "description": "Set the current Windows clipboard entry.",
      "syntax": "set-clipboard [options]",
      "examples": [
        "set-clipboard",
        "set-clipboard --help"
      ]
    },
    {
      "name": "set-content",
      "description": "Write or replace the content in an item.",
      "syntax": "PS C:\\> get-date | set-content C:\\Test_date.csv",
      "examples": [
        "set-content",
        "set-content --help"
      ]
    },
    {
      "name": "set-date",
      "description": "Change the computer system time.",
      "syntax": "PS C:\\> set-date -adjust -0:30:0",
      "examples": [
        "set-date",
        "set-date --help"
      ]
    },
    {
      "name": "set-executionpolicy",
      "description": "Change the user preference for the execution policy of the shell.",
      "syntax": "PS C:\\> set-executionpolicy remotesigned; get-executionPolicy",
      "examples": [
        "set-executionpolicy",
        "set-executionpolicy --help"
      ]
    },
    {
      "name": "set-item",
      "description": "Change the value of an item.",
      "syntax": "PS C:\\> set-item -path function:prompt -options \"AllScope,ReadOnly\"",
      "examples": [
        "set-item",
        "set-item --help"
      ]
    },
    {
      "name": "set-itemproperty",
      "description": "Set the value of a property.",
      "syntax": "PS HKCU:\\> set-itemproperty -path HKCU:\\Software\\SS64 -name '(Default)' -value 'abc123'",
      "examples": [
        "set-itemproperty",
        "set-itemproperty --help"
      ]
    },
    {
      "name": "set-jobtrigger",
      "description": "Change the job trigger of a scheduled job.",
      "syntax": "set-jobtrigger [options]",
      "examples": [
        "set-jobtrigger",
        "set-jobtrigger --help"
      ]
    },
    {
      "name": "set-location",
      "description": "Set the current PowerShell working location.",
      "syntax": "PS C:\\> set-location HKLM:",
      "examples": [
        "set-location",
        "set-location --help"
      ]
    },
    {
      "name": "set-mppreference",
      "description": "Configure preferences for Windows Defender scans and updates.",
      "syntax": "set-mppreference [options]",
      "examples": [
        "set-mppreference",
        "set-mppreference --help"
      ]
    },
    {
      "name": "set-psbreakpoint",
      "description": "Set a breakpoint on a line, command, or variable.",
      "syntax": "PS C:> set-psbreakpoint -script sample.ps1 -line 5",
      "examples": [
        "set-psbreakpoint",
        "set-psbreakpoint --help"
      ]
    },
    {
      "name": "set-psdebug",
      "description": "Turns script debugging features on and off.",
      "syntax": "PS C:\\> set-psdebug -trace 2;",
      "examples": [
        "set-psdebug",
        "set-psdebug --help"
      ]
    },
    {
      "name": "set-pssessionconfiguration",
      "description": "Change the properties of a registered session configuration.",
      "syntax": "set-pssessionconfiguration [options]",
      "examples": [
        "set-pssessionconfiguration",
        "set-pssessionconfiguration --help"
      ]
    },
    {
      "name": "set-scheduledjob",
      "description": "Change the properties of a scheduled job.",
      "syntax": "set-scheduledjob [options]",
      "examples": [
        "set-scheduledjob",
        "set-scheduledjob --help"
      ]
    },
    {
      "name": "set-scheduledjoboption",
      "description": "Change the options of a scheduled job.",
      "syntax": "set-scheduledjoboption [options]",
      "examples": [
        "set-scheduledjoboption",
        "set-scheduledjoboption --help"
      ]
    },
    {
      "name": "set-service",
      "description": "Change the start mode/properties/status of a service.",
      "syntax": "PS C:\\> set-service sysmonlog -startuptype automatic",
      "examples": [
        "set-service",
        "set-service --help"
      ]
    },
    {
      "name": "set-strictmode",
      "description": "Establish and enforce coding rules in expressions, scripts, and script blocks.",
      "syntax": "PS C:\\> set-strictmode -version 1.0 C:\\PS> $a -gt 5 False The variable $a cannot be retrieved because it has not been set yet. At line:1 char:3",
      "examples": [
        "set-strictmode",
        "set-strictmode --help"
      ]
    },
    {
      "name": "set-tracesource",
      "description": "Trace a PowerShell component.",
      "syntax": "PS C:\\> set-tracesource -name ParameterBinding -RemoveListener Host",
      "examples": [
        "set-tracesource",
        "set-tracesource --help"
      ]
    },
    {
      "name": "set-variable",
      "description": "Set the value of a variable.",
      "syntax": "PS C:\\> set-variable -name SS64 -value \"My Sample text\"",
      "examples": [
        "set-variable",
        "set-variable --help"
      ]
    },
    {
      "name": "set-wmiinstance",
      "description": "Create or update an instance of an existing Windows Management Instrumentation (WMI) class. The preferred cmdlet is now Set-CIMInstance.",
      "syntax": "PS C:\\> set-wmiinstance -class win32_environment -argument @{Name=\"testvar\";VariableValue=\"testvalue\";UserName=\"<SYST EM>\"}",
      "examples": [
        "set-wmiinstance",
        "set-wmiinstance --help"
      ]
    },
    {
      "name": "set-wsmaninstance",
      "description": "Modify the management information related to a resource.",
      "syntax": "PS C:\\> set-wsmaninstance -resourceuri winrm/config/listener -selectorset @{address=\"*\";transport=\"https\"} -valueset @{Enabled=\"false\"}",
      "examples": [
        "set-wsmaninstance",
        "set-wsmaninstance --help"
      ]
    },
    {
      "name": "set-wsmanquickconfig",
      "description": "Configure the local computer for remote management.",
      "syntax": "set-wsmanquickconfig [options]",
      "examples": [
        "set-wsmanquickconfig",
        "set-wsmanquickconfig --help"
      ]
    },
    {
      "name": "show-command",
      "description": "Create Windows PowerShell commands in a graphical command window.",
      "syntax": "show-command [options]",
      "examples": [
        "show-command",
        "show-command --help"
      ]
    },
    {
      "name": "show-eventlog",
      "description": "Display the event logs of the local or a remote computer in Event Viewer.",
      "syntax": "PS C:\\> show-eventlog",
      "examples": [
        "show-eventlog",
        "show-eventlog --help"
      ]
    },
    {
      "name": "sort-object",
      "description": "Sort objects by property value.",
      "syntax": "PS C:\\> get-childitem | sort-object",
      "examples": [
        "sort-object",
        "sort-object --help"
      ]
    },
    {
      "name": "source",
      "description": "When you dot source a script (or scriptblock), all variables and functions defined in the script (or scriptblock) will persist in the shell when the script ends.",
      "syntax": "source [options]",
      "examples": [
        "source",
        "source --help"
      ]
    },
    {
      "name": "split-path",
      "description": "Return part of a path.",
      "syntax": "PS C:\\> split-path \"C:\\Docs\\*.xls\" -leaf -resolve",
      "examples": [
        "split-path",
        "split-path --help"
      ]
    },
    {
      "name": "split",
      "description": "Split string(s) into substrings.",
      "syntax": "PS C:\\> \"abc-def\" -split \"-\" abc def",
      "examples": [
        "split",
        "split --help"
      ]
    },
    {
      "name": "start-bitstransfer",
      "description": "Create a new Background Intelligent Transfer Service (BITS) transfer job.",
      "syntax": "start-bitstransfer [options]",
      "examples": [
        "start-bitstransfer",
        "start-bitstransfer --help"
      ]
    },
    {
      "name": "start-dscconfiguration",
      "description": "Apply Desired State configuration to nodes. (PowerShell 4.0+)",
      "syntax": "start-dscconfiguration [options]",
      "examples": [
        "start-dscconfiguration",
        "start-dscconfiguration --help"
      ]
    },
    {
      "name": "start-job",
      "description": "Start a PowerShell background job.",
      "syntax": "PS C:\\> start-job -scriptblock {get-process}",
      "examples": [
        "start-job",
        "start-job --help"
      ]
    },
    {
      "name": "start-process",
      "description": "Start one or more processes, optionally as a specific user.",
      "syntax": "PS C:\\> start-process notepad.exe Test.txt",
      "examples": [
        "start-process",
        "start-process --help"
      ]
    },
    {
      "name": "start-service",
      "description": "Start one or more stopped services.",
      "syntax": "PS C:\\> start-service -name Themes -whatif",
      "examples": [
        "start-service",
        "start-service --help"
      ]
    },
    {
      "name": "start-sleep",
      "description": "Suspend shell, script, or runspace activity for a specified period of time.",
      "syntax": "start-sleep [options]",
      "examples": [
        "start-sleep",
        "start-sleep --help"
      ]
    },
    {
      "name": "start-transaction",
      "description": "Start a transaction.",
      "syntax": "start-transaction [options]",
      "examples": [
        "start-transaction",
        "start-transaction --help"
      ]
    },
    {
      "name": "start-transcript",
      "description": "Start a transcript of a command shell session, record the session to a text file.",
      "syntax": "PS C:\\> start-transcript -path c:\\docs\\MyTranscript.txt",
      "examples": [
        "start-transcript",
        "start-transcript --help"
      ]
    },
    {
      "name": "statements",
      "description": "Conditional Statements.",
      "syntax": "if .. else Conditionally perform a command Switch Multiple if statements",
      "examples": [
        "statements",
        "statements --help"
      ]
    },
    {
      "name": "stop-computer",
      "description": "Stop (shut down) local and remote computers using WMI.",
      "syntax": "PS C:\\> stop-computer",
      "examples": [
        "stop-computer",
        "stop-computer --help"
      ]
    },
    {
      "name": "stop-job",
      "description": "Stop a PowerShell background job.",
      "syntax": "PS C:\\> stop-job -state failed",
      "examples": [
        "stop-job",
        "stop-job --help"
      ]
    },
    {
      "name": "stop-parsing",
      "description": "When calling an executable program in PowerShell, place the stop-parsing symbol before any program arguments.",
      "syntax": "stop-parsing [options]",
      "examples": [
        "stop-parsing",
        "stop-parsing --help"
      ]
    },
    {
      "name": "stop-process",
      "description": "Stop one or more running processes. (Kill)",
      "syntax": "PS C:\\> stop-process -name notepad",
      "examples": [
        "stop-process",
        "stop-process --help"
      ]
    },
    {
      "name": "stop-service",
      "description": "Stop one or more running services.",
      "syntax": "PS C:\\> stop-service sysmonlog",
      "examples": [
        "stop-service",
        "stop-service --help"
      ]
    },
    {
      "name": "stop-transcript",
      "description": "Stop a transcript.",
      "syntax": "PS C:\\> stop-transcript",
      "examples": [
        "stop-transcript",
        "stop-transcript --help"
      ]
    },
    {
      "name": "substring",
      "description": "Return part of a longer string.",
      "syntax": "PS C:\\> \"abcdef\".substring(2,3) cde",
      "examples": [
        "substring",
        "substring --help"
      ]
    },
    {
      "name": "suspend-bitlocker",
      "description": "Suspend Bitlocker encryption for the specified volume.",
      "syntax": "suspend-bitlocker [options]",
      "examples": [
        "suspend-bitlocker",
        "suspend-bitlocker --help"
      ]
    },
    {
      "name": "suspend-bitstransfer",
      "description": "Suspend a Background Intelligent Transfer Service (BITS) transfer job.",
      "syntax": "suspend-bitstransfer [options]",
      "examples": [
        "suspend-bitstransfer",
        "suspend-bitstransfer --help"
      ]
    },
    {
      "name": "suspend-service",
      "description": "Get the access control list for a file or object.",
      "syntax": "PS C:\\> suspend-service -displayname \"Telnet\"",
      "examples": [
        "suspend-service",
        "suspend-service --help"
      ]
    },
    {
      "name": "switch",
      "description": "Check multiple conditions, an alternative to using multiple if statements.",
      "syntax": "switch",
      "examples": [
        "switch",
        "switch ($fruit) {",
        "switch"
      ]
    },
    {
      "name": "syntax-args",
      "description": "Script Parameters / Arguments (for scripts, functions and script blocks)",
      "syntax": "syntax-args [options]",
      "examples": [
        "syntax-args",
        "syntax-args --help"
      ]
    },
    {
      "name": "syntax-arrays",
      "description": "A PowerShell array holds a list of data items. The data elements of a PowerShell array need not be of the same type, unless the data type is declared (strongly typed).",
      "syntax": "syntax-arrays [options]",
      "examples": [
        "syntax-arrays",
        "syntax-arrays --help"
      ]
    },
    {
      "name": "syntax-assertion",
      "description": "In some cases it can be useful to assert certain prerequisite conditions.",
      "syntax": "syntax-assertion [options]",
      "examples": [
        "syntax-assertion",
        "syntax-assertion --help"
      ]
    },
    {
      "name": "syntax-automatic-variables",
      "description": "Variables that store state information for PowerShell. These variables are created and maintained by Windows PowerShell.",
      "syntax": "syntax-automatic-variables [options]",
      "examples": [
        "syntax-automatic-variables",
        "syntax-automatic-variables --help"
      ]
    },
    {
      "name": "syntax-backup-check",
      "description": "The script below can be used to check multiple locations for files that have changed in the last 24 hours.",
      "syntax": "syntax-backup-check [options]",
      "examples": [
        "syntax-backup-check",
        "syntax-backup-check --help"
      ]
    },
    {
      "name": "syntax-base36",
      "description": "Base 36 is the most compact case-insensitive alphanumeric numbering system. Base 36 is used for Dell Express Service Codes, website url shorteners and many other applications which have a need to minimise human error.",
      "syntax": "syntax-base36 [options]",
      "examples": [
        "syntax-base36",
        "syntax-base36 --help"
      ]
    },
    {
      "name": "syntax-cd",
      "description": "In the bash shell, the command 'cd -' will jump to the previous working directory. To add this functionality to PowerShell, here is a simple cd function from Jagadish. This works by setting a global variable \"OLDPWD\"",
      "syntax": "syntax-cd [options]",
      "examples": [
        "syntax-cd",
        "syntax-cd --help"
      ]
    },
    {
      "name": "syntax-circular",
      "description": "If an Active Directory(AD) group has another AD group as both it's parent and as a child member you have a circular nested reference.",
      "syntax": "syntax-circular [options]",
      "examples": [
        "syntax-circular",
        "syntax-circular --help"
      ]
    },
    {
      "name": "syntax-comments",
      "description": "In PowerShell single line comments start with a hash symbol, everything to the right of the # will be ignored.",
      "syntax": "syntax-comments [options]",
      "examples": [
        "syntax-comments",
        "syntax-comments --help"
      ]
    },
    {
      "name": "syntax-compare",
      "description": "The following operators are all Case-Insensitive by default:",
      "syntax": "syntax-compare [options]",
      "examples": [
        "syntax-compare",
        "syntax-compare --help"
      ]
    },
    {
      "name": "syntax-concat",
      "description": "Several methods of combining variables, numbers and strings together are demonstrated below.",
      "syntax": "syntax-concat [options]",
      "examples": [
        "syntax-concat",
        "syntax-concat --help"
      ]
    },
    {
      "name": "syntax-consolesize",
      "description": "The size of the PowerShell console window can be manipulated using the $host variable.",
      "syntax": "syntax-consolesize [options]",
      "examples": [
        "syntax-consolesize",
        "syntax-consolesize --help"
      ]
    },
    {
      "name": "syntax-datatypes",
      "description": "The most common DataTypes (type accelerators) used in PowerShell are listed below.",
      "syntax": "syntax-datatypes [options]",
      "examples": [
        "syntax-datatypes",
        "syntax-datatypes --help"
      ]
    },
    {
      "name": "syntax-dateformats",
      "description": ": The default time separator",
      "syntax": "syntax-dateformats [options]",
      "examples": [
        "syntax-dateformats",
        "syntax-dateformats --help"
      ]
    },
    {
      "name": "syntax-delolder",
      "description": "Delete files and folders older than N days:",
      "syntax": "syntax-delolder [options]",
      "examples": [
        "syntax-delolder",
        "syntax-delolder --help"
      ]
    },
    {
      "name": "syntax-diruse",
      "description": "The old DirUse Resource kit utility can still be run in PowerShell to display disk usage for multiple subdirectories, but all it will do is display text it won't provide any PowerShell objects we can manipulate.",
      "syntax": "syntax-diruse [options]",
      "examples": [
        "syntax-diruse",
        "syntax-diruse --help"
      ]
    },
    {
      "name": "syntax-diskspace",
      "description": "List the percentage of free disk space for multiple computers.",
      "syntax": "syntax-diskspace [options]",
      "examples": [
        "syntax-diskspace",
        "syntax-diskspace --help"
      ]
    },
    {
      "name": "syntax-display",
      "description": "Get the display resolution for all the computers listed in a text file:",
      "syntax": "syntax-display [options]",
      "examples": [
        "syntax-display",
        "syntax-display --help"
      ]
    },
    {
      "name": "syntax-elevate",
      "description": "Some PowerShell cmdlets and Windows commands such as REG ADD and SUBINACL have to be run from an elevated prompt, there are several ways of doing this.",
      "syntax": "syntax-elevate [options]",
      "examples": [
        "syntax-elevate",
        "syntax-elevate --help"
      ]
    },
    {
      "name": "syntax-email",
      "description": "A PowerShell 1.0 function for sending email, in PowerShell 2.0 and above, you can use send-mailmessage instead.",
      "syntax": "syntax-email [options]",
      "examples": [
        "syntax-email",
        "syntax-email --help"
      ]
    },
    {
      "name": "syntax-env",
      "description": "Windows environment variables are visible as a PS drive called Env:",
      "syntax": "syntax-env [options]",
      "examples": [
        "syntax-env",
        "syntax-env --help"
      ]
    },
    {
      "name": "syntax-esc",
      "description": "The PowerShell escape character is the grave-accent(`)",
      "syntax": "syntax-esc [options]",
      "examples": [
        "syntax-esc",
        "syntax-esc --help"
      ]
    },
    {
      "name": "syntax-eventids",
      "description": "A list of the most common / useful Windows Event IDs.",
      "syntax": "syntax-eventids [options]",
      "examples": [
        "syntax-eventids",
        "syntax-eventids --help"
      ]
    },
    {
      "name": "syntax-expiry",
      "description": "When connected to the domain with a Windows computer, you will normally be warned at logon if your password is about to expire. A remotly connected (VPN/Citrix) user may never see this warning, this can lead to unexpected password expiries that waste the time of both remote workers and IT helpdesk staff.",
      "syntax": "syntax-expiry [options]",
      "examples": [
        "syntax-expiry",
        "syntax-expiry --help"
      ]
    },
    {
      "name": "syntax-f-operator",
      "description": "Format a string expression.",
      "syntax": "syntax-f-operator [options]",
      "examples": [
        "syntax-f-operator",
        "syntax-f-operator --help"
      ]
    },
    {
      "name": "syntax-function-advanced",
      "description": "An Advanced Function is one that contains either a [cmdletbinding()] attribute or the Parameter attribute, or both. An advanced function gains many of the standard cmdlet features such as common parameters (-verbose, -whatif, -confirm)",
      "syntax": "syntax-function-advanced [options]",
      "examples": [
        "syntax-function-advanced",
        "syntax-function-advanced --help"
      ]
    },
    {
      "name": "syntax-function-input",
      "description": "For functions and script cmdlets, three methods are available for processing pipeline input: Begin, Process, and End blocks. In these blocks, the $_ variable represents the current input object.",
      "syntax": "syntax-function-input [options]",
      "examples": [
        "syntax-function-input",
        "syntax-function-input --help"
      ]
    },
    {
      "name": "syntax-functions",
      "description": "A block of code may be contained within a function for easy re-use. To create a function, call the function keyword followed by a name for the function, then include your code inside a pair of curly braces.",
      "syntax": "syntax-functions [options]",
      "examples": [
        "syntax-functions",
        "syntax-functions --help"
      ]
    },
    {
      "name": "syntax-get-bandwidth",
      "description": "The script below can be used to measure the average IO as a percentage of available bandwidth from the network card(s) of a machine. Similar to the Network information in Task Manager. Where more than one Network interface is fitted, the result will be an average. The script includes a small delay (Start-Sleep) because you probably don't want to hammer a production machine with too many WMI queries.",
      "syntax": "syntax-get-bandwidth [options]",
      "examples": [
        "syntax-get-bandwidth",
        "syntax-get-bandwidth --help"
      ]
    },
    {
      "name": "syntax-get-loggedon",
      "description": "The script below can be used to list all the users currently logged into a remote machine using WMI/CIM. It includes background processes/services but excludes standard processes running under NETWORK SERVICE, LOCAL SERVICE and SYSTEM. This does make the assumption that the user is running at least one process, theoretically someone could be log in and kill all processes including the Desktop/Explorer but that's a pretty rare edge case.",
      "syntax": "syntax-get-loggedon [options]",
      "examples": [
        "syntax-get-loggedon",
        "syntax-get-loggedon --help"
      ]
    },
    {
      "name": "syntax-get-uptime",
      "description": "Get the system uptime for one or more computers.",
      "syntax": "syntax-get-uptime [options]",
      "examples": [
        "syntax-get-uptime",
        "syntax-get-uptime --help"
      ]
    },
    {
      "name": "syntax-hash-tables",
      "description": "Hash Tables (also known as Associative arrays or Dictionaries) are a type of array that allows the storage of paired Keys and Values, rather like a simple database table.",
      "syntax": "syntax-hash-tables [options]",
      "examples": [
        "syntax-hash-tables",
        "syntax-hash-tables --help"
      ]
    },
    {
      "name": "syntax-keyboard",
      "description": "Examples:",
      "syntax": "syntax-keyboard [options]",
      "examples": [
        "syntax-keyboard",
        "syntax-keyboard --help"
      ]
    },
    {
      "name": "syntax-lastlogon",
      "description": "In Active Directory there are two properties used to store the last logon time:",
      "syntax": "syntax-lastlogon [options]",
      "examples": [
        "syntax-lastlogon",
        "syntax-lastlogon --help"
      ]
    },
    {
      "name": "syntax-lastmodified",
      "description": "In NTFS (New Technology File System) many things will update the Last Modified date of a folder to Today/Now:",
      "syntax": "syntax-lastmodified [options]",
      "examples": [
        "syntax-lastmodified",
        "syntax-lastmodified --help"
      ]
    },
    {
      "name": "syntax-ldap",
      "description": "A list of all the user attributes with maximum data sizes, including Microsoft Exchange Extensions.",
      "syntax": "syntax-ldap [options]",
      "examples": [
        "syntax-ldap",
        "syntax-ldap --help"
      ]
    },
    {
      "name": "syntax-loggedon",
      "description": "Find the User(s) logged on to a computer:",
      "syntax": "syntax-loggedon [options]",
      "examples": [
        "syntax-loggedon",
        "syntax-loggedon --help"
      ]
    },
    {
      "name": "syntax-mapdrive",
      "description": "The page you’re looking for can’t be found. Try the search box above or return to the home page.",
      "syntax": "syntax-mapdrive [options]",
      "examples": [
        "syntax-mapdrive",
        "syntax-mapdrive --help"
      ]
    },
    {
      "name": "syntax-math",
      "description": "In addition to standard PowerShell methods we can also call .Net Math functions:",
      "syntax": "syntax-math [options]",
      "examples": [
        "syntax-math",
        "syntax-math --help"
      ]
    },
    {
      "name": "syntax-methods",
      "description": "Methods allow you to examine, compare and format many properties of a PowerShell Object.",
      "syntax": "syntax-methods [options]",
      "examples": [
        "syntax-methods",
        "syntax-methods --help"
      ]
    },
    {
      "name": "syntax-modules",
      "description": "Functions and scripts can be shared as part of a module to enable easy re-use.",
      "syntax": "syntax-modules [options]",
      "examples": [
        "syntax-modules",
        "syntax-modules --help"
      ]
    },
    {
      "name": "syntax-msgbox",
      "description": "A function to display messages in a popup message box, with options for OK/Cancel, Yes/No or Retry/Cancel buttons.",
      "syntax": "syntax-msgbox [options]",
      "examples": [
        "syntax-msgbox",
        "syntax-msgbox --help"
      ]
    },
    {
      "name": "syntax-myinvocation",
      "description": "The $MyInvocation automatic variable that contains an object with information about the current command, such as a script, function, or script block.",
      "syntax": "syntax-myinvocation [options]",
      "examples": [
        "syntax-myinvocation",
        "syntax-myinvocation --help"
      ]
    },
    {
      "name": "syntax-objects",
      "description": "A key concept to grasp when starting to work in PowerShell is that everything is an object.",
      "syntax": "syntax-objects [options]",
      "examples": [
        "syntax-objects",
        "syntax-objects --help"
      ]
    },
    {
      "name": "syntax-openhere",
      "description": "To open a PowerShell window from any folder in Windows Explorer use the registry script below",
      "syntax": "syntax-openhere [options]",
      "examples": [
        "syntax-openhere",
        "syntax-openhere --help"
      ]
    },
    {
      "name": "syntax-operators",
      "description": "Parenthesis/Brackets work just as they do in mathematics, each pair will determine the order of evaluation and return the result of the expression within. PS C:\\> (2 + 3) * 5",
      "syntax": "Format a string expression. Place {0} {1} etc. into the string as placemarkers where you want the variables to appear, immediately follow the string with the -f operator and then lastly, the list of comma separated variables which will be used to populate the placemarkers. Get-ChildItem c:\\ | ForEach-Object {'File {0} Created {1}' -f $_.fullname,$_.creationtime} Optional format string(s) can be included to add padding/alignment and display dates/times/percentages/hex etc correctly, see the -f fo",
      "examples": [
        "syntax-operators",
        "syntax-operators --help"
      ]
    },
    {
      "name": "syntax-osversion",
      "description": "Using WMI/CIM to find the OS version on a remote machine is a one line command: PS C:\\> Get-CimInstance Win32_OperatingSystem -computer 'computer64' | select Name, version, servicepackmajorversion, BuildNumber, CSName, OSArchitecture, OperatingSystemSKU",
      "syntax": "syntax-osversion [options]",
      "examples": [
        "syntax-osversion",
        "syntax-osversion --help"
      ]
    },
    {
      "name": "syntax-ping",
      "description": "How to ping computers to test for network connectivity.",
      "syntax": "syntax-ping [options]",
      "examples": [
        "syntax-ping",
        "syntax-ping --help"
      ]
    },
    {
      "name": "syntax-pipeline",
      "description": "A common scripting requirement is to loop through a collection of items (files, registry entries etc.) Pipelines provide an easy way to achieve this, for example consider the following script:",
      "syntax": "syntax-pipeline [options]",
      "examples": [
        "syntax-pipeline",
        "syntax-pipeline --help"
      ]
    },
    {
      "name": "syntax-preference",
      "description": "PowerShell preferences:",
      "syntax": "syntax-preference [options]",
      "examples": [
        "syntax-preference",
        "syntax-preference --help"
      ]
    },
    {
      "name": "syntax-product-key",
      "description": "The Windows product key is a 25-character code used to activate Windows. In most cases, Windows 10 activates automatically using a digital license and doesn't require you to enter a product key.",
      "syntax": "syntax-product-key [options]",
      "examples": [
        "syntax-product-key",
        "syntax-product-key --help"
      ]
    },
    {
      "name": "syntax-profile",
      "description": "Configure the PowerShell environment. The PowerShell $Profile is run automatically when the shell session is started, it can be used to run scripts and set variables.",
      "syntax": "syntax-profile [options]",
      "examples": [
        "syntax-profile",
        "syntax-profile --help"
      ]
    },
    {
      "name": "syntax-programs",
      "description": "A script to enumerate the software installed on one or more computers. It will include both 32 bit and 64 bit software.",
      "syntax": "syntax-programs [options]",
      "examples": [
        "syntax-programs",
        "syntax-programs --help"
      ]
    },
    {
      "name": "syntax-prompt",
      "description": "The default PowerShell prompt displays the current working directory.",
      "syntax": "syntax-prompt [options]",
      "examples": [
        "syntax-prompt",
        "syntax-prompt --help"
      ]
    },
    {
      "name": "syntax-pshinfo",
      "description": "Get information about a machine - Ram, Disk Space, Service pack, Uptime, rather like psinfo only written in PowerShell.",
      "syntax": "syntax-pshinfo [options]",
      "examples": [
        "syntax-pshinfo",
        "syntax-pshinfo --help"
      ]
    },
    {
      "name": "syntax-redirection",
      "description": "In PowerShell you must redirect only the commands that will output string data: if ($demo -eq $null) {Echo 'result'} >demo.txt #this will fail if ($demo -eq $null) {Echo 'result' >demo.txt} #this will work",
      "syntax": "syntax-redirection [options]",
      "examples": [
        "syntax-redirection",
        "syntax-redirection --help"
      ]
    },
    {
      "name": "syntax-ref",
      "description": "A Reference variable is used to pass values into a function. By default, PowerShell variables are created with a \"Local\" scope, so a variable definition like $myvar = 'Hello World' will be visible only to the current script or the current function.",
      "syntax": "syntax-ref [options]",
      "examples": [
        "syntax-ref",
        "syntax-ref --help"
      ]
    },
    {
      "name": "syntax-regex",
      "description": "Use -match , -notmatch or -replace to identify string patterns. More complex patterns can be matched by adding a regular expression.",
      "syntax": "syntax-regex [options]",
      "examples": [
        "syntax-regex",
        "syntax-regex --help"
      ]
    },
    {
      "name": "syntax-requires",
      "description": "The #Requires statement prevents a script from running unless the PowerShell version, modules, snap-ins, and module and snap-in version prerequisites are met.",
      "syntax": "syntax-requires [options]",
      "examples": [
        "syntax-requires",
        "syntax-requires --help"
      ]
    },
    {
      "name": "syntax-run",
      "description": "There are several ways to run a PowerShell script.",
      "syntax": "syntax-run [options]",
      "examples": [
        "syntax-run",
        "syntax-run --help"
      ]
    },
    {
      "name": "syntax-scopes",
      "description": "PowerShell scopes protect access to variables, aliases, functions, and PowerShell drives (PSDrives) by limiting where they can be read and changed.",
      "syntax": "syntax-scopes [options]",
      "examples": [
        "syntax-scopes",
        "syntax-scopes --help"
      ]
    },
    {
      "name": "syntax-scriptblock",
      "description": "A ScriptBlock is a collection of statements surrounded with { curly parentheses } a scriptblock can be saved in a variable and executed using the & call operator",
      "syntax": "syntax-scriptblock [options]",
      "examples": [
        "syntax-scriptblock",
        "syntax-scriptblock --help"
      ]
    },
    {
      "name": "syntax-servicestatus",
      "description": "List the services installed on one or more machines along with the status (running, stopped, disabled etc) Call the script below passing the name of a text file containing the machines to query. The output is written to a set of csv files in the current directory, one per machine: Services_<machine_name>.csv",
      "syntax": "syntax-servicestatus [options]",
      "examples": [
        "syntax-servicestatus",
        "syntax-servicestatus --help"
      ]
    },
    {
      "name": "syntax-set-eol",
      "description": "A PowerShell script to change the line endings of a text file. This script will work even for a source file that contains a mixture of different file endings.",
      "syntax": "syntax-set-eol [options]",
      "examples": [
        "syntax-set-eol",
        "syntax-set-eol --help"
      ]
    },
    {
      "name": "syntax-stampme",
      "description": "Rename a file or a folder by appending the current date and time to the existing file or folder name:",
      "syntax": "syntax-stampme [options]",
      "examples": [
        "syntax-stampme",
        "syntax-stampme --help"
      ]
    },
    {
      "name": "syntax-tab-completion",
      "description": "Command completion when working at the PowerShell prompt. The [TAB] key can be used to automatically complete cmdlets, Filenames, Variable names and Parameters:",
      "syntax": "syntax-tab-completion [options]",
      "examples": [
        "syntax-tab-completion",
        "syntax-tab-completion --help"
      ]
    },
    {
      "name": "syntax-template",
      "description": "The template below can be used as a starting point for new PowerShell scripts. The template has sections for Declarations, Functions and the main body of the script.",
      "syntax": "syntax-template [options]",
      "examples": [
        "syntax-template",
        "syntax-template --help"
      ]
    },
    {
      "name": "syntax-touch",
      "description": "Changing the last modified date/time of a file (or folder) in PowerShell can be a simple one liner:",
      "syntax": "syntax-touch [options]",
      "examples": [
        "syntax-touch",
        "syntax-touch --help"
      ]
    },
    {
      "name": "syntax-transactions",
      "description": "Manage transacted operations This feature enables you to start a transaction, indicate which commands are part of the transaction and then either commit or roll back (cancel) the transaction.",
      "syntax": "syntax-transactions [options]",
      "examples": [
        "syntax-transactions",
        "syntax-transactions --help"
      ]
    },
    {
      "name": "syntax-variables",
      "description": "In PowerShell, all variable names start with the “$” character. Creating a new variable can be done in several ways:",
      "syntax": "syntax-variables [options]",
      "examples": [
        "syntax-variables",
        "syntax-variables --help"
      ]
    },
    {
      "name": "syntax-ver",
      "description": "Within PowerShell there are several different options for returning the OS version.",
      "syntax": "syntax-ver [options]",
      "examples": [
        "syntax-ver",
        "syntax-ver --help"
      ]
    },
    {
      "name": "syntax-video",
      "description": "The PowerShell script below is a simple GUI front end for the FFmpeg video converter.",
      "syntax": "syntax-video [options]",
      "examples": [
        "syntax-video",
        "syntax-video --help"
      ]
    },
    {
      "name": "syntax-wildcards",
      "description": "The * wildcard will match zero or more characters The ? wildcard will match a single character",
      "syntax": "syntax-wildcards [options]",
      "examples": [
        "syntax-wildcards",
        "syntax-wildcards --help"
      ]
    },
    {
      "name": "syntax-word",
      "description": "For the script below to work, the computer will need to have a copy of Microsoft Word already installed.",
      "syntax": "Name Value 18Description wdFormatDocument 0 Microsoft Office Word format (.Doc). wdFormatDocument97 0 Microsoft Word 97 document format (.Doc). wdFormatDOSText 4 Microsoft DOS text format. wdFormatDOSTextLineBreaks 5 Microsoft DOS text with line breaks preserved. wdFormatEncodedText 7 Encoded text format. wdFormatFilteredHTML 10 Filtered HTML format. wdFormatHTML 8 Standard HTML format. wdFormatRTF 6 Rich text format (RTF). wdFormatTemplate 1 Word template format (.Dot). wdFormatText 2 Microsoft",
      "examples": [
        "syntax-word",
        "syntax-word --help"
      ]
    },
    {
      "name": "syntax",
      "description": "Variables",
      "syntax": "syntax [options]",
      "examples": [
        "syntax",
        "syntax --help"
      ]
    },
    {
      "name": "tee-object",
      "description": "Send the input object(s) to two places, an input object is piped to a file or variable, and then also passed along the pipeline.",
      "syntax": "PS C:\\> get-process | tee-object -filepath C:\\fileA.txt",
      "examples": [
        "tee-object",
        "tee-object --help"
      ]
    },
    {
      "name": "test-computersecurechannel",
      "description": "Test and repair the secure channel between the local computer and its domain.",
      "syntax": "PS C:> test-computersecurechannel",
      "examples": [
        "test-computersecurechannel",
        "test-computersecurechannel --help"
      ]
    },
    {
      "name": "test-connection",
      "description": "Sends ICMP echo request packets (\"pings\") to one or more computers using WMI.",
      "syntax": "PS C:\\> test-connection server64",
      "examples": [
        "test-connection",
        "test-connection --help"
      ]
    },
    {
      "name": "test-path",
      "description": "Return true if the path exists, otherwise return false, determines whether all elements of the path exist.",
      "syntax": "PS C:\\> test-path \"F:\\MSSQL\\BACKUP",
      "examples": [
        "test-path",
        "test-path --help"
      ]
    },
    {
      "name": "test-wsman",
      "description": "Test if a computer is setup to receive remote commands via the WinRM service.",
      "syntax": "PS C:> test-wsman",
      "examples": [
        "test-wsman",
        "test-wsman --help"
      ]
    },
    {
      "name": "trace-command",
      "description": "Trace an expression or command.",
      "syntax": "PS C:\\> $a = \"i*\" PS C:\\> trace-command -name parameterbinding {get-alias $input} -pshost -inputobject $a",
      "examples": [
        "trace-command",
        "trace-command --help"
      ]
    },
    {
      "name": "trap",
      "description": "Handle a terminating error (exception).",
      "syntax": "Syntax trap [[error_type]] {statement_list} Key error_type The terminating error to trap, requires [brackets]. statement_list A scriptblock of code to be run.",
      "examples": [
        "trap [[error_type]] {statement_list}",
        "trap {}",
        "trap {\"Error found: $_\"}"
      ]
    },
    {
      "name": "trim",
      "description": "Remove characters (by default, spaces) from the beginning or end of a string.",
      "syntax": "trim()",
      "examples": [
        "trim()"
      ]
    },
    {
      "name": "try",
      "description": "Handle a terminating error (exception) within a scriptblock.",
      "syntax": "Syntax try {statement_list} catch [[error_type][',' error_type]*] {statement_list} finally {statement_list} Key statement_list A scriptblock of code to be run",
      "examples": [
        "try {statement_list}",
        "try { NoSuchCmdlet }"
      ]
    },
    {
      "name": "unblock-file",
      "description": "Unblock files that were downloaded from the Internet.",
      "syntax": "unblock-file [options]",
      "examples": [
        "unblock-file",
        "unblock-file --help"
      ]
    },
    {
      "name": "undo-transaction",
      "description": "Roll back the active transaction.",
      "syntax": "PS C:\\> cd hkcu:\\software PS HKCU:\\Software> start-transaction PS HKCU:\\Software> new-item SS64 -usetransaction PS HKCU:\\Software> undo-transaction",
      "examples": [
        "undo-transaction",
        "undo-transaction --help"
      ]
    },
    {
      "name": "uninstall-adserviceaccount",
      "description": "Uninstall an Active Directory service account from a computer.",
      "syntax": "uninstall-adserviceaccount [options]",
      "examples": [
        "uninstall-adserviceaccount",
        "uninstall-adserviceaccount --help"
      ]
    },
    {
      "name": "uninstall-windowsfeature",
      "description": "Uninstall and optionally remove specified roles, role services, and features from a computer that is running Windows Server 2012 R2, or from an offline virtual hard disk (VHD) on which Windows Server 2012 R2 is installed. .",
      "syntax": "uninstall-windowsfeature [options]",
      "examples": [
        "uninstall-windowsfeature",
        "uninstall-windowsfeature --help"
      ]
    },
    {
      "name": "unlock-adaccount",
      "description": "Unlock an Active Directory account.",
      "syntax": "unlock-adaccount [options]",
      "examples": [
        "unlock-adaccount",
        "unlock-adaccount --help"
      ]
    },
    {
      "name": "unregister-event",
      "description": "Cancel an event subscription.",
      "syntax": "PS C:\\> unregister-event -sourceIdentifier ProcessStarted",
      "examples": [
        "unregister-event",
        "unregister-event --help"
      ]
    },
    {
      "name": "unregister-pssessionconfiguration",
      "description": "Delete registered session configurations from the computer. This is an advanced cmdlet for system administrators to manage custom session configurations for their users.",
      "syntax": "PS C:> unregister-pssessionconfiguration -name MaintenanceShell -force",
      "examples": [
        "unregister-pssessionconfiguration",
        "unregister-pssessionconfiguration --help"
      ]
    },
    {
      "name": "unregister-scheduledjob",
      "description": "Delete scheduled jobs on the local computer.",
      "syntax": "unregister-scheduledjob [options]",
      "examples": [
        "unregister-scheduledjob",
        "unregister-scheduledjob --help"
      ]
    },
    {
      "name": "until",
      "description": "Run a command block based on the results of a conditional test.",
      "syntax": "until [options]",
      "examples": [
        "until",
        "until --help"
      ]
    },
    {
      "name": "update-formatdata",
      "description": "Update the formatting data in the current session.",
      "syntax": "PS C:\\> update-formatdata",
      "examples": [
        "update-formatdata",
        "update-formatdata --help"
      ]
    },
    {
      "name": "update-help",
      "description": "Download and install the newest PowerShell help files on your computer.",
      "syntax": "update-help : Failed to update Help for the module(s)...",
      "examples": [
        "update-help : Failed to update Help for the module(s)..."
      ]
    },
    {
      "name": "update-list",
      "description": "Add and remove items from a property value that contains a collection of objects.",
      "syntax": "PS C:\\> get-mailbox | update-list -Property aliases -Add \"A\",\"B\" -Remove \"X\",\"Y\" | set-mailbox Hello",
      "examples": [
        "update-list",
        "update-list --help"
      ]
    },
    {
      "name": "update-typedata",
      "description": "Update the current extended type configuration by reloading the *.types.ps1xml files into memory.",
      "syntax": "PS C:\\> update-typedata",
      "examples": [
        "update-typedata",
        "update-typedata --help"
      ]
    },
    {
      "name": "use-transaction",
      "description": "Add a script block to the active transaction.",
      "syntax": "use-transaction [options]",
      "examples": [
        "use-transaction",
        "use-transaction --help"
      ]
    },
    {
      "name": "wait-event",
      "description": "Wait until a particular event is raised before continuing to run.",
      "syntax": "PS C:\\> wait-event",
      "examples": [
        "wait-event",
        "wait-event --help"
      ]
    },
    {
      "name": "wait-job",
      "description": "Suppress the command prompt until one or all of the PowerShell background jobs running in the session are complete.",
      "syntax": "PS C:\\> get-job | wait-job",
      "examples": [
        "wait-job",
        "wait-job --help"
      ]
    },
    {
      "name": "wait-process",
      "description": "Wait for one or more processes to be stopped before accepting more input.",
      "syntax": "PS C:\\> $nid = (get-process notepad).id PS C:\\> stop-process -id $nid PS C:\\> wait-process -id $nid",
      "examples": [
        "wait-process",
        "wait-process --help"
      ]
    },
    {
      "name": "where-method",
      "description": "Filter input from a collection (or a set of properties), returning all or some of the matching items.",
      "syntax": "where-method [options]",
      "examples": [
        "where-method",
        "where-method --help"
      ]
    },
    {
      "name": "where-object",
      "description": "Filter input from the pipeline, control which objects will be passed along the command pipeline. The '?' symbol and Where are both aliases for Where-Object.",
      "syntax": "where-object [options]",
      "examples": [
        "where-object",
        "where-object --help"
      ]
    },
    {
      "name": "while",
      "description": "Run a command block based on the results of a conditional test.",
      "syntax": "PS> while($val -ne 10) { $val++ ; Write-Host $val }",
      "examples": [
        "while (condition) {command_block}"
      ]
    },
    {
      "name": "write-debug",
      "description": "Write a debug message to the console.",
      "syntax": "write-debug [options]",
      "examples": [
        "write-debug",
        "write-debug --help"
      ]
    },
    {
      "name": "write-error",
      "description": "Write an object to the error pipeline. Write error messages along with other information such as an id, object data, and suggested actions.",
      "syntax": "write-error [options]",
      "examples": [
        "write-error",
        "write-error --help"
      ]
    },
    {
      "name": "write-eventlog",
      "description": "Write an event to an event log.",
      "syntax": "PS C:\\> write-eventlog -logname Application -source SS64App -eventID 3001 -entrytype Information -message \"Something happened.\" -category 1 -rawdata 10,20",
      "examples": [
        "write-eventlog",
        "write-eventlog --help"
      ]
    },
    {
      "name": "write-host",
      "description": "Write a string to the display, optionally customizing the output. Output can be to any host but is typically the console screen.",
      "syntax": "PS C:\\> write-host \"The quick brown fox jumped\" -foregroundcolor DarkGreen -backgroundcolor white PS C:\\> Write-Host -ForeGroundColor Red \"some text in red\" -nonewline",
      "examples": [
        "write-host",
        "write-host --help"
      ]
    },
    {
      "name": "write-information",
      "description": "Write to the information stream data.",
      "syntax": "write-information [options]",
      "examples": [
        "write-information",
        "write-information --help"
      ]
    },
    {
      "name": "write-output",
      "description": "Write an object to the pipeline. If the command is the last command in the pipeline, the objects are displayed in the console.",
      "syntax": "write-output hello",
      "examples": [
        "write-output hello",
        "write-output \"hello\"",
        "write-output hello world"
      ]
    },
    {
      "name": "write-progress",
      "description": "Display a progress bar.",
      "syntax": "PS C:\\> for($i = 1; $i -lt 101; $i++ ) {for($j=0;$j -lt 10000;$j++) {} write-progress \"Search in Progress\" \"% Complete:\" -perc $i;}",
      "examples": [
        "write-progress",
        "write-progress --help"
      ]
    },
    {
      "name": "write-verbose",
      "description": "Write a string to the host's verbose display. This is normally used within PowerShell scripts to provide an optional message, normally hidden but available to view by setting a preference.",
      "syntax": "write-verbose [options]",
      "examples": [
        "write-verbose",
        "write-verbose --help"
      ]
    },
    {
      "name": "write-warning",
      "description": "Write a warning string (3) in reverse video to the display",
      "syntax": "write-warning [options]",
      "examples": [
        "write-warning",
        "write-warning --help"
      ]
    },
    {
      "name": "zip",
      "description": "Now in PowerShell 5.0 we have the Compress-Archive and Expand-Archive cmdlets.",
      "syntax": "PS C:\\> Add-Type -As System.IO.Compression.FileSystem PS C:\\> [IO.Compression.ZipFile]::CreateFromDirectory( ('C:work\\demo'), \"C:\\output\\demo.zip\", \"Optimal\", $true )",
      "examples": [
        "zip",
        "zip --help"
      ]
    }
  ],
  "access": [
    {
      "name": "abs",
      "description": "Function that returns the absolute value of a number (ignoring positive/negative sign)",
      "syntax": "abs()",
      "examples": [
        "abs()"
      ]
    },
    {
      "name": "accompare",
      "description": "Constant",
      "syntax": "accompare [options]",
      "examples": [
        "accompare",
        "accompare --help"
      ]
    },
    {
      "name": "acdataobjecttype",
      "description": "Used with the GoToRecord and SearchForRecord methods to specify the type of object.",
      "syntax": "acdataobjecttype [options]",
      "examples": [
        "acdataobjecttype",
        "acdataobjecttype --help"
      ]
    },
    {
      "name": "acdatatransfertype",
      "description": "Object Type",
      "syntax": "acdatatransfertype [options]",
      "examples": [
        "acdatatransfertype",
        "acdatatransfertype --help"
      ]
    },
    {
      "name": "acdateformats",
      "description": "The option for weeknumbers (ww) is buggy for certain weeks/years. To produce a correct ISO 8601 weeknumber use a function, if this is saved in a module it can be used in VBA or in an SQL query:",
      "syntax": "acdateformats [options]",
      "examples": [
        "acdateformats",
        "acdateformats --help"
      ]
    },
    {
      "name": "acfirstweekofyear",
      "description": "FirstWeekofYear constants:",
      "syntax": "acfirstweekofyear [options]",
      "examples": [
        "acfirstweekofyear",
        "acfirstweekofyear --help"
      ]
    },
    {
      "name": "acformat",
      "description": "Name",
      "syntax": "acformat [options]",
      "examples": [
        "acformat",
        "acformat --help"
      ]
    },
    {
      "name": "acformattype",
      "description": "“An honest tale speeds best being plainly told” ~ William Shakespeare (Richard III)",
      "syntax": "acformattype [options]",
      "examples": [
        "acformattype",
        "acformattype --help"
      ]
    },
    {
      "name": "acformopendatamode",
      "description": "Name",
      "syntax": "acformopendatamode [options]",
      "examples": [
        "acformopendatamode",
        "acformopendatamode --help"
      ]
    },
    {
      "name": "acformview",
      "description": "Name",
      "syntax": "acformview [options]",
      "examples": [
        "acformview",
        "acformview --help"
      ]
    },
    {
      "name": "acmsgboxstyle",
      "description": "vbOKOnly",
      "syntax": "acmsgboxstyle [options]",
      "examples": [
        "acmsgboxstyle",
        "acmsgboxstyle --help"
      ]
    },
    {
      "name": "acnumberformats",
      "description": "Character",
      "syntax": "acnumberformats [options]",
      "examples": [
        "acnumberformats",
        "acnumberformats --help"
      ]
    },
    {
      "name": "acobjecttype",
      "description": "Object Type",
      "syntax": "acobjecttype [options]",
      "examples": [
        "acobjecttype",
        "acobjecttype --help"
      ]
    },
    {
      "name": "acopendatamode",
      "description": "Name",
      "syntax": "acopendatamode [options]",
      "examples": [
        "acopendatamode",
        "acopendatamode --help"
      ]
    },
    {
      "name": "acoutputobjecttype",
      "description": "Name",
      "syntax": "acoutputobjecttype [options]",
      "examples": [
        "acoutputobjecttype",
        "acoutputobjecttype --help"
      ]
    },
    {
      "name": "acrecord",
      "description": "Used with the GoToRecord and SearchForRecord methods to specify which record to make current.",
      "syntax": "acrecord [options]",
      "examples": [
        "acrecord",
        "acrecord --help"
      ]
    },
    {
      "name": "acrecordsetoptionenum",
      "description": "“I am by heritage a Jew, by citizenship a Swiss, and by makeup a human being, and only a human being, without any special attachment to any state or national entity whatsoever” ~ Albert Einstein",
      "syntax": "acrecordsetoptionenum [options]",
      "examples": [
        "acrecordsetoptionenum",
        "acrecordsetoptionenum --help"
      ]
    },
    {
      "name": "acsendobjecttype",
      "description": "Name",
      "syntax": "acsendobjecttype [options]",
      "examples": [
        "acsendobjecttype",
        "acsendobjecttype --help"
      ]
    },
    {
      "name": "acsharepointlisttransfertype",
      "description": "Object Type",
      "syntax": "acsharepointlisttransfertype [options]",
      "examples": [
        "acsharepointlisttransfertype",
        "acsharepointlisttransfertype --help"
      ]
    },
    {
      "name": "acspreadsheettype",
      "description": "Name",
      "syntax": "acspreadsheettype [options]",
      "examples": [
        "acspreadsheettype",
        "acspreadsheettype --help"
      ]
    },
    {
      "name": "acstringformats",
      "description": "Character",
      "syntax": "acstringformats [options]",
      "examples": [
        "acstringformats",
        "acstringformats --help"
      ]
    },
    {
      "name": "actexttransfertype",
      "description": "Name",
      "syntax": "actexttransfertype [options]",
      "examples": [
        "actexttransfertype",
        "actexttransfertype --help"
      ]
    },
    {
      "name": "acview",
      "description": "Name",
      "syntax": "acview [options]",
      "examples": [
        "acview",
        "acview --help"
      ]
    },
    {
      "name": "acwindowmode",
      "description": "Name",
      "syntax": "acwindowmode [options]",
      "examples": [
        "acwindowmode",
        "acwindowmode --help"
      ]
    },
    {
      "name": "addmenu",
      "description": "Add a custom menu bar/shortcut bar.",
      "syntax": "addmenu [options]",
      "examples": [
        "addmenu",
        "addmenu --help"
      ]
    },
    {
      "name": "addnew",
      "description": "Add a new record to a recordset.",
      "syntax": "addnew [options]",
      "examples": [
        "addnew",
        "addnew --help"
      ]
    },
    {
      "name": "applyfilter",
      "description": "Apply a filter clause to a table, form, or report.",
      "syntax": "applyfilter [options]",
      "examples": [
        "applyfilter",
        "applyfilter --help"
      ]
    },
    {
      "name": "array",
      "description": "Create an Array.",
      "syntax": "Syntax Array(arglist) Key arglist A comma separated list of values to assign to the array.",
      "examples": [
        "array",
        "array --help"
      ]
    },
    {
      "name": "asc",
      "description": "Function that returns the Ascii code which represents a specific character.",
      "syntax": "asc [options]",
      "examples": [
        "asc",
        "asc --help"
      ]
    },
    {
      "name": "ascw",
      "description": "Function that returns the Unicode which represents a specific character.",
      "syntax": "ascw [options]",
      "examples": [
        "ascw",
        "ascw --help"
      ]
    },
    {
      "name": "avg",
      "description": "SQL Function that returns the average (arithmetic mean) of the numeric values returned by a SELECT query.",
      "syntax": "avg [options]",
      "examples": [
        "avg",
        "avg --help"
      ]
    },
    {
      "name": "beep",
      "description": "Sound a beep tone through the computer's speaker.",
      "syntax": "beep [options]",
      "examples": [
        "beep",
        "beep --help"
      ]
    },
    {
      "name": "browseto",
      "description": "Navigate between objects. (Access 2010)",
      "syntax": "browseto [options]",
      "examples": [
        "browseto",
        "browseto --help"
      ]
    },
    {
      "name": "cancelevent",
      "description": "Cancel the event that caused Microsoft Access to run the procedure containing this method.",
      "syntax": "cancelevent [options]",
      "examples": [
        "cancelevent",
        "cancelevent --help"
      ]
    },
    {
      "name": "case",
      "description": "If-Then-Else, VBA statement.",
      "syntax": "case [options]",
      "examples": [
        "case",
        "case --help"
      ]
    },
    {
      "name": "cbool",
      "description": "Function that converts an expression into a boolean ( -1 / 0 ).",
      "syntax": "cbool [options]",
      "examples": [
        "cbool",
        "cbool --help"
      ]
    },
    {
      "name": "cbyte",
      "description": "Function that converts an expression into a byte number (0 - 255)",
      "syntax": "cbyte [options]",
      "examples": [
        "cbyte",
        "cbyte --help"
      ]
    },
    {
      "name": "ccur",
      "description": "Function that converts an expression into a currency value.",
      "syntax": "ccur [options]",
      "examples": [
        "ccur",
        "ccur --help"
      ]
    },
    {
      "name": "cdate",
      "description": "Function that converts an expression into a date value.",
      "syntax": "cdate [options]",
      "examples": [
        "cdate",
        "cdate --help"
      ]
    },
    {
      "name": "cdbl",
      "description": "Function that converts an expression into a Double (Number.)",
      "syntax": "cdbl [options]",
      "examples": [
        "cdbl",
        "cdbl --help"
      ]
    },
    {
      "name": "cdec",
      "description": "Function that converts an expression into a Decimal (Number.)",
      "syntax": "cdec [options]",
      "examples": [
        "cdec",
        "cdec --help"
      ]
    },
    {
      "name": "chdir",
      "description": "Change the current directory or folder.",
      "syntax": "chdir [options]",
      "examples": [
        "chdir",
        "chdir --help"
      ]
    },
    {
      "name": "chdrive",
      "description": "Change the current drive.",
      "syntax": "chdrive [options]",
      "examples": [
        "chdrive",
        "chdrive --help"
      ]
    },
    {
      "name": "choose",
      "description": "Function that returns a value from a list of values based on a given position.",
      "syntax": "varDemo = choose(4,\"The\", \"universe\", \"is\", \"expanding\")",
      "examples": [
        "choose",
        "choose --help"
      ]
    },
    {
      "name": "chr",
      "description": "Function that returns the character represented by an Ascii code.",
      "syntax": "chr [options]",
      "examples": [
        "chr",
        "chr --help"
      ]
    },
    {
      "name": "cint",
      "description": "Function that converts an expression into an integer value.",
      "syntax": "cint [options]",
      "examples": [
        "cint",
        "cint --help"
      ]
    },
    {
      "name": "clearmacroerror",
      "description": "Remove information about an error that is stored in the MacroError object. (Access 2010)",
      "syntax": "clearmacroerror [options]",
      "examples": [
        "clearmacroerror",
        "clearmacroerror --help"
      ]
    },
    {
      "name": "clng",
      "description": "Function that converts an expression into a Long (Number) value",
      "syntax": "clng [options]",
      "examples": [
        "clng",
        "clng --help"
      ]
    },
    {
      "name": "close",
      "description": "Close a form, report or window.",
      "syntax": "close [options]",
      "examples": [
        "close",
        "close --help"
      ]
    },
    {
      "name": "closedatabase",
      "description": "Close the database (Access 2007 +)",
      "syntax": "closedatabase [options]",
      "examples": [
        "closedatabase",
        "closedatabase --help"
      ]
    },
    {
      "name": "command",
      "description": "Returns the argument portion of the command line used to launch Access.",
      "syntax": "command [options]",
      "examples": [
        "command",
        "command --help"
      ]
    },
    {
      "name": "copydatabasefile",
      "description": "Copy the database connected to the current project to a SQL Server database file for export.",
      "syntax": "copydatabasefile [options]",
      "examples": [
        "copydatabasefile",
        "copydatabasefile --help"
      ]
    },
    {
      "name": "copyobject",
      "description": "Copy a database object to a different Access database or to the same database or Access project (.adp) under a new name.",
      "syntax": "copyobject [options]",
      "examples": [
        "copyobject",
        "copyobject --help"
      ]
    },
    {
      "name": "count",
      "description": "Σ",
      "syntax": "count [options]",
      "examples": [
        "count",
        "count --help"
      ]
    },
    {
      "name": "csng",
      "description": "Function that converts an expression into a Single (Number.)",
      "syntax": "csng [options]",
      "examples": [
        "csng",
        "csng --help"
      ]
    },
    {
      "name": "cstr",
      "description": "Function that wconverts an expression into a String.",
      "syntax": "cstr [options]",
      "examples": [
        "cstr",
        "cstr --help"
      ]
    },
    {
      "name": "curdir",
      "description": "Return the current path.",
      "syntax": "curdir [options]",
      "examples": [
        "curdir",
        "curdir --help"
      ]
    },
    {
      "name": "currentdb",
      "description": "Return an object variable of type database that represents the current database.",
      "syntax": "currentdb [options]",
      "examples": [
        "currentdb",
        "currentdb --help"
      ]
    },
    {
      "name": "currentuser",
      "description": "Return a string variable that represents the current user.",
      "syntax": "currentuser [options]",
      "examples": [
        "currentuser",
        "currentuser --help"
      ]
    },
    {
      "name": "cvar",
      "description": "Function that converts an expression into a Variant.",
      "syntax": "cvar [options]",
      "examples": [
        "cvar",
        "cvar --help"
      ]
    },
    {
      "name": "cvdate",
      "description": "Function that converts an expression into a date value",
      "syntax": "cvdate [options]",
      "examples": [
        "cvdate",
        "cvdate --help"
      ]
    },
    {
      "name": "date",
      "description": "Return the current date.",
      "syntax": "date [options]",
      "examples": [
        "date",
        "date --help"
      ]
    },
    {
      "name": "dateadd",
      "description": "Add a specified time interval to a date.",
      "syntax": "dateadd [options]",
      "examples": [
        "dateadd",
        "dateadd --help"
      ]
    },
    {
      "name": "datediff",
      "description": "Returns a Variant (Long) specifying the number of time intervals between two dates.",
      "syntax": "datediff [options]",
      "examples": [
        "datediff",
        "datediff --help"
      ]
    },
    {
      "name": "datepart",
      "description": "Returns a specified part of a given date.",
      "syntax": "datepart [options]",
      "examples": [
        "datepart",
        "datepart --help"
      ]
    },
    {
      "name": "dateserial",
      "description": "Returns a date given a year, month, and day.",
      "syntax": "dateserial [options]",
      "examples": [
        "dateserial",
        "dateserial --help"
      ]
    },
    {
      "name": "datevalue",
      "description": "Convert a string to a date.",
      "syntax": "datevalue [options]",
      "examples": [
        "datevalue",
        "datevalue --help"
      ]
    },
    {
      "name": "davg",
      "description": "Return the average from a set of numeric values in a set of records.",
      "syntax": "davg [options]",
      "examples": [
        "davg",
        "davg --help"
      ]
    },
    {
      "name": "day",
      "description": "Return the day of the month (0-31).",
      "syntax": "day [options]",
      "examples": [
        "day",
        "day --help"
      ]
    },
    {
      "name": "dcount",
      "description": "Count the number of records in a table/query.",
      "syntax": "dcount [options]",
      "examples": [
        "dcount",
        "dcount --help"
      ]
    },
    {
      "name": "delete",
      "description": "Delete records from one or more of the tables listed in the FROM clause that satisfy the WHERE clause (SQL).",
      "syntax": "delete [options]",
      "examples": [
        "delete",
        "delete --help"
      ]
    },
    {
      "name": "deleteobject",
      "description": "Delete a database object.",
      "syntax": "deleteobject [options]",
      "examples": [
        "deleteobject",
        "deleteobject --help"
      ]
    },
    {
      "name": "deletesetting",
      "description": "Delete a value from the users registry (VBA).",
      "syntax": "deletesetting [options]",
      "examples": [
        "deletesetting",
        "deletesetting --help"
      ]
    },
    {
      "name": "dfirst",
      "description": "Return the first value from a specified set of records.",
      "syntax": "dfirst [options]",
      "examples": [
        "dfirst",
        "dfirst --help"
      ]
    },
    {
      "name": "dir",
      "description": "List the files in a folder.",
      "syntax": "dir [options]",
      "examples": [
        "dir",
        "dir --help"
      ]
    },
    {
      "name": "dlast",
      "description": "Return the last value from a specified set of records.",
      "syntax": "dlast [options]",
      "examples": [
        "dlast",
        "dlast --help"
      ]
    },
    {
      "name": "dlookup",
      "description": "Get the value of a particular field from a specified set of records.",
      "syntax": "dlookup [options]",
      "examples": [
        "dlookup",
        "dlookup --help"
      ]
    },
    {
      "name": "dmax",
      "description": "Return the maximum value from a specified set of records.",
      "syntax": "dmax [options]",
      "examples": [
        "dmax",
        "dmax --help"
      ]
    },
    {
      "name": "dmin",
      "description": "Return the minimum value from a specified set of records.",
      "syntax": "dmin [options]",
      "examples": [
        "dmin",
        "dmin --help"
      ]
    },
    {
      "name": "doevents",
      "description": "Yield execution so the operating system can process other events.",
      "syntax": "doevents [options]",
      "examples": [
        "doevents",
        "doevents --help"
      ]
    },
    {
      "name": "dsum",
      "description": "Return the sum of values from a specified set of records.",
      "syntax": "dsum [options]",
      "examples": [
        "dsum",
        "dsum --help"
      ]
    },
    {
      "name": "echo",
      "description": "Turn screen updating on or off.",
      "syntax": "echo [options]",
      "examples": [
        "echo",
        "echo --help"
      ]
    },
    {
      "name": "environ",
      "description": "Return the value of an operating system environment variable.",
      "syntax": "environ [options]",
      "examples": [
        "environ",
        "environ --help"
      ]
    },
    {
      "name": "eval",
      "description": "Evaluate an expression.",
      "syntax": "eval [options]",
      "examples": [
        "eval",
        "eval --help"
      ]
    },
    {
      "name": "execute",
      "description": "In SQL the Execute command invokes the execution of a procedure. In VBA the Execute method runs an action query or executes an SQL statement.",
      "syntax": "execute [options]",
      "examples": [
        "execute",
        "execute --help"
      ]
    },
    {
      "name": "exp",
      "description": "Exponential e raised to the nth power.",
      "syntax": "exp [options]",
      "examples": [
        "exp",
        "exp --help"
      ]
    },
    {
      "name": "filedatetime",
      "description": "Returns the date and time of when a file was created or last modified.",
      "syntax": "filedatetime [options]",
      "examples": [
        "filedatetime",
        "filedatetime --help"
      ]
    },
    {
      "name": "filelen",
      "description": "Returns the size of a file in bytes.",
      "syntax": "filelen [options]",
      "examples": [
        "filelen",
        "filelen --help"
      ]
    },
    {
      "name": "findfirst",
      "description": "Find records within a recordset.",
      "syntax": "findfirst [options]",
      "examples": [
        "findfirst",
        "findfirst --help"
      ]
    },
    {
      "name": "findrecord",
      "description": "Find a record.",
      "syntax": "findrecord [options]",
      "examples": [
        "findrecord",
        "findrecord --help"
      ]
    },
    {
      "name": "first",
      "description": "Return the first value from the result set of a query. (SQL).",
      "syntax": "first [options]",
      "examples": [
        "first",
        "first --help"
      ]
    },
    {
      "name": "fix",
      "description": "Return the integer portion of a number.",
      "syntax": "fix [options]",
      "examples": [
        "fix",
        "fix --help"
      ]
    },
    {
      "name": "for",
      "description": "Loop - repeat a block of statements a specific number of times.",
      "syntax": "for [options]",
      "examples": [
        "for",
        "for --help"
      ]
    },
    {
      "name": "format",
      "description": "Take an expression and return it as a formatted string (Number, Date or String).",
      "syntax": "format",
      "examples": [
        "format          The format expression as described below.",
        "format",
        "format"
      ]
    },
    {
      "name": "from",
      "description": "Specify the table(s) to be used in an SQL query.",
      "syntax": "from [options]",
      "examples": [
        "from",
        "from --help"
      ]
    },
    {
      "name": "getallsettings",
      "description": "List the keys and values saved in the registry (VBA).",
      "syntax": "getallsettings [options]",
      "examples": [
        "getallsettings",
        "getallsettings --help"
      ]
    },
    {
      "name": "getattr",
      "description": "Returns an integer that represents the attributes of a file or folder.",
      "syntax": "getattr [options]",
      "examples": [
        "getattr",
        "getattr --help"
      ]
    },
    {
      "name": "getsetting",
      "description": "Retrieve a value from the users registry (VBA).",
      "syntax": "getsetting [options]",
      "examples": [
        "getsetting",
        "getsetting --help"
      ]
    },
    {
      "name": "gotorecord",
      "description": "Go to a specific record.",
      "syntax": "gotorecord [options]",
      "examples": [
        "gotorecord",
        "gotorecord --help"
      ]
    },
    {
      "name": "hex",
      "description": "Return the hex value of a number.",
      "syntax": "Syntax Hex (number) Key number The number to convert to hex.",
      "examples": [
        "hex",
        "hex --help"
      ]
    },
    {
      "name": "hour",
      "description": "Return the hour of the day (a number from 0 to 23) from a given time (or Date/Time) value.",
      "syntax": "hour [options]",
      "examples": [
        "hour",
        "hour --help"
      ]
    },
    {
      "name": "hourglass",
      "description": "Display an hourglass (busy mouse pointer).",
      "syntax": "hourglass [options]",
      "examples": [
        "hourglass",
        "hourglass --help"
      ]
    },
    {
      "name": "howto-subqueries",
      "description": "A common requirement in Microsoft Access is to write a subquery, often when there is a requirement to return rows from one table along with aggregate data from another table e.g. Supplier names along with a count of the number of orders places with each one.",
      "syntax": "howto-subqueries [options]",
      "examples": [
        "howto-subqueries",
        "howto-subqueries --help"
      ]
    },
    {
      "name": "if",
      "description": "If-Then-Else, VBA statement.",
      "syntax": "if [options]",
      "examples": [
        "if",
        "if --help"
      ]
    },
    {
      "name": "iif",
      "description": "If-Then-Else function.",
      "syntax": "iif(expression1 AND expression2, True)",
      "examples": [
        "iif (condition, value_if_true, value_if_false)",
        "iif(expression1 AND expression2, True)"
      ]
    },
    {
      "name": "inputbox",
      "description": "Prompt the user for input and store the result in a variable.",
      "syntax": "inputbox [options]",
      "examples": [
        "inputbox",
        "inputbox --help"
      ]
    },
    {
      "name": "insert",
      "description": "Add records to a table (append query).",
      "syntax": "insert [options]",
      "examples": [
        "insert",
        "insert --help"
      ]
    },
    {
      "name": "instr",
      "description": "Return the position of one string within another, starting by default at the beginning of the string.",
      "syntax": "instr [options]",
      "examples": [
        "instr",
        "instr --help"
      ]
    },
    {
      "name": "instrrev",
      "description": "Return the position of one string within another, starting at the end of the string.",
      "syntax": "instrrev [options]",
      "examples": [
        "instrrev",
        "instrrev --help"
      ]
    },
    {
      "name": "int",
      "description": "Return the integer portion of a number.",
      "syntax": "int()",
      "examples": [
        "int()"
      ]
    },
    {
      "name": "isarray",
      "description": "Return TRUE if the expression is an array, otherwise return FALSE.",
      "syntax": "isarray [options]",
      "examples": [
        "isarray",
        "isarray --help"
      ]
    },
    {
      "name": "isdate",
      "description": "Return TRUE if the expression is a valid date, otherwise return FALSE.",
      "syntax": "isdate [options]",
      "examples": [
        "isdate",
        "isdate --help"
      ]
    },
    {
      "name": "isempty",
      "description": "Return TRUE if the expression is a variable has been initialised, otherwise return FALSE.",
      "syntax": "isempty [options]",
      "examples": [
        "isempty",
        "isempty --help"
      ]
    },
    {
      "name": "iserror",
      "description": "Return TRUE if the expression is an error value.",
      "syntax": "iserror [options]",
      "examples": [
        "iserror",
        "iserror --help"
      ]
    },
    {
      "name": "ismissing",
      "description": "Return TRUE if the optional variant argument has been passed to a procedure.",
      "syntax": "ismissing [options]",
      "examples": [
        "ismissing",
        "ismissing --help"
      ]
    },
    {
      "name": "isnull",
      "description": "Return TRUE if the expression is NULL, otherwise return FALSE.",
      "syntax": "isnull [options]",
      "examples": [
        "isnull",
        "isnull --help"
      ]
    },
    {
      "name": "isnumeric",
      "description": "Return TRUE if the expression is a valid number, otherwise return FALSE.",
      "syntax": "isnumeric [options]",
      "examples": [
        "isnumeric",
        "isnumeric --help"
      ]
    },
    {
      "name": "isobject",
      "description": "Return TRUE if the identifier represents an object variable, otherwise returns FALSE.",
      "syntax": "isobject [options]",
      "examples": [
        "isobject",
        "isobject --help"
      ]
    },
    {
      "name": "join",
      "description": "Combine source table records, used within an SQL FROM clause.",
      "syntax": "join [options]",
      "examples": [
        "join",
        "join --help"
      ]
    },
    {
      "name": "last",
      "description": "Return the last value from the result set of a query. (SQL).",
      "syntax": "last [options]",
      "examples": [
        "last",
        "last --help"
      ]
    },
    {
      "name": "lcase",
      "description": "Convert a string to lower-case.",
      "syntax": "lcase [options]",
      "examples": [
        "lcase",
        "lcase --help"
      ]
    },
    {
      "name": "left",
      "description": "Extract a substring from a string, starting from the left-most character.",
      "syntax": "left [options]",
      "examples": [
        "left",
        "left --help"
      ]
    },
    {
      "name": "len",
      "description": "Returns the length of a string.",
      "syntax": "len [options]",
      "examples": [
        "len",
        "len --help"
      ]
    },
    {
      "name": "locknavigationpane",
      "description": "Prevent users from deleting database objects in the Navigation Pane. (Access 2007+)",
      "syntax": "locknavigationpane [options]",
      "examples": [
        "locknavigationpane",
        "locknavigationpane --help"
      ]
    },
    {
      "name": "log",
      "description": "Returns the natural logarithm of a number.",
      "syntax": "log [options]",
      "examples": [
        "log",
        "log --help"
      ]
    },
    {
      "name": "ltrim",
      "description": "Remove leading spaces from a string.",
      "syntax": "ltrim [options]",
      "examples": [
        "ltrim",
        "ltrim --help"
      ]
    },
    {
      "name": "max",
      "description": "Return the maximum value from the result set of a query. (SQL).",
      "syntax": "max [options]",
      "examples": [
        "max",
        "max --help"
      ]
    },
    {
      "name": "maximise",
      "description": "Enlarge the active window, the current Access form or report.",
      "syntax": "maximise [options]",
      "examples": [
        "maximise",
        "maximise --help"
      ]
    },
    {
      "name": "mid",
      "description": "Extract a substring from a string, starting at a given position.",
      "syntax": "mid [options]",
      "examples": [
        "mid",
        "mid --help"
      ]
    },
    {
      "name": "min",
      "description": "Return the minimum value from the result set of a query. (SQL).",
      "syntax": "min [options]",
      "examples": [
        "min",
        "min --help"
      ]
    },
    {
      "name": "minimise",
      "description": "Minimise the active window.",
      "syntax": "minimise [options]",
      "examples": [
        "minimise",
        "minimise --help"
      ]
    },
    {
      "name": "minute",
      "description": "Return the minute of the hour (a number from 0 to 59) given a time value.",
      "syntax": "Dim intDemo as integer intDemo = minute(dtmShiftEnd) intDemo = minute(#08:55:30 AM#)",
      "examples": [
        "minute",
        "minute --help"
      ]
    },
    {
      "name": "mkdir",
      "description": "Create a directory.",
      "syntax": "mkdir [options]",
      "examples": [
        "mkdir",
        "mkdir --help"
      ]
    },
    {
      "name": "month",
      "description": "Return the month (a number from 1 to 12) for a given date.",
      "syntax": "month [options]",
      "examples": [
        "month",
        "month --help"
      ]
    },
    {
      "name": "monthname",
      "description": "Return a string representing the month.",
      "syntax": "monthname [options]",
      "examples": [
        "monthname",
        "monthname --help"
      ]
    },
    {
      "name": "move",
      "description": "Move the position of the current record in a Recordset object.",
      "syntax": "move [options]",
      "examples": [
        "moved forward (toward the end of the file)."
      ]
    },
    {
      "name": "movefirst",
      "description": "Move to a different record within a recordset.",
      "syntax": "movefirst [options]",
      "examples": [
        "movefirst",
        "movefirst --help"
      ]
    },
    {
      "name": "movesize",
      "description": "Move or Resize a Window.",
      "syntax": "movesize [options]",
      "examples": [
        "movesize",
        "movesize --help"
      ]
    },
    {
      "name": "msgbox",
      "description": "Display a popup message.",
      "syntax": "msgbox [options]",
      "examples": [
        "msgbox",
        "msgbox --help"
      ]
    },
    {
      "name": "now",
      "description": "Return the current date and time.",
      "syntax": "now [options]",
      "examples": [
        "now",
        "now --help"
      ]
    },
    {
      "name": "nz",
      "description": "Detect a NULL value or a Zero Length string. Convert NULLs to a Zero-length string, or another value.",
      "syntax": "nz [options]",
      "examples": [
        "nz",
        "nz --help"
      ]
    },
    {
      "name": "oct",
      "description": "Function that converts an integer into a variant (string) containing the octal value of the number.",
      "syntax": "oct [options]",
      "examples": [
        "oct",
        "oct --help"
      ]
    },
    {
      "name": "onclick",
      "description": "Events can be used to trigger a Macro or a block of VBA code. The most common event is OnClick but there are many other listed below for Forms and TextBoxes:",
      "syntax": "onclick [options]",
      "examples": [
        "onclick",
        "onclick --help"
      ]
    },
    {
      "name": "openform",
      "description": "To open the same form twice, requires using a form variable/reference, the Set statement creates a temporary copy of the form in memory.",
      "syntax": "openform [options]",
      "examples": [
        "openform",
        "openform --help"
      ]
    },
    {
      "name": "openquery",
      "description": "Open a query.",
      "syntax": "openquery [options]",
      "examples": [
        "openquery",
        "openquery --help"
      ]
    },
    {
      "name": "openrecordset",
      "description": "Open a new Recordset. This allows you to navigate a set of records (or rows) in a table. n.b. In almost all circumstances an SQL query will perform faster than a RecordSet object.",
      "syntax": "openrecordset [options]",
      "examples": [
        "openrecordset",
        "openrecordset --help"
      ]
    },
    {
      "name": "openreport",
      "description": "Open a report.",
      "syntax": "openreport [options]",
      "examples": [
        "openreport",
        "openreport --help"
      ]
    },
    {
      "name": "outputto",
      "description": "Output the data held in an Access database object (datasheet, form, report, module, data access page) to several output formats.",
      "syntax": "outputto [options]",
      "examples": [
        "outputto",
        "outputto --help"
      ]
    },
    {
      "name": "partition",
      "description": "Locate a number within a range.(SQL).",
      "syntax": "partition [options]",
      "examples": [
        "partition",
        "partition --help"
      ]
    },
    {
      "name": "quit",
      "description": "Close Microsoft Access.",
      "syntax": "quit [options]",
      "examples": [
        "quit",
        "quit --help"
      ]
    },
    {
      "name": "refreshrecord",
      "description": "Refresh the data in a form. (Access 2010 +)",
      "syntax": "refreshrecord [options]",
      "examples": [
        "refreshrecord",
        "refreshrecord --help"
      ]
    },
    {
      "name": "rename",
      "description": "Carry out the Rename action in Visual Basic.",
      "syntax": "rename [options]",
      "examples": [
        "rename",
        "rename --help"
      ]
    },
    {
      "name": "replace",
      "description": "Replace a sequence of characters in a string.",
      "syntax": "replace [options]",
      "examples": [
        "replace",
        "replace --help"
      ]
    },
    {
      "name": "requery",
      "description": "Requery the data in a form or a control.",
      "syntax": "Syntax DoCmd.Requery(ControlName) Form.Requery Key ControlName The name of a control to requery. Form The name of a form to requery.",
      "examples": [
        "requery",
        "requery --help"
      ]
    },
    {
      "name": "restore",
      "description": "Restore the active window.",
      "syntax": "restore [options]",
      "examples": [
        "restore",
        "restore --help"
      ]
    },
    {
      "name": "rgb",
      "description": "Return a Long whole number representing an RGB color value.",
      "syntax": "rgb [options]",
      "examples": [
        "rgb",
        "rgb --help"
      ]
    },
    {
      "name": "right",
      "description": "Extract a substring from a string, starting from the right-most character.",
      "syntax": "right [options]",
      "examples": [
        "right",
        "right --help"
      ]
    },
    {
      "name": "rnd",
      "description": "Generate a pseudorandom number, a value between 0 and 1 (less than 1 but greater than or equal to zero.)",
      "syntax": "rnd [options]",
      "examples": [
        "rnd",
        "rnd --help"
      ]
    },
    {
      "name": "round",
      "description": "Return a number rounded to a specified number of decimal places.",
      "syntax": "round [options]",
      "examples": [
        "round",
        "round --help"
      ]
    },
    {
      "name": "rst-cancelupdate",
      "description": "Cancel any pending updates for a Recordset object.",
      "syntax": "rst-cancelupdate [options]",
      "examples": [
        "rst-cancelupdate",
        "rst-cancelupdate --help"
      ]
    },
    {
      "name": "rst-update",
      "description": "Save the current record and any changes you've made to it.",
      "syntax": "rst-update [options]",
      "examples": [
        "rst-update",
        "rst-update --help"
      ]
    },
    {
      "name": "rtrim",
      "description": "Remove trailing spaces from a string.",
      "syntax": "rtrim [options]",
      "examples": [
        "rtrim",
        "rtrim --help"
      ]
    },
    {
      "name": "runcommand",
      "description": "Run an Access menu or toolbar command.",
      "syntax": "runcommand [options]",
      "examples": [
        "runcommand",
        "runcommand --help"
      ]
    },
    {
      "name": "runmacro",
      "description": "Run an Access Macro from Access VBA.",
      "syntax": "runmacro [options]",
      "examples": [
        "runmacro",
        "runmacro --help"
      ]
    },
    {
      "name": "runsql",
      "description": "Run an SQL query.",
      "syntax": "runsql [options]",
      "examples": [
        "runsql",
        "runsql --help"
      ]
    },
    {
      "name": "save",
      "description": "Save a database object.",
      "syntax": "save [options]",
      "examples": [
        "save",
        "save --help"
      ]
    },
    {
      "name": "savesetting",
      "description": "Store a value to the users registry (VBA).",
      "syntax": "savesetting [options]",
      "examples": [
        "savesetting",
        "savesetting --help"
      ]
    },
    {
      "name": "searchforrecord",
      "description": "Search for a specific record (Access 2007+).",
      "syntax": "searchforrecord [options]",
      "examples": [
        "searchforrecord",
        "searchforrecord --help"
      ]
    },
    {
      "name": "second",
      "description": "Return the seconds of the minute (a number from 0 to 59) for a given time value.",
      "syntax": "second [options]",
      "examples": [
        "second",
        "second --help"
      ]
    },
    {
      "name": "select-into",
      "description": "Make-table query.",
      "syntax": "select-into [options]",
      "examples": [
        "select-into",
        "select-into --help"
      ]
    },
    {
      "name": "select-subquery",
      "description": "A subquery is a query within a query, it can be used to answer multiple-part questions. For example, to find all products made by the same manufacturer as product #45364: first use a subquery to determine the manufacturer of product #45364, then write the parent SELECT statement to return all the matching products.",
      "syntax": "select-subquery [options]",
      "examples": [
        "select-subquery",
        "select-subquery --help"
      ]
    },
    {
      "name": "select",
      "description": "Retrieve data from one or more tables or queries.",
      "syntax": "select [options]",
      "examples": [
        "select",
        "select --help"
      ]
    },
    {
      "name": "sendkeys",
      "description": "Send one or more keystrokes to the active window as if typed at the keyboard.",
      "syntax": "sendkeys [options]",
      "examples": [
        "sendkeys",
        "sendkeys --help"
      ]
    },
    {
      "name": "sendobject",
      "description": "Send an email with a database object attached.",
      "syntax": "sendobject [options]",
      "examples": [
        "sendobject",
        "sendobject --help"
      ]
    },
    {
      "name": "setattr",
      "description": "Set the attributes of a file.",
      "syntax": "setattr [options]",
      "examples": [
        "setattr",
        "setattr --help"
      ]
    },
    {
      "name": "setfilter",
      "description": "Apply a filter to a table, form, or report. (Access 2010 and above)",
      "syntax": "setfilter [options]",
      "examples": [
        "setfilter",
        "setfilter --help"
      ]
    },
    {
      "name": "setfocus",
      "description": "Move the focus to a specific control on a form.",
      "syntax": "setfocus [options]",
      "examples": [
        "setfocus",
        "setfocus --help"
      ]
    },
    {
      "name": "setorderby",
      "description": "Apply a sort to the active datasheet, form or report (Access 2010+).",
      "syntax": "setorderby [options]",
      "examples": [
        "setorderby",
        "setorderby --help"
      ]
    },
    {
      "name": "setparameter",
      "description": "Set a parameter before opening a Form, Report or macro (Access 2010+).",
      "syntax": "setparameter [options]",
      "examples": [
        "setparameter",
        "setparameter --help"
      ]
    },
    {
      "name": "setwarnings",
      "description": "Turn system messages on or off.",
      "syntax": "setwarnings [options]",
      "examples": [
        "setwarnings",
        "setwarnings --help"
      ]
    },
    {
      "name": "sgn",
      "description": "Returns the sign of a number, positive or negative.",
      "syntax": "sgn [options]",
      "examples": [
        "sgn",
        "sgn --help"
      ]
    },
    {
      "name": "shell",
      "description": "Run an external executable program and return a Variant (Double) representing the program's task ID if successful, otherwise return zero.",
      "syntax": "shell [options]",
      "examples": [
        "shell",
        "shell --help"
      ]
    },
    {
      "name": "showallrecords",
      "description": "Remove any applied filter from the active table, query result set, or form, and display all records.",
      "syntax": "showallrecords [options]",
      "examples": [
        "showallrecords",
        "showallrecords --help"
      ]
    },
    {
      "name": "showtoolbar",
      "description": "Display or hide a custom toolbar.",
      "syntax": "showtoolbar [options]",
      "examples": [
        "showtoolbar",
        "showtoolbar --help"
      ]
    },
    {
      "name": "space",
      "description": "Return a number of spaces.",
      "syntax": "Syntax Space(Number) Key Number The number of spaces to return.",
      "examples": [
        "space",
        "space --help"
      ]
    },
    {
      "name": "sqr",
      "description": "Return the square root of a number.",
      "syntax": "sqr [options]",
      "examples": [
        "sqr",
        "sqr --help"
      ]
    },
    {
      "name": "str",
      "description": "Return a string representation of a number.",
      "syntax": "Syntax Str(Number) Key Number The number to return as a string.",
      "examples": [
        "strDemo = Str(64)"
      ]
    },
    {
      "name": "strcomp",
      "description": "Compare two strings for equality.",
      "syntax": "strcomp [options]",
      "examples": [
        "strcomp",
        "strcomp --help"
      ]
    },
    {
      "name": "strconv",
      "description": "Return a string converted to Upper/lower case or Unicode.",
      "syntax": "strconv [options]",
      "examples": [
        "strconv",
        "strconv --help"
      ]
    },
    {
      "name": "string",
      "description": "Repeat a character n times.",
      "syntax": "string [options]",
      "examples": [
        "string",
        "string --help"
      ]
    },
    {
      "name": "stringexpression",
      "description": "A string expression is any expression that evaluates to a sequence of contigous characters.",
      "syntax": "stringexpression [options]",
      "examples": [
        "stringexpression",
        "stringexpression --help"
      ]
    },
    {
      "name": "sum",
      "description": "Add up the values in a query result set. (SQL).",
      "syntax": "sum [options]",
      "examples": [
        "sum",
        "sum --help"
      ]
    },
    {
      "name": "switch",
      "description": "Evaluate a list of expressions and return a value corresponding to the first expression that is TRUE.",
      "syntax": "switch [options]",
      "examples": [
        "switch",
        "switch --help"
      ]
    },
    {
      "name": "syntax-bulk",
      "description": "The script below can be used to loop through all controls on all forms in a database and quickly set various properties. It also demonstrates the use of the .Tag property to apply a conditional format.",
      "syntax": "syntax-bulk [options]",
      "examples": [
        "syntax-bulk",
        "syntax-bulk --help"
      ]
    },
    {
      "name": "syntax-color",
      "description": "The color of many objects (forms, buttons,text etc) in Microsoft access can be set, either manually or using VBA. The exact colour is specified as either a Long number or (in recent versions) a Hex color code.",
      "syntax": "syntax-color [options]",
      "examples": [
        "syntax-color",
        "syntax-color --help"
      ]
    },
    {
      "name": "syntax-dao-ado",
      "description": "TLDR: For most purposes you should stick with the default DAO.",
      "syntax": "syntax-dao-ado [options]",
      "examples": [
        "syntax-dao-ado",
        "syntax-dao-ado --help"
      ]
    },
    {
      "name": "syntax-datatypes",
      "description": "SQL Server",
      "syntax": "syntax-datatypes [options]",
      "examples": [
        "syntax-datatypes",
        "syntax-datatypes --help"
      ]
    },
    {
      "name": "syntax-defaults",
      "description": "The default properties (font, width height, etc) for every object type (text box, combo box etc) can be set with the toolbar:",
      "syntax": "syntax-defaults [options]",
      "examples": [
        "syntax-defaults",
        "syntax-defaults --help"
      ]
    },
    {
      "name": "syntax-design",
      "description": "In a relational database you can design separate tables and columns to hold sets of related data.",
      "syntax": "syntax-design [options]",
      "examples": [
        "syntax-design",
        "syntax-design --help"
      ]
    },
    {
      "name": "syntax-filter",
      "description": "Instantly filter the records displayed on a continuous form.",
      "syntax": "syntax-filter [options]",
      "examples": [
        "syntax-filter",
        "syntax-filter --help"
      ]
    },
    {
      "name": "syntax-fonts",
      "description": "Problematic fonts in MS Access.",
      "syntax": "syntax-fonts [options]",
      "examples": [
        "syntax-fonts",
        "syntax-fonts --help"
      ]
    },
    {
      "name": "syntax-functions",
      "description": "A VBA Function can be created either within a single form or report or in a stand-alone module, which can then be called from anywhere in the database. The key difference between a Sub() and a Function() is that functions return a value.",
      "syntax": "syntax-functions [options]",
      "examples": [
        "syntax-functions",
        "syntax-functions --help"
      ]
    },
    {
      "name": "syntax-invalid-procedure-call",
      "description": "In Microsoft Access the error \"Invalid Procedure Call or Argument\" (sometimes followed by a \"File Not Found\" Error ) can have several possible causes. One or other of the remedies below will usually resolve this.",
      "syntax": "syntax-invalid-procedure-call [options]",
      "examples": [
        "syntax-invalid-procedure-call",
        "syntax-invalid-procedure-call --help"
      ]
    },
    {
      "name": "syntax-keyboard",
      "description": "Access",
      "syntax": "syntax-keyboard [options]",
      "examples": [
        "syntax-keyboard",
        "syntax-keyboard --help"
      ]
    },
    {
      "name": "syntax-naming-database",
      "description": "Table 7 lists the tags used to identify types of objects in a database.",
      "syntax": "syntax-naming-database [options]",
      "examples": [
        "syntax-naming-database",
        "syntax-naming-database --help"
      ]
    },
    {
      "name": "syntax-naming-object-vars",
      "description": "Host application and component extensions to the conventions. Each host application for VBA, as well as each component that can be installed, has a set of objects it can use. This section defines tags for the objects in the various host applications and components. Future versions of the conventions will include tags for other VBA hosts and components.",
      "syntax": "syntax-naming-object-vars [options]",
      "examples": [
        "syntax-naming-object-vars",
        "syntax-naming-object-vars --help"
      ]
    },
    {
      "name": "syntax-naming-objects",
      "description": "Table 10 shows the tags for suggested Visual Basic 4.0 objects.",
      "syntax": "syntax-naming-objects [options]",
      "examples": [
        "syntax-naming-objects",
        "syntax-naming-objects --help"
      ]
    },
    {
      "name": "syntax-naming-prefix",
      "description": "Prefixes modify an object tag to indicate more information about an object.",
      "syntax": "syntax-naming-prefix [options]",
      "examples": [
        "syntax-naming-prefix",
        "syntax-naming-prefix --help"
      ]
    },
    {
      "name": "syntax-naming-suffix",
      "description": "Suffixes modify the base name of an object, indicating additional information about a variable. You’ll likely create your own suffixes that are specific to your development work. Table 4 lists some generic VBA suffixes.",
      "syntax": "syntax-naming-suffix [options]",
      "examples": [
        "syntax-naming-suffix",
        "syntax-naming-suffix --help"
      ]
    },
    {
      "name": "syntax-naming-variables",
      "description": "An introduction to Hungarian notation",
      "syntax": "syntax-naming-variables [options]",
      "examples": [
        "syntax-naming-variables",
        "syntax-naming-variables --help"
      ]
    },
    {
      "name": "syntax-naming",
      "description": "Copyright © 1995 Greg Reddick. All Rights Reserved.",
      "syntax": "syntax-naming [options]",
      "examples": [
        "syntax-naming",
        "syntax-naming --help"
      ]
    },
    {
      "name": "syntax-null-value-error",
      "description": "This error is often produced when working with 'Required' database fields, if the required item is missing/NULL it will raise an engine-level error.",
      "syntax": "syntax-null-value-error [options]",
      "examples": [
        "syntax-null-value-error",
        "syntax-null-value-error --help"
      ]
    },
    {
      "name": "syntax-null",
      "description": "A NULL is a value that has not been entered, so can be thought of as unknown or missing.",
      "syntax": "syntax-null [options]",
      "examples": [
        "syntax-null",
        "syntax-null --help"
      ]
    },
    {
      "name": "syntax-odbc-error",
      "description": "Access client applications with a ODBC / SQL Server back-end, will sometimes produce error messages from ODBC. These are often rather cryptic technical messages so it is good to trap them and provide a more user friendly message.",
      "syntax": "syntax-odbc-error [options]",
      "examples": [
        "syntax-odbc-error",
        "syntax-odbc-error --help"
      ]
    },
    {
      "name": "syntax-odbc",
      "description": "To create an ODBC connection to an external database hosted on SQL Server,PostGres etc",
      "syntax": "syntax-odbc [options]",
      "examples": [
        "syntax-odbc",
        "syntax-odbc --help"
      ]
    },
    {
      "name": "syntax-progress",
      "description": "Display a progress meter or optional specified text in the MS Access status bar.",
      "syntax": "syntax-progress [options]",
      "examples": [
        "syntax-progress",
        "syntax-progress --help"
      ]
    },
    {
      "name": "syntax-references",
      "description": "Controls on a form:",
      "syntax": "syntax-references [options]",
      "examples": [
        "syntax-references",
        "syntax-references --help"
      ]
    },
    {
      "name": "syntax-ribbon",
      "description": "The Access toolbar ribbon can be minimised or hidden completely using VBA.",
      "syntax": "syntax-ribbon [options]",
      "examples": [
        "syntax-ribbon",
        "syntax-ribbon --help"
      ]
    },
    {
      "name": "syntax-runcommands",
      "description": "A list of RunCommand constants with a brief description.",
      "syntax": "syntax-runcommands [options]",
      "examples": [
        "syntax-runcommands",
        "syntax-runcommands --help"
      ]
    },
    {
      "name": "syntax-trusted",
      "description": "Add folders to trusted locations from Office Button | Access Options | Trust Center | Trust Center Settings | Trusted Locations.",
      "syntax": "syntax-trusted [options]",
      "examples": [
        "syntax-trusted",
        "syntax-trusted --help"
      ]
    },
    {
      "name": "syntax-upsize",
      "description": "To upsize an access database to SQL Server (or Oracle, Postgres etc) there are several steps to perform:",
      "syntax": "syntax-upsize [options]",
      "examples": [
        "syntax-upsize",
        "syntax-upsize --help"
      ]
    },
    {
      "name": "syntax-window",
      "description": "Every Access database has a setting for Overlapping /Tabbed Windows which can be set under Options > Current Database > Document Window Options.",
      "syntax": "syntax-window [options]",
      "examples": [
        "syntax-window",
        "syntax-window --help"
      ]
    },
    {
      "name": "syntax",
      "description": "Number Data Types - Access data Types. Naming conventions - The standard 'Reddick VBA Naming convention' for Access. Database Design - Designing tables and columns to meet 1st, 2nd and 3rd normal form. NULL values - Dealing with NULL values. Embed a Subquery - Select As SubQuery Upsize an Access database to SQL Server Create an ODBC connection to SQL Server",
      "syntax": "syntax [options]",
      "examples": [
        "syntax",
        "syntax --help"
      ]
    },
    {
      "name": "time",
      "description": "Return the current system time.",
      "syntax": "time [options]",
      "examples": [
        "time",
        "time --help"
      ]
    },
    {
      "name": "timeserial",
      "description": "Return a time given an hour, minute, and second value.",
      "syntax": "timeserial [options]",
      "examples": [
        "timeserial",
        "timeserial --help"
      ]
    },
    {
      "name": "timevalue",
      "description": "Convert a string to a Time.",
      "syntax": "timevalue [options]",
      "examples": [
        "timevalue",
        "timevalue --help"
      ]
    },
    {
      "name": "transferdatabase",
      "description": "Import or export data to/from another database.",
      "syntax": "transferdatabase [options]",
      "examples": [
        "transferdatabase",
        "transferdatabase --help"
      ]
    },
    {
      "name": "transfersharepointlist",
      "description": "Import or link data from a SharePoint Foundation site.",
      "syntax": "transfersharepointlist [options]",
      "examples": [
        "transfersharepointlist",
        "transfersharepointlist --help"
      ]
    },
    {
      "name": "transferspreadsheet",
      "description": "Import or export data to/from a spreadsheet file.",
      "syntax": "transferspreadsheet [options]",
      "examples": [
        "transferspreadsheet",
        "transferspreadsheet --help"
      ]
    },
    {
      "name": "transfersqldatabase",
      "description": "Copy an entire SQL Server database.",
      "syntax": "transfersqldatabase [options]",
      "examples": [
        "transfersqldatabase",
        "transfersqldatabase --help"
      ]
    },
    {
      "name": "transfertext",
      "description": "Import or export data to/from a text file (Delimited, fixed width or HTML).",
      "syntax": "transfertext [options]",
      "examples": [
        "transfertext",
        "transfertext --help"
      ]
    },
    {
      "name": "transform",
      "description": "Create and run a crosstab query.",
      "syntax": "transform [options]",
      "examples": [
        "transform",
        "transform --help"
      ]
    },
    {
      "name": "trim",
      "description": "Remove leading and trailing spaces from a string.",
      "syntax": "trim [options]",
      "examples": [
        "trim",
        "trim --help"
      ]
    },
    {
      "name": "ucase",
      "description": "Convert a string to upper-case.",
      "syntax": "ucase [options]",
      "examples": [
        "ucase",
        "ucase --help"
      ]
    },
    {
      "name": "undo",
      "description": "Undo the last data edit.",
      "syntax": "Me!txtFirstName.undo",
      "examples": [
        "undo",
        "undo --help"
      ]
    },
    {
      "name": "union",
      "description": "Combine the results of two (or more) SQL queries.",
      "syntax": "union [options]",
      "examples": [
        "union",
        "union --help"
      ]
    },
    {
      "name": "update",
      "description": "Change the existing field values in a table.",
      "syntax": "update [options]",
      "examples": [
        "updated in a specific field in the table."
      ]
    },
    {
      "name": "val",
      "description": "Extract a numeric value from a string.",
      "syntax": "val [options]",
      "examples": [
        "val",
        "val --help"
      ]
    },
    {
      "name": "weekday",
      "description": "Returns a number representing the day of the week (a number from 1 to 7) for a given date value.",
      "syntax": "intday = weekday(\"30/04/2012\",2) Wscript.Echo intDay '",
      "examples": [
        "weekday",
        "weekday --help"
      ]
    },
    {
      "name": "weekdayname",
      "description": "Returns a string representing the day of the week.",
      "syntax": "strDay = weekdayname(2) '",
      "examples": [
        "weekdayname",
        "weekdayname --help"
      ]
    },
    {
      "name": "year",
      "description": "Return a four-digit year (a number from 1900 to 9999) for a given date value.",
      "syntax": "year [options]",
      "examples": [
        "year",
        "year --help"
      ]
    },
    {
      "name": "z syntax-launch",
      "description": "A best practice in designing any Access database is to split the database into a front-end containing Access forms and code and a back-end containing just tables and indexes, either as an Access MDB or ACCDB or preferrably a SQL Server database.",
      "syntax": "z syntax-launch [options]",
      "examples": [
        "z syntax-launch",
        "z syntax-launch --help"
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
    ),
    generated: '2025-05-23T01:23:08.685Z'
};

console.log('📊 Base de données SS64 chargée:');
console.log(`   Total: ${STATS.totalCommands} commandes`);
Object.entries(STATS.byOS).forEach(([os, count]) => {
    console.log(`   ${os}: ${count} commandes`);
});
