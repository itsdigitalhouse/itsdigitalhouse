import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Insights from './pages/Insights';
import ScrollToTop from './components/ScrollToTop';
// import WelcomePopup from './components/WelcomePopup';
import GlobalLoader from './components/GlobalLoader';
import ChatWidget from './components/ChatWidget'; // 🚀 AI Chat Bot Widget Import Kiya

import ServiceDetailPage from './components/ServiceDetailPage';
import SolutionDetailPage from './components/SolutionDetailPage'; // 🚀 Naya Dynamic Solution Page Import Kiya

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleWindowLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    };

    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad);
      return () => window.removeEventListener('load', handleWindowLoad);
    }
  }, []);

  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white relative">
        <Navbar />
        {/* <WelcomePopup /> */}

        <main>
          {/* Routes ke andar sirf woh pages hain jin par content show hoga */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/insights" element={<Insights />} /> 

            {/* SERVICES DYNAMIC ROUTE */}
            <Route path="/services/:category/:slug" element={<ServiceDetailPage />} />

            {/* 🚀 NAYA SOLUTIONS DYNAMIC ROUTE */}
            {/* Ab /solutions/retail-erp ho ya /solutions/zakya-pos, sab is ek route se handle honge */}
            <Route path="/solutions/:slug" element={<SolutionDetailPage />} />

          </Routes>
        </main>
        
        <Footer />

        {/* 🚀 AI Bot floating dynamic layer (Puri Website Par Har Page Par Float Karega) */}
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;