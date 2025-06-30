import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Palette, Smartphone, Rocket } from "lucide-react";

const HeroSectionAbout = () => {
  return (
    <section className="relative flex items-center w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-orange-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative z-10 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 mb-6 border rounded-full bg-orange-500/20 border-orange-500/30"
            >
              <span className="text-sm font-medium text-orange-400">
                À propos de Nazareth Commnunication
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
            >
              Qui{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                sommes-nous
              </span>
              <span className="text-orange-500">?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-2xl mx-auto mb-8 text-xl leading-relaxed text-gray-300 md:text-2xl lg:mx-0"
            >
              Une équipe passionnée de créatifs et stratèges digitaux, dédiée à
              transformer vos idées en succès numériques exceptionnels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-semibold text-white transition-all duration-300 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600"
              >
                Découvrir notre histoire
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-semibold text-orange-500 transition-all duration-300 border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white"
              >
                Notre équipe
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-24 h-24 border-2 rounded-full -top-4 -right-4 border-orange-500/30"
              ></motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 border-2 rounded-full -bottom-6 -left-6 border-orange-500/20"
              ></motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 border shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-gray-700/50 backdrop-blur-sm"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="p-4 text-center border rounded-lg bg-orange-500/10 border-orange-500/20">
                      <div className="text-2xl font-bold text-orange-400">
                        150+
                      </div>
                      <div className="text-sm text-gray-400">
                        Projets réalisés
                      </div>
                    </div>
                    <div className="p-4 text-center border rounded-lg bg-orange-500/10 border-orange-500/20">
                      <div className="text-2xl font-bold text-orange-400">
                        5 ans
                      </div>
                      <div className="text-sm text-gray-400">D'expérience</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex justify-center space-x-6"
                  >
                    {[Lightbulb, Palette, Smartphone, Rocket].map(
                      (Icon, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          className="flex items-center justify-center w-12 h-12 text-orange-400 border rounded-full bg-orange-500/20 border-orange-500/30"
                        >
                          <Icon size={24} />
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center w-6 h-10 border-2 rounded-full border-orange-500/50"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 mt-2 bg-orange-500 rounded-full"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSectionAbout;
