import React from 'react';
import importAll from '../../utils/importAll';

import * as store from '../../utils/localStorage';
import ImageIcon from '../UI/ImageIcon';
import Text from '../UI/Text';

import UIConfig from '../../config/UI.config';
import useFetch from '../../hooks/useFetch';
const icons = importAll(
  require.context('../../assets/icons/weather', false, /\.(png|jpe?g|svg)$/)
);

const Weather = () => {
  const initWeather = store.getItem('weather');

  const { data, error, loaded } = useFetch('/weather', {
    weather: initWeather,
  });
  const weather = data.weather || {};

  if (loaded) {
    store.setItem('weather', weather);
  }
  console.log({ data, error, loaded });
  return (
    <>
      <ImageIcon src={icons[weather?.condition || 'offline']} size="rg" />
      <Text size="md" color={UIConfig.theme_color} weight="lg">
        {weather?.temp_c || 0}°C
      </Text>
    </>
  );
};

export default Weather;
