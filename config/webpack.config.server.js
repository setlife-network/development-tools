const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const paths = require('./paths')

const nodeEnv = process.env.NODE_ENV
console.log(nodeEnv)
const isProduction = nodeEnv !== 'development'

// const entry = isProduction ? [
//     paths.serverEntry
// ] : [
//     paths.serverEntry
// ]

module.exports = {
    target: 'node',
    context: paths.appRoot,
    mode: isProduction ? 'production' : 'development',
    entry: [
        // '@babel/register',
        paths.serverEntry
    ],
    // devtool: false,
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
    plugins: [
        !isProduction && new webpack.HotModuleReplacementPlugin()
    ],
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