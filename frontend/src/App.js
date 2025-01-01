import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import CheckAuth from "./utils/CheckAuth.js";
import Guest from "./utils/Guest.js";

import { useDispatch } from "react-redux";
import { getUser } from "./Redux/authSlice.js";
import Cookies from "js-cookie";
import Loader from "./components/Loader/Loader.js";

const App = () => {
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchUser() {
    setIsLoading(true);
    const res = await fetch("http://localhost:5000/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      const user = await res.json();
      dispatch(getUser(user));
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <CheckAuth>
              <Home />
            </CheckAuth>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <Guest>
              <Login />
            </Guest>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <Guest>
              <Register />
            </Guest>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
