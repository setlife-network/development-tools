var path = require('path')
var fs = require('fs')

// /setlife-react-node-boilerplate
const projectDirectory = fs.realpathSync(process.cwd())

const resolve = relativePath => path.resolve(projectDirectory, relativePath)

module.exports = {
    appAssets: resolve('assets'),
    appBuild: resolve('build'),
    appComponents: resolve('src/components'),
    appHtml: resolve('src/index.html'),
    appIndex: resolve('src/index.js'),
    appModules: resolve('node_modules'),
    appSrc: resolve('src'),
    appStyles: resolve('src/styles')
}