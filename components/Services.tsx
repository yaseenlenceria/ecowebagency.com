import React from 'react';
import SectionHeading from './SectionHeading';
import { Layout, Cpu, Globe, Search, BarChart3, PenTool } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: "Sustainable Web Design",
    description: "Pixel-perfect UIs designed for energy efficiency. Dark mode defaults, efficient assets, and accessible UX."
  },
  {
    icon: Cpu,
    title: "Green Development",
    description: "Clean, semantic code using modern frameworks. Optimized for low CPU usage and faster load times."
  },
  {
    icon: Search,
    title: "Eco-SEO Strategy",
    description: "Rank higher while reducing digital waste. Technical SEO that aligns with search intent perfectly."
  },
  {
    icon: Globe,
    title: "Carbon-Neutral Hosting",
    description: "We deploy exclusively on servers powered by 100% renewable energy sources via Google Cloud & AWS."
  },
  {
    icon: BarChart3,
    title: "Performance Audits",
    description: "Deep dive analytics into your current digital footprint with actionable steps to reduce bloat."
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    description: "Impactful copywriting that converts. Less fluff, more value, leading to less scrolling and energy use."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Our Expertise" title="Holistic Digital Solutions" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-eco-100/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-eco-600 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-eco-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-medium text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;