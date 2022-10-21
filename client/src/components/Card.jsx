import React from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../../context/PostContext";

const Card = ({ post }) => {
  const navigate = useNavigate();
  const { deletePost } = usePosts();
  const { title, description, _id, image } = post;
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card m-2">
        {image && (
          <div className="card-header p-0">
            <img className="card-img-top " src={image.url} alt={title} />
          </div>
        )}
        <div className="card-body">
          <div className="card-body p-1">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <button
              onClick={() => navigate(`/form/${_id}`)}
              className="btn btn-primary  m-2"
            >
              Editar
            </button>
            <button onClick={() => deletePost(_id)} className="btn btn-danger">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
