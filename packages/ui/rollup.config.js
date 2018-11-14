import path from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'src/index.js',
    output: {
        file: 'build/bundle.js',
        format: 'cjs'
    },
    external: [
        'react',
        'react-dom',
        'styled-components'
    ],
    plugins: [
        resolve({
            customResolveOptions: {
                moduleDirectory: path.resolve(__dirname, '../../node_modules/**')
            }
        }),
        babel(),
        commonjs(),
        uglify()
    ]
}