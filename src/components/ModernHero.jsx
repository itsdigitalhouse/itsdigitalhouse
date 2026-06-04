import React, { useRef, useEffect, useState, useCallback } from 'react';

const ModernHero = () => {
  const heroRef = useRef(null);
  const orbRef = useRef(null);
  const textWrapRef = useRef(null);
  const animRef = useRef(null);

  const mx = useRef(-999), my = useRef(-999);
  const cx = useRef(-999), cy = useRef(-999);
  const curR = useRef(15), tgtR = useRef(15);
  
  const [straighten, setStraighten] = useState(false);
  const [orbVisible, setOrbVisible] = useState(false);

  const bgPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.7'%3E%3Crect x='4' y='4' width='10' height='10' rx='1'/%3E%3Ccircle cx='30' cy='9' r='5'/%3E%3Cpath d='M44 4 L56 4 L56 16 L44 16Z'/%3E%3Ccircle cx='9' cy='30' r='5'/%3E%3Crect x='25' y='25' width='10' height='10' rx='5'/%3E%3Cpath d='M44 25 L56 25 M50 25 L50 35 M44 35 L56 35'/%3E%3Cpath d='M4 44 L16 56 M4 56 L16 44'/%3E%3Ccircle cx='30' cy='50' r='5'/%3E%3Crect x='44' y='44' width='10' height='10' rx='1'/%3E%3C/g%3E%3C/svg%3E")`;

  const isOrbOverText = useCallback(() => {
    if (!textWrapRef.current || !heroRef.current) return false;
    const tr = textWrapRef.current.getBoundingClientRect();
    const hr = heroRef.current.getBoundingClientRect();
    const dist = Math.hypot(cx.current - (tr.left + tr.width/2 - hr.left), cy.current - (tr.top + tr.height/2 - hr.top));
    return dist < 250; 
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      mx.current = (e.clientX || e.touches[0].clientX) - rect.left;
      my.current = (e.clientY || e.touches[0].clientY) - rect.top;
      setOrbVisible(true);
    };

    const onLeave = () => { mx.current = -999; my.current = -999; setOrbVisible(false); };
    
    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);

    const loop = () => {
      cx.current += (mx.current - cx.current) * 0.15;
      cy.current += (my.current - cy.current) * 0.15;
      
      const over = mx.current > 0 && isOrbOverText();
      setStraighten(over);
      tgtR.current = over ? 180 : 15;
      curR.current += (tgtR.current - curR.current) * 0.1;

      if (orbRef.current) {
        orbRef.current.style.left = cx.current + 'px';
        orbRef.current.style.top = cy.current + 'px';
        orbRef.current.style.width = (curR.current * 2) + 'px';
        orbRef.current.style.height = (curR.current * 2) + 'px';
      }
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [isOrbOverText]);

  return (
    <section 
      ref={heroRef} 
      style={{ 
        height: '100svh', 
        width: '100%', 
        background: '#070707', 
        cursor: 'none', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      <div style={{ position: 'absolute', inset: 0, opacity: 0.09, backgroundImage: bgPattern }} />

      <div style={{ position: 'absolute', left: '48px', zIndex: 20, color: 'white', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '9px', opacity: 0.5, letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          YOUR<br/>GATEWAY TO<br/>THE DIGITAL WORLD
        </div>
      </div>

      <div ref={textWrapRef} style={{ zIndex: 20, width: '100%', textAlign: 'center', perspective: '1000px' }}>
        <span style={{ display: 'block', fontSize: '90px', fontWeight: 900, color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.2)', transition: '0.4s', transform: straighten ? 'rotateY(0deg)' : 'rotateY(-20deg)' }}>IDEAS MADE</span>
        <span style={{ display: 'block', fontSize: '130px', fontWeight: 900, background: 'linear-gradient(90deg,#e1b054,#d24a8a,#ee3444,#75b0d2,#7361a7,#f1574d)', WebkitBackgroundClip: 'text', color: 'transparent', transition: '0.4s', transform: straighten ? 'rotateY(0deg)' : 'rotateY(20deg)' }}>DIGITAL</span>
      </div>

      <div ref={orbRef} style={{ position: 'absolute', zIndex: 15, pointerEvents: 'none', borderRadius: '50%', transform: 'translate(-50%, -50%)', opacity: orbVisible ? 1 : 0, border: '1px solid rgba(255,255,255,0.2)', transition: 'width 0.3s, height 0.3s' }} />
    </section>
  );
};

export default ModernHero;