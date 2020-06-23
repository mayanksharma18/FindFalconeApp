import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <div
            style={{
              marginLeft: '280px',
              position: 'absolute',
            }}
          >
            <span>
              Made with
              <FavoriteIcon
                style={{ color: blue[500], marginBottom: '-6px' }}
              />{' '}
              by{' '}
              <a
                style={{ textDecoration: 'none' }}
                href="https://www.linkedin.com/in/mayank-vikesh-kumar-sharma-73978270/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mayank Vikesh Kumar Sharma
              </a>
            </span>
          </div>
        </Box>
      </Container>
    </>
  );
}
