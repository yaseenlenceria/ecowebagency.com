import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Philosophy', href: '#about' },
    { name: 'Insights', href: '#insights' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-eco-600 rounded-lg flex items-center justify-center text-white">
              <Leaf size={20} fill="currentColor" />
            </div>
            <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled || mobileMenuOpen ? 'text-slate-900' : 'text-slate-900 lg:text-slate-900'}`}>
              EcoAgency
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-eco-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Start Project
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-eco-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col space-y-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-medium text-slate-700 hover:text-eco-600 py-2 border-b border-slate-50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <Button className="w-full" onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView(); }}>
              Start Project
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;