import React from "react";
import Slider from "infinite-react-carousel";

const ReactResponsiveCarousel = ({ cardSlide }) => {
  return (
    <>
      <Slider
        dots
        className="message-carousel"
        autoplay={true}
        autoplaySpeed="3000"
        dotsClass="dots-indicator"
        arrowsBlock={false}
        arrows={false}
      >
        {cardSlide && cardSlide.map((item, idx) => <span key={idx}>{item}</span>)}
      </Slider>
    </>
  );
};

export default ReactResponsiveCarousel;
