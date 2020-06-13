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

  handleChange = event => {
    const planetName = event.target.value;
    this.props.addPlanet(event.target.name, planetName);
  };

  handleChange1 = event => {
    const vehicleName = event.target.value;
    const targetId = event.target.id;
    this.props.countVehicles(vehicleName, targetId);
  };

  render() {
    const { classes, planets, name, vehicle } = this.props;
    const planetDistance = planets.find(obj => {
      if (obj.name === name) {
        return obj.distance;
      }
      return null;
    });

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-label-placeholder">
            {"select planet"}
          </InputLabel>
          <Select
            value={this.props.name}
            onChange={this.handleChange}
            displayEmpty
            name={"planet" + this.props.count}
            className={classes.selectEmpty}
          >
            {this.props.planets.map(i => (
              <MenuItem value={i.name}>{i.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {this.props.name && (
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              id={this.props.count}
              name={"vehicle" + this.props.count}
              className={classes.group}
              value={this.props.vname}
              onClick={this.handleChange1}
              onChange={this.handleChange}
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
