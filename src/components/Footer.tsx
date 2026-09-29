import React from 'react';
import { ArrowUp, Heart, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#201836] bg-[#0A0812] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & discipline */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-base font-bold text-[#FAF9FF] font-display">
            {PORTFOLIO_DATA.personal.name}
          </div>
          <p className="text-xs text-[#8E83A8]">
            Data Science Student · Aspiring Tech & AI Explorer
          </p>
        </div>

        {/* Center: Clean links */}
        <div className="flex items-center gap-6 text-xs text-[#A59DB8]">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right: Back to top & copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-[#726987]">
            © {new Date().getFullYear()} Gunturu Sindhu
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#161026] hover:bg-[#231A3D] border border-[#2B2147] text-[#B3AAC7] hover:text-white transition-colors"
            title="Scroll to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
