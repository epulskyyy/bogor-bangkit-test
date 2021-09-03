import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'

import register from './register'
import auth from './auth'
import categories from './categories'
import product from './product'
import banner from './banner'

const createRootReducer = (history: any) => combineReducers({
    banner,
    product,
    categories,
    auth,
    register,
    router: connectRouter(history),
});

export default createRootReducer;