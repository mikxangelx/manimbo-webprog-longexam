import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col text-[#17204d]">
      <NavBar />
      <main className="flex-1 pb-16 pt-24">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
