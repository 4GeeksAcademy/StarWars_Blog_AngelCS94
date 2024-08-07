import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img src="https://via.placeholder.com/150" alt="Logo" className="navbar-brand mb-0 h1" style={{ height: '50px' }} />
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites <span className="badge bg-secondary">{store.favoritos.length}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            {store.favoritos.length === 0 ? (
              <li className="dropdown-item">No favorites</li>
            ) : (
              store.favoritos.map((item, index) => (
                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                  <Link to={`/SingleCardPersonaje/${item.uid}`}>{item.name}</Link>
                  <button className="btn btn-danger btn-sm" onClick={() => actions.removeFavorito(item.uid)}>
                    <i className="bi bi-trash"></i>
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
