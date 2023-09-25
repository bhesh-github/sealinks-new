import React, { useState } from "react";
import { lazy } from "react";
import ContactForm from "./ContactForm";
import MapColumn from "./MapColumn";
import ProgressIndicator from "../../forAll/ProgressIndicator";
import SnackBar from "../../forAll/SnackBar";

// import SectionsBar from "../../forAll/relatedBar/SectionsBar";

// const ContentsColumn = lazy(() => import("./ContentsColumn"));
const InnerBanner = lazy(() => import("../../forAll/InnerBanner"));

const Contact = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const [alertMessage, setAlertMessage] = useState({
    successMessage: "",
    failedMessage: "",
  });
  const handleClick = (newState) => () => {
    setSnackBarState((prev) => ({ ...prev, open: true }));
  };

  //   const [selectedBtn, setSelectedBtn] = useState({
  //     id: relatedList && relatedList[0] && Number(relatedList[0].id),
  //     slug: relatedList && relatedList[0] && relatedList[0].slug,
  //   });

  const innerBannerInfo = {
    pageName: "Contact",
    // title: `${
    //   selectedContentDetail &&
    //   selectedContentDetail.slugSublink &&
    //   selectedContentDetail.slugSublink.replace("-", " ")
    // }`,
  };
  //   const barHeader = "Research";

  return (
    <>
      {formSubmitting && (
        <div className="spinner-wrapper">
          <ProgressIndicator className="spinner" />
        </div>
      )}
      <div className="contact">
        <InnerBanner innerBannerInfo={innerBannerInfo} />
        <div className="section-wrapper">
          <ContactForm
            setFormSubmitting={setFormSubmitting}
            setAlertMessage={setAlertMessage}
            setSnackBarState={setSnackBarState}
            handleClick={handleClick}
          />
          <MapColumn />
        </div>
      </div>
      <SnackBar
        alertMessage={alertMessage}
        snackBarState={snackBarState}
        setSnackBarState={setSnackBarState}
      />
    </>
  );
};

export default Contact;
