# Asset Downloader For Docker Mounts

Those scripts aims to help you download and populate your mounted data folder with the default files. Those are **completely optional** and should only be needed for Docker **mounted volumes**.

> [!CAUTION]
> This is for lazy users such as me, who creates scripts to do their tedious stuff. Use at your own risk. If you modify unrelated lines or do some custom stuff, you might cause problems. I suggest you to read the [powershell source](https://github.com/excalith/excalith-start-page/blob/main/tools/download_assets.ps1) and [bash source](https://github.com/excalith/excalith-start-page/blob/main/tools/download_assets.sh) scripts beforehand.

## How to use:

### bash
1. Set your directory to the root of your mounted dir
2. If you want to download the default assets (icon and wallpaper) set `--assets` to `true`
3. If you want to download themes, set `--themes` followed by theme names. For example: `--themes bushido catppuccin-mocha onedark`
4. Depending on what your system already has, run one of the code below

**curl:**
```sh
bash <(curl -s https://raw.githubusercontent.com/excalith/excalith-start-page/main/tools/download_assets.sh) --assets true --themes bushido catppuccin-mocha onedark 
```

**wget:**
```sh
bash <(wget -qO- https://raw.githubusercontent.com/excalith/excalith-start-page/main/tools/download_assets.sh) --assets true --themes bushido catppuccin-mocha onedark
```

### powershell
1. Set your directory to the root of your mounted dir
2. If you want to change downloading default assets (icon and wallpaper) set `assets` to `$true` or `$false`
3. If you want to download themes, set `-themes` followed by theme names. For example: ` themes = "bushido", "catppuccin-mocha", "onedark"`
4. Run the following command on your powershell.

> [!TIP] 
> If you are getting errors regarding execution policies, either download the script and run locally or download required items manually.

```ps
# Modify the params as you wish
$params = @{
    # Set assets to false if you do not want to download the assets
    assets = $true

    # Add themes to the list if you want to download them
    themes = "bushido", "catppuccin-mocha", "onedark"
}

#================================
# Do not modify below this line
#================================

# Set script content
$scriptContent = (Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/excalith/excalith-start-page/main/tools/download_assets.ps1').Content

# Construct a custom script block to handle parameters
$scriptBlock = [scriptblock]::Create("$scriptContent")

# Invoke the modified script with your parameters
& $scriptBlock @params
```