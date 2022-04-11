import * as React from 'react';
import Footer from '../common/footer';
import NavBar from '../common/navbar';
import Head from 'next/head'
import Box from '@mui/material/Box';

interface LayoutProps {
    children: React.ReactNode;
 }

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Pemmtastic</title>
        <meta name="description" content="Princeton Ethiopic Database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
        <Box 
          //TODO: Update hardcoded secondary color
          bgcolor="#E8E4DD">
          <main>
            {children}
          </main>
        </Box>
      <Footer/>
    </>
  )
}

export default MainLayout
