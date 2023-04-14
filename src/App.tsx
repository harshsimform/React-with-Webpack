import React from "react";
import "./App.css";
import reactLogo from "./asset/react-logo.png";
import webpackLogo from "./asset/webpack.png";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="imgs">
        <img className="webpack-logo" src={webpackLogo} alt="" />
        <img className="react-logo" src={reactLogo} alt="" />
      </div>
      <h1 className="title">Webpack + React + TS</h1>
    </div>
  );
};

export default App;
