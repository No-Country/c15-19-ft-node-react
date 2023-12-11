import { useState, useEffect } from "react";
import SigninForm1 from "./SigninForm1.jsx";
import SigninForm2 from "./SigninForm2.jsx";
import SigninForm3 from "./SigninForm3.jsx";

import MyContextProvider from "../../context/useContext.jsx";
import "./Signin.css";

export default function Signin() {
  const { state, updateField, resetForm } = MyContextProvider();
  const [currentForm, setCurrentForm] = useState(1);
  const [progressBar, setProgressBar] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  useEffect(() => {
    // Actualizar el estado de la barra de progreso cuando cambie el formulario actual
    updateProgressBar();
  }, [currentForm]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      updateField(name, checked);
    } else {
      updateField(name, value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.agreeToTerms) {
      console.log("Debes aceptar los términos y condiciones");
      return;
    }

    console.log("Datos enviados:", state);

    resetForm();

    setCurrentForm(currentForm + 1);
  };

  const updateProgressBar = () => {
    // Actualizar el estado de la barra de progreso según el formulario actual
    setProgressBar({
      step1: currentForm >= 1,
      step2: currentForm >= 2,
      step3: currentForm >= 3,
    });
  };

  return (
    <section className=" flex flex-col justify-center items-center w-[100vw] h-[90vh] p-5">
      <h1 className="text-4xl font-bold mt-[2rem]">Crear cuenta</h1>
      <ul className="flex flex-row items-center mt-[2rem]">
        <li
          className={`li bg-Green border-Green ${
            progressBar.step1 ? "text-white" : "text-black"
          }`}
        >
          <p>{progressBar.step1 ? "✔" : "1"}</p>
        </li>
        <hr
          className={` min-w-[6.5rem] w-[30vw] ${
            progressBar.step1 ? "border-Green" : "border-black"
          }`}
        />
        <li
          className={`li bg-BlueMarine ${
            progressBar.step2
              ? "text-white bg-Green border-Green"
              : "text-black"
          }`}
        >
          <p>{progressBar.step2 ? "✔" : "2"}</p>
        </li>
        <hr
          className={`min-w-[6.5rem] w-[30vw] ${
            progressBar.step2 ? "border-Green" : "border-BlueMarine"
          }`}
        />
        <li
          className={`li bg-BlueMarine ${
            progressBar.step3
              ? "text-white bg-Green border-Green"
              : "text-black"
          }`}
        >
          <p>{progressBar.step3 ? "✔" : "3"}</p>
        </li>
      </ul>
      {currentForm === 1 && (
        <SigninForm1
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          state={state}
          setCurrentForm={setCurrentForm}
        />
      )}
      {currentForm === 2 && (
        <SigninForm2
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          state={state}
          setCurrentForm={setCurrentForm}
        />
      )}
      {currentForm === 3 && (
        <SigninForm3
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          state={state}
          setCurrentForm={setCurrentForm}
        />
      )}
    </section>
  );
}
