import React from "react";
import { ImHeart } from "react-icons/im";
import { useState } from "react";
import StarsRating from "./StarsRating";

import { TbCategory } from "react-icons/tb";

import { BsClockHistory } from "react-icons/bs";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const TripCard = ({ trips }) => {
  const { image, category, title, days, rating, totalReviews, price } = trips;
  // const [isHeartIconClicked, setIsHeartIconClicked] = useState(false);
  // const handleHeartIconClick = () => {
  // 	setIsHeartIconClicked(true);
  // };
  return (
    <div className="trip-card">
      <div className="trip-card-img-wrapper">
        <img className="trip-card-img" src={image} alt="" />
        <div className="days">
          <div className="texts">{days}</div>
        </div>
      </div>
      <div className="trip-card-intro">
        <div className="title-wrapper">
          <span className="trip-card-title">{title}</span>
          <div className="cat-text">{category}</div>
        </div>
        <div className="price-booknow-btn-wrapper">
          <div className="trip-card-price">
            <span className="from-text">from</span>
            <span className="price">Rs.{price}</span>
            {/* <span className="per-person">per person</span> */}
          </div>
          <span className="star-wrapper">
            <RiStarFill className="start-icon" />
            <div className="star-text">{rating.rate && rating.rate}</div>
          </span>
          {/* <div > */}
          {/* <button className="trip-card-button">Book Now</button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default TripCard;

TripCard.defaultProps = {};
