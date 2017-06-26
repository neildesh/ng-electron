# NgElectron

An Electron + Angular 4 starter project. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Development

First download and extract the package. At the root folder do the following:
```sh
$ npm install
```
Develop as you normally would with [Angular CLI](https://cli.angular.io).

## Production Build (Mac distribution)
An electron distribution package can be created once development is complete.
```sh
$ npm run electron
```
- It will start the electron application.
- This will also create the bzip2 archive of the entire app including electron and store it in `electron/build/app-mac.tar.bzip2`. The bzip2 file is all that is needed to distribute.
- Electron can be configured by modifying the files in `electron/src/`. See [Electron](https://electron.atom.io) for more details.

## Production Execution (Mac)
```sh
$ tar -xf app-mac.tar.bz2
$ cd app
$ ./app
```
