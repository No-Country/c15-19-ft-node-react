import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserPosts } from "../UserPosts/UserPosts";
import { Loading } from "../Loading/Loading";
import MyProfile from "./MyProfile";

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    if (id) {
      axios
        .get("https://challenge-me-backend-uu82.onrender.com/users" + `/${id}`)
        .then((resp) => {
          setUser(resp.data);
          setLoading(false);
        })
        .catch((error) =>
          console.error("Error:", error, "Response:", error.response)
        );
    } else {
      setLoading(false);
    }
  }, [id]);

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
