import React from "react";
import Button from "@mui/material/Button";

import { ReactComponent as RightArrow } from "../../../../images/home/healthPackages/rightArrow.svg";
import { ReactComponent as TickIcon } from "../../../../images/home/healthPackages/tickIcon.svg";

import { ReactComponent as PackageIconBronze } from "../../../../images/home/healthPackages/packageIconGold.svg";
import { ReactComponent as PackageIconSilver } from "../../../../images/home/healthPackages/packageIconSilver.svg";
import { ReactComponent as PackageIconGold } from "../../../../images/home/healthPackages/packageIconGold.svg";
// import { ReactComponent as Diamond } from "../../../../images/home/healthPackages/diamond.svg";
import packageIconDiamond from "../../../../images/home/healthPackages/Diamond.png";

const PackageCard = ({ packData }) => {
  const {
    id = "",
    type = "",
    caption = "",
    quote = "",
    packPicture = "",
    packType = "",
    packageName = "",
    getMore = "",
    getList = "",
    rate = "",
  } = packData;
  const cardIcon = {
    bronzePackage: PackageIconBronze && (
      <PackageIconBronze className="right-icon" />
    ),
    silverPackage: PackageIconSilver && (
      <PackageIconSilver className="right-icon" />
    ),
    goldPackage: PackageIconGold && <PackageIconGold className="right-icon" />,
    // dimaondPackage: Diamond && <Diamond className="right-icon" />,
    dimaondPackage: packageIconDiamond && <img src={packageIconDiamond} alt="" className="pack-icon"/>,

  };
  return (
    <>
      {type === "picture" ? (
        <div className="card pack-card" key={id}>
          <div className="caption-icon-wrapper">
            <div className="caption">{caption}</div>
            {cardIcon[packType]}
            <RightArrow className="right-icon" />
          </div>
          <div className="quote">{quote}</div>
          <img src={packPicture} alt="" className="pack-picture" />
        </div>
      ) : (
        <div className="card no-picture" key={id}>
          <div className="icon-head-wrapper">
            {cardIcon[packType]}
            <span className="heading">{packageName}</span>
          </div>
          <div className="mid-wrapper">
            <div className="quote">{quote}</div>
            <div className="get-list-wrapper">
              {getList.map((item, idx) => (
                <div className="tick-text-wrapper" key={idx}>
                  <TickIcon className="tick-icon" />
                  <div className="get-text">{item}</div>
                </div>
              ))}
              {getMore && (
                <div
                  className="tick-text-wrapper"
                  style={{ marginLeft: "1.5px" }}
                >
                  <TickIcon
                    className="tick-icon"
                    style={{ visibility: "hidden" }}
                  />
                  <div className="get-text and-more">and more</div>
                </div>
              )}
            </div>
            <div className="divider-line"></div>
            <div className="rate">Rs. {rate}/-</div>
          </div>
          <Button className="choose-btn">Choose</Button>
        </div>
      )}
    </>
  );
};

export default PackageCard;
