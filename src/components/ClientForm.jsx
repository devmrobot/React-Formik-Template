import React from "react";
import { Formik, Form } from "formik";

const ClientForm = () => {
  return (
  <Formik
    initialValues={{
        firstName:'',
        lastName:'',
        DateOfBirth:'',
        email:'',
        password:'',
        number:'',
        adress:'',
        zipCode:'',
        city:''
    }}
  >
      {formik => {
            <Form>
                 
            </Form>
      }}
  </Formik>
  ); 
}

export default ClientForm;
