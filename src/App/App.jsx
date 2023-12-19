import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../layout/Header/Header";
import NavBarLower from "../components/NavBarLower/NavBarLower";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import Category from "../pages/Categories/Category";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/EditProfile/EditProfile";
import Privacy from "../pages/Privacy/Privacy";
import { ContextProvider } from "../context/useContext";
import CrearPost from "../pages/CreatePost/CreatePost";

export default function App() {
  return (
    <Router>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:name" element={<Category />} />

          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/:id/privacy" element={<Privacy />} />
          <Route path="/profile/:id/editprofile" element={<EditProfile />} />

          <Route path="/createpost" element={<CrearPost />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
        <NavBarLower />
      </ContextProvider>
    </Router>
  );
}
