import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Signin from "./Pages/Signin/Signin";
import Login from './Pages/Login/login';
import Home from './Pages/Home/home';
import Categories from './Pages/Categories/Categories';
import { ContextProvider } from "./Context/useContext";

export default function App() {

  return (
    <Router>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/categories' element={<Categories />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </ContextProvider>
    </Router>
  );
}
