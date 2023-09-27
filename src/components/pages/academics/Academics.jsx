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

  const [isSectionBar, setIsSectionBar] = useState(false);

  const handleIsSectionBar = () => {
    if (isSectionBar === false) {
      setIsSectionBar(true);
    } else {
      setIsSectionBar(false);
    }
  };

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

  useEffect(() => {
    isSectionBar === true
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [isSectionBar]);

  return (
    <div className="academics-page">
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
          isSectionBar={isSectionBar}
          handleIsSectionBar={handleIsSectionBar}
        />
        <ContentsColumn
          selectedContentDetail={selectedContentDetail && selectedContentDetail}
          handleIsSectionBar={handleIsSectionBar}
        />
      </div>
    </div>
  );
};

export default Services;
