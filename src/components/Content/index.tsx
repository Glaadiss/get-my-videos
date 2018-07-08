import * as React from "react";
import YouTube from "react-youtube";
import { connect } from "react-redux";
// import { debounce } from "lodash";
import RateTab from "./RateTab";
import { RootState } from "../../services/reducers/Types";
import { AdjustemDetailItem } from "../../services/gapi/responseTypings";

type Props = AdjustemDetailItem & {
  open: boolean;
};

type State = {
  width: string;
  height: string;
};

class Content extends React.Component<Props, State> {
  public state = {
    height: `${window.innerHeight - 250}`,
    width: `100%`
  };

  public render() {
    const opts = {
      height: this.state.height,
      width: this.state.width,
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <div
        style={{
          paddingLeft: this.props.open ? "32.5%" : "0",
          paddingTop: "70px"
        }}
      >
        <YouTube videoId={this.props.id} opts={opts} onReady={this._onReady} />
        <RateTab />
      </div>
    );
  }

  private _onReady(event: any) {
    event.target.pauseVideo();
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    open: state.menu.open && state.videos.videos.length > 0,
    ...state.currentVideo
  };
};

const ConnectedContent = connect(
  mapStateToProps,
  null
)(Content);

export default ConnectedContent;
