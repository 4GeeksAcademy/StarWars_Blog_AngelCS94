import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext'; // Asegúrate de que la ruta sea correcta

const CardPlanetas = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPlanetas();
  }, []);

  const handleImageError = (e) => {
    e.target.src = './assets/img/big-placeholder.jpg'; // Ruta a la imagen de respaldo
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

export default CardPlanetas;
