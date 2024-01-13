# Example usage:
# 
# Set your directory to the root of your mounted dir
#
# If you want to download the default assets (icon and wallpaper) set -assets to true
#
# If you want to download themes, set -themes followed by theme names. For example:
# -themes bushido,catppuccin-mocha,onedark
#
# https://raw.githubusercontent.com/excalith/excalith-start-page/main/tools/download_assets.ps1
# Invoke-Expression "$((Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/excalith/excalith-start-page/main/tools/download_assets.ps1').Content) -assets `"true`" -themes bushido,catppuccin-mocha,onedark"
# Invoke-Expression "$((Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/excalith/excalith-start-page/asset-download-ps/tools/download_assets.ps1').Content) -assets `"true`" -themes bushido,catppuccin-mocha,onedark"
#Invoke-Expression "$((Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/excalith/excalith-start-page/asset-download-ps/tools/download_assets.ps1').Content) -assets `"true`" -themes bushido,samurai"

#=========================================
# Variables
#=========================================
param (
    [Parameter(Mandatory = $false)]
    [string[]]$themes,

    [Parameter(Mandatory = $false)]
    [string]$assets
)

$base_url = "https://raw.githubusercontent.com/excalith/excalith-start-page/main/data/"
$downloadAssets = $false

#=========================================
# Download function
#=========================================
function download {
    param (
        [string]$url,
        [string]$target,
        [string]$description
    )

    try {
        Invoke-WebRequest -Uri $url -OutFile $target
        Write-Host "[SUCCESS] Downloaded $description"
    }
    catch {
        Write-Host "[ERROR] Failed to download $description"
    }
}

#=========================================
# Main function
#=========================================
function main {
    # Set assets variable
    if ($assets -eq "true") {
        $downloadAssets = $true
    }
    elseif ($assets -eq "false") {
        $downloadAssets = $false
    }
    else {
        Write-Host "Invalid value for -assets: $assets. Expected true or false."
        return
    }

    # Check if we have themes to download
    if ($themes.Count -gt 0) {
        Write-Host "Downloading $($themes.Count) themes"

        # Create themes directory if not exists
        if (!(Test-Path -Path "themes")) {
            New-Item -ItemType Directory -Force -Path "themes" > $null
        }

        # Download each theme
        foreach ($theme in $themes) {
            download -url "${base_url}/themes/${theme}.json" -target "themes/${theme}.json" -description "${theme} theme"
        }
    }

    Write-Host ""

    # Check if we need to download default assets
    if ($downloadAssets) {
        Write-Host "Downloading default assets"

        # Create assets directory if not exists
        if (!(Test-Path -Path "assets")) {
            New-Item -ItemType Directory -Force -Path "assets" > $null
        }

        # Download default assets
        download -url "${base_url}/assets/default-icon.svg" -target "assets/default-icon.svg" -description "default icon"
        download -url "${base_url}/assets/default-wallpaper.svg" -target "assets/default-wallpaper.svg" -description "default wallpaper"
    }
}

main -assets $assets -themes $themes