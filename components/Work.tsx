import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';

const projects = [
  {
    id: 1,
    title: "Oasis Architecture",
    category: "Web Design / Branding",
    image: "https://picsum.photos/seed/arch/800/600",
    stats: "40% Lower Bounce Rate"
  },
  {
    id: 2,
    title: "Pure Earth Skincare",
    category: "E-Commerce / Shopify",
    image: "https://picsum.photos/seed/skin/800/600",
    stats: "2.5s Faster Load Time"
  },
  {
    id: 3,
    title: "Urban Mobility App",
    category: "Product Design / UX",
    image: "https://picsum.photos/seed/tech/800/600",
    stats: "150k Active Users"
  },
  {
    id: 4,
    title: "Green Finance Corp",
    category: "Corporate Portal",
    image: "https://picsum.photos/seed/finance/800/600",
    stats: "Carbon Neutral Certified"
  }
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="mb-8 md:mb-0 text-center md:text-left w-full md:w-auto">
             <span className="uppercase tracking-widest text-sm font-semibold mb-2 block text-eco-600">Selected Work</span>
             <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-900">Digital Craftsmanship</h2>
          </div>
          <Button variant="outline" className="hidden md:inline-flex">View All Projects</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-eco-800 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {project.stats}
                </div>
              </div>
              <div>
                <span className="text-eco-600 text-sm font-semibold tracking-wider uppercase">{project.category}</span>
                <h3 className="text-2xl font-serif text-slate-900 mt-1 group-hover:text-eco-700 transition-colors">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Work;