import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layouts = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />

      </main>
      <Footer />
    </div>
  )
}

export default Layouts