// @flow
import * as React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AdjustedItem } from "../../services/gapi/responseTypings";
import { RootState } from "../../services/reducers/Types";
import { Actions } from "../../services/actions/currentVideo";
import { styles } from "./styles";

type Props = WithStyles & {
  open: boolean;
  videos: AdjustedItem[];
  selectVideo: (id: string, closeTab: boolean) => void;
} & WithStyles;

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
        {console.log(videos)}
        {videos.map(video => (
          <ListItem
            button={true}
            key={video.id}
            onClick={props.selectVideo.bind(null, video.id)}
          >
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

const mapStateToProps = (state: RootState) => {
  return {
    open: state.menu.open,
    videos: state.videos.videos
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectVideo: (id: string, closeTab: boolean) => {
      dispatch(Actions.getDetails({ id }));
      dispatch(Actions.getOwnerLikes({ id }));
    }
  };
};

const StyledLayoutMenu = withStyles(styles)(LayoutMenu);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledLayoutMenu);
