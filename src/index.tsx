import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, persistor, history } from "./utils/configureStore";

import { PersistGate } from "redux-persist/integration/react";

import "./assets/font/Signika_Negative/SignikaNegative-Regular.ttf";
import "./styles/antd.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const isDev = process.env.NODE_ENV === "development";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        {isDev ? (
          <App />
        ) : (
          <React.StrictMode>
            <App />
          </React.StrictMode>
        )}
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
