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
import WelcomePopup from './components/WelcomePopup';
import GlobalLoader from './components/GlobalLoader';

// SOLUTIONS PAGES IMPORTS
import LegalManagement from './pages/LegalManagement';
import RestaurantERP from './pages/RestaurantERP';
import ZakyaPOS from './pages/ZakyaPOS'; 
import RetailERP from './pages/RetailERP';
import PRAgencyERP from './pages/PRAgencyERP'; // Added PR Agency ERP Page
import ManufacturingERP from './pages/ManufacturingERP'; // Added Manufacturing ERP Page
import CarRentalERP from './pages/CarRentalERP'; // Added Car Rental ERP Page

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
      <div className="min-h-screen bg-white">
        <Navbar />
        <WelcomePopup />

        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/insights" element={<Insights />} /> 

            {/* CONNECTING SOLUTIONS ROUTES */}
            <Route path="/solutions/legal-management" element={<LegalManagement />} />
            <Route path="/solutions/restaurant-erp" element={<RestaurantERP />} />
            <Route path="/solutions/retail-zakya-pos" element={<ZakyaPOS />} /> 
            <Route path="/solutions/retail-erp" element={<RetailERP />} /> 
            <Route path="/solutions/pr-agency-erp" element={<PRAgencyERP />} /> {/* PR Agency ERP Route */}
            <Route path="/solutions/manufacturing-erp" element={<ManufacturingERP />} /> {/* Added Manufacturing ERP Route */}
            <Route path="/solutions/car-rental-erp" element={<CarRentalERP />} /> {/* Added Car Rental ERP Route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;