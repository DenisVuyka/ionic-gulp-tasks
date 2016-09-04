const gulp = require('gulp');
const merge = require('merge2');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');

module.exports = (options) => {
  options.dest = options.dest || 'www/build/app';
  options.config = options.config || 'tsconfig.json';

  let tsProject = ts.createProject(options.config, { sortOutput: true });

  let tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));

  return merge([
    tsResult.dts
      .pipe(gulp.dest(options.dest)),

    tsResult.js
      // .pipe(concat('app.bundle.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(options.dest))
  ]);
};
