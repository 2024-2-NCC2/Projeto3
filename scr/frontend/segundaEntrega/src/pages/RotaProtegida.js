import React from 'react';
import { Navigate } from 'react-router-dom';

const RotaProtegida = ({ component: Component }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default RotaProtegida;