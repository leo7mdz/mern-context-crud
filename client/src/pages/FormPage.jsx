import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../../context/PostContext";
import { useEffect } from "react";

const FormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const { createPost, updatePost, getPost } = usePosts();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    (async () => {
      const data = await fetch(`http://localhost:4000/tasks/${id}`),
        res = await data.json();
      setPost({ title: res.title, description: res.description });

      // console.log(res)
    })();
  }, []);

  return (
    <div>
      <h2>Generar POST</h2>
      <Formik
        initialValues={post}
        enableReinitialize
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Title is required";
          }
          if (!values.description) {
            errors.description = "Description is required";
          }
          console.log(errors);
          return errors;
        }}
        onSubmit={async (values, actions) => {
          if (id) {
            updatePost(id, values);
          } else {
            createPost(values);
          }

          actions.resetForm();
          navigate("/");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field type="text" name="title" placeholder="Title..." />
            <ErrorMessage name="title" component="div" />
            <Field
              type="text"
              name="description"
              placeholder="description..."
            />
            <ErrorMessage name="description" component="div" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormPage;
