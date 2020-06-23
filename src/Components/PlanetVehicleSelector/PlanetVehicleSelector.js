import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  MenuItem,
  Select,
  FormControl,
  FormControlLabel,
  InputLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

class PlanetVehicleSelector extends React.Component {
  handleChangePlanet = (event) => {
    const { addPlanetAndVehicle } = this.props;
    const planetName = event.target.value;
    addPlanetAndVehicle(event.target.name, planetName);
  };

  handleChangeVehicle = (event) => {
    const { vehiclesCountInventory } = this.props;
    const vehicleName = event.target.value;
    const targetId = event.target.name;
    vehiclesCountInventory(vehicleName, targetId);
  };

  render() {
    const {
      classes,
      planets,
      name,
      vehicle,
      vehicleName,
      doNotShowRadioButtons,
      count,
    } = this.props;

    const planetDistance = planets.find((obj) => {
      if (obj.name === name) {
        return obj.distance;
      }
      return null;
    });

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="planet-label-placeholder">
            {'Select Planet'}
          </InputLabel>
          <Select
            value={this.props.name}
            onChange={this.handleChangePlanet}
            displayEmpty
            name={`planet${this.props.count}`}
            className={classes.selectEmpty}
          >
            {planets.map((obj) => (
              <MenuItem key={obj.name} value={obj.name}>
                {obj.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {name && (
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              id={this.props.count}
              name={`vehicle${count}`}
              className={classes.group}
              value={vehicleName}
              onClick={this.handleChangePlanet}
              onChange={this.handleChangeVehicle}
            >
              {doNotShowRadioButtons
                ? vehicle.map((obj) => (
                    <div key={obj.name}>
                      <FormControlLabel
                        disabled={
                          obj.max_distance < planetDistance.distance ||
                          obj.total_no === 0
                        }
                        value={obj.name}
                        control={<Radio />}
                        label={obj.name}
                      />
                      {`(${obj.total_no})`}
                    </div>
                  ))
                : `Please select vehicle for Destination ${count - 1} first`}
            </RadioGroup>
          </FormControl>
        )}
      </form>
    );
  }
}

export default withStyles(styles)(PlanetVehicleSelector);
