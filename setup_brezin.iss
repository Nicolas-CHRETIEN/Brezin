; ==========================================
; Installeur officiel - Jeu du Brézin
; ==========================================

[Setup]
AppId={{7B7D9F0D-5C8A-4C4F-9C3E-5E1C3B8E1A42}

AppName=Jeu du Brézin
AppVersion=1.0.0
AppPublisher=Nicolas CHRETIEN
AppPublisherURL=https://github.com/Nicolas-CHRETIEN/appBrezin

DefaultDirName={pf}\Jeu du Brézin
DefaultGroupName=Jeu du Brézin

OutputDir=.\dist_installer
OutputBaseFilename=Setup_JeuDuBrezin

Compression=lzma
SolidCompression=yes
DisableDirPage=no
DisableProgramGroupPage=no

;SetupIconFile=.\Brezin.ico

[Languages]
Name: "french"; MessagesFile: "compiler:Languages\French.isl"

[Tasks]
; Case à cocher pendant l’installation pour créer le raccourci bureau
Name: "desktopicon"; Description: "Créer une icône sur le &bureau"; GroupDescription: "Icônes supplémentaires :"; Flags: unchecked

[Files]
; EXE principal (PyInstaller)
Source: "dist\JeuDuBrezin.exe"; DestDir: "{app}"; Flags: ignoreversion

; Icône du jeu (pour les raccourcis)
Source: "Brezin.ico"; DestDir: "{app}"; Flags: ignoreversion

; ⚠️ On NE livre PAS brezin_scores.xlsx :
; il sera créé automatiquement par l’exécutable s'il n'existe pas encore, mis a jour dans le cas ou le fichier existe.

[Icons]
; Menu Démarrer
Name: "{group}\Jeu du Brézin"; \
  Filename: "{app}\JeuDuBrezin.exe"; \
  IconFilename: "{app}\Brezin.ico"; IconIndex: 0

; Bureau
Name: "{commondesktop}\Jeu du Brézin"; \
  Filename: "{app}\JeuDuBrezin.exe"; \
  Tasks: desktopicon; \
  IconFilename: "{app}\Brezin.ico"; IconIndex: 0

[Run]
; Proposer de lancer le jeu à la fin de l’installation
Filename: "{app}\JeuDuBrezin.exe"; Description: "Lancer le Jeu du Brézin"; Flags: nowait postinstall skipifsilent
