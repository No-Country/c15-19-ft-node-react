import React, { useState } from "react";

export default function SigninForm1({ handleChange, state, setCurrentForm }) {
    const [error, setError] = useState({});
    const agreeToTerms = state.agreeToTerms || false;

    const resetForm = () => {
        // Implementa la lógica para reiniciar el formulario si es necesario
    };

    const validateForm = () => {
        const newBugs = {};

        // Validar nombre de usuario
        if (state.username.length < 5) {
            newBugs.username = 'Requerido 5 caracteres';
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const allowedEmailDomains = ['gmail.com', 'hotmail.com', 'outlook.com'];
        if (!emailRegex.test(state.email) || !allowedEmailDomains.includes(state.email.split('@')[1])) {
            newBugs.email = 'Email no cumple con los requisitos';
        }

        // Validar contraseña
        const passwordRegex = /^.{6,}$/;
        if (state.password !== state.confirmPassword || !passwordRegex.test(state.password)) {
            newBugs.password = 'Inserta una contraseña valida';
        }

        setError(newBugs);
        return Object.keys(newBugs).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!agreeToTerms) {
            setError({ agreeToTerms: 'Debes aceptar los términos y condiciones' });
            return;
        }

        if (!validateForm()) {
            console.log('Formulario no cumple con todos los requisitos');
            return;
        }

        console.log('Datos enviados:', state);
        resetForm();
        setCurrentForm(2); // Mover esta línea aquí
    };

    return (
        <section className='flex flex-col justify-center items-center w-[100vw] h-[70vh] px-[1rem]'>
            <form
                className='flex flex-col'
                onSubmit={handleSubmit}
            >
                <div className="label--container__div">

                    <label htmlFor="username" className="md:text-xl">Nombre de usuario</label>
                    {error.username && <p className="text-red-500 text-xs">{error.username}</p>}
                </div>
                <input
                    className={`input--registre__user ${error.nombre ? 'border-red-500' : ''}`}
                    placeholder='Nombre de usuario'
                    type="text"
                    id="username"
                    name="username"
                    value={state.username}
                    onChange={handleChange}
                    required
                />
                <div className="label--container__div">
                    <label htmlFor="email" className="md:text-xl" >Email</label>
                    {error.email && <p className="text-red-500 text-xs text-right">{error.email}</p>}
                </div>
                <input
                    className={`input--registre__user ${error.email ? 'border-red-500' : ''}`}
                    placeholder='Email'
                    type="email"
                    id="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    required
                />
                <div className="label--container__div md:text-xl">
                    <label htmlFor="password" className="md:text-xl">Contraseña</label>
                    {error.password && <p className="text-red-500 text-xs text-right">{error.password}</p>}
                </div>
                <input
                    className={`input--registre__user ${error.password ? 'border-red-500' : ''}`}
                    placeholder='Contraseña'
                    type="password"
                    id="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="confirmPassword" className="label--container__div md:text-xl">Confirmar contraseña</label>
                <input
                    className={`input--registre__user ${error.password ? 'border-red-500' : ''}`}
                    placeholder='Confirmar contraseña'
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={state.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <div className="mt-[3rem]">
                    {error.agreeToTerms && <p className="text-red-500 mt-[1rem] text-xs text-center mb-[-0.5rem]">{error.agreeToTerms}</p>}
                    <label className='flex justify-center items-center mb-4 label--container__div'>
                        <input
                            className='h-4 w-4 mx-2'
                            type="checkbox"
                            id="agreeToTerms"
                            name="agreeToTerms"
                            checked={agreeToTerms}
                            onChange={handleChange}
                        />
                        Acuerdo de términos y uso
                    </label>

                </div>
                <button
                    className='w-[10rem] h-[3rem] mx-auto bg-Green text-white rounded-3xl'
                    type="submit"
                    onClick={() => setCurrentForm(1)}
                >
                    Siguiente
                </button>
            </form>
        </section>
    );
}
