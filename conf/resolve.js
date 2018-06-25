/**
 * Created by Johan on 2018/6/25.
 */
const path = require('path')

module.exports = {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
        services: path.resolve(__dirname, '../src/services'),
        components: path.resolve(__dirname, '../src/components')
    }
}