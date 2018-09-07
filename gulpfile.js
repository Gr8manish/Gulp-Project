var gulp = require('gulp')
var uglify = require('gulp-uglify')

// File Paths
var SCRIPTS_PATH = 'public/scripts/**/*.js'

// Styles
gulp.task('styles', function(){
    console.log('Starting styles tasks');
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

