# boilerplate-nextjs

Boilerplate for Next.js projects, made by [@skoshy](https://github.com/skoshy)

Features:

- Next.js with React
- TypeScript
- SASS support (both global styles and CSS modules)
- Gulp for task-running
- ESLint with typescript-eslint and various plugins and Prettier for code-styling
- Jest for testing
- Fully cross-platform between macOS/Linux/Windows

## Table of Contents

- [Building / Running](#build)
- [Stack / Packages / Tools](#stack)
- [Definitions](#definitions)

<a name="build"></a>

## Building / Running

Currently Node 12 is required.

- It's recommended to install/use [nvm](https://github.com/nvm-sh/nvm) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (Windows) to manage/switch your node versions.

```bash
# node 12+ is required, if you have nvm, simply run:
nvm install

# then, it's pretty simple
yarn
yarn dev
```

<a name="stack"></a>

## Stack

### Tools

- **`node >= 12`** - No real reason to use Node 12 as the minimum version, but it's currently LTS so why not
- **`nvm/nvm-windows`** - Useful for managing multiple node versions between projects
- **`yarn`** - I personally like yarn more than `npm`. Syntax is cleaner, installing is faster, overall is just pleasant.

### File structure

For SCSS files, you can use `*.module.scss` files for CSS modules, or `*.scss` for global stylesheets.

- **`.env.example`** - Example environment variable file, automatically gets used as default `.env`
- **`.npmrc`** - Ensure we use exact versions when adding things to `package.json`
- **`.nvmrc`** - Define the recommended node version
- **`package-lock.json`** - Broken JSON file. This is kept in the repo to force an error when using `npm`, so the developer knows to use `yarn` instead.

### Dependencies

- **`@next/mdx`/`@mdx-js/loader`** - Allows for using `.md` and `.mdx` pages
- **`@zeit/next-sass`** - Needed for SASS support with Next.js
- **`lodash`** - Helper functions for common JS problems
- **`next`** - Meta-framework
- **`node-sass`** - Needed for SASS support
- **`postinstall-postinstall`** - Runs `postinstall` scripts on script removal as well. See [`postinstall-postinstall`](https://www.npmjs.com/package/postinstall-postinstall) or [`patch-package`](https://www.npmjs.com/package/patch-package) for more info
- **`react`/`react-dom`** - ⚛️
- **`styled-components`** - robust CSS-in-JS solution
- **`utility-types`** - Has a lot of helper functions and utils for TypeScript

### Dev Dependencies

- **`@babel/register`** - For using Babel with Gulp
- **`@teamsupercell/typings-for-css-modules-loader`** - Automatically generates TS def files for `.scss/sass/css` files. This allows for type-safe importing of module CSS in components.
- **`@types/react`/`@types/node`** - Required by Next.js to be installed when using TypeScript
- **`env-cmd`** - Passes `.env` environment variables easily to scripts, cross-platform
- **`eslint`** - Linter
- **`gulp`** - Task runner, used to automate tasks on run/build
- **`npm-run`** - Run locally installed `npm` packages within scripts
- **`prettier`** - Make code look nice automatically
- **`shelljs`** - Cross-platform Unix commands that can be used in scripts
- **`typescript`** - Types are 👍

<a name="definitions"></a>

## Definitions

- `lib` vs `helpers`

  - `lib` refers to anything that isn't specifically tied to a project. Basically, the function/constant/whatever could be pulled out and made its own separate npm package if need be.
  - `helpers` refers to things that are specifically tied to the project in some way.
  - For example, if you have a `generateRandomHexColor` function, it's pretty generic and not tied specifically to the project, so it'd go in _lib_.

    If you have a `convertDateToApiFormat` function, it's tied to the project specifically, so it'd go in _helpers_.

  These same rules apply to `_lib_` and `_helpers_` components in the `components` folder.

  - `_lib_` - components that are very generic and aren't tied to functionality in the app itself
  - `_helpers_` - shared components throughout app only relevant in this project
  - `_pages_` - these are components specifically tied to a page / set of pages in the app
