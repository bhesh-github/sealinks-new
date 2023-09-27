import React, { useState, useRef} from "react";
import { lazy } from "react";
import { VscClose } from "react-icons/vsc";
import ReactPlayer from "react-player";

const InnerBanner = lazy(() => import("../../forAll/InnerBanner"));

const VideosPage = ({ videoList }) => {
  const [activeVideo, setActiveVideo] = useState({
    videoLink: "",
  });

  const [isSliderOverlay, setIsSliderOverlay] = useState(false);
  const playerRef = useRef();

  isSliderOverlay
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  const innerBannerInfo = {
    pageName: "Videos",
    // title: `${
    //   selectedContentDetail &&
    //   selectedContentDetail.slugSublink &&
    //   selectedContentDetail.slugSublink.replace("-", " ")
    // }`,
  };

  const videoCard =
    videoList &&
    videoList.map((item) => {
      const { id = "", videoLink = "" } = item;
      return (
        <div
          className="react-player-wrapper"
          key={id}
          onClick={() => {
            setActiveVideo(videoLink);
            setIsSliderOverlay(true);
          }}
        >
          <div className="top-over-lay"></div>
          <ReactPlayer
            ref={playerRef}
            url={videoLink && videoLink}
            className="react-player"
            volume={0}
            muted={true}
            controls={false}
            onDuration={() => {}}
            height="100%"
            width="100%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      );
    });

    return (
    <>
      <div className="video-page">
        <InnerBanner innerBannerInfo={innerBannerInfo} />
        <div className="section-wrapper">
          <div className="section-heading">
            <div className="highlight">Videos</div>
            <div className="underline-wrapper">
              <span className="dark"></span>
            </div>
          </div>
          <div className="cards-wrapper">{videoCard && videoCard}</div>
        </div>
      </div>
      {isSliderOverlay && (
        <div className="overlay-outer">
          <div
            className="slider-overlay"
            onClick={() => {
              setIsSliderOverlay(false);
            }}
          >
            <div className="btn-wrapper">
              <VscClose
                className="close-btn"
                onClick={() => {
                  setIsSliderOverlay(false);
                }}
              />
            </div>
          </div>
          <div className="silders-comp">
            <ReactPlayer
              ref={playerRef}
              url={activeVideo && activeVideo}
              className="react-player"
              volume={0}
              muted={true}
              playing={true}
              controls={true}
              onDuration={() => {}}
              // height="100%"
              width="100%"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideosPage;

VideosPage.defaultProps = {
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
    {
      id: 4,
      title: "How to get Admission in NMC",
      postDate: "2 weeks ago",
      videoLink: "https://youtu.be/W4egqOMBo-s?si=elje2XmwdzJyVgvA",
      views: "23",
    },
    {
      id: 5,
      title: "Tips From Dr. Sita",
      postDate: "1 week ago",
      views: "50",
      videoLink: "https://youtu.be/3GCoYeyD4AY?si=SXH_7CD38mNnpTiG",
    },
    {
      id: 6,
      title: "Our students",
      views: "100",
      postDate: "3 weeks ago",
      videoLink: "https://youtu.be/PzIymcS5riY?si=AkfOXY_YgU1qMJOs",
    },
  ],
};
