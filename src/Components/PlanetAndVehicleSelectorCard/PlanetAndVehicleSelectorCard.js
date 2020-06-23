import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SkeletonEffect from '../SkeletonEffect/SkeletonEffect';

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
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

export default function PlanetAndVehicleSelectorCard({
  Component,
  destination,
  isDataLoading,
}) {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={3}>
      {isDataLoading ? (
        <SkeletonEffect />
      ) : (
        <Card>
          <CardHeader
            title={destination}
            titleTypographyProps={{ align: 'center' }}
            subheaderTypographyProps={{ align: 'center' }}
            className={classes.cardHeader}
          />
          <CardContent>
            <Component />
          </CardContent>
        </Card>
      )}
    </Grid>
  );
}

PlanetAndVehicleSelectorCard.propTypes = {
  Component: PropTypes.func.isRequired,
  destination: PropTypes.string.isRequired,
  isDataLoading: PropTypes.bool.isRequired,
};
