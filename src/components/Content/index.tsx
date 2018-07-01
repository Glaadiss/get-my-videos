import * as React from "react";
import YouTube from "react-youtube";

type State = {
  width: string;
  height: string;
};

class Content extends React.Component<{}, State> {
  public state = {
    height: `${window.innerHeight - 100}`,
    width: `${window.innerWidth - 300}`
  };

  public componentDidMount() {
    window.onresize = (_: any): void => {
      this.setState({
        height: `${window.innerHeight - 100}`,
        width: `${window.innerWidth - 300}`
      });
    };
  }

  public render() {
    const opts = {
      height: this.state.height,
      width: this.state.width,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <div style={{ paddingLeft: "255px", paddingTop: "64px" }}>
        <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
      </div>
    );
  }

  private _onReady(event: any) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Content;
