import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, MessageSquare, TrendingUp, Bell, Users, Mail, ArrowRight, Search, Target, Brain, Megaphone, TrendingDown, BarChart3, Zap } from 'lucide-react';

const BlogComponent = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  // Données mockées pour les articles
  const articles = [
    {
      id: 1,
      title: "L'IA révolutionne le marketing digital en 2025",
      summary: "Découvrez comment l'intelligence artificielle transforme les stratégies marketing et booste les performances des campagnes digitales.",
      author: "Sophie Martin",
      date: "2025-07-01",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      category: "IA",
      tags: ["IA", "Marketing", "Tendance2025"],
      bgColor: "from-purple-500 to-pink-500",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "SEO 2025 : Les nouvelles règles du jeu",
      summary: "Google met à jour ses algorithmes. Adaptez votre stratégie SEO pour rester en tête des résultats de recherche.",
      author: "Marc Dubois",
      date: "2025-06-28",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "SEO",
      tags: ["SEO", "Google", "Référencement"],
      bgColor: "from-green-500 to-teal-500",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Branding digital : Créer une identité forte",
      summary: "Les clés pour développer une marque authentique qui résonne avec votre audience sur tous les canaux digitaux.",
      author: "Laura Chen",
      date: "2025-06-25",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      category: "Branding",
      tags: ["Branding", "Identité", "Design"],
      bgColor: "from-blue-500 to-cyan-500",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Campagnes publicitaires : ROI maximisé",
      summary: "Optimisez vos campagnes Facebook et Google Ads pour obtenir un retour sur investissement exceptionnel.",
      author: "Thomas Rivera",
      date: "2025-06-22",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&h=300&fit=crop",
      category: "Campagnes",
      tags: ["Campagnes", "ROI", "Publicité"],
      bgColor: "from-red-500 to-orange-500",
      readTime: "8 min"
    },
    {
      id: 5,
      title: "Tendances marketing 2025 : Ce qui vous attend",
      summary: "Anticipez les grandes tendances qui vont façonner le marketing digital cette année et préparez-vous dès maintenant.",
      author: "Emma Johnson",
      date: "2025-06-20",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=300&fit=crop",
      category: "Tendances",
      tags: ["Tendance2025", "Marketing", "Innovation"],
      bgColor: "from-yellow-500 to-orange-500",
      readTime: "4 min"
    },
    {
      id: 6,
      title: "Analytics avancées : Mesurer l'impact réel",
      summary: "Maîtrisez les outils d'analyse pour transformer vos données en insights actionables et booster vos performances.",
      author: "Alex Smith",
      date: "2025-06-18",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "Analytics",
      tags: ["Analytics", "Data", "Performance"],
      bgColor: "from-indigo-500 to-purple-500",
      readTime: "10 min"
    }
  ];

  const categories = [
    { name: "Tous", icon: Zap, color: "from-slate-500 to-gray-500" },
    { name: "SEO", icon: Target, color: "from-green-500 to-teal-500" },
    { name: "Branding", icon: TrendingDown, color: "from-blue-500 to-cyan-500" },
    { name: "IA", icon: Brain, color: "from-purple-500 to-pink-500" },
    { name: "Campagnes", icon: Megaphone, color: "from-red-500 to-orange-500" },
    { name: "Tendances", icon: TrendingUp, color: "from-yellow-500 to-orange-500" },
    { name: "Analytics", icon: BarChart3, color: "from-indigo-500 to-purple-500" }
  ];
  
  const filteredArticles = activeFilter === 'Tous' 
    ? articles 
    : articles.filter(article => article.category === activeFilter);

  const popularArticles = articles.slice(0, 3);
  
  // Actualités en direct des réseaux sociaux
  const socialUpdates = [
    { 
      platform: "LinkedIn", 
      content: "🚀 Nouveau guide SEO 2025 disponible ! Découvrez les dernières techniques...", 
      time: "Il y a 2h",
      likes: 47,
      color: "from-blue-600 to-blue-700"
    },
    { 
      platform: "Twitter", 
      content: "💡 Thread sur l'optimisation des campagnes Meta Ads - 15 tips pratiques", 
      time: "Il y a 4h",
      likes: 89,
      color: "from-sky-500 to-sky-600"
    },
    { 
      platform: "Instagram", 
      content: "📊 Infographie : Les tendances du marketing digital en 2025", 
      time: "Il y a 6h",
      likes: 156,
      color: "from-pink-500 to-rose-500"
    },
    { 
      platform: "Facebook", 
      content: "🎯 Webinaire gratuit : Comment booster votre ROI avec l'IA", 
      time: "Il y a 8h",
      likes: 73,
      color: "from-blue-700 to-indigo-700"
    },
    { 
      platform: "YouTube", 
      content: "🎬 Nouvelle vidéo : Créer une stratégie de contenu qui convertit", 
      time: "Il y a 12h",
      likes: 234,
      color: "from-red-500 to-red-600"
    },
    { 
      platform: "TikTok", 
      content: "🔥 Viral : 5 erreurs à éviter en marketing digital", 
      time: "Il y a 1j",
      likes: 512,
      color: "from-slate-800 to-slate-900"
    }
  ];

  const recentComments = [
    { author: "Marie L.", article: "L'IA révolutionne le marketing", comment: "Excellent article, très instructif !", avatar: "M", time: "Il y a 1h" },
    { author: "Pierre K.", article: "SEO 2025", comment: "Merci pour ces conseils pratiques", avatar: "P", time: "Il y a 3h" },
    { author: "Julie M.", article: "Branding digital", comment: "Ça m'a aidé pour mon projet", avatar: "J", time: "Il y a 5h" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background animé du HeroSectionAbout */}
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
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Header */}
      <motion.div 
        className="relative z-10 pt-20 pb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 mb-6 border rounded-full bg-orange-500/20 border-orange-500/30"
            >
              <span className="text-sm font-medium text-orange-400">
                Blog Marketing Digital
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl"
            >
              Découvrez les{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                dernières tendances
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-2xl mx-auto text-xl text-gray-300"
            >
              Explorez nos articles et guides pour transformer votre stratégie digitale
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Section principale */}
          <div className="xl:col-span-3">
            {/* Filtres avec icônes */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative p-8 border shadow-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border-gray-700/50 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Search className="w-6 h-6 text-orange-500" />
                  Filtrer par catégorie
                </h2>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <motion.button
                        key={category.name}
                        onClick={() => setActiveFilter(category.name)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                          activeFilter === category.name
                            ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105 border-transparent`
                            : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className="w-4 h-4" />
                        {category.name}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Grille d'articles modernisée */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-sm shadow-2xl hover:shadow-orange-500/10 transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Badge catégorie */}
                    <div className="absolute top-4 right-4">
                      <div className={`flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${article.bgColor} text-white text-sm font-medium shadow-lg`}>
                        {(() => {
                          const category = categories.find(cat => cat.name === article.category);
                          const IconComponent = category?.icon || Zap;
                          return <IconComponent className="w-4 h-4" />;
                        })()}
                        {article.category}
                      </div>
                    </div>

                    {/* Temps de lecture */}
                    <div className="absolute top-4 left-4">
                      <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                        {article.readTime}
                      </div>
                    </div>

                    {/* Informations en bas de l'image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-4 text-white/90 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString('fr-FR')}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className={`w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r ${article.bgColor} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 group-hover:shadow-orange-500/20`}>
                      Lire l'article
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Sidebar modernisée */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Articles populaires */}
            <div className="relative p-6 border shadow-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                Articles populaires
              </h3>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <motion.div 
                    key={article.id} 
                    className="flex gap-3 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-16 h-16 object-cover rounded-xl group-hover:scale-105 transition-transform"
                      />
                      <div className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r ${article.bgColor} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm line-clamp-2 mb-1 text-white group-hover:text-orange-400 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {new Date(article.date).toLocaleDateString('fr-FR')} • {article.author}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Actualités en direct avec scroll */}
            <div className="relative p-6 border shadow-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <Zap className="w-5 h-5 text-orange-500" />
                Actualités en direct
              </h3>
              <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800 space-y-4">
                {socialUpdates.map((update, index) => (
                  <motion.div 
                    key={index} 
                    className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-orange-500/30 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${update.color}`}></div>
                      <span className="font-semibold text-sm text-white">{update.platform}</span>
                      <span className="text-xs text-gray-400 ml-auto">{update.time}</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">{update.content}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">❤️ {update.likes}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Derniers commentaires */}
            <div className="relative p-6 border shadow-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-orange-500" />
                Derniers commentaires
              </h3>
              <div className="space-y-4">
                {recentComments.map((comment, index) => (
                  <motion.div 
                    key={index} 
                    className="p-4 rounded-xl bg-gray-800/50 border-l-4 border-orange-500/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {comment.avatar}
                      </div>
                      <div>
                        <span className="font-semibold text-sm text-white">{comment.author}</span>
                        <p className="text-xs text-gray-400">{comment.time}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mb-1">sur: {comment.article}</p>
                    <p className="text-sm text-gray-300 italic">"{comment.comment}"</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="relative overflow-hidden p-6 border shadow-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl border-orange-500/30 backdrop-blur-sm">
              <div className="absolute top-4 right-4 w-20 h-20 bg-orange-500/20 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-3">
                  <Bell className="w-5 h-5 text-orange-400" />
                  Newsletter
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Recevez nos derniers articles et conseils marketing directement dans votre boîte mail.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                  />
                  <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium hover:shadow-lg transition-all">
                    <Mail className="w-4 h-4" />
                    S'abonner
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call-to-Action */}
      <motion.div 
        className="relative z-20 py-9"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Prêt à booster votre {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              marketing digital
            </span>
            ?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Rejoignez notre communauté de marketeurs et découvrez comment transformer votre présence digitale
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg transition-all">
              <Mail className="w-5 h-5" />
              Envoyez-nous un couriel
            </button>
            <button className="flex items-center gap-2 px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all">
              <Users className="w-5 h-5" />
              Rejoindre la communauté
            </button>
            <button className="flex items-center gap-2 px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all">
              Nos services
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogComponent;