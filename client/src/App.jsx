import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from "./pages/Signin/Signin"
import Home from './pages/Home/home';
import { ContextProvider } from "./Context/useContext";
import NavBarInf from './Components/NavBarInf'
import Messages from './Pages/Messages';
import Friends from './Pages/Friends';
import Profile from './Pages/Profile';
import New from './Pages/New';

export default function App() {
  return (
    <Router>
      <ContextProvider>
        <NavBarInf />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new" element={<New />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </ContextProvider>
    </Router>
  );
}
