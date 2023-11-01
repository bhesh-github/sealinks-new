import React from "react";
import Carousel from "better-react-carousel";
import img1 from "../../../../images/home/sliderImages/img1.webp";
import img2 from "../../../../images/home/sliderImages/img2.png";
import img3 from "../../../../images/home/sliderImages/img3.jpg";

const Gallery = () => {
  return (
    <Carousel cols={1} rows={1} gap={10}>
      <Carousel.Item>
        <img width="100%" src={img1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img2} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={img3} />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  );
};
export default Gallery;
