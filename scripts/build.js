const webpack = require('webpack')
const rimraf = require('rimraf')

const clientConfig = require('../config/webpack.config.prod')
const serverConfig = require('../config/webpack.config.server')

const argv = require('minimist')(process.argv.slice(2))

if (argv.client) {
    rimraf('public', err => {
        if (err) throw err

        const compiler = webpack(clientConfig)
        compiler.run((err, stats) => {
            if (err) throw err            
            console.log(stats.toString({
                chunks: false,
                colors: true 
            }))
        })
    })
} else if (argv.server) {
    rimraf('server', err => {
        if (err) throw err

        const compiler = webpack(serverConfig)
        compiler.run((err, stats) => {
            if (err) throw err            
            console.log(stats.toString({
                chunks: false,
                colors: true 
            }))
        })
    })
} else {
    console.error('Please specify either "--client" or "--server"')
}