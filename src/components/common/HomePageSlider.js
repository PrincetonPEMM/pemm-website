import React from "react";
function HomePageSlider(props) {
  console.log(props);
  return (
    <div className="HomePageSlider">
      <div className={"Featured"}>Featured</div>
      <div className={"title"}>Stories </div>
      <div className={"detailes"}>{props.target.data}</div>
    </div>
  );
}

export default HomePageSlider;
