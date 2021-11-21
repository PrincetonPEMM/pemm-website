import Footer from '../common/footer';
import NavBar from '../common/navbar';

interface LayoutProps {
    children: React.ReactNode;
 }

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
        <NavBar/>
            {children}
        <Footer/>
    </>
  )
}

export default MainLayout
