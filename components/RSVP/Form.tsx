import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "../commons/Button";
import styled from "styled-components";
// Are They Coming?
// Do you Have a plus one

const RSVPSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function Form1() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      validationSchema={RSVPSchema}
      onSubmit={(values) => {
        // same shape as initial values

        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col space-y-4 pt-2">
          <div>
            <label>Name</label>
            <p>Description</p>
            <StyledFeild name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
          </div>

          <div>
            <label>Email</label>
            <p>Description</p>
            <div>
              <StyledFeild name="email" type="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
          </div>
          <Button type="submit" onClick={() => alert("Hey")}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

const FormInput = styled.div`
  label {
  }

  .description {
  }

  .field {
  }
`;

const StyledFeild = styled(Field)`
  border: 1px solid black;
`;
