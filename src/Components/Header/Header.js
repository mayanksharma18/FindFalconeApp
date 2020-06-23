import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

export default function Header() {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link
              to="/gamestory"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Finding Falcone
            </Link>
          </Typography>
          {location.pathname !== '/gamestory' ? (
            <Button color="primary" onClick={() => window.location.reload()}>
              Reset
            </Button>
          ) : null}
          <Button
            href="https://www.geektrust.in"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Geek Trust Home
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
