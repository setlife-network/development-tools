const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const paths = require('./paths')

const nodeEnv = process.env.NODE_ENV
const isProduction = nodeEnv !== 'development'

const plugins = isProduction ? [

] : [
    new webpack.HotModuleReplacementPlugin() 
]

module.exports = {
    target: 'node',
    context: paths.appRoot,
    mode: isProduction ? 'production' : 'development',
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
            api: paths.api,
            components: paths.appComponents,
            styles: paths.appStyles,
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
    plugins,
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