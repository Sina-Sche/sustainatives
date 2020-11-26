import React from "react";
import logo from "./logo.svg";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <h1>SustainAtives</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
