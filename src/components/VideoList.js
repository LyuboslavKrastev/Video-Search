import React from "react";
import VideoItem from "./VideoItem";

// destructure the props component and take videos
const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem />;
  });

  return <div>{renderedList}</div>
};

export default VideoList;
