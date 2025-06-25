import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Users, TrendingUp, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: "10K+", label: "Clients satisfaits", icon: Users },
    { number: "95%", label: "Taux de réussite", icon: TrendingUp },
    { number: "24/7", label: "Support client", icon: MessageCircle }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 text-black bg-white">
      <div className="container py-20 mx-auto">
        <div className="max-w-5xl mx-auto space-y-10 text-center">
          {/* TITRE */}
          <h1 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Révolutionnez votre <br />
            <span className="text-[#f97316]">Communication Digitale</span>
          </h1>

          {/* SOUS-TEXTE */}
          <p className="max-w-3xl mx-auto text-base text-gray-600 sm:text-lg md:text-xl">
            Boostez votre présence en ligne avec notre plateforme tout-en-un.
            Marketing intelligent, communication fluide, résultats garantis.
          </p>

          {/* BOUTONS CTA */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="px-8 py-4 text-white font-semibold rounded-xl bg-[#f97316] hover:bg-orange-600 transition-all duration-300 shadow-lg text-sm sm:text-base">
              Commencer gratuitement <ArrowRight className="inline-block ml-2" size={18} />
            </button>
            <button className="flex items-center px-6 py-4 border-2 border-[#f97316] text-[#f97316] rounded-xl hover:bg-orange-50 transition-all duration-300 text-sm sm:text-base">
              <Play className="mr-2" size={20} />
              Voir la démo
            </button>
          </div>

          {/* STATISTIQUES */}
          <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grid-cols-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-500 ${
                    currentStat === index ? 'scale-110' : 'scale-100'
                  }`}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Icon
                      className={`transition-colors duration-300 ${
                        currentStat === index ? 'text-[#f97316]' : 'text-gray-400'
                      }`}
                      size={28}
                    />
                  </div>
                  <div
                    className={`text-2xl font-bold transition-colors duration-300 ${
                      currentStat === index ? 'text-[#f97316]' : 'text-black'
                    }`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* CARTES ANIMÉES */}
          <div className="grid grid-cols-1 gap-6 pt-16 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Stratégie Personnalisée",
                text: "Adaptez chaque campagne à vos objectifs.",
              },
              {
                title: "Optimisation Continue",
                text: "Suivi et ajustements en temps réel.",
              },
              {
                title: "Analyse IA",
                text: "Décisions basées sur les données.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="p-6 rounded-2xl shadow-lg bg-[#f97316] text-white text-center"
              >
                <h4 className="mb-2 text-xl font-bold">{card.title}</h4>
                <p className="text-sm opacity-90">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
