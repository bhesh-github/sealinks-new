import React, { useState } from "react";
import nmcLogo from "../../../images/forAll/nmcLogo.png";
import { ReactComponent as NmcLogo } from "../../../images/forAll/nmcLogo.svg";
import { ReactComponent as FbIcon } from "../../../images/forAll/socialIcons/fb.svg";
import { ReactComponent as InstaIcon } from "../../../images/forAll/socialIcons/insta.svg";
import { ReactComponent as LinkdenIcon } from "../../../images/forAll/socialIcons/linkden.svg";
import { ReactComponent as YoutubeIcon } from "../../../images/forAll/socialIcons/youtube.svg";

import Button from "@mui/material/Button";

const NewHeader = () => {
  const [navItemActiveId, setNavItemActiveId] = useState(0);
  // const [navItemActiveClass, setNavItemActiveClass] = useState('active-class');

  // const [navItemActive, setNavItemActive] = useState({
  //   activeItemId: 0,
  //   itemClass: "active-item",
  // });

  const navItems = [
    "Home",
    "About us",
    "Academics",
    "Services",
    "Activities",
    "Research",
    "Journal",
    "Contact Us",
  ];

  return (
    <div className="header">
      <div className="menu-items-cover">
        <div className="top-bar-wrapper">
          <div className="top-bar">
            <div className="social-links">
              <FbIcon className="icon" />
              <span className="divider"></span>
              <InstaIcon className="icon" />
              <span className="divider"></span>
              <LinkdenIcon className="icon" />
              <span className="divider"></span>
              <YoutubeIcon className="icon" />
            </div>
            <div className="nav-item">
              <span className="item">News & Notice</span>
              <span className="divider"></span>
              <span className="item">Career</span>
              <span className="divider"></span>
              <span className="item">Contact</span>
            </div>
          </div>
        </div>
        <div className="mid-bar-wrapper">
          <div className="items-wrapper">
            <span className="left-section">
              {/* <NmcLogo className="nmc-logo" /> */}
              <img src={nmcLogo} alt="" className="nmc-logo"/>
              <span className="company-name">NEPAL MEDIAL COLLEGE</span>
            </span>
            <span className="btns-wrapper">
              <Button className="action-btn lab-btn">Lab Report</Button>
              <Button className="action-btn appointment-btn">
                Book an Appointment
              </Button>
            </span>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="bottom-bar">
          <div className="nav-item-wrapper">
            {navItems.map((item, idx) => (
              <span
                className={`nav-item ${
                  navItemActiveId === idx ? "active-item" : ""
                }`}
                key={idx}
                onClick={() => {
                  setNavItemActiveId(idx);
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
