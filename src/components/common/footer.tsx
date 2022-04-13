import Link from 'next/link'
import Social from '../elements/social'
import Typography from '@mui/material/Typography';
import { AppBar } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
                <div className="cursor-pointer w-40">
                    <img src="logo.jpg" alt="PEMM Logo"/>
                </div>
            </Link>
            <Typography className="w-60 pt-2 pb-2 font-serif" color="primary">
              Princeton Ethiopian, Eritrean, and Egyptian Miracles of Mary Project
            </Typography>
            <img className="bg-white w-60" src="princeton_logo.png" alt="Princeton Logo"/>
          </Box>
          <div className="inline-flex flex-col text-center">
            <Typography className="text-2xl" color="primary"
            sx={{
              paddingTop: {xs: "1.25rem", md: "0", lg: "0"},
              paddingBottom: {xs: "0", md:"1.25rem", lg: "1.25rem"}
            }}>
              Our Work
            </Typography>
            <div>
              <Link href='/volunteers'>
                <Button>
                  Volunteers
                </Button>
              </Link>
            </div>
          </div>
          <div className="inline-flex flex-col text-center">
            <Typography className="text-2xl" color="primary" 
            sx={{
              paddingTop: {xs: "1.25rem", md: "0", lg: "0"},
              paddingBottom: {xs: "0", md:"1.25rem", lg: "1.25rem"}
            }}>
              Partners
            </Typography>
            <Link href='https://www.neh.gov/'>
              <Button>
                National Endowment for the Humanities
              </Button>
            </Link>
            <Link href='https://researchcomputing.princeton.edu/'>
              <Button>
                Princeton Research Computing
              </Button>
            </Link>
          </div>
          <div className="inline-flex flex-col text-center">
            <Typography className="text-2xl" color="primary" 
            sx={{
              paddingTop: {xs: "1.25rem", md: "0", lg: "0"},
              paddingBottom: {xs: "0", md:"1.25rem", lg: "1.25rem"}
            }}>
              Contact
            </Typography>
            <div>
              <p className="text-white w-60 inline-flex flex-col gap-y-3">
                <a href = "mailto: wendy@princeton.edu"><Button>Wendy Belcher</Button></a>
                <a href = "mailto: evgeniia@princeton.edu"><Button>Evgeniia Lambrinaki</Button></a>
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