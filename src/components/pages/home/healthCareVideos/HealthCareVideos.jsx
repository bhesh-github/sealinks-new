import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoShortLoop, setVideoShortLoop] = useState(0);

  const navigate = useNavigate();
  const playerRef = useRef();

  useEffect(() => {
    document.body.style.overflowY = isOverlay ? "hidden" : "scroll";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isOverlay]);

  const restartVideo = React.useCallback(() => {
    const timeToStart = 0;
    playerRef.current.seekTo(timeToStart && timeToStart, "seconds");
  }, [playerRef]);

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
                      volume={0}
                      muted={true}
                      playing={isVideoPlaying}
                      controls={false}
                      onDuration={() => {}}
                      onPlay={() => {
                        if (videoShortLoop > 0) {
                          playerRef.current.seekTo(videoShortLoop);
                        }
                      }}
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
          <div className="mobile-video">
            <ReactPlayer
              ref={playerRef}
              url={
                videoList &&
                videoList[0] &&
                videoList[0].videoLink &&
                videoList[0].videoLink
              }
              className="mobile-react-player"
              volume={0}
              muted={true}
              playing={isVideoPlaying}
              controls={false}
              onDuration={() => {}}
              onPlay={() => {
                if (videoShortLoop > 0) {
                  playerRef.current.seekTo(videoShortLoop);
                }
              }}
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
          <Button
            className="see-more-btn"
            onClick={() => {
              navigate("video");
            }}
          >
            See More
          </Button>
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
              url={
                activeVideo && activeVideo.videoLink && activeVideo.videoLink
              }
              className="react-player"
              volume={0}
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
            {/* Your CloseIcon and PlayIcon components */}
            <CloseIcon
              className="close-icon"
              onClick={() => {
                setOverlay(false);
              }}
            />
            {isVideoPlaying && (
              <PlayIcon
                className="play-icon"
                onClick={() => {
                  setIsVideoPlaying(false);
                }}
              />
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
      postDate: "1 week ago",
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
