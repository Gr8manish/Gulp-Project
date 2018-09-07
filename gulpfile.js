var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

// File Paths
var DIST_PATH = 'public/dist/'
var SCRIPTS_PATH = 'public/scripts/**/*.js'
var CSS_PATH = 'public/css/**/*.css'


// Styles
gulp.task('styles', function(){
    console.log('Starting styles tasks');

    return gulp.src(['public/css/reset.css',CSS_PATH])
            .pipe(plumber(function(err){
                console.log('Styles Task Error');
                console.log(err);
                this.emit('end');
            }))
            .pipe(sourcemaps.init())
            .pipe(autoprefixer())
            .pipe(concat('styles.css'))
            .pipe(minifyCss())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(DIST_PATH))
            .pipe(livereload());
});

// Scripts
gulp.task('scripts', function(){
    console.log('Starting scripts Task');

    return gulp.src('public/scripts/*.js')
        .pipe(plumber(function(err){
            console.log('Styles Task Error');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/dist'))
        .pipe(livereload());
});

// Images
gulp.task('images', function(){
    console.log('Starting Images Task');
});

// Default
gulp.task('default', function(){
    console.log('Starting Default Task')
});

// Watch
gulp.task('watch', function(){
    console.log('Starting watch Task');
    require('./server.js');
    livereload.listen();
    gulp.watch(SCRIPTS_PATH ,['scripts']);
    gulp.watch(CSS_PATH, ['styles']);
});

