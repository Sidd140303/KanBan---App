import React from "react";
import { Navigate } from "react-router-dom";
import usestore from "../../store";

function PrivateRoute({ Component }) {
  const { isLoggedIn } = usestore();
  return !isLoggedIn ? <Navigate to="/" replace /> : <Component />;
}

export default PrivateRoute;
