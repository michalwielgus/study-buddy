import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useError } from 'hooks/useError';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { dispatchError } = useError();

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
          dispatchError(
            'There is a problem, with connection to our service. Please report a problem.'
          );
        }
      })();
    }
  }, [dispatchError]);

  const signIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', { login, password });

      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      dispatchError('Wrong login or password.');
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
