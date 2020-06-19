import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import PlanetVehicleSelector from '../PlanetVehicleSelector/PlanetVehicleSelector';
import PlanetAndVehicleSelectorCard from '../PlanetAndVehicleSelectorCard/PlanetAndVehicleSelectorCard';
import {
  fetchToken,
  fetchVehicles,
  fetchPlanets,
  fetchSearchResults,
} from '../../services/apiCalls';
import {
  returnNewArray,
  returnDecreasedNewArray,
  filterVehicles,
} from '../../utils/helper';

const styles = () => ({
  findButtonContainer: {
    marginTop: '10px',
    marginLeft: '45%',
  },
  buttonFind: {
    borderRadius: '50px',
    height: '40px',
    width: '150px',
    fontSize: '14px',
    fontWeight: '600',
    backgroundColor: '#111',
  },
  selectionText: {
    fontSize: '16px',
    fontWeight: '600',
    marginLeft: '35%',
    marginTop: '40px',
    color: 'green',
  },
});
class Main extends React.Component {
  state = {
    token: '',
    planets: [],
    planet1: '',
    planet2: '',
    planet3: '',
    planet4: '',
    vehicle1: '',
    vehicle2: '',
    vehicle3: '',
    vehicle4: '',
    vehiclesInventory: [],
    destination1Vehicles: '',
    destination2Vehicles: '',
    destination3Vehicles: '',
    destination4Vehicles: '',
    lastVehicle: '',
    isButtonDisable: true,
    isDataLoading: true,
  };

  componentDidMount() {
    fetchToken()
      .then((res) => {
        console.log(res.data);
        this.setState({
          token: res.data.token,
        });
      })
      .catch((err) => console.log(err));

    fetchPlanets()
      .then((res) => {
        console.log(res.data);
        this.setState({
          planets: res.data,
        });
      })
      .catch((err) => console.log(err));

    fetchVehicles()
      .then((res) => {
        console.log(res.data);
        this.setState({
          vehiclesInventory: res.data,
        });
      })
      .catch((err) => console.log(err));
    setTimeout(() => this.setState({ isDataLoading: false }), 2000);
  }

  componentDidUpdate() {
    if (this.state.isButtonDisable) {
      this.isButtonDisable();
    }
  }

  addPlanetVehiclesInState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  selectDestinationVehicle = (value, targetid, newArrFromState) => {
    let newArr = [];
    const { lastVehicle } = this.state;
    if (lastVehicle && lastVehicle === targetid) {
      if (this.state[targetid] !== value) {
        newArr = returnNewArray(newArrFromState, value, targetid, this.state);
      }
    } else {
      this.setState({ lastVehicle: targetid });
      newArr = returnDecreasedNewArray(newArrFromState, value, targetid);
    }
    return newArr;
  };

  vehiclesCountInventory = (value, targetid) => {
    switch (targetid) {
      case 'vehicle1':
        const newArray1 = (
          this.state.destination1Vehicles || this.state.vehiclesInventory
        ).map((a) => ({ ...a }));
        this.setState({
          destination1Vehicles: this.selectDestinationVehicle(
            value,
            targetid,
            newArray1
          ),
          // destination2Vehicles: this.selectDestinationVehicle(value,targetid,newArray1)
        });
        break;
      case 'vehicle2':
        const newArray2 = (
          this.state.destination2Vehicles || this.state.destination1Vehicles
        ).map((a) => ({ ...a }));
        this.setState({
          destination2Vehicles: this.selectDestinationVehicle(
            value,
            targetid,
            newArray2
          ),
          // destination3Vehicles: this.selectDestinationVehicle(value,targetid,newArray2)
        });
        break;
      case 'vehicle3':
        const newArray3 = (
          this.state.destination3Vehicles || this.state.destination2Vehicles
        ).map((a) => ({ ...a }));
        this.setState({
          destination3Vehicles: this.selectDestinationVehicle(
            value,
            targetid,
            newArray3
          ),
          // destination3Vehicles: this.selectDestinationVehicle(value,targetid,newArray2)
        });
        break;
      case 'vehicle4':
        const newArray4 = (
          this.state.destination4Vehicles || this.state.destination3Vehicles
        ).map((a) => ({ ...a }));
        this.setState({
          destination4Vehicles: this.selectDestinationVehicle(
            value,
            targetid,
            newArray4
          ),
          // destination3Vehicles: this.selectDestinationVehicle(value,targetid,newArray2)
        });
        break;
      default:
        break;
    }
  };

  handleSubmit = () => {
    const {
      planet1,
      planet2,
      planet3,
      planet4,
      vehicle1,
      vehicle2,
      vehicle3,
      vehicle4,
      token,
    } = this.state;
    const payload = {
      token,
      planet_names: [planet1, planet2, planet3, planet4],
      vehicle_names: [vehicle1, vehicle2, vehicle3, vehicle4],
    };
    fetchSearchResults(payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  isButtonDisable = () => {
    const { vehicle1, vehicle2, vehicle3, vehicle4 } = this.state;
    const shouldBeActive = vehicle1 && vehicle2 && vehicle3 && vehicle4;
    if (shouldBeActive) {
      this.setState({
        isButtonDisable: false,
      });
    }
  };

  render() {
    const {
      isDataLoading,
      isButtonDisable,
      planets,
      planet1,
      planet2,
      planet3,
      planet4,
      vehicle1,
      vehicle2,
      vehicle3,
      vehicle4,
      destination1Vehicles,
      destination2Vehicles,
      destination3Vehicles,
      destination4Vehicles,
      vehiclesInventory,
    } = this.state;
    const { classes } = this.props;
    return (
      <>
        <Container fixed component="main" style={{ marginTop: '200px' }}>
          <Grid container spacing={5} alignItems="flex-end" direction="row">
            <PlanetAndVehicleSelectorCard
              Component={() => (
                <PlanetVehicleSelector
                  count={1}
                  name={planet1}
                  vehicleName={vehicle1}
                  planets={planets}
                  addPlanetAndVehicle={this.addPlanetVehiclesInState}
                  vehiclesCountInventory={this.vehiclesCountInventory}
                  vehicle={destination1Vehicles || vehiclesInventory}
                  doNotShowRadioButtons
                />
              )}
              destination="Destination 1"
              isDataLoading={isDataLoading}
            />
            <PlanetAndVehicleSelectorCard
              Component={() => (
                <PlanetVehicleSelector
                  count={2}
                  name={planet2}
                  vehicleName={vehicle2}
                  planets={
                    planet1 ? filterVehicles(planets, [planet1]) : planets
                  }
                  addPlanetAndVehicle={this.addPlanetVehiclesInState}
                  vehiclesCountInventory={this.vehiclesCountInventory}
                  vehicle={destination2Vehicles || destination1Vehicles}
                  doNotShowRadioButtons={vehicle1}
                />
              )}
              destination="Destination 2"
              isDataLoading={isDataLoading}
            />
            <PlanetAndVehicleSelectorCard
              Component={() => (
                <PlanetVehicleSelector
                  count={3}
                  name={planet3}
                  vehicleName={vehicle3}
                  planets={
                    planet2
                      ? filterVehicles(planets, [planet1, planet2])
                      : planets
                  }
                  addPlanetAndVehicle={this.addPlanetVehiclesInState}
                  vehiclesCountInventory={this.vehiclesCountInventory}
                  vehicle={destination3Vehicles || destination2Vehicles}
                  doNotShowRadioButtons={vehicle2}
                />
              )}
              destination="Destination 3"
              isDataLoading={isDataLoading}
            />
            <PlanetAndVehicleSelectorCard
              Component={() => (
                <PlanetVehicleSelector
                  count={4}
                  name={planet4}
                  vehicleName={vehicle4}
                  planets={
                    planet3
                      ? filterVehicles(planets, [planet1, planet2, planet3])
                      : planets
                  }
                  addPlanetAndVehicle={this.addPlanetVehiclesInState}
                  vehiclesCountInventory={this.vehiclesCountInventory}
                  vehicle={destination4Vehicles || destination3Vehicles}
                  doNotShowRadioButtons={vehicle3}
                />
              )}
              destination="Destination 4"
              isDataLoading={isDataLoading}
            />
          </Grid>
        </Container>
        <div className={classes.selectionText}>
          {!isButtonDisable && (
            <span>
              Great! you have selected the planets with vehicles. Send your Army
              now!
            </span>
          )}
        </div>
        <div className={classes.findButtonContainer}>
          <Button
            disabled={isButtonDisable}
            variant="contained"
            color="secondary"
            onClick={this.handleSubmit}
            className={classes.buttonFind}
          >
            Find Falcone
          </Button>
        </div>
      </>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.shape({
    buttonFind: PropTypes.object.isRequired,
    selectionText: PropTypes.object.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Main);
