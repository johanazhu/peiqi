
// const path = require('path');

const htmlWebpackPlugin= require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'js/app.js'
    },
    watch: true,
    devtool: 'source-map',
    plugins: [
        new htmlWebpackPlugin({
            title: 'peiqi',
            filename: 'index.html',
            template: 'src/index.html'
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