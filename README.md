# Module Federation Logger Error Example

## Issue Description

This repository demonstrates a reproduction of the following error:

## NPM
index.cjs.js:102 Uncaught TypeError: isomorphicRslog.createLogger is not a function
    at createLogger (index.cjs.js:102:1)
    at ./node_modules/@module-federation/sdk/dist/index.cjs.js (index.cjs.js:116:1)
    at options.factory (react refresh:6:1)
    at __webpack_require__ (bootstrap:22:1)
    at fn (hot module replacement:61:1)
    at ./node_modules/@module-federation/runtime/dist/index.cjs.js (index.cjs.js:4:1)
    at options.factory (react refresh:6:1)
    at __webpack_require__ (bootstrap:22:1)
    at fn (hot module replacement:61:1)
    at ./node_modules/@module-federation/webpack-bundler-runtime/dist/index.cjs.js (index.cjs.js:3:1)

## PNPM 
index.cjs.js:102 Uncaught TypeError: isomorphicRslog.createLogger is not a function
    at createLogger (index.cjs.js:102:1)
    at ./node_modules/@module-federation/sdk/dist/index.cjs.js (index.cjs.js:116:1)
    at options.factory (react refresh:6:1)
    at __webpack_require__ (bootstrap:22:1)
    at fn (hot module replacement:61:1)
    at ./node_modules/@module-federation/runtime/dist/index.cjs.js (index.cjs.js:4:1)
    at options.factory (react refresh:6:1)
    at __webpack_require__ (bootstrap:22:1)
    at fn (hot module replacement:61:1)
    at ./node_modules/@module-federation/webpack-bundler-runtime/dist/index.cjs.js (index.cjs.js:3:1)


## Steps to Reproduce

1. Install dependencies with PNPM or NPM
2. Run the application
3. Error occurs during initialization of Module Federation SDK

## How to solve issue
1. Downgrade to "@module-federation/enhanced": "0.6.13",

## Environment
- Node.js version: 20.15.0
- Npm version: 10.7.0
- Pnpm version: 9.12.3