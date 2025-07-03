import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, X } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 4000);
      return;
    }

    setIsSubmitting(true);
    await new Promise(res => setTimeout(res, 2000));

    const isSuccess = Math.random() > 0.2;
    setSubmitStatus(isSuccess ? 'success' : 'error');
    setIsSubmitting(false);

    if (isSuccess) {
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '', phone: '' });
    }

    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4 lg:px-12 overflow-hidden">
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
          backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 lg:p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>

          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-3 p-4 rounded-lg ${
                submitStatus === 'success' ? 'bg-green-800/20 text-green-200' : 'bg-red-800/20 text-red-200'
              } mb-6`}
            >
              {submitStatus === 'success' ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
              <p>
                {submitStatus === 'success'
                  ? 'Message envoyé avec succès !'
                  : 'Erreur lors de l’envoi. Veuillez réessayer.'}
              </p>
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <Input name="firstName" label="Prénom" value={formData.firstName} onChange={handleChange} dark />
            <Input name="lastName" label="Nom" value={formData.lastName} onChange={handleChange} dark />
          </div>
          <Input name="email" label="Email" type="email" value={formData.email} onChange={handleChange} dark />
          <Input name="phone" label="Téléphone" type="tel" value={formData.phone} onChange={handleChange} dark />
          <Input name="subject" label="Objet" value={formData.subject} onChange={handleChange} dark />

          <div className="mt-4">
            <label className="block font-medium mb-2 text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-4 border border-white/30 bg-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 text-white placeholder-white/60"
              placeholder="Décrivez votre projet..."
            />
          </div>

          <motion.button
            onClick={handleSubmit}
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <span className="loading loading-spinner loading-sm"></span> Envoi en cours...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" /> Envoyer le message
              </>
            )}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="space-y-8"
        >
          <ContactCard icon={<Mail />} title="Email" value="contact@agence-digitale.com" />
          <ContactCard icon={<Phone />} title="WhatsApp" value="+33 6 12 34 56 78" />
          <ContactCard icon={<MapPin />} title="Adresse" value={<><span>123 Avenue de l’Innovation<br />75001 Paris, France</span></>} />
          <motion.div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-3">Pourquoi nous choisir ?</h3>
            <ul className="list-disc list-inside text-orange-100">
              <li>Expertise en marketing digital</li>
              <li>Solutions personnalisées</li>
              <li>Suivi professionnel</li>
              <li>Résultats mesurables</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Input = ({ name, label, type = 'text', value, onChange, dark = false }) => (
  <div className="mt-4">
    <label htmlFor={name} className={`block font-medium mb-2 ${dark ? 'text-white' : 'text-gray-700'}`}>{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full p-4 border ${dark ? 'border-white/30 bg-white/10 text-white placeholder-white/60' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all`}
      placeholder={label}
    />
  </div>
);

const ContactCard = ({ icon, title, value }) => (
  <motion.div whileHover={{ scale: 1.03 }} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow hover:shadow-md transition-all">
    <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm">{value}</p>
    </div>
  </motion.div>
);

export default ContactForm;
