import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import queen from '../../assets/images/QueenImage.png';

const useStyles = makeStyles({
  gameStoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '500px',
    padding: '50px',
  },
  title: {
    paddingTop: '12px',
    color: 'orange',
    fontSize: '32px',
    fontWeight: '600',
    textAlign: 'center',
  },
  container1: {
    marginTop: '40px',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  storyText: {
    fontSize: '18px',
    color: 'blue',
  },
});

export default function FixedContainer() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container className={classes.container1} fixed>
        <div className={classes.title}>
          <p>Read the story to play the game</p>
        </div>
        <div className={classes.gameStoryContainer}>
          <div className={classes.storyText}>
            <pre>
              <p>After the recent war with neighbouring planet Falicornia,</p>
              <p>King Shan has exiled the Queen of Falicornia for 15 years.</p>
              <p>
                Queen Al Falcone is now in hiding. But if King Shan can find her
              </p>
              <p>
                before the years are up, she will be exiled for another 15
                years….
              </p>
            </pre>
          </div>
          <img src={queen} alt="Girl in a jacket" width="250" height="200" />
        </div>
      </Container>
    </>
  );
}
