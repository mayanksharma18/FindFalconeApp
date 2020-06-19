import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import queen from '../../assets/images/QueenImage.png';

export default function FixedContainer() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <div style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
          <div>
            <p>Hissasas</p>
          </div>
          <img src={queen} alt="Girl in a jacket" width="250" height="200" />
        </div>
      </Container>
    </>
  );
}
