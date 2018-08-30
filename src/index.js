import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// import { Router, Route, browserHistory, hashHistory } from 'react-router'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
// import {
//     syncHistoryWithStore,
//     routerReducer,
//     routerMiddleware
// } from 'react-router-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import App from 'components/App'

import reducers from './reducers'
// import routes from './routes'

// Stylesheets
// import './styles/index.less'

// Redux Store setup
const logger = createLogger({
    level: 'info',
    collapsed: true
})

// Create an enhanced history that syncs navigation events with the store
const isProduction = process.env.NODE_ENV === 'production'

// const envHistory = isProduction ? browserHistory : hashHistory

// const middleware = [thunk, routerMiddleware(envHistory)]
const middleware = [thunk]

const store = compose(applyMiddleware(...middleware))(createStore)(reducers)

// const history = syncHistoryWithStore(envHistory, store)

// render(
//     <Provider store={store}>
//         <Router history={history}>{routes}</Router>
//     </Provider>,
//     appMount
// )

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app-mount-point')
    )
}

render(App)

if (module.hot) {
    module.hot.accept('components/App', () => {
        const NextApp = require('components/App').default
        render(NextApp)
    })
}