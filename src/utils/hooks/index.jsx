import { useState, useEffect } from 'react';
import axios from 'axios';

export function useAxios(url) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      const response = await axios.get(url);
      const data = await response.data;
      setData(data.data);
      setLoading(false);
    }

    setLoading(true);
    fetchData();
  }, [url]);

  return { data, isLoading };
}
