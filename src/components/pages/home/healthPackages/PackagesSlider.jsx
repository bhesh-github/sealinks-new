import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PackageCard from "./PackageCard";
// import { ReactComponent as DotOutline } from '../../../images/dots/dot-outline.svg';
// import { ReactComponent as DotFill } from '../../../images/dots/dot-fill.svg';
// 

const PackagesSlider = ({ packDataList }) => {
  const CustomDot = ({ onMove, index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <li className={active ? "active" : "inactive"} onClick={() => onClick()}>
        {active ? (
          <FiberManualRecordIcon className="custom-dot active-dot" />
        ) : (
          <FiberManualRecordIcon className="custom-dot" />
        )}
      </li>
    );
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="health-packs-carousel">
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={[
          "desktop",
          "tablet",
          "miniTablet",
          "mobile",
          "custom",
        ]}
        itemClass="style-me"
        renderDotsOutside={true}
        showDots={true}
        draggable={true}
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
        slidesToSlide={3}
        customDot={<CustomDot />}
      >
        {packDataList &&
          packDataList.map((item) => <PackageCard packData={item && item} />)}
      </Carousel>
    </div>
  );
};

export default PackagesSlider;
