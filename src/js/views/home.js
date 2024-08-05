import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardPlanetas from "./CardPlanetas";
import CardPersonajes from "./CardPersonajes";
import Cardstarships from "./CardStarships";

export const Home = () => (
	<div className="text-center mt-5">
		
		<CardPlanetas/>
		<CardPersonajes/>
		<Cardstarships/>
	</div>
);
