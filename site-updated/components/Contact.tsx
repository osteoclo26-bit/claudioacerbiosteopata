import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      alert("Grazie per il messaggio! Ti risponderò al più presto.");
      setFormStatus('idle');
    }, 1500);
  };

  return (
    <section id="contatti" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info Column */}
          <div className="lg:w-2/5 bg-blue-600 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contattami</h3>
              <p className="text-blue-100 mb-10 leading-relaxed">
                Hai domande sui trattamenti o vuoi prenotare una visita a Monte Cremasco o a domicilio? Scrivimi o chiamami senza impegno.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-blue-200 text-sm">Telefono</p>
                    <p className="text-lg font-semibold">+39 338 701 0789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-blue-200 text-sm">Email</p>
                    <p className="text-lg font-semibold break-all">osteclo26@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-blue-200 text-sm">Studio</p>
                    <p className="text-lg font-semibold">Monte Cremasco (CR)</p>
                    <p className="text-sm opacity-80 mt-1">& Disponibile a Domicilio</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Instagram className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-blue-200 text-sm">Instagram</p>
                    <a href="https://www.instagram.com/osteo.claudioacerbi/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-blue-200 transition-colors">
                      @osteo.claudioacerbi
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <a 
                href="https://wa.me/393387010789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl transition-colors font-bold shadow-lg"
               >
                 <MessageCircle size={24} />
                 Scrivimi su WhatsApp
               </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-3/5 p-10 lg:p-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Invia un messaggio</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                  <input required type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Il tuo nome" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefono</label>
                  <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Il tuo numero" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input required type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="La tua email" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Messaggio</label>
                <textarea required id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" placeholder="Descrivi brevemente il tuo problema o la tua richiesta..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                {formStatus === 'submitting' ? 'Invio in corso...' : (
                  <>
                    Invia Richiesta <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;