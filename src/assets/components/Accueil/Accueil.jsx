import React from 'react';
import Hero from './Hero';
import Service from './Service';
import Section from './Section';
import Offres from './Offres';
import BlogSection from './BlogSection';
import FaqSection from './FaqSection';
import Footer from './Footer';

const Accueil = () => {
  return (
    <>
      <Hero />
      <Service />
      <Section />
      <Offres />
      <BlogSection />
      <FaqSection />
      <Footer />
    </>
  );
};

export default Accueil
