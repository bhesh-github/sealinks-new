import React, { useEffect } from "react";
import InnerBanner from "../../forAll/InnerBanner";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const innerBannerInfo = {
    pageName: "404 Page",
    // title: `${
    //   selectedBtn && selectedBtn.slug && selectedBtn.slug.replaceAll("-", " ")
    // }`,
  };

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);

  return (
    <div className="not-found-page">
      <InnerBanner innerBannerInfo={innerBannerInfo} />
      <div className="section-wrapper">
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
