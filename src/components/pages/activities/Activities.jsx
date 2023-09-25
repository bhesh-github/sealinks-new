import React from "react";
import { lazy } from "react";
// import { useParams } from "react-router-dom";

import ActivitiesCard from "./ActivitiesCard";
const InnerBanner = lazy(() => import("../../forAll/InnerBanner"));

const Activities = ({ activitiesList }) => {
  // const {
  //   slugSubLink = "",
  //   slugSubLinkId = "",
  //   slugChildId = "",
  // } = useParams();

  // const [selectedContentDetail, setSelectedContentDetail] = useState({
  //   slugSubLink: slugSubLink && slugSubLink,
  //   slugSubLinkId: Number(slugSubLinkId && slugSubLinkId),
  //   slugChildId: Number(slugChildId && slugChildId),
  // });

  // useEffect(() => {
  //   // setSelectedContentDetail((prev) => ({
  //   //   ...prev,
  //   //   slugSubLink: slugSubLink && slugSubLink,
  //   //   slugSubLinkId: Number(slugSubLinkId && slugSubLinkId),
  //   //   slugChildId: Number(slugChildId && slugChildId),
  //   // }));
  // }, [slugSubLinkId, slugChildId]);

  const innerBannerInfo = {
    pageName: "Activities",
    // title: `${
    //   selectedContentDetail &&
    //   selectedContentDetail.slugSublink &&
    //   selectedContentDetail.slugSublink.replace("-", " ")
    // }`,
  };
  return (
    <div className="activities-page">
      <InnerBanner innerBannerInfo={innerBannerInfo} />
      <div className="section-wrapper">
        <div className="section-heading">
          <div className="highlight">Activities</div>
          <div className="underline-wrapper">
            <span className="dark"></span>
          </div>
        </div>
        <div className="cards-wrapper">
          {activitiesList &&
            activitiesList.map((item) => {
              return <ActivitiesCard key={item.id} item={item && item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Activities;

Activities.defaultProps = {
  activitiesList: [
    {
      id: 0,
      name: "Teachers Training",
      image_link:
        "https://www.eklavyaoverseas.com/assets/images/nepal-medical-college.jpg",
    },
    {
      id: 1,
      name: "Drug & Therapeutic Commitee (DTC)",
      image_link:
        "https://www.unicef.org/rosa/sites/unicef.org.rosa/files/UNICEF%20Nepal_Robic-Nov2021-8442.jpeg",
    },
    {
      id: 2,
      name: "Inter-Medical School Physiology Quiz 2019, Nepal (11th Oct, 2019)",
      image_link: "https://www.nmcth.edu/images/gallery/nmcquiz2018_(1).jpg",
    },
    {
      id: 3,
      name: "Satellite Program",
      image_link:
        "https://www.hamrodoctor.com/image.php?src=/uploads/hospitals/5bb09f283cab4.jpg&w=1000",
    },
    {
      id: 4,
      name: "Save Bagmati",
      image_link:
        "https://www.nmcth.edu/images/gallery/1st%20batch%20students.jpg",
    },
    {
      id: 5,
      name: "Falgun Pacchis",
      image_link: "https://www.nmcth.edu/images/gallery/ZvbPIIMG_6928.jpg",
    },
  ],
};
