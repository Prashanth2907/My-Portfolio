import React, { useState } from 'react';
import { skillsCategories } from '../data/portfolioData';
import {
  Code2,
  Layout,
  Server,
  BrainCircuit,
  Wrench,
  Binary,
  CheckCircle,
  Sparkles,
  Layers
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categoryIcons = {
    "Languages": Code2,
    "Frontend Technologies": Layout,
    "Backend & Systems": Server,
    "AI, ML & Vector Search": BrainCircuit,
    "Developer Tools & Security": Wrench,
    "Technical Proficiencies": Binary
  };

  const tabs = ['All', ...skillsCategories.map(c => c.category)];

  const filteredCategories = activeTab === 'All'
    ? skillsCategories
    : skillsCategories.filter(c => c.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-[#060a12] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technical Competencies
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Categorized technical stack focused on scalable software engineering, modern web applications, and applied AI/NLP systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border border-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const Icon = categoryIcons[group.category] || Layers;
            return (
              <div
                key={group.category}
                className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/5 group flex flex-col justify-between"
              >
                <div>
                  {/* Card Title with Icon */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-indigo-950/70 border border-indigo-800/60 text-indigo-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {group.category}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills List / Visual Badges */}
                  <div className="space-y-3.5">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className={`font-medium flex items-center gap-1.5 ${skill.highlight ? 'text-white font-semibold' : 'text-slate-300'}`}>
                            {skill.highlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                            )}
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono text-slate-500">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Progress bar */}
                        <div className="w-full h-1.5 bg-slate-800/90 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Tag Summary */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                  {group.skills.map(s => (
                    <span
                      key={s.name}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-950/70 text-slate-400 border border-slate-800"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CS Foundations Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-cyan-950/40 border border-indigo-800/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              Core Computer Science Foundations
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Rigorous practice in Data Structures & Algorithms, Object-Oriented Design (OOP), and Database Management Systems (DBMS).
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-indigo-300">
            <span className="px-3 py-1 rounded-lg bg-indigo-950/80 border border-indigo-700/60">
              LeetCode & Problem Solving
            </span>
            <span className="px-3 py-1 rounded-lg bg-indigo-950/80 border border-indigo-700/60">
              Clean Architecture
            </span>
            <span className="px-3 py-1 rounded-lg bg-indigo-950/80 border border-indigo-700/60">
              SQL & Schema Design
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
