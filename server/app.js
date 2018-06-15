
import express from 'express';
import http from 'http';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../webpack.config'

const compiler = webpack(webpackConfig);

const app = express();

app.use(webpackDevMiddleware(compiler,{
    noInfo: false,
    publicPath: webpackConfig.output.publicPath
}))

app.use('/', express.static('build'));


const server = http.createServer(app);

server.listen(8020, function(){
    console.log('ss')
})

