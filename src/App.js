import React from "react";
import SimpleSelect from "./Select";
import axios from "axios";

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
    axios({
      method: "post",
      url: "https://findfalcone.herokuapp.com/token",
      headers: { Accept: "application/json" }
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          token: res.data.token
        });
      })
      .catch(err => console.log(err));

    axios
      .get("https://findfalcone.herokuapp.com/planets")
      .then(res => {
        console.log(res.data);
        this.setState({
          planets: res.data
        });
      })
      .catch(err => console.log(err));

    axios
      .get("https://findfalcone.herokuapp.com/vehicles")
      .then(res => {
        console.log(res.data);
        this.setState({
          vehicles: res.data,
          vehicles1: res.data
        });
      })
      .catch(err => console.log(err));
  }

  addPlanetVehicles = (name, value) => {
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  countVehicles = (value, targetid) => {

    if(targetid==temp.targetid){
    const obj = this.state.vehicles.map(i => {
      const obj = Object.assign({}, i);
      if (obj.name == value) {
        obj.total_no = obj.total_no - 1;
      }
      return obj;
    });

    if ((targetid = temp.targetid)) {
      this.setState({
        vehicles1: obj
      });
    }
  
  }
  else{
    const obj = this.state.vehicles1.map(i => {
      const obj = Object.assign({}, i);
      if (obj.name == value) {
        obj.total_no = obj.total_no - 1;
      }
      return obj;
    });
    this.setState({
      vehicles1: obj
    });

  }
}

  componentDidUpdate(previousProps, previousState) {
    console.log(previousState.vehicles1);
    console.log(this.state.vehicles1);
    const temp = previousState.vehicles1;
  }

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

  //   componentDidUpdate(previousProps, previousState) {
  //     console.log(previousState)
  //     const temp = previousState
  // }

  render() {
    return (
      <div>
        <SimpleSelect
          count={1}
          name={this.state.planet1}
          vname={this.state.vehicle1}
          planets={this.state.planets}
          addPlanet={this.addPlanetVehicles}
          countVehicles={this.countVehicles}
          vehicle={this.state.vehicles1}
        />
        <SimpleSelect
          count={2}
          name={this.state.planet2}
          vname={this.state.vehicle2}
          planets={this.state.planets}
          addPlanet={this.addPlanetVehicles}
          countVehicles={this.countVehicles}
          vehicle={this.state.vehicles1}
        />
        <SimpleSelect
          count={3}
          name={this.state.planet3}
          vname={this.state.vehicle3}
          planets={this.state.planets}
          addPlanet={this.addPlanetVehicles}
          countVehicles={this.countVehicles}
          vehicle={this.state.vehicles1}
        />
        <SimpleSelect
          count={4}
          name={this.state.planet4}
          vname={this.state.vehicle4}
          planets={this.state.planets}
          addPlanet={this.addPlanetVehicles}
          countVehicles={this.countVehicles}
          vehicle={this.state.vehicles1}
        />
        <button onClick={this.handleSubmit}>Submitt</button>
      </div>
    );
  }
}
