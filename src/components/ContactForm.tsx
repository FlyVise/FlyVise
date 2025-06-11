import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = 'Please enter your full name (at least 3 characters)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^\+?[\d\s\-()]{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (e.g., +1234567890)';
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Please enter your message (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mgvkjnlb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 min-w-[300px] p-6">
      <form onSubmit={handleSubmit} className="space-y-5">
        {submitStatus === 'success' && (
          <div className="p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-100 text-center font-medium">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-100 text-center font-medium">
            Oops! Something went wrong. Please try again later.
          </div>
        )}

        <div>
          <label htmlFor="name" className="block mb-2 font-medium text-sm">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your name"
            className={`w-full p-3 glass-bg rounded-lg text-white placeholder-white/60 transition-all duration-300 focus:outline-none focus:border-white/50 focus:shadow-lg ${
              errors.name ? 'border-red-500' : 'border-white/30'
            }`}
          />
          {errors.name && (
            <div className="text-red-400 text-xs mt-1">{errors.name}</div>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium text-sm">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
            className={`w-full p-3 glass-bg rounded-lg text-white placeholder-white/60 transition-all duration-300 focus:outline-none focus:border-white/50 focus:shadow-lg ${
              errors.email ? 'border-red-500' : 'border-white/30'
            }`}
          />
          {errors.email && (
            <div className="text-red-400 text-xs mt-1">{errors.email}</div>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 font-medium text-sm">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className={`w-full p-3 glass-bg rounded-lg text-white placeholder-white/60 transition-all duration-300 focus:outline-none focus:border-white/50 focus:shadow-lg ${
              errors.phone ? 'border-red-500' : 'border-white/30'
            }`}
          />
          {errors.phone && (
            <div className="text-red-400 text-xs mt-1">{errors.phone}</div>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium text-sm">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            placeholder="Type your message here"
            rows={5}
            className={`w-full p-3 glass-bg rounded-lg text-white placeholder-white/60 transition-all duration-300 focus:outline-none focus:border-white/50 focus:shadow-lg resize-vertical ${
              errors.message ? 'border-red-500' : 'border-white/30'
            }`}
          />
          {errors.message && (
            <div className="text-red-400 text-xs mt-1">{errors.message}</div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-4 bg-white text-black rounded-lg font-semibold cursor-pointer transition-all duration-300 mt-3 hover:transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <div className="spinner mr-2" />
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;