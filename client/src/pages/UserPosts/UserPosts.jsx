import React from "react";
import "./useposts.css";
const UserPosts = (props) => {
  const usersProp = props.user;

  return (
    <div className="parent">
      {usersProp.challenges?.map((chal) =>
        chal.media?.map((med) => (
          <img
            key={""}
            className="lg:h-80 w-auto h-40 md:h-60 lg:w-[25vw]"
            src={med.url}
            alt={""}
          />
        ))
      )}
    </div>
  );
};
export default UserPosts;
