import React, { useState } from "react";
import ButtonToggle from "../../components/ButtonToggle/ButtonToggle"
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative dark:text-white bg-Green flex justify-end h-10">
      <button
        className="text-black focus:outline-none mx-3"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12h18M3 6h18m-18 6h18M3 18h18"
            />
          </svg>
        )}
      </button>

      {menuOpen && (
        <div className="w-[100vw] h-[100vh] dark:bg-[#27272a] dark:text-white absolute top-0 right-0 bg-white p-4 mt-10 border rounded shadow-md md:text-lg">
          <ul>
            <li className="liLogin flex items-center" id="darkMode"><p className="text-black dark:text-white">Modo Oscuro</p><ButtonToggle /></li>
            <li className="liMenu liLogin">Insignias</li>
            <li className="liMenu liLogin">Sincronización</li>
            <li className="liMenu liLogin">Privacidad</li>
            <li className="liMenu liLogin">Seguridad</li>
            <li className="liLogin" id="closeSession">Cerrar sesión</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
