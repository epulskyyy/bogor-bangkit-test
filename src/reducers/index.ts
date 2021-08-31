import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'

import register from './register'
import auth from './auth'

const createRootReducer = (history: any) => combineReducers({
    auth,
    register,
    router: connectRouter(history),
});

export default createRootReducer;