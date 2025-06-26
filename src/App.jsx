import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Accueil/Navbar';
import Carousel from './assets/components/Accueil/Carousel';
import Hero from './assets/components/Accueil/Hero';
import Service from './assets/components/Accueil/Service';
import Section from './assets/components/Accueil/Section';
import Offres from './assets/components/Accueil/Offres';
import BlogSection from './assets/components/Accueil/BlogSection';
import FaqSection from './assets/components/Accueil/FaqSection';
import Footer from './assets/components/Accueil/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Carousel />} />
        </Routes>
      <Navbar />
      <Hero />
      <Service />
      <Section />
      <Offres />
      <BlogSection />
      <FaqSection />
      <Footer />
    </Router>
  );
};

export default App;
