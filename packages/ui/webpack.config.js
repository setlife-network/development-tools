const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
    mode: 'production',
    target: 'node',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.webpack.js'
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new CompressionPlugin({
            test: /\.js$/,
            deleteOriginalAssets: false
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true
                    }   
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    externals: [
        nodeExternals({
            modulesDir: path.resolve(__dirname, '../../node_modules')
        })
    ]
}