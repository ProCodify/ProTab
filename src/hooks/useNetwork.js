import { useEffect, useState } from 'react';

const useNetwork = () => {
  if (!window) return null;
  const [hasInternet, setHasInternet] = useState(window.navigator.onLine);
  const updateInternetStatus = () => {
    setHasInternet(window.navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('offline', updateInternetStatus);
    window.addEventListener('online', updateInternetStatus);
    return () => {
      window.removeEventListener('offline', updateInternetStatus);
      window.removeEventListener('online', updateInternetStatus);
    };
  }, []);
  return { hasInternet };
};

export default useNetwork;
