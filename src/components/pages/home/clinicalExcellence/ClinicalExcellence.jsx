import React from "react";
import AllButtons from "./AllButtons";
import Button from "@mui/material/Button";

const ClinicalExcellence = ({ allBtnsList }) => {
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
          <Button className="explore-btn">Explore More</Button>
        </div>
        <AllButtons  allBtnsList={allBtnsList} />
      </div>
    </div>
  );
};

export default ClinicalExcellence;

ClinicalExcellence.defaultProps = {
  allBtnsList: [
    { id: 0, text: "Oncology", iconType: "oncology" },
    { id: 1, text: "Neurology", iconType: "neurology" },
    { id: 2, text: "Bones", iconType: "bones" },
    { id: 3, text: "Ophthalmology", iconType: "ophthalmology" },
    { id: 4, text: "Otorhinolaryngology", iconType: "otorhinolaryngology" },
    { id: 5, text: "Pulmonology", iconType: "pulmonology" },
    { id: 6, text: "Dermatology", iconType: "dermatology" },
    { id: 7, text: "Gynaecology", iconType: "gynaecology" },
  ],
};
