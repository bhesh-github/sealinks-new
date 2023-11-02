import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import companyLogo from "../../../images/forAll/sealinks_logo.png";
import AccountMenu from "../../forAll/accountMenu/AccountMenu";

import Sidebar from "./sidebar/Sidebar";
import { ReactComponent as FbIcon } from "../../../images/forAll/socialIcons/fb.svg";
import { ReactComponent as InstaIcon } from "../../../images/forAll/socialIcons/insta.svg";
import { ReactComponent as LinkdenIcon } from "../../../images/forAll/socialIcons/linkden.svg";
import { ReactComponent as YoutubeIcon } from "../../../images/forAll/socialIcons/youtube.svg";
import { useNavigate } from "react-router-dom";
//
import { MdPhoneEnabled } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import Button from "@mui/material/Button";

const Header = ({ navItems }) => {
  const [isDropdown, setIsDropdown] = useState("");

  const [drawerState, setDrawerState] = React.useState({
    left: false,
  });
  const [rightContents, setRightContents] = useState("");
  const [activeMenuItem, setActiveMenuItem] = useState(0);

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
          <div className="main-bar">
            <div className="items-wrapper">
              <span
                className="left-section"
                onClick={() => {
                  navigate("/");
                }}
              >
                <img src={companyLogo} alt="" className="company-logo" />
                {/* <span className="company-name">NEPAL MEDIAL COLLEGE</span> */}
              </span>
              <div className="right-sec">
                <div className="account-menu-comp">
                  <AccountMenu />
                </div>
              </div>

              {/* <RxHamburgerMenu
                className="toggle-icon"
                onClick={() => {
                  setDrawerState((prev) => ({
                    ...prev,
                    left: true,
                  }));
                }}
              /> */}
            </div>
          </div>
          <div className="bottom-bar">
            <div className="nav-item-wrapper">
              {navItems.map((navlink, idx) => {
                const { title = "", subLink = "", navigateTo = "" } = navlink;
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
                      onMouseEnter={() => {
                        setRightContents(
                          subLink && subLink[0] && subLink[0].childLink
                            ? subLink[0].childLink
                            : ""
                        );
                        setActiveMenuItem(0);
                      }}
                    >
                      {" "}
                      {title}
                      {subLink && (
                        <MdOutlineKeyboardArrowDown className="caret-icon" />
                      )}
                    </button>
                    {title === "Inbounds" && subLink && (
                      <div
                        className="outer-wrapper"
                        style={{ display: `${isDropdown && isDropdown}` }}
                      >
                        <div className="dropdown-content">
                          <div className="menus">
                            {subLink &&
                              subLink.map((item, idx) => {
                                const {
                                  id = "",
                                  text = "",
                                  navigateTo = "",
                                  childLink = "",
                                } = item;

                                const activeItem =
                                  idx === activeMenuItem ? "#f1f1f1" : "";

                                return (
                                  <div
                                    className="menu-item-wrapper"
                                    key={id}
                                    onMouseEnter={() => {
                                      setRightContents(childLink);
                                      setActiveMenuItem(idx);
                                    }}
                                    style={{
                                      backgroundColor: `${activeItem}`,
                                    }}
                                    onClick={() => {
                                      !childLink && handleDropdownDisplay();
                                    }}
                                  >
                                    <div className="menu-item">{text}</div>
                                    {childLink && (
                                      <MdKeyboardArrowRight className="arrow-icon" />
                                    )}
                                  </div>
                                );
                              })}
                          </div>
                          <div className="right-contents">
                            {rightContents &&
                              rightContents.map((item) => {
                                const {
                                  id = "",
                                  text = "",
                                  navigateTo = "",
                                } = item;
                                return (
                                  <div
                                    className="content-item"
                                    key={id}
                                    onClick={() => {
                                      handleDropdownDisplay();
                                    }}
                                  >
                                    {text}
                                  </div>
                                );
                              })}
                          </div>
                          {/* {subLink &&
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
                            })} */}
                        </div>
                      </div>
                    )}
                    {title === "Outbounds" && subLink && (
                      <div
                        className="outer-wrapper"
                        style={{ display: `${isDropdown && isDropdown}` }}
                      >
                        <div className="dropdown-content">
                          <div className="menus">
                            {subLink &&
                              subLink.map((item, idx) => {
                                const {
                                  id = "",
                                  text = "",
                                  navigateTo = "",
                                  childLink = "",
                                } = item;
                                const activeItem =
                                  idx === activeMenuItem ? "#f1f1f1" : "";

                                return (
                                  <div
                                    className="menu-item-wrapper"
                                    key={id}
                                    onMouseEnter={() => {
                                      setRightContents(childLink);
                                      setActiveMenuItem(idx);
                                    }}
                                    style={{
                                      backgroundColor: `${activeItem}`,
                                    }}
                                    onClick={() => {
                                      !childLink && handleDropdownDisplay();
                                    }}
                                  >
                                    <div className="menu-item">{text}</div>
                                    {childLink && (
                                      <MdKeyboardArrowRight className="arrow-icon" />
                                    )}
                                  </div>
                                );
                              })}
                          </div>
                          <div className="right-contents">
                            {rightContents &&
                              rightContents.map((item) => {
                                const {
                                  id = "",
                                  text = "",
                                  navigateTo = "",
                                } = item;
                                return (
                                  <div
                                    className="content-item"
                                    key={id}
                                    onClick={() => {
                                      handleDropdownDisplay();
                                    }}
                                  >
                                    {text}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    )}
                    {title === "More Links" && subLink && (
                      <div
                        className="outer-wrapper"
                        style={{ display: `${isDropdown && isDropdown}` }}
                      >
                        <div className="dropdown-content">
                          <div className="menus">
                            {subLink &&
                              subLink.map((item, idx) => {
                                const {
                                  id = "",
                                  text = "",
                                  navigateTo = "",
                                  childLink = "",
                                } = item;
                                const activeItem =
                                  idx === activeMenuItem ? "#f1f1f1" : "";
                                return (
                                  <div
                                    className="menu-item-wrapper"
                                    key={id}
                                    onMouseEnter={() => {
                                      setRightContents(childLink);
                                      setActiveMenuItem(idx);
                                    }}
                                    style={{
                                      backgroundColor: `${activeItem}`,
                                    }}
                                    onClick={() => {
                                      !childLink && handleDropdownDisplay();
                                    }}
                                  >
                                    <div className="menu-item">{text}</div>
                                    {childLink && (
                                      <MdKeyboardArrowRight className="arrow-icon" />
                                    )}
                                  </div>
                                );
                              })}
                          </div>
                          <div className="right-contents">
                            {rightContents &&
                              rightContents.map((item) => {
                                const { id = "", text = "" } = item;
                                return (
                                  <div
                                    className="content-item"
                                    key={id}
                                    onClick={() => {
                                      handleDropdownDisplay();
                                    }}
                                  >
                                    {text}
                                  </div>
                                );
                              })}
                          </div>
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
        companyLogo={companyLogo}
        navItems={navItems}
      />
    </>
  );
};

export default Header;
Header.defaultProps = {
  navItems: [
    {
      id: 2,
      title: "Inbounds",
      navigateTo: "/departments",
      subLink: [
        {
          id: 0,
          text: "Top Tour Packages",
          navigateTo: "internal-Medicine-department",
          childLink: [
            {
              id: 0,
              text: "Geteway To Ilam Tea Garden",
              navigateTo: "geteway-to-ilam-tea-garden",
            },
            {
              id: 1,
              text: "Namo Buddha Day Tour",
              navigateTo: "namo-buddha-day-tour",
            },
            {
              id: 2,
              text: "Hello Kathmandu Tour",
              navigateTo: "hello-kathmandu-tour",
            },
            {
              id: 3,
              text: "Capital Highlights Tour",
              navigateTo: "capital-highlights-tour",
            },
            {
              id: 4,
              text: "Muktinath Darshan Tour",
              navigateTo: "muktinath-darshan-tour",
            },
            {
              id: 5,
              text: "Kathmandu And Pokhara Tour",
              navigateTo: "kathmandu-and-pokhara-tour",
            },
            {
              id: 6,
              text: "Sirubari Village Tour",
              navigateTo: "sirubari-village-tour",
            },
            {
              id: 7,
              text: "Other Attracting Packages",
              navigateTo: "other-attracting-packages",
            },
          ],
        },
        {
          id: 1,
          text: "Top Trekking",
          navigateTo: "nephrology-department",
          childLink: [
            {
              id: 0,
              text: "Langtang Trek",
              navigateTo: "langtang-trek",
            },
            {
              id: 1,
              text: "Rara Lake Trekking",
              navigateTo: "rara-lake-trekking",
            },
            {
              id: 2,
              text: "Kathmandu Nagarkot Paradise",
              navigateTo: "kathmandu-nagarkot-paradise",
            },
            {
              id: 3,
              text: "Darjeeling Sikkim Trek",
              navigateTo: "darjeeling-sikkim-trek",
            },
          ],
        },
        {
          id: 2,
          text: "Mountaineering",
          navigateTo: "surgery-department",
          childLink: [],
        },
        {
          id: 9,
          text: "Expedition",
          navigateTo: "paediatrics-department",
          childLink: [],
        },
        {
          id: 12,
          text: "Adventure Activitiess",
          navigateTo: "community-medicine",
          childLink: [],
        },
      ],
    },
    {
      id: 3,
      title: "Outbounds",
      navigateTo: "/services",
      subLink: [
        {
          id: 0,
          text: "Dubai",
          navigateTo: "medical-and-super-speciality-services",
          childLink: [
            {
              id: 0,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 1,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 2,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 3,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
          ],
        },
        {
          id: 1,
          text: "Cambodia",
          navigateTo: "supportive-services",
          childLink: [
            {
              id: 0,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 1,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
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
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
          ],
        },
        {
          id: 3,
          text: "Thailand",
          navigateTo: "dental",
          childLink: [
            {
              id: 0,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 1,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 2,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 3,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
          ],
        },
        {
          id: 4,
          text: "Indonesia",
          navigateTo: "dental",
          childLink: [
            {
              id: 0,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 1,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 2,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 3,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
          ],
        },
        {
          id: 5,
          text: "Colors Of Europe",
          navigateTo: "dental",
          childLink: [
            {
              id: 0,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 1,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 2,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 3,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
          ],
        },
        {
          id: 6,
          text: "Japan",
          navigateTo: "dental",
          childLink: [],
        },
        {
          id: 7,
          text: "Azerbaijan",
          navigateTo: "dental",
          childLink: [
            {
              id: 0,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 1,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 2,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
            {
              id: 3,
              text: "Dubai Land of Dreams",
              navigateTo: "dubai-land-of-dreams",
            },
          ],
        },
        {
          id: 8,
          text: "Korea",
          navigateTo: "dental",
          childLink: [],
        },
        {
          id: 8,
          text: "Malaysia",
          navigateTo: "dental",
          childLink: [],
        },
      ],
    },
    {
      id: 6,
      title: "More Links",
      navigateTo: "/academics",
      subLink: [
        {
          id: 0,
          text: "Travel Info",
          navigateTo: "academic-programs",
        },
        {
          id: 1,
          text: "Our Gallery",
          navigateTo: "faculty",
        },
        {
          id: 2,
          text: "About Us",
          navigateTo: "facilities-and-services",
        },
        {
          id: 3,
          text: "FAQ",
          navigateTo: "facilities-and-services",
          childLink: [
            {
              id: 0,
              text: "What is Question?",
              navigateTo: "This is Answer.",
            },
            {
              id: 1,
              text: "What is Question?",
              navigateTo: "This is Answer.",
            },
            {
              id: 2,
              text: "What is Question?",
              navigateTo: "This is Answer.",
            },
          ],
        },
        {
          id: 4,
          text: "Blog",
          navigateTo: "facilities-and-services",
          childLink: [
            {
              id: 1,
              text: "Test 1",
              navigateTo: "This is Test 1.",
            },
            {
              id: 2,
              text: "Test 2",
              navigateTo: "This is Test 2.",
            },
          ],
        },
        {
          id: 5,
          text: "Contact",
          navigateTo: "facilities-and-services",
        },
      ],
    },
    // {
    //   id: 7,
    //   title: "Journal",
    // },
  ],
};
