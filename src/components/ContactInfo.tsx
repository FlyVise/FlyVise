import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactItems = [
    {
      icon: <MapPin size={20} />,
      title: 'Our Location',
      content: (
        <>
          USA - 1314 South Marquette Avenue<br />
          Minneapolis, MN 55403<br /><br />
          India - 279 Kalindi Kunj Road<br />
          Okhla New Delhi-25
        </>
      ),
    },
    {
      icon: <Phone size={20} />,
      title: 'Call Us',
      content: (
        <>
          +91 9818258748<br />
          +91 9953532373<br />
          Mon-Fri, 9am-5pm EST
        </>
      ),
    },
    {
      icon: <Mail size={20} />,
      title: 'Email Us',
      content: (
        <>
          contact@flyvise.in<br />
          response within 24 hours
        </>
      ),
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="flex-1 min-w-[300px] p-6 bg-white/5">
      <div className="space-y-5">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-9 h-9 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 text-white">
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="font-medium text-white mb-1">{item.title}</div>
              <div className="text-sm text-white/90 leading-relaxed">{item.content}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:transform hover:-translate-y-1"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;