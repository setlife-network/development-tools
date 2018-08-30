import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
// import { Provider, connect } from 'react-redux'
// import { createStore, applyMiddleware, compose } from 'redux'
// import {
//     syncHistoryWithStore,
//     routerReducer,
//     routerMiddleware
// } from 'react-router-redux'
// import createLogger from 'redux-logger'
// import thunk from 'redux-thunk'

import 'assets/css/normalize.less'
import 'assets/css/fonts.less'

import App from 'components/App'

// import reducers from './reducers'
// import routes from './routes'

// Stylesheets
// import './styles/index.less'

// Redux Store setup
// const logger = createLogger({
//     level: 'info',
//     collapsed: true
// })

// Create an enhanced history that syncs navigation events with the store
const isProduction = process.env.NODE_ENV === 'production'

// const envHistory = isProduction ? browserHistory : hashHistory

// const middleware = [thunk, routerMiddleware(envHistory)]
// const middleware = [thunk]

// const store = compose(applyMiddleware(...middleware))(createStore)(reducers)

// const history = syncHistoryWithStore(envHistory, store)

// render(
//     <Provider store={store}>
//         <Router history={history}>{routes}</Router>
//     </Provider>,
//     appMount
// )

// Hot reloading setup
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
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