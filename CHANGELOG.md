
# Change Log
All upcoming and notable changes to this project will be documented in this file.

## Unreleased (Web Demo)

### Added
- Fetch now supports image URLs and reordable items fetch items.

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
 
## Previous Versions

Please refer to [releases](https://github.com/excalith/excalith-start-page/releases) page for previous versions.