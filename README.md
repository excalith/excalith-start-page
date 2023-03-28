<div align="center">
	<h1 align="center">Excalith Start Page</h1>
	<img src=".github/startpage.gif" />

This is an interactive start page for browsers, inspired from my terminal setup.

[![Vercel Status](https://therealsujitk-vercel-badge.vercel.app/?app=excalith-start-page)](https://excalith-start-page.vercel.app)
[![GitHub Version (latest semver)](https://img.shields.io/github/v/tag/excalith/excalith-start-page?sort=semver&label=github)](https://github.com/excalith/excalith-start-page)
[![Docker Version (latest semver)](https://img.shields.io/docker/v/excalith/start-page?sort=semver&label=docker)](https://hub.docker.com/r/excalith/start-page)

</div>

## Demo

### Online

You can check the working version from [here](https://excalith-start-page.vercel.app)

### Docker

**From Docker Registry**

```bash
docker pull excalith/start-page:latest
```

**From GitHub Registry**

```bash
docker pull ghcr.io/excalith/excalith-start-page:latest
```

**Start Container**

```bash
# You can change the port mapping of 8080 into something you want
docker run --name start-page --restart=always -p 8080:3000 -d excalith/start-page
```

### Local

Clone this repo and run `yarn dev` command to host it locally on your machine

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

## Customization

There are multiple ways of customizing the start page to making it yours!

Please refer to [wiki page](https://github.com/excalith/excalith-start-page/wiki) for more information.

## How To Contribute

Please feel free to contribute any way you can. Just keep in mind that you should pay attention to [contributing guideline](.github/CONTRIBUTING.md) before contributing.

## License

The code is available under the [MIT license](LICENSE).
