# 1. Node.js 10 logger

Getting started for a Bunyan logger using Node.js 10, latest ES syntax but no BabelJS.

<!-- TOC -->

- [1. Node.js 10 logger](#1-nodejs-10-logger)
    - [1.1. Target](#11-target)
    - [1.2. Usage](#12-usage)
    - [1.3. Notes and beware](#13-notes-and-beware)

<!-- /TOC -->

## 1.1. Target

> Node.js 10.13.0

## 1.2. Usage

- `npm run start` to run the project in standalone
- `npm run docker:build && npm run docker:run` to run the project within a Node.js 10 Docker container

## 1.3. Notes and beware

- Node.js 10 is still in experimental about the "native" ES modules imports ([here](https://nodejs.org/api/esm.html))
- Files need to changed its extension from ̀`.js` to ̀`.mjs` ([here](https://stackoverflow.com/questions/50792976/node-unexpected-identifier))
- Global variables aren't supported while running in `--experimental-modules` (c.f. **__dirname**) - Fixed with [import-meta](https://github.com/tc39/proposal-import-meta)?
- To switch from your current Node.js version to the requisite one, look at [nvm](https://github.com/creationix/nvm)
