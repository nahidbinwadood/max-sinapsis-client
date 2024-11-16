import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <div className="min-h-[calc(100vh-564px)] xl:w-[1200px] mx-auto overflow-x-hidden">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
