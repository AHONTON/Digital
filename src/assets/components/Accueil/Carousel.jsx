import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Star,
  Play,
  Pause,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Target,
  Brain,
} from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Campagne Social Media",
    subtitle: "Maximisez votre présence digitale avec Nazareth Com",
    description:
      "Développez votre audience avec des campagnes ciblées sur tous les réseaux sociaux. Notre IA analyse les tendances pour optimiser vos performances en temps réel.",
    image:
      "https://comellink.com/wp-content/uploads/2023/08/5_pourquoi_choisir_les_RS-1024x673.jpg",
    cta: "Lancer une campagne",
    badge: "Nouveau",
    category: "Social Media",
    icon: Users,
    stats: {
      reach: { value: "2.5M", label: "Portée mensuelle" },
      engagement: { value: "15.3%", label: "Taux d'engagement" },
      growth: { value: "+245%", label: "Croissance followers" },
    },
    features: ["Ciblage IA", "Analytics temps réel", "Multi-plateformes"],
    gradient: "from-orange-500 via-red-500 to-pink-600",
    bgColor:
      "bg-gradient-to-br from-orange-900/90 via-red-900/80 to-pink-900/90",
  },
  {
    id: 2,
    title: "Analytics & Data Science",
    subtitle: "Transformez vos données en insights stratégiques",
    description:
      "Exploitez la puissance des données avec nos algorithmes de machine learning. Prédisez les tendances et optimisez vos stratégies marketing avec précision.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=800&fit=crop",
    cta: "Explorer les données",
    badge: "IA Powered",
    category: "Data Science",
    icon: Brain,
    stats: {
      accuracy: { value: "94%", label: "Précision prédictive" },
      roi: { value: "340%", label: "ROI moyen" },
      insights: { value: "50+", label: "KPIs trackés" },
    },
    features: [
      "Machine Learning",
      "Prédictions avancées",
      "Dashboards interactifs",
    ],
    gradient: "from-orange-600 via-blue-500 to-cyan-600",
    bgColor:
      "bg-gradient-to-br from-orange-900/90 via-blue-900/80 to-cyan-900/90",
  },
  {
    id: 3,
    title: "Solutions Tech Innovantes",
    subtitle: "Technologie de pointe pour votre croissance",
    description:
      "Développement d'applications web et mobile sur mesure. Intégration d'APIs, automatisation des processus et solutions cloud scalables avec Nazareth Com.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1600&h=800&fit=crop",
    cta: "Découvrir nos tech",
    badge: "Innovation",
    category: "Tech Solutions",
    icon: Zap,
    stats: {
      performance: { value: "99.9%", label: "Uptime garanti" },
      speed: { value: "2.1s", label: "Temps de chargement" },
      scalability: { value: "∞", label: "Évolutivité" },
    },
    features: ["Cloud Native", "API-First", "Microservices"],
    gradient: "from-orange-500 via-emerald-500 to-teal-600",
    bgColor:
      "bg-gradient-to-br from-orange-900/90 via-emerald-900/80 to-teal-900/90",
  },
  {
    id: 4,
    title: "Automatisation Marketing",
    subtitle: "Efficacité maximale, effort minimal",
    description:
      "Automatisez vos workflows marketing complexes. Lead nurturing, email sequences, et personnalisation à grande échelle grâce aux solutions intelligentes de Nazareth Com.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=800&fit=crop",
    cta: "Automatiser maintenant",
    badge: "Premium",
    category: "Automation",
    icon: Target,
    stats: {
      timeSaved: { value: "25h", label: "Temps économisé/sem" },
      efficiency: { value: "85%", label: "Gain d'efficacité" },
      leads: { value: "3.2x", label: "Génération de leads" },
    },
    features: ["Workflows intelligents", "Personnalisation IA", "ROI tracking"],
    gradient: "from-orange-500 via-purple-500 to-indigo-600",
    bgColor:
      "bg-gradient-to-br from-orange-900/90 via-purple-900/80 to-indigo-900/90",
  },
];

const getBadgeConfig = (badge) => {
  const configs = {
    Nouveau: {
      bg: "bg-gradient-to-r from-orange-500 to-red-500",
      pulse: "animate-pulse",
    },
    "IA Powered": {
      bg: "bg-gradient-to-r from-orange-500 to-purple-500",
      pulse: "",
    },
    Innovation: {
      bg: "bg-gradient-to-r from-orange-500 to-cyan-500",
      pulse: "",
    },
    Premium: {
      bg: "bg-gradient-to-r from-orange-600 to-yellow-500",
      pulse: "",
    },
    Tendance: { bg: "bg-gradient-to-r from-orange-500 to-pink-500", pulse: "" },
  };
  return configs[badge] || { bg: "bg-orange-500", pulse: "" };
};

const StatCard = ({ stat, index, isMobile }) => (
  <div
    className={`p-3 ${
      isMobile ? "p-2" : "p-4"
    } border bg-white/10 backdrop-blur-md rounded-xl border-white/20 transition-all duration-300 hover:bg-white/15`}
  >
    <div
      className={`${
        isMobile ? "text-lg" : "text-2xl"
      } font-bold text-white mb-1`}
    >
      {stat.value}
    </div>
    <div className={`${isMobile ? "text-xs" : "text-xs"} text-gray-300`}>
      {stat.label}
    </div>
  </div>
);

const FeatureTag = ({ feature, index, isMobile }) => (
  <span
    className={`inline-flex items-center ${
      isMobile ? "px-2 py-1 text-xs" : "px-3 py-1 text-xs"
    } font-medium text-white border rounded-full bg-white/20 backdrop-blur-sm border-white/30 transition-all duration-300 hover:bg-white/30`}
  >
    {feature}
  </span>
);

const SlideContent = ({ slide, isActive, isMobile }) => {
  const IconComponent = slide.icon;
  const badgeConfig = getBadgeConfig(slide.badge);

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 transition-all duration-1000 bg-center bg-cover"
        style={{
          backgroundImage: `url(${slide.image})`,
          transform: isActive ? "scale(1)" : "scale(1.02)",
        }}
      >
        <div className={`absolute inset-0 ${slide.bgColor}`} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      </div>

      <div
        className={`relative z-10 flex flex-col justify-center h-full ${
          isMobile ? "px-4 py-8" : "px-6 md:px-20"
        }`}
      >
        <div className="w-full max-w-6xl mx-auto">
          <div
            className={`grid items-center gap-8 ${
              isMobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"
            } ${isMobile ? "gap-6" : "gap-12"}`}
          >
            <div
              className={`space-y-4 text-white ${
                isMobile ? "space-y-3" : "space-y-6"
              }`}
            >
              <div
                className={`flex flex-wrap items-center gap-2 ${
                  isMobile ? "gap-2" : "gap-4"
                }`}
              >
                <span
                  className={`${badgeConfig.bg} ${badgeConfig.pulse} ${
                    isMobile ? "px-3 py-1 text-xs" : "px-4 py-2 text-sm"
                  } rounded-full font-semibold uppercase tracking-wide flex items-center gap-2`}
                >
                  <IconComponent
                    className={`${isMobile ? "w-3 h-3" : "w-4 h-4"}`}
                  />
                  {slide.badge}
                </span>
                <div
                  className={`flex items-center gap-2 ${
                    isMobile ? "px-2 py-1" : "px-3 py-1"
                  } rounded-full bg-white/20 backdrop-blur-sm`}
                >
                  <Star
                    className={`${
                      isMobile ? "w-3 h-3" : "w-4 h-4"
                    } text-yellow-400 fill-yellow-400`}
                  />
                  <span
                    className={`${
                      isMobile ? "text-xs" : "text-sm"
                    } font-medium`}
                  >
                    4.9
                  </span>
                  <span className="text-xs text-gray-300">(2.1k avis)</span>
                </div>
                {!isMobile && (
                  <span className="px-3 py-1 text-sm border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
                    {slide.category}
                  </span>
                )}
              </div>

              <div
                className={`space-y-2 ${isMobile ? "space-y-1" : "space-y-3"}`}
              >
                <h2
                  className={`${
                    isMobile ? "text-2xl" : "text-4xl md:text-6xl"
                  } font-black leading-tight text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text`}
                >
                  {slide.title}
                </h2>
                <h3
                  className={`${
                    isMobile ? "text-sm" : "text-xl md:text-2xl"
                  } font-light text-orange-200`}
                >
                  {slide.subtitle}
                </h3>
              </div>

              <p
                className={`${
                  isMobile ? "text-sm" : "text-lg"
                } leading-relaxed text-gray-200 ${
                  isMobile ? "max-w-none" : "max-w-2xl"
                }`}
              >
                {slide.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {slide.features.map((feature, index) => (
                  <FeatureTag
                    key={feature}
                    feature={feature}
                    index={index}
                    isMobile={isMobile}
                  />
                ))}
              </div>

              <div>
                <button
                  className={`relative flex items-center gap-3 ${
                    isMobile ? "px-6 py-3 text-base" : "px-8 py-4 text-lg"
                  } overflow-hidden font-bold text-gray-900 transition-all duration-300 transform bg-white shadow-2xl group rounded-xl hover:bg-gray-100 hover:shadow-orange-500/25 hover:scale-105 active:scale-95`}
                >
                  <span className="relative z-10">{slide.cta}</span>
                  <ExternalLink
                    className={`relative z-10 ${
                      isMobile ? "w-4 h-4" : "w-5 h-5"
                    } transition-transform group-hover:translate-x-1`}
                  />
                  <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-r from-orange-500 to-red-500 group-hover:opacity-10" />
                </button>
              </div>
            </div>

            {!isMobile && (
              <div className="space-y-6">
                <h4 className="flex items-center gap-3 mb-6 text-2xl font-bold text-white">
                  <BarChart3 className="w-6 h-6 text-orange-300" />
                  Performances Clés
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {Object.values(slide.stats).map((stat, index) => (
                    <StatCard
                      key={index}
                      stat={stat}
                      index={index}
                      isMobile={false}
                    />
                  ))}
                </div>

                <div className="p-4 border bg-gradient-to-r from-green-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl border-orange-500/30">
                  <div className="flex items-center gap-2 text-orange-300">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">Tendance positive</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-300">
                    +127% de croissance ce trimestre
                  </p>
                </div>
              </div>
            )}
          </div>

          {isMobile && (
            <div className="mt-6 space-y-4">
              <h4 className="flex items-center gap-2 text-lg font-bold text-white">
                <BarChart3 className="w-5 h-5 text-orange-300" />
                Performances
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {Object.values(slide.stats).map((stat, index) => (
                  <StatCard
                    key={index}
                    stat={stat}
                    index={index}
                    isMobile={true}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const slideCount = slides.length;
  const autoPlayInterval = 8000;
  const minSwipeDistance = 50;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) paginate(1);
    if (isRightSwipe) paginate(-1);
  };

  useEffect(() => {
    if (!isPlaying) {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          paginate(1);
          return 0;
        }
        return prev + 100 / (autoPlayInterval / 100);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [current, isPlaying]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden select-none bg-gradient-to-br from-orange-600 via-red-600 to-purple-700"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-800 ease-in-out ${
              index === current
                ? "opacity-100 translate-x-0"
                : index < current
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <SlideContent
              slide={slide}
              isActive={index === current}
              isMobile={isMobile}
            />
          </div>
        ))}
      </div>

      <div
        className={`absolute inset-x-0 z-30 flex items-center justify-between ${
          isMobile ? "px-4 top-4" : "px-6 top-6"
        }`}
      >
        <div className={`flex ${isMobile ? "gap-1" : "gap-2"}`}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative group"
              aria-label={`Aller au slide ${index + 1}`}
            >
              <div
                className={`${
                  isMobile ? "w-8 h-1" : "w-12 h-1"
                } rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-white"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              >
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

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`${
            isMobile ? "p-2" : "p-3"
          } text-white transition-all duration-300 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 active:scale-95`}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className={`${isMobile ? "w-4 h-4" : "w-5 h-5"}`} />
          ) : (
            <Play className={`${isMobile ? "w-4 h-4" : "w-5 h-5"}`} />
          )}
        </button>
      </div>

      {!isMobile && (
        <>
          <button
            onClick={() => paginate(-1)}
            className="absolute z-20 p-4 text-white transition-all duration-300 -translate-y-1/2 rounded-full left-6 top-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:scale-110 active:scale-95"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute z-20 p-4 text-white transition-all duration-300 -translate-y-1/2 rounded-full right-6 top-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:scale-110 active:scale-95"
            aria-label="Slide suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div
        className={`absolute z-20 ${
          isMobile ? "px-3 py-1 bottom-4 left-4" : "px-4 py-2 bottom-6 left-6"
        } text-white rounded-full bg-white/10 backdrop-blur-sm`}
      >
        <span className="font-bold">{current + 1}</span>
        <span className="text-white/60"> / {slideCount}</span>
      </div>

      {isMobile && (
        <div className="absolute z-10 px-3 py-1 text-xs text-white rounded-full bottom-4 right-4 bg-white/10 backdrop-blur-sm">
          Swipe ← →
        </div>
      )}
    </div>
  );
}
