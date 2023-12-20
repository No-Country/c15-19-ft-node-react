import React, { useState } from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
    navigate("/login");
  };

  const handleShowRegister = () => {
    setShowRegister(!showRegister);
    navigate("/register");
  };

  return (
    <section className="flex flex-row items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 ">ChallengeMe</h1>
        <p className="mb-4">
          Bienvenido a <strong>ChallengeMe</strong>, la aplicación que
          transforma la diversión en una experiencia compartida y emocionante.
          En ChallengeMe, no solo creas y compartes desafíos, sino que también
          construyes conexiones significativas a través de tribus vibrantes.
        </p>
        <p className="mb-8">
          Imagina una plataforma donde la diversión se convierte en un lenguaje
          universal. ChallengeMe se creó con la visión de unir a las personas de
          manera única y dinámica mediante desafíos creativos que fomentan la
          camaradería y el espíritu competitivo.
        </p>

        <div>
          <button
            onClick={handleShowLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Iniciar Sesión
          </button>
          <button
            onClick={handleShowRegister}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Registro
          </button>
        </div>
      </div>

      <img className="mt-8" src={logo} alt="Logo ChallengeMe" />
    </section>
  );
}

export default LandingPage;
