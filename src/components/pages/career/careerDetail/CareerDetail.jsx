import React, { useState, useEffect } from "react";
import { lazy } from "react";
const ContentsColumn = lazy(() => import("./ContentsColumn"));
const ApplyForm = lazy(() => import("./ApplyForm"));

const InnerBanner = lazy(() => import("../../../forAll/InnerBanner"));

const Research = ({ relatedList }) => {
  const [selectedBtn, setSelectedBtn] = useState({
    id: relatedList && relatedList[0] && Number(relatedList[0].id),
    slug: relatedList && relatedList[0] && relatedList[0].slug,
  });

  const [isSectionBar, setIsSectionBar] = useState(false);

  const handleIsSectionBar = () => {
    if (isSectionBar === false) {
      setIsSectionBar(true);
    } else {
      setIsSectionBar(false);
    }
  };

  const innerBannerInfo = {
    pageName: "Career",
    // title: `${
    //   selectedContentDetail &&
    //   selectedContentDetail.slugSublink &&
    //   selectedContentDetail.slugSublink.replace("-", " ")
    // }`,
  };

  useEffect(() => {
    isSectionBar === true
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [isSectionBar]);

  return (
    <div className="career-detail">
      <InnerBanner innerBannerInfo={innerBannerInfo} />
      <div className="section-wrapper">
        <ContentsColumn
          currentContent={selectedBtn && selectedBtn.slug && selectedBtn.slug}
          handleIsSectionBar={handleIsSectionBar && handleIsSectionBar}
        />
        <ApplyForm
          isSectionBar={isSectionBar}
          handleIsSectionBar={handleIsSectionBar && handleIsSectionBar}
        />
      </div>
    </div>
  );
};

export default Research;

Research.defaultProps = {
  relatedList: [
    {
      id: 0,
      slug: "antimicrobial-stewardship-team-in-icu",
      text: "Antimicrobial Stewardship Team in ICU",
      date: "8 OCTOBER 2020",
      iconType: "gallery",
      // navigateTo: "teacher-training",
    },
    {
      id: 1,
      slug: "drug-and-therapeutics-newsletter",
      text: "Drug and Therapeutics Newsletter",
      date: "7 APRIL 2020",
      // image_link:
      //   "https://www.unicef.org/rosa/sites/unicef.org.rosa/files/UNICEF%20Nepal_Robic-Nov2021-8442.jpeg",
      iconType: "gallery",
      navigateTo: "about-hospital",
    },
    {
      id: 2,
      slug: "inter-medical-school-physiology-quiz-2019",
      text: "5th Implementation Research (IR) Regional Training Application Form",
      date: "15 NOVEMBER 2019",
      // image_link: "https://www.nmcth.edu/images/gallery/nmcquiz2018_(1).jpg",
      iconType: "gallery",
      navigateTo: "mission-vision",
    },
    {
      id: 3,
      slug: "satellite-program",
      text: "5th GCP Regional Training Application",
      date: "15 NOVEMBER 2019",
      // image_link:
      //   "https://www.hamrodoctor.com/image.php?src=/uploads/hospitals/5bb09f283cab4.jpg&w=1000",
      iconType: "gallery",
      navigateTo: "management-team",
    },
  ],
};
