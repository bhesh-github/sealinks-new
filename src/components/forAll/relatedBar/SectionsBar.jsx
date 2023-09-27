import React from "react";
import SectionsButton from "./SectionsButton";

const SectionsBar = ({
  barHeader,
  selectedBtn,
  setSelectedBtn,
  barDataList,
  isSectionBar,
  handleIsSectionBar,
}) => {

  return (
    <>
      <div className="sections-bar-desktop">
        <div className="section-heading">Related {barHeader && barHeader}</div>
        <div className="sections-wrapper">
          <SectionsButton
            buttonFor="desktop-bar"
            barDataList={barDataList && barDataList}
            selectedBtn={selectedBtn && selectedBtn}
            setSelectedBtn={setSelectedBtn && setSelectedBtn}
          />
        </div>
      </div>
      <div
        className="sections-bar-outer"
        style={{
          display: !isSectionBar ? "none" : "",
        }}
      >
        <div
          className="sections-bar-mobile"
          style={{
            display: isSectionBar ? "block" : "none",
          }}
        >
          <div className="section-heading">
            Related {barHeader && barHeader}
          </div>
          <div className="sections-wrapper">
            <SectionsButton
              barDataList={barDataList && barDataList}
              selectedBtn={selectedBtn && selectedBtn}
              setSelectedBtn={setSelectedBtn && setSelectedBtn}
              handleIsSectionBar={handleIsSectionBar}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionsBar;
