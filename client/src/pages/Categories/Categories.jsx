import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchInput from "../../components/SearchInput/SearchInput";
import * as categoryService from "../../utils/apiCategoryService";
import * as challengeService from "../../utils/apiChallengeService";
import { Carousel } from "antd";
import ChallengeCard from "../../components/ChallengeCards/ChallengeCards";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [challenges, setChallenges] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    categoryService
      .getAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));

    challengeService
      .getAllChallenges()
      .then((data) => {
        setChallenges(data);
      })
      .catch((error) => console.error("Error fetching challenges:", error));
  }, []);

  useEffect(() => {
    filterCategories();
    setIsSmallScreen(window.innerWidth >= 1371);
  }, [searchTerm, categories, challenges]);

  const filterCategories = () => {
    let filteredCategories = categories
      .map((category) => {
        const categoryChallenges = challenges.filter(
          (challenge) => challenge.categoryId === category._id
        );
        const challengesWithMedia = categoryChallenges.filter(
          (challenge) => challenge.media && challenge.media.length > 0
        );
        const limitedChallenges = challengesWithMedia.slice(0, 4);

        return {
          ...category,
          challenges: limitedChallenges,
        };
      })
      .filter((category) => category.challenges.length > 0);

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

  const handleLikeClick = (categoryIndex, challengeIndex) => {
    const updatedCategories = [...filteredData];
    const updatedChallenges = [...filteredData[categoryIndex].challenges];
    updatedChallenges[challengeIndex].liked =
      !updatedChallenges[challengeIndex].liked;
    updatedCategories[categoryIndex] = {
      ...filteredData[categoryIndex],
      challenges: updatedChallenges,
    };
    setFilteredData(updatedCategories);
  };

  return (
    <section className="flex flex-col items-center mt-[4rem]">
      <SearchInput onSearch={handleSearch} showFilterButton={true} />

      {filteredData.map((category, categoryIndex) => (
        <article key={category._id} className="mt-[2rem]">
          <div className="w-[80vw] mb-">
            <div className="w-[80vw]">
              <Link
                to={{
                  pathname: `/categories/${category.name}`,
                  state: { category },
                }}
                className="mb-2 flex items-center justify-between"
              >
                <h2 className="text-xl font-bold text-black dark:text-white">
                  {category.name}
                </h2>
                <span className="text-xs text-gray-800 dark:text-gray-200">
                  Ver más
                </span>
              </Link>
            </div>
            {isSmallScreen ? (
              <div className="flex flex-row gap-4 mx-[2rem] my-[4rem] lg:w-[80vw] lg:gap-4 w-[10rem] h-[10rem] lg:h-[14rem] ml-0 lg:justify-center">
                {category.challenges.map((challenge, challengeIndex) => {
                  const combinedMedia = challenge.media || [];
                  return (
                    <ChallengeCard
                      showDescription={false}
                      key={challenge._id}
                      challenge={{
                        ...challenge,
                        media: combinedMedia,
                      }}
                      onLikeClick={() =>
                        handleLikeClick(categoryIndex, challengeIndex)
                      }
                    />
                  );
                })}
              </div>
            ) : (
              <Carousel autoplay>
                {category.challenges.map((challenge, challengeIndex) => {
                  const combinedMedia = challenge.media || [];
                  return (
                    <div key={challenge._id}>
                      {combinedMedia.length > 0 && (
                        <ChallengeCard
                          showDescription={false}
                          key={challenge._id}
                          challenge={{
                            ...challenge,
                            media: combinedMedia,
                          }}
                          onLikeClick={() =>
                            handleLikeClick(categoryIndex, challengeIndex)
                          }
                        />
                      )}
                    </div>
                  );
                })}
              </Carousel>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
