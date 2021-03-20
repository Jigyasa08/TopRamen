import {
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantCard } from "../RestaurantCard";
import {
  filterRestaurantDetails,
  getRestaurantDetails,
} from "./DashboardRedux/action";

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
}));

export const Dashboard = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [param, setParam] = useState("");
  const [brand, setBrand] = useState("");
  //onLoad get API will be called
  useEffect(() => {
    dispatch(getRestaurantDetails(param, brand));
  }, [brand]);

  const isLoading = useSelector((state) => state.isLoading);
  const isError = useSelector((state) => state.isError);
  const restaurants = useSelector((state) => state.data);
  const uniqueRestaurants = [...new Set(restaurants.map((item) => item.Brand))];
  //   console.log(uniqueRestaurants);
  //   const handleFilter = (e) => {
  //     ;
  //     console.log(brand);
  //     dispatch(filterRestaurantDetails("Brand", brand));
  //   };
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
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel>Brand</InputLabel>
        <Select
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
            setParam("Brand");
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {uniqueRestaurants &&
            uniqueRestaurants.map((item) => {
              return <MenuItem value={item}> {item} </MenuItem>;
            })}
        </Select>
      </FormControl>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={3} direction="column">
              {restaurants &&
                restaurants.map((item) => (
                  <Grid key={item.id} item>
                    <RestaurantCard item={item} />
                    {/* <Paper className={classes.paper} /> */}
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
