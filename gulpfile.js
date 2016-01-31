///////////////////////////////////////////////////////////
// File: Gulpfile
///////////////////////////////////////////////////////////
//


///////////////////////////////////////////////////////////
// Lib
//
var
  gulp         = require('gulp'),
  gutil        = require('gulp-util'),
  connect      = require('gulp-connect'),
  include      = require('gulp-include'),
  sass         = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer');


///////////////////////////////////////////////////////////
// Config
//
var
  config = {
    dir: {
      styles:  'assets/_styles/',
      scripts: 'assets/_scripts/',
      css:     'assets/css/',
      js:      'assets/js/'
    },

    autoprefixer: {
      browsers: ['last 2 versions'],
      cascade:  false
    },

    server: {
      port: 8081
    }
  };


///////////////////////////////////////////////////////////
// Tasks
//
gulp.task('server', function() {
  connect.server({
    port: config.server.port,
    root: './'
  });
});

gulp.task('styles', function() {
  return sass(config.dir.styles + '*.scss')
    .on('error', gutil.log)
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.dir.css))
});

gulp.task('scripts', function() {
  return gulp.src(config.dir.scripts + '*.js')
    .pipe(include())
    .on('error', gutil.log)
    .pipe(gulp.dest(config.dir.js));
});

gulp.task('watch', function() {
  gulp.watch(config.dir.styles + '/**/*', ['styles']);
  gulp.watch(config.dir.scripts + '/**/*', ['scripts']);
});


///////////////////////////////////////////////////////////
// CLI tools
//
gulp.task('pipeline', ['styles', 'scripts'], function() {
  gulp.start('watch');
});

gulp.task('pipeline-serve', ['server'], function() {
  gulp.start('pipeline');
});
