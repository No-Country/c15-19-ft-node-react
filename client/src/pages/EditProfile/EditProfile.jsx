import { useState } from "react";
import UserImg from "../../images/userimg.png";
import "../SignUp/SignUp.css";
import useAuth from "../../hooks/useAuth";



export default function EditProfile() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const {auth, loading} = useAuth()

  console.log('Auth:', auth)

  console.log(auth._id)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const userId = auth_id; // Reemplaza con el ID del usuario específico
    const apiUrl = `https://challenge-me-backend-uu82.onrender.com/users/${userId}`;

    try {
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`Error al realizar la solicitud: ${response.status}`);
      }

      const updatedUser = await response.json();
      console.log("Usuario actualizado:", updatedUser);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <section className="flex flex-col justify-start items-center h-[90vh]">
      <div className="flex flex-col justify-center items-center my-[2rem]">
        <img className="h-[8rem]" src={UserImg} alt="User image" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute ml-[6rem] mt-16 text-gray-700 rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>

        <h3>Nombre de Usuario</h3>
      </div>

      <form className="flex flex-col" onSubmit={handleUpdateProfile}>
        <label className=" flex flex-col">
          Nombre de Usuario
          <input
            className="input--registre__user"
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label className="flex flex-col">
          Email
          <input
            className="input--registre__user"
            type="text"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label className="flex flex-col">
          Contraseña:
          <input
            className="input--registre__user"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button
          className="w-[11rem] h-[3rem] mx-auto bg-GreenDefaultSolid active:bg-GreenHoverSolid hover:bg-GreenActiveSolid text-white hover:text-TextGreen active:text-white rounded-3xl"
          type="submit"
        >
          Actualizar Perfil
        </button>
      </form>
    </section>
  );
}
