var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var paths = require('./paths')

module.exports = {
    // where webpack resolves files relative to
    context: paths.appRoot,
    entry: {
        polyfills: require.resolve('./polyfills')
    },
    output: {
        filename: '[name].bundle.js',
        // where app is built to
        path: paths.appBuild,
        // where app is served from
        publicPath: '/',
    },
    resolve: {
        extensions: ['.jsx', '.js', '.less'],
        // commonly imported directories ie. import Row from 'styles'
        alias: {
            styles: paths.appStyles,
            components: paths.appComponents,
            assets: paths.appAssets
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.appHtml,
            inject: 'body'
        }),
        new CopyWebpackPlugin([
            'assets'
        ])
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: paths.appSrc,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                    'url-loader'
                ]
            },
            {
                include: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}
