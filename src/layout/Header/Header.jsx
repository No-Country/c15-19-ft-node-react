import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="z-20 relative bg-[#00D4A4] flex justify-end h-10">
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
        <div className="w-[100%] h-[100vh] absolute top-0 right-0 bg-white p-4 mt-10 border rounded shadow-md md:text-lg">
          <ul>
            <li className="liLogin" id="darkMode">
              Modo oscuro
            </li>
            <li className="liMenu liLogin">
              <p className="text-black">
                <Link to="/profile/achievements" onClick={closeMenu}>
                  Logros
                </Link>
              </p>
            </li>
            <li className="liMenu liLogin"><p className="text-black"><Link to="/profile/sync" onClick={closeMenu}>Sync 
            </Link>
            </p>
            </li>
            <li className="liMenu liLogin"><p className="text-black"><Link to="/profile/privacy" onClick={closeMenu}>Privacy
            </Link>
            </p>
            </li>
            <li className="liMenu liLogin"><p className="text-black"><Link to="/profile/security" onClick={closeMenu}>Security
            </Link>
            </p></li>
            <li className="liLogin" id="closeSession">
              Cerrar sesión
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
