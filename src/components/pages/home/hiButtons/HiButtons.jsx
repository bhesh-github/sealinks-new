import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ReactComponent as AcademicsIcon } from "../../../../images/home/hiBtnsImages/academics.svg";
import { ReactComponent as Appointments } from "../../../../images/home/hiBtnsImages/appointments.svg";
import { ReactComponent as HealthRecords } from "../../../../images/home/hiBtnsImages/healthRecords.svg";
import { ReactComponent as Services } from "../../../../images/home/hiBtnsImages/services.svg";

const HiButtons = () => {
  const navigate = useNavigate();

  const iconsList = {
    academics: AcademicsIcon && <AcademicsIcon className="btn-icon" />,
    appointments: Appointments && (
      <Appointments className="btn-icon" style={{ color: "red" }} />
    ),
    healthRecords: HealthRecords && <HealthRecords className="btn-icon" />,
    services: Services && (
      <Services className="btn-icon" style={{ color: "red" }} />
    ),
  };

  const btnsList = [
    {
      id: 0,
      text: "Book appointment",
      iconType: "appointments",
      navigateTo: "doctor-appointment/direct",
    },
    {
      id: 1,
      text: "View Health Record",
      iconType: "healthRecords",
    },
    {
      id: 2,
      text: "Our Services",
      iconType: "services",
      navigateTo: "services/medical-and-super-speciality-services/0/0",
    },
    {
      id: 3,
      text: "NMC Academics",
      iconType: "academics",
      navigateTo: "academics/academic-programs/0/0",
    },
  ];

  return (
    <div className="hi-buttons-comp">
      <div className="btns-wrapper">
        {btnsList &&
          btnsList.map((item) => {
            const { id = "", text = "", iconType = "", navigateTo = "" } = item;
            return (
              <Button
                className="hi-btn"
                key={id}
                onClick={() => {
                  navigate(`${navigateTo}`);
                }}
              >
                {iconsList[iconType]}
                <span className="btn-text">{text}</span>
              </Button>
            );
          })}
      </div>
    </div>
  );
};

export default HiButtons;
