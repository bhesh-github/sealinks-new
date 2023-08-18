import React from "react";
import HomeSlider from "./homeSlider/HomeSlider";
import HiButtons from "./hiButtons/HiButtons";
import ClinicalExcellence from "./clinicalExcellence/ClinicalExcellence";
import HealthPackages from "./healthPackages/HealthPackages";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";
import MessageFromDirector from "./messageFromDirector/MessageFromDirector";
import OurAcademics from "./ourAcademics/OurAcademics";
import HealthCareVideos from "./healthCareVideos/HealthCareVideos";
import News from "./news/News";
import GetInTouch from "./getInTouch/GetInTouch";

const Home = () => {
  return (
    <div className="home-page">
      <HomeSlider />
      <HiButtons />
      <ClinicalExcellence />
      <HealthPackages />
      <WhyChooseUs />
      <MessageFromDirector />
      <OurAcademics />
      <HealthCareVideos />
      <News />
      <GetInTouch />
    </div>
  );
};

export default Home;
