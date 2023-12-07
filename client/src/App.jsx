import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
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
          <Route path="/profile/" element={<Profile />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </ContextProvider>
    </Router>
  );
}
