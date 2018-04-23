import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import environment from './environment';

export default combineReducers({
    environment,
    routing: routerReducer
});