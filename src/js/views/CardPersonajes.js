import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import './CardPersonajes.css'; // Importamos el archivo CSS

const CardPersonajes = () => {
  const { store, actions } = useContext(Context);

  const isFavorite = (personaje) => {
    return store.favoritos.some(fav => fav.uid === personaje.uid && fav.type === "personaje");
  };

  return (
    <div className="container my-4">
      <h1 className="text-white text-start">Personajes</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.personajes.map((personaje, index) => (
          <div className="col-md-4 mb-3" key={index} style={{ minWidth: '300px' }}>
            <div className="card h-100" style={{ 
                backgroundColor: 'rgba(2, 2, 2, 0.8)', /* Fondo verde */
                boxShadow: '0 4px 8px rgba(255, 0, 0, 0.5)' /* Sombra roja */
              }}>
              <div className="card-img-wrapper box" style={{ overflow: 'hidden', height: '400px' }}>
                <img 
                  src={personaje.imageUrl} 
                  className="card-img-top img-fluid" 
                  alt={personaje.name} 
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-white">{personaje.name}</h5>
                <div className="mt-auto">
                  <Link to={`/SingleCardPersonaje/${personaje.uid}`} className="btn btn-secondary">Learn more!</Link>
                  <button 
                    className="btn btn-warning ms-2" 
                    onClick={() => actions.addFavorito({ ...personaje, type: "personaje" })}
                    onMouseEnter={(e) => {
                        if (!isFavorite(personaje)) {
                            e.currentTarget.querySelector('svg').style.color = 'yellow';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isFavorite(personaje)) {
                            e.currentTarget.querySelector('svg').style.color = '';
                        }
                    }}
                  >
                    <FontAwesomeIcon 
                      icon={isFavorite(personaje) ? faSolidHeart : faRegularHeart} 
                      style={{ color: isFavorite(personaje) ? 'black' : 'yellow' }} 
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPersonajes;
