<div align="center">
	<h1 align="center">Excalith Start Page</h1>
	<img src=".github/startpage.gif" />

	This is an interactive start page for browsers, inspired from my own terminal setup.
</div>


## Demo

- You can check the working version from [here](https://excalith-start-page.vercel.app)
- Clone this repo and run `yarn dev` command to view on your machine

## Features

- Quickly filter links by typing in the prompt. Hitting `Enter` will open all filtered links at once
- If nothing filtered, the text in prompt will use the default search engine for searching your input
- Launch websites directly from the prompt. Just type the URL (ie. `github.com`)
- Search websites with custom commands. For example, type `s: some weird bug` to search StackOverflow for `some weird bug`
- Clear the prompt quickly with `CTRL + C`
- Show usage with `help` command
- Show info with `nfetch` command (wip)
- Changing colors, adding links and custom commands can be done through a single configuration file

## Customization

You can fork the repository and configure everything as you wish. Please refer to [wiki](https://github.com/excalith/excalith-start-page/wiki) page for more information.

## License

The code is available under the [MIT license](LICENSE).
