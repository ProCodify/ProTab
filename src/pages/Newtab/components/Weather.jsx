import React from 'react';
import importAll from '../../../utils/importAll';

import ImageIcon from '../../../components/UI/ImageIcon';
import Text from '../../../components/UI/Text';
import useFetch from '../../../hooks/useFetch';
import * as store from '../../../utils/localStorage';
import util from '../../../utils/util';
const icons = importAll(
  require.context('../../../assets/icons/weather', false, /\.(png|jpe?g|svg)$/)
);

const Weather = () => {
  const initWeather = store.getItem('weather');
  const { data, error, loaded } = useFetch('/weather', {
    weather: initWeather,
  });
  const weather = data?.weather || {};
  if (loaded) {
    store.setItem('weather', weather);
  }
  return (
    <>
      <ImageIcon
        src={icons[weather?.condition || util.getTimeStatus()]}
        size="rg"
      />
      <Text size="md" mode="theme" weight="lg">
        {weather?.temp_c || '--'}°C
      </Text>
    </>
  );
};

export default Weather;
