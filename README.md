# Custom Page seed Project

## About

This project is designed to help developers start a new implementation of custom page for Bonita BPM.
It contains an empty Custom Page source and test code structure based on AngularJS, build scripts to run unit tests and end to end tests with Jasmine and Protractor, along with a lightweight application server to run the page, and a script to build a deployable Custom Page zip file for the Bonita PortaL

The deployable zip format follows the following structure:
```sh
.
├── index.[html | groovy]
├── page.properties //contains name, display name & description of the page 
└── resources/ //contains all needed resources
``` 

## Requirements

The following software/libraries must be installed 
- [node.js + npm](http://nodejs.org/ 'Download and install node.js') 
- bower: `npm i -g bower`
- gulp: `npm i -g gulp`
- karma: `npm i -g karma`

> To install node.js with npm on GNU/Linux: [How to install node.js on GNU/Linux](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager).
  
## Development

Before starting development, install dependencies in your project with:

```sh 
$ npm install
```
To run the development server launch:
```shell
$ npm run dev
```
This automatically starts the Jasmine tests, which run in background with up to date source code.

All JavaScript files that you create must be referenced in index.html.
> All the files will be automatically concatenated and minified. Same goes for the css files.

The custom page metadata is located in the file ``src/page.properties``.

### Build

To generate a deployable Bonita BPM Portal custom page zip file, launch:

```shell
$ npm run build
```

## All available project commands

- ``npm run dev`` creates a local server with livereload and opens your default browser.
- ``npm run build`` creates a target folder with production ready js / css files and a custom page zip file in the __target__ dir.
- ``npm run e2e`` launches the e2e test suite 
- ``npm test`` launches the unit test suite


### Deploying the page on the portal

1. Login in Bonita BPM Portal as an administrator
2. In the Configuration menu, open the Custom Pages section
3. Add the generated custom page
4. The page can be either displayed in the portal by adding it to the menu of a custom profile, or be displayed in an Application

For more information on Bonita BPM check [the documentation](http://documentation.bonitasoft.com/).
