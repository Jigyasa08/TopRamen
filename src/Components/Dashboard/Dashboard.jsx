import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

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

  //onLoad get API will be called
  useEffect(() => {
    dispatch(getRestaurantDetails(param, value));
  }, [param, value]);

  const isLoading = useSelector((state) => state.isLoading);
  const isError = useSelector((state) => state.isError);
  const restaurants = useSelector((state) => state.data);

  //Function to clear the applied filters
  const handleClear = () => {
    setParam("");
    setValue("");
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
      <Paper
        elevation={1}
        style={{ maxWidth: "60%", margin: "auto", padding: "10px" }}
      >
        <div style={{ width: "400px", margin: "auto" }}>
          {/* We can either type and search for the filers or slect the various filter types from the dropdown */}
          <SingleSelect param={param} setParam={setParam} setValue={setValue} />
        </div>

        <br />
        <Button variant="outlined" onClick={handleClear}>
          Clear Filters
        </Button>
      </Paper>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2} direction="column">
              {restaurants &&
                restaurants
                  .filter((item) => {
                    //When Ranking filter is applied return the array with the selected Rank
                    if (param == "Ranking") {
                      return item["Top Ten"].split(" #")[1] === value;
                    }
                    //For all other cases, return the same array
                    else {
                      return item;
                    }
                  })
                  .map((item) => (
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
