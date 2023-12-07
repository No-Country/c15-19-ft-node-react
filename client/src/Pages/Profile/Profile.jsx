import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex flex-row item-center px-8 py-5 gap-4 font-pop lg:px-20 lg:pt-20 lg:g">
        <img
          src="https://www.instyle.com/thmb/d9UpNuLx6x1r-TCUcDZby2SewCU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100316-cara-delevingne-lead-ef7a3b8bf6f54a09bc1de6cc7c727056.jpg"
          alt="me"
          className="rounded-full h-22 sm:h-40 w-20 sm:w-40  mr-2 lg:ml-10 lg:w-60 lg:h-60 md:ml-10 md:mt-3"
        />
        <div className=" flex flex-row gap-10 pl-5 pt-5 lg:gap-40 lg:mt-3 md:pt-10 md:gap-20">
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
          <p className="text-2xl truncate mt-[0px]">MercedesG...</p>
          <button className="w-[7rem] lg:flex flex-row justify-evenly items-center lg:justify-center lg:absolute lg:mt-[-8.5rem] lg:ml-[48rem] h-8 lg:w-40  lg:border-Green lg:p-7 text-xl rounded-lg bg-Green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85]   ">
            Follow
            <select className="pl-0 bg-Green">
              <option></option>
              <option>1</option>
              <option>1</option>
            </select>
          </button>
        </div>
        <p className="text-md font-semibold p-6 lg:my-0 lg:w-[60rem] lg:ml-[0.5rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quasi facere cumque enim ipsam sapiente quam nobis dolores? Nesciunt
          similique reiciendis at quia, modi mollitia rem voluptates sapiente
          dolor corrupti?
        </p>
      </div>

      <section className="flex flex-row justify-between mt-9  h-10 mx-5 lg:px-20 text-white lg:justify-center lg:mx-6 lg:text-2xl ">
        <button className="flex-1 m-1 bg-Green hover:shadow-lg">
          My Posts
        </button>
        <button className="flex-1 m-1 bg-Green hover:shadow-lg">Saved</button>
        <button className="flex-1 m-1 bg-Green hover:shadow-lg">Badges</button>
      </section>
    </>
  );
};

export default Profile;
