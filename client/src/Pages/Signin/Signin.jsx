import React, { useState, useEffect } from 'react';
import SigninForm1 from "./SigninForm1.jsx";
import SigninForm2 from './SigninForm2.jsx';
import SigninForm3 from './SigninForm3.jsx';

import MyContextProvider from '../../Context/useContext.jsx';
import './Signin.css';

export default function Signin() {
    const { state, actualizarCampo, resetFormulario } = MyContextProvider();
    const [formularioActual, setFormularioActual] = useState(1);
    const [barraProgreso, setBarraProgreso] = useState({
        paso1: false,
        paso2: false,
        paso3: false,
    });

    useEffect(() => {
        // Actualizar el estado de la barra de progreso cuando cambie el formulario actual
        actualizarBarraProgreso();
    }, [formularioActual]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            actualizarCampo(name, checked);
        } else {
            actualizarCampo(name, value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!state.aceptaTerminos) {
            console.log('Debes aceptar los términos y condiciones');
            return;
        }

        console.log('Datos enviados:', state);

        resetFormulario();

        setFormularioActual(formularioActual + 1);
    };

    const actualizarBarraProgreso = () => {
        // Actualizar el estado de la barra de progreso según el formulario actual
        setBarraProgreso({
            paso1: formularioActual >= 1,
            paso2: formularioActual >= 2,
            paso3: formularioActual >= 3,
        });
    };

    return (
        <main className=' flex flex-col justify-center items-center w-[100vw] h-[100vh] p-5'>
            <h1 className='text-4xl font-bold mt-[2rem]'>Crear cuenta</h1>
            <ul className="flex flex-row items-center mt-[2rem]">
                <li className={`bg-Green border-Green ${barraProgreso.paso1 ? 'text-white' : 'text-black'}`}>
                    <p>{barraProgreso.paso1 ? '✔' : '1'}</p>
                </li>
                <hr className={`min-w-[6.5rem] w-[30vw] ${barraProgreso.paso1 ? 'border-Green' : 'border-black'}`} />
                <li className={`bg-BlueMarine ${barraProgreso.paso2 ? 'text-white bg-Green border-Green' : 'text-black'}`}>
                    <p>{barraProgreso.paso2 ? '✔' : '2'}</p>
                </li>
                <hr className={`min-w-[6.5rem] w-[30vw] ${barraProgreso.paso2 ? 'border-Green' : 'border-BlueMarine'}`} />
                <li className={`bg-BlueMarine ${barraProgreso.paso3 ? 'text-white bg-Green border-Green' : 'text-black'}`}>
                    <p>{barraProgreso.paso3 ? '✔' : '3'}</p>
                </li>
            </ul>
            {formularioActual === 1 && (
                <SigninForm1

                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    state={state}
                    setFormularioActual={setFormularioActual}
                />
            )}
            {formularioActual === 2 && (
                <SigninForm2
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    state={state}
                    setFormularioActual={setFormularioActual}
                />
            )}
            {formularioActual === 3 && (
                <SigninForm3
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    state={state}
                    setFormularioActual={setFormularioActual}
                />
            )}
        </main>
    );
}
