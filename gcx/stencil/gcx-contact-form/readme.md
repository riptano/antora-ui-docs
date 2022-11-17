# GCX-CONTACT-FORM component

This project contains the Web Components `feedback-form` and `feedback-start` which are integrated into [antora-ui-dcos](https://github.com/riptano/antora-ui-docs).

# Stencil Component Starter

This is a starter project for building a standalone Web Component using Stencil.

Stencil is also great for building entire apps. For that, use the [stencil-app-starter](https://github.com/ionic-team/stencil-app-starter) instead.

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Prerequisites

Stencil requires a recent LTS version of NodeJS and npm. Make sure you've installed and/or updated Node before continuing.

git
First, make sure you have git installed.

```
$ git --version
```

Node.js
Next, make sure that you have Node.js installed (which also provides npm).

```
$ node --version
```

> **_NOTE:_** that you will need to use npm 6 or higher.

## Clone and Initialize the Web Component Project

Clone the bitbucket.org/edwini/gcx-contact-form project using git:

```
$ git clone git@bitbucket.org:edwini/gcx-contact-form.git &&
cd "`basename $_`"
```

The example above clones this repository and then switches to the project folder on your filesystem. Stay in this project folder when executing all subsequent commands.

Use npm to install the project’s dependencies inside the project. In your terminal, execute the following command:

```
$ npm install
```

This command installs the dependencies listed in package.json into the node_modules/ folder inside the project. This folder does not get included in the UI bundle and should not be committed to the source control repository.

## Preview the Web Component

After cloning the repository and switched to the project directory run:

```bash
npm start
```

To build the component for production, run:

```bash
npm run build
```

After build the component you will find the output into the folter `www/build` you can copy and paste this whole content into the folter `antora-ui-docs/src/js/vendor/gcx-contact-form`.

However you should edit the `stencil.config.ts` and provide the `buildDir` available for the output, this is how it looks like:

```
{
      type: "www",
      empty: true,
      buildDir:"/Users/user/documents/antora-ui-docs/src/js/vendor/gcx-contact-form",
      serviceWorker: null, // disable service workers
    },
```

> **_NOTE:_** before building the component you will need to remove the `vendor` folder.

### Integrating Material UI

`npm i material-components-web`
`npm install @material/button`
`npm install @material/textfield`

- add this to the `stenci.config.ts`

```
export const config: Config = {
  plugins:[
    sass({
      includePaths:[
        "./node_modules"
      ]
    })
  ],
  ...
  };
```

<!-- Auto Generated Below -->

_Built with [StencilJS](https://stenciljs.com/)_
