import React from "react";
// import BarButtons from "./DepartmentsButton";
// import { useEffect } from "react";
import MuiAccordion from "../../../forAll/MuiAccordion";

const ContentsBar = ({
  allContentsList,
  selectedContentDetail,
  setSelectedContentDetail,
  isSectionBar,
  handleIsSectionBar,
}) => {
  return (
    <>
      <div className="contents-bar-desktop">
        <div className="section-heading">Related Services</div>
        <div className="contents-wrapper">
          <MuiAccordion
            accordionFor="desktop"
            allContentsList={allContentsList}
            selectedContentDetail={
              selectedContentDetail && selectedContentDetail
            }
            setSelectedContentDetail={
              setSelectedContentDetail && setSelectedContentDetail
            }
          />
        </div>
      </div>
      <div
        className="contents-bar-outer"
        style={{
          display: !isSectionBar ? "none" : "",
        }}
      >
        <div
          className="contents-bar-mobile"
          style={{
            display: isSectionBar ? "block" : "none",
          }}
        >
          <div className="section-heading">Related Services</div>
          <div className="contents-wrapper">
            <MuiAccordion
              allContentsList={allContentsList}
              selectedContentDetail={
                selectedContentDetail && selectedContentDetail
              }
              setSelectedContentDetail={
                setSelectedContentDetail && setSelectedContentDetail
              }
              handleIsSectionBar={handleIsSectionBar && handleIsSectionBar}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentsBar;

ContentsBar.defaultProps = {
  allContentsList: [
    {
      id: 0,
      text: "Academic Programs",
      navigateTo: "academic-programs",
      childLink: [
        {
          id: 0,
          text: "Medical Program",
          navigateTo: "medical-program",
        },
        {
          id: 1,
          text: "Dental Program",
          navigateTo: "dental-program",
        },
        {
          id: 2,
          text: "Paramedical Program",
          navigateTo: "paramedical-program",
        },
        {
          id: 3,
          text: "Nursing Program",
          navigateTo: "nursing-program",
        },
      ],
    },
    {
      id: 1,
      text: "Faculty",
      navigateTo: "faculty",
      childLink: [
        {
          id: 0,
          text: "MBBS Program",
          navigateTo: "mbbs-program",
        },
        {
          id: 1,
          text: "BSC Nursing",
          navigateTo: "bsc-nursing",
        },
        {
          id: 2,
          text: "PG Program",
          navigateTo: "pg-program",
        },
        {
          id: 3,
          text: "BDS Program",
          navigateTo: "bds-program",
        },
      ],
    },
    {
      id: 2,
      text: "Facilities & Services",
      navigateTo: "facilities-and-services",
      childLink: [
        {
          id: 0,
          text: "Hostels",
          navigateTo: "hostels",
        },
        {
          id: 1,
          text: "Library",
          navigateTo: "library",
        },
        {
          id: 2,
          text: "Auditorium",
          navigateTo: "auditorium",
        },
        {
          id: 3,
          text: "Canteen",
          navigateTo: "canteen",
        },
        {
          id: 4,
          text: "Sports & Recreation",
          navigateTo: "sports-and-recreation",
        },
        {
          id: 5,
          text: "Transportation",
          navigateTo: "transportation",
        },
        {
          id: 6,
          text: "Banking",
          navigateTo: "banking",
        },
      ],
    },
  ],
};
