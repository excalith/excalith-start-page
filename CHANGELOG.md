
# Change Log
All upcoming and notable changes to this project will be documented in this file.

## Unreleased (Web Demo)

Thanks to [r/unixporn](https://www.reddit.com/r/unixporn/comments/124rsis/oc_supplementary_browser_start_page/) community, I had a lot of feedback and suggestions to improve the project. This resulted in heavy refactoring to be able to implement new features, so created some breaking changes. Before updating, please read the [breaking changes](#breaking-changes) section. 

I think this project has a solid base now, so I don't expect to make any breaking changes in the future.

### Added
- Bushido theme

### Improved
- Help command with better formatting
- Fetch now supports image URLs
- Fetch now supports reorderable and customizable items
- Sections now support column size
- Section items now support text alignment

### Breaking Changes
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
Sections had a nice refactor to allow more customization features requested from the community. 
- You can align each section to the left, center or right.
- You can set the column size of each row.
- Now it centers sections if less then column size.

In order to update your configuration, encapsulate your sections in `list` array.

Sample Configuration:

```js
sections: {
   settings: {
      columns: 3
   },
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
 
## Previous Versions

Please refer to [releases](https://github.com/excalith/excalith-start-page/releases) page for previous versions.