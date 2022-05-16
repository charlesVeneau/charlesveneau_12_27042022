import mockedData from '../data/mockedData.json';
import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Retrive data from API server using Axios
 * @param { String } endpoint
 * @return { Object }
 * @author Charles
 * @version 1.0
 */

export function useAxios(endpoint) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const userId = 12;
  const isMockedData = true;

  useEffect(() => {
    if (!endpoint) return;
    setLoading(true);

    function getMockedData() {
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
          break;
      }
      setLoading(false);
    }

    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/user/${userId}${endpoint}`
        );
        const data = await response.data;
        setData(data.data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    isMockedData ? getMockedData() : fetchData();
  }, [endpoint, isMockedData]);

  return { data, isLoading, error };
}
