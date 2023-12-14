import { useState } from "react";
import { registerUser } from "../../utils/apiServiceRegister";
import "./Signin.css";
import useMyContext from "../../context/useContext"; // Reemplaza con la ruta correcta de tu archivo de contexto

export default function SigninForm2({ handleChange, setCurrentForm, state }) {
  const [response, setResponse] = useState(null);
  const { setForm2Data, handleSubmit } = useMyContext();

  const getMaximumDate = () => {
    const dateCurrent = new Date();
    dateCurrent.setFullYear(dateCurrent.getFullYear() - 18);
    return dateCurrent.toISOString().split("T")[0];
  };

  const validateForm = () => {
    // Realiza las validaciones necesarias para el formulario 2
    // Puedes agregar más lógica de validación según tus requisitos
    // ...

    return true;
  };

  const handleSubmitForm2 = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Formulario no cumple con todos los requisitos");
      return;
    }

    const data = {
      name: state.name,
      lastname: state.lastname,
      email: state.email,
      password: state.password,
      username: state.username,
    };

    localStorage.setItem("registrationData", JSON.stringify(data));

    try {
      const responseData = await registerUser(data);

      console.log("Datos enviados correctamente:", responseData);
      setResponse(responseData);

      setForm2Data(data);

      handleSubmit(e);

      setCurrentForm(3);
    } catch (error) {
      console.error("Error al enviar los datos:", error.message);
      setResponse(null);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center w-[100vw] h-[70vh] px-[1rem]">
      <form className="flex flex-col " onSubmit={handleSubmitForm2}>
        <label className="label--container__div dark:text-white" htmlFor="name">
          Nombre
        </label>
        <input
          className="input--registre__user dark:placeholder:text-gray-500"
          placeholder="Nombre"
          type="text"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
          required
        />
        <label
          className="label--container__div dark:text-white"
          htmlFor="lastname"
        >
          Apellido
        </label>
        <input
          className="input--registre__user dark:placeholder:text-gray-500"
          placeholder="Apellido"
          type="text"
          id="lastname"
          name="lastname"
          value={state.lastname}
          onChange={handleChange}
          required
        />
        <label
          className="label--container__div dark:text-white"
          htmlFor="dateBirth"
        >
          Fecha de Nacimiento
        </label>
        <input
          className="input--registre__user dark:placeholder:text-gray-500"
          placeholder="Fecha de Nacimiento"
          type="date"
          id="dateBirth"
          name="dateBirth"
          value={state.dateBirth}
          onChange={handleChange}
          max={getMaximumDate()}
          required
        />
        <label
          className="label--container__div dark:text-white"
          htmlFor="gender"
        >
          Género
        </label>
        <select
          className="input--registre__user dark:placeholder:text-gray-500"
          id="gender"
          name="gender"
          value={state.gender}
          onChange={handleChange}
          required
        >
          <option value=""></option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>

        <button
          className="w-[10rem] h-[3rem] mx-auto mt-[3.5rem] bg-GreenDefaultSolid active:bg-GreenHoverSolid hover:bg-GreenActiveSolid text-white hover:text-TextGreen active:text-white rounded-3xl"
          type="submit"
        >
          Siguiente
        </button>
      </form>
    </section>
  );
}
