import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchInput from "../../components/SearchInput/SearchInput";
import * as categoryService from "../../Utils/apiCategoryService";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    categoryService
      .getAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    filterCategories();
  }, [searchTerm, categories]);

  const filterCategories = () => {
    let filteredCategories = categories;

    if (searchTerm) {
      filteredCategories = filteredCategories.filter((category) =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filteredCategories);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <section className="flex flex-col items-center mt-[4rem]">
      <SearchInput onSearch={handleSearch} />

      {filteredData.map((category, index) => (
        <article
          key={index}
          className="flex flex-col mt-[2rem] w-[84vw] mx-[2rem]"
        >
          <div className="flex flex-row justify-between items-center mb-[.5rem] w-[85vw]">
            <h2 className="m-0 dark:text-white">{category.name}</h2>
            <Link
              to={`/categories/${category.name}`} // Ajusta la ruta según tu estructura de rutas
              className="cursor-pointer text-black text-xs hover:underline dark:text-white lg:mr-[2rem]"
            >
              Ver más
            </Link>
          </div>
          {/* Puedes agregar aquí la lógica para cargar las imágenes de la categoría */}
        </article>
      ))}
    </section>
  );
}
