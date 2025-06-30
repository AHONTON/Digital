import React from "react";
import { motion } from "framer-motion";

const MissionVision = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-12"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="p-4 transition-shadow duration-300 bg-white border border-gray-100 shadow-lg sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="flex items-center justify-center w-10 h-10 mr-3 text-lg rounded-full sm:w-12 sm:h-12 sm:mr-4 sm:text-2xl bg-gradient-to-r from-orange-500 to-orange-600">
                🧭
              </div>
              <h2 className="text-lg font-bold text-gray-800 sm:text-xl lg:text-2xl">
                Notre Mission
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                Accompagner les entreprises dans leur transformation digitale en
                créant des expériences authentiques qui connectent les marques à
                leur audience.
              </p>

              <div className="py-3 pl-3 border-l-4 border-orange-500 rounded-r-lg sm:pl-4 bg-orange-50">
                <p className="text-sm font-medium text-gray-700 sm:text-base">
                  Nous croyons que chaque marque a une histoire unique à
                  raconter. Notre mission est de révéler cette histoire à
                  travers des stratégies digitales innovantes et personnalisées.
                </p>
              </div>

              <ul className="space-y-2 text-sm text-gray-600 sm:text-base">
                <li className="flex items-center">
                  <span className="flex-shrink-0 w-2 h-2 mr-3 bg-orange-500 rounded-full"></span>
                  Créer des campagnes impactantes et mémorables
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 w-2 h-2 mr-3 bg-orange-500 rounded-full"></span>
                  Maximiser votre retour sur investissement
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 w-2 h-2 mr-3 bg-orange-500 rounded-full"></span>
                  Construire des relations durables avec vos clients
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="p-4 text-white transition-shadow duration-300 shadow-lg sm:p-6 lg:p-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl hover:shadow-xl"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="flex items-center justify-center w-10 h-10 mr-3 text-lg bg-white rounded-full sm:w-12 sm:h-12 sm:mr-4 sm:text-2xl bg-opacity-20">
                🎯
              </div>
              <h2 className="text-lg font-bold text-white sm:text-xl lg:text-2xl">
                Notre Vision
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm leading-relaxed text-orange-100 sm:text-base">
                Devenir la référence en matière d'innovation digitale, en créant
                un écosystème où la créativité et la technologie se rencontrent
                pour générer des résultats exceptionnels.
              </p>

              <div className="p-3 bg-white rounded-lg sm:p-4 bg-opacity-10 backdrop-blur-sm">
                <p className="text-sm font-medium text-white sm:text-base">
                  Nous imaginons un futur où chaque interaction digitale est une
                  opportunité de créer de la valeur, de l'émotion et de
                  l'engagement authentique entre les marques et leur communauté.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4 sm:gap-4 sm:mt-6">
                <div className="text-center">
                  <div className="mb-1 text-xl font-bold text-white sm:text-2xl">
                    2030
                  </div>
                  <div className="text-xs text-orange-200 sm:text-sm">
                    Horizon d'excellence
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-xl font-bold text-white sm:text-2xl">
                    ∞
                  </div>
                  <div className="text-xs text-orange-200 sm:text-sm">
                    Innovation continue
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                <span className="px-2 py-1 text-xs text-orange-100 bg-white rounded-full sm:px-3 sm:text-sm bg-opacity-20">
                  Innovation
                </span>
                <span className="px-2 py-1 text-xs text-orange-100 bg-white rounded-full sm:px-3 sm:text-sm bg-opacity-20">
                  Excellence
                </span>
                <span className="px-2 py-1 text-xs text-orange-100 bg-white rounded-full sm:px-3 sm:text-sm bg-opacity-20">
                  Impact
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
