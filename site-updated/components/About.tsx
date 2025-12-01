import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Layers, Brain, PersonStanding } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="chi-sono" className="py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          <div className="md:w-5/12 relative">
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-200/50 rounded-2xl transform -rotate-2"></div>
                <img 
                  src="profile.jpg" 
                  alt="Claudio Acerbi" 
                  className="rounded-xl shadow-xl w-full relative z-10 object-cover aspect-[4/5]" 
                />
              </div>

              <div className="mt-8 space-y-4">
                 <div className="flex items-center gap-3 text-slate-800 bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                    <CheckCircle2 className="text-blue-600" size={24} />
                    <span className="font-semibold">Tirocinio Clinico Universitario</span>
                 </div>
                 <div className="flex items-center gap-3 text-slate-800 bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                    <CheckCircle2 className="text-blue-600" size={24} />
                    <span className="font-semibold">Esperienza Sportiva Professionale</span>
                 </div>
                 <div className="flex items-center gap-3 text-slate-800 bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                    <CheckCircle2 className="text-blue-600" size={24} />
                    <span className="font-semibold">Trattamenti anche a Domicilio</span>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-8 h-px bg-blue-600"></span> Chi Sono
              </h4>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Ascolto, Analisi e <br/>
                <span className="text-blue-600">Terapia Manuale.</span>
              </h2>
              
              <div className="prose prose-lg text-slate-600 leading-relaxed mb-10">
                <p>
                  Il mio obiettivo è accompagnare ogni paziente verso il recupero funzionale e il benessere, attraverso un percorso terapeutico chiaro e condiviso.
                </p>
                <p>
                  La mia formazione accademica e l'esperienza sul campo mi permettono di integrare diverse metodiche osteopatiche. Credo fermamente che ogni corpo racconti una storia diversa: per questo motivo, ogni trattamento è unico e studiato sulle specifiche necessità della persona, non sul protocollo standard.
                </p>
              </div>

              {/* Focus Blocks */}
              <div className="grid gap-6">
                <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                      <Layers size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Osteopatia Viscerale</h3>
                      <p className="text-slate-600 text-sm">
                        Valutazione e trattamento della mobilità degli organi interni (come stomaco e intestino) per migliorare la funzione digestiva e ridurre le tensioni riflesse sulla colonna vertebrale.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-50 p-3 rounded-xl text-purple-600">
                      <Brain size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Osteopatia Cranio-Sacrale</h3>
                      <p className="text-slate-600 text-sm">
                        Tecniche manuali delicate che agiscono sulle strutture del cranio e sul sacro, ideali per alleviare stress, cefalee e favorire un profondo riequilibrio del sistema nervoso autonomo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600">
                      <PersonStanding size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Approccio Strutturale</h3>
                      <p className="text-slate-600 text-sm">
                        Manipolazioni e mobilizzazioni precise per ripristinare la corretta meccanica articolare, migliorare la postura e risolvere limitazioni di movimento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;