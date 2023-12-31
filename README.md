# Vite, Tauri, React & Redux Template

![Screenshot of app](image.png)

This repository contains a preconfigured Tauri app featuring:

- Interoperable app menu that works in-browser and with native system menus
- Custom window controls on Windows (enable or disable in settings)
- Redux store sample setup with [redux-persist](https://github.com/rt2zz/redux-persist) for saving state
- React Router setup to manage navigation across the app
- Configuration for [i18next](https://github.com/i18next/i18next) to make localisation easy
- Basic ESLint, Prettier and Stylelint config
- Unit testing setup with Vitest
- Custom theme system

## Usage

To install dependencies run `yarn` or `yarn install`

Commands:

- `yarn tauri dev` to run the Tauri app in debug mode
- `yarn tauri build` to build and package the app into an executable
- `yarn dev` to run the web app only
- `yarn test` to run tests

## Recommended IDE Setup

Configuration files for debugging with [VS Code](https://code.visualstudio.com/) are included. The following extensions are also recommended:

- [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
- [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb)
