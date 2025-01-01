import React, { useState } from "react";
import "./Register.css";
import TextField from "@mui/material/TextField";
import { Alert, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Stack } from "@mui/system";

const Register = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        "http://localhost:5000/auth/register",
        {
          firstname: inputs.firstname,
          lastname: inputs.lastname,
          email: inputs.email,
          password: inputs.password,
        },
        config
      );

      setInputs({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
      window.alert("You Registered Successfully!");
      navigate("/login");
    } catch (err) {
      console.log("err from reg", err);
      setErrMsg(err?.response?.data);
      setIsError(true);
    }
  };

  const handleInputs = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      {isError && (
        <Stack className="errorstackinlogin">
          <Alert severity="error" variant="filled" className="errortextinlogin">
            <span>{errMsg}</span>
          </Alert>
        </Stack>
      )}
      <form className="regmain" onSubmit={handleSubmit}>
        <Typography variant="h3" className="rformheading">
          REGISTER
        </Typography>
        <TextField
          id="outlined-basicfname"
          label="First Name"
          variant="outlined"
          className="rformfield"
          value={inputs.firstname}
          onChange={handleInputs}
          name="firstname"
          type="text"
          required
          autoComplete="off"
        />
        <TextField
          id="outlined-basiclname"
          label="Last Name"
          variant="outlined"
          className="rformfield"
          value={inputs.lastname}
          onChange={handleInputs}
          name="lastname"
          type="text"
          required
          autoComplete="off"
        />
        <TextField
          id="outlined-basicemail"
          label="Email Address"
          variant="outlined"
          className="rformfield"
          value={inputs.email}
          onChange={handleInputs}
          name="email"
          type="email"
          required
          autoComplete="off"
        />
        <TextField
          id="outlined-basicpassword"
          label="Password"
          variant="outlined"
          className="rformfield"
          value={inputs.password}
          onChange={handleInputs}
          name="password"
          type="password"
          required
          autoComplete="off"
        />
        <Button variant="contained" className="rformbtn" type="submit">
          REGISTER
        </Button>
        <Typography>
          Already a User? Click <Link to="/login">here</Link> to Login.
        </Typography>
      </form>
    </>
  );
};

export default Register;
