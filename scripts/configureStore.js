import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const isProduction = process.env.NODE_ENV === 'production'

export default function configureStore(initialState) {
    const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = isProduction ? createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    ) : createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    )

    // if (!isProduction && module.hot) {
    //     module.hot.accept('../reducers', () => {
    //         const nextRootReducer = require('../reducers').default
    //         store.replaceReducer(nextRootReducer)
    //     })
    // }

    return store
}