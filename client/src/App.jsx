import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from "./pages/Signin/Signin"
import Home from './pages/Home/home';
import { ContextProvider } from "./Context/useContext";

export default function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </ContextProvider>
    </Router>
  );
}
