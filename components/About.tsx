import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -top-10 -left-10 w-64 h-64 bg-eco-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000" />
             
             <div className="relative grid grid-cols-2 gap-4">
               <img 
                 src="https://picsum.photos/seed/team1/400/500" 
                 alt="Our Team working" 
                 className="rounded-2xl shadow-xl translate-y-8 object-cover h-64 w-full"
               />
               <img 
                 src="https://picsum.photos/seed/team2/400/500" 
                 alt="Design meeting" 
                 className="rounded-2xl shadow-xl object-cover h-64 w-full"
               />
               <div className="col-span-2 bg-slate-900 text-white p-8 rounded-2xl shadow-xl mt-4">
                 <p className="font-serif text-2xl italic">"We believe the internet should be a forest, not a landfill."</p>
                 <p className="mt-4 text-sm text-slate-400 font-sans tracking-wide uppercase">- Elena Ross, Founder</p>
               </div>
             </div>
          </div>

          <div>
            <span className="uppercase tracking-widest text-sm font-semibold mb-2 block text-eco-600">Our Philosophy</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-900 mb-6">
              Designing for people <br/> and the planet.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              The internet accounts for 3.7% of global greenhouse emissions. We're changing that. 
              EcoAgency combines award-winning aesthetics with rigorous code efficiency. 
              We build digital products that are lightning fast, accessible to all, and gentle on the environment.
            </p>

            <ul className="space-y-4">
              {[
                "100% Green Energy Hosting",
                "Accessibility First (WCAG 2.1 AA+)",
                "Low-Data Design Methodology",
                "Transparent Carbon Reporting"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-eco-500 flex-shrink-0" />
                  <span className="text-slate-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;