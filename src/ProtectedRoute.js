import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/admin-login" />;
  }

  return children;  // Render the protected component (Admin)
};

export default ProtectedRoute;
