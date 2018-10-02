const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const common = require('./webpack.common.server')
const paths = require('./paths')

const { NODE_ENV = 'development' } = process.env

const development = merge(common, {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin() 
    ]
})

const production = merge(common, {
    mode: 'production'
})

if (NODE_ENV === 'development') {
    module.exports = development
} else {
    module.exports = production
}