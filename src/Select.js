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
    marginTop: theme.spacing.unit * 2
  }
});

//const planets = ["Jebing", "Sapir", "Lerbin", "Pingasor"];

class SimpleSelect extends React.Component {
  handleChange = event => {
    console.log(event.target.name);
    const planetname = event.target.value;
    this.props.addPlanet(event.target.name, planetname);


  };
  handleChange1 = event => {
    const planetname = event.target.value;
    const targetid=event.target.id
    this.props.countVehicles(planetname,targetid);
   console.log(event.target.id)
  };

  render() {
    const { classes } = this.props;
    const distance = this.props.planets.find(i => {
      if (i.name === this.props.name) {
        return i.distance;
      }
      return null
    });

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-label-placeholder">
            {"Destination" + this.props.count}
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
              {this.props.vehicle.map(i => (
                
                  i.max_distance<distance.distance ? (
                    <div>
                      <FormControlLabel
                        disabled
                        value={i.name}
                        control={<Radio />}
                        label={i.name}
                      />
                      <p>{`(${i.total_no})`}</p>
                    </div>
                  ) : (
                    <div>
                      <FormControlLabel
                        value={i.name}
                        control={<Radio />}
                        label={i.name}
                      />
                      {`(${i.total_no})`}
                    </div>
                  )
                  
              ))}
            </RadioGroup>
          </FormControl>
        )}
      </form>
    );
  }
}

export default withStyles(styles)(SimpleSelect);
