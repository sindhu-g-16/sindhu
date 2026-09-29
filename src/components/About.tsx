import React from 'react';
import { Database, BrainCircuit, LineChart, Code2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Database,
      title: "Relational Data & SQL",
      description: "Writing structured queries, modeling clean table relationships, and aggregating data to extract clear insights.",
      accent: "text-[#C084FC]",
      border: "hover:border-[#8B5CF6]/50",
    },
    {
      icon: LineChart,
      title: "Data Analytics & Evaluation",
      description: "Evaluating platform usability, user drop-offs, and behavioral metrics to inform product improvements (as demonstrated in Job Website Analysis).",
      accent: "text-[#FF8E72]",
      border: "hover:border-[#FF6B6B]/50",
    },
    {
      icon: BrainCircuit,
      title: "AI & Emerging Tech",
      description: "Continuously expanding knowledge into modern machine learning concepts, AI frameworks, and prompt-driven engineering workflows.",
      accent: "text-[#E879F9]",
      border: "hover:border-[#E879F9]/50",
    },
    {
      icon: Code2,
      title: "Clean Code & Version Control",
      description: "Leveraging Git for disciplined commit histories, branch workflows, and building structured programs in C and Python.",
      accent: "text-[#38BDF8]",
      border: "hover:border-[#38BDF8]/50",
    },
  ];

  const highlights = [
    "Dedicated Data Science undergraduate with strong mathematical & analytical foundations",
    "Proven academic consistency: 979/1000 in Intermediate & 9.8 CGPA in SSC",
    "Builder mindset: Transforming everyday societal challenges into practical web tools",
    "Actively seeking internship and collaborative project opportunities in data science & tech",
  ];

  return (
    <section id="about" className="py-24 border-t border-[#221A36] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#FF8E72]">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF9FF] font-display">
            Bridging technical precision with practical real-world solutions.
          </h2>
          <p className="text-base text-[#B3AAC7] leading-relaxed">
            {PORTFOLIO_DATA.personal.bio}
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          <div className="lg:col-span-6 space-y-5 text-[#BDB5CF] text-base leading-relaxed">
            <p>
              As a dedicated student pursuing a <strong className="text-[#FAF9FF] font-semibold">B.Tech in Data Science</strong>, 
              my journey is grounded in an innate curiosity for how raw data can be organized, analyzed, and leveraged to solve meaningful problems.
            </p>
            <p>
              I believe that understanding data begins with solid computer science fundamentals. Through my coursework and self-directed practice, 
              I have developed fluency in <strong className="text-[#C084FC] font-semibold">SQL</strong> for database operations, 
              <strong className="text-[#FF8E72] font-semibold">Git</strong> for version control and collaboration, and 
              <strong className="text-[#FAF9FF] font-semibold">C</strong> for foundational algorithmic thinking.
            </p>
            <p>
              Today, I am actively broadening my technical repertoire into <strong className="text-[#FF7E67] font-semibold">Python</strong>, 
              <strong className="text-[#E879F9] font-semibold">Artificial Intelligence</strong>, and <strong className="text-[#C084FC] font-semibold">Data Analytics</strong>. 
              Whether it is auditing a job portal’s user journeys to find drop-off causes or building a civic issue reporting platform like <em>CivicsFix</em>, 
              I strive to create software that is genuinely useful.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#161126] border border-[#2D234A] rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-semibold text-[#FAF9FF] font-display">
              Core Principles & Academic Milestones
            </h3>
            
            <ul className="space-y-4">
              {highlights.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-[#D1CADF]">
                  <CheckCircle2 className="w-5 h-5 text-[#FF8E72] shrink-0 mt-0.5" />
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#261E3E] flex items-center justify-between text-xs text-[#8E83A8]">
              <span>Location: India</span>
              <span aria-hidden="true">·</span>
              <span>Degree: B.Tech Data Science</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#C084FC] font-medium">Ready to Collaborate</span>
            </div>
          </div>

        </div>

        {/* 4 Focus Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`bg-[#140F22] border border-[#261E3E] rounded-xl p-5 space-y-3 transition-all duration-200 ${pillar.border}`}
              >
                <div className={`p-2.5 rounded-lg bg-[#1D1630] w-fit ${pillar.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-[#F8F7FF] font-display">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#9F95B7] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
