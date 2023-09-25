import React from "react";
import { ReactComponent as EyeIcon } from "../../../../images/home/news/eyeIcon.svg";

const NewsCard = ({ newsData }) => {
  const { id = "", images = "" } = newsData;
  return (
    <>
      <div className="carousel-card" key={id}>
        <div className="news-card">
          <img src={images[0]} alt="" className="card-img" />
          <div className="text-wrapper">
            <div className="dates">Monday 05, September 2021 | By Author</div>
            <div className="news-text">
              This Article’s Title goes Here, but not too long.
            </div>
            <div className="views-wrapper">
              <EyeIcon className="eye-icon" />
              <span className="num">68</span>
            </div>
          </div>
        </div>
        <div className="news-card">
          <img src={images[1]} alt="" className="card-img" />
          <div className="text-wrapper">
            <div className="dates">Monday 05, September 2021 | By Author</div>
            <div className="news-text">
              This Article’s Title goes Here, but not too long.
            </div>
            <div className="views-wrapper">
              <EyeIcon className="eye-icon" />
              <span className="num">68</span>
            </div>
          </div>
        </div>
        <div className="news-card news-to-hide">
          <img src={images[2]} alt="" className="card-img" />
          <div className="text-wrapper">
            <div className="dates">Monday 05, September 2021 | By Author</div>
            <div className="news-text">
              This Article’s Title goes Here, but not too long.
            </div>
            <div className="views-wrapper">
              <EyeIcon className="eye-icon" />
              <span className="num">68</span>
            </div>
          </div>
        </div>
        <div className="news-card news-to-hide">
          <img src={images[3]} alt="" className="card-img" />
          <div className="text-wrapper">
            <div className="dates">Monday 05, September 2021 | By Author</div>
            <div className="news-text">
              This Article’s Title goes Here, but not too long.
            </div>
            <div className="views-wrapper">
              <EyeIcon className="eye-icon" />
              <span className="num">68</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
