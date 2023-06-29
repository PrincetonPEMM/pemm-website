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
  let showTarget = (className) => {
    const element = document.getElementsByClassName(className)[0];
    console.log(element);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
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
                onClick={() => showTarget("storyClass")}
              ></div>
            </div>
          </div>
          <div className={indexcss.bgImg2}>
            <div className={indexcss.Shadow}>
              <div
                className={indexcss.PAINTINGS_SUMMARY + " " + indexcss.STORY}
                onClick={() => showTarget("ManuscriptsClass")}
              ></div>
            </div>
          </div>
          <div className={indexcss.bgImg3}>
            <div className={indexcss.Shadow}>
              <div
                className={indexcss.MANUSCRIPTS_SUMMARY + " " + indexcss.STORY}
                onClick={() => showTarget("PaintingsClass")}
              ></div>
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
      <HomePageSlider
        target={{
          className: "storyClass",
          Title: "Featured Stories",
          TextContent: `Stories about the Virgin Mary in Ethiopia, Eritrea, and Egypt are vivid, profound, and sometimes historically valuable. The staff of PEMM has selected three stories that best represent the genre (from among the 506 translations of 753 stories in the PEMM database). One is about a girl's education (from Egypt), one is about kindness to animals (from Ethiopia), and one is about a speaking icon (from Ethiopia)`,

          imgs: [
            "/FeathuredStories/healedDoughter.jpg",
            "/FeathuredStories/EthKing.png",
            "/FeathuredStories/thiristyDog.png",
          ],
        }}
      />
      <HomePageSlider
        target={{
          className: "ManuscriptsClass",
          Title: "Featured Manuscripts",
          TextContent: `Miracle of Mary manuscripts from Ethiopia are among the most spectacular of Ethiopia's parchment manuscripts. The staff of PEMM has selected three manuscirpts that best represent the genre. One is the very earliest known Miracle of Mary manuscript (from the 1300s), one is a Second Gondarine style manuscript (at Princeton), and one illustrates many stories never illustrated before (at the British Library).`,

          imgs: [
            "/ManuscriptsIMG/Manu1.jpg",
            "/ManuscriptsIMG/Manu2.jpg",
            "/ManuscriptsIMG/Manu3.jpg",
          ],
        }}
      />
      <HomePageSlider
        target={{
          className: "PaintingsClass",
          Title: "Featured Paintings",
          TextContent: `Miracle of Mary manuscripts from Ethiopia sometimes having paintings, also called illuminations or miniatures. The staff of PEMM has selected three paintings that best represent the genre. The first is from one of the earliest manuscripts (1400), the second is a [something], and the third is from one of the most recent manuscripts (19xx)`,

          imgs: [
            "/Paintings/featured1.jpg",
            "/Paintings/featured2.jpg",
            "/Paintings/featured3.jpg",
          ],
        }}
      />
    </>
  );
}
export default Home;
