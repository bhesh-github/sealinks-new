// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// const responsive = {
//   // the naming can be any, depends on you.
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 1190 },
//     items: 5,
//     slidesToSlide: 1,
//   },
//   desktop: {
//     breakpoint: { max: 1190, min: 1024 },
//     items: 5,
//     slidesToSlide: 1,
//   },
//   big: {
//     breakpoint: { max: 1024, min: 1000 },
//     items: 5,
//     slidesToSlide: 1,
//   },
//   mid: {
//     breakpoint: { max: 1000, min: 600 },
//     items: 3,
//     slidesToSlide: 1,
//   },
//   tablet: {
//     breakpoint: { max: 600, min: 464 },
//     items: 2,
//     slidesToSlide: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 2,
//     slidesToSlide: 1,
//   },
// };

// const InBoundCarousel = ({ catsCards }) => {
//   return (
//     <div
//       className="multi-carousel"
//       style={{ width: "1344.5px", padding: "10px 45px" }}
//     >
//       <Carousel
//         responsive={responsive}
//         className="carousel"
//         infinite={true}
//         autoPlay={true}
//         autoPlaySpeed={1500}
//         arrows={true}
//       >
//         {catsCards}
//       </Carousel>
//     </div>
//   );
// };
// export default InBoundCarousel;
// -----------------------------------------------
import React from "react";
import Carousel from "better-react-carousel";
// import img1 from "../../../../images/home/sliderImages/img1.webp";
// import img2 from "../../../../images/home/sliderImages/img2.png";
// import img3 from "../../../../images/home/sliderImages/img3.jpg";

const InboundBetterCarousel = ({ catsCards }) => {
  return (
    <div className="hi-cats-carousel">
      <Carousel
        cols={5}
        rows={1}
        gap={27}
      >
        {catsCards && catsCards}
      </Carousel>
    </div>
  );
};
export default InboundBetterCarousel;
