'use client';
import dynamic from 'next/dynamic';

const PhaserGame = dynamic(() => import('@/components/PhaserGame'), { ssr: false });

export default function Hero() {
  return (
    <section id="hero" className="hero-bg min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <PhaserGame />
      <div className="relative z-10 text-center px-4 max-w-3xl pointer-events-none">
        <h1 className="font-pixel text-4xl sm:text-5xl md:text-6xl text-white mb-4" style={{ textShadow: '4px 4px 0 #000' }}>GIRISH'S<br/>PORTFOLIO</h1>
        <p className="font-sans text-lg sm:text-xl text-white font-semibold mb-8 leading-relaxed" style={{ textShadow: '2px 2px 0 #000' }}>
          Explore my world. Discover my work.<br/>Meet the builder behind it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#about" className="brutal-btn pointer-events-auto bg-sun text-void px-8 py-4 text-xs rounded-none inline-flex items-center gap-2 justify-center">
            ▶ BEGIN ADVENTURE
          </a>
          <a href="/Girish-Resume.pdf" download="Girish-Resume.pdf" target="_blank" rel="noopener noreferrer" className="brutal-btn pointer-events-auto bg-white text-void px-8 py-4 text-xs rounded-none inline-flex items-center gap-2 justify-center">
            <span className="iconify" data-icon="lucide:download" data-width="14"></span> RESUME
          </a>
        </div>
      </div>
    </section>
  );
}
