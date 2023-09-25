import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Bones } from "../../../images/home/clinicalExcellenceImages/bones.svg";
import { ReactComponent as Dermatology } from "../../../images/home/clinicalExcellenceImages/dermatology.svg";
import { ReactComponent as Gynaecology } from "../../../images/home/clinicalExcellenceImages/gynaecology.svg";
import { ReactComponent as Neurology } from "../../../images/home/clinicalExcellenceImages/neurology.svg";
import { ReactComponent as OnCology } from "../../../images/home/clinicalExcellenceImages/onCology.svg";
import { ReactComponent as Ophthalmology } from "../../../images/home/clinicalExcellenceImages/ophthalmology.svg";
import { ReactComponent as Otorhinolaryngology } from "../../../images/home/clinicalExcellenceImages/otorhinolaryngology.svg";
import { ReactComponent as Pulmonology } from "../../../images/home/clinicalExcellenceImages/pulmonology.svg";

const AllButtons = ({ allBtnsList, type, selectedDepartment }) => {
  const navigate = useNavigate();

  const btnsIconList = {
    bones: <Bones className="btn-icon" />,
    dermatology: <Dermatology className="btn-icon" />,
    gynaecology: <Gynaecology className="btn-icon" />,
    neurology: <Neurology className="btn-icon" />,
    oncology: <OnCology className="btn-icon" />,
    ophthalmology: <Ophthalmology className="btn-icon" />,
    otorhinolaryngology: <Otorhinolaryngology className="btn-icon" />,
    pulmonology: <Pulmonology className="btn-icon" />,
  };

  return (
    <>
      {type === "department-bar" ? (
        <div className="all-btns-wrapper">
          {/* <OnCology style={{ color: "red" }} /> */}
          {allBtnsList &&
            allBtnsList.map((item) => {
              const {
                id = "",
                text = "",
                iconType = "",
                navigateTo = "",
              } = item;
              return (
                <Button
                  className={`all-btn ${
                    selectedDepartment === id && "active-btn"
                  }`}
                  key={id}
                  onClick={() => {
                    // setSelectedDepartment(id);
                    setTimeout(() => {
                      navigate(`/departments/${navigateTo}/${id}`);
                    }, 250);
                  }}
                >
                  {btnsIconList[iconType]}
                  <span className="btn-text">{text}</span>
                </Button>
              );
            })}
        </div>
      ) : (
        <div className="all-btns-wrapper">
          {/* <OnCology style={{ color: "red" }} /> */}
          {allBtnsList &&
            allBtnsList.slice(0, 8).map((item) => {
              const {
                id = "",
                text = "",
                iconType = "",
                navigateTo = "",
                childLink = "",
              } = item;
              return (
                <Button
                  className="all-btn"
                  key={id}
                  onClick={() => {
                    setTimeout(() => {
                      navigate(
                        `/departments/${navigateTo}/${id}/${
                          childLink && childLink[0].id ? childLink[0].id : 0
                        }`
                      );
                    }, 250);
                  }}
                >
                  {btnsIconList[iconType]}
                  <span className="btn-text">{text}</span>
                </Button>
              );
            })}
        </div>
      )}
    </>
  );
};

export default AllButtons;
