import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function VerifyAccount() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState("");
  useEffect(() => {
    // Llamar a la función para verificar el token de verificación en el backend
    verifyEmailToken(token);
  }, [token]); // Agregar token como dependencia para que se ejecute cuando cambie

  const verifyEmailToken = async (token) => {
    try {
      // Realizar la solicitud al endpoint del backend para verificar el token
      const resp = await axios.get(
        `https://challenge-me-backend-uu82.onrender.com/auth/verify-account/${token}`
      );

      console.log(resp);
      // Si el token es válido y la verificación es exitosa, podrías mostrar un mensaje de éxito o redirigir al usuario a otra página (por ejemplo, la página de inicio)
      setVerificationStatus("success");
      // Redirigir al usuario a otra página (por ejemplo, Home)
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (error) {
      // Manejar el error si el token es inválido o ha expirado
      console.log("Error en la verificación:", error.message);
      // Mostrar un mensaje de error o redirigir al usuario a una página de error, si es necesario
      setVerificationStatus("error");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md p-8 rounded-lg w-96">
        {verificationStatus === "success" ? (
          <div>
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              ¡Verificación exitosa!
            </h2>
            <p>Tu cuenta ha sido verificada con éxito.</p>
            <p>Redirigiendo al Home..</p>
          </div>
        ) : verificationStatus === "error" ? (
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              ¡Error en la verificación!
            </h2>
            <p>Ha ocurrido un error al verificar tu cuenta.</p>
          </div>
        ) : (
          <div className="flex space-x-3">
            <h2 className="text-2xl font-bold mb-4">Verificando cuenta...</h2>
            {/* Puedes mostrar un mensaje de carga o una animación aquí mientras se verifica el token */}
            <div className="animate-spin rounded-full flex justify-center items-center h-10 w-10 border-t-2 border-blue-500 border-solid border-t-blue-500"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerifyAccount;
