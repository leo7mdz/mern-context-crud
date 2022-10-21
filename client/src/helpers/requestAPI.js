let URL = "http://localhost:4000/tasks";

const helpHTTP = () => {
  const requestAPI = async (url, options = {}) => {
    try {
      const res = await fetch(url, options);

      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const get = () => {
    return requestAPI(URL);
  };

  const post = async (post) => {
    let formData = new FormData();
    for (let key in post) {
      formData.append(key, post[key]);
    }
    return await requestAPI(URL, {
      method: "POST",
      body: formData,
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
