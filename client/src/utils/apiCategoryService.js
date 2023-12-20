const API_URL = "https://challenge-me-backend-uu82.onrender.com/categories";

export const getAllCategories = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const getCategoryByName = async (name) => {
  const response = await fetch(`${API_URL}/?name=${encodeURIComponent(name)}`);
  const data = await response.json();
  return data;
};

export const getCategoryChallenges = async (name) => {
  const response = await fetch(
    `${API_URL}/?challenge=true&name=${encodeURIComponent(name)}`
  );
  const data = await response.json();
  return data;
};

export const createCategory = async (category) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  const data = await response.json();
  return data;
};

export const updateCategory = async (id, category) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  const data = await response.json();
  return data;
};

export const deleteCategoryById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
