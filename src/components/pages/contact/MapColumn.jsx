import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import MailIcon from "@mui/icons-material/Mail";
const MapColumn = () => {
  return (
    <div className="map-column">
      <div className="infos">
        <h4 className="map-header">Want to reach us directly?</h4>
        <p className="brief">
          If you have any queries then feel free to contact us.
        </p>
        <div className="infos">
          <div className="info-badge">
            <MailIcon className="info-icon" />
            <span>info@onegotravel.com</span>
          </div>
          <div className="info-badge">
            <FaPhoneAlt className="info-icon phone-icon" />
            <span>+971 50 149 9501</span>
          </div>
          <div className="info-badge">
            <MdLocationOn className="info-icon" />
            <span>+971 50 149 9501</span>
          </div>
        </div>
      </div>
      <div className="map-wrapper">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1213.0250128519554!2d85.37946454020604!3d27.7331218946377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d27.717928099999998!2d85.344622!4m5!1s0x39eb1b95d18043db%3A0xc36ad09f0b34fe12!2sNepal%20Medical%20College%20Teaching%20Hospital%2C%20Kathmandu%2044600!3m2!1d27.7333546!2d85.3805491!5e0!3m2!1sen!2snp!4v1695322635634!5m2!1sen!2snp"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <div
          dangerouslySetInnerHTML={{
            __html:
              companyProfileApi &&
              companyProfileApi.map &&
              companyProfileApi.map,
          }}
        /> */}
      </div>
    </div>
  );
};

export default MapColumn;
