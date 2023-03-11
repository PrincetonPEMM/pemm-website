import * as React from 'react';
import Head from 'next/head'
import Box from '@mui/material/Box';
import HomePageNav from '../common/HomePageNav';
import HomepageFooter from '../common/HomePageFooter';

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
      <HomePageNav/>
          <main>
            {children}
          </main>
      <HomepageFooter/>
    </>
  )
}

export default HomePageLayout
