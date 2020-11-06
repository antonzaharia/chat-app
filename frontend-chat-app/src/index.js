import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import thunk from 'redux-thunk'
import Main from "./containers/Main";

import UsersReducer from "./reducers/UserReducer";

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

const rootReducer = combineReducers({user: UsersReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <Main />
    </StyletronProvider>
  </Provider>,
  document.getElementById("root")
);
