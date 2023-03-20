import * as React from 'react';
import Link from 'next/link'
import { AppBar } from '@mui/material';
import Image from 'next/image'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../../public/navbar_logo.png'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useState } from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NavBar = () => {
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
                    maxWidth={false}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: "10",
                    }}
                >
                    <Link href="/">
                        <div className="cursor-pointer">
                            <Image alt="PEMM Logo" src={logo} width={500} height={75} />
                        </div>
                    </Link>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            flexGrow: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex", lg: "flex" },
                                "& .MuiButton-root": {
                                    textTransform: "capitalize",
                                    fontWeight: "bold",
                                    fontSize: "1.2rem",
                                },
                                "& .MuiButton-root:not(:last-child)": {
                                    mr: "3rem",
                                },
                            }}
                        >
                            <Link href="/stories">
                                <Button color="primary">Stories</Button>
                            </Link>

                            <Button color="primary" onClick={handleClickPaintings}>
                                Paintings
                            </Button>
                            <Menu
                                anchorEl={anchorElPaintings}
                                open={Boolean(anchorElPaintings)}
                                onClose={handleClose}
                            >
                                <Link href="/paintings">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>All Paintings</MenuItem>
                                </Link>
                                <Link href="/paintings/story">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>Paintings by Story</MenuItem>
                                </Link>
                                <Link href="/paintings/manuscript">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>Paintings by Manuscripts</MenuItem>
                                </Link>
                            </Menu>

                            <Link href="/manuscripts">
                                <Button color="primary">Manuscripts</Button>
                            </Link>

                            <Button color="primary" onClick={handleClickResearch}>
                                Research Tools
                            </Button>
                            <Menu
                                anchorEl={anchorElResearch}
                                open={Boolean(anchorElResearch)}
                                onClose={handleClose}
                            >
                                <Link href="/research/incipit-tool">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>Incipit Tool</MenuItem>
                                </Link>
                                <Link href="/research/arabic-manuscripts">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>Arabic Manuscripts</MenuItem>
                                </Link>
                                <Link href="/research/arabic-stories">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>Arabic Stories</MenuItem>
                                </Link>
                                <Link href="/research/maps">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>Maps</MenuItem>
                                </Link>
                                <Link href="/research/spellings">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>Interchangeable Spellings of Ethiopic Terms</MenuItem>
                                </Link>
                                <Link href="/research/research-posts">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>Research Posts</MenuItem>
                                </Link>
                                <Link href="/research/macomber">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>Macomber Handlist</MenuItem>
                                </Link>
                                <Link href="/research/repositories">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>List of Repositories</MenuItem>
                                </Link>
                                <Link href="/research/bibliography">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>Bibliography</MenuItem>
                                </Link>
                            </Menu>

                            <Button color="primary" onClick={handleClickAbout}>
                                About
                            </Button>
                            <Menu
                                anchorEl={anchorElAbout}
                                open={Boolean(anchorElAbout)}
                                onClose={handleClose}
                            >
                                <Link href="/about/people">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>People</MenuItem>
                                </Link>
                                <Link href="/about/mission">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>Mission</MenuItem>
                                </Link>
                                <Link href="/about/connect">
                                    <MenuItem onClick={handleClose} sx={menuStyles}>Connect</MenuItem>
                                </Link>
                            </Menu>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "flex", md: "none", lg: "none" },
                                "& .MuiIconButton-root": {
                                    color: "primary",
                                },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="website navigation"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
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
                            >
                                <div>
                                    <Link href="/stories">
                                        <Button style={{ textTransform: 'none', width: '100%' }} color="primary">Stories</Button>
                                    </Link>
                                </div>

                                <div>
                                    <Button style={{ textTransform: 'none', width: '100%' }} color="primary" onClick={handleClickPaintings}>
                                        Paintings
                                    </Button>
                                    <Menu
                                        anchorEl={anchorElPaintings}
                                        open={Boolean(anchorElPaintings)}
                                        onClose={handleClose}
                                    >
                                        <Link href="/paintings">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>All Paintings</MenuItem>
                                        </Link>
                                        <Link href="/paintings/story">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>Paintings by Story</MenuItem>
                                        </Link>
                                        <Link href="/paintings/manuscript">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>Paintings by Manuscripts</MenuItem>
                                        </Link>
                                    </Menu>
                                </div>

                                <div>
                                    <Link href="/manuscripts">
                                        <Button style={{ textTransform: 'none', width: '100%' }} color="primary">Manuscripts</Button>
                                    </Link>
                                </div>

                                <div>
                                    <Button style={{ textTransform: 'none', width: '100%' }} color="primary" onClick={handleClickResearch}>
                                        Research Tools
                                    </Button>
                                    <Menu
                                        anchorEl={anchorElResearch}
                                        open={Boolean(anchorElResearch)}
                                        onClose={handleClose}
                                    >
                                        <Link href="/research/incipit-tool">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>Incipit Tool</MenuItem>
                                        </Link>
                                        <Link href="/research/arabic-manuscripts">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>Arabic Manuscripts</MenuItem>
                                        </Link>
                                        <Link href="/research/arabic-stories">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>Arabic Stories</MenuItem>
                                        </Link>
                                        <Link href="/research/maps">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>Maps</MenuItem>
                                        </Link>
                                        <Link href="/research/spellings">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>Interchangeable Spellings of Ethiopic Terms</MenuItem>
                                        </Link>
                                        <Link href="/research/research-posts">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>Research Posts</MenuItem>
                                        </Link>
                                        <Link href="/research/macomber">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>Macomber Handlist</MenuItem>
                                        </Link>
                                        <Link href="/research/repositories">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>List of Repositories</MenuItem>
                                        </Link>
                                        <Link href="/research/bibliography">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>Bibliography</MenuItem>
                                        </Link>
                                    </Menu>
                                </div>

                                <div>
                                    <Button style={{ textTransform: 'none', width: '100%' }} color="primary" onClick={handleClickAbout}>
                                        About
                                    </Button>
                                    <Menu
                                        anchorEl={anchorElAbout}
                                        open={Boolean(anchorElAbout)}
                                        onClose={handleClose}
                                    >
                                        <Link href="/about/people">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>People</MenuItem>
                                        </Link>
                                        <Link href="/about/mission">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>Mission</MenuItem>
                                        </Link>
                                        <Link href="/about/connect">
                                            <MenuItem onClick={handleClose} sx={menuStyles}>Connect</MenuItem>
                                        </Link>
                                    </Menu>
                                </div>
                            </Menu>
                        </Box>
                    </Box>
                </Container>
            </AppBar>
        </>

    )
}

export default NavBar
