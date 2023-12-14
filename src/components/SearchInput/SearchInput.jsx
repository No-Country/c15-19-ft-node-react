import React, { useState, useEffect } from "react";

const SearchInput = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all"); // Puede ser 'all', 'created', o 'name'

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilterType(selectedFilter);
    onFilterChange(selectedFilter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Puedes realizar alguna acción con el valor de búsqueda (searchTerm) si es necesario
    console.log("Búsqueda enviada:", searchTerm);
  };

  return (
    <article className="flex flex-row lg:justify-between items-center w-[85vw]">
      <form
        className="ml-[1rem] flex items-center justify-center bg-gray-50 h-[3rem] px-[1rem] border-2 rounded-full shadow-xl"
        onSubmit={handleSubmit}
      >
        <input
          className="min-w-[12rem] w-18rem max-w-[30rem] py-1 px-2 mr-3 rounded-xl placeholder:font-light outline-none"
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Buscar"
        />
        <button className="" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#6B7280"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
      <button className="hidden lg:block" action="filtered">
        <label className="dark:text-white text-lg mx-3" htmlFor="filter">
          Filtrar Categorias
        </label>
        <select
          className="shadow-xl dark:placeholder:text-gray-500 mr-[1rem] px-4 outline-none rounded-full h-[2rem]"
          id="filter"
          name="filter"
          onChange={handleFilterChange}
        >
          <option className="mx-4" value="all">
            Todas las Categorías
          </option>
          <option value="created">Categorías Creadas</option>
          <option value="name">Filtrar por Nombre</option>
        </select>
      </button>
    </article>
  );
};

export default SearchInput;
