import { Button } from "@mui/material";
import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <dic className="errmain">
        <div className="err1">OOPS! PAGE NOT FOUND</div>
        <div className="err2">
          Sorry, The page you are looking for could not be found.
        </div>
        <div className="err3">
          <Button
            onClick={() => {
              navigate(-1);
            }}
            variant="outlined"
          >
            GO TO PREVIOUS PAGE
          </Button>
          <Button
            onClick={() => {
              navigate("/");
            }}
            variant="contained"
          >
            GO TO HOME PAGE
          </Button>
        </div>
      </dic>
    </>
  );
};

export default Error;
