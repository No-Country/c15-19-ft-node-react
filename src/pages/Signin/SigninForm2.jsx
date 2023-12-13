import React from 'react';
import "./Signin.css";

export default function SigninForm2({ handleChange, handleSubmit, state, setCurrentForm }) {
    const getMaximumDate = () => {
        const dateCurrent = new Date();
        dateCurrent.setFullYear(dateCurrent.getFullYear() - 18);
        return dateCurrent.toISOString().split('T')[0];
    };

    const validateForm = () => {
        const newBugs = {};

        // Validar nombre de usuario
        if (state.username.length < 5) {
            newBugs.name = 'Requerido 5 caracteres';
        }
        // Realiza las validaciones necesarias para el formulario 2
        // Puedes agregar más lógica de validación según tus requisitos

        // Ejemplo: Validar que la fecha de nacimiento sea válida (puede ajustarse según tus necesidades)
        const dateBirth = new Date(state.dateBirth);
        const maximumDate = new Date(getMaximumDate());

        if (dateBirth >= maximumDate) {
            console.log('La fecha de nacimiento no es válida');
            return false;
        }

        // Otras validaciones...

        return true;
    };

    const handleSubmitForm2 = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            console.log('Formulario no cumple con todos los requisitos');
            return;
        }

        console.log('Datos enviados (Formulario 2):', state);
        // Realiza otras acciones necesarias antes de cambiar al siguiente formulario
        // ...

        // Cambia al siguiente formulario
        setCurrentForm(3);
    };

    return (
        <section className='flex flex-col justify-center items-center w-[100vw] h-[70vh] px-[1rem]'>
            <form className='flex flex-col ' onSubmit={handleSubmitForm2}>
                <label
                    className='label--container__div' htmlFor="name">Nombre</label>
                <input
                    className='input--registre__user'
                    placeholder='Nombre'
                    type="text"
                    id="name"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    required
                />
                <label className='label--container__div' htmlFor="lastname">Apellido</label>
                <input
                    className='input--registre__user'
                    placeholder="Apellido"
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={state.lastname}
                    onChange={handleChange}
                    required
                />
                <label
                    className='label--container__div' htmlFor="dateBirth">Fecha de Nacimiento</label>
                <input
                    className='input--registre__user'
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
                    className='label--container__div' htmlFor="gender">Género</label>
                <select
                    className='input--registre__user'
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

                <button className="w-[10rem] h-[3rem] mx-auto mt-[3.5rem] bg-Green rounded-3xl text-white" type='submit'>
                    Siguiente
                </button>
            </form>
        </section>
    );
}