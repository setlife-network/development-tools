const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const paths = require('./paths')

module.exports = {
    target: 'node',
    context: paths.appRoot,
    entry: [
        '@babel/polyfill',
        paths.serverEntry
    ],
    output: {
        path: paths.server,
        filename: 'server.bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.graphql'],
        alias: {
            styles: paths.appStyles,
            components: paths.appComponents,
            assets: paths.appAssets,
            reducers: paths.appReducers,
            scripts: paths.appScripts
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: paths.api,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(graphql|gql)$/,
                include: paths.api,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            }
        ]
    },
    externals: [nodeExternals()],
    // don't replace node specific variable names
    node: {
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    }
}