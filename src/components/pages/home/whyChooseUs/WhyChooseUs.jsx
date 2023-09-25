import React, { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import icon1 from "../../../../images/home/whyChooseUs/icons/icon1.png";
import icon2 from "../../../../images/home/whyChooseUs/icons/icon2.png";
import icon3 from "../../../../images/home/whyChooseUs/icons/icon3.png";
import icon4 from "../../../../images/home/whyChooseUs/icons/icon4.png";
import icon5 from "../../../../images/home/whyChooseUs/icons/icon5.png";
import icon6 from "../../../../images/home/whyChooseUs/icons/icon6.png";
import icon7 from "../../../../images/home/whyChooseUs/icons/icon7.png";
import icon8 from "../../../../images/home/whyChooseUs/icons/icon8.png";
import groupPhoto from "../../../../images/home/whyChooseUs/groupPhoto.jpg";
import NumberAnimation from "../../../forAll/NumberAnimation";

const WhyChooseUs = ({ iconsDataList }) => {
  const [render, setRender] = useState(false);

  const navigate = useNavigate();

  const handleNumAnimation = async () => {
    const numAnimationWrapper = document.getElementById(
      "num_animation_wrapper"
    );
    if (numAnimationWrapper) {
      if (
        numAnimationWrapper.getBoundingClientRect().top <=
          window.innerHeight - 20 &&
        numAnimationWrapper.getBoundingClientRect().top >=
          window.innerHeight -
            numAnimationWrapper.getBoundingClientRect().height
      ) {
        setRender(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNumAnimation);
  }, []);

  const iconCardList =
    iconsDataList &&
    iconsDataList.map((item) => {
      const { id = "", imageLink = "", text = "", num = 0 } = item;

      return (
        <div className="icon-badge" key={id}>
          <img src={imageLink} alt="" className="icon" />
          <div className="text-side">
            <div className="num">
              {render ? (
                <span style={{ display: "flex" }}>
                  <NumberAnimation n={Number(num)} />+
                </span>
              ) : (
                <span>0+</span>
              )}
            </div>
            <div className="text">{text}</div>
          </div>
        </div>
      );
    });

  return (
    <div className="why-choose-us-comp">
      <div className="content">
        <div className="question">Why choose us?</div>
        <div className="ans">
          Nepal Medical College (NMC) is situated at Attarkhel of Jorpati
          Village Development Committee, in Kathmandu, about 11 km. northeast of
          Kathmandu city. It lies at the foot hill of a mound. It has a quiet
          and tranquil environment, required of a medical college and a teaching
          hospital. The Gokarna hillock with pine trees, about half a kilometer
          away on the north, the Gokarna Safari Park across Bagmati river about
          one kilometer in the east, the terraces with trees encircling the NMC
          campus on the west, the NMC campus which comprises the college and
          Nepal Medical College Teaching Hospital (NMCTH), has access to the
          main road through its main entrance on the southwest.
        </div>
        <div
          className="learn-more-btn-wrapper"
          onClick={() => {
            navigate("about-us");
          }}
        >
          <span className="btn-text">Learn More</span>
          <BsArrowRightShort className="right-arrow" />
        </div>
        <div className="icons-outer">
          <div className="icons-wrapper" id="num_animation_wrapper">
            {iconCardList && iconCardList}
          </div>
        </div>
        <div
          className="group-photo-wrapper"
          style={{ backgroundImage: `url(${groupPhoto})` }}
        >
          <div className="border-wrapper">
            <span className="bottom-left-border"></span>
            <span className="bottom-mid-border"></span>
            <span className="bottom-right-border"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

WhyChooseUs.defaultProps = {
  iconsDataList: [
    { id: 0, imageLink: icon1, text: "Years of experience", num: 25 },
    { id: 1, imageLink: icon2, text: "Happy patients", num: 10000 },
    { id: 2, imageLink: icon3, text: "Years of experience", num: 25 },
    { id: 3, imageLink: icon4, text: "Doctors", num: 50 },
    { id: 4, imageLink: icon5, text: "Years of experience", num: 20 },
    { id: 5, imageLink: icon6, text: "Doctors", num: 50 },
    { id: 6, imageLink: icon7, text: "Years of experience", num: 25 },
    { id: 7, imageLink: icon8, text: "Happy patients", num: 10000 },
  ],
};
