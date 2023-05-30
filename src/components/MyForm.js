import React from "react";
import { Form, Field } from "react-final-form";

const MyForm = () => {
  const onSubmit = (Submit) => {
    console.log("Submit", Submit);
  };

  return (
    <>
      <div>MyForm</div>
      <Form
        onSubmit={onSubmit}
        // validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name">
              {({ input }) => (
                <input {...input} placeholder="name" typeof="text" />
              )}
            </Field>
            <Field name="rollno">
              {({ input }) => (
                <input {...input} placeholder="rollno" typeof="text" />
              )}
            </Field>
            <h2>Simple Default Input</h2>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Phone</label>
              <Field name="phone" component="input" placeholder="Phone" />
            </div>
            <div>
              <label>Email</label>
              <Field
                name="email"
                component="input"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label>Password</label>
              <Field name="password" component="input" placeholder="Password" />
              <Field name="button" component="button">
                {({ input }) => (
                  <button {...input} type="submit">
                    Submit
                  </button>
                )}
              </Field>
            </div>
            <h2>An Arbitrary Reusable Input Component</h2>
          </form>
        )}
      />
    </>
  );
};

export default MyForm;
