const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    resolve: {
        extensions: ['.js']
    }
}