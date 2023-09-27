import React from "react";
// import { useEffect } from "react";
import MuiAccordion from "./MuiAccordion";

const DepartmentsBar = ({
  allBtnsList,
  // slugDepartment,
  // slugSubLinkId,
  // slugChildId,
  isSectionBar,
  selectedDepartmentDetail,
  setSelectedDepartmentDetail,
  handleIsSectionBar,
}) => {
  return (
    <>
      <div className="departments-bar">
        <div className="section-heading">Related Departments</div>
        <div className="department-wrapper">
          <MuiAccordion
            accordionFor="desktop"
            allBtnsList={allBtnsList}
            selectedDepartmentDetail={
              selectedDepartmentDetail && selectedDepartmentDetail
            }
            setSelectedDepartmentDetail={
              setSelectedDepartmentDetail && setSelectedDepartmentDetail
            }
          />
        </div>
      </div>
      <div
        className="bar-outer"
        style={{
          display: !isSectionBar ? "none" : "",
        }}
      >
        <div
          className="mobile-departments-bar"
          style={{
            display: isSectionBar ? "block" : "none",
          }}
        >
          <div className="section-heading">Related Departments</div>
          <div className="department-wrapper">
            <MuiAccordion
              allBtnsList={allBtnsList}
              selectedDepartmentDetail={
                selectedDepartmentDetail && selectedDepartmentDetail
              }
              setSelectedDepartmentDetail={
                setSelectedDepartmentDetail && setSelectedDepartmentDetail
              }
              handleIsSectionBar={handleIsSectionBar && handleIsSectionBar}
            />
          </div>
        </div>
      </div>

      {/* <div
        className="sections-bar-outer"
        style={{
          display: !isSectionBar ? "none" : "",
        }}
      >

<div
          className="mobile-department-wrapper"
          style={{
            display: isSectionBar ? "block" : "none",
          }}
        > */}
    </>
  );
};

export default DepartmentsBar;

DepartmentsBar.defaultProps = {
  allBtnsList: [
    {
      id: 0,
      text: "Internal Medicine Department",
      navigateTo: "internal-Medicine-department",
      childLink: [
        {
          id: 0,
          text: "General Medicine",
          navigateTo: "general-medicine",
        },
        {
          id: 1,
          text: "Pulmonology",
          navigateTo: "pulmonology",
        },
        {
          id: 2,
          text: "Cardiology",
          navigateTo: "cardiology",
        },
        {
          id: 3,
          text: "gastroenterology",
          navigateTo: "gastroenterology",
        },
        {
          id: 4,
          text: "Critical Care",
          navigateTo: "critical-care",
        },
        {
          id: 5,
          text: "Endocrynology",
          navigateTo: "endocrynology",
        },
        {
          id: 6,
          text: "Rheumatology",
          navigateTo: "rheumatology",
        },
        {
          id: 7,
          text: "Neurology",
          navigateTo: "neurology",
        },
      ],
    },
    {
      id: 1,
      text: "Nephrology Department",
      navigateTo: "nephrology-department",
      childLink: [
        {
          id: 0,
          text: "Nephrology",
          navigateTo: "nephrology",
        },
        {
          id: 1,
          text: "Hemodialysis",
          navigateTo: "hemodialysis",
        },
      ],
    },
    {
      id: 2,
      text: "Surgery Department",
      navigateTo: "surgery-department",
      childLink: [
        {
          id: 0,
          text: "General Surgery",
          navigateTo: "general-surgery",
        },
        {
          id: 1,
          text: "GI Surgery",
          navigateTo: "gi-surgery",
        },
        {
          id: 2,
          text: "Paediatrics Surgery",
          navigateTo: "paediatrics-surgery",
        },
      ],
    },
    {
      id: 3,
      text: "Urosurgery Department",
      navigateTo: "urosurgery-department",
    },
    {
      id: 4,
      text: "Renal Transplant Surgery",
      navigateTo: "renal-transplant-surgery",
    },
    {
      id: 5,
      text: "Neurosurgery Department",
      navigateTo: "Neurosurgery-Department",
    },
    {
      id: 6,
      text: "Obstetrics / Gynaecology Department",
      navigateTo: "obstetrics-gynaecology-department",
    },
    {
      id: 7,
      text: "Orthopedics Department",
      navigateTo: "orthopedics-department",
    },
    {
      id: 8,
      text: "Emergency Department",
      navigateTo: "emergency-department",
    },
    {
      id: 9,
      text: "Paediatrics Department",
      navigateTo: "paediatrics-department",
      childLink: [
        {
          id: 0,
          text: "General Paediatrics",
          navigateTo: "general-paediatrics",
        },
        {
          id: 1,
          text: "Pulmonology",
          navigateTo: "pulmonology",
        },
        {
          id: 2,
          text: "Cardiology",
          navigateTo: "cardiology",
        },
        {
          id: 3,
          text: "Gastroenterology",
          navigateTo: "gastroenterology",
        },
        {
          id: 4,
          text: "Nepharology",
          navigateTo: "nepharology",
        },
        {
          id: 5,
          text: "Neonatology",
          navigateTo: "neonatology",
        },
      ],
    },
    {
      id: 10,
      text: "Otorhinolaryncology (ENT) Department",
      navigateTo: "otorhinolaryncology",
    },
    {
      id: 11,
      text: "Ophthalmology (EYE) Department",
      navigateTo: "ophthalmology",
    },
    {
      id: 12,
      text: "Community Medicine Department",
      navigateTo: "community-medicine",
      childLink: [
        {
          id: 0,
          text: "Immunization",
          navigateTo: "immunization",
        },
        {
          id: 1,
          text: "DOTS",
          navigateTo: "dots",
        },
        {
          id: 2,
          text: "Counselling",
          navigateTo: "counselling",
        },
      ],
    },
    {
      id: 13,
      text: "Oncology Unit",
      navigateTo: "oncology-unit",
    },
    {
      id: 14,
      text: "Dermatology Department",
      navigateTo: "dermatology-department",
    },
    {
      id: 15,
      text: "Psychiatry Department",
      navigateTo: "psychiatry-department",
    },
    {
      id: 16,
      text: "Radiology Department",
      navigateTo: "radiology-department",
      childLink: [
        {
          id: 0,
          text: "Ultrasound",
          navigateTo: "ultrasound",
        },
      ],
    },
  ],
};
