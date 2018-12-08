import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import gzip from 'rollup-plugin-gzip'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'

import fs from 'fs'
import nodeEval from 'node-eval'

function getModuleExports(moduleId) {
    const id = require.resolve(moduleId)
    const moduleOut = nodeEval(fs.readFileSync(id).toString(), id)
    let result = []
    const excludeExports = /^(default|__)/
    if (moduleOut && typeof moduleOut === 'object') {
        result = Object.keys(moduleOut)
            .filter(name => !excludeExports.test(name))
    }

    return result
}

function getNamedExports(moduleIds) {
    const result = {}
    moduleIds.forEach( id => {
        result[`node_modules/${id}`] = getModuleExports(id)
    })
    console.log(result)
    return result
}

const globals = {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
    'prop-types': 'PropTypes'
}

export default {
    input: 'src/index.js',
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es' },
    ],
    // don't bundle these modules
    external: [
        'react',
        'react-dom',
        'styled-components',
        'prop-types'
    ],
    plugins: [
        peerDepsExternal(),
        // locate & include node modules not listed in externals
        resolve(),
        // convert commonJS modules to es modules
        commonjs({
            include: /node_modules/,
            // namedExports: globals
            namedExports: getNamedExports([
                'react-transition-group',
                'react-dom'
            ])
        }),
        // transpile src code
        babel({
            exclude: /node_modules/,
        }),
        uglify({
            output: {
                comments: false
            }
        }),
        gzip()
    ]
}