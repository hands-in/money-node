<p align="center">
  <a href="https://github.com/hands-in/library-template-typescript/actions/workflows/build.yml">
    <img src="https://github.com/hands-in/library-template-typescript/actions/workflows/build.yml/badge.svg" alt="Build status">
  </a>
  <a href="https://hands-in.github.io/library-template-typescript/coverage/">
    <object data="https://hands-in.github.io/library-template-typescript/coverage/badges.svg" type="image/png">
      <img src="https://img.shields.io/badge/Coverage_report-lightgrey" alt="coverage">
    </object>
  </a>
   <a href="https://hands-in.github.io/library-template-typescript/docs/">
     <img src="https://img.shields.io/badge/-Documentation-green" alt="Documentation">
   </a>
   <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/:license-mit-blue.svg" alt="MIT license">
  </a>
</p>
This is a template repository for creating TypeScript libraries.

## Features
* [Typescript](https://www.typescriptlang.org/) support
* [Jest](https://jestjs.io/) setup
* Lint using [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/) integration
* Docs generation using [typedoc](https://typedoc.org/) with deployment to GitHub Pages
* Automated releases using [semantic-release](https://github.com/semantic-release/semantic-release)
* Conventional commits with commit lint using git hooks

## Quick start
1. Clone this repository, remove `.git` folder and call `git init` / Use `Use this template` GitHub button
2. Setup project specific fields in package.json
3. Setup `package.name` and `package.description` and other build properties in `package.json`
4. If your project emits `.d.ts` typings, set the correct path in `package.json` for `test:dts` command or remove it 
5. Use `src/main` folder to organize your code and put tests (`*.test.ts`) in the `src/test` folder
6. If you want an isolated run you can use Docker
7. Push your repo and check that GitHub actions work
8. Add badges!

## Best practice

### Tests

For unit tests, we use jest, because of the good infrastructure, flexible instruments for mocks and big community.

### Documentation

For API reference we use `typedoc` package and publish documentation in GitHub Pages.

### Publish to npm

Publishing to NPM is automated thanks to [semantic-release](https://github.com/semantic-release/semantic-release).
On every push to `main` branch, it will analyze commits and release new versions accordingly to changes.

To set it up, in the `package.json`:

1. Set the `name: @handsin/package-name`, remember to follow the Hands In package naming convention
2. Set `private: false`, this will make the package publicly available.
3. 🚀 Start making commits!

