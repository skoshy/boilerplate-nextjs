# boilerplate-nextjs

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

<a name="build"></a>

## Building / Running

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

- `node >= 12` - No real reason to use Node 12 as the minimum version, but it's currently LTS so why not
- `yarn` - I personally like yarn more than `npm`. Syntax is cleaner, installing is faster, overall is just pleasant.

### File structure

For SCSS files, you can use `*.module.scss` files for CSS modules, or `*.scss` for global stylesheets.

- `.env.example` - Example environment variable file, automatically gets used as default `.env`
- `.npmrc` - Ensure we use exact versions when adding things to `package.json`
- `.nvmrc` - Define the recommended node version
- `package-lock.json` - Broken JSON file. This is kept in the repo to force an error when using `npm`, so the developer knows to use `yarn` instead.

### Dependencies

- `@zeit/next-sass` - Needed for SASS support with Next.js
- `lodash` - Helper functions for common JS problems
- `next` - Meta-framework
- `node-sass` - Needed for SASS support
- `react`/`react-dom` - ⚛️

### Dev Dependencies

- `@types/react`/`@types/node` - Required by Next.js to be installed when using TypeScript
- `@babel/register` - For using Babel with Gulp
- `env-cmd` - Passes `.env` environment variables easily to scripts, cross-platform
- `eslint` - Linter
- `gulp` - Task runner, used to automate tasks on run/build
- `npm-run` - Run locally installed `npm` packages within scripts
- `prettier` - Make code look nice automatically
- `shelljs` - Cross-platform Unix commands that can be used in scripts
- `typescript` - Types are 👍
