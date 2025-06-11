import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Smartphone, Info, Images, Download, Play } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      observer.observe(portfolioSection);
    }

    return () => observer.disconnect();
  }, []);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Design' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'branding', label: 'Branding' },
    { key: 'ecommerce', label: 'E-commerce' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeFilter);

  const getIcon = (type: string) => {
    switch (type) {
      case 'demo': return <ExternalLink size={16} />;
      case 'code': return <Github size={16} />;
      case 'app-store': return <Smartphone size={16} />;
      case 'play-store': return <Smartphone size={16} />;
      case 'case-study': return <Info size={16} />;
      case 'gallery': return <Images size={16} />;
      case 'download': return <Download size={16} />;
      case 'video': return <Play size={16} />;
      default: return <ExternalLink size={16} />;
    }
  };

  return (
    <section 
      id="portfolio" 
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      }}
    >
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='1' fill='rgba(255,255,255,0.05)'%3E%3C/circle%3E%3Ccircle cx='75' cy='75' r='1' fill='rgba(255,255,255,0.03)'%3E%3C/circle%3E%3Ccircle cx='50' cy='10' r='0.5' fill='rgba(255,255,255,0.04)'%3E%3C/circle%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grain)'%3E%3C/rect%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-15 fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-highlight uppercase tracking-wider">
            Our Creative Works
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Explore our latest projects and see how we bring ideas to life through innovative design and cutting-edge technology
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 glass-bg rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-orange-400 to-pink-500 border-transparent'
                  : 'hover:bg-white/20 hover:border-white/40 hover:transform hover:-translate-y-1 hover:shadow-lg'
              }`}
            >
              <span className="relative z-10">{filter.label}</span>
              {activeFilter !== filter.key && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-500 hover:translate-x-full" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-bg rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-white/40 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 transition-all duration-300 hover:bg-black/10" />
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 mb-3 font-medium">
                  {project.categoryLabel}
                </span>
                
                <h3 className="text-xl font-semibold text-white mb-2 transition-all duration-300 hover:text-highlight">
                  {project.title}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-xl text-xs text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.type}
                      href={link.url}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        link.type === 'demo'
                          ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:from-orange-500 hover:to-pink-600'
                          : 'glass-bg hover:bg-white/20 hover:transform hover:-translate-y-1 hover:shadow-md'
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {getIcon(link.type)}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;