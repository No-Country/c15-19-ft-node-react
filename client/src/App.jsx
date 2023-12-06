import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Pages/Login/Login.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Home from './Pages/Home/index.jsx';
import { ContextProvider } from "./Context/useContext.jsx";

export default function App() {
  return (
    <Router>
      <ContextProvider>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </ContextProvider>
    </Router>
  );
}
