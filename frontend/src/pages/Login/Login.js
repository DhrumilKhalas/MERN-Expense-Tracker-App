import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { getUser } from "../../Redux/authSlice.js";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputs = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        {
          email: inputs.email,
          password: inputs.password,
        },
        config
      );
      const data = await res.data;
      const { token, user } = data;

      if (data !== "Invalid credentials!") {
        Cookies.set("token", token);
        dispatch(getUser(user));
        // window.alert("You Logged In Successfully!");
        navigate("/");
        window.location.reload(false);
        setIsError(false);
        setErrMsg("");
      }
      if (data === "Invalid credentials!") {
        setIsError(true);
        setErrMsg("Invalid credentials!");
      }
    } catch (err) {
      alert("login error");
      console.log(err);
    }
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
      <form className="logmain" onSubmit={handleSubmit}>
        <Typography variant="h3" className="lformheading">
          LOGIN
        </Typography>
        <TextField
          id="outlined-basicemail"
          label="Email Address"
          variant="outlined"
          className="lformfield"
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
          className="lformfield"
          value={inputs.password}
          onChange={handleInputs}
          name="password"
          type="password"
          required
          autoComplete="off"
        />
        <Button variant="contained" type="submit">
          LOGIN
        </Button>
        <Typography>
          New User? Click <Link to="/register">here</Link> to Register.
        </Typography>
      </form>
    </>
  );
};

export default Login;
