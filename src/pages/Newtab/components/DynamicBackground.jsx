import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import importAll from '../../../utils/importAll';
import { getTimeStatus } from '../../../utils/util';

const backgroundImages = importAll(
  require.context('../../../assets/background', false, /\.(png|jpe?g|svg)$/)
);

const DynamicBackground = ({ weatherText }) => {
  useEffect(() => {
    let imageName;
    if (weatherText === 'offline') imageName = 'offline';
    else {
      imageName = `${getTimeStatus()}`;
      if (weatherText) imageName += `-${weatherText}`;
    }
    document.body.style.backgroundImage = `url(${backgroundImages[imageName]})`;
  }, []);
  return <></>;
};

DynamicBackground.propTypes = {
  weatherText: PropTypes.string.isRequired,
};

export default DynamicBackground;
