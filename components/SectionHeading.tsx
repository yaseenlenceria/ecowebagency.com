import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  subtitle, 
  title, 
  alignment = 'center',
  light = false
}) => {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <span className={`uppercase tracking-widest text-sm font-semibold mb-2 block ${light ? 'text-eco-300' : 'text-eco-600'}`}>
        {subtitle}
      </span>
      <h2 className={`font-serif text-4xl md:text-5xl font-medium ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 bg-eco-500 rounded-full ${alignment === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;