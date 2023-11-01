import React, { useState } from "react";
import sliderImg1 from "../../../../images/home/sliderImages/img1.webp";
import sliderImg2 from "../../../../images/home/sliderImages/img2.png";
import ReactResponsiveCarousel from "../../../forAll/ReactResponsiveCarousel";

const Carousel = ({ imagesList }) => {
  // const [activeSlideBtn, setActiveSlideBtn] = useState(0);

  return (
    <div className="home-silder-comp">
      {/* <div className="slider-view"> */}
      <ReactResponsiveCarousel imagesList={imagesList} />
      {/* {imagesList &&
          imagesList.map((item, idx) => (
            <img className="slider-img" src={item && item} alt="" key={idx} />
          ))} */}
      {/* </div> */}
      {/* <div className="slide-btns-wrapper">
        {imagesList &&
          imagesList.map((_, idx) => (
            <span
              className={`slide-btn ${
                activeSlideBtn === idx && "active-slide-btn"
              }`}
              key={idx}
            ></span>
          ))}
      </div> */}
    </div>
  );
};

export default Carousel;

Carousel.defaultProps = {
  imagesList: [sliderImg1, sliderImg2],
};
