import React from "react";
import "./App.css";
import Search from "./search/search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>People Source</h1>
        </div>
        <div className="row">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
