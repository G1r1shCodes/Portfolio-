'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 150) {
          current = s.id;
        }
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#quests', label: 'QUESTS' },
    { href: '#journey', label: 'JOURNEY' },
    { href: '#contact', label: 'CONTACT' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-void border-b-4 border-void">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">
          <div className="flex items-center gap-6">
            <Link href="#hero" className="font-pixel text-sun text-sm tracking-wider">GIRISH.EXE</Link>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-item ${activeSection === link.href.substring(1) ? 'nav-item-active text-void' : 'text-white hover:text-void'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-white hover:text-sun transition-colors"><span className="iconify" data-icon="lucide:refresh-cw" data-width="16"></span></button>
            <button className="text-white hover:text-sun transition-colors"><span className="iconify" data-icon="lucide:volume-2" data-width="16"></span></button>
            <button onClick={() => setIsOpen(true)} className="md:hidden text-sun ml-2" aria-label="Menu"><span className="iconify" data-icon="lucide:menu" data-width="20"></span></button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-0 right-0 h-full w-64 z-[60] bg-void border-l-4 border-void p-6 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsOpen(false)} className="text-sun mb-8"><span className="iconify" data-icon="lucide:x" data-width="24"></span></button>
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-pixel text-xs py-2 border-b border-gray-800 ${activeSection === link.href.substring(1) ? 'text-sun' : 'text-white hover:text-sun'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
