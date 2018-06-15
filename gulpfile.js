
const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

gulp.task('webpack', function(){
    return gulp.src('src/js/app.js')
        .pipe(webpackStream(require('./webpack.config'),webpack))
        .pipe(gulp.dest('build/'))
})