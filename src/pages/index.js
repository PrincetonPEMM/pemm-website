import React from "react";
import { Box } from "@mui/system";
import MobileHomePage from "../components/common/MobileHomePage";

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
  return (
    <>
      {/* Desktop Home Page */}
      <Box
        sx={{
          display: { xs: "none", md: "block", lg: "block" },
        }}
      >
        <div className="bodyImages">
          <img src={STORY_IMAGE} alt="" />
          <img src={MANUSCRIPTS_IMAGE} alt="" />
          <img src={PAINTINGS_IMAGE} alt="" />
        </div>
        <section>
          <div>
            <div className="Featured">Featured</div>
            <div className="title">Stories </div>
            <div className="detailes">{STORY_SUMMARY}</div>
          </div>
          <div>
            <div className="Featured">Featured</div>
            <div className="title">Manuscripts </div>
            <div className="detailes">{PAINTINGS_SUMMARY}</div>
          </div>
          <div>
            <div className="Featured">Featured</div>
            <div className="title">Paintings </div>
            <div className="detailes">{MANUSCRIPTS_SUMMARY}</div>
          </div>
        </section>
        <style jsx>{`
          .bodyImages {
            display: flex;
            width: 100%;
            margin: 0 auto;
            justify-content: center;
          }
          .bodyImages img {
            width: 33%;
            margin-bottom: -60vw;
            z-index: -1;
          }
          section {
            z-index: 3;
            display: flex;
            justify-content: center;

            height: 58vw;
            opacity: 0.8;
            padding-top: 2vw;
            width: 100%;
            background-image: linear-gradient(
              to top,
              #221f21,
              transparent,
              #221f21
            );
          }
          section div {
            flex: 1;
            padding-left: 20px;
            color: white;
            font-family: "Maghfirea", sans-serif;
          }
          .Featured {
            padding-top: 25vw;
            font-size: 40px;
          }
          section .title {
            font-size: 80px;
          }
          .detailes {
            text-align: left;
            font-size: 25px;
          }
        `}</style>
      </Box>

      {/* Mobile Home Page */}
      <Box
        sx={{
          display: { xs: "block", md: "none", lg: "none" },
        }}
      >
        <MobileHomePage />
      </Box>
    </>
  );
}

export default Home;
