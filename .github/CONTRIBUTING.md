# Contributing To Excalith Start Page

:octocat: Thanks for taking the time to contribute!

The following is a set of guidelines for contributing to this repository.

- [Contributing To Excalith Start Page](#contributing-to-excalith-start-page)
  - [Code of Conduct](#code-of-conduct)
  - [Issues and Requests](#issues-and-requests)
    - [Reporting Bugs](#reporting-bugs)
    - [Feature Requests](#feature-requests)
  - [Contributing To Source Code](#contributing-to-source-code)
    - [New Themes](#new-themes)
    - [New Features / Enhancements](#new-features--enhancements)
    - [Commit and PR Guidelines](#commit-and-pr-guidelines)
      - [Commit Messages](#commit-messages)
      - [Pull Requests](#pull-requests)

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Issues and Requests

### Reporting Bugs

Before creating bug reports, please perform a [cursory search on issues](https://github.com/excalith/excalith-start-page/issues) to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one. When you are creating a bug report, please include as many details as possible. Fill out the required template, the information it asks for will help maintainers resolve it faster.

To report a new issue, please follow these steps:

- **Use a clear and descriptive title** for the issue to identify the problem after the prefix (ie. `[BUG] Page Freezes Upon Returning`)
- Use the **bug report template** and **fill out** the required fields.
- **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started the app, e.g. which command exactly you used in the terminal. When listing steps, **don't just say what you did, but explain how you did it**.
- Explain the **expected behaviour**
- Provide your **OS** and **Browser** information.
- Add any **additional Context** about the problem here such as console logs and screenshots. If you do not know how to get the console logs, please check your browser's documentation on how to get the console logs. If you cannot find the console logs, please mention that in the issue so that maintainers can help you get the logs.

> [!NOTE]
> If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

### Feature Requests
All feature requests must be discussed in [discussions](https://github.com/excalith/excalith-start-page/discussions/categories/ideas) first before being converted to an issue. Before suggesting an enhancement or feature request, please perform a [cursory search on discussions](https://github.com/excalith/excalith-start-page/discussions/categories/ideas) to see if the suggestion has already been submitted.

- **User a clear descriptive title** for the suggestion
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why
- Provide any **additional context** for the enhancement or feature request if possible

If maintainers approve your suggestion, the discussion will be converted to an issue and will be added to the backlog as an `enhancement`.

## Contributing To Source Code

In order to contribute to the source of the project

1. Fork the repository and create a new branch for your feature or enhancement `kebab-case` for the branch name.
   - For new theme, please use the `theme-theme-name` as the branch name.
   - For features or enhancements, please use the `feat-feat-name` as the branch name.
   - For fixes, please use the `fix-issue-name` as the branch name.
2. Use [commit messages](#commit-messages) guideline for your commits.
3. Send a pull request to the `main` branch using the [pull request](#pull-requests) guideline.

> [!IMPORTANT]
> Please **do not** change design into a complicated and / or overwhelming experience. It should launch fast, be easy to use and not distract from the functionality.

### New Themes

I really appreciate contributions in the form of new themes to the project. If you'd like to add a new theme, please follow these steps:

1. Have a look at [Themes](https://github.com/excalith/excalith-start-page/wiki/Themes#theme-scheme) wiki page for the scheme you should use.
2. Head to `data/themes` folder
3. Create `themename-variant.json` file using lowercase (variant should have hypens before ie. `catppuccin-latte`)
4. Fill the theme structure with your own colors
5. Test in on local server using `yarn dev` command
   1. Use `set theme` command to see your theme on the list
   2. Use `set theme <theme-name>` to see your theme in action
6. Send a PR!

> [!IMPORTANT]
> Since themes are stored in the local storage while running as a web app, you should run the `set theme <theme-name>` command to see your changes.

### New Features / Enhancements

Any new features or enhancements should be [discussed in discussions first](https://github.com/excalith/excalith-start-page/discussions/categories/ideas).

1. Create a new idea and describe the feature or enhancement you'd like to work on.
2. Wait for the idea to be approved by a maintainer.
3. If the idea is approved, the discussion will be converted to an issue and will be added to the backlog as an `enhancement`.
4. Fork the repository and create a new branch for your feature or enhancement.
5. Use [commit messages](#commit-messages) guideline for your commits.
6. Send a pull request to the `main` branch using the [pull request](#pull-requests) guideline.

### Commit and PR Guidelines

#### Commit Messages

When writing commit messages, please follow these guidelines:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
  
#### Pull Requests

While creating a Pull Request, please use the provided pull request tempalte and keep the following guidelines in mind:

- **Do not** include issue numbers in the PR title if any
- **Use** issue numbers within the PR body
- **If applicable**, include screenshots or animated GIFs to showcase new features
