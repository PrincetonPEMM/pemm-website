import * as React from 'react';
import Head from 'next/head'
import HomePageNav from '../common/HomePageNav';
import HomepageFooter from '../common/HomePageFooter';
import Footer from '../common/footer';
import NavBar from '../common/navbar';
import Box from '@mui/material/Box';

interface LayoutProps {
    children: React.ReactNode;
 }

const HomePageLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Pemmtastic</title>
        <meta name="description" content="Princeton Ethiopic Database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: {xs: 'none', md: 'block', lg: 'block'}
        }}>
        <HomePageNav/>
            <main>
              {children}
            </main>
        <HomepageFooter/>
      </Box>
      <Box
        sx={{
          display: {xs: 'block', md: 'none', lg: 'none'}
        }}>
        <NavBar/>
            <main>
              {children}
            </main>
        <Footer/>
      </Box>
    </>
  )
}

export default HomePageLayout
