if (!process.env.NODE_ENV === 'production') {
    require('dotenv').config()
}

require('@babel/register')({
    presets: [
        [
            "@babel/preset-env", {
                targets: {
                    node: 'current'
                }
            }
        ]
    ]
})
require('./server.js')