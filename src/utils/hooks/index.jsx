import mockedData from '../data/mockedData.json';
import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Retrive data from API server using Axios
 * @param { String } endpoint to make the API request
 * @return { Object } contains data object, isLoading boolean and error boolean
 * @author Charles
 * @version 1.0
 */

export function useAxios(endpoint) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  /**
   * User ID used for Axios call
   * @type { Number} */
  const userId = 12;
  /**
   * Set to true if you need to use mocked data
   * @type { Boolean } */
  const isMockedData = true;

  useEffect(() => {
    if (!endpoint) return;
    setLoading(true);

    /**
     * Retrieve mocked data from JSON file and set it to the correct endpoint
     * @param { String } endpoint
     */
    function getMockedData(endpoint) {
      /**
       * Set the mockedData to a variable
       *
       * @type { Object }
       */
      const data = mockedData;
      switch (endpoint) {
        case '/':
          setData(data.data);
          break;
        case '/activity':
          setData(data['activity']);
          break;
        case '/average-sessions':
          setData(data['average-sessions']);
          break;
        case '/performance':
          setData(data['performance']);
          break;
        default:
          setError(true);
          setData({});
      }
      setLoading(false);
    }

    /**
     * Call API endpoit using Axios
     * @param { String } endpoint
     */
    async function fetchData(endpoint) {
      try {
        /**
         * @type  { Promise }
         */
        const response = await axios.get(
          `http://localhost:3000/user/${userId}${endpoint}`
        );
        /**
         * @type  { Object }
         */
        const data = await response.data;
        setData(data.data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    isMockedData ? getMockedData(endpoint) : fetchData(endpoint);
  }, [endpoint, isMockedData]);

  return { data, isLoading, error };
}
