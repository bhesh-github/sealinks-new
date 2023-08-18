import React from "react";
import { ReactComponent as Icon1 } from "../../../../images/home/ourAcademics/icons/icon1.svg";
import { ReactComponent as Icon2 } from "../../../../images/home/ourAcademics/icons/icon2.svg";
import { ReactComponent as Icon3 } from "../../../../images/home/ourAcademics/icons/icon3.svg";
import { ReactComponent as Icon4 } from "../../../../images/home/ourAcademics/icons/icon4.svg";
import { ReactComponent as Icon5 } from "../../../../images/home/ourAcademics/icons/icon5.svg";
import { ReactComponent as Icon6 } from "../../../../images/home/ourAcademics/icons/icon6.svg";
import studentsPhoto from "../../../../images/home/ourAcademics/studentsPhoto.png";
import { ReactComponent as PhoneIcon } from "../../../../images/home/ourAcademics/phoneIcon.svg";
import Button from "@mui/material/Button";

const OurAcademics = ({ academicsIconsList }) => {
  return (
    <div className="our-academics-comp">
      <div className="content">
        <div className="academics-section">
          <div className="title">Our academics</div>
          <div className="icons-wrapper">
            {academicsIconsList &&
              academicsIconsList.map((item) => {
                const { id = "", imgLink = "", text = "" } = item;
                return (
                  <div className="icon-badge" key={id}>
                    {imgLink}
                    <text className="" />
                    <div className="text">{text}</div>
                  </div>
                );
              })}
          </div>
          <div className="contact-info">
            <div>For International Students:</div>
            <div className="phone-wrapper">
              <PhoneIcon className="phone-icon" />
              +977 981236547896
            </div>
          </div>
        </div>
        <div className="pic-wrapper">
          <img src={studentsPhoto} className="pic" alt="" />
          <span className="overlay">
            <span className="texts">
              <span className="our">OUR</span> <br />
              JOURNALS
            </span>
            <Button className="download-btn">Downloads</Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurAcademics;

OurAcademics.defaultProps = {
  academicsIconsList: [
    {
      id: 0,
      imgLink: <Icon1 className="icon" />,
      //   iconType:'',
      text: "Academic Programs",
    },
    {
      id: 1,
      imgLink: <Icon2 className="icon" />,
      text: "Faculty",
    },
    {
      id: 2,
      imgLink: <Icon3 className="icon" />,
      text: "Student Zone",
    },
    {
      id: 3,
      imgLink: <Icon4 className="icon" />,
      text: "Notices",
    },
    {
      id: 4,
      imgLink: <Icon5 className="icon" />,
      text: "Facilities & Services",
    },
    {
      id: 5,
      imgLink: <Icon6 className="icon" />,
      text: "Life at NMC",
    },
  ],
};
