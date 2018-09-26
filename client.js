import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

// global stylesheets
import 'assets/css/normalize.css'
import 'assets/css/fonts.css'

// Main App component
import App from 'components/App'

// Redux setup
import configureStore from './store'
const store = configureStore()

// Apollo setup
import { ApolloProvider } from 'react-apollo'
import client from './apollo/apolloClient'

const appRoot = document.getElementById('app')
const isProduction = process.env.NODE_ENV === 'production'

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
    // React SSR
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