var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var traceur = require('gulp-traceur');
var clean = require('gulp-clean');
var rename = require("gulp-rename");
var order = require("gulp-order");
var concat = require("gulp-concat");
var insert = require("gulp-insert");
var runSequence = require('run-sequence');
var addsrc = require('gulp-add-src');

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
    root: 'build',
    livereload: true,
    fallback: './app/index.html',
    port: 8888
  });
});

gulp.task('reloadhtml', function () {
  gulp.src('./build/**/*.html').pipe(connect.reload());
});

gulp.task('reloadjs', function () {
  gulp.src('./build/js/**/*.js').pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/**/*.html'], ['buildhtml', 'reloadhtml']);
  gulp.watch(['./app/**/*.js'], ['buildjs', 'reloadjs']);
});

gulp.task('clean', function () {
    return gulp.src('./build', {read: false}).pipe(clean());
});

gulp.task('dependencies', function() {
    gulp.src( [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/ngAutocomplete/src/ngAutocomplete.js'
        ])
        .pipe(gulp.dest('./build/js'));
});


gulp.task('buildjs', function () {
    var runtimePath = traceur.RUNTIME_PATH;

    return gulp.src(['app/**/*.js'])
        .pipe(traceur({
            experimental: true,
            moduleName: true,
            // sourceMap: true,
            modules: 'register'
        }))
        .pipe(addsrc(runtimePath))
        .pipe(order([
            'traceur-runtime.js'
         ]))
        .pipe(concat('app.js'))
        .pipe(insert.append('System.get("js/app" + "");'))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('buildhtml', function(){
    gulp.src(['app/**/*.html'])
    .pipe(gulp.dest('./build'));
});

gulp.task('default',  function(callback) {
    runSequence('clean', ['dependencies', 'buildjs', 'buildhtml'], 'connect', 'watch',  callback);
});
