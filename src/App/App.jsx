import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../layout/Header/Header";
import NavBarLower from "../components/NavBarLower/NavBarLower";
import Signin from "../pages/Signin/Signin";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import Profile from "../pages/Profile/Profile";
import Achievements from "../pages/Achievements/Achievements";
import Sync from "../pages/Sync/Sync";
import Privacy from "../pages/Privacy/Privacy";
import Security from "../pages/Security/Security"
import { ContextProvider } from "../context/useContext";

export default function App() {
  return (
    <Router>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/profile/achievements" element={<Achievements/>} />
          <Route path="/profile/sync" element={<Sync/>}/>
          <Route path="/profile/privacy" element={<Privacy/>}/>
          <Route path="/profile/security" element={<Security/>}/>
          {/* Agrega más rutas según sea necesario */}
        </Routes>
        <NavBarLower />
      </ContextProvider>
    </Router>
  );
}
