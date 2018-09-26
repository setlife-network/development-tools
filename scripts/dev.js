const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const clientConfig = require('../config/webpack.config.client')
const serverConfig = require('../config/webpack.config.server')
const argv = require('minimist')(process.argv.slice(2))
const createVariants = require('parallel-webpack').createVariants

const variants = {
    target: ['client', 'server'],
    production: [true, false]
}

function createConfig(options) {
    let plugins = []
}