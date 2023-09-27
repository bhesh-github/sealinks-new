import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import nmcLogo from "../../../images/forAll/nmcLogo.png";
import Sidebar from "./sidebar/Sidebar";
import { ReactComponent as FbIcon } from "../../../images/forAll/socialIcons/fb.svg";
import { ReactComponent as InstaIcon } from "../../../images/forAll/socialIcons/insta.svg";
import { ReactComponent as LinkdenIcon } from "../../../images/forAll/socialIcons/linkden.svg";
import { ReactComponent as YoutubeIcon } from "../../../images/forAll/socialIcons/youtube.svg";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

const Header = ({ navItems }) => {
  const [isDropdown, setIsDropdown] = useState("");
  const [drawerState, setDrawerState] = React.useState({
    left: false,
  });
  const navigate = useNavigate();

  const handleDropdownDisplay = () => {
    setIsDropdown("none");
    setTimeout(() => {
      setIsDropdown("");
    }, 10);
  };

  return (
    <>
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
                <span
                  className="item"
                  onClick={() => {
                    navigate("/news-and-notice");
                  }}
                >
                  News & Notice
                </span>
                <span className="divider"></span>
                <span
                  className="item"
                  onClick={() => {
                    navigate("/career");
                  }}
                >
                  Career
                </span>
                <span className="divider"></span>
                <span
                  className="item"
                  onClick={() => {
                    navigate("./contact-us");
                  }}
                >
                  Contact
                </span>
              </div>
            </div>
          </div>
          <div className="mid-bar-wrapper">
            <div className="items-wrapper">
              <span
                className="left-section"
                onClick={() => {
                  navigate("/");
                }}
              >
                <img src={nmcLogo} alt="" className="nmc-logo" />
                <span className="company-name">NEPAL MEDIAL COLLEGE</span>
              </span>
              <span className="btns-wrapper">
                <Button className="action-btn lab-btn">Lab Report</Button>
                <Button
                  className="action-btn appointment-btn"
                  onClick={() => {
                    setTimeout(() => {
                      navigate("./doctor-appointment/direct");
                    }, 250);
                  }}
                >
                  Book an Appointment
                </Button>
              </span>

              <RxHamburgerMenu
                className="toggle-icon"
                onClick={() => {
                  setDrawerState((prev) => ({
                    ...prev,
                    left: true,
                  }));
                }}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="bottom-bar">
            <div className="nav-item-wrapper">
              {navItems.map((navlink, idx) => {
                const { title = "", subLink = "", navigateTo = "" } = navlink;
                const primaryDarkBlue = "#1f2b6c";
                return (
                  <span className="dropdown" key={idx}>
                    <button
                      className="dropbtn nav-item"
                      onClick={() => {
                        if (!subLink) {
                          navigateTo && navigate(navigateTo);
                        }
                      }}
                      style={{ cursor: subLink ? "context-menu" : "" }}
                    >
                      {" "}
                      {title}
                      {subLink && (
                        <BsFillCaretDownFill className="caret-icon" />
                      )}
                    </button>
                    {title === "Departments" && subLink && (
                      <div
                        className="outer-wrapper"
                        style={{ display: `${isDropdown && isDropdown}` }}
                      >
                        <div className="dropdown-content">
                          {subLink &&
                            subLink.map((subLinkItem) => {
                              return (
                                <div
                                  className="sublink-and-child"
                                  key={subLinkItem.id}
                                >
                                  <div
                                    className="sublink"
                                    style={{
                                      borderBottom: subLinkItem.childLink
                                        ? `1px solid ${primaryDarkBlue}`
                                        : "",
                                    }}
                                    onClick={() => {
                                      subLinkItem.navigateTo &&
                                        navigate(
                                          `/departments/${subLinkItem.navigateTo}/${subLinkItem.id}/${subLink[0].id}`
                                        );
                                      handleDropdownDisplay();
                                    }}
                                  >
                                    {subLinkItem.text}
                                  </div>
                                  <div className="child-link-wrapper">
                                    {subLinkItem.childLink &&
                                      subLinkItem.childLink.map((item) => (
                                        <div
                                          className="child-link"
                                          key={item.id}
                                          onClick={() => {
                                            navigate(
                                              `/departments/${subLinkItem.navigateTo}/${subLinkItem.id}/${item.id}`
                                            );
                                            handleDropdownDisplay();
                                          }}
                                        >
                                          {item.text}
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}
                    {title === "Services" && subLink && (
                      <div
                        className="outer-wrapper"
                        style={{ display: `${isDropdown && isDropdown}` }}
                      >
                        <div className="dropdown-content">
                          {subLink &&
                            subLink.map((subLinkItem) => {
                              return (
                                <div
                                  className="sublink-and-child"
                                  key={subLinkItem.id}
                                >
                                  <div
                                    className="sublink"
                                    style={{
                                      borderBottom: subLinkItem.childLink
                                        ? `1px solid ${primaryDarkBlue}`
                                        : "",
                                    }}
                                    onClick={() => {
                                      subLinkItem.navigateTo &&
                                        navigate(
                                          `/services/${subLinkItem.navigateTo}/${subLinkItem.id}/${subLink[0].id}`
                                        );
                                      handleDropdownDisplay();
                                    }}
                                  >
                                    {subLinkItem.text}
                                  </div>
                                  <div className="child-link-wrapper">
                                    {subLinkItem.childLink &&
                                      subLinkItem.childLink.map((item) => (
                                        <div
                                          className="child-link"
                                          key={item.id}
                                          onClick={() => {
                                            navigate(
                                              `/services/${subLinkItem.navigateTo}/${subLinkItem.id}/${item.id}`
                                            );
                                            handleDropdownDisplay();
                                          }}
                                        >
                                          {item.text}
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}
                    {title === "Academics" && subLink && (
                      <div
                        className="outer-wrapper"
                        style={{ display: `${isDropdown && isDropdown}` }}
                      >
                        <div className="dropdown-content">
                          {subLink &&
                            subLink.map((subLinkItem) => {
                              return (
                                <div
                                  className="sublink-and-child"
                                  key={subLinkItem.id}
                                >
                                  <div
                                    className="sublink"
                                    style={{
                                      borderBottom: subLinkItem.childLink
                                        ? `1px solid ${primaryDarkBlue}`
                                        : "",
                                    }}
                                    onClick={() => {
                                      subLinkItem.navigateTo &&
                                        navigate(
                                          `/academics/${subLinkItem.navigateTo}/${subLinkItem.id}/${subLink[0].id}`
                                        );
                                      handleDropdownDisplay();
                                    }}
                                  >
                                    {subLinkItem.text}
                                  </div>
                                  <div className="child-link-wrapper">
                                    {subLinkItem.childLink &&
                                      subLinkItem.childLink.map((item) => (
                                        <div
                                          className="child-link"
                                          key={item.id}
                                          onClick={() => {
                                            navigate(
                                              `/academics/${subLinkItem.navigateTo}/${subLinkItem.id}/${item.id}`
                                            );
                                            handleDropdownDisplay();
                                          }}
                                        >
                                          {item.text}
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Sidebar
        drawerState={drawerState}
        setDrawerState={setDrawerState}
        nmcLogo={nmcLogo}
        navItems={navItems}
      />
    </>
  );
};

export default Header;
Header.defaultProps = {
  navItems: [
    {
      id: 0,
      title: "Home",
      navigateTo: "/",
    },
    {
      id: 1,
      title: "About us",
      navigateTo: "/about-us",
    },
    {
      id: 2,
      title: "Departments",
      navigateTo: "/departments",
      subLink: [
        {
          id: 0,
          text: "Internal Medicine Department",
          navigateTo: "internal-Medicine-department",
          childLink: [
            {
              id: 0,
              text: "General Medicine",
              navigateTo: "general-medicine",
            },
            {
              id: 1,
              text: "Pulmonology",
              navigateTo: "pulmonology",
            },
            {
              id: 2,
              text: "Cardiology",
              navigateTo: "cardiology",
            },
            {
              id: 3,
              text: "gastroenterology",
              navigateTo: "gastroenterology",
            },
            {
              id: 4,
              text: "Critical Care",
              navigateTo: "critical-care",
            },
            {
              id: 5,
              text: "Endocrynology",
              navigateTo: "endocrynology",
            },
            {
              id: 6,
              text: "Rheumatology",
              navigateTo: "rheumatology",
            },
            {
              id: 7,
              text: "Neurology",
              navigateTo: "neurology",
            },
          ],
        },
        {
          id: 1,
          text: "Nephrology Department",
          navigateTo: "nephrology-department",
          childLink: [
            {
              id: 0,
              text: "Nephrology",
              navigateTo: "nephrology",
            },
            {
              id: 1,
              text: "Hemodialysis",
              navigateTo: "hemodialysis",
            },
          ],
        },
        {
          id: 2,
          text: "Surgery Department",
          navigateTo: "surgery-department",
          childLink: [
            {
              id: 0,
              text: "General Surgery",
              navigateTo: "general-surgery",
            },
            {
              id: 1,
              text: "GI Surgery",
              navigateTo: "gi-surgery",
            },
            {
              id: 2,
              text: "Paediatrics Surgery",
              navigateTo: "paediatrics-surgery",
            },
          ],
        },
        {
          id: 3,
          text: "Urosurgery Department",
          navigateTo: "urosurgery-department",
        },
        {
          id: 4,
          text: "Renal Transplant Surgery",
          navigateTo: "renal-transplant-surgery",
        },
        {
          id: 5,
          text: "Neurosurgery Department",
          navigateTo: "Neurosurgery-Department",
        },
        {
          id: 6,
          text: "Obstetrics / Gynaecology Department",
          navigateTo: "obstetrics-gynaecology-department",
        },
        {
          id: 7,
          text: "Orthopedics Department",
          navigateTo: "orthopedics-department",
        },
        {
          id: 8,
          text: "Emergency Department",
          navigateTo: "emergency-department",
        },
        {
          id: 9,
          text: "Paediatrics Department",
          navigateTo: "paediatrics-department",
          childLink: [
            {
              id: 0,
              text: "General Paediatrics",
              navigateTo: "general-paediatrics",
            },
            {
              id: 1,
              text: "Pulmonology",
              navigateTo: "pulmonology",
            },
            {
              id: 2,
              text: "Cardiology",
              navigateTo: "cardiology",
            },
            {
              id: 3,
              text: "Gastroenterology",
              navigateTo: "gastroenterology",
            },
            {
              id: 4,
              text: "Nepharology",
              navigateTo: "nepharology",
            },
            {
              id: 5,
              text: "Neonatology",
              navigateTo: "neonatology",
            },
          ],
        },
        {
          id: 10,
          text: "Otorhinolaryncology (ENT) Department",
          navigateTo: "otorhinolaryncology",
        },
        {
          id: 11,
          text: "Ophthalmology (EYE) Department",
          navigateTo: "ophthalmology",
        },
        {
          id: 12,
          text: "Community Medicine Department",
          navigateTo: "community-medicine",
          childLink: [
            {
              id: 0,
              text: "Immunization",
              navigateTo: "immunization",
            },
            {
              id: 1,
              text: "DOTS",
              navigateTo: "dots",
            },
            {
              id: 2,
              text: "Counselling",
              navigateTo: "counselling",
            },
          ],
        },
        {
          id: 13,
          text: "Oncology Unit",
          navigateTo: "oncology-unit",
        },
        {
          id: 14,
          text: "Dermatology Department",
          navigateTo: "dermatology-department",
        },
        {
          id: 15,
          text: "Psychiatry Department",
          navigateTo: "psychiatry-department",
        },
        {
          id: 16,
          text: "Radiology Department",
          navigateTo: "radiology-department",
          childLink: [
            {
              id: 0,
              text: "Ultrasound",
              navigateTo: "ultrasound",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Services",
      navigateTo: "/services",
      subLink: [
        {
          id: 0,
          text: "Medical & Super Speciality Services",
          navigateTo: "medical-and-super-speciality-services",
          childLink: [
            {
              id: 0,
              text: "Internal Medicine",
              navigateTo: "internal-medicine",
            },
            {
              id: 1,
              text: "Psychiatry (Mental Health)",
              navigateTo: "psychiatry",
            },
            {
              id: 2,
              text: "Gastroenterology",
              navigateTo: "gastroenterology",
            },
            {
              id: 3,
              text: "Paediatric & Neonatology",
              navigateTo: "paediatric-and-neonatology",
            },
            {
              id: 4,
              text: "Dermatology (Skin with Laser Service)",
              navigateTo: "dermatology",
            },
            {
              id: 5,
              text: "24 Hours Emergency",
              navigateTo: "emergency",
            },
          ],
        },
        {
          id: 1,
          text: "Supportive Services",
          navigateTo: "supportive-services",
          childLink: [
            {
              id: 0,
              text: "Pathology & Laboratory Service (24 Hours) (USFDA & WHO approved equipment",
              navigateTo: "pathology-laboratory-service",
            },
            {
              id: 1,
              text: "Radiology & Imaging (24 Hours)",
              navigateTo: "radiology-imaging",
            },
            {
              id: 2,
              text: "Physiotherapy",
              navigateTo: "physiotherapy",
            },
            {
              id: 3,
              text: "Dietician Service",
              navigateTo: "dietician-service",
            },
          ],
        },
        {
          id: 2,
          text: "Surgical & Super Speciality Services",
          navigateTo: "surgical-and-super-speciality-services",
          childLink: [
            {
              id: 0,
              text: "General Surgery",
              navigateTo: "general surgery",
            },
            {
              id: 1,
              text: "Ophthalmology",
              navigateTo: "ophthalmology",
            },
            {
              id: 2,
              text: "Obstetrics, Gynaecology & Family Planning",
              navigateTo: "obstetrics-gynaecology",
            },
            {
              id: 3,
              text: "Orthopaedic Surgery",
              navigateTo: "orthopaedic-surgery",
            },
            {
              id: 4,
              text: "ENT",
              navigateTo: "ent",
            },
          ],
        },
        {
          id: 3,
          text: "Dental",
          navigateTo: "dental",
          childLink: [
            {
              id: 0,
              text: "All Services from College of Dental Science & Hospital",
              navigateTo: "all-services-from-college",
            },
          ],
        },
        {
          id: 4,
          text: "OPD",
          navigateTo: "opd",
        },
        {
          id: 5,
          text: "EHS Service",
          navigateTo: "ehs-service",
        },
      ],
    },
    {
      id: 4,
      title: "Activities",
      navigateTo: "activities",
    },
    {
      id: 5,
      title: "Research",
      navigateTo: "research",
    },
    {
      id: 6,
      title: "Academics",
      navigateTo: "/academics",
      subLink: [
        {
          id: 0,
          text: "Academic Programs",
          navigateTo: "academic-programs",
          childLink: [
            {
              id: 0,
              text: "Medical Program",
              navigateTo: "medical-program",
            },
            {
              id: 1,
              text: "Dental Program",
              navigateTo: "dental-program",
            },
            {
              id: 2,
              text: "Paramedical Program",
              navigateTo: "paramedical-program",
            },
            {
              id: 3,
              text: "Nursing Program",
              navigateTo: "nursing-program",
            },
          ],
        },
        {
          id: 1,
          text: "Faculty",
          navigateTo: "faculty",
          childLink: [
            {
              id: 0,
              text: "MBBS Program",
              navigateTo: "mbbs-program",
            },
            {
              id: 1,
              text: "BSC Nursing",
              navigateTo: "bsc-nursing",
            },
            {
              id: 2,
              text: "PG Program",
              navigateTo: "pg-program",
            },
            {
              id: 3,
              text: "BDS Program",
              navigateTo: "bds-program",
            },
          ],
        },
        {
          id: 2,
          text: "Facilities & Services",
          navigateTo: "facilities-and-services",
          childLink: [
            {
              id: 0,
              text: "Hostels",
              navigateTo: "hostels",
            },
            {
              id: 1,
              text: "Library",
              navigateTo: "library",
            },
            {
              id: 2,
              text: "Auditorium",
              navigateTo: "auditorium",
            },
            {
              id: 3,
              text: "Canteen",
              navigateTo: "canteen",
            },
            {
              id: 4,
              text: "Sports & Recreation",
              navigateTo: "sports-and-recreation",
            },
            {
              id: 5,
              text: "Transportation",
              navigateTo: "transportation",
            },
            {
              id: 6,
              text: "Banking",
              navigateTo: "banking",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      title: "Journal",
    },
    {
      id: 8,
      title: "Contact Us",
      navigateTo: "contact-us",
    },
  ],
};
