# Banner display
Write-Host "===================================" -ForegroundColor Cyan
Write-Host "       AquaDance Speed Mod        " -ForegroundColor Cyan 
Write-Host "===================================" -ForegroundColor Cyan
Write-Host ""

# Current directory display
$currentDir = Get-Location
Write-Host "Current working directory: $currentDir" -ForegroundColor Yellow
Write-Host ""

# Initial check
$gameExeFound = $false
$gameDir = $null

# First check current directory
if (Test-Path "Game.exe") {
    $gameExeFound = $true
    $gameDir = $currentDir
    Write-Host "Found Game.exe in current folder." -ForegroundColor Green
}

# If game directory not found
if (-not $gameExeFound) {
    Write-Host "ERROR: Game.exe not found." -ForegroundColor Red
    Write-Host "Please run this script in same directory with game exe." -ForegroundColor Red
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

# Change to game directory if found
if ($gameDir -ne $currentDir) {
    Set-Location -Path $gameDir
    Write-Host "Changed working directory to $gameDir." -ForegroundColor Yellow
}

# Check plugins folder
$pluginsDir = "js/plugins"
if (-not (Test-Path $pluginsDir)) {
    Write-Host "ERROR: js/plugins folder not found." -ForegroundColor Red
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

# Check plugins.js file
$pluginsJs = "js/plugins.js"
if (-not (Test-Path $pluginsJs)) {
    Write-Host "ERROR: js/plugins.js file not found." -ForegroundColor Red
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

try {
    # Download plugin
    $pluginUrl = "https://raw.githubusercontent.com/NewRPGProject/MZMV_Plugin/main/NRP_ChangeCharacterSpeed.js"
    $pluginPath = "$pluginsDir/NRP_ChangeCharacterSpeed.js"
    
    Write-Host "Downloading plugin script..." -ForegroundColor Yellow
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    Invoke-WebRequest -Uri $pluginUrl -OutFile $pluginPath
    
    if (Test-Path $pluginPath) {
        Write-Host "Plugin script successfully downloaded: $pluginPath" -ForegroundColor Green
    } else {
        throw "Failed to download plugin script"
    }
    
    # Download and replace plugins.js
    Write-Host "Downloading and replacing plugins.js..." -ForegroundColor Yellow
    $pluginsJsUrl = "https://raw.githubusercontent.com/chibibaku/AQD-speed-mod/refs/heads/main/plugins.js"
    
    # Backup original plugins.js
    $backupPath = "$pluginsJs.bak"
    if (Test-Path $backupPath) {
        Remove-Item $backupPath -Force
    }
    Copy-Item $pluginsJs $backupPath
    Write-Host "Original plugins.js backed up to: $backupPath" -ForegroundColor Green
    
    # Download new plugins.js
    Invoke-WebRequest -Uri $pluginsJsUrl -OutFile $pluginsJs
    
    if ((Test-Path $pluginsJs) -and (Get-Item $pluginsJs).Length -gt 0) {
        Write-Host "plugins.js successfully replaced" -ForegroundColor Green
    } else {
        # Restore from backup if download failed
        Copy-Item $backupPath $pluginsJs -Force
        throw "Failed to download plugins.js. Original file has been restored."
    }
    
    Write-Host ""
    Write-Host "Installation complete!" -ForegroundColor Green
    Write-Host "Character movement speed set to 8 with base speed rate at 400%." -ForegroundColor Green

} catch {
    Write-Host "Error occurred: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")