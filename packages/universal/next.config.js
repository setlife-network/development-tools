const path = require('path')

module.exports = {
    distDir: '../build',
    webpack: (config, { dev }) => {
        if (dev) {
            config.devtool = 'cheap-module-eval-source-map'
        }

        config.resolve = {
            extensions: ['.js', '.graphql', '.css'],
            alias: {
                components: path.resolve(__dirname, 'src', 'components'),
                reducers: path.resolve(__dirname, 'src', 'reducers'),
                scripts: path.resolve(__dirname, 'src', 'scripts'),
                static: path.resolve(__dirname, 'src', 'static'),
                styles: path.resolve(__dirname, 'src', 'styles'),
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
}