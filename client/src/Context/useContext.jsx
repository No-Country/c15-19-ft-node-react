/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useContext, useReducer } from "react";

const MyContext = createContext();

const initialState = {
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkTerminos: false,

};

const registroReducer = (state, action) => {
    switch (action.type) {
        case "ACTUALIZAR_CAMPO":
            return { ...state, [action.field]: action.value };
        case "RESET":
            return initialState;
        default:
            return state;
    }
};

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(registroReducer, initialState);

    const actualizarCampo = (field, value) => {
        dispatch({ type: "ACTUALIZAR_CAMPO", field, value });
    };

    const resetFormulario = () => {
        dispatch({ type: "RESET" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario a tu servidor
        console.log("Datos enviados:", state);
        // Luego puedes reiniciar el formulario
        resetFormulario();
    };

    return (
        <MyContext.Provider value={{ state, actualizarCampo, resetFormulario, handleSubmit }}>
            {children}
        </MyContext.Provider>
    );
};

export default function useMyContext() {
    const context = useContext(MyContext);

    if (!context) {
        throw new Error("useMyContext debe ser utilizado dentro de un ContextProvider");
    }

    return context;
}