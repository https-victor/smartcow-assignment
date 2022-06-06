import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "../../app/hooks";
import VideoCard from "./VideoCard/VideoCard";
import "./VideoGrid.scss";
const VideoGrid = () => {
  const videos = useSelector((state) => state.library.videos);

  if (videos && videos.length > 0) {
    return (
      <div className="video-grid">
        {videos.map((video) => {
          return <VideoCard key={video.id} video={video} />;
        })}
      </div>
    );
  }
  return null;
};

export default VideoGrid;
