import React from 'react';
import { ErrorMessage, Field, Form, Formik, FormikErrors } from 'formik';

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
};

const validate = (values: FormFields) => {
  const errors: FormikErrors<FormFields> = {};

  if (!values.firstName) errors.firstName = 'Required';
  else if (values.firstName.length > 15) errors.firstName = 'Must be 15 characters or less';

  if (!values.lastName) errors.lastName = 'Required';
  else if (values.lastName.length > 15) errors.lastName = 'Must be 20 characters or less';

  if (!values.email) errors.email = 'Required';
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = 'Invalid email address';

  return errors;
};

const SignupForm3 = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validate={validate}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <Form>
        <label htmlFor="firstName">First name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Last name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Error</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default SignupForm3;
