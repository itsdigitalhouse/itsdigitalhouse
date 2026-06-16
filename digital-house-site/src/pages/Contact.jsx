import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactComponent from '../components/ContactComponent';
import FaqSection from '../components/FaqSection';
import ContactDetailsSection from '../components/ContactDetailsSection';
import ContactHero from '../components/ContactHero';

const Contact = () => {
  return (
    <div className="w-full bg-slate-950 text-white">
      <Helmet>
        <title>Contact Us | Its Digital House - Let's Build Something Great</title>
        <meta name="description" content="Get in touch with Its Digital House. Whether you need web design, SEO, digital marketing, AI solutions, or custom software — our global team is ready to help you grow." />
        <meta name="keywords" content="contact digital agency, hire digital agency, digital marketing consultation, web design quote, SEO consultation, contact Its Digital House, digital agency inquiry, schedule a call, project brief, digital agency contact" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Its Digital House" />
        <link rel="canonical" href="https://www.itsdigitalhouse.com/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | Its Digital House" />
        <meta property="og:description" content="Ready to build something extraordinary? Contact Its Digital House for web design, SEO, AI, and digital marketing services worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itsdigitalhouse.com/contact" />
        <meta property="og:site_name" content="Its Digital House" />
        <meta property="og:image" content="https://www.itsdigitalhouse.com/og-contact.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Its Digital House" />
        <meta name="twitter:description" content="Let's build something extraordinary together. Get in touch with our global digital agency team." />
        <meta name="twitter:site" content="@Itsdigitalhouse" />
        <meta name="twitter:image" content="https://www.itsdigitalhouse.com/og-contact.jpeg" />
      </Helmet>

      <ContactHero />
      <ContactComponent />
      <FaqSection />
      <ContactDetailsSection />
    </div>
  );
};

export default Contact;
