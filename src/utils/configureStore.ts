import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import LogRocket from 'logrocket'; //for future videorecords on production))
import createRootReducer from "../reducers";
import rootSaga from "../sagas";

const history = createBrowserHistory();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [routerMiddleware(history), sagaMiddleware];

let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor, history };
