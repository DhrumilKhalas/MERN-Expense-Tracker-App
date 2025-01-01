import * as React from "react";
import "./Header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/authSlice.js";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const firstname = useSelector((state) => state?.auth?.user?.user?.firstname);
  const lastname = useSelector((state) => state?.auth?.user?.user?.lastname);

  const handleLogout = async () => {
    Cookies.remove("token");
    dispatch(logout());
    window.alert("You Logged Out Successfully!");
    navigate("/login");
    window.location.reload(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="headermain">
      <AppBar position="static">
        <Toolbar className="toolbarheader">
          <Typography
            variant="h6"
            component="div"
            onClick={() => {
              navigate("/");
            }}
            className="headerlogoname"
          >
            Expense Tracker
          </Typography>
          <Typography className="loginregbtn">
            {isAuthenticated && (
              <span className="usernameinheader">
                <span>{firstname}</span>
                <span>{lastname}</span>
              </span>
            )}
            {!isAuthenticated && (
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => {
                  navigate("/login");
                }}
                className="loginbtninheader"
              >
                LOGIN
              </Button>
            )}
            {!isAuthenticated && (
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => {
                  navigate("/register");
                }}
                className="registerbtninheader"
              >
                REGISTER
              </Button>
            )}
            {isAuthenticated && (
              <Button
                color="inherit"
                variant="outlined"
                onClick={handleLogout}
                className="logutbtninheader"
              >
                LOGOUT
              </Button>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
