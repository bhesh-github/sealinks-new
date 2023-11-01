import React, { useEffect, useState } from "react";
// import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Carousel from "better-react-carousel";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import icon1 from "../../../../images/home/whyChooseUs/icons/icon1.png";
import icon2 from "../../../../images/home/whyChooseUs/icons/icon2.png";
import icon3 from "../../../../images/home/whyChooseUs/icons/icon3.png";
import icon4 from "../../../../images/home/whyChooseUs/icons/icon4.png";
import icon5 from "../../../../images/home/whyChooseUs/icons/icon5.png";
import icon6 from "../../../../images/home/whyChooseUs/icons/icon6.png";
import icon7 from "../../../../images/home/whyChooseUs/icons/icon7.png";
import icon8 from "../../../../images/home/whyChooseUs/icons/icon8.png";
// import groupPhoto from "../../../../images/home/whyChooseUs/groupPhoto.jpg";
import NumberAnimation from "../../../forAll/NumberAnimation";
import TripCard from "../../../forAll/TripCard";
import InboundBetterCarousel from "./InboundBetterCarousel";

const InboundSection = ({ iconsDataList, trips }) => {
  const [render, setRender] = useState(false);

  const navigate = useNavigate();

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

  const iconCardList =
    iconsDataList &&
    iconsDataList.map((item) => {
      const { id = "", imageLink = "", text = "", num = 0 } = item;

      return (
        <div className="icon-badge" key={id}>
          <img src={imageLink} alt="" className="icon" />
          <div className="text-side">
            <div className="num">
              {render ? (
                <span style={{ display: "flex" }}>
                  <NumberAnimation n={Number(num)} />+
                </span>
              ) : (
                <span>0+</span>
              )}
            </div>
            <div className="text">{text}</div>
          </div>
        </div>
      );
    });

  const tripsCards = trips.map((item) => (
    <Carousel.Item>
      <TripCard trips={item} />
    </Carousel.Item>
  ));

  return (
    <div className="inbound-section">
      <div className="content">
        <div className="sec-head">
          <span className="highlight">Top Inbound</span> Tours
        </div>
        <div className="sec-subtitle">
          Spots at the top of our domestic must go list
        </div>
        <div className="sub-line"></div>
        {/* <div className="cards-wrapper">
          {trips.slice(0, 4).map((item) => (
            <TripCard trips={item} />
          ))}
        </div> */}

        <InboundBetterCarousel tripsCards={tripsCards && tripsCards} />
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
  trips: [
    {
      id: 0,
      category: "Adventure",
      title: "Langtang Trek",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/him-compressor.jpg",
      rating: {
        rate: 5,
        count: 120,
      },
      totalReviews: 150,
      price: 50000.0,
      feature: true,
    },
    {
      id: 1,
      category: "City Tour",
      title: "Kathmandu And Pokhara Tour",
      description:
        "Kathmandu is the capital of the Country whereas Pokhara is the most beautiful city of Nepal. kathmandu is rich in art and culture, heritage, temples, etc and Pokhara is rich in natural beauties, Himalayas river and many more. Kathmandu and Pokhara tour will be the best tour for you where you can see the varieties of mixed culture and religion.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/ktmandpokharatour-compressor-768x576.jpg",
      rating: {
        rate: 4.9,
        count: 30,
      },
      totalReviews: 560,
      price: 30000.0,
      feature: true,
    },
    {
      id: 2,
      category: "Temple Visit",
      title: "Muktinath Darshan Tour",
      description:
        "Muktinath is a very sacred place both for Hindus and Buddhist too. Both Hindus and Buddhist visit Muktinath and worship here. It is located in Muktinath valley and the climate is very cold as chilling but the expression after Muktinath Darshan tour will worth more and you will forget all the obstacles of traveling. It is a pilgrimage where yearly people visit and explore its beauty.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/muktinathtour-768x576.jpg",
      rating: {
        rate: 3.9,
        count: 50,
      },
      totalReviews: 160,
      price: 10000.0,
      feature: true,
    },

    {
      id: 3,
      category: "Mountain Trekking",
      title: "The Best of Everest Base Camp Trek / Kalapathar Trekking",
      description:
        "Everest Base camp is one of the most trekked destinations among the other trekking routes in the Everest region. One of the world’s most challenging treks and to be able to be a part of the community of many daredevils who have ventured is a thrill in itself. This trek challenges one to push human limits and thriving adrenaline rushes to give you the once in a lifetime feeling of being at the roof of the world. One of the world’s most challenging treks is this and to be able to be a part of the community of many daredevils who have ventured is a thrill in itself. This Kalapathar trek challenges one to push human limits and thriving adrenaline rushes to give you the once in a lifetime feeling of being at the roof of the world.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/kalapathar-compressor-768x576.jpg",
      rating: {
        rate: 3.5,
        count: 50,
      },
      totalReviews: 660,
      price: 5000000.0,
      feature: true,
    },
    {
      id: 4,
      category: "Trekking",
      title: "Jungle Highlights",
      description:
        "Get the Jungle Highlights package and experience the best jungle safari in Chitwan. Overview Kathmandu is the capital of the Federal Democratic Republic of Nepal. It is the largest metropolis in Nepal, with a population of 1.5 million in the city proper and 3 million in its urban agglomeration across the Kathmandu Valley, which includes the towns of Lalitpur, Kirtipur, Madhyapur Thimi, Bhaktapur making the total population to roughly 5 million people and the municipalities across Kathmandu Valley. Kathmandu is also the largest metropolis in the Himalayan hill region.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/Jungle-3-768x576.jpg",
      rating: {
        rate: 5,
        count: 80,
      },
      totalReviews: 1060,
      price: 50000.0,
      feature: true,
    },
    {
      id: 5,
      category: "Trekking",
      title: "The Best of Everest Base Camp Trek / Kalapathar Trekking",
      description:
        "Ghorepani Poonhill Trekking is one of the most rewarding trekking in Nepal. This trek is popular among trekkers who have limited time in Nepal. Ghorepani Poonhill Trekking, also popularly known as Annapurna Sunrise Trekking, or Annapurna Panorama Trekking is one of the most popular and relatively easy treks that meander through the beautiful ethnic villages of Annapurna Region. Ghorepani Poonhill Trek is one of the most rewarding trekking in Nepal. This trekking is perfect for the ones who don’t have enough time for a week. Annapurna Poon hill trek also is known as panorama trekking.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/ghorepani-compressor-768x576.jpg",
      rating: {
        rate: 5,
        count: 500,
      },
      totalReviews: 1060,
      price: 3000000.0,
      feature: true,
    },
    {
      id: 6,
      category: "City Tour",
      title: "Beauty With Purpose Highlights",
      description:
        "Experience the natural beauties of amazing cities Kathmandu and Pokhara. Overview Kathmandu is the capital of the Federal Democratic Republic of Nepal. It is the largest metropolis in Nepal, with a population of 1.5 million in the city proper and 3 million in its urban agglomeration across the beauty of the Kathmandu Valley, which includes the towns of Lalitpur, Kirtipur, Madhyapur Thimi, Bhaktapur making the total population to roughly 5 million people and the municipalities across Kathmandu Valley. Kathmandu is also the largest metropolis in the Himalayan hill region.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/beauty-2-768x576.jpg",
      rating: {
        rate: 4.5,
        count: 59,
      },
      totalReviews: 100,
      price: 60000.0,
      feature: true,
    },
    {
      id: 7,
      category: "Trekking",
      title: "Annapurna Base Camp Trek",
      description:
        "The idea of Annapurna Base camp trek is one of the best option for those who wants to explore the beauty of Annapurna range. That amazing walk among rich mountains will complete a beautiful journey with lifetime experience. Annapurna Base camp trek is the best idea to trek. You will notably witness colorful prayer flags swaying in the crisp mountain wind. In addition, the Himalayan tapestry compliments the natural beauty of the Annapurna landscape quite spectacularly.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/annapurna-1-768x576.jpg",
      rating: {
        rate: 4.5,
        count: 59,
      },
      totalReviews: 100,
      price: 1000000.0,
      feature: true,
    },

    {
      id: 8,
      category: "Adventure",
      title: "Langtang Trek",
      description:
        "Langtang valley is the most beautiful valley in Nepal. Most of the tourist are mesmerised by the beautiful scenic view of Langtang Mountain, Wildlife reserve. It is the place where you can see the snow capped mountains and beautiful glaciers. Langtang trek is a good option for short trek. Trekking, White water rafting, Climbing are some of the adventurous things which you can do while you are in Langtang tour.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/him-compressor.jpg",
      rating: {
        rate: 5,
        count: 120,
      },
      totalReviews: 150,
      price: 50000.0,
      feature: true,
    },
    {
      id: 9,
      category: "City Tour",
      title: "Kathmandu And Pokhara Tour",
      description:
        "Kathmandu is the capital of the Country whereas Pokhara is the most beautiful city of Nepal. kathmandu is rich in art and culture, heritage, temples, etc and Pokhara is rich in natural beauties, Himalayas river and many more. Kathmandu and Pokhara tour will be the best tour for you where you can see the varieties of mixed culture and religion.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/ktmandpokharatour-compressor-768x576.jpg",
      rating: {
        rate: 4.9,
        count: 30,
      },
      totalReviews: 560,
      price: 30000.0,
      feature: true,
    },
    {
      id: 10,
      category: "Temple Visit",
      title: "Muktinath Darshan Tour",
      description:
        "Muktinath is a very sacred place both for Hindus and Buddhist too. Both Hindus and Buddhist visit Muktinath and worship here. It is located in Muktinath valley and the climate is very cold as chilling but the expression after Muktinath Darshan tour will worth more and you will forget all the obstacles of traveling. It is a pilgrimage where yearly people visit and explore its beauty.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/muktinathtour-768x576.jpg",
      rating: {
        rate: 3.9,
        count: 50,
      },
      totalReviews: 160,
      price: 10000.0,
      feature: true,
    },

    {
      id: 11,
      category: "Mountain Trekking",
      title: "The Best of Everest Base Camp Trek / Kalapathar Trekking",
      description:
        "Everest Base camp is one of the most trekked destinations among the other trekking routes in the Everest region. One of the world’s most challenging treks and to be able to be a part of the community of many daredevils who have ventured is a thrill in itself. This trek challenges one to push human limits and thriving adrenaline rushes to give you the once in a lifetime feeling of being at the roof of the world. One of the world’s most challenging treks is this and to be able to be a part of the community of many daredevils who have ventured is a thrill in itself. This Kalapathar trek challenges one to push human limits and thriving adrenaline rushes to give you the once in a lifetime feeling of being at the roof of the world.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/kalapathar-compressor-768x576.jpg",
      rating: {
        rate: 3.5,
        count: 50,
      },
      totalReviews: 660,
      price: 5000000.0,
      feature: true,
    },
    {
      id: 12,
      category: "Trekking",
      title: "Jungle Highlights",
      description:
        "Get the Jungle Highlights package and experience the best jungle safari in Chitwan. Overview Kathmandu is the capital of the Federal Democratic Republic of Nepal. It is the largest metropolis in Nepal, with a population of 1.5 million in the city proper and 3 million in its urban agglomeration across the Kathmandu Valley, which includes the towns of Lalitpur, Kirtipur, Madhyapur Thimi, Bhaktapur making the total population to roughly 5 million people and the municipalities across Kathmandu Valley. Kathmandu is also the largest metropolis in the Himalayan hill region.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/Jungle-3-768x576.jpg",
      rating: {
        rate: 5,
        count: 80,
      },
      totalReviews: 1060,
      price: 50000.0,
      feature: true,
    },
    {
      id: 13,
      category: "Trekking",
      title: "The Best of Everest Base Camp Trek / Kalapathar Trekking",
      description:
        "Ghorepani Poonhill Trekking is one of the most rewarding trekking in Nepal. This trek is popular among trekkers who have limited time in Nepal. Ghorepani Poonhill Trekking, also popularly known as Annapurna Sunrise Trekking, or Annapurna Panorama Trekking is one of the most popular and relatively easy treks that meander through the beautiful ethnic villages of Annapurna Region. Ghorepani Poonhill Trek is one of the most rewarding trekking in Nepal. This trekking is perfect for the ones who don’t have enough time for a week. Annapurna Poon hill trek also is known as panorama trekking.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/ghorepani-compressor-768x576.jpg",
      rating: {
        rate: 5,
        count: 500,
      },
      totalReviews: 1060,
      price: 3000000.0,
      feature: true,
    },
    {
      id: 14,
      category: "City Tour",
      title: "Beauty With Purpose Highlights",
      description:
        "Experience the natural beauties of amazing cities Kathmandu and Pokhara. Overview Kathmandu is the capital of the Federal Democratic Republic of Nepal. It is the largest metropolis in Nepal, with a population of 1.5 million in the city proper and 3 million in its urban agglomeration across the beauty of the Kathmandu Valley, which includes the towns of Lalitpur, Kirtipur, Madhyapur Thimi, Bhaktapur making the total population to roughly 5 million people and the municipalities across Kathmandu Valley. Kathmandu is also the largest metropolis in the Himalayan hill region.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/beauty-2-768x576.jpg",
      rating: {
        rate: 4.5,
        count: 59,
      },
      totalReviews: 100,
      price: 60000.0,
      feature: true,
    },
    {
      id: 15,
      category: "Trekking",
      title: "Annapurna Base Camp Trek",
      description:
        "The idea of Annapurna Base camp trek is one of the best option for those who wants to explore the beauty of Annapurna range. That amazing walk among rich mountains will complete a beautiful journey with lifetime experience. Annapurna Base camp trek is the best idea to trek. You will notably witness colorful prayer flags swaying in the crisp mountain wind. In addition, the Himalayan tapestry compliments the natural beauty of the Annapurna landscape quite spectacularly.",
      days: "14N/15D",
      image:
        "https://sealinkstravel.com/wp-content/uploads/2020/02/annapurna-1-768x576.jpg",
      rating: {
        rate: 4.5,
        count: 59,
      },
      totalReviews: 100,
      price: 1000000.0,
      feature: true,
    },
  ],
  iconsDataList: [
    { id: 0, imageLink: icon1, text: "Years of experience", num: 25 },
    { id: 1, imageLink: icon2, text: "Happy patients", num: 10000 },
    { id: 2, imageLink: icon3, text: "Years of experience", num: 25 },
    { id: 3, imageLink: icon4, text: "Doctors", num: 50 },
    { id: 4, imageLink: icon5, text: "Years of experience", num: 20 },
    { id: 5, imageLink: icon6, text: "Doctors", num: 50 },
    { id: 6, imageLink: icon7, text: "Years of experience", num: 25 },
    { id: 7, imageLink: icon8, text: "Happy patients", num: 10000 },
  ],
};
