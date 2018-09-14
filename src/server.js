import express from 'express'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

// redux
import { Provider as ReduxProvider } from 'react-redux'
import createStore from './store'

import App from './components/App'
import Html from './Html'

const app = express()

var isProduction = process.env.NODE_ENV === 'production'
var port = isProduction ? process.env.PORT : 3000

// app.use(express.static(__dirname + '/public'))
app.use(express.static('public'))

app.get('/*', (req, res, next) => {
    const context = {}
    const store = createStore()
    const reduxState = store.getState()

    // Prevent HTML response for API calls
    if (req.path.indexOf('/api/' !== -1)) {
        return next()
    }

    const jsx = (
        <Html reduxState={reduxState}>
            <ReduxProvider store={store}>
                <StaticRouter context={context} location={req.url}>
                    <App />
                </StaticRouter>
            </ReduxProvider>
        </Html>
    )
    const reactDom = renderToString(jsx)

    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.end(reactDom)
})

app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`
    res.set('Content-Encoding', 'gzip')
    next()
})

app.listen(port, () => {
    console.log(`Setlife React Universal: Server running on port ${port}`)
})