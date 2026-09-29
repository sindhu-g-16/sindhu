import React from 'react';
import { ArrowDown, Mail, ArrowUpRight, Database, GitBranch, Terminal, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden">
      {/* Ambient background glow mesh */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-[#6D28D9]/20 via-[#9333EA]/15 to-[#FF6B6B]/20 blur-[130px] rounded-full"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-[#FF6B6B]/15 via-[#8B5CF6]/15 to-transparent blur-[120px] rounded-full"
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Editorial Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Role kicker (clean unboxed text with typographic separator) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF8E72]">
              <span>B.Tech Data Science Student</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#C084FC]">Aspiring Developer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8F7FF] leading-[1.12] font-display max-w-2xl">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#FF7E67]">{PORTFOLIO_DATA.personal.name}</span>.
            </h1>

            {/* Sub-headline / About extract */}
            <p className="text-lg text-[#B9B0CF] leading-relaxed max-w-xl font-normal">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            {/* Quick Core Tech Highlight (Unboxed tags) */}
            <div className="flex items-center gap-3 text-xs text-[#8E83A8]">
              <span className="font-medium text-[#D1CADF]">Primary Toolkit:</span>
              <div className="flex items-center gap-2 text-[#E2DCF0]">
                <span>SQL</span>
                <span aria-hidden="true">/</span>
                <span>Git</span>
                <span aria-hidden="true">/</span>
                <span>C</span>
                <span aria-hidden="true">/</span>
                <span className="text-[#FF8E72]">Python & AI (In-Progress)</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#FF6B6B] hover:opacity-95 rounded-xl shadow-lg shadow-[#7C3AED]/25 transition-all flex items-center gap-2"
              >
                <span>Explore Featured Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3 text-sm font-semibold text-[#E2DCF0] hover:text-white bg-[#1B152B] hover:bg-[#231C38] border border-[#3A2E59] rounded-xl transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#FF8E72]" />
                <span>Contact Me</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 text-[#B3AAC7] hover:text-white bg-[#1B152B] hover:bg-[#231C38] border border-[#3A2E59] rounded-xl transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <ArrowUpRight className="w-4 h-4 text-[#C084FC]" />
              </a>
            </div>

            {/* Adjacency Proof Metrics */}
            <div className="pt-8 border-t border-[#251D3A] grid grid-cols-2 sm:grid-cols-4 gap-6">
              {PORTFOLIO_DATA.personal.stats.map((stat) => (
                <div key={stat.label} className="space-y-0.5">
                  <div className="text-2xl font-bold font-display tracking-tight text-[#FAF9FF] tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#FF8E72]">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#7A7094] truncate">
                    {stat.context}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Code & Data Science Identity Card (No AI photo) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative gradient border */}
              <div className="relative p-1.5 rounded-3xl bg-gradient-to-b from-[#8B5CF6]/50 via-[#C084FC]/30 to-[#FF6B6B]/40 shadow-2xl shadow-[#7C3AED]/20">
                
                {/* Inner container */}
                <div className="bg-[#140F22] rounded-[22px] overflow-hidden p-6 space-y-5">
                  
                  {/* Terminal Header & Monogram Identity Block */}
                  <div className="rounded-2xl overflow-hidden bg-[#18112C] border border-[#2F2452] p-5 space-y-4">
                    
                    {/* Simulated Terminal Window Bar */}
                    <div className="flex items-center justify-between border-b border-[#2A2049] pb-3 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                      </div>
                      <span className="font-mono text-[11px] text-[#A59DB8]">
                        sindhu@datascience:~
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Active" />
                    </div>

                    {/* Monogram & Title Lockup */}
                    <div className="flex items-center gap-4 pt-1">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C3AED] via-[#C084FC] to-[#FF6B6B] p-0.5 shadow-lg shadow-[#7C3AED]/30 flex-shrink-0">
                        <div className="w-full h-full bg-[#140F22] rounded-[14px] flex items-center justify-center">
                          <span className="text-2xl font-black font-display text-transparent bg-clip-text bg-gradient-to-tr from-[#C084FC] to-[#FF8E72]">
                            GS
                          </span>
                        </div>
                      </div>

                      <div className="space-y-0.5">
                        <h2 className="text-lg font-bold text-[#F8F7FF] font-display">
                          {PORTFOLIO_DATA.personal.name}
                        </h2>
                        <p className="text-xs text-[#C084FC] font-medium">
                          B.Tech Data Science
                        </p>
                        <div className="text-[11px] text-[#8E83A8] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8E72]" />
                          <span>Student & Developer</span>
                        </div>
                      </div>
                    </div>

                    {/* Terminal Data Shell Output */}
                    <div className="p-3 rounded-xl bg-[#0F0B1C] border border-[#251C3F] font-mono text-[11px] space-y-1 text-[#C5BED8]">
                      <div>
                        <span className="text-[#FF8E72]">$</span> <span className="text-[#C084FC]">cat</span> profile.json
                      </div>
                      <div className="text-[#9E94B8] pl-2 text-[10px] leading-relaxed">
                        &#123;<br />
                        &nbsp;&nbsp;<span className="text-[#FF8E72]">"status"</span>: <span className="text-[#38BDF8]">"Undergraduate"</span>,<br />
                        &nbsp;&nbsp;<span className="text-[#FF8E72]">"core_stack"</span>: [<span className="text-[#A7F3D0]">"SQL"</span>, <span className="text-[#A7F3D0]">"Git"</span>, <span className="text-[#A7F3D0]">"C"</span>],<br />
                        &nbsp;&nbsp;<span className="text-[#FF8E72]">"exploring"</span>: [<span className="text-[#FED7AA]">"Python"</span>, <span className="text-[#FED7AA]">"AI"</span>, <span className="text-[#FED7AA]">"Analytics"</span>]<br />
                        &#125;
                      </div>
                    </div>

                  </div>

                  {/* Student Profile Quick Facts */}
                  <div className="space-y-3 pt-1">
                    <div className="p-3 rounded-xl bg-[#1B152E] border border-[#2D234A] text-xs text-[#B3AAC7] leading-relaxed">
                      "Passionate about analyzing real-world systems, turning messy data into structured value, and creating civic web solutions."
                    </div>

                    {/* Skill mini cards container */}
                    <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                      <div className="p-2 rounded-lg bg-[#181229] border border-[#2B2147]">
                        <Database className="w-3.5 h-3.5 mx-auto text-[#C084FC] mb-1" />
                        <span className="text-[11px] font-semibold text-[#E2DCF0] block">SQL</span>
                        <span className="text-[9px] text-[#7A7094]">Queries & Data</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#181229] border border-[#2B2147]">
                        <GitBranch className="w-3.5 h-3.5 mx-auto text-[#FF8E72] mb-1" />
                        <span className="text-[11px] font-semibold text-[#E2DCF0] block">Git</span>
                        <span className="text-[9px] text-[#7A7094]">Repositories</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#181229] border border-[#2B2147]">
                        <Terminal className="w-3.5 h-3.5 mx-auto text-[#38BDF8] mb-1" />
                        <span className="text-[11px] font-semibold text-[#E2DCF0] block">C & Python</span>
                        <span className="text-[9px] text-[#7A7094]">Algorithms</span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
