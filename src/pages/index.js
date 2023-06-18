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
    console.log("Scroll down to requested section");
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
                onClick={() =>
                  showTarget({ title: "STORY_SUMMARY", data: STORY_SUMMARY })
                }
              ></div>
            </div>
          </div>
          <div className={indexcss.bgImg2}>
            <div className={indexcss.Shadow}>
              <div
                className={indexcss.PAINTINGS_SUMMARY + " " + indexcss.STORY}
                onClick={() =>
                  showTarget({
                    title: "PAINTINGS_SUMMARY",
                    data: PAINTINGS_SUMMARY,
                  })
                }
              ></div>
            </div>
          </div>
          <div className={indexcss.bgImg3}>
            <div className={indexcss.Shadow}>
              <div
                className={indexcss.MANUSCRIPTS_SUMMARY + " " + indexcss.STORY}
                onClick={() =>
                  showTarget({
                    data: MANUSCRIPTS_SUMMARY,
                    title: "MANUSCRIPTS_SUMMARY",
                  })
                }
              >
                {" "}
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
      <HomePageSlider
        target={{
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
          Title: "Featured Manuscripts",
          TextContent: `Miracle of Mary manuscripts from Ethiopia are among the most spectacular of Ethiopia's parchment manuscripts. The staff of PEMM has selected three manuscirpts that best represent the genre. One is the very earliest known Miracle of Mary manuscript (from the 1300s), one is a Second Gondarine style manuscript (at Princeton), and one illustrates many stories never illustrated before (at the British Library).`,

          imgs: [
            "/ManuscriptsIMG/BGAYINT.jpg",
            "/ManuscriptsIMG/BOR520.jpg",
            "/ManuscriptsIMG/PEM 65.jpg",
          ],
        }}
      />
      <HomePageSlider
        target={{
          Title: "Featured Paintings",
          TextContent: `Miracle of Mary manuscripts from Ethiopia sometimes having paintings, also called illuminations or miniatures. The staff of PEMM has selected three paintings that best represent the genre. The first is from one of the earliest manuscripts (1400), the second is a [something], and the third is from one of the most recent manuscripts (19xx)`,

          imgs: [
            "/Paintings/oldest14thC.jpg",
            "/Paintings/Middel18Th.jpg",
            "/Paintings/Newest20Th.jpg",
          ],
        }}
      />
    </>
  );
}
export default Home;
