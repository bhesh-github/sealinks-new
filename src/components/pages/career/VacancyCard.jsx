import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const VacancyCard = ({ item }) => {
  const {
    id = "",
    position = "",
    slug = "",
    numOfVacancy = "",
    deadLine = "",
  } = item;

  const navigate = useNavigate();

  return (
    <div
      className="vacancy-card"
      onClick={() => {
        navigate("/career/detail");
      }}
    >
      <div className="text-column">
        <div className="position wrap">
          <span className="label">{position}</span>
        </div>
        <div className="second-row">
          <div className="num-of-vacancy wrap">
            <span className="label">No. of Vacancy:</span> {numOfVacancy}{" "}
          </div>
          <div className="deadline wrap">
            <span className="label">Deadline:</span> {deadLine}{" "}
          </div>
        </div>
      </div>
      <Button className="apply-now">Apply now</Button>
      {/* <div></div> */}
    </div>
  );
};

export default VacancyCard;
