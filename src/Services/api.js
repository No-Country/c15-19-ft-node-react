// services/api.js

const BASE_URL = "https://api.example.com";

// Ejemplo de función para realizar una solicitud GET
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    throw error;
  }
};

// Ejemplo de función para realizar una solicitud POST
const postData = async (endpoint, body) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Puedes incluir headers de autenticación u otros según sea necesario
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al enviar datos a la API:", error);
    throw error;
  }
};

export { fetchData, postData };
