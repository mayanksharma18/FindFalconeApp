import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typewriter from 'typewriter-effect';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';
import queenImage from '../../assets/images/QueenImage.png';
import vehiclesSpecsImage from '../../assets/images/VehiclesSpec.png';
import ImageModal from '../ImageModal/ImageModal';

const useStyles = makeStyles({
  gameStoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    color: '#3f51b5',
    fontFamily: 'inherit',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '64px',
  },
  childContainer: {
    height: '500px',
    padding: '50px',
  },
  buttonClass: {
    borderRadius: '16px',
    cursor: 'pointer',
    height: '32px',
    fontSize: '14px',
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
  },
});

export default function GameStory() {
  const [isModalOpen, setModal] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <CssBaseline />
      <Fade in timeout={5000}>
        <Container className={classes.container1} fixed>
          <div className={classes.title}>
            <p>Read the story to play the game</p>
          </div>
          <div className={classes.childContainer}>
            <div className={classes.gameStoryContainer}>
              <div className={classes.storyText}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2000)
                      .typeString(
                        `<span>After the recent war with neighbouring planet Falicornia,</span>
                    </br>
                    </br>
                  <span>King Shan has exiled the Queen of Falicornia for 15 years.</span>
                  </br>
                  </br>
                  <span>
                    Queen Al Falcone is now in hiding. But if King Shan can find her
                  </span>
                  </br>
                  </br>
                  <span>
                    before the years are up, she will be exiled for another 15
                    years….
                  </span>`
                      )
                      .start();
                  }}
                  options={{
                    delay: 30,
                  }}
                />
              </div>
              <img
                src={queenImage}
                alt="Girl in a jacket"
                width="250"
                height="230"
              />
            </div>
            <div className={classes.buttonContainer}>
              <Button
                className={classes.buttonClass}
                variant="contained"
                color="secondary"
                onClick={() => handleOpen()}
              >
                See Vehicles specs
              </Button>
              <Link to="/playgame" style={{ textDecoration: 'none' }}>
                <Button
                  className={classes.buttonClass}
                  variant="contained"
                  color="secondary"
                  onClick={() => {}}
                >
                  <span>Play Game!</span>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Fade>
      {isModalOpen ? (
        <ImageModal Open={isModalOpen} Close={() => handleClose()}>
          <img src={vehiclesSpecsImage} alt="Girl in a jacket" width="1200"
                height="700" />
        </ImageModal>
      ) : null}
    </>
  );
}
