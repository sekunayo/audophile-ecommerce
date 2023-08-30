import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  auth: boolean;
  children: JSX.Element;
  path: string;
}

const ProtectedRoute = ({ auth, children, path }: ProtectedRouteProps) => {
  if (auth) {
    return <Navigate to={path} replace />;
  }
  return children;
};

export default ProtectedRoute;
