import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../../context/PostContext";
import { useEffect } from "react";

const FormPage = () => {
  const { createPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
  });
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (id) {
        const res = await fetch(`http://localhost:4000/tasks/${id}`),
          data = await res.json();

        setPost({ title: data.title, description: data.description });
      }
    })();
  }, [id]);

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
          console.log(values);

          actions.resetForm();
          navigate("/");
          //console.log(values);
        }}
      >
        {({ setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              className="form-control mb-2"
              type="text"
              name="title"
              placeholder="Title..."
            />
            <ErrorMessage name="title" component="div" />
            <Field
              className="form-control mb-2"
              type="text"
              name="description"
              placeholder="description..."
            />
            <ErrorMessage name="description" component="div" />
            <input
              className="form-control mb-2"
              type="file"
              name="image"
              onChange={(e) => setFieldValue("image", e.target.files[0])}
            />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormPage;
