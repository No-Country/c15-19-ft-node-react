import { useState, useEffect } from "react";
import RegisterForm1 from "./RegisterForm1.jsx";
import RegisterForm2 from "./RegisterForm2.jsx";
import RegisterForm3 from "./RegisterForm3.jsx";
import { registerUser } from "../../utils/apiServiceRegister.js";

import "./Register.css";

export default function Signin() {
  const [currentForm, setCurrentForm] = useState(1);
  const [progressBar, setProgressBar] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  const [title, setTitle] = useState("Crear cuenta");

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateBirth: "",
    acceptTerms: false,
  });

  useEffect(() => {
    updateProgressBar();
  }, [currentForm]);

  const updateProgressBar = () => {
    setProgressBar({
      step1: currentForm >= 1,
      step2: currentForm >= 2,
      step3: currentForm >= 3,
    });
  };

  const handleSubmitBackend = async (data) => {
    const dataToBack = {
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      username: data.username,
    };
    const response = await registerUser(dataToBack);
    return response;
  };

  return (
    <section className=" flex flex-col justify-center items-center p-5">
      <h1 className="text-4xl font-bold mt-[2rem] dark:text-white">{title}</h1>
      <ul className="flex flex-row items-center mt-[2rem]">
        <li
          className={`li bg-Green border-Green ${
            progressBar.step1 ? "text-white" : "text-black"
          }`}
        >
          <p className="text-TitleGreen">{progressBar.step1 ? "✔" : "1"}</p>
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
          <p className="text-TitleGreen">{progressBar.step2 ? "✔" : "2"}</p>
        </li>
        <hr
          className={`min-w-[6.5rem] w-[30vw] ${
            progressBar.step2 ? "border-Green" : "border-gray-500"
          }`}
        />
        <li
          className={`li bg-BlueMarine ${
            progressBar.step3
              ? "text-white bg-Green border-Green"
              : "text-black"
          }`}
        >
          <p className="text-TitleGreen">{progressBar.step3 ? "✔" : "3"}</p>
        </li>
      </ul>

      {currentForm === 1 && (
        <RegisterForm1
          formData={formData}
          setFormData={setFormData}
          setCurrentForm={setCurrentForm}
        />
      )}
      {currentForm === 2 && (
        <RegisterForm2
          setTitle={setTitle}
          formData={formData}
          setFormData={setFormData}
          setCurrentForm={setCurrentForm}
          handleSubmitBackend={handleSubmitBackend}
        />
      )}
      {currentForm === 3 && <RegisterForm3 />}
    </section>
  );
}
