import React, { useEffect, useState } from "react";
import OutboundBetterCarousel from "./OurboundBetterCarousel";
// import { BsArrowRightShort } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";

// import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Carousel from "better-react-carousel";

import img1 from "../../../../images/forAll/outboundPackages/azerbaijan.jpg";
import img2 from "../../../../images/forAll/outboundPackages/cambodia.jpg";
import img3 from "../../../../images/forAll/outboundPackages/china.jpg";
import img4 from "../../../../images/forAll/outboundPackages/dubai.webp";
import img5 from "../../../../images/forAll/outboundPackages/colorsOfEurope.jpg";
import img6 from "../../../../images/forAll/outboundPackages/indonesia.webp";
import img7 from "../../../../images/forAll/outboundPackages/japan.jpg";
import img8 from "../../../../images/forAll/outboundPackages/korea.jpg";
import img9 from "../../../../images/forAll/outboundPackages/malasya.jpg";
import img10 from "../../../../images/forAll/outboundPackages/mauritius.jpg";
import img11 from "../../../../images/forAll/outboundPackages/mysticMauritius.jpg";
import img12 from "../../../../images/forAll/outboundPackages/singapore.jpg";
import img13 from "../../../../images/forAll/outboundPackages/srilanka.jpg";
import img14 from "../../../../images/forAll/outboundPackages/thailand.jpeg";
import img15 from "../../../../images/forAll/outboundPackages/turkey.jpg";

// import groupPhoto from "../../../../images/home/whyChooseUs/groupPhoto.jpg";
// import NumberAnimation from "../../../forAll/NumberAnimation";
import OutboundPlaceCard from "./OutboundPlaceCard";

const InboundSection = ({ iconsDataList, outboundPlaces }) => {
  const [render, setRender] = useState(false);

  // const navigate = useNavigate();

  const handleNumAnimation = async () => {
    const numAnimationWrapper = document.getElementById(
      "num_animation_wrapper"
    );
    if (numAnimationWrapper) {
      if (
        numAnimationWrapper.getBoundingClientRect().top <=
          window.innerHeight - 20 &&
        numAnimationWrapper.getBoundingClientRect().top >=
          window.innerHeight -
            numAnimationWrapper.getBoundingClientRect().height
      ) {
        setRender(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNumAnimation);
  }, []);

  // const iconCardList =
  //   iconsDataList &&
  //   iconsDataList.map((item) => {
  //     const { id = "", imageLink = "", text = "", num = 0 } = item;

  //     return (
  //       <div className="icon-badge" key={id}>
  //         <img src={imageLink} alt="" className="icon" />
  //         <div className="text-side">
  //           <div className="num">
  //             {render ? (
  //               <span style={{ display: "flex" }}>
  //                 <NumberAnimation n={Number(num)} />+
  //               </span>
  //             ) : (
  //               <span>0+</span>
  //             )}
  //           </div>
  //           <div className="text">{text}</div>
  //         </div>
  //       </div>
  //     );
  //   });

  // const cardList = outboundPlaces.map((item) => (
  //   <Carousel.Item>
  //     <OutboundPlaceCard outboundPlaces={item} />
  //   </Carousel.Item>
  // ));

  const arrayOfArrays = [];
  for (let i = 0; i < outboundPlaces.length; i += 8) {
    arrayOfArrays.push(outboundPlaces.slice(i, i + 8));
  }
  const cardList =
    arrayOfArrays &&
    arrayOfArrays.map((itemObj) => (
      <Carousel.Item>
        <div className="cards-wrapper">
          {itemObj.map((item) => (
            <OutboundPlaceCard outboundPlaces={item} />
          ))}
        </div>
      </Carousel.Item>
    ));

  return (
    <div className="outbound-section">
      <div className="content">
        <div className="sec-head">
          <span className="highlight">Top Outbound</span> Places
        </div>
        <div className="sec-subtitle">
          Spots at the top of our outbound must go list
        </div>
        <div className="sub-line"></div>
        <OutboundBetterCarousel outboundPlaces={cardList && cardList} />
        {/* <div className="cards-wrapper">
          {outboundPlaces.slice(0, 8).map((item) => (
            <OutboundPlaceCard outboundPlaces={item} />
          ))}
        </div> */}
        {/* <div className="view-more-btn"> */}
        {/* <div className="more-icon"></div> */}
        {/* <MdKeyboardDoubleArrowDown className="more-icon" /> */}
        {/* <div className="more-text">View More</div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default InboundSection;

InboundSection.defaultProps = {
  outboundPlaces: [
    {
      id: 0,
      totalTours: "223 Tours",
      title: "Azerbaijan",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img1,
    },
    {
      id: 1,
      title: "Cambodia",
      totalTours: "50 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img2,
    },
    {
      id: 2,
      title: "Azerbaijan",
      totalTours: "13 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img3,
    },
    {
      id: 3,
      title: "China",
      totalTours: "501 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img4,
    },
    {
      id: 4,
      title: "China",
      totalTours: "123 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img5,
    },
    {
      id: 5,
      title: "China",
      totalTours: "20 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img6,
    },
    {
      id: 6,
      title: "China",
      totalTours: "33 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img7,
    },
    {
      id: 7,
      title: "China",
      totalTours: "150 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img8,
    },
    {
      id: 8,
      title: "China",
      totalTours: "301 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img9,
    },
    {
      id: 9,
      title: "China",
      totalTours: "10 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img10,
    },
    {
      id: 10,
      title: "China",
      totalTours: "263 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img11,
    },
    {
      id: 11,
      title: "China",
      totalTours: "85 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img12,
    },
    {
      id: 12,
      title: "China",
      totalTours: "351 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img13,
    },
    {
      id: 13,
      title: "China",
      totalTours: "32 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img14,
    },
    {
      id: 14,
      totalTours: "145 Tours",
      title: "China",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img15,
    },
    {
      id: 15,
      totalTours: "223 Tours",
      title: "Azerbaijan",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img1,
    },
    {
      id: 15,
      title: "Cambodia",
      totalTours: "50 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img2,
    },
    {
      id: 2,
      title: "Azerbaijan",
      totalTours: "13 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img3,
    },
    {
      id: 17,
      title: "China",
      totalTours: "501 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img4,
    },
    {
      id: 18,
      title: "China",
      totalTours: "123 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img5,
    },
    {
      id: 19,
      title: "China",
      totalTours: "20 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img6,
    },
    {
      id: 20,
      title: "China",
      totalTours: "33 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img7,
    },
    {
      id: 21,
      title: "China",
      totalTours: "150 Tours",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      image: img8,
    },
  ],
  // iconsDataList: [
  //   { id: 0, imageLink: icon1, text: "Years of experience", num: 25 },
  //   { id: 1, imageLink: icon2, text: "Happy patients", num: 10000 },
  //   { id: 2, imageLink: icon3, text: "Years of experience", num: 25 },
  //   { id: 3, imageLink: icon4, text: "Doctors", num: 50 },
  //   { id: 4, imageLink: icon5, text: "Years of experience", num: 20 },
  //   { id: 5, imageLink: icon6, text: "Doctors", num: 50 },
  //   { id: 6, imageLink: icon7, text: "Years of experience", num: 25 },
  //   { id: 7, imageLink: icon8, text: "Happy patients", num: 10000 },
  // ],
};
