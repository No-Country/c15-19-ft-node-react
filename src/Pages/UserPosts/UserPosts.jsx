import React, { useState } from "react";
import "./useposts.css";
export const UserPosts = (props) => {
  const usersProp = props.user;

  return (
    <div className="parent">
      {/* {usersProp.challenges?.map((chal) =>
          chal.media?.map((med) => (
            <img
              key={""}
              className=""
              src={med.url}
              alt={""}
            />
          ))
        )} */}
      <img
        className="lg:h-80 w-auto h-40 md:h-60 lg:w-[25vw]"
        src="https://res.cloudinary.com/drw6ofniz/image/upload/v1702487742/test-image/biozywa8fk3nmmvozqfm.jpg"
      />
      <img
        className="lg:h-80 w-auto h-40 md:h-60 lg:w-[25vw]"
        src="https://res.cloudinary.com/drw6ofniz/image/upload/v1702487742/test-image/biozywa8fk3nmmvozqfm.jpg"
      />
      <img
        className="lg:h-80 w-auto h-40 md:h-60 lg:w-[25vw]"
        src="https://res.cloudinary.com/drw6ofniz/image/upload/v1702487742/test-image/biozywa8fk3nmmvozqfm.jpg"
      />
      <img
        className="lg:h-80 w-auto h-40 md:h-60 lg:w-[25vw]"
        src="https://res.cloudinary.com/drw6ofniz/image/upload/v1702487742/test-image/biozywa8fk3nmmvozqfm.jpg"
      />
      <img
        className="lg:h-80 w-auto h-40 md:h-60 lg:w-[25vw]"
        src="https://res.cloudinary.com/drw6ofniz/image/upload/v1702487742/test-image/biozywa8fk3nmmvozqfm.jpg"
      />
      <img
        className="lg:h-80 w-auto h-40 md:h-60 lg:w-[25vw]"
        src="https://res.cloudinary.com/drw6ofniz/image/upload/v1702487742/test-image/biozywa8fk3nmmvozqfm.jpg"
      />
    </div>
  );
};
