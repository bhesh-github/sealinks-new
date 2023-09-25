import React from "react";
import { ReactComponent as ClockIcon } from "../../../../images/home/getInTouch/clock.svg";
import { ReactComponent as LocationIcon } from "../../../../images/home/getInTouch/location.svg";
import { ReactComponent as MailIcon } from "../../../../images/home/getInTouch/mail.svg";
import { ReactComponent as PhoneIcon } from "../../../../images/home/getInTouch/phone.svg";
import building from "../../../../images/home/getInTouch/building.png";
import { useNavigate } from "react-router-dom";

const GetInTouch = ({ boxDataList }) => {
  const navigate = useNavigate();

  const iconList = {
    phone: <PhoneIcon className="icon" />,
    location: <LocationIcon className="icon" />,
    email: <MailIcon className="icon" />,
    clock: <ClockIcon className="icon" />,
  };

  const boxList =
    boxDataList &&
    boxDataList.map((item) => {
      const {
        id = "",
        iconType = "",
        title = "",
        listOne = "",
        listTwo = "",
      } = item;

      return (
        <div
          className="box"
          key={id}
          onClick={() => {
            navigate("contact-us");
          }}
        >
          <div className="content">
            {iconList[iconType]}
            <div className="title">{title}</div>
            <div className="lists">
              <div className="list-text">{listOne}</div>
              <div className="list-text">{listTwo}</div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div
      className="get-in-touch"
      style={{ backgroundImage: `url(${building})` }}
    >
      <div className="text-wrapper">
        <span className="quote">Get in touch</span>
        <div className="contact">Contact</div>
      </div>
      <div className="box-wrapper">
        <div className="inner-box-wrapper">
          <div className="griding">{boxList && boxList}</div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

GetInTouch.defaultProps = {
  boxDataList: [
    {
      id: "0",
      iconType: "phone",
      title: "Emergency",
      listOne: "01-4911008",
      listTwo: "01-1234567",
    },
    {
      id: "1",
      iconType: "location",
      title: "Location",
      listOne: "Attarkhel, Jorpati,",
      listTwo: "Kathmandu, Nepal",
    },
    {
      id: "2",
      iconType: "email",
      title: "Email",
      listOne: "nmc@gmil.com",
      listTwo: "principal@nmcth.edu",
    },
    {
      id: "3",
      iconType: "clock",
      title: "Working Hours",
      listOne: "Mon-Sat 09:00-20:00",
      listTwo: "Saturday Emergency only",
    },
  ],
};
