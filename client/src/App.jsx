import React from 'react';
import {Routes, Route, } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import MenuPage from './pages/menu/MenuPage';
import Layouts from './components/Layouts';
import ContactPage from './pages/contact/ContactPage';
import { ThemeProvider } from './components/ThemeContext';
import './App.css'
import ServicesPage from './pages/services/ServicesPage';

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/services' element={<ServicesPage />} />
        </Route>
      </Routes>

    </ThemeProvider>
  )
}

export default App