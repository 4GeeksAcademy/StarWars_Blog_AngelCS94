import React from 'react'

const planetas = [
  { name: "Luke Skywalker", imageUrl: "https://via.placeholder.com/150" },
  { name: "C-3PO", imageUrl: "https://via.placeholder.com/150" },
  { name: "R2-D2", imageUrl: "https://via.placeholder.com/150" },
  { name: "Darth Vader", imageUrl: "https://via.placeholder.com/150" },
  { name: "Leia Organa", imageUrl: "https://via.placeholder.com/150" },
  { name: "Obi-Wan Kenobi", imageUrl: "https://via.placeholder.com/150" },
  { name: "Chewbacca", imageUrl: "https://via.placeholder.com/150" },
  { name: "Han Solo", imageUrl: "https://via.placeholder.com/150" },
  { name: "Yoda", imageUrl: "https://via.placeholder.com/150" },
  { name: "Palpatine", imageUrl: "https://via.placeholder.com/150" },
];

const CardPlanetas = () => {
  return (
    <div className="container my-4">
      <h1 className="">planetas</h1>
      <div className="row flex-nowrap overflow-auto">
        {planetas.map((planeta, index) => (
          <div className="col-md-4 mb-3" key={index} style={{ minWidth: '300px' }}>
            <div className="card">
              <img src={planeta.imageUrl} className="card-img-top" alt={planeta.name} />
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