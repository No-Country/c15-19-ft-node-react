import React, { useState, useEffect } from "react";

const ChallengeCard = ({ challenge, onLikeClick, showDescription = true }) => {
  const [liked, setLiked] = useState(challenge.liked);

  const handleLikeClick = () => {
    onLikeClick();
    setLiked((prevLiked) => !prevLiked);
  };

  useEffect(() => {
    setLiked(challenge.liked);
  }, [challenge.liked]);

  // Verificar que challenge.media sea un array
  const mediaArray =
    challenge.media && challenge.media?.length > 0 ? challenge.media : [];

  // Obtener solo la primera imagen
  const firstImage =
    mediaArray.length > 0 && mediaArray[0].typeFile === "image"
      ? mediaArray[0]
      : null;

  return (
    <div className="flex flex-col items-center justify-center">
      {firstImage ? (
        <div>
          {firstImage.typeFile === "image" && (
            <img
              className="w-[18rem] h-[18rem] rounded-xl mb-4"
              src={firstImage.url || ""}
              alt=""
              onError={(e) => console.error("Error al cargar la imagen", e)}
            />
          )}
        </div>
      ) : (
        <p>No hay multimedia disponible</p>
      )}

      <button
        className="dark:text-white absolute mt-[-18.5rem] ml-[13rem]"
        onClick={handleLikeClick}
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

      <div className="w-[14rem] mr-[4rem] px-3 pb-[2rem] mt-[-5rem]">
        <h3 className="w-[16rem] h-[3rem] text-lg underline underline-offset-2 font-semibold lg:w-[auto] dark:text-white">
          {challenge.title}
        </h3>
      </div>

      {showDescription && (
        <p className="w-[15rem] px-3 mt-4 text-gray-600 dark:text-gray-400 text-sm">
          {challenge.description}
        </p>
      )}
    </div>
  );
};

export default ChallengeCard;
