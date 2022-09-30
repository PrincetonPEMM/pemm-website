import Link from 'next/link'
import Social from '../elements/social'
import Typography from '@mui/material/Typography';
import { AppBar } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Image from 'next/image'
import logo from '../../../public/footer_logo.png'

const Footer = () => {
  return (
    <footer>
      <AppBar position="relative" color="secondary" sx={{ top: 'auto', bottom: 0 }}>
        <Box className="p-7 gap-x-56" sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: {xs: "column", md: "row", lg: "row"}
        }}>
          <Box className="pl-5 inline-flex flex-col text-center items-center">
            <Link href='/'>
                <div className="cursor-pointer">
                    <Image
                      alt="PEMM Logo"
                      src={logo}
                      width={250}
                      height={75}
                    />
                </div>
            </Link>
            <Typography className='max-w-sm text-left'>
              The Princeton Ethiopian, Eritrean, and Egyptian Miracles of Mary digital humanities project (PEMM) is a comprehensive resource for the 1,000+ miracle stories about the Virgin Mary in Ethiopia, Eritrea, and Egypt, and preserved in Gəˁəz between 1300 and the present.
            </Typography>
            <Typography className='max-w-sm text-left mt-2'>
              <p className='mt-2'>
                Princeton Department of Comparative Literature
                133 East Pyne, Princeton, NJ 08540
              </p>
              <p className='mt-2'>
                Princeton Department of African American Studies
                Morrison Hall, Princeton, NJ 08540
              </p>
              <p className='mt-2'>
                Princeton Center for the African World
                Morrison Hall, Princeton, NJ 08540
              </p>
              <p><a href = "mailto: pemm@princeton.edu"><Button>pemm@princeton.edu</Button></a></p>
              <p>© The Trustees of Princeton University</p>
            </Typography>
          </Box>
          <div className="inline-flex flex-col text-center">
            <Typography className="text-2xl" color="primary"
            sx={{
              paddingTop: {xs: "1.25rem", md: "0", lg: "0"},
              paddingBottom: {xs: "0", md:"1.25rem", lg: "1.25rem"}
            }}>
              About
            </Typography>
            <Link href='/about/mission'>
              <Button>
                Our Mission
              </Button>
            </Link>
            <Link href='/about/mission'>
              <Button>
                Our History
              </Button>
            </Link>
            <Link href='/about/people'>
              <Button>
                Our Team
              </Button>
            </Link>
            <Link href='/about/people'>
              <Button>
                Our Partners
              </Button>
            </Link>
            <Link href='/about/people'>
              <Button>
                Our Funders
              </Button>
            </Link>
            <Link href='/about/connect'>
              <Button>
                Our News
              </Button>
            </Link>
            <Link href='/about/connect'>
              <Button>
                Our Events
              </Button>
            </Link>
            <Link href='/about/connect'>
              <Button>
                Volunteers
              </Button>
            </Link>
            <Link href='/about/connect'>
              <Button>
                Give Feedback
              </Button>
            </Link>
            
          </div>
          <div className="inline-flex flex-col text-center">
            <Typography className="text-2xl" color="primary" 
            sx={{
              paddingTop: {xs: "1.25rem", md: "0", lg: "0"},
              paddingBottom: {xs: "0", md:"1.25rem", lg: "1.25rem"}
            }}>
              Explore
            </Typography>
            <Link href='/stories'>
              <Button>
                Find Stories
              </Button>
            </Link>
            <Link href='/paintings'>
              <Button>
                Find Paintings
              </Button>
            </Link>
            <Link href='/manuscripts'>
              <Button>
                Find Manuscripts
              </Button>
            </Link>
            <Link href='/stories'>
              <Button>
                Featured Stories
              </Button>
            </Link>
            <Link href='/paintings'>
              <Button>
                Featured Paintings
              </Button>
            </Link>
            <Link href='/manuscripts'>
              <Button>
                Featured Manuscripts
              </Button>
            </Link>
          </div>
          <div className="inline-flex flex-col text-center">
            <Typography className="text-2xl" color="primary" 
            sx={{
              paddingTop: {xs: "1.25rem", md: "0", lg: "0"},
              paddingBottom: {xs: "0", md:"1.25rem", lg: "1.25rem"}
            }}>
              Research Tools
            </Typography>
            <div>
              <p className="text-white w-60 inline-flex flex-col gap-y-3">
              <Link href='/'>
                  <Button>
                    Incipit Tool
                  </Button>
                </Link>
                <Link href='/research/arabic-manuscripts'>
                  <Button>
                    Arabic Manuscripts
                  </Button>
                </Link>
                <Link href='/research/arabic-stories'>
                  <Button>
                    Arabic Stories
                  </Button>
                </Link>
                <Link href='/maps'>
                  <Button>
                    Maps
                  </Button>
                </Link>
                <Link href='/research/spellings'>
                  <Button>
                    Interchangeable Spellings of Ethiopic Terms
                  </Button>
                </Link>
                <Link href='/research/research-posts'>
                  <Button>
                  Research Posts
                  </Button>
                </Link>
                <Link href='/research/macomber'>
                  <Button>
                  Macomber Handlist 
                  </Button>
                </Link>
                <Link href='/research/repositories'>
                  <Button>
                  List of Repositories
                  </Button>
                </Link>

                <Link href='/research/bibliography'>
                  <Button>
                  Bibliography
                  </Button>
                </Link>

                <Link href='/research/using-site'>
                  <Button>
                  Using the Site
                  </Button>
                </Link>
                <Link href='https://github.com/PrincetonPEMM/pemm-website'>
                  <Button>
                  PEMM Github Repository
                  </Button>
                </Link>
                <Link href='/about/terms-of-use'>
                  <Button>
                  Terms of Use
                  </Button>
                </Link>
                <Link href='https://accessibility.princeton.edu/help'>
                  <Button>
                  Accessibility
                  </Button>
                </Link>
              </p>
              <div className="pt-3">
                <Social/>
              </div>
            </div>
          </div>
        </Box>
      </AppBar>
    </footer>
  )
}

export default Footer
