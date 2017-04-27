{
  "compileOnSave": false,

  "files": [
    "src/main.ts",
    "src/app/app.module.ts",
    "src/app/components/app.component.ts"
  ],
  "compilerOptions": {
    "target": "es5",
    "module": "es2015",
    "moduleResolution": "node",
    "sourceMap": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": [ "es2015", "dom" ],
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true
  },
  "angularCompilerOptions": {
    "genDir": "aot",
    "skipMetadataEmit": true
  }
}
