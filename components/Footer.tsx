import React from 'react';
import { Leaf, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-eco-900 text-eco-500 rounded-lg flex items-center justify-center">
                <Leaf size={20} />
              </div>
              <span className="text-2xl font-serif font-bold text-white">EcoAgency</span>
            </div>
            <p className="max-w-md leading-relaxed text-slate-500">
              A premium digital agency dedicated to sustainable web practices. 
              We build the future of the web, without costing the earth.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Sitemap</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-eco-500 transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-eco-500 transition-colors">Work</a></li>
              <li><a href="#about" className="hover:text-eco-500 transition-colors">Philosophy</a></li>
              <li><a href="#contact" className="hover:text-eco-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-eco-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-eco-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-eco-500 transition-colors">Sustainability Report</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Eco Web Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
             <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
             <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
             <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;