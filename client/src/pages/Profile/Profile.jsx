import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserPosts from "../UserPosts/UserPosts";
import Loading from "../Loading/Loading";
import MyProfile from "./MyProfile";

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://challengeme-uy0s.onrender.com/users/" + `${id}`)
      .then((resp) => {
        setUser(resp.data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error:", error, "Response:", error.response)
      );
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <MyProfile user={user} />
          <UserPosts user={user} />
        </div>
      )}
    </>
  );
};

export default Profile;
