import React from "react";
import HomePageSliderCss from "./HomePageSlider.module.css";
function HomePageSlider(props) {
  console.log(props);
  return (
    <div className={HomePageSliderCss.HomePageSlider}>
      <div className={HomePageSliderCss.textWrapper}>
        <div className={HomePageSliderCss.title}>{props.target.Title}</div>
        <div className={HomePageSliderCss.TextContent}>
          {props.target.TextContent}
        </div>
      </div>

      <div className={HomePageSliderCss.threeImgWrapper}>
        <img src={props.target.imgs[0]} alt="" />
        <img src={props.target.imgs[1]} alt="" />
        <img src={props.target.imgs[2]} alt="" />
      </div>
    </div>
  );
}

export default HomePageSlider;
