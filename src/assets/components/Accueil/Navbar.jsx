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

  const containerVariants = {
    hidden: { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    visible: { 
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      backdropFilter: 'blur(0px)'
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      backdropFilter: 'blur(20px)',
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      backdropFilter: 'blur(0px)',
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -30, rotateY: -15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -15, 
      scale: 0.95,
      rotateX: -10
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      rotateX: -5,
      transition: { 
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 w-full z-50 flex items-center px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-700 ease-out ${
          isScrolled
            ? 'bg-white/95 shadow-xl shadow-black/5 text-gray-700 backdrop-blur-xl py-2 md:py-3 border-b border-gray-100/50'
            : 'bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white py-2 md:py-3 font-bold'
        }`}
        style={{
          background: isScrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)'
        }}
      >
        <motion.a 
          href="https://ta-plateforme.com" 
          className="flex items-center gap-2"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoWhite.svg"
            alt="logo"
            className={`h-9 transition-all duration-500 ${isScrolled ? 'invert opacity-80' : ''}`}
            animate={{
              filter: isScrolled ? 'invert(1) opacity(0.8)' : 'invert(0) opacity(1)'
            }}
          />
        </motion.a>

        <motion.div 
          className="items-center hidden gap-6 ml-auto md:flex lg:gap-10 whitespace-nowrap"
          variants={itemVariants}
        >
          {navLinks.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -2 }}
            >
              <Link
                to={link.path}
                className={`group flex flex-col gap-1 relative overflow-hidden ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10"
                >
                  {link.name}
                </motion.span>
                <motion.div
                  className={`${
                    isScrolled ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-white'
                  } h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full`}
                  whileHover={{ scaleY: 1.5 }}
                />
                <motion.div
                  className="absolute inset-0 transition-transform duration-300 scale-0 rounded-lg bg-gradient-to-r from-orange-500/10 to-red-500/10 group-hover:scale-100 -z-10"
                />
              </Link>
            </motion.div>
          ))}

          <motion.div
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className="relative flex flex-col gap-1 cursor-pointer group"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.1, duration: 0.6 }}
          >
            <motion.span 
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} relative z-10`}
              whileHover={{ scale: 1.05 }}
            >
              Plus
            </motion.span>
            <motion.div
              className={`${
                isScrolled ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-white'
              } h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full`}
              whileHover={{ scaleY: 1.5 }}
            />
            <motion.div
              className="absolute inset-0 transition-transform duration-300 scale-0 rounded-lg bg-gradient-to-r from-orange-500/10 to-red-500/10 group-hover:scale-100 -z-10"
            />
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 z-50 w-48 py-3 text-gray-700 border shadow-2xl bg-white/95 backdrop-blur-xl rounded-xl shadow-black/10 top-10 border-gray-100/50"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {dropdownLinks.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={dropdownItemVariants}
                    >
                      <Link
                        to={item.path}
                        className="block px-5 py-3 mx-2 transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:scale-105 hover:shadow-sm"
                      >
                        <motion.span
                          whileHover={{ x: 5 }}
                          className="transition-colors duration-300 hover:text-orange-600"
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.button 
            className="px-8 py-3 transition-all duration-500 bg-white border-2 rounded-full border-white text-orange-600 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-transparent font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (navLinks.length + 1) * 0.1, duration: 0.6 }}
          >
            Nous Rejoindre
          </motion.button>
        </motion.div>

        <motion.div 
          className="flex items-center gap-3 ml-auto md:hidden"
          variants={itemVariants}
        >
          <motion.svg
            onClick={() => setIsMenuOpen(true)}
            className={`h-7 w-7 cursor-pointer transition-all duration-300 ${isScrolled ? 'invert' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </motion.svg>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[9999] flex flex-col overflow-y-auto md:hidden"
            style={{
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <motion.div 
              className="flex items-center justify-between p-6 border-b border-gray-700/50"
              variants={mobileItemVariants}
            >
              <motion.a
                href="https://ta-plateforme.com"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoWhite.svg"
                  alt="logo"
                  className="h-8 filter sepia brightness-150 hue-rotate-[330deg]"
                />
              </motion.a>
              <motion.button 
                onClick={() => setIsMenuOpen(false)} 
                className="p-2 text-white transition-colors duration-300 rounded-full hover:bg-white/10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.button>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center justify-center gap-8 px-6 py-12 text-orange-400"
              variants={mobileItemVariants}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  variants={mobileItemVariants}
                  whileHover={{ scale: 1.1, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-bold text-transparent transition-all duration-300 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text hover:from-orange-300 hover:to-red-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                className="flex flex-col items-center gap-4 mt-4"
                variants={mobileItemVariants}
              >
                <motion.span 
                  className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text"
                  whileHover={{ scale: 1.1 }}
                >
                  Plus
                </motion.span>
                {dropdownLinks.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={mobileItemVariants}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-base text-orange-300 transition-colors duration-300 hover:text-orange-200"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="px-10 py-4 mt-8 font-bold text-white transition-all duration-500 rounded-full shadow-2xl bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-orange-500/25 hover:scale-105"
                variants={mobileItemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Nous Rejoindre
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;