/**
 * Created by Johan on 2018/6/25.
 */


const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

gulp.task('webpack', function(){
    return gulp.src('./src/js/app.js')
                .pipe(webpackStream(require('./webpack.config'), webpack))
                .pipe(gulp.dest('./build'))
})
