import React, { useState } from "react";

export default function SigninForm1({ formData, setFormData, setCurrentForm }) {
  const [errors, setErrors] = useState({});

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "* Obligatorio";
    } else if (formData.username.length < 1 || formData.username.length > 15) {
      newErrors.username = "* (1-15 caracteres)";
    }

    if (!formData.email.trim()) {
      newErrors.email = "* Obligatorio";
    }
    if (!formData.password.trim()) {
      newErrors.password = "* Obligatoria";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Si validateForm es TRUE significa que no hay erroes. Pasa al siguiente Step.
    if (validateForm()) {
      setCurrentForm(2);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center w-[100vw] h-[70vh] px-[1rem]">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="label--container__div">
          <label
            htmlFor="username"
            className="text-xs md:text-xl dark:text-white"
          >
            Nombre de usuario
          </label>
          {errors.username && (
            <p className="text-red-500 text-xs">{errors.username}</p>
          )}
        </div>
        <input
          className={`input--registre__user dark:placeholder:text-gray-500 ${
            errors.username ? "border-red-500" : ""
          }`}
          placeholder="Nombre de usuario"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChangeInput}
        />
        <div className="label--container__div">
          <label
            htmlFor="email"
            className=" text-xs md:text-xl dark:text-white"
          >
            Correo Electronico
          </label>
          {errors.email && (
            <p className="text-red-500 text-xs text-right">{errors.email}</p>
          )}
        </div>
        <input
          className={`input--registre__user dark:placeholder:text-gray-500 ${
            errors.email ? "border-red-500" : ""
          }`}
          placeholder="Correo"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChangeInput}
        />
        <div className="label--container__div text-xs md:text-xl">
          <label
            htmlFor="password"
            className=" text-xs md:text-xl dark:text-white"
          >
            Contraseña
          </label>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password}</p>
          )}
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
          )}
        </div>
        <input
          className={`input--registre__user dark:placeholder:text-gray-500 ${
            errors.password || errors.confirmPassword ? "border-red-500" : ""
          }`}
          placeholder="Contraseña"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChangeInput}
        />

        <label
          htmlFor="confirmPassword"
          className="label--container__div text-xs md:text-xl dark:text-white"
        >
          Confirmar contraseña
        </label>
        <input
          className={`input--registre__user dark:placeholder:text-gray-500 ${
            errors.password || errors.confirmPassword ? "border-red-500" : ""
          }`}
          placeholder="Confirmar contraseña"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChangeInput}
        />

        <button
          className="w-[10rem] h-[3rem] mx-auto bg-GreenDefaultSolid active:bg-GreenHoverSolid hover:bg-GreenActiveSolid mt-8 text-white hover:text-TextGreen active:text-white rounded-3xl"
          type="submit"
        >
          Siguiente
        </button>
      </form>
    </section>
  );
}
