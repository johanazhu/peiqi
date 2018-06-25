
// const path = require('path');
// import entry from 'entry';

const htmlWebpackPlugin= require('html-webpack-plugin');



module.exports = {
    mode: 'development',
    entry: require('./entry'),
    output: {
        path: __dirname + '/build',
        filename: 'js/[name].[chunkhash:6].js',
        chunkFilename: 'js/[name].js',
        publicPath: '/'
    },
    resolve: require('./resolve'),
    devtool: 'source-map',
    plugins: [
        new htmlWebpackPlugin({
            title: 'peiqi',
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    }
}