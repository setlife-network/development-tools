import express from 'express'
import next from 'next'
import { ApolloServer } from 'apollo-server-express'

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

// Graphql server setup
import { importSchema } from 'graphql-import'
import resolvers from './api/resolvers'
const typeDefs = importSchema('./api/schema.graphql')

app.prepare().then(() => {
    const server = express()
    const apolloServer = new ApolloServer({ typeDefs, resolvers })
    apolloServer.applyMiddleware({ app: server })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})