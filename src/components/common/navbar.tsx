import * as React from "react";
import Link from "next/link";
import { AppBar } from "@mui/material";
import Image from "next/image";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../public/navbar_logo_not_hompage.png";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useState } from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NavBar = () => {

  const navigatorStyle = "font-serif p-2 cursor-pointer mx-8";
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
      setAnchorElNav(null);
  };

  const [anchorElPaintings, setAnchorElPaintings] = useState<EventTarget & HTMLButtonElement | null>(null);
  const [anchorElResearch, setAnchorElResearch] = useState<EventTarget & HTMLButtonElement | null>(null);
  const [anchorElAbout, setAnchorElAbout] = useState<EventTarget & HTMLButtonElement | null>(null);


  const handleClickPaintings = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorElPaintings(() => event.currentTarget);
  };

  const handleClickResearch = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorElResearch(() => event.currentTarget);
  };

  const handleClickAbout = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorElAbout(() => event.currentTarget);
  };

  const handleClose = () => {
      setAnchorElPaintings(null);
      setAnchorElResearch(null);
      setAnchorElAbout(null);
  };

  const menuStyles = {
      "&:hover": {
          backgroundColor: '#EDA545'
      },
  };
  return (
    <>
    <Alert severity="warning" className='m-1'>THIS SITE STILL UNDER DEVELOPMENT</Alert>
    <AppBar position="static" color="secondary">
      <Container
            maxWidth="xl"
            sx={{
              padding: { xs: "0", md: "0", lg: "2rem" },
              display: "flex",
              margin: "0",
            }}>
        <Toolbar disableGutters color="secondary">
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", lg: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="website navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="paintings" onClick={handleCloseNavMenu}>
                <Link href="/paintings">
                  <Typography textAlign="center" color="primary">
                    {" "}
                    Paintings{" "}
                  </Typography>
                </Link>
              </MenuItem>
              <Link href="/stories">
                <MenuItem key="stories" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="primary">
                    {" "}
                    Stories{" "}
                  </Typography>
                </MenuItem>
              </Link>
              <MenuItem key="Manuscripts" onClick={handleCloseNavMenu}>
                <Link href="/manuscripts">
                  <Typography textAlign="center" color="primary">
                    {" "}
                    Manuscripts{" "}
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem key="about" onClick={handleCloseNavMenu}>
                <Link href="/about">
                  <Typography textAlign="center" color="primary">
                    {" "}
                    About{" "}
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Link href="/">
            <div className="cursor-pointer">
              <Image alt="PEMM Logo" src={logo} width={500} height={75} />
            </div>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", lg: "flex" },
            }}
          >
            <Link href="/paintings">
              <Button color="primary" className={navigatorStyle}>
                <Typography fontWeight={"bold"} textTransform={"capitalize"}>
                  Paintings
                </Typography>
              </Button>
            </Link>
            <Link href="/stories">
              <Button color="primary" className={navigatorStyle}>
                <Typography fontWeight={"bold"} textTransform={"capitalize"}>
                  Stories
                </Typography>
              </Button>
            </Link>
            <Link href="/manuscripts">
              <Button color="primary" className={navigatorStyle}>
                <Typography fontWeight={"bold"} textTransform={"capitalize"}>
                  Manuscripts
                </Typography>
              </Button>
            </Link>
            <Link href="/about">
              <Button color="primary" className={navigatorStyle}>
                <Typography fontWeight={"bold"} textTransform={"capitalize"}>
                  About
                </Typography>
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}

export default NavBar;
