
# Change Log
All upcoming and notable changes to this project will be documented in this file.

> **Warning**
> Before updating, please be sure to check versions for possible **breaking changes**.

## Unreleased [![Demo Version (latest semver)](https://img.shields.io/github/package-json/v/excalith/excalith-start-page?label=preview)](https://github.com/excalith/excalith-start-page)

Thanks to [r/unixporn](https://www.reddit.com/r/unixporn/comments/124rsis/oc_supplementary_browser_start_page/) community, I had a lot of feedback and suggestions to improve the project. This resulted in heavy refactoring to be able to implement new features, so created some breaking changes. 

### Added
- Bushido theme
- Wallpaper support

### Improved
- Help command with better formatting
- Fetch now supports custom image URLs
- Fetch now supports reorderable and customizable display items
- Prepared Sections for future changes

### Breaking Changes
#### Wallpaper
Now we can add wallpapers to the start page. You might want to add wallpaper object to your configuration.

Sample Configuration:

```js
wallpaper: {
   url: "https://source.unsplash.com/1280x720/?neon-city",
   easing: "ease-in-out",
   fadeIn: true,
   blur: true
}
```

#### Fetch
Fetch data had a nice refactor to allow more customization features. You can now import images from URLs and reorder the data items.

- `fetch` now has image key to import an image from a URL.
- `fetch.data` array contains the items to be displayed.
  - You can reorder them by changing the order of the array.
  - You can remove the ones you don't want to display.
  - You can add new ones by adding new items to the array. For example, `Test Title: Test description` will display even without a variable
  - Use `seperator` to add a space between items
  - Use `colors` to display the colors of the theme

Valid Variables
| Variable         | Description                               |
| ---------------- | ----------------------------------------- |
| {time}           | Displays time                             |
| {date}           | Displays date                             |
| {osName}         | Displays OS name                          |
| {osVersion}      | Displays OS version (some OS have issues) |
| {browser}        | Displays browser name                     |
| {browserVersion} | Displays browser version                  |
| {engineName}     | Displays browser engine name              |
| {seperator}      | Adds a space between items                |
| {colors}         | Displays the colors of the theme          |


Default Configuration:

```js
fetch: {
  timeFormat: "HH:mm",
  dateFormat: "DD/MM/YYYY",
  titleColor: "yellow",
  image: "icon.svg",
  data: [
    "Time: {time}",
    "Date: {date}",
    "{seperator}",
    "OS: {osName} {osVersion}",
    "Browser: {browser} {browserVersion}",
    "Engine: {engineName}",
    "{seperator}",
    "{colors}"
  ]
}
```

#### Sections
Sections had a nice refactor to allow more customization features to be implemented later. 

In order to update your configuration, encapsulate your sections in `list` array.

Sample Configuration:

```js
sections: {
   list: [
      {
         title: "Dev",
         color: "green",
         align: "left",
         links: [
            {
               name: "GitHub",
               url: "https://github.com",
               icon: "mdi:github"
            }
         ]
      }
   ]
}
```

## Previous Versions [![Latest Release](https://img.shields.io/github/v/release/excalith/excalith-start-page)](https://github.com/excalith/excalith-start-page/releases)

Please refer to [releases](https://github.com/excalith/excalith-start-page/releases) page for previous release notes.