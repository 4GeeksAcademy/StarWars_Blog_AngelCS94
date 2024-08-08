import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import './CardPlanetas.css';

const CardPlanetas = () => {
    const { store, actions } = useContext(Context);

    const isFavorite = (planeta) => {
        return store.favoritos.some(fav => fav.uid === planeta.uid && fav.type === "planeta");
    };

    const getPlanetaImage = (planeta) => {
        if (planeta.name === "Tatooine") {
            return 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357';
        }
        return planeta.imageUrl;
    };

    return (
        <div className="container my-4">
            <h1 className="text-white text-start">Planetas</h1>
            <div className="row flex-nowrap overflow-auto">
                {store.planetas.map((planeta, index) => (
                    <div className="col-md-4 mb-3" key={index} style={{ minWidth: '300px' }}>
                        <div className="card h-100"style={{ 
                backgroundColor: 'rgba(2, 2, 2, 0.8)', /* Fondo verde */
                boxShadow: '0 4px 8px rgb(0, 128, 0, 0.5)' /* Sombra roja */
              }}>
                            <img 
                                src={getPlanetaImage(planeta)} 
                                className="card-img-top" 
                                alt={planeta.name} 
                            />
                            <div className="card-body">
                                <h5 className="card-title text-white">{planeta.name}</h5>
                                <Link to={`/SingleCardPlaneta/${planeta.uid}`} className="btn btn-secondary">Learn more!</Link>
                                <button 
                                    className="btn btn-warning ms-2" 
                                    onClick={() => actions.addFavorito({ ...planeta, type: "planeta" })}
                                    onMouseEnter={(e) => {
                                        if (!isFavorite(planeta)) {
                                            e.currentTarget.querySelector('svg').style.color = 'yellow';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isFavorite(planeta)) {
                                            e.currentTarget.querySelector('svg').style.color = '';
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon 
                                        icon={isFavorite(planeta) ? faSolidHeart : faRegularHeart} 
                                        style={{ color: isFavorite(planeta) ? 'black' : 'yellow' }} 
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardPlanetas;
