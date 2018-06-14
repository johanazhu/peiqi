
// const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'app.js'
    },
    watch: true
}