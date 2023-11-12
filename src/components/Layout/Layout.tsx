import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className='row min-vh-100 h-100 w-100 position-relative'>
    {/* <Header /> */}
    <Sidebar />
    <div className='col-10 py-3'>{children}</div>
    <Footer />
  </div>
);

export default Layout;
