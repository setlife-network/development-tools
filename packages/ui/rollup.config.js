import path from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import gzip from 'rollup-plugin-gzip'

// const nodeModules = path.resolve(__dirname, '../../node_modules/**')
const nodeModules = 'node_modules/**'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    external: [
        'react',
        'react-dom',
        'prop-types',
        'styled-components'
    ],
    plugins: [
        // 4.37 kb -> 4.28kb
        // babel(),
        // resolve({
        //     customResolveOptions: {
        //         moduleDirectory: nodeModules
        //     }
        // }),
        // commonjs({
        //     include: nodeModules
        // }),

        // DOESNT WORK
        resolve(),
        commonjs(),
        babel({
            runtimeHelpers: true
        }),

        uglify({
            output: {
                comments: false
            }
        }),
        gzip()
    ]
}