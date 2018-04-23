import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';

import environment from './environment';

export default combineReducers({
    environment,
    routing: routerReducer,
    form: formReducer
});