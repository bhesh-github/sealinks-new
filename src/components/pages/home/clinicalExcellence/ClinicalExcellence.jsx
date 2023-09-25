import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AllButtons from "../../../forAll/clinicalExcellenceBtns/AllButtons";

const ClinicalExcellence = ({ allBtnsList }) => {
  const navigate = useNavigate();
  return (
    <div className="clinical-excellence-comp">
      <div className="section-wrapper">
        <div className="text-container">
          <div className="caption">
            Explore our Centres of Clinical Excellence
          </div>
          <span className="quote">
            Learn about the world class health care we provide
          </span>
          <Button
            className="explore-btn"
            onClick={() => {
              setTimeout(() => {
                navigate(
                  `/departments/${
                    allBtnsList &&
                    allBtnsList[0] &&
                    allBtnsList[0].navigateTo &&
                    allBtnsList[0].navigateTo
                  }/${allBtnsList[0].id}/${allBtnsList[0].childLink[0].id}`
                );
              }, 250);
            }}
          >
            Explore More
          </Button>
        </div>
        <AllButtons allBtnsList={allBtnsList} />
      </div>
    </div>
  );
};

export default ClinicalExcellence;

ClinicalExcellence.defaultProps = {
  // allBtnsList: [
  //   { id: 0, text: "Oncology", iconType: "oncology", navigateTo: "oncology" },
  //   {
  //     id: 1,
  //     text: "Neurology",
  //     iconType: "neurology",
  //     navigateTo: "neurology",
  //   },
  //   { id: 2, text: "Bones", iconType: "bones", navigateTo: "bones" },
  //   {
  //     id: 3,
  //     text: "Ophthalmology",
  //     iconType: "ophthalmology",
  //     navigateTo: "ophthalmology",
  //   },
  //   {
  //     id: 4,
  //     text: "Otorhinolaryngology",
  //     iconType: "otorhinolaryngology",
  //     navigateTo: "otorhinolaryngology",
  //   },
  //   {
  //     id: 5,
  //     text: "Pulmonology",
  //     iconType: "pulmonology",
  //     navigateTo: "pulmonology",
  //   },
  //   {
  //     id: 6,
  //     text: "Dermatology",
  //     iconType: "dermatology",
  //     navigateTo: "dermatology",
  //   },
  //   {
  //     id: 7,
  //     text: "Gynaecology",
  //     iconType: "gynaecology",
  //     navigateTo: "gynaecology",
  //   },
  // ],
  allBtnsList: [
    {
      id: 0,
      text: "Internal Medicine Department",
      iconType: "neurology",
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
      iconType: "neurology",
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
      iconType: "neurology",
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
      iconType: "neurology",
      navigateTo: "urosurgery-department",
    },
    {
      id: 4,
      text: "Renal Transplant Surgery",
      iconType: "neurology",
      navigateTo: "renal-transplant-surgery",
    },
    {
      id: 5,
      text: "Neurosurgery Department",
      iconType: "neurology",
      navigateTo: "Neurosurgery-Department",
    },
    {
      id: 6,
      text: "Obstetrics / Gynaecology Department",
      iconType: "neurology",
      navigateTo: "obstetrics-gynaecology-department",
    },
    {
      id: 7,
      text: "Orthopedics Department",
      iconType: "neurology",
      navigateTo: "orthopedics-department",
    },
    {
      id: 8,
      text: "Emergency Department",
      iconType: "neurology",
      navigateTo: "emergency-department",
    },
    {
      id: 9,
      text: "Paediatrics Department",
      iconType: "neurology",
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
      iconType: "neurology",
      navigateTo: "otorhinolaryncology",
    },
    {
      id: 11,
      text: "Ophthalmology (EYE) Department",
      iconType: "neurology",
      navigateTo: "ophthalmology",
    },
    {
      id: 12,
      text: "Community Medicine Department",
      iconType: "neurology",
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
      iconType: "neurology",
      navigateTo: "oncology-unit",
    },
    {
      id: 14,
      text: "Dermatology Department",
      iconType: "neurology",
      navigateTo: "dermatology-department",
    },
    {
      id: 15,
      text: "Psychiatry Department",
      iconType: "neurology",
      navigateTo: "psychiatry-department",
    },
    {
      id: 16,
      text: "Radiology Department",
      iconType: "neurology",
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
