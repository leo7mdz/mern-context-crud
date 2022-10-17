import React from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../../context/PostContext";

const Card = ({ title, description, id }) => {
  const navigate = useNavigate();
  const { deletePost } = usePosts();
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card m-2">
        <h4 className="card-header">{title}</h4>
        <div className="card-body">
          <p className="card-text">{description}</p>
          <button
            onClick={() => navigate(`/form/${id}`)}
            className="btn btn-primary  m-2"
          >
            Editar
          </button>
          <button onClick={() => deletePost(id)} className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
