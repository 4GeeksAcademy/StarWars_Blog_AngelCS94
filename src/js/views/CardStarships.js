import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext'; 

const CardStarships = () => {
  const { store } = useContext(Context);

  const handleImageError = (e) => {
    e.target.src = 'https://i.kym-cdn.com/entries/icons/original/000/031/969/cover5.jpg'; // Ruta a la imagen de respaldo
  };

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

  return (
    <div className="container my-4">
      <h1 className="">Starships</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.starships.map((starship, index) => (
          <div className="col-md-4 mb-3" key={index} style={{ minWidth: '300px' }}>
            <div className="card">
              <img 
                src={getStarshipImage(starship)} 
                className="card-img-top" 
                alt={starship.name} 
                onError={handleImageError} 
              />
              <div className="card-body">
                <h5 className="card-title">{starship.name}</h5>
                <Link to={`/SingleCardStarship/${starship.uid}`} className="btn btn-primary">Learn more!</Link>
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
