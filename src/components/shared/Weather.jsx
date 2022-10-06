import React from 'react';
import importAll from '../../utils/importAll';

import ImageIcon from '../UI/ImageIcon';
import Text from '../UI/Text';

import UIConfig from '../../config/UI.config';
import useFetch from '../../hooks/useFetch';
const icons = importAll(
  require.context('../../assets/icons/weather', false, /\.(png|jpe?g|svg)$/)
);

const Weather = () => {
  const { data, error } = useFetch('/weather');
  return (
    <>
      <ImageIcon src={icons['clear']} size="rg" />
      <Text size="md" color={UIConfig.theme_color} weight="lg">
        {data?.weather.temp_c || 0}°C
      </Text>
    </>
  );
};

export default Weather;
