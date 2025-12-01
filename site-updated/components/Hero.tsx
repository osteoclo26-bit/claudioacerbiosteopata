import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Activity, Bone, HeartPulse, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-slate-50">
      
      {/* 1. Background Pattern - Dots for texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none"></div>
      
      {/* 2. Gradient Overlay - Richer Blue to reduce whiteness */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full bg-gradient-to-bl from-blue-200/40 via-indigo-100/30 to-transparent -z-10 lg:rounded-l-[100px]" />
      
      {/* 3. Animated Blobs - Deeper colors */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-96 h-96 bg-blue-300/30 rounded-full blur-[80px] -z-10" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-300/30 rounded-full blur-[80px] -z-10" 
      />

      {/* Floating Background Icons (Decoration) */}
      <motion.div 
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/4 left-[5%] text-blue-300 hidden lg:block"
      >
        <Bone size={64} strokeWidth={1.5} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/3 right-[5%] text-indigo-300 hidden lg:block"
      >
        <HeartPulse size={64} strokeWidth={1.5} />
      </motion.div>


      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left relative z-20"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white border border-blue-200 shadow-sm text-blue-700 text-xs font-bold tracking-wider mb-6 mx-auto lg:mx-0"
            >
              <Activity size={14} />
              <span>MONTE CREMASCO & DOMICILIO</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Il tuo benessere, <br />
              <span className="text-blue-600 drop-shadow-sm">
                in mani sicure.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              Osteopatia e Massoterapia per ritrovare equilibrio e salute. 
              Un percorso terapeutico personalizzato, basato sull'ascolto.
            </p>

            {/* Feature List to fill space */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10 text-sm font-medium text-slate-600">
               <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg border border-slate-100">
                  <CheckCircle2 size={16} className="text-blue-600" /> Osteopatia
               </div>
               <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg border border-slate-100">
                  <CheckCircle2 size={16} className="text-blue-600" /> Massoterapia
               </div>
               <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg border border-slate-100">
                  <CheckCircle2 size={16} className="text-blue-600" /> Domicilio
               </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pb-4">
              <a 
                href="#prenota" 
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group shadow-lg shadow-blue-200 relative z-30"
              >
                Prenota una Visita
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servizi" 
                className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 hover:border-blue-300 hover:text-blue-700 hover:shadow-lg transition-all duration-300 relative z-30"
              >
                Scopri il Metodo
              </a>
            </div>
          </motion.div>

          {/* Image & Cards Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0"
          >
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-visible w-full max-w-md z-10">
              
              {/* Back framing element */}
              <div className="absolute top-4 -right-4 w-full h-full border-2 border-blue-600/20 rounded-3xl z-0 hidden md:block"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-slate-200">
                 <img 
                    src="claudio-02.jpg" 
                    alt="Claudio Acerbi Osteopata" 
                    className="w-full h-auto object-cover object-top transform hover:scale-105 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Rimossi i badge che causavano sovrapposizione */}

            </div>

            {/* Decorative background blur behind image */}
            <div className="absolute -top-10 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute bottom-10 left-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-[60px] -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;