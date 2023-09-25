import React from "react";
import { useNavigate } from "react-router-dom";

const ActivitiesCard = ({ item }) => {
  const navigate = useNavigate();

  const { name = "", image_link = "" } = item && item;
  return (
    <div
      className="card-wrapper"
      onClick={() => {
        navigate("/activity-content");
      }}
    >
      <div className="activities-card">
        <img src={image_link} alt="" className="card-image" />
      </div>
      <div className="title-wrapper">
        <div className="text">{name}</div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
