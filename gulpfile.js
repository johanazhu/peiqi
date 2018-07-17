/**
 * Created by Johan on 2018/6/25.
 */


const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');



gulp.task('build:clean', function(){
    return gulp.src('./build')
        .pipe(clean());
})

gulp.task('build:webpack', function(){
    return gulp.src('./src/js/app.js')
                .pipe(webpackStream(require('./conf/webpack.build'), webpack))
                .pipe(gulp.dest('./build'))
})

gulp.task('build', (done)=>{
    runSequence(
        ['build:clean'],
        ['build:webpack'],
        done
    )
})
