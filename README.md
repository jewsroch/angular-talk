# AngularTalk

This is a small demo app for a talk given at the Santa Cruz JavaScript meetup in January 2016.
The slides for the talk can be found [here](https://slides.com/chadjewsbury/angular-2/).


The demo was meant to showcase the overall structure of an Angular 2 application: NgModules, Components, Services, etc.
It was not meant to be a fully functioning application, so don't expect it to actually do much. :)


The demo uses the Instagram api to grab all the recent images from an authenticated user.
To set the app up, you'll need an Instagram oauth token. Edit the `proxy.config.example.json` file to include your token, then rename the file `proxy.config.json`.
The application uses this file to proxy the api requests to the instagram API and avoid cross-domain request errors.

Other than that set up and running `npm install`, you should be able to follow the instructions below to get up and running.

## CLI Readme -------------------------------------
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
