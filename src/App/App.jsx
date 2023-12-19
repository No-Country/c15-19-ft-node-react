import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../layout/Header/Header";
import NavBarLower from "../components/NavBarLower/NavBarLower";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import Category from "../pages/Categories/Category";
import Profile from "../pages/Profile/Profile";
import Achievements from "../pages/Achievements/Achievements";
import Sync from "../pages/Sync/Sync";
import Privacy from "../pages/Privacy/Privacy";
import Security from "../pages/Security/Security";
import { ContextProvider } from "../context/useContext";
import CrearPost from "../pages/CreatePost/CreatePost";
import Error from "../pages/Error/Error";
import Wrapper from "../pages/Wrapper/Wrapper";
import Comment from "../pages/Comments/Comment";

export default function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/comments" element={<Comment />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/profile/achievements" element={<Achievements />} />
          <Route path="/profile/sync" element={<Sync />} />
          <Route path="/profile/privacy" element={<Privacy />} />
          <Route path="/profile/security" element={<Security />} />

          <Route path="/profile/:id" element={<Profile />} />

          <Route path="/categories/:name" element={<Category />} />

          <Route path="/createpost" element={<CrearPost />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}
