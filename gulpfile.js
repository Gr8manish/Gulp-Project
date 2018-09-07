var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// File Paths
var DIST_PATH = 'public/dist/'
var SCRIPTS_PATH = 'public/scripts/**/*.js'
var CSS_PATH = 'public/css/**/*.css'


// Styles
gulp.task('styles', function(){
    console.log('Starting styles tasks');

    return gulp.src(['public/css/reset.css',CSS_PATH])
            .pipe(concat('styles.css'))
            .pipe(gulp.dest(DIST_PATH));
});

// Scripts
gulp.task('scripts', function(){
    console.log('Starting scripts Task');

    return gulp.src('public/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
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
    gulp.watch(SCRIPTS_PATH ,['scripts']);
});

