import React, { Component } from "react";
import VideoPlayer from "react-video-js-player";

class VideoPlav extends Component {
  player = {};
  state = {
    video: {
      URL: "https://youtu.be/yJkmu4PVDiU",
      poster: "/1.png",
    },
  };

  onPlayerReady(player) {
    this.player = player;
  }

  render() {
    return (
      <div>
        <VideoPlayer
          controls={true}
          src={this.state.video.URL}
          poster={this.state.video.poster}
          width="720"
          height="420"
          onReady={this.onPlayerReady.bind(this)}
        />
      </div>
    );
  }
}
export default VideoPlav;
