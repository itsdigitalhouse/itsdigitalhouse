import React from 'react';
import ContactComponent from '../components/ContactComponent';
import FaqSection from '../components/FaqSection';
import ContactDetailsSection from '../components/ContactDetailsSection';
import ContactHero from '../components/ContactHero';

const Contact = () => {
  return (
    <div className="w-full bg-slate-950 text-white">
      <ContactHero />
      <ContactComponent />
      <FaqSection />
      {/* Naya details, phone aur map wala section yahan add hogya */}
      <ContactDetailsSection />
    </div>
  );
};

export default Contact;