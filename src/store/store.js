// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const createAndRenderStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export default createAndRenderStore;
