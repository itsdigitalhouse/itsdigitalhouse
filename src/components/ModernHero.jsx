import React, { useRef, useEffect, useState, useCallback } from 'react';
import heroBg from '../assets/idea-made-digital.jpeg';

const ModernHero = () => {
  const heroRef = useRef(null);
  const orbRef = useRef(null);
  const textWrapRef = useRef(null);
  const animRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const mx = useRef(-999), my = useRef(-999);
  const cx = useRef(-999), cy = useRef(-999);
  const curR = useRef(40), tgtR = useRef(40);
  
  const [straighten, setStraighten] = useState(false);
  const [orbVisible, setOrbVisible] = useState(false);

  const bgPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.7'%3E%3Crect x='4' y='4' width='10' height='10' rx='1'/%3E%3Ccircle cx='30' cy='9' r='5'/%3E%3Cpath d='M44 4 L56 4 L56 16 L44 16Z'/%3E%3Ccircle cx='9' cy='30' r='5'/%3E%3Crect x='25' y='25' width='10' height='10' rx='5'/%3E%3Cpath d='M44 25 L56 25 M50 25 L50 35 M44 35 L56 35'/%3E%3Cpath d='M4 44 L16 56 M4 56 L16 44'/%3E%3Ccircle cx='30' cy='50' r='5'/%3E%3Crect x='44' y='44' width='10' height='10' rx='1'/%3E%3C/g%3E%3C/svg%3E")`;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isOrbOverText = useCallback(() => {
    if (!textWrapRef.current) return false;
    const tr = textWrapRef.current.getBoundingClientRect();
    const dist = Math.hypot(cx.current - (tr.left + tr.width/2), cy.current - (tr.top + tr.height/2));
    return dist < 300; 
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      mx.current = e.clientX - rect.left;
      my.current = e.clientY - rect.top;
      setOrbVisible(true);
    };

    const onLeave = () => { 
      // Sudden jump rokne ke liye hum yahan direct reset nahi karenge
      // Balkay orbVisible false kar denge
      setOrbVisible(false); 
    };
    
    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);

    const loop = () => {
      cx.current += (mx.current - cx.current) * 0.15;
      cy.current += (my.current - cy.current) * 0.15;
      
      const over = mx.current > 0 && isOrbOverText();
      setStraighten(over);
      tgtR.current = over ? 70 : 40;
      curR.current += (tgtR.current - curR.current) * 0.1;

      if (orbRef.current) {
        const heroRect = hero.getBoundingClientRect();
        const orbSize = curR.current;
        
        let x = cx.current;
        let y = cy.current;

        // Boundary constraint: Gola container se bahar nahi jayega aur jhatka nahi khayega
        x = Math.max(orbSize, Math.min(x, heroRect.width - orbSize));
        y = Math.max(orbSize, Math.min(y, heroRect.height - orbSize));

        orbRef.current.style.left = x + 'px';
        orbRef.current.style.top = y + 'px';
        orbRef.current.style.width = (curR.current * 2) + 'px';
        orbRef.current.style.height = (curR.current * 2) + 'px';
      }
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animRef.current);
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
    };
  }, [isOrbOverText]);

  return (
    <section 
      ref={heroRef} 
      style={{ 
        height: 'calc(100dvh - 80px)', 
        width: '100%', 
        background: `linear-gradient(rgba(7,7,7,0.7), rgba(7,7,7,0.7)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        cursor: isMobile ? 'auto' : 'none',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative', 
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ position: 'absolute', inset: 0, opacity: 0.09, backgroundImage: bgPattern }} />

      <div style={{ position: 'absolute', left: isMobile ? '20px' : '150px', top: '48px', zIndex: 20, color: 'white', textAlign: 'left' }}>
        <div style={{ fontSize: isMobile ? '8px' : '11px', opacity: 0.8, letterSpacing: '0.4em', textTransform: 'uppercase' }}>
          YOUR<br/>GATEWAY TO<br/>THE DIGITAL WORLD
        </div>
      </div>

      <div ref={textWrapRef} style={{ zIndex: 20, width: '100%', textAlign: 'center', perspective: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ display: 'block', fontSize: isMobile ? '40px' : '110px', fontWeight: 900, color: 'transparent', WebkitTextStroke: '1px #ffffff', transition: '0.4s', marginLeft: isMobile ? '0' : '210px', transform: straighten ? 'rotateY(0deg)' : 'rotateY(40deg)' }}>IDEAS MADE</span>
        
        <span style={{ 
          display: 'block', 
          fontSize: isMobile ? '60px' : '160px', 
          fontWeight: 900, 
          background: 'linear-gradient(90deg, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)', 
          WebkitBackgroundClip: 'text', 
          backgroundClip: 'text',
          color: 'transparent', 
          transition: '0.4s', 
          marginTop: isMobile ? '-20px' : '-50px',
          transform: straighten ? 'rotateY(0deg)' : 'rotateY(-40deg)'
        }}>DIGITAL</span>
        
        <p style={{ 
          color: 'rgba(255,255,255,0.6)', 
          fontSize: isMobile ? '10px' : '12px', 
          letterSpacing: '0.15em', 
          marginTop: '30px', 
          maxWidth: isMobile ? '80%' : '500px', 
          textAlign: isMobile ? 'center' : 'left',
          textTransform: 'uppercase', 
          lineHeight: '1.6',
          marginLeft: isMobile ? '0' : '250px'
        }}>
          DIGITAL HOUSE IS A DESIGN DRIVEN, DEVELOPMENT FOCUSED AGENCY DEDICATED TO HELPING BRANDS GROW BY BLENDING CREATIVITY WITH SMART DIGITAL STRATEGIES TO CREATE MEANINGFUL EXPERIENCES FROM STANDOUT BRANDING TO HIGH PERFORMING WEBSITES & RESULT ORIENTED MARKETING.
        </p>
      </div>

      <div ref={orbRef} style={{ 
        position: 'absolute', 
        zIndex: 15, 
        pointerEvents: 'none', 
        borderRadius: '50%', 
        transform: 'translate(-50%, -50%)', 
        background: 'linear-gradient(90deg, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)',
        opacity: orbVisible ? 0.6 : 0, // Jab invisible ho to opacity 0 kardein
        transition: 'width 0.3s, height 0.3s, opacity 0.3s' 
      }} />
    </section>
  );
};

export default ModernHero;