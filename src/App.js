import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Main from "./routes/Main";
import Detail from "./routes/Detail";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/:id" element={<Detail/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
