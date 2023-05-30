import React from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";

function Login() {
  const navigate = useNavigate();

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);

    navigate("/");
  };

  const required = (value) => (value ? undefined : "Required");

  return (
    <>
      <div className="body-form">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <div className="sign-form">
              <form onSubmit={handleSubmit}>
                <Field name="firstName" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <div className="logo"></div>
                      <h4>Happy App</h4>
                      <h3>Signup to Dashboard </h3>
                      <p>Enter your Details</p>

                      <label>FIRST NAME</label>
                      <br />
                      <input {...input} type="text" placeholder="FirstName" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="lastname" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <label>LAST NAME</label>
                      <br />
                      <input {...input} type="text" placeholder="Lastname" />

                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="Email Address" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <label>EMAIL</label>
                      <br />
                      <input
                        {...input}
                        type="text"
                        placeholder="Email Address"
                      />

                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="password" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <label>PASSWORD</label>
                      <br />
                      <input
                        {...input}
                        type="password"
                        placeholder="Password"
                      />
                      <i>
                        <AiFillEyeInvisible />
                      </i>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="confirm-password" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <label>CONFIRM PASSWORD</label>
                      <br />
                      <input
                        {...input}
                        type="password"
                        placeholder=" Confirm Password"
                      />
                      <i>
                        <AiFillEyeInvisible />
                      </i>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <div className="buttons">
                  <button type="submit" disabled={submitting}>
                    sign up
                  </button>
                </div>
              </form>
            </div>
          )}
        />
      </div>
    </>
  );
}
export default Login;
