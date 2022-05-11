import { createContext } from 'react';
import { useAxios } from '../hooks';

export const UserContext = createContext();

/**
 * API Call for the User Info to get them as Context
 * @param { Component } react component
 * @return { Provider }
 * @author Charles
 * @version 1.0
 */
export const UserProvider = ({ children }) => {
  //const userID = 12;

  const { data, isLoading, error } = useAxios('/');
  return (
    <UserContext.Provider value={{ data, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};
