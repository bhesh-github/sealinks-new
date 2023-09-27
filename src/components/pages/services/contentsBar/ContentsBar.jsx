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
      text: "Medical & Super Speciality Services",
      navigateTo: "medical-and-super-speciality-services",
      childLink: [
        {
          id: 0,
          text: "Internal Medicine",
          navigateTo: "internal-medicine",
        },
        {
          id: 1,
          text: "Psychiatry (Mental Health)",
          navigateTo: "psychiatry",
        },
        {
          id: 2,
          text: "Gastroenterology",
          navigateTo: "gastroenterology",
        },
        {
          id: 3,
          text: "Paediatric & Neonatology",
          navigateTo: "paediatric-and-neonatology",
        },
        {
          id: 4,
          text: "Dermatology (Skin with Laser Service)",
          navigateTo: "dermatology",
        },
        {
          id: 5,
          text: "24 Hours Emergency",
          navigateTo: "emergency",
        },
      ],
    },
    {
      id: 1,
      text: "Supportive Services",
      navigateTo: "supportive-services",
      childLink: [
        {
          id: 0,
          text: "Pathology & Laboratory Service (24 Hours) (USFDA & WHO approved equipment",
          navigateTo: "pathology-laboratory-service",
        },
        {
          id: 1,
          text: "Radiology & Imaging (24 Hours)",
          navigateTo: "radiology-imaging",
        },
        {
          id: 2,
          text: "Physiotherapy",
          navigateTo: "physiotherapy",
        },
        {
          id: 3,
          text: "Dietician Service",
          navigateTo: "dietician-service",
        },
      ],
    },
    {
      id: 2,
      text: "Surgical & Super Speciality Services",
      navigateTo: "surgical-and-super-speciality-services",
      childLink: [
        {
          id: 0,
          text: "General Surgery",
          navigateTo: "general surgery",
        },
        {
          id: 1,
          text: "Ophthalmology",
          navigateTo: "ophthalmology",
        },
        {
          id: 2,
          text: "Obstetrics, Gynaecology & Family Planning",
          navigateTo: "obstetrics-gynaecology",
        },
        {
          id: 3,
          text: "Orthopaedic Surgery",
          navigateTo: "orthopaedic-surgery",
        },
        {
          id: 4,
          text: "ENT",
          navigateTo: "ent",
        },
      ],
    },
    {
      id: 3,
      text: "Dental",
      navigateTo: "dental",
      childLink: [
        {
          id: 0,
          text: "All Services from College of Dental Science & Hospital",
          navigateTo: "all-services-from-college",
        },
      ],
    },
    {
      id: 4,
      text: "OPD",
      navigateTo: "opd",
    },
    {
      id: 5,
      text: "EHS Service",
      navigateTo: "ehs-service",
    },
  ],
};
