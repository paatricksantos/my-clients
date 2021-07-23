import PropTypes from 'prop-types';
import React, { useState, createContext, useEffect } from 'react';

const USERS = [
  {
    id: 1,
    token: 'admin@logado',
    email: 'admin@admin.com',
    password: 'admin',
    name: 'Admnistrador',
  },
];

function getUserLocalStorage() {
  const userLocalStorage = localStorage.getItem('@token:myclients');
  if (userLocalStorage) {
    const userStorage = JSON.parse(userLocalStorage);

    return USERS.find(user => user.token === userStorage);
  }

  return false;
}

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(getUserLocalStorage);

  function signIn(userLogin) {
    const hasUser = USERS.find(
      _user =>
        _user.email === userLogin.email &&
        _user.password === userLogin.password,
    );

    if (hasUser) {
      setUser(hasUser);
      return true;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem('@token:myclients');
    setUser(false);
  }

  useEffect(() => {
    if (user) {
      localStorage.setItem('@token:myclients', JSON.stringify(user.token));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
