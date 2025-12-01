import React from 'react';
import { Activity, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Activity />
              <span className="font-bold text-xl">Claudio Acerbi</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-6">
              Osteopata e Massoterapista professionale. Il mio obiettivo è il tuo benessere a 360 gradi, attraverso terapie manuali personalizzate ed efficaci.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/osteo.claudioacerbi/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Esplora</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#chi-sono" className="hover:text-blue-400 transition-colors">Chi Sono</a></li>
              <li><a href="#servizi" className="hover:text-blue-400 transition-colors">Servizi</a></li>
              <li><a href="#contatti" className="hover:text-blue-400 transition-colors">Prenota Visita</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legale</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Termini e Condizioni</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {currentYear} Claudio Acerbi. Tutti i diritti riservati.</p>
          <p className="mt-2 md:mt-0">Monte Cremasco (CR)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;