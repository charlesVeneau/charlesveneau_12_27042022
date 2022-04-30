import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Retrive data from API server using Axios
 * @param { String } url
 * @return { Object }
 * @author Charles
 * @version 1.0
 */

export function useAxios(url) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function fetchData() {
      try {
        const response = await axios.get(url);
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
  }, [url]);

  return { data, isLoading, error };
}
