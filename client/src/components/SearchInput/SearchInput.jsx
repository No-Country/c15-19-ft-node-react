import React, { useState } from "react";

const SearchInput = ({ onSearch, onFilterChange, showFilterButton }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

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
    console.log("Búsqueda enviada:", searchTerm);
  };

  return (
    <article className="flex flex-row lg:justify-between items-center w-[86vw]">
      <form
        className="mx-1 min-w-[19rem] max-w-[40vw] w-[30vw] flex items-center justify-center bg-gray-50 h-[3rem] px-[1rem] border-2 rounded-full shadow-xl"
        onSubmit={handleSubmit}
      >
        <input
          className="min-w-[15rem] w-[30vw] max-w-[40vw] py-1 px-2 mr-3 rounded-xl placeholder:font-light outline-none"
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
      {showFilterButton && (
        <button className="hidden lg:block" action="filtered">
          <label className="dark:text-white text-lg mx-3" htmlFor="filter">
            Filtrar Categorias
          </label>
          <select
            className="shadow-xl w-[14rem] dark:placeholder:text-gray-500 mr-[1rem] px-4 outline-none rounded-full h-[2rem]"
            id="filter"
            name="filter"
            onChange={handleFilterChange}
          >
            <option className="mx-4" value="all">
              Todas las categorías
            </option>
            <option value="recent">Recientes</option>
            <option value="most-wanted">Más buscadas</option>
            <option value="name">Por nombre</option>
          </select>
        </button>
      )}
    </article>
  );
};

export default SearchInput;
