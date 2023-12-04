import React, { useState } from "react";

export default function SigninForm1({ handleChange, state, setFormularioActual }) {
    const [errores, setErrores] = useState({});
    const aceptaTerminos = state.aceptaTerminos || false;

    const resetFormulario = () => {
        // Implementa la lógica para reiniciar el formulario si es necesario
    };

    const validateForm = () => {
        const nuevosErrores = {};

        // Validar nombre de usuario
        if (state.username.length < 5) {
            nuevosErrores.username = 'Requerido 5 caracteres';
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const allowedEmailDomains = ['gmail.com', 'hotmail.com', 'outlook.com'];
        if (!emailRegex.test(state.email) || !allowedEmailDomains.includes(state.email.split('@')[1])) {
            nuevosErrores.email = 'Email no cumple con los requisitos';
        }

        // Validar contraseña
        const passwordRegex = /^.{6,}$/;
        if (state.password !== state.confirmPassword || !passwordRegex.test(state.password)) {
            nuevosErrores.password = 'Inserta una contraseña valida';
        }

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!aceptaTerminos) {
            setErrores({ aceptaTerminos: 'Debes aceptar los términos y condiciones' });
            return;
        }

        if (!validateForm()) {
            console.log('Formulario no cumple con todos los requisitos');
            return;
        }

        console.log('Datos enviados:', state);
        resetFormulario();
        setFormularioActual(2); // Mover esta línea aquí
    };

    return (
        <section className='flex flex-col justify-center items-center w-[100vw] h-[70vh] px-[1rem]'>
            <form
                className='flex flex-col '
                onSubmit={handleSubmit}
            >
                <div className="label--container__div">

                    <label htmlFor="username">Nombre de usuario</label>
                    {errores.nombre && <p className="text-red-500 text-xs">{errores.nombre}</p>}
                </div>
                <input
                    className={`input--registre__user ${errores.nombre ? 'border-red-500' : ''}`}
                    placeholder='Nombre de usuario'
                    type="text"
                    id="username"
                    name="username"
                    value={state.username}
                    onChange={handleChange}
                    required
                />
                <div className="label--container__div">
                    <label htmlFor="email" >Email</label>
                    {errores.email && <p className="text-red-500 text-xs text-right">{errores.email}</p>}
                </div>
                <input
                    className={`input--registre__user ${errores.email ? 'border-red-500' : ''}`}
                    placeholder='Email'
                    type="email"
                    id="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    required
                />
                <div className="label--container__div">
                    <label htmlFor="password">Contraseña</label>
                    {errores.password && <p className="text-red-500 text-xs text-right">{errores.password}</p>}
                </div>
                <input
                    className={`input--registre__user ${errores.password ? 'border-red-500' : ''}`}
                    placeholder='Contraseña'
                    type="password"
                    id="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="confirmPassword" className="label--container__div">Confirmar contraseña</label>
                <input
                    className={`input--registre__user ${errores.password ? 'border-red-500' : ''}`}
                    placeholder='Confirmar contraseña'
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={state.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <div className="mt-[3rem]">
                    {errores.aceptaTerminos && <p className="text-red-500 mt-[1rem] text-xs text-center mb-[-0.5rem]">{errores.aceptaTerminos}</p>}
                    <label className='flex justify-center items-center mb-4 label--container__div'>
                        <input
                            className='h-4 w-4 mx-2'
                            type="checkbox"
                            id="aceptaTerminos"
                            name="aceptaTerminos"
                            checked={aceptaTerminos}
                            onChange={handleChange}
                        />
                        Acuerdo de términos y uso
                    </label>

                </div>
                <button
                    className='w-[10rem] h-[3rem] mx-auto bg-Green text-white rounded-3xl'
                    type="submit"
                    onClick={() => setFormularioActual(1)}
                >
                    Siguiente
                </button>
            </form>
        </section>
    );
}
