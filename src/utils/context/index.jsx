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
  /**
   * Set hooks useAxios answer to a variable
   * @type  { {data: Object, isLoading : Boolean, error: Boolean} }
   */
  const { data, isLoading, error } = useAxios('/');
  return (
    <UserContext.Provider value={{ data, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};
