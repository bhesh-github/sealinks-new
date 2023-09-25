import React, { useEffect, useState } from "react";
import nmcLogo from "../../images/forAll/nmcLogo.png";
import SnackBar from "../forAll/SnackBar";
import { useNavigate } from "react-router-dom";
import { ReactComponent as InstaIcon } from "../../images/main/footer/instaIcon.svg";
import { ReactComponent as FbIcon } from "../../images/main/footer/fbIcon.svg";
import { ReactComponent as LinkdenIcon } from "../../images/main/footer/linkdenIcon.svg";
import { ReactComponent as SendArrow } from "../../images/main/footer/sendArrow.svg";

import ProgressIndicator from "../forAll/ProgressIndicator";

const inputObj = {
  email: "",
};
const Footer = ({ introSection, importantLinks, contactUs }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(inputValue));
    setIsSubmit(true);
  };

  const postRequestFunc = async () => {
    // const d =
    //     formInput &&
    //     formInput.date;
    // const month = Number(d.getMonth()) + 1;
    // const displayDate = d.getFullYear() + "-" + month + "-" + d.getDate();

    // let postStatus;

    // const formData = {
    //     ...formInput,
    //     tour_date: displayDate,
    // };
    // await axios
    //     .post(
    //         import.meta.env.VITE_API_BASE_URL + "/api/package-booking",
    //         formData
    //     )
    //     .then((res) => {
    //         postStatus = res.data.status;
    //     })
    //     .catch((err) => {
    //         postStatus = err.response.status;
    //     });
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
    // const m =
    //     postStatus === 200
    //         ? "You have Booked your tour Successfully."
    //         : "Unfortunately Booking Failed. please try again later";

    // setSpinnerClassName("none");

    // postStatus === 200
    //     ? Swal.fire({
    //           position: "center",
    //           icon: "success",
    //           title: m,
    //           showConfirmButton: false,
    //           timer: 1500,
    //       })
    //     : Swal.fire({
    //           position: "center",
    //           icon: "error",
    //           title: m,
    //           showConfirmButton: false,
    //           timer: 1500,
    //       });
    // toggleOverlay(false);
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
            <div className="intro-column">
              <div className="logo-name-wrapper">
                {<img src={nmcLogo} alt="" className="logo" />}
                <div className="name"> {introSection && introSection.name}</div>
              </div>
              <div className="brief">{introSection && introSection.text}</div>
            </div>
            <div className="links-column">
              <div className="title">
                {importantLinks && importantLinks.title}
              </div>
              <div className="list-wrapper">
                {importantLinks &&
                  importantLinks.linkList &&
                  importantLinks.linkList.map((item, idx) => (
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
            <div className="contact-us-column">
              <div className="title">
                {contactUs && contactUs.title && contactUs.title}
              </div>
              <div className="list-wrapper">
                <div className="contact-list">
                  Call: {contactUs && contactUs.number && contactUs.number}
                </div>
                <div className="contact-list">
                  Email: {contactUs && contactUs.email && contactUs.email}
                </div>
                <div className="contact-list">
                  Address: {contactUs && contactUs.address && contactUs.address}
                </div>
              </div>
            </div>
            <div className="newsletter-column">
              <div className="title">Newsletter</div>
              <form
                className="email-form"
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="input-btn-wrapper">
                  <input
                    value={inputValue.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="input-filed"
                  />
                  <button className="send-arrow-btn" type="submit">
                    <SendArrow className="send-arrow" />
                  </button>
                </div>
                <div className="form-error">
                  {formErrors && formErrors.email && formErrors.email}
                </div>
              </form>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="bottom-row">
            <div className="copyright-text">
              © 2023 Nepal Medical College. All Rights Reserved.
            </div>
            <div className="social-icons-wrapper">
              <LinkdenIcon className="icon" />
              <FbIcon className="icon" />
              <InstaIcon className="icon" />
            </div>
          </div>
        </div>
      </div>
      <SnackBar
        alertMessage={alertMessage}
        snackBarState={snackBarState}
        setSnackBarState={setSnackBarState}
      />
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
    number: "+977-01-4911008",
    email: "principal@nmcth.edu",
    address: "Attarkhel, Jorpati, Kathmandu, Nepal",
  },
};
