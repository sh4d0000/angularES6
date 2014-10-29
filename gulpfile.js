var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var traceur = require('gulp-traceur');
var clean = require('gulp-clean');
var rename = require("gulp-rename");


var traceurOptions = {
    //modules: "amd",
    //blockBinding: true,
//    sourceMap: true,
    types: true,
    typeAssertions: true,
    typeAssertionModule: "assert",
    annotations: true
  }

gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true, 
    port: 8888
  });
});

gulp.task('html', function () {
  gulp.src('./app/**/*.html').pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./app/**/*.js').pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/**/*.js'], ['js']);
  gulp.watch(['./app/**/*.es6'], ['build']);
});

// TRANSPILE ES6
gulp.task('build', ['clean'], function() {
  gulp.src( ['./app/**/*.es6'] )
      //.pipe(traceur( traceurOptions ))
      .pipe(rename({extname: ".js"}))
      .pipe(gulp.dest('./app/traceured'));
});

gulp.task('clean', function () {
    return gulp.src('./app/traceured', {read: false}).pipe(clean());
});

gulp.task('default', [ 'connect', 'watch']);
