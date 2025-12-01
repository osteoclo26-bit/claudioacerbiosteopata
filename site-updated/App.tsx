import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Audience from './components/Audience';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-blue-200 relative">
      {/* Global decorative background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute top-[40%] -right-[10%] w-[30%] h-[50%] bg-cyan-100/30 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-indigo-100/30 rounded-full blur-[80px] opacity-40"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Audience />
          <Booking />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;