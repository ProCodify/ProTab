import React from 'react';
import DateTime from '../../components/shared/DateTime';
import Weather from '../../components/shared/Weather';
import './Newtab.scss';
const Newtab = () => {
  return (
    <>
      <Weather />
      <DateTime />
    </>
  );
};

export default Newtab;
