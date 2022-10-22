import { useEffect, useState } from 'react';
import axios from '../api/axios';
import util from '../utils/util';
const useFetch = (url, headers) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoaded(false);
      const { data, status } = await axios.get(url, {
        headers: {
          ...headers,
        },
      });
      if (util.getStatusByCode(status) === 'success') {
        setError(null);
        setData(data);
      } else {
        setData(null);
        setError(data.message);
      }
      setIsLoaded(true);
    } catch (err) {
      setData(null);
      const { response, message } = err;
      setError(response?.data.message || message);
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, headers]);

  return { data, error, isLoaded };
};

export default useFetch;
