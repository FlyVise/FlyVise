import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useContact } from '../context/ContactContext';

const HeroSection: React.FC = () => {
  const { openContact } = useContact();

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center text-center px-8">
      <div className="absolute inset-0 gradient-bg -z-10" aria-hidden="true" />
      
      <div className="max-w-6xl px-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 uppercase tracking-wider leading-tight">
          Transform Your Brand{' '}
          <span className="text-highlight">Beyond Expectations</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 opacity-90">
          We craft digital experiences that captivate and convert
        </p>
        
        <button
          onClick={openContact}
          className="bg-white text-black border-none px-8 py-4 md:px-10 md:py-4 text-lg md:text-xl font-semibold rounded-full cursor-pointer transition-all duration-300 relative overflow-hidden pulse-animation hover:transform hover:-translate-y-2 hover:shadow-xl active:transform active:-translate-y-1"
          aria-label="Get started with our services"
        >
          <span className="relative z-10">Let's Create Magic</span>
          <div className="absolute inset-0 bg-white/10 scale-x-0 origin-right transition-transform duration-400 ease-out hover:scale-x-100 hover:origin-left" />
        </button>
      </div>
      
      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-transparent border-none text-white cursor-pointer opacity-70 transition-all duration-300 p-0 bounce-animation hover:opacity-100 hover:scale-110"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={30} />
      </button>
    </section>
  );
};

export default HeroSection;