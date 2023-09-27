import React from "react";
import Button from "@mui/material/Button";
import { TfiGallery } from "react-icons/tfi";
import { CiCalendarDate } from "react-icons/ci";
import newsAndNoticeImg from "../../../images/pages/newsAndNotice/newsAndNotice.png";

const SectionsButton = ({
  buttonFor,
  barDataList,
  selectedBtn,
  setSelectedBtn,
  handleIsSectionBar,
}) => {
  const btnsIconList = {
    gallery: <TfiGallery className="btn-icon" />,
    newsAndNotice: (
      <img
        src={newsAndNoticeImg && newsAndNoticeImg}
        alt=""
        className="related-img"
      />
    ),
  };

  return (
    <>
      {buttonFor === "desktop-bar" ? (
        <div className="btnss-wrapper">
          {barDataList &&
            barDataList.map((item) => {
              const {
                id,
                text = "",
                slug = "",
                iconType = "",
                date = "",
              } = item;
              return (
                <div key={id} className="btn-underline">
                  <Button
                    className={`bar-btn ${
                      selectedBtn &&
                      selectedBtn.slug &&
                      selectedBtn.slug === slug &&
                      "active-btn"
                    }`}
                    onClick={() => {
                      setSelectedBtn &&
                        setSelectedBtn((prev) => ({
                          ...prev,
                          id: Number(id && id),
                          slug: slug,
                        }));
                    }}
                  >
                    {btnsIconList[iconType]}
                    {date ? (
                      <div
                        className={`texts ${
                          selectedBtn &&
                          selectedBtn.slug &&
                          selectedBtn.slug === slug &&
                          "active-text"
                        }`}
                        // className='active-text texts'
                      >
                        <span className="text-with-date">{text}</span>
                        <span className="date-wrapper">
                          <CiCalendarDate className="date-icon" />
                          <span className="date-text">{date}</span>
                        </span>
                      </div>
                    ) : (
                      <span className="btn-text">{text}</span>
                    )}
                  </Button>
                  <div
                    style={{
                      borderBottom: "1px solid black",

                      height: "1px",
                      width: "95%",
                    }}
                  ></div>
                </div>
              );
            })}
        </div>
      ) : (
        <div className="btnss-wrapper">
          {barDataList &&
            barDataList.map((item) => {
              const {
                id,
                text = "",
                slug = "",
                iconType = "",
                date = "",
              } = item;
              return (
                <div key={id} className="btn-underline">
                  <Button
                    className={`bar-btn ${
                      selectedBtn &&
                      selectedBtn.slug &&
                      selectedBtn.slug === slug &&
                      "active-btn"
                    }`}
                    onClick={() => {
                      setSelectedBtn &&
                        setSelectedBtn((prev) => ({
                          ...prev,
                          id: Number(id && id),
                          slug: slug,
                        }));
                      handleIsSectionBar && handleIsSectionBar();
                    }}
                  >
                    {btnsIconList[iconType]}
                    {date ? (
                      <div
                        className={`texts ${
                          selectedBtn &&
                          selectedBtn.slug &&
                          selectedBtn.slug === slug &&
                          "active-text"
                        }`}
                        // className='active-text texts'
                      >
                        <span className="text-with-date">{text}</span>
                        <span className="date-wrapper">
                          <CiCalendarDate className="date-icon" />
                          <span className="date-text">{date}</span>
                        </span>
                      </div>
                    ) : (
                      <span className="btn-text">{text}</span>
                    )}
                  </Button>
                  <div
                    style={{
                      borderBottom: "1px solid black",

                      height: "1px",
                      width: "95%",
                    }}
                  ></div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default SectionsButton;
