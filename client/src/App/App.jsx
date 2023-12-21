import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";

import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import Category from "../pages/Categories/Category";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/EditProfile/EditProfile";
import Privacy from "../pages/Privacy/Privacy";
import Achievements from "../pages/Achievements/Achievements";
import Sync from "../pages/Sync/Sync";
import Security from "../pages/Security/Security";
import { ContextProvider } from "../context/useContext";
import CrearPost from "../pages/CreatePost/CreatePost";
import Error from "../pages/Error/Error";
import Wrapper from "../pages/Wrapper/Wrapper";
import AuthLayout from "../pages/Wrapper/AuthLayout";
import Comments from "../pages/Comments/Comments";
import VerifyAccount from "../pages/VerifyAccount/VerifyAccout";
import LandingPage from "../pages/LandingPage/LandingPage";

export default function App() {
  return (
    <Router>
      {/* <ContextProvider> */}
        <AuthProvider>
          <Routes>
            <Route path="/landing-page" element={<LandingPage />} />

            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="verify-account/:id" element={<VerifyAccount />} />
            </Route>

            <Route path="/" element={<Wrapper />}>
              <Route path="home" element={<Home />} />
              <Route path="home/comments" element={<Comments />} />
              <Route path="/categories" element={<Categories />} />
              {/* <Route path="/profile" element={<Profile />} /> */}
              <Route path="/profile/achievements" element={<Achievements />} />
              <Route path="/profile/sync" element={<Sync />} />
              <Route path="/profile/privacy" element={<Privacy />} />
              <Route path="/profile/security" element={<Security />} />

              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/profile/:id/privacy" element={<Privacy />} />
              <Route
                path="/profile/:id/editprofile"
                element={<EditProfile />}
              />

              <Route path="/categories/:name" element={<Category />} />

              <Route path="/createpost" element={<CrearPost />} />

              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </AuthProvider>
      {/* </ContextProvider> */}
    </Router>
  );
}
