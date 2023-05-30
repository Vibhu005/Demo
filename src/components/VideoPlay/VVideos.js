import React from "react";
import VideoPlayer from "react-video-js-player";
import Sample from "./UrlVideo/Sample1.mp4";
import "./VVideos.css";

const VVideos = () => {
  const videoSrc = Sample;
  const poster = "https://youtu.be/lVJLNsLNnWs";

  return (
    <>
      <div>
        <h1>hello videos</h1>
        <VideoPlayer
          src={videoSrc}
          poster={poster}
          width="720"
          height="420"
          className="video"
        />
      </div>
    </>
  );
};

export default VVideos;
