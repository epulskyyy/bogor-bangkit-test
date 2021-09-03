import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'

import register from './register'
import auth from './auth'
import categories from './categories'

const createRootReducer = (history: any) => combineReducers({
    categories,
    auth,
    register,
    router: connectRouter(history),
});

export default createRootReducer;