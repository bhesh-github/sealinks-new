import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import ReactPlayer from "react-player";

import { ReactComponent as CloseIcon } from "../../../../images/home/healthCareVideos/close-icon.svg";
import { ReactComponent as PlayIcon } from "../../../../images/home/healthCareVideos/playbutton.svg";

const HealthCareVideos = ({ videoList }) => {
  const [activeVideo, setActiveVideo] = useState({
    id: 0,
    videoLink: "",
  });

  const [activeVideoClass, setActiveVideoClass] = useState({
    active: "active-video-card",
    inActive: "video-card",
  });
  const [isOverlay, setOverlay] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState();
  console.log("active link", activeVideo.videoLink);
  const [videoShortLoop, setVideoShortLoop] = useState(0);

  const playerRef = useRef();
  const restartVideo = React.useCallback(() => {
    const timeToStart = 0;
    playerRef.current.seekTo(timeToStart, "seconds");
  }, [playerRef.current]);

  isOverlay
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  return (
    <div className="health-care-outer">
      <div className="health-care-videos">
        <div className="content">
          <div className="heading-wrapper">
            <div className="quote">Empower Your Health</div>
            <div className="heading">Explore Our Healthcare Videos</div>
          </div>
          <div className="videos-wrapper">
            {videoList &&
              videoList.map((item) => {
                const {
                  id = "",
                  title = "",
                  views = "",
                  postDate = "",
                  videoLink = "",
                } = item;
                console.log("video link", videoLink);
                const receivedClass =
                  id === activeVideo.id
                    ? activeVideoClass.active
                    : activeVideoClass.inActive;
                return (
                  <div
                    className={`${receivedClass} card-card`}
                    key={id}
                    onClick={() => {
                      id === activeVideo.id && setOverlay(true);
                      setActiveVideo((prev) => ({
                        ...prev,
                        id: id,
                        videoLink: videoLink,
                      }));
                    }}
                  >
                    <span className="title">{title}</span>
                    <div className="post-date-views-wrapper">
                      <span className="views">{views}k views</span>
                      <span className="post-date">{postDate}</span>
                    </div>
                    <span className="video-duration">7 min</span>
                    <div className="top-over-lay"></div>
                    <ReactPlayer
                      ref={playerRef}
                      url={videoLink && videoLink}
                      className="react-player"
                      volume="0"
                      seekTo={videoShortLoop}
                      muted={true}
                      playing={false}
                      controls={false}
                      onDuration={() => {}}
                      onProgress={(progress) => {
                        if (progress.playedSeconds > 7) {
                          restartVideo();
                        }
                      }}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                );
              })}
          </div>
          <Button className="see-more-btn">See More</Button>
        </div>
      </div>
      {isOverlay && (
        <div>
          <div
            className="video-overlay"
            onClick={() => {
              setOverlay(false);
            }}
          ></div>
          <div className="video-wrapper">
            <ReactPlayer
              // ref={playerRef}
              url={
                activeVideo && activeVideo.videoLink && activeVideo.videoLink
              }
              className="react-player"
              // volume="0"
              // seekTo={videoShortLoop}
              muted={true}
              playing={true}
              controls={true}
              height="100%"
              width="100%"
              loop={true}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <CloseIcon
              className="close-icon"
              onClick={() => {
                setOverlay(false);
              }}
            />
            {isVideoPlaying && (
              <PlayIcon className="play-icon" onClick={isVideoPlaying(false)} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthCareVideos;

HealthCareVideos.defaultProps = {
  videoList: [
    {
      id: 0,
      title: "How to get Admission in NMC",
      postDate: "2 weeks ago",
      videoLink: "https://youtu.be/W4egqOMBo-s?si=elje2XmwdzJyVgvA",
      views: "23",
    },
    {
      id: 2,
      title: "Tips From Dr. Sita",
      postDate: "1 weeks ago",
      views: "50",

      videoLink: "https://youtu.be/3GCoYeyD4AY?si=SXH_7CD38mNnpTiG",
    },
    {
      id: 3,
      title: "Our students",
      views: "100",

      postDate: "3 weeks ago",

      videoLink: "https://youtu.be/PzIymcS5riY?si=AkfOXY_YgU1qMJOs",
    },
  ],
};
