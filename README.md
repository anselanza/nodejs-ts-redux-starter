npm init
npm install --save-dev typescript tslint
npm install redux
npm install --save-dev @types/redux
npx tslint --init

Make some edits to package.json:
```
"main": "dist/index.js"
```
and
```
 "scripts": {
    "start": "tsc && node dist/index.js",
```

Create a `tsconfig.json` file:
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