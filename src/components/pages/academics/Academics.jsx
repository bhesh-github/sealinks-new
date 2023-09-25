import React, { useState, useEffect } from "react";
import { lazy } from "react";
import { useParams } from "react-router-dom";
import ContentsBar from "./contentsBar/ContentsBar";
import ContentsColumn from "./ContentsColumn";

const InnerBanner = lazy(() => import("../../forAll/InnerBanner"));

const Services = () => {
  const {
    slugSubLink = "",
    slugSubLinkId = "",
    slugChildId = "",
  } = useParams();

  const [selectedContentDetail, setSelectedContentDetail] = useState({
    slugSubLink: slugSubLink && slugSubLink,
    slugSubLinkId: Number(slugSubLinkId && slugSubLinkId),
    slugChildId: Number(slugChildId && slugChildId),
  });
  


  useEffect(() => {
    // setSelectedDepartmentDetail(Number(slugId));
    setSelectedContentDetail((prev) => ({
      ...prev,
      slugSubLink: slugSubLink && slugSubLink,
      slugSubLinkId: Number(slugSubLinkId && slugSubLinkId),
      slugChildId: Number(slugChildId && slugChildId),
    }));
  }, [slugSubLinkId, slugChildId]);

  const innerBannerInfo = {
    pageName: "Academics",
    // title: `${
    //   selectedContentDetail &&
    //   selectedContentDetail.slugSublink &&
    //   selectedContentDetail.slugSublink.replace("-", " ")
    // }`,
  };
  return (
    <div className="services-page">
      <InnerBanner innerBannerInfo={innerBannerInfo} />
      <div className="section-wrapper">
        <ContentsBar
          slugSubLinkId={slugSubLinkId && slugSubLinkId}
          slugChildId={slugChildId && slugChildId}
          slugSubLink={slugSubLink && slugSubLink}
          selectedContentDetail={selectedContentDetail && selectedContentDetail}
          setSelectedContentDetail={
            setSelectedContentDetail && setSelectedContentDetail
          }
        />
        <ContentsColumn
          selectedContentDetail={
            selectedContentDetail && selectedContentDetail
          }
        />
      </div>
    </div>
  );
};

export default Services;
