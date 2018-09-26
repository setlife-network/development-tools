const withCSS = require('@zeit/next-css')
const path = require('path')

module.exports = withCSS({
    distDir: 'public',
    // publicRuntimeConfig: {
    //     staticFolder: '/assets'
    // },
    webpack: (config, { dev, isServer, defaultLoaders }) => {
        // TODO customized webpack config)
        config.resolve = {
            extensions: ['.js', '.graphql', '.css'],
            alias: {
                styles: path.resolve(__dirname, 'styles'),
                components: path.resolve(__dirname, 'components'),
                assets: path.resolve(__dirname, 'assets'),
                reducers: path.resolve(__dirname, 'reducers'),
                scripts: path.resolve(__dirname, 'scripts')
            }
        }
        
        config.module.rules.push(
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            }
        )

        console.log(config)
        return config
    }
})