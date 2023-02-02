<p align="center">
	<h1 align="center">Excalith Start Page</h1>
</p>

![An animated gif displaying functionality](.github/startpage.gif)

<p align="center">
	This is an interactive start page for browsers, inspired from my own terminal setup.
</p>

## Demo

- You can check the working version from [here](https://excalith-start-page.vercel.app)
- Clone this repo and run `yarn dev` command

## Features

You can;

- Click on the links directly to launch link (duh)
- Filter each entry by typing their names. Enter key launches all filtered links. For instance, `git` keyword will highlight both `github` and `gitlab`. Enter key will launch both links
- Launch an url directly from prompt by submitting an url like `github.com`
- Add your custom commands for quick-seraching. For instance, `s: some weird topic to search for` launches StackOverflow search with your query
- Add your own categories, assign colors and add links easily
- Fully customize the prompt line
- Add glow around the window with your choice of colors
- All public configurations are located in within [Start Page Config](src/startpage.config.js) file
- Use this on mobile devices as well

## How To Use

You can clone this repository and edit the [Start Page Config](src/startpage.config.js) file. I would suggest deploying it to a server to use it on all your devices.

## License

The code is available under the [MIT license](LICENSE).
