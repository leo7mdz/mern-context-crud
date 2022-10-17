let URL = "http://localhost:4000/tasks";

const helpHTTP = () => {
  const requestAPI = async (url, options = {}) => {
    try {
      const res = await fetch(url, options);

      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const get = () => {
    return requestAPI(URL);
  };

  const post = (post) => {
    console.log(post);
    return requestAPI(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };

  const put = (id, newData) => {
    return requestAPI(`${URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  const del = (id) => {
    return requestAPI(`${URL}/${id}`, {
      method: "DELETE",
    });
  };

  return {
    get,
    post,
    put,
    del,
  };
};

export default helpHTTP;
