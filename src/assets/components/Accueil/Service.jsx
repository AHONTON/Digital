import React, { useState, useEffect } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&h=300&fit=crop&crop=center",
      title: "Réseaux sociaux",
      description:
        "Développez votre présence sur Facebook, Instagram, LinkedIn et TikTok. Créez une communauté engagée autour de votre marque."
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center",
      title: "Social media management",
      description:
        "Gestion complète de vos réseaux sociaux : création de contenu, programmation, engagement et analyse des performances."
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
      title: "Publicité en ligne",
      description:
        "Campagnes publicitaires Google Ads, Facebook Ads et LinkedIn Ads optimisées pour maximiser votre retour sur investissement."
    },
    {
      image: "https://www.naias-conseil.fr/wp-content/uploads/2023/07/Formation-Certification-Marketing-Digital-Naias--1024x576.jpeg",
      title: "Conseils et stratégies",
      description:
        "Élaboration de stratégies digitales personnalisées et conseil en marketing pour booster votre croissance en ligne."
    },
    {
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop&crop=center",
      title: "Développement web",
      description:
        "Création de sites web modernes, responsifs et optimisés SEO. De la vitrine e-commerce aux plateformes sur mesure."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
      title: "Automatisation marketing",
      description:
        "Mise en place d'outils d'automatisation pour optimiser vos campagnes email, lead nurturing et parcours client."
    }
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(40px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 4rem;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.8s ease-out forwards;
        }

        .animate-expandWidth {
          animation: expandWidth 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.25, 0.4, 0.25, 1);
        }

        .card-hover:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 40px rgba(249, 115, 22, 0.25);
        }

        .card-hover:hover .card-image {
          transform: scale(1.08);
        }

        .card-hover:hover .card-overlay {
          opacity: 1;
        }

        .card-hover:hover .card-number {
          background: #f97316;
          color: white;
          transform: scale(1.1) rotate(360deg);
        }

        .card-hover:hover .card-title {
          color: #f97316;
        }

        .card-hover:hover .card-line {
          width: 100%;
        }

        .button-hover {
          transition: all 0.3s cubic-bezier(0.25, 0.4, 0.25, 1);
        }

        .button-hover:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 30px rgba(249, 115, 22, 0.4);
        }

        .button-hover:hover .button-arrow {
          transform: translateX(6px) rotate(45deg);
        }

        .button-hover:active {
          transform: translateY(-1px) scale(0.98);
        }

        .bg-pattern {
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(249, 115, 22, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(249, 115, 22, 0.05) 0%, transparent 50%);
        }

        .text-gradient {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .border-gradient {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          height: 3px;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .card-hover:hover {
            transform: translateY(-8px) scale(1.01);
          }
        }

        @media (max-width: 480px) {
          .text-responsive {
            font-size: 2.5rem !important;
          }
          
          .description-responsive {
            font-size: 1rem !important;
            line-height: 1.5 !important;
          }
        }
      `}</style>

      <section
        className="pt-0 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden bg-pattern"
      >
        {/* Background decorations */}
        <div
          className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl animate-float"
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-orange-500/5 to-transparent rounded-full blur-3xl animate-pulse-custom"
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-responsive font-bold text-black mb-4 sm:mb-6 ${
                isVisible ? 'animate-fadeInScale' : 'opacity-0'
              }`}
            >
              Nos{' '}
              <span className="text-gradient">
                Services
              </span>
            </h2>
            <div
              className={`border-gradient mx-auto mb-4 sm:mb-6 rounded-full ${
                isVisible ? 'animate-expandWidth' : 'w-0'
              }`}
              style={{ animationDelay: '0.5s' }}
            ></div>
            <p
              className={`text-base sm:text-lg lg:text-xl description-responsive text-gray-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.4s' }}
            >
              Découvrez notre gamme complète de services pour propulser votre présence digitale vers de nouveaux sommets.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
              <article
                key={index}
                className={`card-hover bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl border border-gray-100 relative ${
                  isVisible ? 'animate-fadeInScale' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
              >
                {/* Image Container */}
                <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-image w-full h-full object-cover transition-all duration-500"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="card-overlay absolute inset-0 bg-gradient-to-t from-orange-500/80 via-orange-500/20 to-transparent opacity-0 transition-all duration-300"></div>

                  {/* Floating number */}
                  <div
                    className="card-number absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                  >
                    <span className="text-sm sm:text-lg font-bold text-orange-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="card-title text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>

                  {/* Decorative line */}
                  <div className="card-line h-0.5 sm:h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500 w-8 sm:w-12"></div>
                </div>

                {/* Card glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 hover:from-orange-500/5 hover:via-orange-500/10 hover:to-orange-500/5 transition-all duration-500 pointer-events-none"
                ></div>
              </article>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center px-4">
            <button
              className={`button-hover group relative inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full text-base sm:text-lg shadow-xl sm:shadow-2xl overflow-hidden transition-all duration-300 ${
                isVisible ? 'animate-fadeInScale' : 'opacity-0'
              }`}
              style={{ animationDelay: '1.2s' }}
              onClick={() => {
                console.log('Navigation vers /services');
              }}
            >
              <span className="relative z-10 mr-2 sm:mr-3">Voir tous les services</span>

              <div
                className="button-arrow relative z-10 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-white/20 rounded-full transition-all duration-300"
              >
                <span className="text-xs sm:text-sm">→</span>
              </div>

              {/* Button background animation */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services
