import React from "react";
import Link from "next/link";
import navCSS from "./Navbar.module.css";
function HomePageNav() {
  return (
    <nav className={navCSS.nav}>
      <ul id={navCSS.navToHome}>
        <li>
          <Link id={navCSS.homeLogo} href="/">
            <span className={navCSS.LeftSideIMG}>
              <img alt="PEMM Logo" src="./NavIMG/arat_netib.png" />
              <img
                alt="PEMM Logo"
                className={navCSS.homeLogoIMG}
                src={"./NavIMG/navbar_logo.png"}
              />
            </span>
          </Link>
        </li>
      </ul>

      <ul className={navCSS.rightUL}>
        <div className={navCSS.navLinks}>
          <li>
            <Link id={navCSS.navToStories} href="/stories">
              Stories
            </Link>
          </li>
        </div>
        <div className={navCSS.navLinks}>
          <li>
            <Link id={navCSS.navToPaintings} href="/paintings">
              Paintings
            </Link>
          </li>
        </div>
        <div className={navCSS.navLinks}>
          <li>
            <Link id={navCSS.navToManuscript} href="/manuscripts">
              Manuscripts
            </Link>
          </li>
        </div>
        <div className={navCSS.navLinks}>
          <li>
            <Link id={navCSS.navToResearch} href="/research">
              Research Tools
            </Link>
          </li>
        </div>
        <div className={navCSS.navLinks}>
          <li>
            <Link id={navCSS.navToAbout} href="/about">
              About
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
export default HomePageNav;
