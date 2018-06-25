/**
 * Created by Johan on 2018/6/25.
 */

import http from 'http';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../conf/webpack.dev'

const compiler = webpack(webpackConfig);


const app = express();

app.use(webpackDevMiddleware(compiler,{
    noInfo: false,
    publicPath: webpackConfig.output.publicPath
}));

app.use('/', express.static('build'));

// app.use('/', (req, res)=>{
//
// })

const server = http.createServer(app);

server.listen(8020, ()=>{
    console.log('express start...')
})
