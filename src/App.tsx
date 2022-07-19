import React, { useContext } from "react";
import "./App.css";
import Game from "./components/Game";
import { ThemeContext } from "./components/ThemeContext";

function App() {
  const {xMode} = useContext<any>(ThemeContext)
  return (
      <div className="App" style={{backgroundColor: xMode===true ? "#60b6e2" : "#06BCB5"}}>
      <header>
        <h1 className="animate-character">TIC TAC TOE</h1>
      </header>
      <Game />
    </div>
  );
}

export default App;
