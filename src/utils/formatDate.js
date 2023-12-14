// utils/formatDate.js

// Ejemplo de función para formatear una fecha como "YYYY-MM-DD"
const formatAsYYYYMMDD = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Ejemplo de función para formatear una fecha como "DD/MM/YYYY"
const formatAsDDMMYYYY = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Puedes agregar más funciones de formato según tus necesidades

export { formatAsYYYYMMDD, formatAsDDMMYYYY };
