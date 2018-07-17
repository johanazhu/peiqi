/**
 * Created by Johan on 2018/6/25.
 */

import http from 'http';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import path from 'path';
import webpackConfig from '../conf/webpack.dev'
//    webpack编译好的文件
const compiler = webpack(webpackConfig);


const app = express();

app.use(webpackDevMiddleware(compiler,{
    noInfo: false,
    publicPath: webpackConfig.output.publicPath,
    stats: {
        color: true,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false,
        modules: false,
        children: false,
        version: false,
        cached: false,
        cachedAssets: false,
        reasons: false,
        source: false,
        errorDetails: false
    }
}));



app.use('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (error, result)=> {
        if(error) {
            next(error)
        }else {
            res.set('content-type', 'text-html');
            res.send(result);
            res.end();
        }
    })
})

const server = http.createServer(app);

server.listen(8020, ()=>{
    console.log('express start...')
})
