import React, { useState, useEffect } from 'react';
import { Mail, ArrowUpRight, Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled 
          ? 'bg-[#0D0B14]/90 backdrop-blur-md border-b border-[#2B2242]' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in display face */}
        <a 
          href="#" 
          className="text-xl font-bold tracking-tight text-[#F5F3FF] hover:text-[#FF8E72] transition-colors font-display"
        >
          {PORTFOLIO_DATA.personal.name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#B3AAC7]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#F5F3FF] transition-colors hover:underline underline-offset-8 decoration-[#FF6B6B]/60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 text-xs font-semibold text-[#D1CADF] hover:text-white border border-[#3A2E59] hover:border-[#8B5CF6]/50 rounded-lg transition-colors flex items-center gap-1.5"
          >
            LinkedIn
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FF8E72]" />
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#FF6B6B] hover:opacity-95 rounded-lg shadow-sm shadow-[#7C3AED]/20 transition-all whitespace-nowrap flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            Get in Touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#B3AAC7] hover:text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#130F1E] border-b border-[#2B2242] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#B3AAC7] hover:text-[#FF8E72] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-[#251D3A] flex flex-col gap-2.5">
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2.5 text-xs font-semibold text-[#D1CADF] border border-[#3A2E59] rounded-lg flex items-center justify-center gap-1.5"
            >
              LinkedIn Profile
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF8E72]" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#FF6B6B] rounded-lg flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
