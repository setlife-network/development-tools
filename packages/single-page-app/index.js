#!/usr/bin/env node

const cp = require('child_process')

console.info('Setting up your React app...')

// Specify version so that changes to create-react-app
// do not break the interactive layer built later
cp.execSync(`npx create-react-app@3.0.0 .`)

console.info('Finished setting up your React app')

// 1. Create directores in /src: components, constants, pages, styles
// 2. Move files into respective directories
// console.log('Adding interactive layer...')

// const fs = require('fs')
// let files = fs.readdirSync('./src')
// console.log('files')
// console.log(files)
