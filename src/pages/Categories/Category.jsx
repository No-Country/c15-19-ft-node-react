// Importa los módulos necesarios y define tu componente Category
import React from "react";
import { useParams } from "react-router-dom"; // Asegúrate de importar useParams

export default function Category() {
  // Extrae el parámetro 'name' de la ruta
  const { name } = useParams();

  return (
    <div>
      <h2>{name}</h2>
      {/* Agrega aquí la lógica para mostrar detalles específicos de la categoría */}
    </div>
  );
}
