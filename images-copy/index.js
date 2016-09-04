const gulp = require('gulp');

module.exports = (options) => {
  options.src = options.src || 'app/assets/images/**/*';
  options.dest = options.dest || 'www/build/images';
  options.base = options.base || 'app/assets/images';

  return gulp.src(options.src, { base: options.base })
    .pipe(gulp.dest(options.dest));
};
