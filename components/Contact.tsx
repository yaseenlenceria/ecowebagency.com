import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading subtitle="Get in Touch" title="Ready to make an impact?" light />

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          <div className="space-y-8">
             <h3 className="text-2xl font-serif">Let's build something extraordinary.</h3>
             <p className="text-slate-300 leading-relaxed">
               Whether you need a complete rebrand or a high-performance web platform, we're here to help you navigate the digital landscape sustainably.
             </p>

             <div className="space-y-6 pt-4">
               <div className="flex items-start space-x-4">
                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                   <Mail className="w-5 h-5 text-eco-400" />
                 </div>
                 <div>
                   <p className="text-sm text-slate-400 uppercase tracking-wide">Email Us</p>
                   <a href="mailto:hello@ecoagency.com" className="text-lg font-medium hover:text-eco-400 transition-colors">hello@ecoagency.com</a>
                 </div>
               </div>

               <div className="flex items-start space-x-4">
                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                   <Phone className="w-5 h-5 text-eco-400" />
                 </div>
                 <div>
                   <p className="text-sm text-slate-400 uppercase tracking-wide">Call Us</p>
                   <p className="text-lg font-medium">+44 (0) 20 7123 4567</p>
                 </div>
               </div>

               <div className="flex items-start space-x-4">
                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                   <MapPin className="w-5 h-5 text-eco-400" />
                 </div>
                 <div>
                   <p className="text-sm text-slate-400 uppercase tracking-wide">Studio</p>
                   <p className="text-lg font-medium">12 Green Way, Shoreditch<br/>London, E1 6AN</p>
                 </div>
               </div>
             </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-eco-500 focus:ring-1 focus:ring-eco-500 transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-eco-500 focus:ring-1 focus:ring-eco-500 transition-all"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
                <textarea 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-eco-500 focus:ring-1 focus:ring-eco-500 transition-all"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <Button variant="primary" size="lg" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;