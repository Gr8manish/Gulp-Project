var gulp = require('gulp')
var uglify = require('gulp-uglify')

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