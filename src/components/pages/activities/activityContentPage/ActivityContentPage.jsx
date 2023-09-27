import React, { useState } from "react";
import { lazy } from "react";
import SectionsBar from "../../../forAll/relatedBar/SectionsBar";

const ContentsColumn = lazy(() => import("./ContentsColumn"));
const InnerBanner = lazy(() => import("../../../forAll/InnerBanner"));

const ActivityContentPage = ({ relatedActivitiesList }) => {
  const [selectedBtn, setSelectedBtn] = useState({
    id:
      relatedActivitiesList &&
      relatedActivitiesList[0] &&
      Number(relatedActivitiesList[0].id),
    slug:
      relatedActivitiesList &&
      relatedActivitiesList[0] &&
      relatedActivitiesList[0].slug,
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
    pageName: "Activities Content",
    // title: `${
    //   selectedContentDetail &&
    //   selectedContentDetail.slugSublink &&
    //   selectedContentDetail.slugSublink.replace("-", " ")
    // }`,
  };
  const barHeader = "Activities";

  return (
    <div className="activity-content-page">
      <InnerBanner innerBannerInfo={innerBannerInfo} />
      <div className="section-wrapper">
        <ContentsColumn
          currentContent={selectedBtn && selectedBtn.slug && selectedBtn.slug}
          handleIsSectionBar={handleIsSectionBar && handleIsSectionBar}
        />
        <SectionsBar
          barHeader={barHeader}
          barDataList={relatedActivitiesList && relatedActivitiesList}
          selectedBtn={selectedBtn && selectedBtn}
          setSelectedBtn={setSelectedBtn && setSelectedBtn}
          isSectionBar={isSectionBar && isSectionBar}
          handleIsSectionBar={handleIsSectionBar && handleIsSectionBar}
        />
      </div>
    </div>
  );
};

export default ActivityContentPage;

ActivityContentPage.defaultProps = {
  relatedActivitiesList: [
    {
      id: 0,
      slug: "teacher-training",
      text: "Teacher Training",
      iconType: "gallery",
      navigateTo: "teacher-training",
    },
    {
      id: 1,
      slug: "drug-and-therapeutic-commitee",
      text: "Drug & Therapeutic Commitee (DTC)",
      image_link:
        "https://www.unicef.org/rosa/sites/unicef.org.rosa/files/UNICEF%20Nepal_Robic-Nov2021-8442.jpeg",
      iconType: "gallery",
      navigateTo: "about-hospital",
    },
    {
      id: 2,
      slug: "inter-medical-school-physiology-quiz-2019",
      text: "Inter-Medical School Physiology Quiz 2019, Nepal (11th Oct, 2019)",
      image_link: "https://www.nmcth.edu/images/gallery/nmcquiz2018_(1).jpg",
      iconType: "gallery",
      navigateTo: "mission-vision",
    },
    {
      id: 3,
      slug: "satellite-program",
      text: "Satellite Program",
      image_link:
        "https://www.hamrodoctor.com/image.php?src=/uploads/hospitals/5bb09f283cab4.jpg&w=1000",
      iconType: "gallery",
      navigateTo: "management-team",
    },
    {
      id: 4,
      slug: "save-bagmati",
      text: "Save Bagmati",
      image_link:
        "https://www.nmcth.edu/images/gallery/1st%20batch%20students.jpg",
      iconType: "gallery",
      navigateTo: "gallery",
    },
    {
      id: 5,
      slug: "falgun-pacchis",
      text: "Falgun Pacchis",
      image_link: "https://www.nmcth.edu/images/gallery/ZvbPIIMG_6928.jpg",
      iconType: "gallery",
      navigateTo: "gallery",
    },
  ],
};
