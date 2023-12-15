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
import CrearPost from "../pages/CreatePost/CreatePost";
import Error from "../pages/Error/Error";
import Wrapper from "../pages/Wrapper/Wrapper";

export default function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route exact path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/categories/:name" element={<Category />} />
            <Route path="/createpost" element={<CrearPost />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}
