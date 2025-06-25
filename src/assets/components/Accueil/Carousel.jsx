import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Star, Play, Pause, TrendingUp, Users, Zap, BarChart3, Target, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Campagne Social Media",
    subtitle: "Maximisez votre présence digitale avec Nazareth Com",
    description: "Développez votre audience avec des campagnes ciblées sur tous les réseaux sociaux. Notre IA analyse les tendances pour optimiser vos performances en temps réel.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1600&h=800&fit=crop",
    cta: "Lancer une campagne",
    badge: "Nouveau",
    category: "Social Media",
    icon: Users,
    stats: { 
      reach: { value: "2.5M", label: "Portée mensuelle" },
      engagement: { value: "15.3%", label: "Taux d'engagement" },
      growth: { value: "+245%", label: "Croissance followers" }
    },
    features: ["Ciblage IA", "Analytics temps réel", "Multi-plateformes"],
    gradient: "from-orange-500 via-red-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-orange-900/90 via-red-900/80 to-pink-900/90"
  },
  {
    id: 2,
    title: "Analytics & Data Science",
    subtitle: "Transformez vos données en insights stratégiques",
    description: "Exploitez la puissance des données avec nos algorithmes de machine learning. Prédisez les tendances et optimisez vos stratégies marketing avec précision.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=800&fit=crop",
    cta: "Explorer les données",
    badge: "IA Powered",
    category: "Data Science",
    icon: Brain,
    stats: { 
      accuracy: { value: "94%", label: "Précision prédictive" },
      roi: { value: "340%", label: "ROI moyen" },
      insights: { value: "50+", label: "KPIs trackés" }
    },
    features: ["Machine Learning", "Prédictions avancées", "Dashboards interactifs"],
    gradient: "from-orange-600 via-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-br from-orange-900/90 via-blue-900/80 to-cyan-900/90"
  },
  {
    id: 3,
    title: "Solutions Tech Innovantes",
    subtitle: "Technologie de pointe pour votre croissance",
    description: "Développement d'applications web et mobile sur mesure. Intégration d'APIs, automatisation des processus et solutions cloud scalables avec Nazareth Com.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1600&h=800&fit=crop",
    cta: "Découvrir nos tech",
    badge: "Innovation",
    category: "Tech Solutions",
    icon: Zap,
    stats: { 
      performance: { value: "99.9%", label: "Uptime garanti" },
      speed: { value: "2.1s", label: "Temps de chargement" },
      scalability: { value: "∞", label: "Évolutivité" }
    },
    features: ["Cloud Native", "API-First", "Microservices"],
    gradient: "from-orange-500 via-emerald-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-orange-900/90 via-emerald-900/80 to-teal-900/90"
  },
  {
    id: 4,
    title: "Automatisation Marketing",
    subtitle: "Efficacité maximale, effort minimal",
    description: "Automatisez vos workflows marketing complexes. Lead nurturing, email sequences, et personnalisation à grande échelle grâce aux solutions intelligentes de Nazareth Com.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=800&fit=crop",
    cta: "Automatiser maintenant",
    badge: "Premium",
    category: "Automation",
    icon: Target,
    stats: { 
      timeSaved: { value: "25h", label: "Temps économisé/sem" },
      efficiency: { value: "85%", label: "Gain d'efficacité" },
      leads: { value: "3.2x", label: "Génération de leads" }
    },
    features: ["Workflows intelligents", "Personnalisation IA", "ROI tracking"],
    gradient: "from-orange-500 via-purple-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-orange-900/90 via-purple-900/80 to-indigo-900/90"
  }
];

const getBadgeConfig = (badge) => {
  const configs = {
    'Nouveau': { bg: 'bg-gradient-to-r from-orange-500 to-red-500', pulse: 'animate-pulse' },
    'IA Powered': { bg: 'bg-gradient-to-r from-orange-500 to-purple-500', pulse: '' },
    'Innovation': { bg: 'bg-gradient-to-r from-orange-500 to-cyan-500', pulse: '' },
    'Premium': { bg: 'bg-gradient-to-r from-orange-600 to-yellow-500', pulse: '' },
    'Tendance': { bg: 'bg-gradient-to-r from-orange-500 to-pink-500', pulse: '' }
  };
  return configs[badge] || { bg: 'bg-orange-500', pulse: '' };
};

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="p-4 border bg-white/10 backdrop-blur-md rounded-xl border-white/20"
  >
    <div className="mb-1 text-2xl font-bold text-white">{stat.value}</div>
    <div className="text-xs text-gray-300">{stat.label}</div>
  </motion.div>
);

const FeatureTag = ({ feature, index }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5 + index * 0.1 }}
    className="inline-flex items-center px-3 py-1 text-xs font-medium text-white border rounded-full bg-white/20 backdrop-blur-sm border-white/30"
  >
    {feature}
  </motion.span>
);

const SlideContent = ({ slide, isActive }) => {
  const IconComponent = slide.icon;
  const badgeConfig = getBadgeConfig(slide.badge);

  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute inset-0 transition-all duration-1000 bg-center bg-cover"
        style={{ 
          backgroundImage: `url(${slide.image})`,
          transform: isActive ? 'scale(1)' : 'scale(1.02)'
        }}
      >
        <motion.div 
          className={`absolute inset-0 ${slide.bgColor}`}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            
            {/* Contenu principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-white"
            >
              {/* Header avec badge et rating */}
              <div className="flex flex-wrap items-center gap-4">
                <motion.span 
                  className={`${badgeConfig.bg} ${badgeConfig.pulse} px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide flex items-center gap-2`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <IconComponent className="w-4 h-4" />
                  {slide.badge}
                </motion.span>
                <motion.div 
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">4.9</span>
                  <span className="text-xs text-gray-300">(2.1k avis)</span>
                </motion.div>
                <motion.span 
                  className="px-3 py-1 text-sm border rounded-full bg-white/10 backdrop-blur-sm border-white/20"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  {slide.category}
                </motion.span>
              </div>

              {/* Titres */}
              <div className="space-y-3">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, type: "spring", damping: 20 }}
                  className="text-4xl font-black leading-tight text-transparent md:text-6xl bg-gradient-to-r from-white to-gray-300 bg-clip-text"
                >
                  {slide.title}
                </motion.h2>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-xl font-light text-orange-200 md:text-2xl"
                >
                  {slide.subtitle}
                </motion.h3>
              </div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="max-w-2xl text-lg leading-relaxed text-gray-200"
              >
                {slide.description}
              </motion.p>

              {/* Features tags */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-2"
              >
                {slide.features.map((feature, index) => (
                  <FeatureTag key={feature} feature={feature} index={index} />
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <button className="relative flex items-center gap-3 px-8 py-4 overflow-hidden text-lg font-bold text-gray-900 transition-all duration-300 transform bg-white shadow-2xl group rounded-xl hover:bg-gray-100 hover:shadow-orange-500/25 hover:scale-105">
                  <span className="relative z-10">{slide.cta}</span>
                  <ExternalLink className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-r from-orange-500 to-red-500 group-hover:opacity-10" />
                </button>
              </motion.div>
            </motion.div>

            {/* Statistiques */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="flex items-center gap-3 mb-6 text-2xl font-bold text-white">
                <BarChart3 className="w-6 h-6 text-orange-300" />
                Performances Clés
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {Object.values(slide.stats).map((stat, index) => (
                  <StatCard key={index} stat={stat} index={index} />
                ))}
              </div>
              
              {/* Indicateur de tendance */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="p-4 border bg-gradient-to-r from-green-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl border-orange-500/30"
              >
                <div className="flex items-center gap-2 text-orange-300">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">Tendance positive</span>
                </div>
                <p className="mt-1 text-sm text-gray-300">
                  +127% de croissance ce trimestre
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const slideCount = slides.length;
  const autoPlayInterval = 8000;

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + slideCount) % slideCount);
    setProgress(0);
  };

  const goToSlide = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    setProgress(0);
  };

  useEffect(() => {
    if (!isPlaying) {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
      return;
    }

    // Progress bar animation
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          paginate(1);
          return 0;
        }
        return prev + (100 / (autoPlayInterval / 100));
      });
    }, 100);

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [current, isPlaying]);

  return (
    <div className="relative w-screen h-screen overflow-hidden select-none bg-gradient-to-br from-orange-600 via-red-600 to-purple-700">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          className="absolute inset-0"
          initial={{ 
            x: direction > 0 ? "100%" : "-100%",
            scale: 0.95,
            opacity: 0.8
          }}
          animate={{ 
            x: 0,
            scale: 1,
            opacity: 1
          }}
          exit={{ 
            x: direction > 0 ? "-100%" : "100%",
            scale: 1.05,
            opacity: 0.8,
            filter: "blur(2px)"
          }}
          transition={{ 
            type: "tween", 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <SlideContent slide={slides[current]} isActive={true} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 z-30 flex items-center justify-between px-6 top-6">
        {/* Progress indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative group"
            >
              <div className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === current 
                  ? 'bg-white' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}>
                {index === current && (
                  <div 
                    className="h-full transition-all duration-100 rounded-full bg-gradient-to-r from-orange-400 to-red-400"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Play/Pause button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 text-white transition-all duration-300 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute z-20 p-4 text-white transition-all duration-300 -translate-y-1/2 rounded-full left-6 top-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:scale-110"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute z-20 p-4 text-white transition-all duration-300 -translate-y-1/2 rounded-full right-6 top-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:scale-110"
        aria-label="Slide suivant"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide counter */}
      <div className="absolute z-20 px-4 py-2 text-white rounded-full bottom-6 left-6 bg-white/10 backdrop-blur-sm">
        <span className="font-bold">{current + 1}</span>
        <span className="text-white/60"> / {slideCount}</span>
      </div>
    </div>
  );
}