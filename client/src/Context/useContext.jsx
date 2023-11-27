/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const ContextProvider = ({ children }) => {
    const [data, setData] = useState("Información compartida");

    const updateData = (newData) => {
        setData(newData);
    };

    return (
        <MyContext.Provider value={{ data, updateData }}>
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
