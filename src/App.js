import React from "react";

import "./App.css";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
