import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-t border-[#221A36] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#FF8E72]">
            Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF9FF] font-display">
            Education & Academic Track Record
          </h2>
          <p className="text-sm text-[#B3AAC7]">
            A documented record of consistent academic excellence, mathematical rigor, and structured computer science learning.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-[#7C3AED] before:via-[#FF6B6B] before:to-transparent">
          {PORTFOLIO_DATA.education.map((item, index) => {
            return (
              <div 
                key={item.degree}
                className="relative flex items-start gap-6 md:gap-10 group"
              >
                {/* Timeline Icon Node */}
                <div className="relative z-10 flex-shrink-0 w-8 md:w-16 h-8 md:h-16 rounded-2xl bg-[#1D1630] border-2 border-[#7C3AED] flex items-center justify-center text-[#FF8E72] shadow-lg shadow-[#7C3AED]/20">
                  <GraduationCap className="w-4 md:w-7 h-4 md:h-7" />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-[#140F22] border border-[#271E40] hover:border-[#8B5CF6]/40 rounded-2xl p-6 sm:p-7 space-y-4 transition-all duration-200">
                  
                  {/* Top line: Degree & Score highlight */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#231A38] pb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#FAF9FF] font-display">
                        {item.degree}
                      </h3>
                      <div className="text-sm font-medium text-[#C084FC]">
                        {item.institution}
                      </div>
                    </div>

                    {/* Prominent Score Card */}
                    <div className="text-left sm:text-right">
                      <div className="text-xs text-[#8E83A8] uppercase tracking-wider">
                        {item.scoreLabel}
                      </div>
                      <div className="text-lg sm:text-xl font-extrabold text-[#FF7E67] font-mono tabular-nums">
                        {item.scoreValue}
                      </div>
                      <div className="text-[11px] text-[#A59DB8]">
                        {item.status}
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5 pt-1">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B3AAC7]">
                        <CheckCircle className="w-4 h-4 text-[#FF8E72] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Period tag */}
                  <div className="pt-2 text-xs text-[#7A7094] flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#8E83A8]" />
                    <span>Timeline: {item.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>Academic Status: {item.status}</span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Callout Summary */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#171026] via-[#1F1535] to-[#171026] border border-[#352755] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-[#FAF9FF] font-display">
              Strong Quantitative & STEM Foundations
            </h4>
            <p className="text-xs text-[#B3AAC7] max-w-xl">
              From an outstanding 9.8 CGPA in SSC to 979 marks in Intermediate MPC and specialized Data Science engineering, high discipline is the baseline for all technical projects.
            </p>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#FF6B6B] hover:opacity-95 rounded-xl transition-all whitespace-nowrap"
          >
            Connect for Opportunities
          </a>
        </div>

      </div>
    </section>
  );
};
