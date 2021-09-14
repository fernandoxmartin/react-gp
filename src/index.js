import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { theme } from "./theme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { allReducers } from "./Redux/allReducers";
import { ThemeProvider } from "styled-components";

const saveToLocalStorage = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
};

const loadFromLocalStorage = () => {
  const serializedState = localStorage.getItem("state");
  if (serializedState === null) return undefined;
  return JSON.parse(serializedState);
};

const persistedState = loadFromLocalStorage();

const store = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
