import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import MobileHomePage from "../components/common/MobileHomePage";
import $ from "jquery";
import indexcss from "./index.module.css";
import HomePageSlider from "../components/common/HomePageSlider";

const STORY_IMAGE = "/featured_stories.jpeg";
const STORY_SUMMARY =
  "Stories about the Virgin Mary in Ethiopia, Eritrea, and Egypt are vivid, profound, and sometimes historically valuable. The staff of PEMM has selected three stories that best represent the genre";

const PAINTINGS_IMAGE = "/featured_paintings.jpg";
const PAINTINGS_SUMMARY =
  "Miracle of Mary manuscripts from Ethiopia sometimes having paintings, also called illuminations or miniatures. The staff of PEMM has selected three paintings that best represent the genre (from among the 1,201 paintings in the PEMM database).";

const MANUSCRIPTS_IMAGE = "/featured_manuscripts.jpg";
const MANUSCRIPTS_SUMMARY =
  "Miracle of Mary manuscripts from Ethiopia are among the most spectacular of Ethiopia's parchment manuscripts. The staff of PEMM has selected three manuscirpts that best represent the genre (from among its 491 manuscripts)";

function Home() {
  const [Slides, setSlides] = useState("");
  let showTarget = (clickedDiv) => {
    $(".HomePageSlider").show();
    setSlides(<HomePageSlider target={clickedDiv} />);
  };
  useEffect(() => {
    let targetClass = document.getElementsByClassName("HomePageSlider")[0];
    if (targetClass != null) targetClass.scrollIntoView();
  }, [Slides]);
  return (
    <>
      {/* Desktop Home Page */}
      <Box
        sx={{
          display: { xs: "none", md: "block", lg: "block" },
        }}
      >
        <div className={indexcss.bodyImages}>
          <div className={indexcss.bgImg1}>
            <div className={indexcss.Shadow}>
              <div
                className={indexcss.STORY_SUMMARY + " " + indexcss.STORY}
                onClick={() => showTarget("STORY_SUMMARY")}
              >
                <div className={indexcss.Featured}>Featured</div>
                <div className={indexcss.title}>Stories </div>
                <div className={indexcss.detailes}>{STORY_SUMMARY}</div>
              </div>
            </div>
          </div>
          <div className={indexcss.bgImg2}>
            <div className={indexcss.Shadow}>
              <div
                className={indexcss.PAINTINGS_SUMMARY + " " + indexcss.STORY}
                onClick={() => showTarget("PAINTINGS_SUMMARY")}
              >
                <div className={indexcss.Featured}>Featured</div>
                <div className={indexcss.title}>Manuscripts </div>
                <div className={indexcss.detailes}>{PAINTINGS_SUMMARY}</div>
              </div>
            </div>
          </div>
          <div className={indexcss.bgImg3}>
            <div className={indexcss.Shadow}>
              <div
                className={indexcss.MANUSCRIPTS_SUMMARY + " " + indexcss.STORY}
                onClick={() => showTarget("MANUSCRIPTS_SUMMARY")}
              >
                <div className={indexcss.Featured}>Featured</div>
                <div className={indexcss.title}>Paintings </div>
                <div className={indexcss.detailes}>{MANUSCRIPTS_SUMMARY}</div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "none", lg: "none" },
        }}
      >
        <MobileHomePage />
      </Box>
      {Slides}
    </>
  );
}
export default Home;
