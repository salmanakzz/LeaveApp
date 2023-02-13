import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const PrivateRoute = () => {
  const [token, setToken] = useState(false);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userKey = JSON.parse(localStorage.getItem("userKey"));
    if (userKey?._id) {
      setToken(true);
      setAuth(true);
    } else {
      setAuth(true);
    }
  }, []);

  return <>{auth && token ? <Outlet /> : navigate("/")}</>;
};
