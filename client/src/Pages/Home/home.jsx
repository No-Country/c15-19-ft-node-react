import CardUser from "../../components/CardUser.jsx/CardUser";

import React from "react";
import tempData from "./temp-data";

function Home() {
  return (
    <div>
      {tempData.map((element) => {
        return <CardUser key={element.avatar} {...element} />;
      })}
    </div>
  );
}

export default Home;

