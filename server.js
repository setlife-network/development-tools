import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

// React
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

// Redux
import { Provider as ReduxProvider } from 'react-redux'
import createStore from './src/store'

// TODO fix 'styles' not showing up
// Components
import App from './src/components/App'
import Html from './src/Html'

const app = express()

const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? process.env.PORT : 3000

// app.use(express.static(__dirname + '/public'))
// app.use(express.static('public'))

// Graphql server setup
import resolvers from './api/resolvers'
import typeDefs from './api/schema.graphql'

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

app.listen({ port }, () => {
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
})

// TODO Fix universal rendering
// app.get('/*', (req, res, next) => {
//     const context = {}
//     const store = createStore()
//     const reduxState = store.getState()

//     // Prevent HTML response for API calls
//     if (req.path.indexOf('/api/' !== -1)) {
//         return next()
//     }

//     const jsx = (
//         <Html reduxState={reduxState}>
//             <ReduxProvider store={store}>
//                 <StaticRouter context={context} location={req.url}>
//                     <App />
//                 </StaticRouter>
//             </ReduxProvider>
//         </Html>
//     )
//     const reactDom = renderToString(jsx)

//     res.writeHead(200, { 'Content-Type': 'text/html'})
//     res.end(reactDom)
// })

// app.get('*.js', (req, res, next) => {
//     req.url = `${req.url}.gz`
//     res.set('Content-Encoding', 'gzip')
//     next()
// })

// app.listen(port, () => {
//     console.log(`Setlife React Universal: Server running on port ${port}`)
// })