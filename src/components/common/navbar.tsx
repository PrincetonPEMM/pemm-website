import * as React from 'react';
import Link from 'next/link'
import { AppBar } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const NavBar = () => {
  const navigatorStyle = "font-serif p-2 cursor-pointer mx-8";
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    return (
        <AppBar position="static" color="secondary">
            <Container maxWidth="xl"
                sx={{
                    padding: { xs: '0', md: '0', lg: '2rem' },
                    display: "flex",
                    margin: '0',
                }}>
                <Toolbar disableGutters color="secondary">
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', lg: 'none' } }}>
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
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem key="paintings" onClick={handleCloseNavMenu}>
                                <Link href='/paintings'>
                                    <Typography textAlign="center" color="primary"> Paintings </Typography>
                                </Link>
                            </MenuItem>
                            <Link href='/stories'>
                                <MenuItem key="stories" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" color="primary"> Stories </Typography>
                                </MenuItem>
                            </Link>
                            <MenuItem key="Manuscripts" onClick={handleCloseNavMenu}>
                                <Link href='/manuscripts'>
                                    <Typography textAlign="center" color="primary"> Manuscripts </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem key="about" onClick={handleCloseNavMenu}>
                                <Link href='/about'>
                                    <Typography textAlign="center" color="primary"> About </Typography>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Link href='/'>
                        <div className="h-16 w-16 cursor-pointer">
                            <img src="logo.jpg" alt="PEMM Logo"/>
                        </div>
                    </Link>
                    <Typography className="pl-3 w-64 font-serif">
                        Princeton Ethiopian, Eritrean, and Egyptian Miracles of Mary Project
                    </Typography>
                    <Box sx={{ 
                            flexGrow: 1, 
                            display: { xs: 'none', md: 'flex', lg: 'flex' }
                        }}>
                        <Link href='/paintings'>
                            <Button color="primary" className={navigatorStyle}>
                                 Paintings
                            </Button>
                        </Link>
                        <Link href='/stories'>
                            <Button color="primary" className={navigatorStyle}>
                                Stories
                            </Button>
                        </Link>
                        <Link href='/manuscripts'>
                            <Button color="primary" className={navigatorStyle}>  
                                Manuscripts
                            </Button>
                        </Link>
                        <Link href='/about'>
                            <Button color="primary" className={navigatorStyle}> 
                                About 
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default NavBar
