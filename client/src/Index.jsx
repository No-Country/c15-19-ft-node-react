import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  // <Router>

    <ThemeProvider>
      <App />
    </ThemeProvider>

  // </Router>
  //</React.StrictMode>
);
