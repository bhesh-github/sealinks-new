import React from "react";
import { useNavigate } from "react-router-dom";
import HiCatsCarousel from "./HiCatsCarousel";
import Carousel from "better-react-carousel";
import inbound1 from "../../../../images/forAll/inboundPackages/inbound1.jpg";
import inbound3 from "../../../../images/forAll/inboundPackages/inbound3.png";
import inbound5 from "../../../../images/forAll/inboundPackages/inbound5.jpg";
import inbound7 from "../../../../images/forAll/inboundPackages/inbound7.jpg";
// import inbound8 from "../../../../images/forAll/inboundPackages/inbound8.jpg";
import inbound9 from "../../../../images/forAll/inboundPackages/inbound9.jpg";
// import inbound10 from "../../../../images/forAll/inboundPackages/inbound10.jpg";
// import inbound11 from "../../../../images/forAll/inboundPackages/inbound11.jpg";
// import inbound12 from "../../../../images/forAll/inboundPackages/inbound12.jpg";
// import inbound13 from "../../../../images/forAll/inboundPackages/inbound13.jpg";

// import { ReactComponent as AcademicsIcon } from "../../../../images/home/hiBtnsImages/academics.svg";
// import { ReactComponent as Appointments } from "../../../../images/home/hiBtnsImages/appointments.svg";
// import { ReactComponent as HealthRecords } from "../../../../images/home/hiBtnsImages/healthRecords.svg";
// import { ReactComponent as Services } from "../../../../images/home/hiBtnsImages/services.svg";

const HiCategories = ({ inboundPackages }) => {
  const navigate = useNavigate();

  // const iconsList = {
  //   academics: AcademicsIcon && <AcademicsIcon className="btn-icon" />,
  //   appointments: Appointments && (
  //     <Appointments className="btn-icon" style={{ color: "red" }} />
  //   ),
  //   healthRecords: HealthRecords && <HealthRecords className="btn-icon" />,
  //   services: Services && (
  //     <Services className="btn-icon" style={{ color: "red" }} />
  //   ),
  // };

  const btnsList = [
    {
      id: 0,
      text: "Book appointment",
      iconType: "appointments",
      navigateTo: "doctor-appointment/direct",
    },
    {
      id: 1,
      text: "View Health Record",
      iconType: "healthRecords",
    },
    {
      id: 2,
      text: "Our Services",
      iconType: "services",
      navigateTo: "services/medical-and-super-speciality-services/0/0",
    },
    {
      id: 3,
      text: "NMC Academics",
      iconType: "academics",
      navigateTo: "academics/academic-programs/0/0",
    },
  ];

  const catsCards =
    inboundPackages &&
    inboundPackages.map((item) => {
      const { id = "", image_link = "", name = "", navigateTo = "" } = item;
      return (
        <Carousel.Item>
          <div
            className="hi-cat"
            key={id}
            onClick={() => {
              navigate(`${navigateTo}`);
            }}
          >
            {/* {iconsList[iconType]} */}
            <img src={image_link} alt="" className="cat-img" />
            <span className="cat-text">{name}</span>
          </div>
        </Carousel.Item>
      );
    });

  return (
    <div className="hi-categories">
      <HiCatsCarousel catsCards={catsCards && catsCards} />
    </div>
  );
};

export default HiCategories;
HiCategories.defaultProps = {
  inboundPackages: [
    {
      id: 0,
      image_link: inbound1,
      name: "Rafting",
      navigateTo: "",
    },
    {
      id: 2,
      image_link: inbound3,
      name: "Mountains",
      navigateTo: "",
    },
    {
      id: 4,
      image_link: inbound5,
      name: "Sunrise",
      navigateTo: "",
    },
    {
      id: 5,
      image_link: inbound9,
      name: "Village",
      navigateTo: "",
    },
    {
      id: 6,
      image_link: inbound7,
      name: "Heritage",
      navigateTo: "",
    },
    {
      id: 7,
      image_link: inbound1,
      name: "No Rafting",
      navigateTo: "",
    },
    {
      id: 8,
      image_link: inbound3,
      name: "Mountains",
      navigateTo: "",
    },
    {
      id: 9,
      image_link: inbound5,
      name: "Sunrise",
      navigateTo: "",
    },
    {
      id: 10,
      image_link: inbound9,
      name: "Village",
      navigateTo: "",
    },
    {
      id: 11,
      image_link: inbound7,
      name: "Heritage",
      navigateTo: "",
    },
    {
      id: 0,
      image_link: inbound1,
      name: "Rafting",
      navigateTo: "",
    },
    {
      id: 2,
      image_link: inbound3,
      name: "Mountains",
      navigateTo: "",
    },
    {
      id: 4,
      image_link: inbound5,
      name: "Sunrise",
      navigateTo: "",
    },
    {
      id: 5,
      image_link: inbound9,
      name: "Village",
      navigateTo: "",
    },
    {
      id: 6,
      image_link: inbound7,
      name: "Heritage",
      navigateTo: "",
    },
    {
      id: 7,
      image_link: inbound1,
      name: "Rafting",
      navigateTo: "",
    },
    {
      id: 8,
      image_link: inbound3,
      name: "Mountains",
      navigateTo: "",
    },
    {
      id: 9,
      image_link: inbound5,
      name: "Sunrise",
      navigateTo: "",
    },
    {
      id: 10,
      image_link: inbound9,
      name: "Village",
      navigateTo: "",
    },
    {
      id: 11,
      image_link: inbound7,
      name: "Heritage",
      navigateTo: "",
    },
  ],
};
