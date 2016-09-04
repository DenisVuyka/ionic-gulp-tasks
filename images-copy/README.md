# Images Copy Task
Copy image resources to build directory.

## Installing

`npm install @denysvuika/ionic-gulp-images-copy --save-dev`

## API

### copyImages([options])

Returns a [stream](http://nodejs.org/api/stream.html) of [Vinyl files](https://github.com/wearefractal/vinyl-fs)
that can be [piped](http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options).

#### Available options:

- **src** (String|Array) Glob or array of globs ([What's a glob?](https://github.com/isaacs/node-glob#glob-primer)) matching HTML source files. Default: `'app/assets/images/**/*'`.
- **dest** (String) Output path for the HTML files. Default: `'www/build/images'`.
- **base** (String) Base path. Default: `'app/assets/images'`

## Example

```js
const copyImages = require('@denysvuika/ionic-gulp-images-copy');

// use defaults

gulp.task('images', copyImages);

// or customize

gulp.task('images', () => {
  return copyImages({
    src: 'app/assets/images/**/*',
    dest: 'www/build/images',
    base: 'app/assets/images'
  });
});
```
