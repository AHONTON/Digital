import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Accueil/Navbar';
import Carousel from './assets/components/Accueil/Carousel';
import Footer from './assets/components/Accueil/Footer';
import Accueil from './assets/components/Accueil/Accueil';
import APropos from './assets/components/About/Apropos';
import Blog from './assets/components/Blog/Blog';
import Contact from './assets/components/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Carousel />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<APropos />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
