// tomaslona888@gmail.com

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonToggle from "../../components/ButtonToggle/ButtonToggle"
import "./Header.css";
import useAuth  from "../../hooks/useAuth";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {closeSesionAuth} = useAuth()

  const handleCloseSesion = () => {
    closeSesionAuth()
    localStorage.removeItem('jsontoken')
}

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=" relative dark:text-white bg-Green flex justify-end h-10">
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
        <div className="z-50 w-[100vw] h-[100vh] dark:bg-[#27272a] dark:text-white absolute top-0 right-0 bg-white p-4 mt-10 border rounded shadow-md md:text-lg">
          <ul>

            <li className="liLogin flex items-center" id="darkMode"><p className="text-black dark:text-white">Modo Oscuro</p><ButtonToggle /></li>
            <li className="liLogin flex items-center" id="darkMode"><p className="text-black dark:text-white">Notificaciones</p></li>
            <li className="liMenu liLogin">
              <p className="text-black dark:text-white">
                <Link to="/profile/achievements" onClick={closeMenu}>
                  Logros
                </Link>
              </p>
            </li>
            <li className="liMenu liLogin dark:text-white"><p className="text-black dark:text-white"><Link to="/profile/privacy" onClick={closeMenu}>Privacidad
            </Link>
            </p>
            </li>
            <li className="liMenu liLogin dark:text-white"><p className="text-black dark:text-white"><Link to="/profile/security" onClick={closeMenu}>Seguridad
            </Link>
            </p></li> 
            <li className="liMenu liLogin "><p className="text-black dark:text-white"><Link to="/profile/sync" onClick={closeMenu}>Sincronización
            </Link>
            </p>
            </li>
            <li className="liMenu liLogin "><p className="text-black dark:text-white"><Link to="/profile/sync" onClick={closeMenu}>Borrar cuenta
            </Link>
            </p>
            </li>
            <li onClick={handleCloseSesion} className="liLogin dark:text-white" id="closeSession">
              Cerrar sesión
            </li>
           
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
