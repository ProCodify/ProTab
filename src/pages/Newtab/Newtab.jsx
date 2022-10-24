import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import useNetwork from '../../hooks/useNetwork';
import store from '../../utils/store';
import DateTime from './components/DateTime';
import DynamicBackground from './components/DynamicBackground';
import Weather from './components/Weather';
import './Newtab.scss';

const INIT_WEATHER = store.getItem('weather');

const NewTab = () => {
  const [weather, setWeather] = useState(INIT_WEATHER);

  const { data: weatherData, isLoaded } = useFetch('/weather');
  const { hasInternet } = useNetwork();

  useEffect(() => {
    if (isLoaded && weatherData?.data) {
      setWeather(weatherData.data);
    }
    store.setItem('weather', weatherData?.data);
  }, [isLoaded]);

  return (
    <>
      {!hasInternet ? (
        <DynamicBackground weatherText="offline" />
      ) : (
        <DynamicBackground weatherText={weather?.condition} />
      )}

      <Weather weather={weather} />
      <DateTime />
    </>
  );
};

export default NewTab;
