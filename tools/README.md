# System Administration Tools Collection

**Last Updated:** February 21, 2026  
**Total Tools:** 300+ utilities across 15 categories

> **Note:** This repository tracks structure and metadata only.  
> Binaries (`.exe`, `.zip`, etc.) are excluded via `.gitignore`.  
> Use the bootcd [ToolManager.ps1](https://github.com/svtica/bootcd) to download tools automatically.

---

## Directory Structure

```
tools/
├── Antivirus/             # Portable antivirus scanners & removal tools
├── Archive/               # Compression, extraction & unpacking utilities
├── Bundles/               # Tool bundles and suites (NirLauncher, Sysinternals)
├── Databases/             # DB browsers and reference databases
├── Development/           # Editors, debuggers, build tools, runtimes
├── Disk_Imaging/          # Disk imaging, deployment, health monitoring
├── Email/                 # Email utilities
├── File_Management/       # File managers, search, disk analyzers
├── File_Recovery/         # Data recovery and partition tools
├── Media/                 # Audio, video, image, PDF processing
├── Network/               # Network monitoring, scanning, analysis
├── Remote_Access/         # SSH, VNC, remote desktop clients
├── Security/              # Forensics, PE analysis, hex editors, malware removal
├── System_Utilities/      # NirSoft, Sysinternals, system management tools
└── Web_Browsers/          # Portable browsers and browser analysis tools
```

---

## Categories

### Antivirus
Portable antivirus scanners and AV removal tools.

**Tools include:** AdwCleaner, Emsisoft Emergency Kit.

---

### Archive
Compression and archive utilities.

**Tools include:** arc, arj, lzop, kgb2, pea, zpaq, UHARC, unar, AnyBurn, innounp, lessmsi, upx, quickbms, UniExtract2 and backends (VIS3Ext, STIX_D, E_WISE_W, WUN, and others).

---

### Bundles
Pre-packaged tool suites covering multiple categories.

**Tools include:** NirLauncher (200+ NirSoft utilities), Sysinternals Suite.

---

### Databases
Local database browsers and offline reference data.

**Tools include:** SQLite Browser, sqlite3 CLI, jq, IEEE OUI database, MITRE CVE database.

---

### Development
Text editors, debuggers, build tools, and developer utilities.

**Tools include:** PSPad, Sublime Text, vbsedit, NSIS, WinMerge, MSI tools, Java runtime executables, Notepad++, HxD Hex Editor, OllyDbg, BusyBox for Windows, Android Platform Tools (ADB/Fastboot), LibreOffice Portable, VSCode Portable.

---

### Disk_Imaging
Disk imaging, deployment tools, and storage diagnostics.

**Tools include:** OSFMount, HDSentinel suite, Windows ADK installers, MDT, CrystalDiskInfo, CrystalDiskMark, TreeSizeFree.

---

### Email
Email client utilities and management tools.

**Tools include:** NK2Edit (Outlook autocomplete editor).

---

### File_Management
File managers, search tools, and disk space analyzers.

**Tools include:** Everything, 7-Zip, WizTree, SpaceSniffer, Unlocker.

---

### File_Recovery
Data recovery and partition repair tools.

**Tools include:** TestDisk, PhotoRec, Recuva, DMDE.

---

### Media
Audio, video, image, and document processing tools.

**Tools include:** FFmpeg suite, IrfanView, ShareX, AtomicParsley, SoundVolumeView, yt-dlp, GCFScape, pdftotext, VLC, GIMP, Audacity, SumatraPDF.

---

### Network
Network monitoring, scanning, and diagnostic tools.

**Tools include:** Wireshark, Nmap, CurrPorts, DNS Query Sniffer, PsPing, WiFiChannelMonitor, WifiInfoView, Wake-on-LAN, AdvancedIPScanner, AngryIPScanner, NetworkTrafficView, Curl, MailSend, TCPView.

---

### Remote_Access
Remote desktop and SSH clients.

**Tools include:** PuTTY, AnyDesk, RustDesk, MobaXterm, WinSCP, TSLogoff.

---

### Security
Security analysis, forensics, password recovery, and malware removal tools.

**Tools include:** Detect-It-Easy (die/diec/diel), PEiD, ExeinfoPE, PEStudio, x32dbg/x64dbg, Frhed, HxD, TrID, YARA, HashCat, OpenSSL, Ophcrack, DBAN, KeePass Portable, IISCrypto, ExifTool, McAfee/Trend Micro/Avira removal tools, PowerShell PKI module, Self-Signed Certificate Generator, SubBrute, ATF-Cleaner, RannohDecryptor.

---

### System_Utilities
System management, monitoring, and administration tools.

**Tools include:**
- **NirSoft collection** (50+ utilities): BlueScreenView, DriverView, USBDeview, RegScanner, TaskSchedulerView, ShadowCopyView, Volumouse, WinPrefetchView, NirCmd, and many more
- **Sysinternals PsTools**: PsExec, PsGetsid, PsInfo, PsKill, PsList, PsLoggedon, PsLoglist, PsPasswd, PsSuspend (32/64-bit)
- **Boot/USB tools**: Rufus, Ventoy, YUMI, Universal-USB-Installer, XBoot
- **Hardware info**: CPU-Z, GPU-Z, HWiNFO64, Speccy, MemTest86, CrystalDiskInfo, CrystalDiskMark
- **System repair**: CCleaner, BleachBit, TweakingWindowsRepair, RevoUninstaller, NetFxRepairTool, ADKSetup
- **Registry**: RegShot, RegScanner, AccessEnum, LockoutStatus, EventCombMT
- **Process tools**: ProcessExplorer, ProcessMonitor, Autoruns, BlueScreenView
- **Other**: Everything, ProduKey, NtfsPermissionsReporter, OSCDIMG, PALWizard, ShellExView, StartupRun

---

### Web_Browsers
Portable browsers and browser analysis tools.

**Tools include:** Firefox Portable, BrowserAddonsView, BrowserDownloadsView, BrowsingHistoryView, MozillaHistoryView, MzCV, dejsonlz4, jsonlz4.

---

## Tool Metadata

Each tool subdirectory may contain a `tool-info.json` with the following structure:

```json
{
  "Name": "ToolName",
  "Category": "Category",
  "Description": "Short description",
  "Version": "x.y.z",
  "License": "MIT",
  "CommercialUse": true,
  "Official": true,
  "Url": "https://official-source.example.com",
  "Note": "Optional notes about usage or restrictions"
}
```

---

## Usage

### Download tools via ToolManager

```powershell
# From the bootcd repo root:
.\ToolManager.ps1 -Update
```

### Browse the tool catalog

```powershell
# Interactive GUI browser (reads tools.json live):
.\ToolBrowser.ps1

# Generate a self-contained HTML catalog:
.\Generate-Catalog.ps1 -OpenAfter
```

### Launcher shortcuts

```powershell
.\Launcher.ps1 -Action browser   # Open Tool Browser GUI
.\Launcher.ps1 -Action catalog   # Generate HTML catalog
```

---

## Future: Python Tools

Python-based tools are not yet supported by `ToolManager.ps1` but are planned. Once Python/pip support is added, the following tools will be included:

| Tool | Description | Source |
|------|-------------|--------|
| **msticpy** | Microsoft Threat Intelligence — IOC lookups, threat hunting, log analysis | [GitHub](https://github.com/microsoft/msticpy) / [PyPI](https://pypi.org/project/msticpy/) |
| **Volatility3** | Memory forensics framework | [GitHub](https://github.com/volatilityfoundation/volatility3) |
| **Impacket** | Network protocols & AD security tools | [GitHub](https://github.com/fortra/impacket) |

See `TODO.md` in the [bootcd repo](https://github.com/svtica/bootcd) for implementation details.

---

## Contributing

1. Fork the repository
2. Add your tool to the appropriate category folder
3. Create a `tool-info.json` in the tool's subdirectory
4. Update `config/tools.json` in the [bootcd repo](https://github.com/svtica/bootcd)
5. Submit a pull request

Please ensure tools are:
- Portable (no system-wide installation required)
- Clearly licensed (include license type in `tool-info.json`)
- Appropriately categorized

---

## Related

- [svtica/bootcd](https://github.com/svtica/bootcd) — Boot CD customization suite (ToolManager, ISO builder, launcher)
- [Hiren's BootCD](https://www.hirensbootcd.org/) — Inspiration for this collection

---

## License

See [LICENSE](./LICENSE) for repository structure and scripts.  
Individual tools retain their own licenses — refer to each tool's `tool-info.json` or official documentation.
