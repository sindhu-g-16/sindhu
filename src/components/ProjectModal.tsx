import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Database, GitBranch, Layout, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'interactive'>('overview');
  
  // Interactive Simulation State for CivicsFix
  const [simIssues, setSimIssues] = useState([
    { id: 'CF-104', title: 'Streetlight flicker at 5th Cross', category: 'Lighting', status: 'In Progress', date: 'Just now' },
    { id: 'CF-103', title: 'Road pothole near central market', category: 'Roads', status: 'Assigned', date: '2 hours ago' },
    { id: 'CF-102', title: 'Overflowing community dumpster', category: 'Sanitation', status: 'Resolved', date: 'Yesterday' },
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Roads');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleSimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newIssue = {
      id: `CF-${105 + simIssues.length}`,
      title: newTitle.trim(),
      category: newCategory,
      status: 'Reported',
      date: 'Just now',
    };

    setSimIssues([newIssue, ...simIssues]);
    setNewTitle('');
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#07050C]/85 backdrop-blur-sm overflow-y-auto">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-[#140F22] border border-[#372A5C] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 border-b border-[#261D3E] flex items-center justify-between bg-[#100B1D]">
          <div>
            <div className="text-xs font-semibold text-[#FF8E72] uppercase tracking-wider">
              {project.category} · {project.liveStatus}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#FAF9FF] font-display">
              {project.title}
            </h2>
            <p className="text-xs text-[#9F95B7]">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#9F95B7] hover:text-white bg-[#1D1630] hover:bg-[#2A2045] rounded-xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 py-2 border-b border-[#221938] bg-[#120D20] flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-[#291F44] text-[#FAF9FF]'
                : 'text-[#8E83A8] hover:text-[#FAF9FF]'
            }`}
          >
            Overview & Problem Statement
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'features'
                ? 'bg-[#291F44] text-[#FAF9FF]'
                : 'text-[#8E83A8] hover:text-[#FAF9FF]'
            }`}
          >
            Key Architecture & Features
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'interactive'
                ? 'bg-[#291F44] text-[#FF8E72]'
                : 'text-[#8E83A8] hover:text-[#FF8E72]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF8E72]" />
            <span>Interactive Demo & Insights</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Main Visual Media Display */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-[#2B2147] bg-[#0C0916]">
            <img
              src={project.image}
              alt={`${project.title} Preview Screenshot`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B14]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#FAF9FF]">
              <span className="font-semibold bg-[#0D0B14]/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-[#312552]">
                Visual Artifact: {project.title} Project Interface
              </span>
            </div>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-[#FF8E72] uppercase tracking-wider mb-2">
                  Project Description
                </h3>
                <p className="text-sm text-[#D1CADF] leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#1A132C] border border-[#2B2147] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#FF6B6B]">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Problem</span>
                  </div>
                  <p className="text-xs text-[#B3AAC7] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1A132C] border border-[#2B2147] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>The Solution</span>
                  </div>
                  <p className="text-xs text-[#B3AAC7] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Technologies Applied */}
              <div>
                <h3 className="text-xs font-semibold text-[#8E83A8] uppercase tracking-wider mb-2">
                  Technologies Applied
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-md bg-[#1B142F] text-[#C084FC] border border-[#312652]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FEATURES */}
          {activeTab === 'features' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-[#FAF9FF] font-display mb-3">
                  Core Functional Modules
                </h3>
                <div className="space-y-3">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#171129] border border-[#2B2147] flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#271D42] text-[#FF8E72] flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </span>
                      <p className="text-xs text-[#D1CADF] leading-relaxed pt-0.5">
                        {feat}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {project.keyInsights && (
                <div className="p-4 rounded-xl bg-[#19122C] border border-[#372A5C] space-y-2">
                  <h4 className="text-xs font-semibold text-[#C084FC] uppercase tracking-wider">
                    Key Project Insights & Takeaways
                  </h4>
                  <ul className="space-y-1.5">
                    {project.keyInsights.map((insight, idx) => (
                      <li key={idx} className="text-xs text-[#B3AAC7] flex items-start gap-2">
                        <span className="text-[#FF8E72] font-bold">·</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: INTERACTIVE DEMO */}
          {activeTab === 'interactive' && (
            <div className="space-y-6">
              {project.id === 'civicsfix' ? (
                /* Interactive CivicsFix simulator */
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-[#18112C] border border-[#2E234E]">
                    <h4 className="text-sm font-semibold text-[#FAF9FF] font-display mb-1">
                      CivicsFix Live Issue Simulation
                    </h4>
                    <p className="text-xs text-[#9F95B7]">
                      Test submitting a civic maintenance report and observe how the tracking pipeline processes status updates.
                    </p>

                    {/* Simulation Input Form */}
                    <form onSubmit={handleSimSubmit} className="mt-4 grid grid-cols-1 sm:grid-cols-12 gap-3">
                      <div className="sm:col-span-7">
                        <input
                          type="text"
                          value={newTitle}
                          onChange={(e) => setNewTitle(e.target.value)}
                          placeholder="e.g. Broken streetlight on 2nd Sector road..."
                          className="w-full px-3.5 py-2 text-xs rounded-lg bg-[#0E0A1A] border border-[#3A2E59] text-white placeholder-[#726987] focus:outline-none focus:border-[#C084FC]"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <select
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-[#0E0A1A] border border-[#3A2E59] text-[#D1CADF] focus:outline-none focus:border-[#C084FC]"
                        >
                          <option value="Roads">Roads & Potholes</option>
                          <option value="Lighting">Street Lighting</option>
                          <option value="Sanitation">Sanitation & Garbage</option>
                          <option value="Water">Water Leakage</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="w-full py-2 px-3 text-xs font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#FF6B6B] hover:opacity-95 rounded-lg transition-opacity whitespace-nowrap"
                        >
                          Log Issue
                        </button>
                      </div>
                    </form>

                    {submitSuccess && (
                      <div className="mt-2 text-xs text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Issue recorded in SQL state and dispatched to ward pipeline!</span>
                      </div>
                    )}
                  </div>

                  {/* Mock Issue Feed */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-[#8E83A8] uppercase tracking-wider">
                      Recent Community Incidents
                    </div>
                    <div className="space-y-2">
                      {simIssues.map((issue) => (
                        <div
                          key={issue.id}
                          className="p-3 rounded-lg bg-[#140E24] border border-[#261E3E] flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[#C084FC]">{issue.id}</span>
                            <div>
                              <div className="text-[#FAF9FF] font-medium">{issue.title}</div>
                              <div className="text-[11px] text-[#7A7094]">{issue.category} · {issue.date}</div>
                            </div>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                            issue.status === 'Resolved'
                              ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800'
                              : issue.status === 'In Progress'
                              ? 'bg-amber-950/60 text-amber-400 border border-amber-800'
                              : 'bg-purple-950/60 text-purple-300 border border-purple-800'
                          }`}>
                            {issue.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Job Website Analysis interactive audit review */
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-[#18112C] border border-[#2E234E] space-y-3">
                    <h4 className="text-sm font-semibold text-[#FAF9FF] font-display">
                      Job Portal Funnel Friction Analysis
                    </h4>
                    <p className="text-xs text-[#9F95B7]">
                      Evaluation of candidate journey drop-off rates across key interaction checkpoints:
                    </p>

                    {/* Step-by-step conversion audit */}
                    <div className="space-y-3 pt-2">
                      {[
                        { step: "1. Search & Filter Landing", retention: "100%", drop: "0%", status: "Optimal", color: "bg-emerald-500" },
                        { step: "2. Job Detail Page View", retention: "68%", drop: "-32%", status: "Good", color: "bg-teal-500" },
                        { step: "3. 'Apply Now' Triggered", retention: "42%", drop: "-26%", status: "Friction: Mandatory Login", color: "bg-amber-500" },
                        { step: "4. Resume & Questionnaire Upload", retention: "24%", drop: "-18%", status: "High Drop: Redundant Forms", color: "bg-rose-500" },
                        { step: "5. Final Application Submitted", retention: "16%", drop: "-8%", status: "Final Conversion Rate", color: "bg-purple-500" },
                      ].map((stage, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="font-medium text-[#FAF9FF]">{stage.step}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-[#8E83A8] text-[11px]">{stage.status}</span>
                              <span className="font-mono text-[#FF8E72] font-semibold">{stage.retention}</span>
                            </div>
                          </div>
                          <div className="w-full h-2 bg-[#261E3E] rounded-full overflow-hidden">
                            <div
                              className={`h-full ${stage.color} rounded-full`}
                              style={{ width: stage.retention }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[#261E3E] text-xs text-[#B3AAC7]">
                      <strong className="text-[#FAF9FF]">Core Finding:</strong> Over 58% of qualified applicants abandon their application due to lack of upfront salary transparency and repetitive manual resume field re-entry.
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#261D3E] bg-[#100B1D] flex items-center justify-between">
          <div className="text-xs text-[#8E83A8]">
            Project authored by {project.title === 'CivicsFix' ? 'Gunturu Sindhu (Web & SQL)' : 'Gunturu Sindhu (Analytics & UX)'}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#D1CADF] hover:text-white bg-[#1D1630] hover:bg-[#2A2045] rounded-lg transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>

    </div>
  );
};
