import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../layout/Header/Header";
import NavBarLower from "../components/NavBarLower/NavBarLower";
import Signin from "../pages_/Signin/Signin";
import Login from "../pages_/Login/Login";
import Home from "../pages_/Home/Home";
import Categories from "../pages_/Categories/Categories";
import Category from "../pages_/Categories/Category";
import Profile from "../pages_/Profile/Profile";
import { ContextProvider } from "../context/useContext";
import CrearPost from "../pages_/CreatePost/CreatePost";

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

          <Route path="/profile/:id" element={<Profile />} />

          <Route path="/categories/:name" element={<Category />} />

          <Route path="/createpost" element={<CrearPost />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
        <NavBarLower />
      </ContextProvider>
    </Router>
  );
}
