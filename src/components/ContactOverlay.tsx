import React from 'react';
import { X } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactOverlay: React.FC = () => {
  const { isContactOpen, closeContact } = useContact();

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeContact();
    }
  };

  if (!isContactOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-5 transition-all duration-300"
      onClick={handleOverlayClick}
    >
      <button
        onClick={closeContact}
        className="absolute top-5 right-5 glass-bg w-10 h-10 rounded-full text-white text-xl cursor-pointer transition-all duration-300 hover:bg-white/20 hover:rotate-90 flex items-center justify-center"
        aria-label="Close contact form"
      >
        <X size={20} />
      </button>
      
      <div className="w-full max-w-4xl glass-bg rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 scale-100">
        <div className="p-6 text-center border-b border-white/10">
          <h2 className="text-3xl font-semibold text-highlight">Contact Us</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default ContactOverlay;