import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, []);

  const signIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', { login, password });

      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.log(e);
    }
  };
  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('UseAuth need to be used inside AuthContext');
  }

  return auth;
};
