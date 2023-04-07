import React from "react";
function HomePageSlider(props) {
  console.log(props);
  // STORY_SUMMARY, PAINTINGS_SUMMARY, MANUSCRIPTS_SUMMARY;
  if (props.target == "STORY_SUMMARY")
    return <div className="HomePageSlider">STORY_SUMMARY STORY_SUMMARY</div>;
  if (props.target == "PAINTINGS_SUMMARY")
    return (
      <div className="HomePageSlider">PAINTINGS_SUMMARY PAINTINGS_SUMMARY</div>
    );
  if (props.target == "MANUSCRIPTS_SUMMARY")
    return (
      <div className="HomePageSlider">
        MANUSCRIPTS_SUMMARY MANUSCRIPTS_SUMMARY
      </div>
    );
}

export default HomePageSlider;
