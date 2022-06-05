import React from "react";
import { useSelector } from "../../app/hooks";
import "./VideoGrid.scss";
const VideoGrid = () => {
  const videos = useSelector((state) => state.library.videos);
  console.log(videos);
  if (videos && videos.length > 0) {
    return (
      <div className="video-grid">
        {videos.map((video) => {
          const tags = video.tags.slice(0, 3);
          return (
            <div key={video.id} className="video-card">
              <div
                className="video-thumbnail"
                style={{
                  backgroundColor: "black",
                  backgroundImage: `url("${video.background.image}")`,
                }}
              ></div>
              <div className="video-title">
                <h3>{video.title}</h3>
              </div>
              {tags.length > 0 && (
                <div className="video-tags">
                  {tags.map((tag, idx) => {
                    return (
                      <div key={tag + idx} className="video-tag">
                        {tag}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

export default VideoGrid;
