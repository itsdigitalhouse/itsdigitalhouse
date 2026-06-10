import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Insights from './pages/Insights';
import ScrollToTop from './components/ScrollToTop';
// import WelcomePopup from './components/WelcomePopup';
import GlobalLoader from './components/GlobalLoader';
import ChatWidget from './components/ChatWidget'; // 🚀 AI Chat Bot Widget Import Kiya

// SOLUTIONS PAGES IMPORTS
import LegalManagement from './pages/LegalManagement';
import RestaurantERP from './pages/RestaurantERP';
import ZakyaPOS from './pages/ZakyaPOS'; 
import RetailERP from './pages/RetailERP';
import PRAgencyERP from './pages/PRAgencyERP';
import ManufacturingERP from './pages/ManufacturingERP';
import CarRentalERP from './pages/CarRentalERP';

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
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/insights" element={<Insights />} /> 

            {/* SOLUTIONS ROUTES */}
            <Route path="/solutions/legal-management" element={<LegalManagement />} />
            <Route path="/solutions/restaurant-erp" element={<RestaurantERP />} />
            <Route path="/solutions/retail-zakya-pos" element={<ZakyaPOS />} /> 
            <Route path="/solutions/retail-erp" element={<RetailERP />} /> 
            <Route path="/solutions/pr-agency-erp" element={<PRAgencyERP />} />
            <Route path="/solutions/manufacturing-erp" element={<ManufacturingERP />} />
            <Route path="/solutions/car-rental-erp" element={<CarRentalERP />} />
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