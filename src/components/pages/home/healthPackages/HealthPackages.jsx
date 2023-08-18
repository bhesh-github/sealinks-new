import React from "react";
import PackagesSlider from "./PackagesSlider";
import packPicture from "../../../../images/home/healthPackages/packPicture.png";

const HealthPackages = ({ packDataList }) => {
  return (
    <div className="health-packages-comp">
      <div className="content">
        <div className="heading-wrapper">
          <div className="quote">We care about your Health</div>
          <div className="heading">Our health care packages</div>
        </div>
        <PackagesSlider packDataList={packDataList && packDataList} />
      </div>
    </div>
  );
};

export default HealthPackages;

HealthPackages.defaultProps = {
  packDataList: [
    {
      id: 0,
      type: "picture",
      caption: "Save More With Goodplans.",
      quote:
        "Choose a plan and get our health packages. Then get checked up for you and your loved once.",
      packPicture: packPicture,
    },
    {
      id: 1,
      type: "noPicture",
      packageName: "Bronze Package",
      packType: "bronzePackage",
      quote: "What You’ll Get",
      getMore: false,
      getList: [
        "Vision Check-up",
        "Physician Consultation",
        "Dental Consultation",
      ],
      rate: "1,999",
    },
    {
      id: 2,
      type: "noPicture",
      packageName: "Silver package",
      packType: "silverPackage",
      quote: "What You’ll Get",
      getMore: true,
      getList: [
        "Vision Check-up",
        "Physician Consultation",
        "Dental Consultation",
      ],
      rate: "1,999",
    },
    {
      id: 3,
      type: "noPicture",
      packageName: "Gold package",
      packType: "goldPackage",
      quote: "What You’ll Get",
      getMore: true,
      getList: [
        "Vision Check-up",
        "Physician Consultation",
        "Dental Consultation",
      ],
      rate: "4,999",
    },
    {
      id: 4,
      type: "noPicture",
      packageName: "Dimond package",
      packType: "dimaondPackage",
      quote: "What You’ll Get",
      getMore: true,
      getList: [
        "Vision Check-up",
        "Physician Consultation",
        "Dental Consultation",
      ],
      rate: "9,999",
    },
  ],
};
