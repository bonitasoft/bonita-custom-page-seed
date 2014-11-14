Custom page Angular Seed 
========================

This project contains a seed project for building custom pages.
It deliver a zip with the following mandatory structure.
  ```index.[html | groovy]```
  ```page.properties``` - contains name, display name & description of the page 
  ```resources/``` - contains all needed resources

It also supply a development ready environment (with a local server and livereload).

To create a new custom page, just duplicate this folder and then run
```npm install```
  
# Available commands

- ``npm run dev`` will start a local server+livereload  and open your default browser.
- ``npm run build`` will create a target/dist folder with production ready js / css files. It also run generate a zip files containing your custom page. You can find it inside the __target__ dir.
- ``npm run e2e`` will launch e2e test suite 
- ``npm test`` will run the karam test suite

# Developement
```shell
npm run dev
```

The build tool used under the hood is [gulp](http://gulpjs.com) but as general rule, you shouldn't have to edit the ``gulpfile.js``.

You should reference in index.html for all newly js files. All the files will be automatically concatenated and minified. Same goes for the css files.

During the development, jasmine tests are also ran in background.

# Custom Page metadata

The custom page metadata are located in the file ``src/page.properties``.

# Build
```shell
npm run dist
```

# Test you custom page inside the portal

To test your custom page within the portal, you need to create a profile and associate it to you profile and also create a custom menu bar that reference you custom page.

### Create a profile

1. Got to Configuration > Profiles and then Add > create a profile (customPage)
2. then, add your user to this profile.

### Create a custom menu bar and link your custom page.

1. go configuration / Custom Pages
2. Click Add and select the generated zip files from target/your-custom-page-1.0.0.SNAPSHOT.zip);
3. Go to Configuration > Profile and select the profile to associat with the custom page and click More.
4. Create a new menu bar (Create Menu) and reference the custom page you work on.
5. Switch your profile from administrator to customPage
6. your custom  page live inside the portal \o/

