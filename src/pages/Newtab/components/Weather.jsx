import React from 'react';
import importAll from '../../../utils/importAll';

import PropTypes from 'prop-types';
import ImageIcon from '../../../components/UI/ImageIcon';
import Text from '../../../components/UI/Text';
import util from '../../../utils/util';
const icons = importAll(
  require.context('../../../assets/icons/weather', false, /\.(png|jpe?g|svg)$/)
);
const Weather = ({ weather }) => {
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

Weather.propTypes = {
  weather: PropTypes.shape({
    condition: PropTypes.string,
    temp_c: PropTypes.number,
  }),
};
export default Weather;
