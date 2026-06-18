import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; // 🚀 Home ko normal import rakha taake 1-second ka flash khatam ho jaye
import ScrollToTop from './components/ScrollToTop';
// import WelcomePopup from './components/WelcomePopup';
import GlobalLoader from './components/GlobalLoader';
import ChatWidget from './components/ChatWidget'; 
import CustomCursor from './components/CustomCursor';

// 🚀 Baqi saare pages lazy load hote rahenge (Unused JS ka masla hal rahega)
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const Contact = lazy(() => import('./pages/Contact'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Insights = lazy(() => import('./pages/Insights'));
const ServiceDetailPage = lazy(() => import('./components/ServiceDetailPage'));
const SolutionDetailPage = lazy(() => import('./components/SolutionDetailPage')); 

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
          {/* Internal pages jab load hon to smooth fallback spinner ya screen aaye */}
          <Suspense 
            fallback={
              <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white font-sans text-xs uppercase tracking-[0.2em]">
                Loading...
              </div>
            }
          >
            <Routes>
              {/* Home ab instantly render hoga bagair kisi jhatke ke */}
              <Route path="/" element={<Home />} />
              
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/insights" element={<Insights />} /> 

              {/* DYNAMIC ROUTES */}
              <Route path="/services/:category/:slug" element={<ServiceDetailPage />} />
              <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />

        <ChatWidget />
        <CustomCursor />
      </div>
    </Router>
  );
}

export default App;