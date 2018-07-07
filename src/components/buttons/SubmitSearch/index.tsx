import * as React from "react";
import { WithStyles, createStyles } from "@material-ui/core";
import { withStyles, Theme } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";
import Search from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { Actions } from "../../../services/actions/videos";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center"
    },
    wrapper: {
      margin: theme.spacing.unit,
      position: "relative"
    },
    buttonSuccess: {
      backgroundColor: green[500],
      "&:hover": {
        backgroundColor: green[700]
      }
    },
    fabProgress: {
      color: green[500],
      position: "absolute",
      top: -6,
      left: -6,
      zIndex: 1
    },
    buttonProgress: {
      color: green[500],
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12
    }
  });

type P = WithStyles & {
  isLoading: boolean;
  getVideos: (q: string) => void;
  currentValue: string;
};

const SubmitSearch = (props: P) => {
  const getVideos = () => props.getVideos(props.currentValue);
  return (
    <div className={props.classes.root}>
      <div className={props.classes.wrapper}>
        <Button variant="fab" color="secondary" onClick={getVideos}>
          <Search />
        </Button>
        {props.isLoading && (
          <CircularProgress size={68} className={props.classes.fabProgress} />
        )}
      </div>
    </div>
  );
};

type StateToProps = {
  videos: {
    isLoading: boolean;
  };
  suggestions: {
    currentValue: string;
  };
};

const mapStateToProps = (state: StateToProps) => {
  return {
    isLoading: state.videos.isLoading,
    currentValue: state.suggestions.currentValue
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getVideos: (q: string) => dispatch(Actions.getVideos({ q }))
});

const ConnectedSubmitSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SubmitSearch));

export default ConnectedSubmitSearch;
