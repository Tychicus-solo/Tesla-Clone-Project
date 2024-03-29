import React from "react";
import logo from "./logo.svg";

import { car } from "./features/Car/carSlice";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
};

export default App;
