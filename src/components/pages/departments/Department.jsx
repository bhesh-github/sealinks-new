import React, { useState, useEffect } from "react";
import { lazy } from "react";
import { useParams } from "react-router-dom";
import DepartmentsBar from "./departmentsBar/DepartmentsBar";
import DoctorsColumn from "./DoctorsColumn";

const InnerBanner = lazy(() => import("../../forAll/InnerBanner"));

const Department = () => {
  const {
    slugDepartment = "",
    slugSubLinkId = "",
    slugChildId = "",
  } = useParams();

  const [selectedDepartmentDetail, setSelectedDepartmentDetail] = useState({
    slugDepartment: slugDepartment && slugDepartment,
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
    setSelectedDepartmentDetail((prev) => ({
      ...prev,
      slugDepartment: slugDepartment && slugDepartment,
      slugSubLinkId: Number(slugSubLinkId && slugSubLinkId),
      slugChildId: Number(slugChildId && slugChildId),
    }));
  }, [slugSubLinkId, slugChildId]);

  const innerBannerInfo = {
    pageName: "Departments",
    title: `${
      selectedDepartmentDetail &&
      selectedDepartmentDetail.slugDepartment &&
      selectedDepartmentDetail.slugDepartment.replace("-", " ")
    }`,
  };
  return (
    <div className="department-page">
      <InnerBanner innerBannerInfo={innerBannerInfo} />
      <div className="section-wrapper">
        <DepartmentsBar
          // slugSubLinkId={slugSubLinkId && slugSubLinkId}
          // slugChildId={slugChildId && slugChildId}
          // slugDepartment={slugDepartment && slugDepartment}
          selectedDepartmentDetail={
            selectedDepartmentDetail && selectedDepartmentDetail
          }
          setSelectedDepartmentDetail={
            setSelectedDepartmentDetail && setSelectedDepartmentDetail
          }
          handleIsSectionBar={handleIsSectionBar}
        />
        <DoctorsColumn
          slugDepartment={slugDepartment && slugDepartment}
          selectedDepartmentDetail={
            selectedDepartmentDetail && selectedDepartmentDetail
          }
          handleIsSectionBar={handleIsSectionBar}
        />
      </div>
    </div>
  );
};

export default Department;
