import React from "react";
import SimpleSelect from "./Components/Select";
import axios from "axios";
import Header from "./Components/Header";
import PlanetAndVehicleSelector from "./Components/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Footer from './Components/Footer'
import { fetchToken, fetchVehicles, fetchPlanets, } from './services/apiCalls';
export default class Main extends React.Component {
  state = {
    token: "",
    planets: [],
    vehicles: [],
    planet1: "",
    planet2: "",
    planet3: "",
    planet4: "",
    vehicle1: "",
    vehicle2: "",
    vehicle3: "",
    vehicle4: "",
    planet_names: [],
    vehicle_names: [],
    vehicles1: [],
    radioCount: 0
  };
  componentDidMount() {
    fetchToken()
      .then(res => {
        console.log(res.data);
        this.setState({
          token: res.data.token
        });
      })
      .catch(err => console.log(err));

      fetchPlanets()
      .then(res => {
        console.log(res.data);
        this.setState({
          planets: res.data
        });
      })
      .catch(err => console.log(err));

      fetchVehicles()
      .then(res => {
        console.log(res.data);
        this.setState({
          vehicles: res.data,
          vehicles1: res.data
        });
      })
      .catch(err => console.log(err));
  }

  addPlanetVehiclesInState = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  vehiclesCountInventory = (value, targetid) => {
    return null
  };
  
  handleSubmit = async () => {
    console.log(this.state.planet_names);
    await this.setState({
      planet_names: this.state.planet_names
        .concat(this.state.planet1)
        .concat(this.state.planet2)
        .concat(this.state.planet3)
        .concat(this.state.planet4),
      vehicle_names: this.state.vehicle_names
        .concat(this.state.vehicle1)
        .concat(this.state.vehicle2)
        .concat(this.state.vehicle3)
        .concat(this.state.vehicle4)
    });
    console.log(this.state.planet_names);
    console.log(this.state.vehicle_names);
    console.log({
      token: this.state.token,
      planet_name: this.state.planet_names,
      vehicle_names: this.state.vehicle_names
    });

    axios({
      method: "POST",
      url: "http://findfalcone.herokuapp.com/find",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      data: {
        token: this.state.token,
        planet_names: this.state.planet_names,
        vehicle_names: this.state.vehicle_names
      }
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Container fixed component="main" style={{marginTop: '200px'}}>
        <Grid container spacing={5} alignItems="flex-end" direction='row'>
        <PlanetAndVehicleSelector
          Component={() => (
            <SimpleSelect
              count={1}
              name={this.state.planet1}
              vehicleName={this.state.vehicle1}
              planets={this.state.planets}
              addPlanetAndVehicle={this.addPlanetVehiclesInState}
              vehiclesCountInventory={this.vehiclesCountInventory}
              vehicle={this.state.vehicles1}
            />
          )}
          destination={"Destination 1"}
        />

        <PlanetAndVehicleSelector
          Component={() => (
            <SimpleSelect
              count={2}
              name={this.state.planet2}
              vehicleName={this.state.vehicle2}
              planets={this.state.planets}
              addPlanetAndVehicle={this.addPlanetVehiclesInState}
              vehiclesCountInventory={this.vehiclesCountInventory}
              vehicle={this.state.vehicles1}
            />
          )}
          destination={"Destination 2"}
        />
        <PlanetAndVehicleSelector
          Component={() => (
            <SimpleSelect
              count={3}
              name={this.state.planet3}
              vehicleName={this.state.vehicle3}
              planets={this.state.planets}
              addPlanetAndVehicle={this.addPlanetVehiclesInState}
              vehiclesCountInventory={this.vehiclesCountInventory}
              vehicle={this.state.vehicles1}
            />
          )}
          destination={"Destination 3"}
        />
        <PlanetAndVehicleSelector
          Component={() => (
            <SimpleSelect
              count={4}
              name={this.state.planet4}
              vehicleName={this.state.vehicle4}
              planets={this.state.planets}
              addPlanetAndVehicle={this.addPlanetVehiclesInState}
              vehiclesCountInventory={this.vehiclesCountInventory}
              vehicle={this.state.vehicles1}
            />
          )}
          destination={"Destination 4"}
        />
        </Grid>
        </Container>
        <button onClick={this.handleSubmit}>Submitt</button>
        <Footer/>
        </React.Fragment>
    );
  }
}
