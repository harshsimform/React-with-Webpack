import React from "react";
import "./App.css";
import reactLogo from "./asset/react-logo.png";

const App: React.FC = () => {
  return (
    <div className="App">
      <img className="react-logo" src={reactLogo} alt="" />
      <h1 className="title">Webpack + React + TS</h1>
    </div>
  );
};

export default App;
