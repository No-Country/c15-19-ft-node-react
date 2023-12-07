import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import Home from "./Pages/Home/Home";
import { ContextProvider } from "./Context/useContext";
import NavBarInf from './Components/NavBarInf/NavBarInf'


export default function App() {
  return (
    <Router>
      <ContextProvider>
        <NavBarInf />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </ContextProvider>
    </Router>
  );
}
