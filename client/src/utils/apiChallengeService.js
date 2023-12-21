// apiChallengeService.js

const API_URL = "https://challengeme-uy0s.onrender.com/challenges";

// Función para obtener todos los desafíos
export const getAllChallenges = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error fetching challenges: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
