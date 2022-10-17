import { createContext, useContext, useEffect, useState } from "react";
import helpHTTP from "../src/helpers/requestAPI";

const PostContext = createContext();

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error("Post Provider is missing");
  return context;
};

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const { get, post, put, del } = helpHTTP();

  useEffect(() => {
    (async () => {
      const data = await get();

      setPosts(data);
    })();
  }, []);

  const getPost = async (id) => {
    const post = await get(id);
    return post;
  };

  const createPost = async (data) => {
    const newPost = await post(data);
    setPosts([...posts, newPost]);
  };

  const updatePost = async (id, newData) => {
    const updatePost = await put(id, newData);
    /*  const newPost = posts.map((post) => (post._id === id ? updatePost : post));
    setPosts(newPost); */
    setPosts(posts.map((post) => (post._id === id ? updatePost : post)));
  };

  const deletePost = async (id) => {
    const deletePost = del(id);
    setPosts(posts.filter((post) => post._id !== id));
  };

  const data = { posts, createPost, deletePost, updatePost, getPost };

  return <PostContext.Provider value={data}>{children}</PostContext.Provider>;
};

export default PostProvider;
