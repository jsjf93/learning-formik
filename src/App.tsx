import React from 'react';
import SignupForm from './examples/1_newsletter-signup';
import SignupForm2 from './examples/2_newsletter-signup_getFieldProps';
import SignupForm3 from './examples/3_newsletter-signup_context';

function App() {
  return (
    <div className="App">
      <h1>Formik examples</h1>

      <h2>Basic</h2>
      <SignupForm />

      <h2>Less boilerplate with getFieldProps()</h2>
      <SignupForm2 />

      <h2>Less boilerplate with context</h2>
      <SignupForm3 />
    </div>
  );
}

export default App;
