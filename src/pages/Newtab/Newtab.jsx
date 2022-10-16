import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import store from '../../utils/store';
import DateTime from './components/DateTime';
import Weather from './components/Weather';
import './Newtab.scss';
const initWeather = store.getItem('weather')?.weather;
const NewTab = () => {
  const [weather, setWeather] = useState(initWeather);

  const { data: weatherData, loaded: isWeatherLoaded } = useFetch('/weather');

  useEffect(() => {
    if (isWeatherLoaded && weatherData) {
      setWeather(weatherData.data);
    }
  }, [weatherData]);

  return (
    <>
      <Weather weather={weather} />
      <DateTime />
    </>
  );
};

export default NewTab;
