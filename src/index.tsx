import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";

const rootElement: HTMLElement = document.querySelector("#root")!;
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
