import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import reducer from "./reducers";
const root = document.getElementById("root");

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware()));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
