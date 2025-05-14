import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Layout from '../components/Layout';
import Contact from '../pages/Contact';


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* Optional: Add a 404 fallback route */}
        <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  )
}

export default AppRoutes;
