# HTML Copy Task
Copy HTML sources to build directory.

## Installing

`npm install @denysvuika/ionic-gulp-html-copy --save-dev`

## API

### copyHTML([options])

Returns a [stream](http://nodejs.org/api/stream.html) of [Vinyl files](https://github.com/wearefractal/vinyl-fs)
that can be [piped](http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options).

#### Available options:

- **src** (String|Array) Glob or array of globs ([What's a glob?](https://github.com/isaacs/node-glob#glob-primer)) matching HTML source files. Default: `'app/**/*.html'`.
- **dest** (String) Output path for the HTML files. Default: `'www/build'`.
- **base** (String) Base path. Default: `.`

## Example

```js
const copyHTML = require('@denysvuika/ionic-gulp-html-copy');

// use defaults

gulp.task('html', copyHTML);

// or customize

gulp.task('html', () => {
  return copyHTML({
    src: 'app/**/*.html',
    dest: 'www/build',
    base: '.'
  });
});
```
