import React from "react";
import { Navigate } from "react-router-dom";
import usestore from "../../store";

function PublicOnlyRoute({ Component }) {
  const { isLoggedIn } = usestore();
  return isLoggedIn ? <Navigate to="/boards" replace /> : <Component />;
}

export default PublicOnlyRoute;
