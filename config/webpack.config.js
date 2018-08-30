var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var paths = require('./paths')

module.exports = {
    mode: 'development',
    // context: paths.appSrc,
    entry: [
        require.resolve('./polyfills'),
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        paths.appIndex
    ],
    // exclude dependencies from output bundles
    // externals: {
    //     react: 'React'
    // },
    devtool: 'cheap-module-eval-source-map',
    // webpack dev server config
    devServer: {
        // contentBase: [paths.appAssets, paths.appSrc],
        contentBase: paths.appAssets,
        // bundled files will be available in browser under this path
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        inline: true,
        // open: true
    },
    // done
    output: {
        filename: 'main.js',
        // where app is built to
        path: paths.appBuild,
        pathinfo: true,
        // where app is served from
        publicPath: '/',
    },
    // done
    resolve: {
        extensions: ['.jsx', '.js', '.less'],
        // commonly imported directories ie. import Row from 'styles'
        alias: {
            styles: paths.appStyles,
            components: paths.appComponents
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.appHtml,
            inject: 'body'
        }),
        new CopyWebpackPlugin([
            'assets'
        ]),
        new webpack.HotModuleReplacementPlugin()
        // new webpack.ProvidePlugin({
        //     Promise: 'exports?global.Promise!es6-promise',
        //     fetch: 'exports?self.fetch!whatwg-fetch'
        // })
    ],
    // done
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: paths.appSrc,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                include: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    node: {
        fs: 'empty'
    }
}
