export const registerUser = async (userData) => {
  try {
    const response = await fetch(
      "https://challenge-me-backend-uu82.onrender.com/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      const errorData = await response.json();
      console.log(errorData);
      throw new Error(errorData.message || "Error en la solicitud");
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.message || "Error en la solicitud");
  }
};
