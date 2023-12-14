import React, { useState, useEffect } from "react";
import { Loading } from "../Loading/Loading";
import profilePic from "../../images/userimg.png";
const MyProfile = (props) => {
  const [loading, setLoading] = useState(false);
  const user = props.user;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-row item-center px-8 py-5 gap-4 font-pop lg:px-20 lg:pt-20 lg:g">
            <img
              src={user.picture?.length === 0 ? profilePic : user.picture}
              alt={user._id}
              className="rounded-full h-22 sm:h-40 w-20 sm:w-40  mr-2 lg:ml-10 lg:w-60 lg:h-60 md:ml-10 md:mt-3"
            />
            <div className=" flex flex-row gap-10 pl-5 pt-5 lg:gap-[4vw] lg:mt-3 md:pt-10 md:gap-20">
              <div className="hidden sm:flex flex-col lg:text-xl">
                <p className="text-center">1234</p>
                <p className="">Posts</p>
              </div>
              <div className="text-center lg:text-xl">
                <p className="">1234</p>
                <p className="">Followers</p>
              </div>
              <div className="text-center lg:text-xl">
                <p className="">1234</p>
                <p className="">Following</p>
              </div>
            </div>
          </div>
          <div className="lg:flex flex-col lg:absolute lg:mt-[-8rem] lg:ml-[23.3rem]">
            <div className="flex flex-row justify-between lg:justify-between px-8 items-center h-10 lg:mt-[-1rem]">
              <p className="text-2xl truncate mt-[0px]">{user.username}</p>
              <button className="w-[7rem] ml-[36vw] lg:ml-[36vw] lg:flex flex-row justify-evenly items-center lg:justify-center lg:absolute lg:mt-[-8.5rem] h-8 lg:w-40  lg:border-Green lg:p-7 text-xl rounded-lg bg-Green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85]   ">
                Follow
                <select className="pl-0 bg-Green">
                  <option></option>
                  <option>1</option>
                  <option>1</option>
                </select>
              </button>
            </div>
            <p className="text-md font-semibold p-6 lg:my-0 lg:w-[60vw] lg:ml-[0.5vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quasi facere cumque enim ipsam sapiente quam nobis
              dolores? Nesciunt similique reiciendis at quia, modi mollitia rem
              voluptates sapiente dolor corrupti?
            </p>
          </div>

          <section className="flex flex-row justify-between mt-9  h-10 mx-5 lg:px-20 text-white lg:justify-center lg:mx-6 lg:text-2xl ">
            <button className="flex-1 m-1 bg-Green hover:shadow-lg">
              My Posts
            </button>
            <button className="flex-1 m-1 bg-Green hover:shadow-lg">
              Saved
            </button>
            <button className="flex-1 m-1 bg-Green hover:shadow-lg">
              Badges
            </button>
          </section>
        </>
      )}
    </>
  );
};

export default MyProfile;
