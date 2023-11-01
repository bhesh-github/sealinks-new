import React from "react";

import { TbSearch } from "react-icons/tb";
import { TiLocationOutline } from "react-icons/ti";
import img1 from "../../../../images/home/sliderImages/img1.webp";
import img2 from "../../../../images/home/sliderImages/img2.png";
import img3 from "../../../../images/home/sliderImages/img3.jpg";
// import ReactResponsiveCarousel from "../../../forAll/ReactResponsiveCarousel";
import Carousel from "react-material-ui-carousel";

function HomeSlider({ imagesList }) {
  return (
    <div className="carousel-wrapper">
      <Carousel navButtonsAlwaysInvisible={true} className="carousel-comp" indicators={false}>
        {imagesList
          ? imagesList.map((item) => {
              const { id = "", image_link = "" } = item;
              return (
                <div className="slide-wrapper">
                  <div className="dark-overlay"></div>
                  <div
                    key={id}
                    alt=""
                    className="slide-img"
                    style={{ backgroundImage: `url(${image_link})` }}
                  ></div>
                </div>
              );
            })
          : ""}
      </Carousel>
      <div className="text-wrapper">
        <div className="main-caption">Wonders Are Waiting..</div>
        <div>
          Discover the world with over 50,000+ unforgettable travel experiences.
        </div>
        <div className="input-wrapper">
          {/* <div className="location-icon-wrapper"> */}
          <TiLocationOutline className="location-icon" />
          {/* </div> */}
          <input
            type="text"
            className="search-input"
            placeholder="Anywhere you wanna go.."
          />
          <div className="search-icon-wrapper">
            <TbSearch className="search-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;

HomeSlider.defaultProps = {
  imagesList: [
    { id: 3, image_link: img3 },
    { id: 1, image_link: img1 },
    { id: 2, image_link: img2 },
  ],
};
{
  /* <img key={id} src={image_link} alt="" className="slide-img" /> */
}
