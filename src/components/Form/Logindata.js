import React, { useEffect, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { IconButton, Input, InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "./Formdata.css";
// import PersonIcon from "@material-ui/icons/Person";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

export default function Logindata() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // match data with signup data-------------------------------------------

  const [signupdata, setItems] = useState([]);

  useEffect(() => {
    const signupdata = JSON.parse(localStorage.getItem("signupdata"));
    if (signupdata) {
      setItems(signupdata);
    }
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    console.log(signupdata, "signupdata>>>");
    if (signupdata) {
      if (data) {
        if (
          signupdata?.email === data?.email &&
          signupdata?.password === data?.password
        ) {
          //   alert("Successfuly Registered");
          navigate(`/homepage`);
        } else {
          alert("Incurect UserName and Password!");
        }
      }
    }

    //    localStorage.setItem("logindata", JSON.stringify(data));
    // alert("Successfuly Registered.", data);
  };
  // -----------------------------------------------------------------------

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

  // ------------------------------------------------------------------------
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const CreateAccount = () => {
    navigate(`/register`);
  };

  return (
    <>
      <div className="maincontainerblur">
        <div className="maincontainer">
          <div className="maindiv">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="formdata"
              autocomplete="off"
            >
              <div className="topline">
                <PermContactCalendarIcon className="logoicon" />
                <h3 style={{ color: "#dfdddd", marginBottom: "111px" }}>
                  LogIn 
                </h3>
                {/* <Form.Field>
                <Input
                  placeholder="Name"
                  className="input"
                  type="text"
                  {...register("name", { required: true, maxLength: 20 })}
                />
              </Form.Field>
              {errors.name && <p className="errorMsg">Please check the Name</p>} */}

                <Form.Field>
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
                <Button className="rgbtn" type="submit" onClick={handleClick}>
                  Submit
                </Button>
                <div className="creatediv">
                  <Button onClick={CreateAccount} className="create left">
                    <ChevronLeftIcon className="lefticon" />
                    Create Account
                  </Button>
                  <Button className="create">
                    Forgot Password
                    <ChevronRightIcon />
                  </Button>
                </div>
                {/* <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  This is a success message! for Login
                </Alert>
              </Snackbar> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
