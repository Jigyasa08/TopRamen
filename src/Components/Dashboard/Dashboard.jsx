import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  // Select,
  Typography,
} from "@material-ui/core";

import Select from "react-select";
// import options from "./options";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantCard } from "../RestaurantCard";
import { getRestaurantDetails } from "./DashboardRedux/action";
import SingleSelect from "./Options";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  formControl: {
    width: 400,
    margin: "auto",
  },
}));

export const Dashboard = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [param, setParam] = useState("");
  const [value, setValue] = useState("");
  const [year, setYear] = useState("");

  //onLoad get API will be called
  useEffect(() => {
    dispatch(getRestaurantDetails(param, value));
  }, [param, value]);

  const isLoading = useSelector((state) => state.isLoading);
  const isError = useSelector((state) => state.isError);
  const restaurants = useSelector((state) => state.data);
  const uniqueBrands = [...new Set(restaurants.map((item) => item.Brand))];

  const handleClear = () => {
    dispatch(getRestaurantDetails());
  };
  console.log(param, value);
  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <Paper elevation={3} style={{ maxWidth: "800px", margin: "auto" }}>
      <Paper
        elevation={3}
        style={{ maxWidth: "100%", margin: "auto", height: "70px" }}
      >
        <Typography
          color="secondary"
          variant="h4"
          style={{ letterSpacing: "1px", fontStyle: "italic", padding: "12px" }}
        >
          ★ TopRamen ★
          <br />
        </Typography>
      </Paper>

      <br />
      <div style={{ width: "400px", margin: "auto" }}>
        <SingleSelect param={param} setParam={setParam} setValue={setValue} />
      </div>
      {/* <FormControl
        size="small"
        variant="filled"
        className={classes.formControl}
      >
        <InputLabel>Brand</InputLabel>
        <Select
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
            setParam("Brand");
          }}
        >
          {uniqueRestaurants &&
            uniqueRestaurants.map((item) => {
              return <MenuItem value={item}> {item} </MenuItem>;
            })}
        </Select>
      </FormControl>
      <FormControl
        size="small"
        variant="filled"
        className={classes.formControl}
      >
        <InputLabel>Year</InputLabel>
        <Select
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
            setParam("q");
          }}
        >
          {[2012, 2013, 2014, 2015, 2016].map((item) => {
            return <MenuItem value={item}> {item} </MenuItem>;
          })}
        </Select>
      </FormControl> */}

      <br />
      <Button variant="outlined" onClick={handleClear}>
        Clear Filters
      </Button>

      <div style={{ margin: "auto", textAlign: "center" }}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2} direction="column">
              {restaurants &&
                restaurants.map((item) => (
                  <Grid key={item.Variety} item>
                    <RestaurantCard item={item} />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
      {isError && <h5>Oops, Something went wrong!</h5>}
    </Paper>
  );
};
