#!/bin/bash

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
base_url="https://raw.githubusercontent.com/excalith/excalith-start-page/main/data/"
themes=()
downloadAssets=false

#=========================================
# Parse args and set variables
#=========================================
while (( "$#" )); do
  case "$1" in
    --themes)
      shift
      while (( "$#" )); do
        case "$1" in
          --*) break ;;
          *) themes+=("$1"); shift ;;
        esac
      done
      ;;
    --assets)
      shift
      if [ "$1" = "true" ]; then
        downloadAssets=true
      elif [ "$1" = "false" ]; then
        downloadAssets=false
      else
        echo "Invalid value for --assets: $1. Expected 'true' or 'false'."
        exit 1
      fi
      shift
      ;;
    *) 
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done


#=========================================
# Check if curl or wget exists
#=========================================
downloader="na"
if command -v curl &>/dev/null; then
    downloader="curl -L"
elif command -v wget &>/dev/null; then
    downloader="wget -O"
fi

#=========================================
# Download function
#=========================================
download() {
    url=$1
    target=$2
    description=$3

    if [ "$downloader" = "curl -L" ]; then
        http_status=$(curl -s -o /dev/null -w "%{http_code}" -L "$url")
        if [ "$http_status" -eq 200 ]; then
            curl -s -L "$url" -o "$target" && echo "[SUCCESS] Downloaded $description"
        else
            echo "[ERROR] Failed to download $description"
        fi
    elif [ "$downloader" = "wget -O" ]; then
        http_status=$(wget -q --server-response -O /dev/null "$url" 2>&1 | awk '/^  HTTP/{print $2}')
        if [ "$http_status" -eq 200 ]; then
            wget -q -O "$target" "$url" && echo "[SUCCESS] Downloaded $description"
        else
            echo "[ERROR] Failed to download $description"
        fi
    fi
}

#=========================================
# Main function
#=========================================
main() {
    # Return if no downloader available
    if [ "$downloader" = "na" ]; then
        echo "Warning: No downloader (curl or wget) available"
        return
    fi

    # Check if we have themes to download
    if [ ${#themes[@]} -gt 0 ]; then
        echo "Downloading ${#themes[@]} themes"

        # Create themes directory if not exists
        mkdir -p themes

        # Download each theme
        for theme in "${themes[@]}"; do
            download "${base_url}/themes/${theme}.json" "themes/${theme}.json" "${theme} theme"
        done
    fi

    echo ""

    # Check if we need to download default assets
    if [ "$downloadAssets" = true ]; then
        echo "Downloading defeault assets"

        # Create assets directory if not exists
        mkdir -p assets

        # Download default assets
        download "${base_url}/assets/default-icon.svg" "assets/default-icon.svg" "default icon"
        download "${base_url}/assets/default-wallpaper.svg" "assets/default-wallpaper.svg" "default wallpaper"
    fi
}

main
