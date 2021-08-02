import { AppBar, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  appBar: {
    // backgroundColor: "black",
    // boxShadow: "10px 5px 5px 10px red",
    // borderRadius: "50%",
  },
  text: {
    color: "orange",
  },
  // Container: {
  //   backgroundColor: "blue",
  //   width: "100%",
  //   height: "100%",
  // },
});

export default function Nav() {
  const classes = useStyles();
  return (
    // <Container className={classes.Container}>
    <AppBar position="static" color="secondary" className={classes.appBar}>
      <Typography variant="h5" color="textPrimary" className={classes.text}>
        Christopher Trevino
      </Typography>
    </AppBar>
    // </Container>
  );
}
