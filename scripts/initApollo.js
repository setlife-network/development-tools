import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import fetch from 'isomorphic-fetch'

let apolloClient = null

// polyfill fetch on the server
if (!process.browser) {
    global.fetch = fetch
}

const API_ROOT = 'https://w5xlvm3vzz.lp.gql.zone/graphql'

function create(initialState) {
    return new ApolloClient({
        connectToDevTools: process.browser,
        ssrMode: !process.browser,
        link: ApolloLink.from([
            onError(({ graphQLErrors, networkError }) => {
                if (graphQLErrors)
                    graphQLErrors.map(({ message, locations, path }) =>
                        console.log(
                            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                        )
                    )
                if (networkError) console.log(`[Network error]: ${networkError}`)
            }),
            new HttpLink({
                uri: API_ROOT,
                credentials: 'include'
            })
        ]),
        cache: new InMemoryCache().restore(initialState || {})
    })
}

export default function initApollo(initialState) {
    // create new client for every server side request so data isn't shared between connections
    if (!process.browser) {
        return create(initialState)
    }

    // reuse client on client side
    if (!apolloClient) {
        apolloClient = create(initialState)
    }

    return apolloClient
}