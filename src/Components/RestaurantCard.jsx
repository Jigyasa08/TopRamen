import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    maxWidth: 700,
    margin: "auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    backgroundColor: red[500],
    height: 50,
    width: 50,
  },
}));

export const RestaurantCard = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>{item.Brand[0]}</Avatar>}
        titleTypographyProps={{ variant: "h6" }}
        title={item.Brand}
        subheaderTypographyProps={{ align: "right", variant: "body" }}
        subheader={item["Top Ten"].split(" ")[1]}
      />

      <Divider />
      <CardContent style={{ textAlign: "left" }}>
        <Typography variant="h6" color="grey" style={{ fontStyle: "italic" }}>
          <span style={{ fontWeight: "bolder", color: "black" }}>
            Variety:{" "}
          </span>{" "}
          {item.Variety}
        </Typography>
        <Typography variant="h6" color="grey" style={{ fontStyle: "italic" }}>
          <span style={{ fontWeight: "bolder", color: "black" }}>Style: </span>
          {item.Style}
        </Typography>
        <Typography variant="h6" color="grey" style={{ fontStyle: "italic" }}>
          <span style={{ fontWeight: "bolder", color: "black" }}>Country:</span>
          {item.Country}
        </Typography>
        <Typography variant="h6" color="grey" style={{ fontStyle: "italic" }}>
          <span style={{ fontWeight: "bolder", color: "black" }}>Stars:</span>
          {item.Stars}
        </Typography>
        <Typography variant="h6" color="grey" style={{ fontStyle: "italic" }}>
          <span style={{ fontWeight: "bolder", color: "black" }}>Year:</span>
          {item["Top Ten"].split(" #")[0]}
        </Typography>
      </CardContent>
    </Card>
  );
};
