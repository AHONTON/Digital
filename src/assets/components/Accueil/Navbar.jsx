import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const dropdownLinks = [
    { name: 'Offres', path: '/offres' },
    { name: 'Témoignage', path: '/temoignages' },
    { name: 'FAQs', path: '/faqs' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 shadow-md text-gray-700 backdrop-blur-md py-2 md:py-3'
          : 'bg-primary text-white py-2 md:py-3 font-bold'
      }`}
    >
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoWhite.svg"
          alt="logo"
          className={`h-9 ${isScrolled ? 'invert opacity-80' : ''}`}
        />
      </Link>

      <div className="items-center hidden gap-6 ml-auto md:flex lg:gap-10 whitespace-nowrap">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}

        <div
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          className="relative cursor-pointer group flex flex-col gap-0.5"
        >
          <span className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            Plus
          </span>
          <div
            className={`${
              isScrolled ? 'bg-gray-700' : 'bg-white'
            } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
          />
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 z-50 w-40 py-2 text-gray-700 bg-white rounded-lg shadow-lg top-8"
              >
                {dropdownLinks.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className="block px-4 py-2 hover:bg-orange-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button className="px-6 py-2 transition-colors duration-500 bg-white border rounded-full border-primary text-primary hover:bg-primary hover:text-white">
          Nous Rejoindre
        </button>
      </div>

      <div className="flex items-center gap-3 ml-auto md:hidden">
        <svg
          onClick={() => setIsMenuOpen(true)}
          className={`h-6 w-6 cursor-pointer ${isScrolled ? 'invert' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white md:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoWhite.svg"
                  alt="logo"
                  className="h-8"
                />
              </Link>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 px-6 py-10 text-gray-800">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col items-center gap-2">
                <span className="text-lg font-medium">Plus</span>
                {dropdownLinks.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm text-gray-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="mt-6 bg-primary text-white px-8 py-2.5 rounded-full transition-all duration-300"
              >
                Nous Rejoindre
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
