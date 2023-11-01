import React, { useEffect, useState } from "react";
import nmcLogo from "../../images/forAll/nmcLogo.png";
import SnackBar from "../forAll/SnackBar";
import { useNavigate } from "react-router-dom";
import { ReactComponent as InstaIcon } from "../../images/main/footer/instaIcon.svg";
import { ReactComponent as FbIcon } from "../../images/main/footer/fbIcon.svg";
import { ReactComponent as LinkdenIcon } from "../../images/main/footer/linkdenIcon.svg";
import { ReactComponent as SendArrow } from "../../images/main/footer/sendArrow.svg";
import paymentCardsImg from "../../images/main/footer/payments.png";

import { FaTripadvisor } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";

import ProgressIndicator from "../forAll/ProgressIndicator";

const inputObj = {
  email: "",
};
const Footer = ({ introSection, importantLinks, contactUs, footerLinks }) => {
  const [inputValue, setInputValue] = useState(inputObj);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  // ------------------snackbar----------------------------
  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const [alertMessage, setAlertMessage] = useState({
    successMessage: "asdfads",
    failedMessage: "",
  });
  // setSnackBarState({ ...newState, open: true });
  const handleClick = (newState) => () => {
    setSnackBarState((prev) => ({ ...prev, open: true }));
  };
  // -----------------end snackbar----------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setFormErrors(validate(inputValue));
  //   setIsSubmit(true);
  // };

  const postRequestFunc = async () => {
    setFormSubmitting(true);
    setTimeout(() => {
      setInputValue((prev) => ({
        ...prev,
        email: "",
      }));
      setAlertMessage((prev) => ({
        ...prev,
        successMessage: "Your email has been successfully received.",
      }));
      setFormSubmitting(false);
      setSnackBarState((prev) => ({ ...prev, open: true }));
      handleClick({ vertical: "bottom", horizontal: "center" });
    }, 3000);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormSubmitting(true);
      postRequestFunc();
      setIsSubmit(false);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const validRegex = /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!values.email.match(validRegex)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };

  const d = new Date();

  return (
    <>
      {formSubmitting && (
        <div className="spinner-wrapper">
          <ProgressIndicator className="spinner" />
        </div>
      )}
      <div className="footer">
        <div className="contents">
          <div className="columns-wrapper">
            {footerLinks.map((item) => {
              const { id = "", title = "", linkList = "", list = "" } = item;
              if (title === "Contact") {
                return (
                  <div className="links-column" key={id}>
                    <div className="title">{title && title}</div>
                    <div className="list-wrapper">
                      {list.map((item) => {
                        const {
                          id = "",
                          text = "",
                          type = "",
                          img_link = "",
                        } = item;
                        if (type === "img") {
                          return <img src={img_link} alt="" width="220px" />;
                        } else {
                          return (
                            <div className="contact-list-item" key={id}>
                              {text}
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="links-column" key={id}>
                    <div className="title">{title && title}</div>
                    <div className="list-wrapper">
                      {linkList.map((item, idx) => (
                        <div
                          className="list-item"
                          key={idx}
                          onClick={() => {
                            navigate(`${item.navigateTo}`);
                          }}
                        >
                          {item.linkName && item.linkName}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="hr-line"></div>
        </div>
        <div className="bottom-row">
          <div className="content">
            <div className="social-icons-wrapper">
              <BiLogoFacebook className="icon" />
              <FiInstagram className="icon" />
              <AiFillYoutube className="icon" />
              <FaTripadvisor className="icon" />

              {/* <LinkdenIcon className="icon" />
              <FbIcon className="icon" />
              <InstaIcon className="icon" /> */}
            </div>
            <div className="copyright-text">
              <div className="text-item">
                © {d && d.getFullYear()} Sealinks Holidays Pvt. Ltd.
              </div>
              <div className="text-item">All Rights Reserved</div>
              <div className="text-item">
                Developed by Next Aussie Tech - Kathmandu
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <SnackBar
        alertMessage={alertMessage}
        snackBarState={snackBarState}
        setSnackBarState={setSnackBarState}
      /> */}
    </>
  );
};

export default Footer;
Footer.defaultProps = {
  introSection: {
    icon: '<NmcLogo className="icon" />',
    name: "Nepal medical college",
    text: "Nepal Medical College Pvt. Ltd (NMC) is situated at Attarkhel of Jorpati Village Development Committee, in Kathmandu, about 11 km. northeast of Kathmandu ...",
  },
  importantLinks: {
    title: "Important Links",
    linkList: [
      { linkName: "Appointment", navigateTo: "doctor-appointment/direct" },
      {
        linkName: "Doctors",
        navigateTo: "departments/internal-Medicine-department/0/0",
      },
      {
        linkName: "Services",
        navigateTo: "services/medical-and-super-speciality-services/0/0",
      },
      { linkName: "About Us", navigateTo: "about-us" },
    ],
  },
  contactUs: {
    title: "Contact Us",
    number: "+977 9802348633",
    email: "principal@nmcth.edu",
    address: "Naxal-01, Nag Pokhari, Kathmandu, Nepal",
    img_link:
      "https://test.terracecafe.com.np/build/assets/payment-cards-7aed09b0.png",
  },
  footerLinks: [
    {
      id: 0,
      title: "Important Links",
      linkList: [
        {
          id: 0,
          linkName: "Jungle Highlights",
          navigateTo: "",
        },
        {
          id: 0,
          linkName: "Beauty With Purpose Highlights",
          navigateTo: "",
        },
        {
          id: 0,
          linkName: "Adventure Highlights",
          navigateTo: "",
        },
      ],
    },
    {
      id: 1,
      title: "Expedition",
      linkList: [
        {
          id: 0,
          linkName: "The Best of Everest Base Camp Trek / Kalapathar Trekking",
          navigateTo: "",
        },
      ],
    },
    {
      id: 2,
      title: "Quick Links",
      linkList: [
        {
          id: 0,
          linkName: "FAQ",
          navigateTo: "",
        },
        {
          id: 1,
          linkName: "Booking Condition",
          navigateTo: "",
        },
        {
          id: 2,
          linkName: "Visa Information",
          navigateTo: "",
        },
        {
          id: 3,
          linkName: "General Information",
          navigateTo: "",
        },
      ],
    },
    {
      id: 2,
      title: "Contact",
      list: [
        {
          id: 0,
          text: "+977 9802348633",
          navigateTo: "",
        },
        {
          id: 1,
          text: "Naxal-01, Nag Pokhari, Kathmandu, Nepal",
          navigateTo: "",
        },
        {
          id: 2,
          type: "img",
          img_link: paymentCardsImg,
          navigateTo: "",
        },
      ],
    },
  ],
};
