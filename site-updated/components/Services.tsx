import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bone, 
  Activity, 
  HandHelping, // Mani per massaggio
  AlignVerticalJustifyCenter, // Simil-colonna vertebrale
  Brain, // Testa/Cervello
  Trophy, // Sport
  Baby, 
  UserPlus, 
  Move, 
  Orbit,
  Ghost,
  Bean // Simbolo organico/stomaco
} from 'lucide-react';
import { ServiceItem } from '../types';

const specializedServices: ServiceItem[] = [
  {
    title: "Osteopatia Viscerale",
    description: "Trattamento delle tensioni degli organi interni (stomaco, intestino) che spesso causano dolori riflessi alla schiena e alterano la postura.",
    icon: Orbit
  },
  {
    title: "Osteopatia Cranio-Sacrale",
    description: "Tecniche dolci e non invasive per riequilibrare il sistema nervoso, ideali per mal di testa, stress, vertigini e disturbi del sonno.",
    icon: Ghost
  }
];

const standardServices: ServiceItem[] = [
  {
    title: "Osteopatia Strutturale",
    description: "Manipolazioni precise per ripristinare la mobilità articolare della colonna e degli arti.",
    icon: Bone
  },
  {
    title: "Massoterapia Decontratturante",
    description: "Massaggi manuali profondi per sciogliere contratture, tensioni muscolari e migliorare la circolazione.",
    icon: HandHelping
  },
  {
    title: "Trattamento Lombalgia",
    description: "Cura specifica per mal di schiena acuto, cronico e sciatalgie, lavorando sulla colonna.",
    icon: AlignVerticalJustifyCenter
  },
  {
    title: "Trattamento Cervicalgia",
    description: "Risoluzione di dolori al collo, torcicollo e cefalee tensive lavorando sulla zona cervicale.",
    icon: Brain
  },
  {
    title: "Osteopatia Sportiva",
    description: "Ottimizzazione della performance, gestione dei traumi e recupero per atleti.",
    icon: Trophy
  },
  {
    title: "Osteopatia Pediatrica",
    description: "Supporto delicato per coliche, reflusso e plagiocefalia nei neonati.",
    icon: Baby
  },
  {
    title: "Gravidanza & Post-Parto",
    description: "Benessere per la mamma, alleviando i dolori del cambiamento corporeo.",
    icon: UserPlus
  },
  {
    title: "Osteopatia Viscerale",
    description: "Tecniche manuali per il benessere di stomaco e intestino, migliorando digestione e postura.",
    icon: Bean
  }
];

const Services: React.FC = () => {
  return (
    <section id="servizi" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Trattamenti Specializzati</h2>
          <p className="text-slate-600 text-lg">
            Dalle tecniche viscerali profonde al rilassamento muscolare: un ventaglio completo di terapie per ogni necessità.
          </p>
        </div>

        {/* Featured Specializations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {specializedServices.map((service, index) => (
            <motion.div
              key={`spec-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -mr-8 -mt-8 z-0 group-hover:scale-110 transition-transform"></div>
              
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg shadow-blue-200">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-4 mb-8">
            <span className="h-px bg-slate-200 flex-grow"></span>
            <span className="text-slate-400 text-sm font-semibold uppercase tracking-widest">Tutti i Servizi</span>
            <span className="h-px bg-slate-200 flex-grow"></span>
        </div>

        {/* Standard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standardServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={24} strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;