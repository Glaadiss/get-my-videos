import * as React from "react";
import { RootState } from "../../../services/reducers/Types";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import UserButton from "../UserButton";
import {
  signIn as signInCall,
  signOut as signOutCall
} from "../../../services/gapi";
import { connect } from "react-redux";
import { Actions } from "../../../services/actions/user";
type S = {
  anchorEl?: string;
};

type P = {
  logged: boolean;
  signOut: () => void;
};
class UserMenu extends React.Component<P, S> {
  public state = {
    anchorEl: undefined
  };
  public handleClick = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  public signInCall = () => {
    signInCall();
    this.handleClose();
  };

  public signOutCall = () => {
    signOutCall();
    this.props.signOut();
    this.handleClose();
  };

  public handleClose = () => {
    this.setState({ anchorEl: undefined });
  };

  public render() {
    const { anchorEl } = this.state;
    return (
      <>
        <UserButton anchorEl={anchorEl} openMenu={this.handleClick} />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl as any}
          open={!!anchorEl}
          onClose={this.handleClose}
        >
          {this.props.logged ? (
            <MenuItem onClick={this.signOutCall}>Sign out!</MenuItem>
          ) : (
            <MenuItem onClick={this.signInCall}>Sign in with G!</MenuItem>
          )}
        </Menu>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    logged: state.user.logged
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  signOut: () => dispatch(Actions.signOut())
});

const ConnectedUserMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMenu);

export default ConnectedUserMenu;
