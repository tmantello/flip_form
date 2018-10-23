import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.scss";

function Load() {
  return <div class="react-card" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Load />, rootElement);
