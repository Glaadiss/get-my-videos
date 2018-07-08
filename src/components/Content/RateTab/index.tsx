import * as React from "react";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";
import Button from "@material-ui/core/Button";
import { WithStyles, withStyles, Typography, Divider } from "@material-ui/core";
import { connect } from "react-redux";
import { RootState } from "../../../services/reducers/Types";
import {
  AdjustemDetailItem,
  RatingEnum
} from "../../../services/gapi/responseTypings";
import { Actions } from "../../../services/actions/currentVideo";
import { styles, Container, LContainer, RContainer } from "./styles";
import { Rate, changeToK, changeStatus } from "./auxiliary";
import CircularProgress from "@material-ui/core/CircularProgress";

export type P = {
  isLikesLoading: boolean;
  logged: boolean;
  currentUserLike: RatingEnum;
  rate: (payload: Rate) => void;
} & WithStyles &
  AdjustemDetailItem;

const RateTab = (props: P) => {
  const {
    classes,
    logged,
    statistics,
    id,
    currentUserLike,
    isLikesLoading
  } = props;
  const buttonCommon = (type: "like" | "dislike") => ({
    variant: "contained" as any,
    disabled: !logged || isLikesLoading,
    className: currentUserLike === type ? classes.buttonPicked : classes.button,
    onClick: props.rate.bind(null, {
      id,
      currentUserLike,
      target: type
    })
  });

  if (!props.id) {
    return <Container />;
  }
  return (
    <>
      <Container>
        <LContainer>
          <Typography variant="title" className={classes.colorInherit}>
            {props.title}
          </Typography>
          <Typography variant="subheading" className={classes.colorInherit}>
            {changeToK(statistics.viewCount)} views
          </Typography>
        </LContainer>
        <RContainer>
          <Button {...buttonCommon("like")}>
            {changeToK(statistics.likeCount)}
            <ThumbUp className={classes.rightIcon} />
          </Button>
          <Button {...buttonCommon("dislike")}>
            {changeToK(statistics.dislikeCount)}
            <ThumbDown className={classes.rightIcon} />
          </Button>
          {isLikesLoading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </RContainer>
      </Container>
      <Container>
        <Divider light={true} />
      </Container>
      <Container>
        <Typography variant="subheading" className={classes.colorInherit}>
          {props.description}
        </Typography>
      </Container>
    </>
  );
};
const mapStateToProps = (state: RootState) => {
  return {
    logged: state.user.logged,
    ...state.currentVideo
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    rate: (payload: Rate) => dispatch(Actions.rate(changeStatus(payload)))
  };
};
const StyledRateTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RateTab));

export default StyledRateTab;
