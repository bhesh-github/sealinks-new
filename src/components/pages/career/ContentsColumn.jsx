import React, { useState } from "react";
import { lazy } from "react";

const VacancyCard = lazy(() => import("./VacancyCard"));
const FloatingLinkBtn = lazy(() => import("../../forAll/FloatingLinkBtn"));

// import { VscClose } from "react-icons/vsc";

const RightColumn = ({ currentContent, vacancyList, handleIsSectionBar }) => {
  const [isSliderOverlay, setIsSliderOverlay] = useState(false);
  // const sectionName = `${currentContent.replaceAll("-", " ")}`;

  isSliderOverlay
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  return (
    <div className="career-column">
      <div className="section-heading">
        <div className="highlight">Vacancy Announcement !!!</div>
        <div className="underline-wrapper">
          <span className="dark"></span>
        </div>
      </div>
      <div className="floating-btn-row">
        <FloatingLinkBtn
          handleIsSectionBar={handleIsSectionBar && handleIsSectionBar}
        />
      </div>
      <div className="cards-wrapper">
        {vacancyList &&
          vacancyList.map((item) => <VacancyCard item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default RightColumn;
RightColumn.defaultProps = {
  vacancyList: [
    {
      id: 0,
      position: "Dentist",
      slug: "dentist",
      numOfVacancy: 5,
      deadLine: "15 OCTOBER 2023",
    },
    {
      id: 1,
      position: "Nurse",
      slug: "nurse",
      numOfVacancy: 3,
      deadLine: "20 DECEMBER 2023",
    },
    {
      id: 2,
      position: "Dentist",
      slug: "dentist",
      numOfVacancy: 5,
      deadLine: "15 OCTOBER 2023",
    },
    {
      id: 3,
      position: "Gastroenterology",
      slug: "gastroenterology",
      numOfVacancy: 1,
      deadLine: "1 DECEMBER 2023",
    },
    {
      id: 4,
      position: "Urosurgery Department",
      slug: "urosurgery-department",
      numOfVacancy: 5,
      deadLine: "15 OCTOBER 2023",
    },
  ],
};
