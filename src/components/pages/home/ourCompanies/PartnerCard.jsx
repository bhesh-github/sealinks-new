import React from "react";

const PartnerCard = ({ item }) => {
//   const { image_link = "" } = item;
  return (
    <div className="p-card">
      <img src={item} alt="" className="p-img" />
    </div>
  );
};

export default PartnerCard;
