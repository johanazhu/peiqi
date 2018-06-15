
// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'js/app.js',
        publicPath: '/'
    },
    plugins: [
      new  HtmlWebpackPlugin({
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
                      loader: "babel-loader"
                  }
              ]
          }
      ]
    },
    devtool: 'source-map',
    watch: true
}