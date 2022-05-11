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

  useEffect(() => {
    if (!endpoint) return;
    setLoading(true);
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

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
}
