# Splishy

## Building / running

```bash
# node 12+ is required, if you have nvm, simply run:
nvm install

yarn
yarn dev
#
```

## Stack

### File structure

- `.env.example` - Example environment variable file, automatically gets used as default `.env`
- `.npmrc` - Ensure we use exact versions when adding things to `package.json`
- `.nvmrc` - Define the recommended node version
- `package-lock.json` - Broken JSON file. This is kept in the repo to force an error when using `npm`, so the developer knows to use `yarn` instead.

### Dependencies

- `lodash` - Helper functions for common JS problems
- `next` - Meta-framework
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
