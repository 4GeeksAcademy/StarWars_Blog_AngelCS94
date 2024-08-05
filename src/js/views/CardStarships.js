import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext'; // Asegúrate de que la ruta sea correcta

const CardStarships = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadStarships();
  }, []);

  const handleImageError = (e) => {
    e.target.src = 'https://i.kym-cdn.com/entries/icons/original/000/031/969/cover5.jpg'; // Ruta a la imagen de respaldo
  };

  return (
    <div className="container my-4">
      <h1 className="">Starships</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.starships.map((starship, index) => (
          <div className="col-md-4 mb-3" key={index} style={{ minWidth: '300px' }}>
            <div className="card">
              <img 
                src={starship.imageUrl} 
                className="card-img-top" 
                alt={starship.name} 
                onError={handleImageError} 
              />
              <div className="card-body">
                <h5 className="card-title">{starship.name}</h5>
                <a href="#" className="btn btn-primary">Learn more!</a>
                <button className="btn btn-warning ms-2"><i className="bi bi-heart"></i></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardStarships;
