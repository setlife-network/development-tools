const withCSS = require('@zeit/next-css')
const path = require('path')

module.exports = withCSS({
    distDir: 'public',
    webpack: (config, { dev, isServer, defaultLoaders }) => {
        if (dev) {
            config.devtool = 'cheap-module-eval-source-map'
        }

        config.resolve = {
            extensions: ['.js', '.graphql', '.css'],
            alias: {
                assets: path.resolve(__dirname, 'assets'),
                components: path.resolve(__dirname, 'components'),
                reducers: path.resolve(__dirname, 'reducers'),
                scripts: path.resolve(__dirname, 'scripts'),
                styles: path.resolve(__dirname, 'styles'),
            }
        }
        
        config.module.rules.push(
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            }
        )
        
        return config
    }
})