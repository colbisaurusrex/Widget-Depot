import React from "react";
import "../App.css";
import Nav from "./Nav";
import Grid from "./Grid";

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Grid />
      </div>
    </div>
  );
}

export default App;
