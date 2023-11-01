import React from "react";
import HomeSlider from "./homeSlider/HomeSlider";
import HiButtons from "./hiCategories/HiCategories";
import ClinicalExcellence from "./clinicalExcellence/ClinicalExcellence";
import HealthPackages from "./healthPackages/HealthPackages";
import InboundSection from "./inboundSection/InboundSection";
import OutboundSection from "./outboundSection/OutboundSection";

import MessageFromDirector from "./messageFromDirector/MessageFromDirector";
import OurAcademics from "./ourAcademics/OurAcademics";
import HealthCareVideos from "./healthCareVideos/HealthCareVideos";
import News from "./news/News";
import GetInTouch from "./getInTouch/GetInTouch";
import OurCompanies from "./ourCompanies/OurCompanies";
import TestResponsiveCarousel from "./testCarousel/TestResponsiveCarousel";

const Home = () => {
  return (
    <div className="home-page">
      <HomeSlider />
      <HiButtons />
      {/* <TestResponsiveCarousel /> */}
      <InboundSection />
      <OutboundSection />
      <OurCompanies />
      {/* <News /> */}
      {/* <ClinicalExcellence />
      <HealthPackages />
      <MessageFromDirector />
      <OurAcademics />
      <HealthCareVideos />
      <GetInTouch /> */}
    </div>
  );
};

export default Home;
