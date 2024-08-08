import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext'; 
import './SingleCardPersonaje.css'; // Asegúrate de que la ruta sea correcta

const SingleCardPersonaje = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${parseInt(id)}`);
        const data = await response.json();
        const characterDetails = {
          name: data.result.properties.name,
          birthYear: data.result.properties.birth_year,
          gender: data.result.properties.gender,
          height: data.result.properties.height,
          skinColor: data.result.properties.skin_color,
          eyeColor: data.result.properties.eye_color,
          description: "Detailed description here",
          imageUrl: `https://starwars-visualguide.com/assets/img/characters/${parseInt(id)}.jpg`
        };
        setPersonaje(characterDetails);
      } catch (error) {
        console.error("Failed to fetch character details", error);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (!personaje) {
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
            src={personaje.imageUrl}
            alt={personaje.name}
            className="img-fluid"
            onError={handleImageError}
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4 text-white">{personaje.name}</h1>
          <p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table text-center">
            <thead className="thead-light text-white">
              <tr>
                <th>Name</th>
                <th>Birth Year</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Skin Color</th>
                <th>Eye Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{personaje.name}</td>
                <td>{personaje.birthYear}</td>
                <td>{personaje.gender}</td>
                <td>{personaje.height}</td>
                <td>{personaje.skinColor}</td>
                <td>{personaje.eyeColor}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SingleCardPersonaje;
