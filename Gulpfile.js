var gulp = require('gulp'),
    sass  = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', function() {
  livereload.listen();
  gulp.src('./dist/*.html').pipe(watch('./dist/*.html')).pipe(livereload({ auto: false }));
  gulp.watch('./scss/*.scss', ['sass']).on('change', livereload.changed);
});