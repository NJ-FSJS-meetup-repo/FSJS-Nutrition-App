import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Adjust based on how you track login status
  
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
