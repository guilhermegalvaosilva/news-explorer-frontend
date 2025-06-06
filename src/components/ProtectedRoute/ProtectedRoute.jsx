import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
