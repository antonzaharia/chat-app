import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import Main from "./containers/Main";

import { ActionCableProvider } from "react-actioncable-provider";

import rootReducer from "./reducers/index";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <ActionCableProvider url="ws://localhost:3000/cable">
    <Provider store={store}>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </StyletronProvider>
    </Provider>
  </ActionCableProvider>,
  document.getElementById("root")
);
