import React from "react";
import ReactDOM from "react-dom";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import Main from "./containers/Main";

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <Main />
  </StyletronProvider>,
  document.getElementById("root")
);
