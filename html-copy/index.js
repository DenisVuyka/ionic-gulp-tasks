module.exports = function(options) {
  options.src = options.src || 'app/**/*.html';
  options.dest = options.dest || 'www/build';
  options.base = options.base || '.';

  return gulp.src(options.src, { base: options.base })
    .pipe(gulp.dest(options.dest));
}
