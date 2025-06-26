import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      title: "L'IA révolutionne le Marketing Digital : Tendances 2025",
      excerpt:
        "Découvrez comment l'intelligence artificielle transforme les stratégies marketing et les nouveaux outils qui redéfinissent l'engagement client.",
      author: "Sarah Martinez",
      date: "15 Juin 2025",
      category: "Marketing Digital",
      readTime: "5 min",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      title: "Data Science : Optimiser votre ROI avec l'analyse prédictive",
      excerpt:
        "Apprenez à utiliser l'analyse prédictive pour anticiper les comportements clients et maximiser votre retour sur investissement.",
      author: "Thomas Dubois",
      date: "12 Juin 2025",
      category: "Data Science",
      readTime: "7 min",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&h=400&fit=crop",
      title: "Communication 360° : Stratégies multicanales efficaces",
      excerpt:
        "Les clés d'une communication intégrée qui fonctionne sur tous les canaux digitaux et traditionnels pour une expérience client unifiée.",
      author: "Emma Leroy",
      date: "8 Juin 2025",
      category: "Communication",
      readTime: "6 min",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen py-12 pt-1 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-orange-500 sm:text-4xl lg:text-5xl">
            Notre Blog
          </h2>
          <p className="max-w-xl mx-auto text-base text-gray-700 sm:text-lg">
            Explorez nos expertises en marketing digital, communication et
            science des données. Des insights concrets pour transformer votre
            stratégie.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <motion.article
            whileHover="hover"
            variants={hoverVariants}
            className="flex flex-col overflow-hidden transition-all duration-300 bg-white border border-orange-100 shadow-lg cursor-pointer rounded-2xl group md:flex-row"
          >
            <div className="relative overflow-hidden md:w-1/2">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="object-cover w-full transition-transform duration-500 h-60 md:h-full group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1 text-sm font-medium text-white bg-orange-500 rounded-full">
                  {articles[0].category}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between p-6 md:p-8 md:w-1/2">
              <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {articles[0].date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {articles[0].author}
                </div>
                <span className="font-medium text-orange-500">
                  {articles[0].readTime}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-orange-600 md:text-2xl">
                {articles[0].title}
              </h3>
              <p className="mb-4 text-base text-gray-700">
                {articles[0].excerpt}
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-medium text-orange-600 transition-all group-hover:gap-3"
              >
                Lire l'article
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.article>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2"
        >
          {articles.slice(1).map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              whileHover="hover"
              className="flex flex-col overflow-hidden transition-all duration-300 bg-white border border-orange-100 shadow-md cursor-pointer rounded-2xl group"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col h-full p-5">
                <div className="flex items-center gap-4 mb-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <span className="font-medium text-orange-500">
                    {article.readTime}
                  </span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-orange-600">
                  {article.title}
                </h4>
                <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                  {article.excerpt}
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 mt-auto font-medium text-orange-600 transition-all group-hover:gap-3"
                >
                  Lire l'article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 font-semibold text-white transition-all bg-orange-500 rounded-full shadow-lg hover:bg-orange-600"
            >
              <span>Découvrir tous nos articles</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <p className="mt-4 text-sm text-black">
            De milliers d'articles pour booster votre stratégie digitale
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogSection;
