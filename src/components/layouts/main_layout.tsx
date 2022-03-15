import * as React from 'react';
import Footer from '../common/footer';
import NavBar from '../common/navbar';
import Head from 'next/head'

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
        <main>
          {children}
        </main>
      <Footer/>
    </>
  )
}

export default MainLayout
