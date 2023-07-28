import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import createAndRenderStore from "./store/store";

createAndRenderStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createAndRenderStore()}>
    <App />
  </Provider>
);
