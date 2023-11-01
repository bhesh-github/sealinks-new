import React from "react";
import Carousel from "better-react-carousel";
// import img1 from "../../../../images/home/sliderImages/img1.webp";
// import img2 from "../../../../images/home/sliderImages/img2.png";
// import img3 from "../../../../images/home/sliderImages/img3.jpg";

const OutboundBetterCarousel = ({ outboundPlaces }) => {
  return (
    <div className="inbound-carousel">
      <Carousel cols={1} rows={1} gap={20} slidesPerRow={3}>
        {outboundPlaces && outboundPlaces}
        {/* ... */}
      </Carousel>
    </div>
  );
};
export default OutboundBetterCarousel;
