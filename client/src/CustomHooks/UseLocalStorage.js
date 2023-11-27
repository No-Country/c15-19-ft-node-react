// customHooks/useLocalStorage.js

import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  // Obtener el valor almacenado en el localStorage al inicio
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Utilizar useState para gestionar el valor en el componente
  const [value, setValue] = useState(initial);

  // Función para actualizar el valor en el estado y en el localStorage
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
};

export default useLocalStorage;
