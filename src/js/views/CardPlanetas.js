import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardPlanetas = () => {
  const { store } = useContext(Context);

  const handleImageError = (e) => {
    e.target.src = 'https://i.imgflip.com/50grnm.png'; // Ruta a la imagen de respaldo
  };

  return (
    <div className="container my-4">
      <h1 className="">Planetas</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.planetas.map((planeta, index) => (
          <div className="col-md-4 mb-3" key={index} style={{ minWidth: '300px' }}>
            <div className="card">
              <img 
                src={planeta.imageUrl} 
                className="card-img-top" 
                alt={planeta.name} 
                onError={handleImageError} 
              />
              <div className="card-body">
                <h5 className="card-title">{planeta.name}</h5>
                <Link to={`/SingleCardPlaneta/${planeta.uid}`} className="btn btn-primary">Learn more!</Link>
                <button className="btn btn-warning ms-2"><i className="bi bi-heart"></i></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPlanetas;
