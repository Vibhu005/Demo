import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { IconButton, Input, InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "./Formdata.css";
import PersonIcon from "@material-ui/icons/Person";
import { useNavigate } from "react-router-dom";

export default function Formdata() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (signupdata) => {
    // console.log(data);
    localStorage.setItem("signupdata", JSON.stringify(signupdata));
    alert("Successfuly Registered.", signupdata);
    navigate(`/`);
  };
  const navigate = useNavigate();

  // hide and show password ------------------------------------------------

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // Cpassword-----------------------

  const [cvalues, setCvalues] = React.useState({
    cpassword: "",
    showCpassword: false,
  });

  const handleClickShowCpassword = () => {
    setCvalues({ ...cvalues, showCpassword: !cvalues.showCpassword });
  };

  const handleMouseDownCpassword = (event) => {
    event.preventDefault();
  };

  const handleCpasswordChange = (prop) => (event) => {
    setCvalues({ ...cvalues, [prop]: event.target.value });
  };

  // ------------------------------------------------------------------------

  return (
    <>
      <div className="maindivblur">
        <div className="maincontainer">
          <div className="maindiv">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="formdata"
              autocomplete="off"
            >
              <PersonIcon className="logoicon" />
              <h3 style={{ color: "aliceblue" }}>SignUp</h3>
              <Form.Field>
                {/* <label>First Name</label> */}
                <Input
                  placeholder="Name"
                  className="input"
                  type="text"
                  {...register("name", { required: true, maxLength: 20 })}
                />
              </Form.Field>
              {errors.name && <p className="errorMsg">Please check the Name</p>}
              <Form.Field>
                {/* <label>Last Name</label> */}
                <Input
                  className="input"
                  placeholder="Phone No."
                  type="number"
                  {...register("phone", { required: true, maxLength: 10 })}
                />
              </Form.Field>
              {errors.phone && (
                <p className="errorMsg">Please check the Phone No.</p>
              )}
              <Form.Field>
                {/* <label>Email</label> */}
                <Input
                  className="input"
                  placeholder="Email"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
              </Form.Field>
              {errors.email && (
                <p className="errorMsg">Please check the Email</p>
              )}
              <Form.Field>
                <Input
                  placeholder="Password"
                  className="input"
                  type={values.showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                  })}
                  onChange={handlePasswordChange("password")}
                  value={values.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility className="eyeicon" />
                        ) : (
                          <VisibilityOff className="eyeicon" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Form.Field>
              {errors.password && (
                <p className="errorMsg">Please check the Password</p>
              )}
              <Form.Field>
                <Input
                  placeholder="Confirm Password"
                  className="input"
                  type={cvalues.showCpassword ? "text" : "password"}
                  {...register("cpassword", {
                    required: true,
                    // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                  })}
                  onChange={handleCpasswordChange("cpassword")}
                  value={cvalues.cpassword}
                  endAdornment={
                    
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowCpassword}
                        onMouseDown={handleMouseDownCpassword}
                      >
                        {cvalues.showCpassword ? (
                          <Visibility className="eyeicon" />
                        ) : (
                          <VisibilityOff className="eyeicon" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Form.Field>
              {errors.cpassword && (
                <p className="errorMsg">Please check the Confirm Password</p>
              )}
              <Button className="rgbtn" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
