import React from 'react';
import PropTypes from 'prop-types';

const containerCSS = {
  textAlign: 'center',
  fontSize: '24px',
  marginTop: '100px',
  color: 'orange',
};
const child1CSS = {
  marginTop: '12px',
};
const ResultScreen = () => {
  return (
    <div style={containerCSS}>
      <div>
        Success ! Congratulations on Finding Falcone. King Shah is mightu
        Pleased
      </div>
      <div style={child1CSS}>Time taken</div>
      <div>Planet Found</div>
    </div>
  );
};

ResultScreen.propTypes = {};

export default ResultScreen;
