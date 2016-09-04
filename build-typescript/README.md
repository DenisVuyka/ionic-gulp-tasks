# Build TypeScript Task

Gulp task for Ionic projects to compile TypeScript code.

## Installing

`npm install @denysvuika/ionic-gulp-build-typescript --save-dev`

## API

### buildTypeScript([options])

Returns a [stream](http://nodejs.org/api/stream.html) of [Vinyl files](https://github.com/wearefractal/vinyl-fs)
that can be [piped](http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options).

#### Available options:

- **dest** (String) Output path for the HTML files. Default: `'www/build/app'`.
- **config** (String) TypeScript configuration file. Default: `tsconfig.json`.

The task automatically emits declaration (.d.ts) and source map (.js.map) files.

## Example

```js
const buildTypeScript = require('@denysvuika/ionic-gulp-build-typescript');

// use defaults

gulp.task('build-ts', buildTypeScript);

// or customize

gulp.task('build-ts', () => {
  return buildTypeScript({
    src: 'www/build/app',
    config: 'tsconfig.json'
  });
});
```
