import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchInput from "../../components/SearchInput/SearchInput";

export default function Category() {
  const { name } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch(
          `https://challenge-me-backend-uu82.onrender.com/categories/?challenge=true&name=${name}`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          setCategory(data[0]);
        } else {
          console.error("No se encontró la categoría");
        }
      } catch (error) {
        console.error("Error al obtener la categoría:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [name]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleLikeClick = (challengeIndex) => {
    // Crear una copia del estado actual de la categoría
    const updatedCategory = { ...category };
    // Cambiar el estado de "like" para el desafío específico
    updatedCategory.challenges[challengeIndex].liked =
      !updatedCategory.challenges[challengeIndex].liked;
    // Actualizar el estado de la categoría
    setCategory(updatedCategory);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!category) {
    return <div>No se encontró la categoría</div>;
  }

  const filteredChallenges = category.challenges.filter((challenge) =>
    challenge.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="flex flex-col items-center justify-center lg:flex pt-[3rem]">
      <SearchInput onSearch={handleSearch} showFilterButton={false} />
      <div className="flex flex-wrap items-center mt-[2rem] justify-center">
        {filteredChallenges.map((challenge, index) => (
          <div key={challenge._id} className="m-[1rem] mb-[8rem]">
            <img
              className="w-[18rem] h-[18rem] rounded-xl shadow-2xl mb-4"
              src={challenge.media[0]?.url}
              alt=""
            />
            <button
              className="dark:text-white absolute mt-[-18.5rem] ml-[15.5rem]"
              onClick={() => handleLikeClick(index)}
            >
              {challenge.liked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-red-800 absolute"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 absolute"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              )}
            </button>
            <div className="flex flex-col items-start justify-center lg:absolute w-[18rem] px-2 mt-[1rem]">
              <h3 className="underline underline-offset-2 font-semibold lg:w-[auto] dark:text-white">
                {challenge.title}
              </h3>
              <p className="w-[15rem] mt-2 text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                {challenge.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
