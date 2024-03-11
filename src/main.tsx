import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  //component tree. taking this component and rendering it in an elment root using the reactDOm library
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
