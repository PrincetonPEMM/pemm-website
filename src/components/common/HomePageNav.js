import React, { useEffect } from "react";
import $ from "jquery";
import navbar_logo from '../../../public/navbar_logo.png'
import Link from 'next/link'
import Image from 'next/image'


function HomePageNav() {
  let setActiveNavBar = (e) => {
    let navId = e.target.id;
    console.log(navId);
    if (navId.startsWith("home")) {
      $("Footer").addClass("homeClass");
      $("nav").removeClass("noneHomeNav");
      $(".navLinks").removeClass("noneHomeNav");
      $("#homeImg").addClass("logoImgHome");
      $(".footerLogo").addClass("logoImgHome");
    } else {
      $(".footerLogo").addClass("logoImgHome");
      $("#homeImg").removeClass("logoImgHome");
      $(".navLinks").addClass("noneHomeNav");
      $("footer").removeClass("homeClass");
      $("nav").addClass("noneHomeNav");
    }
  };
  // next js,tailwind,
  useEffect(() => {
    $(".navLinks").on("click", setActiveNavBar);
  }, []);
  return (
    <nav>
      <ul id="navToHome">
        <li>
          <Link className="navLinks" id="homeLogo" href="/">
            <Image
                alt="PEMM Logo"
                id="homeImg"
                className="logoImg"
                height={75}
                width={500}
                src={navbar_logo}
            />
          </Link>
        </li>
      </ul>
      <ul className="rightUL">
        <li>
          <Link className="navLinks" id="navToStories" href="/stories">
            Stories
          </Link>
        </li>
        <li>
          <Link className="navLinks" id="navToPaintings" href="/paintings">
            Paintings
          </Link>
        </li>
        <li>
          <Link className="navLinks" id="navToManuscript" href="/manuscript">
            Manuscript
          </Link>
        </li>
        <li>
          <Link className="navLinks" id="navToResearch" href="/research">
            Research Tools
          </Link>
        </li>
        <li>
          <Link className="navLinks" id="navToAbout" href="/about">
            About
          </Link>
        </li>
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
            /* background-color: #221f21; */
            background-image: linear-gradient(#221f21, transparent);
            color: #e7e3dc;
            width: 100%;
            /* opacity: 0.6; */
            padding-bottom: 90px;
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
        }
        .noneHomeNav {
            color: black;
            background-color: #e7e3dc;
        }
        .logoImg {
            height: 40px;
            z-index: -1;
        }
        
        .PEMMCountry {
            font-size: 12px;
            width: 165px;
            margin-left: -5px;
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