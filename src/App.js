import React from "react";

import "./App.css";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
