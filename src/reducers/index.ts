import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'

import register from './register'

const createRootReducer = (history: any) => combineReducers({
    register,
    router: connectRouter(history),
});

export default createRootReducer;