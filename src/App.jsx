import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Accueil/Navbar';
import Carousel from './assets/components/Accueil/Carousel';
import Hero from './assets/components/Accueil/Hero';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Carousel />} />
        </Routes>
      <Navbar />
      <Hero />
    </Router>
  );
};

export default App;
