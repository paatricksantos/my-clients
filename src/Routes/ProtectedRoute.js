import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

export function ProtectedRoute(props) {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Route {...props} />;
  }

  return <Redirect to="/login" />;
}
