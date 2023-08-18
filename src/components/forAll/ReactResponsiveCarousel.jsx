import React from "react";
// import ReactDOM from "react-dom";
import Slider from "infinite-react-carousel";

//

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const ReactResponsiveCarousel = ({ imagesList }) => {
  return (
    <>
      <Slider
        dots
        className="react-responsive-carousel"
        autoplay={true}
        autoplaySpeed="2200"
        dotsClass="dots-indicator"
        arrowsBlock={false}
        arrows={false}
      >
        {/* {imagesList &&
          imagesList.map((item, idx) => (
            <div
              key={idx}
              className="slider-img"
              style={{ backgroundImage: `url(${item && item})` }}
            ></div>
          ))} */}
        {imagesList &&
          imagesList.map((item, idx) => (
            <img className="slider-img" src={item && item} alt="" key={idx} />
          ))}
      </Slider>
      {/* <div className="react-responsive-carousel">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          // interval="2200"
          interval="1000"
          showStatus={false}
          showArrows={false}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            //   const defStyle = {
            //     marginLeft: 20,
            //     color: "white",
            //     cursor: "pointer",
            //   };
            //   const style = isSelected
            //     ? { ...defStyle, color: "red" }

            //     : { ...defStyle };
            return (
              <span
                className="dots-indicator"
                // style={{ height: "20px", width: "20px", backgroundColor: "red" }}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              ></span>
            );
          }}
        >
          {imagesList &&
            imagesList.map((item, idx) => (
              <img className="slider-img" src={item && item} alt="" key={idx} />
            ))}
        </Carousel>
      </div> */}
    </>
  );
};

export default ReactResponsiveCarousel;
