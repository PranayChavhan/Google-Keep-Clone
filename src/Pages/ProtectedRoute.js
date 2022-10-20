import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
