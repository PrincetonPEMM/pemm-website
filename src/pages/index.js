import React from "react";
import {Footer} from '../components/common/HomePageFooter';
import {HomePageNav} from '../components/common/HomePageNav';

const STORY_IMAGE = "/featured_stories.jpeg";

const PAINTINGS_IMAGE = "/featured_paintings.jpg";


const MANUSCRIPTS_IMAGE = "/featured_manuscripts.jpg";



function Home() {
  return (
    <>
      <div className="bodyImages">
            <img src={STORY_IMAGE} alt="" />
            <img src={PAINTINGS_IMAGE} alt="" />
            <img src={MANUSCRIPTS_IMAGE} alt="" />
      </div>
      <section>
        <div>Stories</div>
        <div>Manuscripts</div>
        <div>Paintings</div>
      </section>
      <style jsx>{`
        .bodyImages {
            display: flex;
            width: 100%;
            margin: 0 auto;
            justify-content: center;
        }
        .bodyImages img {
            width: 33.2%;
            margin-bottom: -28vw;
            z-index: -1;
        }
        section {
            display: flex;
            height: 27vw;
            opacity: 0.8;
            padding-top: 1vh;
            width: 100%;
            background-image: linear-gradient(to top, #221f21, transparent);
        }
        section div {
            flex: 1;
            color: white;
            font-family: "Maghfirea", sans-serif;
            font-size: 35px;
        }
      `}</style>
    </>
  );
}

export default Home;