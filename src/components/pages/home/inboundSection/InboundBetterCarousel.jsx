import React from "react";
import Carousel from "better-react-carousel";
// import img1 from "../../../../images/home/sliderImages/img1.webp";
// import img2 from "../../../../images/home/sliderImages/img2.png";
// import img3 from "../../../../images/home/sliderImages/img3.jpg";

const InboundBetterCarousel = ({ tripsCards }) => {
  return (
    <div className="inbound-carousel">
      <Carousel cols={4} rows={1} gap={20} slidesPerRow={2}>
        {tripsCards && tripsCards}
        {/* ... */}
      </Carousel>
    </div>
  );
};
export default InboundBetterCarousel;
