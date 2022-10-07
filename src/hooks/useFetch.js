import { useEffect, useState } from 'react';
import axios from '../api/axios';
import util from '../utils/util';
const useFetch = (url, initData, headers) => {
  const [data, setData] = useState(initData);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const fetchData = async () => {
    try {
      setLoaded(false);
      const { data, status } = await axios.get(url, {
        headers: {
          ...headers,
        },
      });
      setLoaded(true);
      if (util.getStatusByCode(status) === 'success') {
        setError(null);
        setData(data);
      } else {
        setData(null);
        setError(data.message);
      }
    } catch (err) {
      setLoaded(true);
      setData(null);
      const { response, message } = err;
      setError(response?.data.message || message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, headers]);

  return { data, error, loaded };
};

export default useFetch;
