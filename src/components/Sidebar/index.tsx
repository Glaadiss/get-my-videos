// @flow
import * as React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { connect } from "react-redux";
import { withStyles, Theme } from "@material-ui/core/styles";
import { WithStyles, createStyles } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AdjustedItem } from "../../services/gapi/responseTypings";

const styles = (theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: "32%",
      zIndex: 11,
      top: "100px",
      paddingBottom: "72px",
      height: "100%",
      [theme.breakpoints.down("md")]: {
        width: "100%"
      }
    },
    drawerPaperClosed: {
      width: 0
    },
    paddingList: {
      paddingBottom: "108px"
    }
  });

type Props = { open: boolean; videos: AdjustedItem[] } & WithStyles;

const LayoutMenu = (props: Props) => {
  const { open, classes, videos } = props;
  const OPEN = open && videos.length > 0;
  return (
    <Drawer
      classes={{
        paper: OPEN ? classes.drawerPaper : classes.drawerPaperClosed
      }}
      open={OPEN}
      anchor="left"
      variant="persistent"
    >
      <List classes={{ padding: classes.paddingList }}>
        {videos.map(video => (
          <ListItem button={true} id={video.id}>
            <ListItemIcon>
              <img src={video.thumbnail} alt="video-item" />
            </ListItemIcon>{" "}
            <ListItemText primary={<h4> {video.title} </h4>} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

type StateToProps = {
  menu: {
    open: boolean;
  };
  videos: {
    videos: AdjustedItem[];
  };
};

const mapStateToProps = (state: StateToProps) => {
  return {
    open: state.menu.open,
    videos: state.videos.videos
  };
};

const StyledLayoutMenu = withStyles(styles)(LayoutMenu);
export default connect(mapStateToProps)(StyledLayoutMenu);
