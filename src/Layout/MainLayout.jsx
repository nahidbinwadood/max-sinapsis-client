import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <div className="min-h-[calc(100vh-564px)] w-[1200px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
