'use client';
import { useEffect } from 'react';

export default function Effects() {
  useEffect(() => {
    // Scroll Reveal
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if (e.isIntersecting) e.target.classList.add('reveal-active'); 
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    
    // We use a short timeout to ensure the DOM is painted before observing
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
    }, 100);

    // Click Particles
    const handleGlobalClick = (e: MouseEvent) => {
      const colors = ['#FFD600', '#00D4FF', '#FF6B9D', '#34D399', '#000000'];
      for (let i = 0; i < 6; i++) {
        const p = document.createElement('div');
        p.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:8px;height:8px;border:2px solid #000;background:${colors[Math.floor(Math.random()*colors.length)]};pointer-events:none;z-index:9999;`;
        document.body.appendChild(p);
        const a = (Math.PI*2/6)*i+Math.random()*0.5, sp=40+Math.random()*50;
        p.animate([
          {transform:'translate(0,0) rotate(0deg)',opacity:1},
          {transform:`translate(${Math.cos(a)*sp}px,${Math.sin(a)*sp}px) rotate(180deg)`,opacity:0}
        ],{duration:500,easing:'cubic-bezier(0,0,0.2,1)'}).onfinish=()=>p.remove();
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
      revealObs.disconnect();
    };
  }, []);

  return null;
}
