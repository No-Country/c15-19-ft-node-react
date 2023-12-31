import React from "react";

import logo from "../../images/logo.png";

const Error = () => {
  return (
    <>
      <div className="flex flex-col align-center items-center justify-center">
        <img
          src={logo}
          className=" object-cover md:object-scale-down"
          alt="logo"
        />
        <h1 className="mt-20 lg:text-4xl text-2xl">
          Error 404 - Page Not Found
        </h1>
        <section className="mt-20">
          <a href="/home">
            <button className="border-Green border-solid bg-Green px-10 py-3 rounded text-white">
              Home
            </button>
          </a>
        </section>
      </div>
    </>
  );
};
export default Error;
