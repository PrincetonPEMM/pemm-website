import React from "react";
import footer_logo from '../../../public/footer_logo.png'
import Image from 'next/image'


function Footer() {
  return (
    <footer className="homeClass">
      <ul className="first-footer-child">
        <li className="firstList">
          <Image
                alt="PEMM Logo"
                id="footerLogo"
                className="footer_logo"
                width={250}
                height={75}
                src={footer_logo}
            />
        </li>
        <li>
          PEMM is a comprehensive resource for the 1000+ miracle stories written
          about the virgin marry in Ethiopia, Eritrea, and Egypt, and preserved
          in Geez between 1300 and the present
        </li>
      </ul>
      <ul>
        <li>
          <h3>About</h3>
        </li>
        <li>Our Mission</li>
        <li>Our Team</li>
        <li>Our History</li>
        <li>Our News</li>

        <li className="special">Event $ workshops</li>

        <li>
          volenter
          {/* <Link to="/">volenter</Link> */}
        </li>

        <li>Give FeedBack</li>
      </ul>
      <ul>
        <li>
          <h3>Explore</h3>
        </li>
        <li>Find Stories</li>
        <li>Find Painting</li>
        <li>Find Manucripts</li>
        <li className="special">Find Stories</li>
        <li>Featured Stories</li>
        <li>Featured Paintings</li>
        <li>Featured Manucripts</li>
      </ul>
      <ul>
        <li>
          <h3>Research Tools</h3>
        </li>
        <li>Incipit Tool</li>
        <li>List of Repositories</li>
        <li>Arabic Manuscript</li>
        <li>Biblography</li>
        <li>Using The Site</li>
        <li className="special">Biblography</li>
        <li>PEMM Github Repository</li>
        <li>Term of Use & copy write</li>
        <li>Accessibility</li>
      </ul>
        <style jsx>{`
            footer {
                display: flex;
                justify-content: space-between;
            
                padding: 30px;
            }
            .homeClass {
                background-color: #3c6f57;
                color: white;
            }
            .notHomeClass {
                padding-top: 18vw;
                font-size: 40px;
                width: fit-content;
                margin: auto;
            }
            footer ul {
                list-style: none;
            }
            .special {
                padding: 20px 0;
            }
            .first-footer-child {
                /* background: red; */
                max-width: 360px;
            
                padding-right: 20px;
                /* display: flex; */
            }
            .firstList {
                display: flex;
            }
            .PEMMFooter {
                margin-left: -82px;
                font-size: 32px;
                margin-top: -3px;
            }
            .footer_logo {
                height: 30px;
            }
            first-footer-child {
            }
        `}</style>
    </footer>
  );
}

export default Footer;