import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-stone-50 selection:bg-eco-200 selection:text-eco-900">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Overlapping section for AI tool to bridge Hero and Services */}
        <div className="relative z-20 -mt-24 mb-24">
          <AIConsultant />
        </div>

        <Services />
        <About />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;