import React from "react";
import navbar_logo from '../../../public/navbar_logo.png'
import Link from 'next/link'
import Image from 'next/image'

function HomePageNav() {
  return (
    <nav>
      <ul id="navToHome">
        <li>
          <Link id="homeLogo" href="/">
            <Image
                alt="PEMM Logo"
                id="homeImg"
                className="logoImg"
                height={97.5}
                width={650}
                src={navbar_logo}
            />
          </Link>
        </li>
      </ul>
      <ul className="rightUL">
        <div className="navLinks">
          <li>
              <Link id="navToStories" href="/stories">
                  Stories
              </Link>
          </li>
        </div>
        <div className="navLinks">
          <li>
              <Link id="navToPaintings" href="/paintings">
                Paintings
              </Link>
          </li>
        </div>
        <div className="navLinks">
          <li>
            <Link id="navToManuscript" href="/manuscript">
              Manuscript
            </Link>
          </li>
        </div>
        <div className="navLinks">
          <li>
            <Link id="navToResearch" href="/research">
              Research Tools
            </Link>
          </li>
        </div>
        <div className="navLinks">
          <li>
            <Link id="navToAbout" href="/about">
              About
            </Link>
          </li>
        </div>
      </ul>
      <style jsx>{`
        * {
            padding: 0;
            margin: 0;
        }
        nav {
            display: flex;
            justify-content: space-between;
            position: absolute;
            background-image: linear-gradient(#221f21, transparent);
            color: #e7e3dc;
            width: 100%;
            padding-bottom: 90px;
            z-index: 4;
        }
        .navLinks {
            opacity: 1;
        }
        
        nav ul {
            display: flex;
            list-style: none;
            margin-top: 4vw;
        }
        li {
            margin: 1vw;
        }
        .navLinks {
            text-decoration: none;
            color: white;
            font-family: "Noto Serif", serif;
            font-family: "Nunito", sans-serif;
            font-family: "Source Serif Pro", serif;
            font-size: 25px;
        }
        .noneHomeNav {
            color: black;
            background-color: #e7e3dc;
        }
        .logoImg {
            height: 40px;
            z-index: -1;
        }
        
        .rightUL {
            position: relative;
            bottom: -33px;
        }
        .logoImgHome {
            filter: invert(100%) sepia(1%) saturate(2242%) hue-rotate(266deg)
            brightness(100%) contrast(126%);
        }
      `}</style>
    </nav>
  );
}
export default HomePageNav;