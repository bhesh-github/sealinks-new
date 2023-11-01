import React, { useEffect, useState } from "react";
import PartnerCard from "./PartnerCard";
import img1 from "../../../../images/home/ourCompanies/comp1.png";
import img2 from "../../../../images/home/ourCompanies/comp2.png";
import img3 from "../../../../images/home/ourCompanies/comp3.png";
import img4 from "../../../../images/home/ourCompanies/comp4.png";
import img5 from "../../../../images/home/ourCompanies/comp5.png";
import img6 from "../../../../images/home/ourCompanies/comp6.png";

const OurCompanies = ({ campanies }) => {
  const [sliceNum, setSliceNum] = useState(13);

  useEffect(() => {
    window.innerWidth < 550 ? setSliceNum(4) : setSliceNum(13);
  }, []);

  return (
    <div className="our-companies">
      <div className="content">
        <div className="sec-head">
          <span className="highlight">Our</span> Companies
        </div>
        <div className="sec-subtitle">Other services we offer</div>
        <div className="sub-line"></div>
        <div className="cards-wrapper">
          {campanies &&
            campanies
              .slice(0, sliceNum && sliceNum)
              .map((item) => <PartnerCard key={item.id} item={item && item} />)}
        </div>
      </div>
    </div>
  );
};

export default OurCompanies;

OurCompanies.defaultProps = { campanies: [img1, img2, img3, img4, img5, img6] };
