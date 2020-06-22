import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CssBaseline, Container, Typography } from '@material-ui/core';

const buttonClass = {
  borderRadius: '16px',
  cursor: 'pointer',
  height: '32px',
  fontSize: '18px',
  fontWeight: '500',
  outline: 'none',
  padding: '0 24px',
  textShadow: 'none',
  background: '#141414',
  border: '1px solid #141414',
  color: 'white',
  marginRight: '32px',
  textDecoration: 'none',
  '&:hover': {
    background: '#2b2b2b',
    border: '1px solid #2b2b2b',
  },
  boxShadow: '5px 5px pink',
};

const ResultScreen = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  const resultInLS = localStorage.getItem('result');
  if (!resultInLS) {
    return <Redirect to="/playgame" />;
  }
  if (JSON.parse(resultInLS).status === 'false') {
    return (
      <Container maxWidth="lg" style={{ marginTop: '10%' }}>
        <Typography variant="h4" component="h4" gutterBottom>
          <span style={{ color: 'red' }}>Failed</span> ! You were not able to
          Find Falcone. King Shah is very Angry
        </Typography>
        <Container maxWidth="sm" style={{ paddingLeft: '170px' }}>
          <div style={{ marginTop: '40px' }}>
            <button
              style={buttonClass}
              type="button"
              onClick={() =>
                window.location.assign(`${window.location.origin}/playgame`)
              }
            >
              <span>Start Again</span>
            </button>
          </div>
        </Container>
      </Container>
    );
  }
  const results = {
    planet_name: JSON.parse(localStorage.getItem('result')).planet_name,
    timeTaken: localStorage.getItem('timeTaken'),
  };
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: '10%' }}>
        <Typography variant="h4" component="h4" gutterBottom>
          Success ! Congratulations on Finding Falcone. King Shah is mighty
          Pleased
        </Typography>
        <Container maxWidth="sm" style={{ paddingLeft: '120px' }}>
          <Typography variant="h4" component="h4" gutterBottom>
            Time Taken <strong>{` : ${results.timeTaken}`}</strong>
          </Typography>
        </Container>
        <Container maxWidth="sm" style={{ paddingLeft: '80px' }}>
          <Typography variant="h4" component="h4" gutterBottom>
            Planet Found <strong>{`: ${results.planet_name}`}</strong>
          </Typography>
        </Container>
        <Container maxWidth="sm" style={{ paddingLeft: '170px' }}>
          <div style={{ marginTop: '40px' }}>
            <button
              style={buttonClass}
              type="button"
              onClick={() =>
                window.location.assign(`${window.location.origin}/playgame`)
              }
            >
              <span>Start Again</span>
            </button>
          </div>
        </Container>
      </Container>
    </>
  );
};

ResultScreen.propTypes = {};

export default ResultScreen;
