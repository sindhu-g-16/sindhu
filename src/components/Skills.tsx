import React, { useState } from 'react';
import { Database, GitBranch, Terminal, Code, Cpu, BarChart3, Check, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'core' | 'growth'>('all');
  const [activeSnippetKey, setActiveSnippetKey] = useState<'sql' | 'git' | 'c' | 'python'>('sql');
  const [copied, setCopied] = useState(false);

  const filteredSkills = PORTFOLIO_DATA.skills.filter((skill) => {
    if (activeFilter === 'all') return true;
    return skill.category === activeFilter;
  });

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'SQL':
        return Database;
      case 'Git':
        return GitBranch;
      case 'C Programming':
        return Terminal;
      case 'Python':
        return Code;
      case 'Artificial Intelligence':
        return Cpu;
      case 'Data Analytics':
        return BarChart3;
      default:
        return Code;
    }
  };

  const codeSnippets = {
    sql: {
      title: "CivicsFix Database Query – Issue Triage by Ward",
      language: "sql",
      code: `-- Aggregate civic issues by status and category for maintenance triage
SELECT 
    category,
    COUNT(issue_id) AS total_reports,
    SUM(CASE WHEN status = 'Resolved' THEN 1 ELSE 0 END) AS resolved_count,
    ROUND(
        (SUM(CASE WHEN status = 'Resolved' THEN 1.0 ELSE 0.0 END) / COUNT(issue_id)) * 100, 
        2
    ) AS resolution_rate_pct
FROM civic_issues
WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY category
ORDER BY total_reports DESC;`,
    },
    git: {
      title: "Clean Feature Branch & Release Workflow",
      language: "bash",
      code: `# Standard Git branch workflow used in CivicsFix & coursework
git checkout -b feature/issue-geo-tagging
git add src/components/LocationPicker.tsx
git commit -m "feat: add location coordinate capture and map pin validation"

# Sync with upstream main before pull request
git checkout main
git pull origin main
git checkout feature/issue-geo-tagging
git rebase main
git push origin feature/issue-geo-tagging`,
    },
    c: {
      title: "C Memory & Data Structure Foundations",
      language: "c",
      code: `#include <stdio.h>
#include <stdlib.h>

typedef struct CivicIssue {
    int id;
    int priorityLevel;
    struct CivicIssue* next;
} CivicIssue;

CivicIssue* createIssue(int id, int priority) {
    CivicIssue* newIssue = (CivicIssue*)malloc(sizeof(CivicIssue));
    if (newIssue != NULL) {
        newIssue->id = id;
        newIssue->priorityLevel = priority;
        newIssue->next = NULL;
    }
    return newIssue;
}`,
    },
    python: {
      title: "Python Data Analytics – Job Portal Drop-Off Evaluation",
      language: "python",
      code: `import pandas as pd
import numpy as np

# Load and analyze user journey drop-offs in job portal audit
df = pd.read_csv("job_application_funnel.csv")

funnel_rates = df.groupby("step")["user_id"].count()
drop_off_pct = (1 - (funnel_rates / funnel_rates.iloc[0])) * 100

print("Application Funnel Friction Summary:")
for step, drop in drop_off_pct.items():
    print(f"-> {step}: {drop:.1f}% cumulative drop-off")`,
    },
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeSnippetKey].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="py-24 border-t border-[#221A36] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#FF8E72]">
              Technical Skills
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF9FF] font-display">
              Core Toolkit & Active Technical Growth
            </h2>
            <p className="text-sm text-[#B3AAC7]">
              Specializing in SQL database operations, version control with Git, and foundational C programming, while advancing in Python, AI, and data analytics.
            </p>
          </div>

          {/* Interactive Filter Tabs (Zero-pill discipline: segmented control buttons) */}
          <div className="flex items-center p-1 bg-[#161126] border border-[#2D234A] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-[#291F44] text-white shadow-sm'
                  : 'text-[#9F95B7] hover:text-white'
              }`}
            >
              All Skills ({PORTFOLIO_DATA.skills.length})
            </button>
            <button
              onClick={() => setActiveFilter('core')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'core'
                  ? 'bg-[#291F44] text-[#C084FC] shadow-sm'
                  : 'text-[#9F95B7] hover:text-white'
              }`}
            >
              Core Stack (SQL, Git, C)
            </button>
            <button
              onClick={() => setActiveFilter('growth')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'growth'
                  ? 'bg-[#291F44] text-[#FF8E72] shadow-sm'
                  : 'text-[#9F95B7] hover:text-white'
              }`}
            >
              Data & AI Growth
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill) => {
            const Icon = getSkillIcon(skill.name);
            const isCore = skill.category === 'core';
            
            return (
              <div
                key={skill.name}
                className="bg-[#140F22] border border-[#261E3E] hover:border-[#8B5CF6]/40 rounded-2xl p-6 space-y-4 transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-[#1E1733] ${isCore ? 'text-[#C084FC]' : 'text-[#FF8E72]'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-[#F8F7FF] font-display">
                        {skill.name}
                      </h3>
                    </div>
                    {/* Clean unboxed level label */}
                    <span className="text-xs font-medium text-[#A59DB8]">
                      {skill.experience}
                    </span>
                  </div>

                  <p className="text-xs text-[#B3AAC7] leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Key subtopics with typographic separators (No pill sandwiches) */}
                <div className="pt-3 border-t border-[#201836]">
                  <div className="text-[11px] font-semibold text-[#8E83A8] uppercase tracking-wider mb-2">
                    Key Competencies
                  </div>
                  <div className="text-xs text-[#C5BDE0] leading-relaxed flex flex-wrap gap-x-2 gap-y-1">
                    {skill.keyTopics.map((topic, i) => (
                      <span key={topic} className="flex items-center">
                        <span>{topic}</span>
                        {i < skill.keyTopics.length - 1 && (
                          <span aria-hidden="true" className="ml-2 text-[#46386B]">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Practical Implementation & Code Snippet Showcase */}
        <div className="bg-[#140E24] border border-[#2B2147] rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 sm:p-5 border-b border-[#251D3A] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#100B1D]">
            <div>
              <div className="text-xs font-semibold text-[#FF8E72] uppercase tracking-wider">
                Hands-On Code Artifacts
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[#FAF9FF] font-display">
                {codeSnippets[activeSnippetKey].title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {/* Segmented snippet selector */}
              <div className="flex items-center p-1 bg-[#19132B] border border-[#2D234A] rounded-lg">
                <button
                  onClick={() => setActiveSnippetKey('sql')}
                  className={`px-2.5 py-1 text-xs font-mono font-medium rounded transition-colors ${
                    activeSnippetKey === 'sql'
                      ? 'bg-[#312552] text-[#C084FC]'
                      : 'text-[#8E83A8] hover:text-white'
                  }`}
                >
                  SQL
                </button>
                <button
                  onClick={() => setActiveSnippetKey('git')}
                  className={`px-2.5 py-1 text-xs font-mono font-medium rounded transition-colors ${
                    activeSnippetKey === 'git'
                      ? 'bg-[#312552] text-[#FF8E72]'
                      : 'text-[#8E83A8] hover:text-white'
                  }`}
                >
                  Git
                </button>
                <button
                  onClick={() => setActiveSnippetKey('c')}
                  className={`px-2.5 py-1 text-xs font-mono font-medium rounded transition-colors ${
                    activeSnippetKey === 'c'
                      ? 'bg-[#312552] text-[#38BDF8]'
                      : 'text-[#8E83A8] hover:text-white'
                  }`}
                >
                  C
                </button>
                <button
                  onClick={() => setActiveSnippetKey('python')}
                  className={`px-2.5 py-1 text-xs font-mono font-medium rounded transition-colors ${
                    activeSnippetKey === 'python'
                      ? 'bg-[#312552] text-[#E879F9]'
                      : 'text-[#8E83A8] hover:text-white'
                  }`}
                >
                  Python
                </button>
              </div>

              {/* Copy snippet button */}
              <button
                onClick={handleCopyCode}
                className="p-1.5 rounded-lg bg-[#1D1630] border border-[#352A55] text-[#B3AAC7] hover:text-white transition-colors"
                title="Copy snippet"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Code Body */}
          <div className="p-5 sm:p-6 overflow-x-auto bg-[#0C0916]">
            <pre className="text-xs sm:text-sm font-mono text-[#D4CDE6] leading-relaxed">
              <code>{codeSnippets[activeSnippetKey].code}</code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};
