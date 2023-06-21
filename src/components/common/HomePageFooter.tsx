import Link from "next/link";
import Social from "../elements/social";
import Typography from "@mui/material/Typography";
import { AppBar } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Footermodulecss from "./Footer.module.css";

const HomePageFooter = () => {
  return (
    <footer>
      <AppBar
        position="relative"
        color="primary"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Box
          className="p-7"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: { xs: "column", md: "row", lg: "row" },
          }}
        >
          <Box className="inline-flex flex-col flex-grow text-center items-center">
            <Link href="/">
              <div className={Footermodulecss.footerImgs}>
                <img
                  alt="PEMM Logo"
                  src={"/NavIMG/arat_netib.png"}
                  width={400}
                />
                <img
                  alt="PEMM Logo"
                  src={"/NavIMG/navbar_logo.png"}
                  width={400}
                />
                <br />
              </div>
            </Link>
            <Typography className="max-w-sm text-left">
              The Princeton Ethiopian, Eritrean, and Egyptian Miracles of Mary
              digital humanities project (PEMM) is a comprehensive resource for
              the 1,000+ miracle stories about the Virgin Mary in Ethiopia,
              Eritrea, and Egypt, and preserved in Gəˁəz between 1300 and the
              present.
            </Typography>
            <Typography className="max-w-sm text-left mt-2">
              <p className="mt-2">
                Princeton Department of Comparative Literature 133 East Pyne,
                Princeton, NJ 08540
              </p>
              <p className="mt-2">
                Princeton Department of African American Studies Morrison Hall,
                Princeton, NJ 08540
              </p>
              <p className="mt-2">
                Princeton Center for the African World Morrison Hall, Princeton,
                NJ 08540
              </p>
              <p>
                <a href="mailto: pemm@princeton.edu">
                  <Button color="secondary">pemm@princeton.edu</Button>
                </a>
              </p>
              <p>© The Trustees of Princeton University</p>
            </Typography>
          </Box>
          <div className="inline-flex flex-col flex-grow text-center">
            <Typography
              className="text-2xl"
              color="secondary"
              sx={{
                paddingTop: { xs: "1.25rem", md: "0", lg: "0" },
                paddingBottom: { xs: "0", md: "1.25rem", lg: "1.25rem" },
              }}
            >
              About
            </Typography>
            <Link href="/about/mission">
              <Button color="secondary">Our Mission</Button>
            </Link>
            <Link href="/about/mission">
              <Button color="secondary">Our History</Button>
            </Link>
            <Link href="/about/people">
              <Button color="secondary">Our Team</Button>
            </Link>
            <Link href="/about/people">
              <Button color="secondary">Our Partners</Button>
            </Link>
            <Link href="/about/people">
              <Button color="secondary">Our Funders</Button>
            </Link>
            <Link href="/about/connect">
              <Button color="secondary">Our News</Button>
            </Link>
            <Link href="/about/connect">
              <Button color="secondary">Our Events</Button>
            </Link>
            <Link href="/about/connect">
              <Button color="secondary">Volunteers</Button>
            </Link>
            <Link href="/about/connect">
              <Button color="secondary">Give Feedback</Button>
            </Link>
          </div>
          <div className="inline-flex flex-col flex-grow text-center">
            <Typography
              className="text-2xl"
              color="secondary"
              sx={{
                paddingTop: { xs: "1.25rem", md: "0", lg: "0" },
                paddingBottom: { xs: "0", md: "1.25rem", lg: "1.25rem" },
              }}
            >
              Explore
            </Typography>
            <Link href="/stories">
              <Button color="secondary">Find Stories</Button>
            </Link>
            <Link href="/paintings">
              <Button color="secondary">Find Paintings</Button>
            </Link>
            <Link href="/manuscripts">
              <Button color="secondary">Find Manuscripts</Button>
            </Link>
            <Link href="/stories">
              <Button color="secondary">Featured Stories</Button>
            </Link>
            <Link href="/paintings">
              <Button color="secondary">Featured Paintings</Button>
            </Link>
            <Link href="/manuscripts">
              <Button color="secondary">Featured Manuscripts</Button>
            </Link>
          </div>
          <div className="inline-flex flex-col flex-grow text-center">
            <Typography
              className="text-2xl"
              color="secondary"
              sx={{
                paddingTop: { xs: "1.25rem", md: "0", lg: "0" },
                paddingBottom: { xs: "0", md: "1.25rem", lg: "1.25rem" },
              }}
            >
              Research Tools
            </Typography>
            <div>
              <p className="text-white w-60 inline-flex flex-col">
                <Link href="/">
                  <Button className="p-0" color="secondary">
                    Incipit Tool
                  </Button>
                </Link>
                <Link href="/research/arabic-manuscripts">
                  <Button className="p-0" color="secondary">
                    Arabic Manuscripts
                  </Button>
                </Link>
                <Link href="/research/arabic-stories">
                  <Button className="p-0" color="secondary">
                    Arabic Stories
                  </Button>
                </Link>
                <Link href="/maps">
                  <Button className="p-0" color="secondary">
                    Maps
                  </Button>
                </Link>
                <Link href="/research/spellings">
                  <Button className="p-0" color="secondary">
                    Interchangeable Spellings of Ethiopic Terms
                  </Button>
                </Link>
                <Link href="/research/research-posts">
                  <Button className="p-0" color="secondary">
                    Research Posts
                  </Button>
                </Link>
                <Link href="/research/macomber">
                  <Button className="p-0" color="secondary">
                    Macomber Handlist
                  </Button>
                </Link>
                <Link href="/research/repositories">
                  <Button className="p-0" color="secondary">
                    List of Repositories
                  </Button>
                </Link>

                <Link href="/research/bibliography">
                  <Button className="p-0">Bibliography</Button>
                </Link>

                <Link href="/research/using-site">
                  <Button className="p-0">Using the Site</Button>
                </Link>
                <Link href="https://github.com/PrincetonPEMM/pemm-website">
                  <Button className="p-0" color="secondary">
                    PEMM Github Repository
                  </Button>
                </Link>
                <Link href="/about/terms-of-use">
                  <Button className="p-0" color="secondary">
                    Terms of Use
                  </Button>
                </Link>
                <Link href="https://accessibility.princeton.edu/help">
                  <Button className="p-0" color="secondary">
                    Accessibility
                  </Button>
                </Link>
              </p>
              <div className="pt-3">
                <Social />
              </div>
            </div>
          </div>
        </Box>
      </AppBar>
    </footer>
  );
};

export default HomePageFooter;
