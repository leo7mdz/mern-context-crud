import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import helpHTTP from "../helpers/requestAPI";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Generar POST</h2>
      <Formik
        initialValues={{ title: "", description: "" }}
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
          console.log(values);
          await helpHTTP().post(values);
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
