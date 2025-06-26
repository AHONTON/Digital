import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const offres = [
  {
    id: 1,
    title: "Gestion des campagnes publicitaires",
    description: "Maximisez votre ROI avec nos campagnes publicitaires ciblées sur Google Ads, Facebook Ads et autres plateformes.",
    content: "Nous créons et gérons vos campagnes publicitaires de A à Z...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    icon: "📊"
  },
  {
    id: 2,
    title: "SEO et optimisation de contenu",
    description: "Améliorez votre référencement naturel et positionnez-vous en tête des résultats de recherche.",
    content: "Notre équipe d'experts SEO analyse votre site web...",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=600&q=80",
    icon: "🔍"
  },
  {
    id: 3,
    title: "Stratégie de médias sociaux",
    description: "Développez votre présence sur les réseaux sociaux et engagez votre communauté efficacement.",
    content: "Nous élaborons une stratégie social media sur mesure...",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&q=80",
    icon: "📱"
  },
  {
    id: 4,
    title: "Email marketing et automatisation",
    description: "Créez des campagnes email personnalisées et automatisées pour nurture vos prospects.",
    content: "Transformez vos contacts en clients fidèles grâce à nos campagnes email...",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=600&q=80",
    icon: "✉️"
  }
];

const Modal = ({ isOpen, onClose, offre }) => {
  return (
    <AnimatePresence>
      {isOpen && offre && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-[90vw] sm:max-w-xl lg:max-w-3xl p-4 sm:p-6 relative overflow-auto max-h-[90vh]">
              <button
                onClick={onClose}
                className="absolute text-2xl font-bold text-gray-400 top-3 right-3 hover:text-gray-600"
              >
                ×
              </button>
              <div className="pr-4 mb-6 sm:pr-8">
                <div className="flex flex-col items-start gap-3 mb-4 sm:flex-row sm:items-center">
                  <span className="text-3xl">{offre.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">{offre.title}</h3>
                </div>
                <img
                  src={offre.image}
                  alt={offre.title}
                  className="object-cover w-full h-48 mb-6 rounded-lg sm:h-64"
                />
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">{offre.content}</p>
              </div>
              <div className="flex justify-center">
                <button className="px-6 py-3 text-sm font-semibold text-orange-500 transition-all duration-300 border-2 border-orange-500 rounded-lg sm:text-base hover:bg-orange-500 hover:text-white">
                  Demander un devis
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const OffreCard = ({ offre, onReadMore, index }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 w-full sm:w-[260px] lg:w-[270px] flex flex-col"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <div className="relative">
      <img
        src={offre.image}
        alt={offre.title}
        className="object-cover w-full h-40 transition-transform duration-300 sm:h-48 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 opacity-20 group-hover:opacity-30"
        style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' }}
      />
    </div>
    <div className="flex flex-col flex-grow p-4 sm:p-5">
      <h3 className="mb-2 text-lg font-bold text-gray-800 sm:text-xl group-hover:text-orange-600">
        {offre.title}
      </h3>
      <p className="flex-grow mb-4 text-sm text-gray-600 sm:text-base">
        {offre.description}
      </p>
      <button
        onClick={() => onReadMore(offre)}
        className="mt-auto px-5 py-2.5 text-sm sm:text-base rounded-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition duration-300"
      >
        Lire plus
      </button>
    </div>
  </motion.div>
);

const OffresComponent = () => {
  const [selectedOffre, setSelectedOffre] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (offre) => {
    setSelectedOffre(offre);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOffre(null);
    setModalOpen(false);
  };

  return (
    <div className="px-4 py-8 bg-gradient-to-br from-gray-50 to-gray-100 md:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
            Nos{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' }}>
              Offres
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-600 sm:text-lg md:text-xl">
            Découvrez nos solutions complètes pour booster votre présence digitale et atteindre vos objectifs marketing
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {offres.map((offre, index) => (
            <OffreCard
              key={offre.id}
              offre={offre}
              onReadMore={openModal}
              index={index}
            />
          ))}
        </div>
        <Modal isOpen={modalOpen} onClose={closeModal} offre={selectedOffre} />
      </div>
    </div>
  );
};

export default OffresComponent;
