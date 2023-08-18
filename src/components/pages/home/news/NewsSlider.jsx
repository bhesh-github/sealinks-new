import React from "react";
// import ReactDOM from "react-dom";
import Slider from "infinite-react-carousel";

//

import "react-responsive-carousel/lib/styles/carousel.min.css";
import NewsCard from "./NewsCard";
// import { Carousel } from "react-responsive-carousel";

const ReactResponsiveCarousel = ({ newsDataList }) => {
  return (
    <>
      <Slider
        dots
        className="react-responsive-carousel"
        autoplay={false}
        duration="100"
        dotsClass="dots-indicator dots-wrapper"
        arrowsBlock={false}
        arrows={false}
      >
        {newsDataList &&
          newsDataList.map((item = "", idx) => (
            <div key={idx}>
              <NewsCard newsData={item} />
            </div>
          ))}
      </Slider>
    </>
  );
};

export default ReactResponsiveCarousel;
