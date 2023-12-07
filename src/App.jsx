import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBarLower from "./components/NavBarLower/NavBarLower";
import Signin from "./Pages/Signin/Signin";
import Login from "./Pages/Login/login";
import Home from "./Pages/Home/home";
import Categories from "./Pages/Categories/Categories";
import Profile from "./Pages/Profile/Profile";
import { ContextProvider } from "./Context/useContext";

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
          {/* Agrega más rutas según sea necesario */}
        </Routes>
        <NavBarLower />
      </ContextProvider>
    </Router>
  );
}
