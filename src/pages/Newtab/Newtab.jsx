import React from 'react';
import DateTime from './components/DateTime';
import Weather from './components/Weather';
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
