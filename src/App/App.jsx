import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../layout/Header/Header";
import NavBarLower from "../components/NavBarLower/NavBarLower";
import Signin from "../pages/Signin/Signin";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import Category from "../pages/Categories/Category";
import Profile from "../pages/Profile/Profile";
import { ContextProvider } from "../context/useContext";

export default function App() {
  return (
    <Router>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:name" element={<Category />} />
          <Route path="/profile/" element={<Profile />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
        <NavBarLower />
      </ContextProvider>
    </Router>
  );
}
