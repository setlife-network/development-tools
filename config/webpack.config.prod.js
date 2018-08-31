var merge = require('webpack-merge')
var common = require('./webpack.common')
var paths = require('./paths')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        app: paths.appIndex
    },
})