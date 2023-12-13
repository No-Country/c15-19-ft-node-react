import React, { useState, useEffect } from "react";

export default function ButtonToggle() {
    // Inicializa el estado con el valor almacenado en localStorage o el valor predeterminado del sistema
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" || (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    // Actualiza el tema y guarda en localStorage cuando cambia el estado del toggle
    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => {
            const newDarkMode = !prevDarkMode;
            localStorage.setItem("theme", newDarkMode ? "dark" : "light");
            return newDarkMode;
        });
    };

    // Aplica el tema al cuerpo del documento cuando cambia el estado del toggle
    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.remove("light");
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
            root.classList.add("light");
        }
    }, [darkMode]);

    return (
        <label className={`absolute w-[3.1rem] ml-[8rem] h-[1.5rem] cursor-pointer ${darkMode ? "dark" : ""}`}>
            <input type="checkbox" className="hidden peer" checked={darkMode} onChange={toggleDarkMode} />
            <div className={`top-0 left-0 w-full h-full bg-white dark:bg-[#202023] rounded-[20px] ${darkMode ? "peer-checked:bg-green-600" : ""} transition-colors duration-300`} />
            <div className={`absolute top-[4.2px] left-[5px] w-[1rem] h-[1rem] bg-gray-200 ${darkMode ? "peer-checked:bg-white dark:bg-[#0A0A0B] peer-checked:translate-x-[25px] dark:peer-checked:bg-[#0A0A0B]" : ""} rounded-full transition-transform duration-300`} />
        </label>
    );
}
