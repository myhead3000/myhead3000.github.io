var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var browserify   = require('gulp-browserify');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// Browserify JS files
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('./assets/js/app.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(gulp.dest('./assets/js/build'))
        .pipe(browserSync.stream());
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp
        .src('./assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'scripts'], function() {

    browserSync.init({
        server: "./"
        //proxy: "yourlocal.dev
    });
 
    gulp.watch("assets/scss/**/*.scss", ['sass']);
    gulp.watch("assets/js/*.js", ['scripts']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);