import React from 'react';
import Button from './Button';
import { ArrowRight, Globe, Zap, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-eco-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white clip-path-slant hidden lg:block" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-eco-200/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur border border-slate-200 rounded-full px-4 py-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-eco-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Accepting New Clients for Q4
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-slate-900 leading-tight">
              Digital excellence, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-600 to-teal-500">
                sustainably built.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
              We craft high-performance websites that look expensive but cost the earth nothing. 
              Minimal carbon footprint, maximum impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                Let's Talk
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="white" size="lg" onClick={() => document.getElementById('work')?.scrollIntoView({behavior: 'smooth'})}>
                View Portfolio
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-8 text-slate-500">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-eco-600" />
                <span className="text-sm font-medium">Carbon Neutral</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-eco-600" />
                <span className="text-sm font-medium">99+ PageSpeed</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-eco-600" />
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Hero Image / Visual */}
          <div className="relative hidden lg:block h-[600px] w-full">
             <div className="absolute inset-0 bg-slate-200 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700">
                <img 
                  src="https://picsum.photos/800/1000?grayscale" 
                  alt="Minimalist Architecture" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                   <p className="font-serif text-2xl">Nordic Furniture Co.</p>
                   <p className="text-sm text-slate-200">Rebranding & E-commerce • 2024</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;