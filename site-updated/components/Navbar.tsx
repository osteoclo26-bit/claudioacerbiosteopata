import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Chi Sono', href: '#chi-sono' },
    { name: 'Servizi', href: '#servizi' },
    { name: 'Per Chi', href: '#per-chi' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          {/* Logo container aggiornato: non più rotondo per evitare di tagliare il logo rettangolare/quadrato */}
          <div className="h-10 w-auto md:h-12 flex items-center justify-center bg-transparent">
             <img src="logo.png" alt="Logo Claudio Acerbi" className="h-full w-auto object-contain rounded-md" />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg md:text-xl leading-none ${isScrolled ? 'text-slate-800' : 'text-slate-900 md:text-slate-800'}`}>Claudio Acerbi</span>
            <span className={`text-[10px] md:text-xs font-medium tracking-wider ${isScrolled ? 'text-slate-500' : 'text-slate-600 md:text-slate-600'}`}>OSTEOPATA & MASSOTERAPISTA</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#prenota"
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Prenota Ora
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800 focus:outline-none bg-white/50 p-2 rounded-lg backdrop-blur-sm hover:bg-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4 border-t border-slate-100 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 font-medium py-2 border-b border-slate-100 hover:text-blue-600 pl-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#prenota"
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white text-center py-3 rounded-lg font-medium shadow-md mt-2"
          >
            Prenota Ora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;