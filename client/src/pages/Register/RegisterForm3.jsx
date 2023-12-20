import React from "react";
import EmailCard from "/emailcard.png"; // Ajusta la ruta de la imagen según tu estructura de carpetas

export default function SigninForm3() {
  return (
    <section className="flex flex-col justify-center items-center w-[100vw] h-[70vh] px-[1rem]">
      <div className="flex flex-col items-center justify-center">
        <img src={EmailCard} alt="" />
        <h1 className="font-bold text-2xl mt-[2rem] text-gray-700 dark:text-white text-center">
          POR FAVOR VERIFIQUE SU CORREO ELECTRÓNICO
        </h1>
        <p className="w-[21rem] text-center text-gray-700 dark:text-gray-200 mt-[1rem]">
          Su cuenta ha sido creada con éxito. Solo un paso más.
        </p>
      </div>
    </section>
  );
}
