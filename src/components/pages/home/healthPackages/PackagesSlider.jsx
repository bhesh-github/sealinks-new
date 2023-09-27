import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PackageCard from "./PackageCard";
// import { ReactComponent as DotOutline } from '../../../images/dots/dot-outline.svg';
// import { ReactComponent as DotFill } from '../../../images/dots/dot-fill.svg';
//

const PackagesSlider = ({ packDataList }) => {
  const [slidesToShow, setSlidesToShow] = useState(3);

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
      breakpoint: { max: 3000, min: 1221 },
      items: 3.1,
    },
    x: {
      breakpoint: { max: 1221, min: 1133 },
      items: 2.9,
    },
    y: {
      breakpoint: { max: 1133, min: 1111 },
      items: 2.8,
    },
    z: {
      breakpoint: { max: 1111, min: 1035 },
      items: 2.6,
    },
    a: {
      breakpoint: { max: 1035, min: 1025 },
      items: 2.4,
    },
    b: {
      breakpoint: { max: 1025, min: 922 },
      items: 2.3,
    },
    c: {
      breakpoint: { max: 922, min: 810 },
      items: 2,
    },
    d: {
      breakpoint: { max: 810, min: 750 },
      items: 1.8,
    },
    e: {
      breakpoint: { max: 750, min: 670 },
      items: 1.6,
    },
    f: {
      breakpoint: { max: 670, min: 596 },
      items: 1.4,
    },
    g: {
      breakpoint: { max: 596, min: 537 },
      items: 1.3,
    },
    h: {
      breakpoint: { max: 536.5, min: 400 },
      items: 1.2,
    },
    i: {
      breakpoint: { max: 450, min: 400 },
      items: 1,
    },
    j: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
    // tablet: {
    //   breakpoint: { max: 1024, min: 464 },
    //   items: 2,
    // },
    // mobile: {
    //   breakpoint: { max: 464, min: 0 },
    //   items: 1,
    // },
  };

  useEffect(() => {
    window.innerWidth <= 550 ? setSlidesToShow(1) : setSlidesToShow(3);
  }, [window.innerWidth]);


  return (
    <div className="health-packs-carousel">
      <Carousel
        responsive={responsive}
        itemClass="style-me"
        renderDotsOutside={true}
        showDots={true}
        draggable={true}
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
        slidesToSlide={slidesToShow}
        customDot={<CustomDot />}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {packDataList &&
          packDataList.map((item, idx) => (
            <PackageCard key={idx} packData={item && item} />
          ))}
      </Carousel>
    </div>
  );
};

export default PackagesSlider;
