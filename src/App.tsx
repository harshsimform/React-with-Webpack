import React from "react";
import "./App.css";
import reactLogo from "./asset/react.svg";

const App: React.FC = () => {
  return (
    <div className="App">
      <img src={reactLogo} alt="react-logo" />
      <h1 className="title">Webpack + React + TS</h1>
    </div>
  );
};

export default App;
