import * as React from "react";
import {
  CircularProgress,
  Theme,
  WithStyles,
  withStyles,
  createStyles
} from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    placeholder: {
      marginTop: "15%"
    }
  });

const Progress = (props: WithStyles) => {
  return (
    <div className={props.classes.root}>
      {" "}
      <div className={props.classes.placeholder}>
        <CircularProgress size={78} />{" "}
      </div>{" "}
    </div>
  );
};

export default withStyles(styles)(Progress);
