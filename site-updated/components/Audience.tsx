import React from 'react';
import { motion } from 'framer-motion';

const Audience: React.FC = () => {
  const categories = [
    { title: "Sportivi", text: "Performance, prevenzione e recupero infortuni." },
    { title: "Sedentari", text: "Contro i dolori da ufficio e posture viziate." },
    { title: "Anziani", text: "Per mantenere mobilità e ridurre dolori artrosici." },
    { title: "Bambini", text: "Crescita armonica e trattamento di coliche." },
    { title: "Gravidanza", text: "Supporto al corpo che cambia e preparazione al parto." },
    { title: "Cronici", text: "Gestione di tensioni ricorrenti e stress fisico." },
  ];

  return (
    <section id="per-chi" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-slate-900 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 z-0 opacity-80"></div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="md:w-2/3">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">L'Osteopatia è per tutti.</h2>
                <p className="text-slate-300 text-lg max-w-2xl">
                    Non importa l'età o lo stile di vita: il mio obiettivo è adattare il trattamento alle tue esigenze specifiche.
                </p>
            </div>
            <div className="md:w-1/3 flex justify-start md:justify-end">
                <a href="#prenota" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-slate-900 transition-all font-medium">
                    Inizia il tuo percorso
                </a>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all group text-center"
            >
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{cat.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{cat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;