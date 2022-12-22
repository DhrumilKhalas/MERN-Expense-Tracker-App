import React from "react";
import "./Loader.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <>
      <Box className="loadermain">
        <CircularProgress />
      </Box>
    </>
  );
};

export default Loader;
