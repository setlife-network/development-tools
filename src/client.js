import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

const isProduction = process.env.NODE_ENV === 'production'

// global stylesheets
import 'assets/css/normalize.less'
import 'assets/css/fonts.less'

// Main App component
import App from 'components/App'

// Redux setup
import configureStore from './store'
const store = configureStore()

// Apollo setup
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
const client = new ApolloClient({
    uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
})

const appRoot = document.getElementById('app')

// Hot reloading setup for development mode only
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <ApolloProvider client={client}>
                <ReduxProvider store={store}>
                    <Router>
                        <Route path='/' component={Component} />
                    </Router>
                </ReduxProvider>
            </ApolloProvider>
        </AppContainer>,
        appRoot
    )
}

if (isProduction) {
    // Redux SSR
    const store = createStore(window.REDUX_DATA)
    ReactDOM.hydrate(
        <ApolloProvider client={client}>
            <ReduxProvider store={store}>
                <Router>
                    <Route path='/' component={App} />
                </Router>
            </ReduxProvider>
        </ApolloProvider>,
        appRoot
    )
} else {
    render(App)
}

if (!isProduction && module.hot) {
    module.hot.accept('components/App', () => {
        const NextApp = require('components/App').default
        render(NextApp)
    })
}