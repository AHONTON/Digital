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
    phone: "+229 01 975 076 01",
    email: "www.nazarethcommunication@gmail.com",
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

  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-32 h-32 bg-orange-500 rounded-full top-10 left-10 animate-pulse" />
        <div className="absolute w-24 h-24 bg-orange-400 rounded-full top-32 right-20 animate-bounce" />
        <div className="absolute w-20 h-20 bg-orange-600 rounded-full bottom-20 left-1/3 animate-ping" />
      </div>

      <div className="relative z-10 px-6 py-8 mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:space-x-10">
          <div className="flex flex-col flex-1 max-w-sm">
            <div className="flex items-center mb-4 space-x-3 group">
              <div className="flex items-center justify-center w-12 h-12 transition-transform bg-orange-500 rounded-lg group-hover:rotate-12 group-hover:scale-110">
                <span className="text-xl font-bold text-white">N</span>
              </div>
              <h3 className="text-2xl font-bold text-transparent select-none bg-gradient-to-r from-white to-orange-300 bg-clip-text">
                NAZARETH COMMUNICATION
              </h3>
            </div>

            <p className="mb-2 text-sm leading-relaxed text-justify text-gray-300">
              Votre partenaire stratégique en marketing digital. Nous
              transformons vos idées en succès mesurables grâce à notre
              expertise et notre passion pour l'innovation digitale.
            </p>

            <div className="w-full p-4 mt-4 transition-all duration-300 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
              <h4 className="mb-4 text-xl font-bold text-orange-500 transition-transform hover:scale-105 hover:translate-x-1">
                Suivez-nous
              </h4>
              <p className="mb-6 text-sm leading-relaxed text-center text-gray-300">
                Retrouvez-nous sur nos réseaux sociaux pour plus de contenus
                exclusifs.
              </p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={() => handleSocialClick(social.href)}
                    className={`w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 cursor-pointer ${social.color} hover:scale-125 hover:rotate-12`}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 w-full gap-6 lg:flex-row lg:space-x-6 lg:items-stretch">
            <div className="flex flex-col flex-1 p-6 transition-all duration-300 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
              <h4 className="mb-6 text-xl font-bold text-orange-500">
                Navigation
              </h4>
              <ul className="flex-grow space-y-3 text-sm">
                {menuLinks.map((link) => (
                  <li key={link.name}>
                    {link.sublinks ? (
                      <details className="group">
                        <summary className="flex items-center space-x-3 text-gray-300 cursor-pointer hover:text-orange-500">
                          {link.icon}
                          <span>{link.name}</span>
                        </summary>
                        <ul className="mt-2 ml-6 space-y-2">
                          {link.sublinks.map((sublink) => (
                            <li key={sublink.name}>
                              <a
                                href={sublink.href}
                                className="flex items-center space-x-2 text-gray-400 hover:text-orange-500 hover:translate-x-1"
                              >
                                {sublink.icon}
                                <span>{sublink.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <a
                        href={link.href}
                        className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 hover:translate-x-2"
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <div
                          className={`transition-all ${
                            hoveredLink === link.name
                              ? "text-orange-500 rotate-12 scale-110"
                              : "text-gray-500"
                          }`}
                        >
                          {link.icon}
                        </div>
                        <span className="group-hover:font-semibold">
                          {link.name}
                        </span>
                        <div
                          className={`transition-all ${
                            hoveredLink === link.name
                              ? "opacity-100 translate-x-1"
                              : "opacity-0"
                          }`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col flex-1 p-6 transition-all duration-300 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
              <h4 className="mb-6 text-xl font-bold text-orange-500">
                Contact
              </h4>
              <div className="flex-grow space-y-4 text-sm text-gray-300">
                <button
                  onClick={handlePhoneClick}
                  className="flex items-start w-full p-2 space-x-3 rounded-lg hover:text-orange-500 hover:bg-orange-500/10"
                >
                  <Phone className="w-4 h-4 mt-1" />
                  <span>{contactInfo.phone}</span>
                </button>
                <button
                  onClick={handleEmailClick}
                  className="flex items-start w-full p-2 space-x-3 rounded-lg hover:text-orange-500 hover:bg-orange-500/10"
                >
                  <Mail className="w-4 h-4 mt-1" />
                  <span className="text-xs break-all">{contactInfo.email}</span>
                </button>
                <button
                  onClick={handleAddressClick}
                  className="flex items-start w-full p-2 space-x-3 rounded-lg hover:text-orange-500 hover:bg-orange-500/10"
                >
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>{contactInfo.address}</span>
                </button>
                <div className="flex items-start p-2 space-x-3">
                  <Clock className="w-4 h-4 mt-1" />
                  <span>Lun-Ven: 8h-18h</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 p-6 transition-all duration-300 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
              <h4 className="mb-6 text-xl font-bold text-orange-500">
                Restez Connecté
              </h4>
              <p className="mb-6 text-sm leading-relaxed text-gray-300">
                Recevez nos dernières actualités et conseils marketing.
              </p>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email..."
                  className="w-full px-4 py-3 text-white placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500"
                />
                <button
                  onClick={handleSubmit}
                  className="flex items-center justify-center w-full py-3 space-x-2 font-semibold text-white transition-all rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-105 hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>S'abonner</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 mt-4 border-t border-gray-700">
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 mx-auto text-sm text-gray-400 max-w-7xl">
            <div className="flex items-center space-x-2">
              <span>© 2025 NAZARETH COMMUNICATION. Tous droits réservés.</span>
              <Heart className="w-4 h-4 text-orange-500 animate-pulse" />
              <span className="font-bold">Tech Afrique</span>
            </div>
            <div className="flex space-x-6">
              {["Politique de Confidentialité", "Mentions Légales", "Aide"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="transition hover:text-orange-500 hover:scale-105"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
