import CardUser from "../../components/CardUser/CardUser";
import React, { useEffect, useState } from "react";
import Api from "../../utils/api";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Home() {
  const [cards, setCards] = useState([]);
  const {auth, loading} = useAuth()

  const api = new Api();

  useEffect(() => {
    api
      .getCardsChallenges()
      .then((data) => {
        console.log(data);
        setCards(data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div className="relative z-0">
      <Outlet />

      {cards.map((element) => {
        return <CardUser key={element._id} {...element} />;
      })}

    </div>
  );
}

export default Home;
