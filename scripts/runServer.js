const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../config/webpack.config.server')

const compiler = webpack(config, (err, stats) => {
    if (err) {
        console.error(err.stack || err)
        if (err.details) {
            console.error(err.details)
        }
        return
    }

    const info = stats.toJson()

    if (stats.hasErrors()) {
        console.error(info.errors)
    }

    if (stats.hasWarnings()) {
        console.warn(info.warnings)
    }
})

const options = {
    stats: {
        colors: true
    },
    before(app) {
        app.use((req, res, next) => {
            console.log('Using middleware for ' + req.url)
        })
    }
}

const server = new WebpackDevServer(compiler, options)

server.listen(3000, '0.0.0.0', () => {
    console.log('Starting server on http://localhost:3000')
})