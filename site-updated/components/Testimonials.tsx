import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const reviews: TestimonialItem[] = [
  {
    name: "Marco Rossi",
    role: "Runner amatoriale",
    text: "Soffrivo di una pubalgia che mi impediva di correre da mesi. Grazie ai trattamenti di Claudio, non solo il dolore è sparito, ma ho imparato a gestire meglio la mia postura durante la corsa. Professionista serio e preparato."
  },
  {
    name: "Elena Bianchi",
    role: "Impiegata",
    text: "Lavoro 8 ore al computer e la cervicale era diventata un incubo. Claudio ha saputo sciogliere tensioni che mi portavo dietro da anni. L'approccio a domicilio è stato comodissimo per i miei orari."
  },
  {
    name: "Giulia Verdi",
    role: "Mamma",
    text: "Ho portato il mio bambino di 3 mesi per problemi di coliche e sonno. Con poche sedute delicate di osteopatia pediatrica la situazione è migliorata drasticamente. Claudio è stato dolcissimo con il piccolo."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonianze" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
          Cosa dicono i miei pazienti
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
              <Quote className="absolute top-6 right-6 text-blue-200" size={48} />
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 mb-6 italic leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{review.name}</h4>
                <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;