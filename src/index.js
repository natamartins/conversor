import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./reducer/index";
import ReduxPromise from "redux-promise";
import { createStore, applyMiddleware } from "redux";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(reducer)}>
      <App />
    </Provider>
  </React.StrictMode>
);
