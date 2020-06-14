import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
});

class SimpleSelect extends React.Component {

  handleChangePlanet = event => {
    const planetName = event.target.value;
    this.props.addPlanetAndVehicle(event.target.name, planetName);
  };

  handleChangeVehicle = event => {
    const vehicleName = event.target.value;
    const targetId = event.target.id;
    this.props.vehiclesCountInventory(vehicleName, targetId);
  };

  render() {
    const { classes, planets, name, vehicle, vehicleName } = this.props;
    const planetDistance = planets.find(obj => {
      if (obj.name === name) {
        return obj.distance;
      }
      return null;
    });

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="planet-label-placeholder">
            {"Select Planet"}
          </InputLabel>
          <Select
            value={this.props.name}
            onChange={this.handleChangePlanet}
            displayEmpty
            name={"planet" + this.props.count}
            className={classes.selectEmpty}
          >
            {planets.map(obj => (
              <MenuItem value={obj.name}>{obj.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {name && (
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              id={this.props.count}
              name={"vehicle" + this.props.count}
              className={classes.group}
              value={vehicleName}
              onClick={this.handleChangeVehicle}
              onChange={this.handleChangePlanet}
            >
              {vehicle.map(obj => (
                  <div>
                    <FormControlLabel
                      disabled={ obj.max_distance < planetDistance.distance }
                      value={obj.name}
                      control={<Radio />}
                      label={obj.name}
                    />
                    {`(${obj.total_no})`}
                  </div>
                )
              )}
            </RadioGroup>
          </FormControl>
        )}
      </form>
    );
  }
}

export default withStyles(styles)(SimpleSelect);
