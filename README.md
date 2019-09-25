
# NodeJS TypeScript Redux starter project

## Overview
Demonstrates a basic project structure for a NodeJS application that uses TypeScript and Redux.

## Process followed to set thihs up
```
npm init
npm install --save-dev typescript tslint
npm install redux
npm install --save-dev @types/redux
npx tslint --init
```

Made some edits to package.json:
```
"main": "dist/index.js"
```
and
```
 "scripts": {
    "start": "tsc && node dist/index.js",
```

Created a `tsconfig.json` file:
```
{
    "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "target": "es6",
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "dist"
    },
    "lib": ["es2015"]
  }
  ```