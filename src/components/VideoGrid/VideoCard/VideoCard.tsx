import classNames from "classnames";
import React, { useCallback, useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { onSelectVideoToRemoval } from "../../../app/features/library/library-slice";
import { useDispatch } from "../../../app/hooks";
import { ReactComponent as EllipsisIcon } from "../../../assets/svg/ellipsis.svg";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";
import "./VideoCard.scss";
const VideoCard = ({ video }: any) => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const tags = video.tags.slice(0, 3);
  const dispatch = useDispatch();

  const onCloseVisible = useCallback(() => {
    setVisible(false);
  }, []);

  function onToggleVisible() {
    setVisible((prevState) => !prevState);
  }

  useOutsideAlerter(cardRef, onCloseVisible);
  return (
    <div key={video.id} className="video-card">
      <div
        className="video-thumbnail"
        style={{
          backgroundImage: `url("${video.background.image}")`,
        }}
      >
        <div
          ref={cardRef}
          className={classNames("ellipsis-options", visible && "visible")}
          onClick={onToggleVisible}
        >
          <EllipsisIcon />
          {visible && (
            <div className="dropdown">
              <Link className="dropdown-option" to={`/video/${video.id}`}>
                <p>Edit video</p>
              </Link>
              <div
                className="dropdown-option error"
                onClick={() => dispatch(onSelectVideoToRemoval(video.id))}
              >
                <p>Delete video</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="video-title">
        <h3>{video.title}</h3>
      </div>
      {tags.length > 0 && (
        <div className="video-tags">
          {tags.map((tag: any, idx: number) => {
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
};

export default VideoCard;
