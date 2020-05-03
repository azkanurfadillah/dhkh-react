import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store/store";

import Home from "./containers/Home/Home";
import Algolia from "./containers/Algolia/algolia";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
