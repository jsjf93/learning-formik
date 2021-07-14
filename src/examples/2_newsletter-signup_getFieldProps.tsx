import React from 'react';
import { FormikErrors, useFormik } from 'formik';

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

const SignupForm2 = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">
        First name
        <input id="firstName" type="text" {...formik.getFieldProps('firstName')} />
      </label>
      {formik.touched.firstName && formik.errors.firstName && <div>{formik.errors.firstName}</div>}

      <label htmlFor="lastName">
        Last name
        <input id="lastName" type="text" {...formik.getFieldProps('lastName')} />
      </label>
      {formik.touched.lastName && formik.errors.lastName && <div>{formik.errors.lastName}</div>}

      <label htmlFor="email">
        Email
        <input id="email" type="email" {...formik.getFieldProps('email')} />
      </label>
      {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm2;
