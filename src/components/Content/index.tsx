import * as React from "react";
import YouTube from "react-youtube";
import { connect } from "react-redux";
import { debounce } from "lodash";
type Props = {
  open: boolean;
};

type State = {
  width: string;
  height: string;
};

class Content extends React.Component<Props, State> {
  public state = {
    height: `${window.innerHeight - 150}`,
    width: `100%`
  };

  private resize = debounce((_: any): void => {
    this.setState({
      height: `${window.innerHeight - 150}`
    });
  }, 500);

  public componentDidMount() {
    window.onresize = this.resize;
  }

  public render() {
    const opts = {
      height: this.state.height,
      width: this.state.width,
      playerVars: {
        autoplay: 0
      }
    };

    return (
      <div
        style={{
          paddingLeft: this.props.open ? "32%" : "0",
          paddingTop: "100px"
        }}
      >
        <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
      </div>
    );
  }

  private _onReady(event: any) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

type StateToProps = {
  menu: { open: boolean };
  videos: { videos: any[] };
};
const mapStateToProps = (state: StateToProps) => {
  return { open: state.menu.open && state.videos.videos.length > 0 };
};

const ConnectedContent = connect(
  mapStateToProps,
  null
)(Content);

export default ConnectedContent;
