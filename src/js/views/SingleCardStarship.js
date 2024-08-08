import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import './SingleCardPersonaje.css';  // Asegúrate de que la ruta sea correcta

const SingleCardStarship = () => {
  const { id } = useParams();
  const { store } = useContext(Context);
  const [starship, setStarship] = useState(null);

  const getStarshipImage = (starship) => {
    switch (starship.name) {
      case "CR90 corvette":
        return 'https://static.wikia.nocookie.net/esstarwars/images/0/0a/Corvette_negvv.jpg/revision/latest?cb=20081218232212';
      case "Star Destroyer":
        return 'https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900';
      case "Sentinel-class landing craft":
        return 'https://cdnb.artstation.com/p/marketplace/presentation_assets/001/723/257/large/file.jpg?1652847948';
      case "Death Star":
        return 'https://static.wikia.nocookie.net/starwars/images/e/ee/DeathStar2.jpg/revision/latest/scale-to-width-down/1000?cb=20150615015212';
      case "Millennium Falcon":
        return 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/03/Star-Wars-Impractical-Reliable-Ships-Millennium-Falcon.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5';
      case "TIE Advanced x1":
        return 'https://static.wikia.nocookie.net/battlefront/images/3/3f/Darth_Vaders_Tie_Advanced.s.png/revision/latest?cb=20191231214645';
      case "Executor":
        return 'https://static.wikia.nocookie.net/esstarwars/images/3/30/Executor_BF2.png/revision/latest?cb=20190810045012';
      case "X-wing":
        return 'https://p.turbosquid.com/ts-thumb/Zs/EGvWk6/WP2ajMyC/xwingtopleft_01_open_01/jpg/1444815293/1600x1600/fit_q99/304f8ce0ff1941b3c5e974f8bdc0a85db4d298ea/xwingtopleft_01_open_01.jpg';
      case "Rebel transport":
        return 'https://static.wikia.nocookie.net/swse/images/e/eb/GR-75_Medium_Transport.jpg/revision/latest?cb=20180927164807';
      default:
        return starship.imageUrl;
    }
  };

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
          imageUrl: getStarshipImage({ name: data.result.properties.name }) // Usamos la función aquí
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
          <h1 className="display-4 text-white">{starship.name}</h1>
          <p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table text-center">
            <thead className="thead-light text-white">
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
