import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 border-t border-[#221A36] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#FF8E72]">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF9FF] font-display">
              Projects & Analytical Studies
            </h2>
            <p className="text-sm text-[#B3AAC7]">
              Applied engineering and data evaluation projects focused on civic problem-solving and modern web platform ergonomics.
            </p>
          </div>

          <div className="text-xs text-[#8E83A8] self-start md:self-auto">
            <span>2 Curated Projects</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span className="text-[#C084FC]">With Interactive Case Studies</span>
          </div>
        </div>

        {/* Projects Grid: 2 High-Presence Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            return (
              <div
                key={project.id}
                className="bg-[#140F22] border border-[#2B2147] hover:border-[#8B5CF6]/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                {/* Image Container with measured overlay */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden bg-[#0C0916] cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} Interface Preview`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140F22] via-transparent to-transparent opacity-80" />
                  
                  {/* Category & Status Overlay (clean unboxed text with badge style) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#0D0B14]/85 backdrop-blur-md text-[#C084FC] border border-[#3A2E59]">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#0D0B14]/85 backdrop-blur-md text-[#FF8E72] border border-[#3A2E59]">
                      {project.liveStatus}
                    </span>
                  </div>

                  {/* Hover visual affordance */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#0D0B14]/40 backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold text-xs flex items-center gap-1.5 shadow-lg">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    
                    {/* Unboxed editorial index */}
                    <div className="text-xs font-mono text-[#8E83A8]">
                      Case Study 0{index + 1}
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-xl sm:text-2xl font-bold text-[#FAF9FF] font-display hover:text-[#FF8E72] transition-colors cursor-pointer"
                    >
                      {project.title} <span className="text-base font-normal text-[#9F95B7]">― {project.subtitle}</span>
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-[#B3AAC7] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Unboxed tags with dot separators (Zero-pill discipline) */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#958BAF] pt-1">
                      {project.tags.map((tag, i) => (
                        <span key={tag} className="flex items-center">
                          <span>{tag}</span>
                          {i < project.tags.length - 1 && (
                            <span aria-hidden="true" className="ml-2 text-[#46386B]">·</span>
                          )}
                        </span>
                      ))}
                    </div>

                    {/* Key metrics bar if present */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#231A38]">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="p-2 rounded-lg bg-[#181129] border border-[#271E40]">
                            <div className="text-xs font-bold text-[#FAF9FF] font-mono tabular-nums">
                              {m.value}
                            </div>
                            <div className="text-[10px] text-[#7A7094] truncate">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>

                  {/* Interactive Button */}
                  <div className="pt-4 border-t border-[#231A38] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#FF6B6B] hover:opacity-95 rounded-lg transition-opacity flex items-center gap-1.5"
                    >
                      <span>Explore Project & Interactive Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-[11px] text-[#7A7094] hidden sm:inline">
                      Includes Simulation
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
