import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <h2>Let's build a discord clone</h2>
      <Sidebar />
    </div>
  );
}

export default App;
