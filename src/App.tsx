import React from 'react';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ContactOverlay from './components/ContactOverlay';
import { ContactProvider } from './context/ContactContext';

function App() {
  return (
    <ContactProvider>
      <div className="min-h-screen">
        <HeroSection />
        <PortfolioSection />
        <ContactOverlay />
      </div>
    </ContactProvider>
  );
}

export default App;