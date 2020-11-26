import React from "react";
import logo from "./logo.svg";
import GlobalStyle from "./GlobalStyle";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <h1>SustainAtives</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <NavBar />
    </div>
  );
}

export default App;
