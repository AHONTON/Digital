import React from 'react';
import Carousel from '../Accueil/Carousel';
import Hero from '../Accueil/Hero';
import Service from './Accueil/Service';
import Section from './Accueil/Section';
import Offres from './Accueil/Offres';
import BlogSection from './Accueil/BlogSection';
import FaqSection from './Accueil/FaqSection';
import Footer from './Accueil/Footer';

const Accueil = () => {
  return (
    <>
      <Carousel />
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
