import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const CardPersonajes = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container my-4">
      <h1 className="">Personajes</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.personajes.map((personaje, index) => (
          <div className="col-md-4 mb-3" key={index} style={{ minWidth: '300px' }}>
            <div className="card">
              <img src={personaje.imageUrl} className="card-img-top" alt={personaje.name} />
              <div className="card-body">
                <h5 className="card-title">{personaje.name}</h5>
                <Link to={`/SingleCardPersonaje/${personaje.uid}`} className="btn btn-primary">Learn more!</Link>
                <button className="btn btn-warning ms-2" onClick={() => actions.addFavorito(personaje)}><i className="bi bi-heart"></i></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPersonajes;
