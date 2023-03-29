<div align="center">
	<h1 align="center">Excalith Start Page</h1>
	<img src=".github/startpage.gif" />

This is an interactive start page for browsers, inspired from my terminal setup.

[![Vercel Status](https://therealsujitk-vercel-badge.vercel.app/?app=excalith-start-page)](https://excalith-start-page.vercel.app)
[![Web Version (latest semver)](https://img.shields.io/github/package-json/v/excalith/excalith-start-page?label=web)](https://github.com/excalith/excalith-start-page)
[![GHCR Version (latest semver)](https://img.shields.io/github/v/tag/excalith/excalith-start-page?sort=semver&label=ghcr)](https://github.com/excalith/excalith-start-page)
[![Docker Version (latest semver)](https://img.shields.io/docker/v/excalith/start-page?sort=semver&label=docker)](https://hub.docker.com/r/excalith/start-page)

</div>

## Demo

You can check the working version from [here](https://excalith-start-page.vercel.app)

> **Warning**: This is a demo version of the start page. It is not recommended to use this version for your daily browsing. Please refer to [wiki page](https://github.com/excalith/excalith-start-page/wiki/Getting-Started) for more information.


## Features

- Quickly filter links by typing in the prompt. Hitting <kbd>Enter</kbd> will open all filtered links at once
- If nothing filtered, the text in prompt will use the default search engine for searching your input
- Launch websites directly from the prompt. Just type the URL (ie. `github.com`)
- Search websites with custom commands. For example, type `s some weird bug` to search StackOverflow for `some weird bug`
- Built-in configuration editor to easily edit and save your configuration
- Multiple theme support (check all [available themes](./public/themes/))

### Built-In Commands

- Show usage with `help` command (shows basic usage and your configured search shortcuts)
- Show info with `fetch` command (time, date, system and browser data)
- Update your configuration with `config` command
  - `config import <url>` - Import configuration from a URL to your local storage
  - `config theme` - Lists all [available themes](./public/themes/)
  - `config theme <theme-name>` - Switches between themes and sets your local configuration
  - `config edit` - Edit local configuration within editor
  - `config reset` - Reset your configuration to default

### Key Bindings

- Clear the prompt quickly with <kbd>CTRL</kbd> + <kbd>C</kbd>
- Close window with <kbd>ESC</kbd>


## Using

There are multiple ways of using this app. Here is a quick preview of them. For more information please refer to [getting started](https://github.com/excalith/excalith-start-page/wiki/Getting-Started) page
### Docker

Docker is the most convenient way to host the start page. You can either use the image from Docker Hub or Github Registry.

<details>
<summary>Using Docker Registry</summary>
<br>

Pull the latest image
```bash
docker pull excalith/start-page:latest
```

Run the image (change the port mapping of 8080 into something you want)
```bash
docker run --name start-page --restart=always -p 8080:3000 -d excalith/start-page
```
</details>

<details>
<summary>Using Github Registry</summary>
<br>

Pull the latest image
```bash
docker pull ghcr.io/excalith/excalith-start-page:latest
```

Run the image (change the port mapping of 8080 into something you want)
```bash
docker run --name start-page --restart=always -p 8080:3000 -d ghcr.io/excalith/excalith-start-page
```
</details>

### Clone

You can clone this repository and host it on your own server.

1. Clone this repository
2. Run `yarn dev` command to test it
3. Modify the `startpage.config.js` to your liking
4. Host somewhere (Vercel, Netlify, etc.) or run locally

### Remote Config Import

If you prefer to use the online version, I would recommend you to use the remote configuration import feature. This feature allows you to import your configuration from a URL. This way, you will always have a backup file of your configuration. Please refer to [getting started](https://github.com/excalith/excalith-start-page/wiki/Getting-Started) page for more information.

## Customization

There are multiple ways of customizing the start page to making it yours! Please refer to [configuration](https://github.com/excalith/excalith-start-page/wiki/Configuration) and [themes](https://github.com/excalith/excalith-start-page/wiki/Themes) pages for more information.

## How To Contribute

Please feel free to contribute any way you can. Just keep in mind that you should pay attention to [contributing guideline](.github/CONTRIBUTING.md) before contributing.

## License

The code is available under the [MIT license](LICENSE).
