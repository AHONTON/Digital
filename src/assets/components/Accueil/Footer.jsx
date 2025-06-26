import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Send,
  Heart,
  ExternalLink,
  Clock,
  Award,
  Users,
  TrendingUp,
  MoreHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";

const ModernFooter = () => {
  const [email, setEmail] = useState("");
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredContact, setHoveredContact] = useState(null);

  const menuLinks = [
    { name: "Accueil", href: "/", icon: <TrendingUp className="w-4 h-4" /> },
    { name: "À propos", href: "/about", icon: <Users className="w-4 h-4" /> },
    {
      name: "Services",
      href: "/services",
      icon: <Award className="w-4 h-4" />,
    },
    { name: "Blog", href: "/blog", icon: <ExternalLink className="w-4 h-4" /> },
    {
      name: "Plus",
      icon: <MoreHorizontal className="w-4 h-4" />,
      sublinks: [
        {
          name: "Offres",
          href: "/offers",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          name: "Témoignages",
          href: "/testimonials",
          icon: <Heart className="w-4 h-4" />,
        },
        {
          name: "FAQs",
          href: "/faqs",
          icon: <ExternalLink className="w-4 h-4" />,
        },
      ],
    },
    { name: "Contact", href: "/contact", icon: <Send className="w-4 h-4" /> },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "https://facebook.com",
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com",
      color: "hover:bg-pink-600",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      color: "hover:bg-blue-700",
    },
  ];

  const contactInfo = {
    phone: "+229 01  975 076 01",
    email: "contact@nazareth.bj",
    address: "Cotonou, Bénin",
  };

  const handleSubmit = () => {
    if (email) {
      console.log("Email soumis:", email);
      setEmail("");
    }
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handleAddressClick = () => {
    window.open(
      `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`,
      "_blank"
    );
  };

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const linkHoverVariants = {
    hover: {
      x: 8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const contactItemVariants = {
    hover: {
      x: 5,
      backgroundColor: "rgba(249, 115, 22, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute w-32 h-32 bg-orange-500 rounded-full top-10 left-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-24 h-24 bg-orange-400 rounded-full top-32 right-20"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute w-20 h-20 bg-orange-600 rounded-full bottom-20 left-1/3"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 px-6 py-12 mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:space-x-10">
          <motion.div
            className="flex flex-col flex-1 max-w-sm"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center mb-4 space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-lg"
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-xl font-bold text-white">N</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-transparent select-none bg-gradient-to-r from-white to-orange-300 bg-clip-text">
                NAZARETH COMMUNICATION
              </h3>
            </motion.div>

            <motion.p
              className="mb-8 text-sm leading-relaxed text-justify text-gray-300"
              variants={itemVariants}
            >
              Votre partenaire stratégique en marketing digital. Nous
              transformons vos idées en succès mesurables grâce à notre
              expertise et notre passion pour l'innovation digitale.
            </motion.p>

            <motion.div
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <motion.h5
                className="text-lg font-semibold text-orange-500 select-none mb-7"
                whileHover={{ scale: 1.05, color: "#fb923c" }}
              >
                Suivez-nous
              </motion.h5>
              <div className="flex justify-center space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={social.name}
                    onClick={() => handleSocialClick(social.href)}
                    className={`w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition cursor-pointer ${social.color}`}
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setHoveredSocial(social.name)}
                    onHoverEnd={() => setHoveredSocial(null)}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { delay: index * 0.1 + 0.5 },
                    }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col flex-1 w-full gap-6 lg:flex-row lg:space-x-6"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col flex-1 h-full p-6 bg-gray-900 rounded-lg shadow-lg"
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.h4
                className="mb-6 text-xl font-bold text-orange-500"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                Navigation
              </motion.h4>
              <ul className="flex-grow space-y-3 text-sm">
                {menuLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.1 + 0.3 },
                    }}
                  >
                    {link.sublinks ? (
                      <details className="group">
                        <summary className="flex items-center space-x-3 text-gray-300 transition cursor-pointer hover:text-orange-500">
                          {link.icon}
                          <span>{link.name}</span>
                        </summary>
                        <ul className="mt-2 ml-6 space-y-2">
                          {link.sublinks.map((sublink) => (
                            <li key={sublink.name}>
                              <motion.a
                                href={sublink.href}
                                className="flex items-center space-x-2 text-gray-400 transition hover:text-orange-500"
                                whileHover={{ x: 5, color: "#f97316" }}
                              >
                                {sublink.icon}
                                <span>{sublink.name}</span>
                              </motion.a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <motion.a
                        href={link.href}
                        className="flex items-center space-x-3 text-gray-300 transition group hover:text-orange-500"
                        variants={linkHoverVariants}
                        whileHover="hover"
                        onHoverStart={() => setHoveredLink(link.name)}
                        onHoverEnd={() => setHoveredLink(null)}
                      >
                        <motion.div
                          className={
                            hoveredLink === link.name
                              ? "text-orange-500"
                              : "text-gray-500"
                          }
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          {link.icon}
                        </motion.div>
                        <span className="group-hover:font-semibold">
                          {link.name}
                        </span>
                        <motion.div
                          animate={{
                            opacity: hoveredLink === link.name ? 1 : 0,
                            x: hoveredLink === link.name ? 4 : 0,
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="flex flex-col flex-1 h-full p-6 bg-gray-900 rounded-lg shadow-lg"
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.h4
                className="mb-4 text-lg font-semibold text-orange-500"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                Contact
              </motion.h4>
              <div className="flex-grow space-y-3 text-sm text-gray-300">
                <motion.button
                  onClick={handlePhoneClick}
                  className="flex items-center w-full p-2 space-x-3 text-left transition rounded-lg cursor-pointer hover:text-orange-500"
                  variants={contactItemVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredContact("phone")}
                  onHoverEnd={() => setHoveredContact(null)}
                  aria-label="Appeler"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Phone className="w-4 h-4" />
                  </motion.div>
                  <span>{contactInfo.phone}</span>
                </motion.button>

                <motion.button
                  onClick={handleEmailClick}
                  className="flex items-center w-full p-2 space-x-3 text-left transition rounded-lg cursor-pointer hover:text-orange-500"
                  variants={contactItemVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredContact("email")}
                  onHoverEnd={() => setHoveredContact(null)}
                  aria-label="Envoyer un email"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Mail className="w-4 h-4" />
                  </motion.div>
                  <span>{contactInfo.email}</span>
                </motion.button>

                <motion.button
                  onClick={handleAddressClick}
                  className="flex items-center w-full p-2 space-x-3 text-left transition rounded-lg cursor-pointer hover:text-orange-500"
                  variants={contactItemVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredContact("address")}
                  onHoverEnd={() => setHoveredContact(null)}
                  aria-label="Voir sur la carte"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <MapPin className="w-4 h-4" />
                  </motion.div>
                  <span>{contactInfo.address}</span>
                </motion.button>

                <motion.div
                  className="flex items-center p-2 space-x-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.8 } }}
                >
                  <Clock className="w-4 h-4" />
                  <span>Lun-Ven: 8h-18h</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col flex-1 h-full p-6 bg-gray-900 rounded-lg shadow-lg"
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.h4
                className="mb-4 text-xl font-bold text-orange-500"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                Restez Connecté
              </motion.h4>
              <div className="flex flex-col flex-grow">
                <motion.p
                  className="mb-4 text-sm text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.6 } }}
                >
                  Recevez nos dernières actualités et conseils marketing.
                </motion.p>
                <div className="flex flex-col mt-auto">
                  <motion.div
                    className="relative mb-3"
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <motion.input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre email..."
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                      whileFocus={{
                        borderColor: "#f97316",
                        boxShadow: "0 0 0 3px rgba(249, 115, 22, 0.1)",
                      }}
                    />
                  </motion.div>
                  <motion.button
                    onClick={handleSubmit}
                    className="flex items-center justify-center w-full py-3 space-x-2 font-semibold text-white rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.div>
                    <span>S'abonner</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="py-4 pb-0 mt-4 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 0.6 },
          }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 mx-auto text-sm text-gray-400 max-w-7xl">
            <motion.div
              className="flex items-center mt-2 space-x-2 whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
            >
              <span>© 2025 NAZARETH COMMUNICATION. Tous droits réservés.</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  color: ["#f97316", "#fb923c", "#f97316"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4" />
              </motion.div>
              <span className="font-bold">Tech Afrique</span>
            </motion.div>

            <div className="flex space-x-6 whitespace-nowrap">
              {["Politique de Confidentialité", "Mentions Légales", "Aide"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="transition hover:text-orange-500"
                    whileHover={{
                      scale: 1.05,
                      color: "#f97316",
                      y: -2,
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 1.2 + index * 0.1 },
                    }}
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default ModernFooter;
