import React from "react";
import { lazy } from "react";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import img0 from "../../../images/pages/departments/doctors/foto0.jpg";
import img1 from "../../../images/pages/departments/doctors/foto1.jpg";
import img2 from "../../../images/pages/departments/doctors/foto2.jpg";
import img3 from "../../../images/pages/departments/doctors/foto3.jpg";
import img4 from "../../../images/pages/departments/doctors/foto4.jpg";
import img5 from "../../../images/pages/departments/doctors/foto5.jpg";

const FloatingLinkBtn = lazy(() => import("../../forAll/FloatingLinkBtn"));

const DoctorsColumn = ({
  doctorsList,
  selectedDepartmentDetail,
  handleIsSectionBar,
}) => {
  const navigate = useNavigate();

  const departmentOf = `${
    selectedDepartmentDetail &&
    selectedDepartmentDetail.slugDepartment &&
    selectedDepartmentDetail.slugDepartment.replaceAll("-", " ")
  }`;

  return (
    <div className="doctors-column">
      <div className="section-heading">
        Doctors of{" "}
        <span className="highlight">{departmentOf && departmentOf}</span>
      </div>
      <div className="floating-btn-row">
        <FloatingLinkBtn
          handleIsSectionBar={handleIsSectionBar && handleIsSectionBar}
        />
      </div>
      <div className="doctors-card-wrapper">
        {doctorsList &&
          doctorsList.map((item) => {
            const { id = "", name = "", image_link = "", slug = "" } = item;
            return (
              <div className="doctor-card" key={id} title={name}>
                <img src={image_link} alt="" className="card-image" />
                <div className="name">{name}</div>
                <Button
                  className="appointment-btn"
                  onClick={() => {
                    setTimeout(() => {
                      navigate(`/doctor-appointment/${slug}`);
                    }, 250);
                  }}
                >
                  Appointment
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DoctorsColumn;
DoctorsColumn.defaultProps = {
  doctorsList: [
    {
      id: 0,
      name: "Prof. Dr. John Sharma",
      slug: "john-sharma",
      image_link: img0,
    },
    {
      id: 1,
      name: "Prof. Dr. Meera Chy",
      slug: "meera-chy",
      image_link: img1,
    },
    {
      id: 2,
      name: "Prof. Dr. Robin Hood",
      slug: "robin-hood",
      image_link: img2,
    },
    {
      id: 3,
      name: "Prof. Dr. Gita Patel",
      slug: "gita-patel",
      image_link: img3,
    },
    {
      id: 4,
      name: "Prof. Dr. Rakesh Subbha",
      slug: "rakesh-subbha",
      image_link: img4,
    },
    {
      id: 5,
      name: "Prof. Dr. Indira Shrestha",
      slug: "indira-shrestha",
      image_link: img5,
    },
    {
      id: 6,
      name: "Prof. Dr. John Sharma",
      slug: "john-sharma",
      image_link: img0,
    },
    {
      id: 7,
      name: "Prof. Dr. Meera Chy",
      slug: "meera-chy",
      image_link: img1,
    },
    {
      id: 8,
      name: "Prof. Dr. Robin Hood",
      slug: "robin-hood",
      image_link: img2,
    },
    {
      id: 9,
      name: "Prof. Dr. Gita Patel",
      slug: "gita-patel",
      image_link: img3,
    },
    {
      id: 10,
      name: "Prof. Dr. Rakesh Subbha",
      slug: "rakesh-subbha",
      image_link: img4,
    },
    {
      id: 11,
      name: "Prof. Dr. Indira Shrestha",
      slug: "indira-shrestha",
      image_link: img5,
    },
  ],
};
