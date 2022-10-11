import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="card m-2">
      <h4 className="card-header">{title}</h4>
      <div className="card-body">
        <p className="card-text">{description}</p>
        <button className="btn btn-primary  m-2">Editar</button>
        <button className="btn btn-danger">Eliminar</button>
      </div>
    </div>
  );
};

export default Card;
