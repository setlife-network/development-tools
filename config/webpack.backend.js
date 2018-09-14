const nodeExternals = require('webpack-node-externals')
const paths = require('./paths')

module.exports = {
    target: 'node',
    entry: paths.serverEntry,
    output: {
        path: paths.server
    },
    externals: [nodeExternals()]
}