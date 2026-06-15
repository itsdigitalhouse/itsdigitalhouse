import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi pathname tabdeel ho, page ko top par scroll kar do
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;