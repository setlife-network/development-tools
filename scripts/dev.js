const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
// const run = require('parallel-webpack').run

const clientConfig = require('../config/webpack.config.client')
const serverConfig = require('../config/webpack.config.server')

// TODO build backend & frontend and watch for changes
const compiler = webpack(clientConfig)



// TODO use compiled backend for development mode