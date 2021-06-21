import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
// import LogRocket from 'logrocket'; //for future videorecords on production))
import createRootReducer from '../reducers';
import rootSaga from '../sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
// const middleware = [
//   sagaMiddleware,
//   LogRocket.reduxMiddleware()
// ];
const middlewares = [
    routerMiddleware(history),
    sagaMiddleware,
]
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);

export default function configureStore() {
    return store;
}