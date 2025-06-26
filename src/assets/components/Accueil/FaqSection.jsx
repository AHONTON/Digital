import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  MessageCircle,
  Users,
  DollarSign,
  Clock,
} from "lucide-react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      question:
        "Mon entreprise n'est pas visible, comment pouvez-vous nous aider ?",
      answer:
        "La première des choses à faire dans ce genre de situation est de procéder à un audit afin d'identifier les faiblesses en termes de communication et de les corriger rapidement. Ces faiblesses peuvent être : au niveau stratégique : est-ce que mes objectifs sont SMART ? Est-ce que je m'adresse à la bonne cible ? Est-ce que j'utilise les bons canaux ? Est-ce que je véhicule le bon message au bon moment ? ou au niveau opérationnel : est-ce que j'utilise efficacement mes canaux de communication ? Est-ce que je ne commets pas certaines erreurs ?",
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6 text-white" />,
      question:
        "Ma marque est nouvelle, quel accompagnement pouvez-vous me proposer ?",
      answer:
        "En tant qu'une nouvelle marque, il est primordial pour nous de définir les bases, si cela n'est pas encore fait. Nous vous accompagnerons dans la mise en place de vos premiers éléments de communication (Logo, charte graphique, brandbook, plaquette de présentation) qui serviront de boussole pour entreprendre les autres actions.",
    },
    {
      id: 3,
      icon: <DollarSign className="w-6 h-6 text-white" />,
      question:
        "Combien ça coûte de faire appel à votre agence de communication ?",
      answer:
        "Pour nous, chaque client est unique et a un besoin spécifique. Nous n'avons pas de tarifs standards qui s'appliquent à tous. En fonction de votre objectif et de vos besoins, nous vous proposons une offre sur mesure avec un meilleur rapport qualité-prix.",
    },
    {
      id: 4,
      icon: <Clock className="w-6 h-6 text-white" />,
      question: "Combien de temps pour obtenir un devis ?",
      answer:
        "Lors du premier appel téléphonique, nos spécialistes essaient de mieux comprendre vos besoins afin de vous faire une proposition de qualité adaptée à vos besoins et vos contraintes financières. L'idéal pour nous est de vous fournir une offre financière dans un délai compris entre 1 jour et 7 jours ouvrables.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-16 pt-1 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-orange-600">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="mb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-orange-600">
            Questions Fréquentes
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Voici quelques réponses claires à vos questions fréquentes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="transition-all bg-white border border-orange-100 shadow-md rounded-2xl hover:shadow-lg"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex items-start w-full px-6 py-6 text-left transition-colors hover:bg-orange-50"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-orange-500 rounded-xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-orange-500 mt-1 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index ? "max-h-[400px] mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="pl-4 pr-2 text-sm leading-relaxed text-gray-700 border-l-4 border-orange-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="p-10 pt-0 transition-all bg-white border border-orange-100 shadow-md rounded-3xl hover:shadow-xl">
            <h3 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl">
              Vous avez d'autres questions ?
            </h3>
            <p className="mb-6 text-lg text-gray-600">
              Notre équipe est disponible pour répondre à toutes vos
              préoccupations.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 text-lg font-semibold text-white transition-all bg-orange-500 rounded-full shadow-md hover:bg-orange-600 hover:shadow-lg"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
