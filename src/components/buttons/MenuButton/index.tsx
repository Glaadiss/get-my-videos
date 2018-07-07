import * as React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { WithStyles, createStyles } from "@material-ui/core";
import { withStyles, Theme } from "@material-ui/core/styles";
import { Actions } from "../../../services/actions/menu";
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) =>
  createStyles({
    icon: {
      height: 45,
      width: 45
    },
    showOnBig: {
      color: theme.palette.secondary.light,
      [theme.breakpoints.down("md")]: {
        display: "none"
      }
    }
  });

type P = WithStyles & {
  openDrawer: () => void;
  closeDrawer: () => void;
  open: boolean;
};

const MenuButton = (props: P) => {
  const { open, closeDrawer, openDrawer } = props;
  const onClick = () => (open ? closeDrawer() : openDrawer());
  return (
    <>
      <Typography variant="title" color="inherit">
        <IconButton color="inherit" aria-label="Menu" onClick={onClick}>
          <MenuIcon className={props.classes.icon} />
        </IconButton>{" "}
        <span className={props.classes.showOnBig}>Get Your Videos!</span>
      </Typography>
    </>
  );
};

const mapStateToProps = (state: { menu: { open: boolean } }) => {
  return { open: state.menu.open };
};
const mapDispatchToProps = (dispatch: any) => ({
  openDrawer: () => dispatch(Actions.openDrawer()),
  closeDrawer: () => dispatch(Actions.closeDrawer())
});

const ConnectedMenuButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MenuButton));

export default ConnectedMenuButton;
