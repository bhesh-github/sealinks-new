import React from "react";
import { ImHeart } from "react-icons/im";
import { useState } from "react";
// import StarsRating from "../../../forAll/StarsRating";

import { TbCategory } from "react-icons/tb";

import { BsClockHistory } from "react-icons/bs";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const TripCard = ({ outboundPlaces }) => {
  const {
    image,
    title,
    totalTours,
  } = outboundPlaces;
  // const [isHeartIconClicked, setIsHeartIconClicked] = useState(false);
  // const handleHeartIconClick = () => {
  // 	setIsHeartIconClicked(true);
  // };
  return (
    <div className="outbound-place-card">
      <div className="trip-card-img-wrapper">
        <img className="trip-card-img" src={image} alt="" />
      </div>
      <div className="trip-card-intro">
        <div className="title-wrapper">
          <span className="trip-card-title">{title}</span>
          <div className="cat-text">{totalTours}</div>
        </div>
        <div className="explore-btn">Explore </div>
      </div>
    </div>
  );
};

export default TripCard;

TripCard.defaultProps = {};
