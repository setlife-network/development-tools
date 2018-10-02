const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const common = require('./webpack.common.client')
const paths = require('./paths')

const { NODE_ENV = 'development' } = process.env

const development = merge(common, {
    mode: 'development',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            paths.appIndex
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    // webpack-dev-server config
    devServer: {
        // where to look for static files when building
        contentBase: paths.appAssets,
        // bundled files will be available in browser under this path
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        inline: true,
        open: true
    },
    output: {
        pathinfo: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
})

const production = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        app: paths.appIndex
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        // remove console logs
                        drop_console: true
                    },
                    output: {
                        // remove comments
                        comments: false
                    }
                }
            })
        ],
        // extract css to single file
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            // runs less/css files through less-loader & post-css loader first
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            // path: paths.config,
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new CompressionPlugin({
            test: /\.(js|css|html)$/,
            deleteOriginalAssets: false
        })
    ]
})

if (NODE_ENV === 'development') {
    module.exports = development
} else {
    module.exports = production
}