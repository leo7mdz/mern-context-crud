import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import helpHTTP from "../helpers/requestAPI";

const HomePages = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await helpHTTP().get();
      console.log(data);
      setPosts(data);
    })();
  }, []);

  return (
    <div>
      <h2>Publicaciones</h2>
      {posts.map((post) => (
        <Card
          key={post._id}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default HomePages;
