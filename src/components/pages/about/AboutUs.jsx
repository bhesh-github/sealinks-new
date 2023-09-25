import React, { useEffect, useState } from "react";
import { lazy } from "react";

const InnerBanner = lazy(() => import("../../forAll/InnerBanner"));
const RightColumn = lazy(() => import("./RightColumn"));
const SectionsBar = lazy(() => import("../../forAll/relatedBar/SectionsBar"));

const AboutUs = ({ allBtnsList }) => {
  const [selectedBtn, setSelectedBtn] = useState({
    id: allBtnsList && allBtnsList[0] && Number(allBtnsList[0].id),
    slug: allBtnsList && allBtnsList[0] && allBtnsList[0].slug,
  });
  const [isSectionBar, setIsSectionBar] = useState(false);

  const innerBannerInfo = {
    pageName: "About us",
    title: `${
      selectedBtn && selectedBtn.slug && selectedBtn.slug.replaceAll("-", " ")
    }`,
  };

  const barHeader = "Links";

  const handleIsSectionBar = () => {
    if (isSectionBar === false) {
      setIsSectionBar(true);
    } else {
      setIsSectionBar(false);
    }
  };

  useEffect(() => {
    isSectionBar === true
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [isSectionBar]);
 

  return (
    <div className="about-us">
      <InnerBanner innerBannerInfo={innerBannerInfo} />
      <div className="section-wrapper">
        <SectionsBar
          isSectionBar={isSectionBar}
          barHeader={barHeader}
          barDataList={allBtnsList && allBtnsList}
          setSelectedBtn={setSelectedBtn && setSelectedBtn}
          selectedBtn={selectedBtn && selectedBtn}
          handleIsSectionBar={handleIsSectionBar}
        />
        <RightColumn
          section={selectedBtn && selectedBtn.slug && selectedBtn.slug}
          handleIsSectionBar={handleIsSectionBar}
        />
      </div>
    </div>
  );
};

export default AboutUs;
AboutUs.defaultProps = {
  allBtnsList: [
    {
      id: 0,
      slug: "about-hospital",
      text: "About Hospital",
      iconType: "gallery",
      navigateTo: "about-hospital",
    },
    {
      id: 1,
      slug: "director-message",
      text: "Message From Director",
      iconType: "gallery",
      navigateTo: "director-message",
    },
    {
      id: 2,
      slug: "mission-vision",
      text: "Mission & Vision",
      iconType: "gallery",
      navigateTo: "mission-vision",
    },
    {
      id: 3,
      slug: "management-team",
      text: "Management Team",
      iconType: "gallery",
      navigateTo: "management-team",
    },

    {
      id: 4,
      slug: "gallery",
      text: "Gallery",
      iconType: "gallery",
      navigateTo: "gallery",
    },
  ],
};
