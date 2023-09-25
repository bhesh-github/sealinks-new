import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";


const ReactResponsiveCarousel = ({ imagesList, currentImageId }) => {
  return (
    <div>
      <Carousel
        style={{ zIndex: "-9" }}
        // showArrows={true}
        showThumbs={false}
        swipeable={true}
        // showIndicators={false}
        stopOnHover={true}
        showStatus={false}
        autoPlay={false}
        selectedItem={currentImageId}
        interval="2000"
        infiniteLoop={false}
        transitionTime="400"
        showArrows={true}
        className="gallery-carousel"

      >
        {imagesList &&
          imagesList.map((item, idx) => (
            <div
              key={idx}
              className="image-wrapper"
            >
              <img src={item && item} alt=""className="slider-img" />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default ReactResponsiveCarousel;