import path from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import gzip from 'rollup-plugin-gzip'

export default {
    input: 'src/index.js',
    output: {
        file: 'build/index.js',
        format: 'cjs',
        name: '@setlife/ui',
        named: true
    },
    external: [
        'react',
        'react-dom',
        'styled-components'
    ],
    plugins: [
        // 4.37 kb
        babel(),
        resolve({
            // browser: true,
            // main: true,
            customResolveOptions: {
                moduleDirectory: path.resolve(__dirname, '../../node_modules/**')
            }
        }),

        // 15.81 kb
        // babel({
        //     exclude: path.resolve(__dirname, '../../node_modules/**')
        // }),
        // resolve(),

        // 4.27 kb
        // babel({
        //     exclude: path.resolve(__dirname, '../../node_modules/**')
        // }),
        // resolve({
        //     customResolveOptions: {
        //         moduleDirectory: path.resolve(__dirname, '../../node_modules/**')
        //     }
        // }),
        
        commonjs({
            include: path.resolve(__dirname, '../../node_modules/**'),
            // namedExports: {
            //     'src/index.js': [
            //         'Box',
            //         'Button',
            //         'Card',
            //         'Flex',
            //         'Image',
            //         'Input',
            //         'Text',
            //         'Modal',
            //         'Text',
            //         'Toggle',
            //         'GlobalStyle',
            //         'media',
            //         'mixins',
            //         'theme',
            //         'ThemeProvider'
            //     ]
            // }
        }),
        uglify({
            output: {
                comments: false
            }
        }),
        gzip()
    ]
}