import React from 'react';
import { CssBaseline, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const buttonClass = {
  borderRadius: '16px',
  cursor: 'pointer',
  height: '32px',
  fontSize: '16px',
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
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <CssBaseline />
          <Container maxWidth="sm" style={{ marginTop: '100px' }}>
            <Typography
              variant="h1"
              component="h2"
              gutterBottom
              color="primary"
            >
              Sorry.
            </Typography>
            <Typography variant="h5" gutterBottom color="primary">
              Looks like something went wrong on our end
            </Typography>
            <Typography variant="h5" gutterBottom color="primary">
              Head back to the start point
            </Typography>
            <div style={{ marginTop: '40px' }}>
              <Link to="/playgame" style={{ textDecoration: 'none' }}>
                <button
                  style={buttonClass}
                  type="button"
                  onClick={() => window.location.reload()}
                >
                  <span>Restart Game</span>
                </button>
              </Link>
            </div>
          </Container>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
