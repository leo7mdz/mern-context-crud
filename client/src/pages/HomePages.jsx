import React from "react";
import { usePosts } from "../../context/PostContext";
import Card from "../components/Card";

const HomePages = () => {
  const { posts } = usePosts();

  if (!posts) {
    return <p>NO HAY POSTS</p>;
  }

  return (
    <div className="container-lg bg-secondary">
      <div className="row">
        <h2 className="text-center text-white">Publicaciones</h2>
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePages;
