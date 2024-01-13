#=============================================================================
# Caution!
# This is for lazy users such as me, who creates scripts to do their 
# tedious stuff. Use at your own risk. If you modify unrelated lines 
# or do some custom stuff, you might cause problems.
#
# For more information:
# Discussions: https://github.com/excalith/excalith-start-page/discussions/61
# Sources: https://github.com/excalith/excalith-start-page/tree/main/tools
#=============================================================================

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