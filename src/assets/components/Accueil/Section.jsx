import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const points = [
  {
    title: "Plateforme intuitive",
    content:
      "Notre plateforme est conçue pour être simple et agréable à utiliser, même pour les débutants. Navigation fluide, interface claire et outils performants sont au rendez-vous.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    modalContent: (
      <>
        <p className="mb-4">
          Découvrez en détail comment notre plateforme intuitive vous simplifie la vie avec une interface claire, des outils accessibles, et une navigation optimisée pour tous les profils.
        </p>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
          alt="Plateforme intuitive"
          className="rounded mb-4"
        />
        <a
          href="https://example.com/plateforme-intuitive"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 hover:underline"
        >
          En savoir plus sur notre plateforme intuitive
        </a>
      </>
    ),
  },
  {
    title: "Support réactif",
    content:
      "Notre équipe de support est disponible 24/7 pour répondre rapidement à toutes vos questions et vous accompagner dans vos campagnes marketing.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
    modalContent: (
      <>
        <p className="mb-4">
          Notre support client réactif vous accompagne à chaque étape. Profitez d'une assistance personnalisée disponible à toute heure pour assurer le succès de vos campagnes.
        </p>
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
          alt="Support réactif"
          className="rounded mb-4"
        />
        <a
          href="https://example.com/support"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 hover:underline"
        >
          Contactez notre support
        </a>
      </>
    ),
  },
  {
    title: "Résultats prouvés",
    content:
      "Grâce à nos solutions, nos clients constatent une augmentation significative de leur engagement et un retour sur investissement mesurable.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    modalContent: (
      <>
        <p className="mb-4">
          Nos solutions ont permis à de nombreuses entreprises d'augmenter leur taux d'engagement et d'optimiser leur ROI grâce à des stratégies marketing ciblées et efficaces.
        </p>
        <video
          controls
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className="rounded mb-4 max-w-full"
        />
        <a
          href="https://example.com/resultats"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 hover:underline"
        >
          Voir nos études de cas
        </a>
      </>
    ),
  },
  {
    title: "Personnalisation des campagnes",
    content:
      "Nous adaptons chaque campagne selon vos besoins spécifiques pour garantir une communication ciblée et efficace avec votre audience.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    modalContent: (
      <>
        <p className="mb-4">
          Chaque campagne est conçue sur mesure pour s'adapter à votre audience, vos objectifs, et vos préférences, garantissant ainsi un impact maximal.
        </p>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
          alt="Personnalisation des campagnes"
          className="rounded mb-4"
        />
        <a
          href="https://example.com/personnalisation"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 hover:underline"
        >
          Personnalisez vos campagnes maintenant
        </a>
      </>
    ),
  },
];

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative overflow-auto max-h-[80vh]">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-3xl font-bold"
                aria-label="Fermer modal"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <div className="text-gray-700">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Section = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-black bg-opacity-30 pt-6 px-4">
      <section className="max-w-6xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          Pourquoi nous choisir / Valeur ajoutée
        </h2>

        <div className="hidden md:flex gap-10">
          <nav className="w-1/3 flex flex-col gap-4">
            {points.map(({ title }, index) => (
              <button
                key={title}
                onClick={() => setSelectedIndex(index)}
                className={`text-left px-4 py-3 rounded-lg text-xl font-semibold transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-[rgba(249,115,22,1)] text-white shadow-lg transform scale-105"
                    : "bg-gray-100 hover:bg-gray-200 hover:transform hover:scale-102"
                }`}
                style={{ borderLeft: selectedIndex === index ? "6px solid #f97316" : "none" }}
              >
                {title}
              </button>
            ))}
          </nav>

          <div className="w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg p-6 flex gap-6"
              >
                <div className="w-1/2 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{points[selectedIndex].title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{points[selectedIndex].content}</p>
                  <motion.button
                    onClick={openModal}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(249,115,22,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    style={{ backgroundColor: "#f97316" }}
                    className="text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-orange-600 transition-all duration-300 self-start"
                  >
                    Lire plus
                  </motion.button>
                </div>

                <div className="w-1/2 flex items-center justify-center">
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    src={points[selectedIndex].image}
                    alt={points[selectedIndex].title}
                    className="rounded-lg shadow-md max-h-80 object-cover w-full hover:transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="md:hidden">
          <div className="mb-6 overflow-x-auto pb-2">
            <div className="flex gap-3 min-w-max px-1">
              {points.map(({ title }, index) => (
                <button
                  key={title}
                  onClick={() => setSelectedIndex(index)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedIndex === index
                      ? "bg-[rgba(249,115,22,1)] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg p-4 space-y-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="w-full"
              >
                <img
                  src={points[selectedIndex].image}
                  alt={points[selectedIndex].title}
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
              </motion.div>

              <div>
                <h3 className="text-xl font-bold text-gray-800">{points[selectedIndex].title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{points[selectedIndex].content}</p>

                <motion.button
                  onClick={openModal}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundColor: "#f97316" }}
                  className="w-full text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-orange-600 transition-all duration-300"
                >
                  Lire plus
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Modal isOpen={modalOpen} onClose={closeModal} title={points[selectedIndex].title}>
          {points[selectedIndex].modalContent}
        </Modal>
      </section>
    </div>
  );
};

export default Section;
