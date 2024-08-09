import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const handleRemove = (e, uid, type) => {
        e.stopPropagation();  
        actions.removeFavorito(uid, type);
    };

    return (
        <nav className="navbar navbar-dark mb-3 sticky-top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" alt="Logo" className="navbar-brand mb-0 h1" style={{ height: '50px', marginLeft:"15px" }} />
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle" style={{marginRight:"15px"}} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites <span className="badge bg-secondary">{store.favoritos.length}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        {store.favoritos.length === 0 ? (
                            <li className="dropdown-item">No favorites</li>
                        ) : (
                            store.favoritos.map((item, index) => (
                                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                    <Link to={`/SingleCard${item.type.charAt(0).toUpperCase() + item.type.slice(1)}/${item.uid}`}>
                                        {item.name}
                                    </Link>
                                    <button 
                                        className="btn btn-danger btn-sm" 
                                        style={{ width: '30px' }} 
                                        onClick={(e) => handleRemove(e, item.uid, item.type)}
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
