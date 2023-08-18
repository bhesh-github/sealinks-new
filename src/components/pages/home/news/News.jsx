import React from "react";
import img1 from "../../../../images/home/news/img1.png";
import img2 from "../../../../images/home/news/img2.png";
import img3 from "../../../../images/home/news/img3.png";
import img4 from "../../../../images/home/news/img4.png";
import NewsSlider from "./NewsSlider";

const News = ({ newsDataList }) => {
  return (
    <div className="news-comp">
      <div className="content">
        <div className="text-wrapper">
          <div className="quote">Better information, Better health</div>
          <div className="heading">News</div>
        </div>
        <div className="news-slider-comp">
          <NewsSlider newsDataList={newsDataList} />
        </div>
      </div>
    </div>
  );
};

export default News;

News.defaultProps = {
  newsDataList: [
    {
      id: 0,
      images: [img1, img2, img3, img4],
    },
    {
      id: 1,
      images: [img3, img4, img1, img2],
      imgLink: img2,
    },
    {
      id: 2,
      images: [img2, img4, img1, img3],
      imgLink: img2,
    },
  ],
};
