'use client';
import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full bg-[#87CEEB] overflow-hidden">
      <section ref={heroRef} id="hero" className="w-full h-[700px] flex items-center justify-center relative bg-[#87CEEB]">
        {/* Parallax Layers */}
      <div 
        className="absolute -top-[2.5%] -left-[2.5%] w-[105%] h-[105%] z-0 bg-bottom bg-repeat-x bg-[length:auto_100%]"
        style={{ 
          backgroundImage: "url('/codedex/LandingPage_Sky.webp')",
          transform: `translate(${offset.x * 5}px, ${offset.y * 5}px)`,
          transition: 'transform 0.1s ease-out',
          imageRendering: 'pixelated'
        }}
      ></div>
      <div 
        className="absolute -top-[2.5%] -left-[2.5%] w-[105%] h-[105%] z-10 bg-bottom bg-repeat-x bg-[length:auto_100%]"
        style={{ 
          backgroundImage: "url('/codedex/LandingPage_Mountain.webp')",
          transform: `translate(${offset.x * 15}px, ${offset.y * 10}px)`,
          transition: 'transform 0.1s ease-out',
          imageRendering: 'pixelated'
        }}
      ></div>
      <div 
        className="absolute -top-[2.5%] -left-[2.5%] w-[105%] h-[105%] z-20 bg-bottom bg-repeat-x bg-[length:auto_100%]"
        style={{ 
          backgroundImage: "url('/codedex/LandingPage_Hills.webp')",
          transform: `translate(${offset.x * 30}px, ${offset.y * 15}px)`,
          transition: 'transform 0.1s ease-out',
          imageRendering: 'pixelated'
        }}
      ></div>
      <div 
        className="absolute -top-[2.5%] -left-[2.5%] w-[105%] h-[105%] z-30 bg-bottom bg-repeat-x bg-[length:auto_100%]"
        style={{ 
          backgroundImage: "url('/codedex/LandingPage_Grass.webp')",
          transform: `translate(${offset.x * 50}px, ${offset.y * 20}px)`,
          transition: 'transform 0.1s ease-out',
          imageRendering: 'pixelated'
        }}
      ></div>
      <img 
        src="/codedex/LandingPage_Mascot.webp"
        className="absolute bottom-[-1%] left-[10%] md:left-[15%] lg:left-[22%] w-24 sm:w-32 md:w-36 lg:w-44 z-40 drop-shadow-2xl"
        style={{ 
          transform: `translate(${offset.x * 70}px, ${offset.y * 30}px)`,
          transition: 'transform 0.1s ease-out',
          imageRendering: 'pixelated'
        }}
        alt="Mascot"
      />

      <div className="absolute inset-0 bg-black/5 z-40 pointer-events-none"></div>

      <div className="relative z-50 text-center px-4 max-w-3xl pointer-events-none flex flex-col items-center mt-[-10vh]">
        {/* Animated Text GIF */}
        <div className="mb-6">
          <img src="/codedex/Landing_Text_Transparent.png" alt="Coding Adventure" className="max-w-[70vw] sm:max-w-[450px] mx-auto drop-shadow-2xl" style={{ filter: 'drop-shadow(2px 4px 0 rgba(0,0,0,0.4))' }} />
        </div>
        
        <p className="font-sans font-medium text-sm sm:text-base text-white mb-8 leading-relaxed tracking-wide" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          Explore my world. Discover my work. ⋆˙⟡
        </p>
        <div className="flex justify-center mt-2">
          <a href="#about" className="pointer-events-auto bg-[#FACC15] text-[#0F172A] font-sans font-bold text-sm sm:text-base py-3 px-8 border-[3px] border-[#0F172A] rounded-lg shadow-[0_4px_0_#D97706] hover:translate-y-[4px] hover:shadow-none transition-all flex items-center justify-center">
            Get started
          </a>
        </div>
      </div>
      
    </section>
  </div>
  );
}
