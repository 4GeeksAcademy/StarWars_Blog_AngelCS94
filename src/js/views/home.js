import React from "react";
import CardPlanetas from "./CardPlanetas";
import CardPersonajes from "./CardPersonajes";
import Cardstarships from "./CardStarships";

export const Home = () => (
  <div
    className="text-center mt-5"
    style={{
      backgroundImage: "url('https://wallpapercave.com/wp/wp3172265.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      padding: "20px",
      color: "white"
    }}
  >
    <div
      className="container p-3"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "10px"
      }}
    >
      <CardPlanetas />
      <CardPersonajes />
      <Cardstarships />
    </div>
  </div>
);
