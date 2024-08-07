import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';


const SingleCardStarship = () => {
  const { id } = useParams();
  const { store } = useContext(Context);
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/starships/${id}`);
        if (!response.ok) throw new Error("Failed to fetch starship details");
        const data = await response.json();
        const starshipDetails = {
          name: data.result.properties.name,
          model: data.result.properties.model,
          starshipClass: data.result.properties.starship_class,
          manufacturer: data.result.properties.manufacturer,
          costInCredits: data.result.properties.cost_in_credits,
          length: data.result.properties.length,
          crew: data.result.properties.crew,
          passengers: data.result.properties.passengers,
          maxAtmospheringSpeed: data.result.properties.max_atmosphering_speed,
          hyperdriveRating: data.result.properties.hyperdrive_rating,
          MGLT: data.result.properties.MGLT,
          cargoCapacity: data.result.properties.cargo_capacity,
          consumables: data.result.properties.consumables,
          description: "Detailed description here",
          imageUrl: `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
        };
        setStarship(starshipDetails);
      } catch (error) {
        console.error("Failed to fetch starship details", error);
      }
    };

    fetchStarshipDetails();
  }, [id]);

  if (!starship) {
    return <div>Loading...</div>;
  }

  const handleImageError = (e) => {
    e.target.src = "./assets/img/big-placeholder.jpg";
  };

  return (
    <div className="container">
      <div className="row mb-4 align-items-center">
        <div className="col-md-6">
          <img
            src={starship.imageUrl}
            alt={starship.name}
            className="img-fluid"
            onError={handleImageError}
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4">{starship.name}</h1>
          <p className="lead">{starship.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-bordered text-center">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Model</th>
                <th>Class</th>
                <th>Manufacturer</th>
                <th>Cost</th>
                <th>Length</th>
                <th>Crew</th>
                <th>Passengers</th>
                <th>Speed</th>
                <th>Hyperdrive Rating</th>
                <th>MGLT</th>
                <th>Cargo Capacity</th>
                <th>Consumables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{starship.name}</td>
                <td>{starship.model}</td>
                <td>{starship.starshipClass}</td>
                <td>{starship.manufacturer}</td>
                <td>{starship.costInCredits}</td>
                <td>{starship.length}</td>
                <td>{starship.crew}</td>
                <td>{starship.passengers}</td>
                <td>{starship.maxAtmospheringSpeed}</td>
                <td>{starship.hyperdriveRating}</td>
                <td>{starship.MGLT}</td>
                <td>{starship.cargoCapacity}</td>
                <td>{starship.consumables}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SingleCardStarship;
