
# NodeJS TypeScript Redux starter project

## Overview
Demonstrates a basic project structure for a NodeJS application that uses TypeScript and Redux.

## Process followed to set this up
```
npm init
npm install --save-dev typescript tslint nodemon
npm install redux
npm install --save-dev @types/redux
npx tslint --init
```

Made some edits to package.json:
```
"main": "dist/app.js"
```
and
```
"scripts": {
    "start": "tsc && node dist/app.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon --watch src --ext ts --exec 'tsc && node dist/app.js'"
  },
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

  ### Still to do
  * Add unit testing