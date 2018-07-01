// @flow
import * as React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { WithStyles, createStyles } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const styles = () =>
  createStyles({
    drawerPaper: {
      top: "64px",
      width: "255px"
    }
  });

type Props = { open: boolean } & WithStyles;

const LayoutMenu = (props: Props) => {
  const { open, classes } = props;
  return (
    <Drawer
      classes={{ paper: classes.drawerPaper }}
      open={open}
      anchor="left"
      variant="permanent"
    >
      <List>
        <ListItem button={true}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
      </List>
    </Drawer>
  );
};

type ReduxState = {
  menu: {
    open: boolean;
  };
};

const mapStateToProps = ({ menu }: ReduxState) => {
  return {
    open: menu.open
  };
};

const StyledLayoutMenu = withStyles(styles)(LayoutMenu);
export default connect(mapStateToProps)(StyledLayoutMenu);
