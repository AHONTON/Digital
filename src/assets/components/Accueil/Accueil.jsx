import React from 'react';
import Hero from './Hero';
import Service from './Service';
import Section from './Section';
import Offres from './Offres';
import BlogSection from './BlogSection';
import FaqSection from './FaqSection';

const Accueil = () => {
  return (
    <>
      <Hero />
      <Service />
      <Section />
      <Offres />
      <BlogSection />
      <FaqSection />
    </>
  );
};

export default Accueil
