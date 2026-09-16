import React from 'react';
import { experiences } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Cloud,
  ChevronRight
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#060a12] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Industry Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internships & Professional Work
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Hands-on enterprise experience contributing to real-world cloud CRM automations and cybersecurity operations.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => {
            const isSalesforce = exp.company.toLowerCase().includes('salesforce');
            return (
              <div
                key={exp.company}
                className="relative rounded-2xl bg-slate-900/60 border border-slate-800/90 p-6 sm:p-8 hover:border-emerald-500/40 transition-all hover:shadow-xl hover:shadow-emerald-500/5 group"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800/70">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                      {isSalesforce ? (
                        <Cloud className="w-6 h-6 text-sky-400" />
                      ) : (
                        <ShieldCheck className="w-6 h-6 text-emerald-400" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl font-bold text-white">
                          {exp.role} @ {exp.company}
                        </h3>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/70 text-emerald-400 border border-emerald-800/60">
                          {exp.badge}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-400 mt-1">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs text-slate-400 font-mono shrink-0">
                    <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mt-5 space-y-3">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Contributions & Responsibilities
                  </p>
                  <div className="space-y-2.5">
                    {exp.achievements.map((item, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Skills Applied:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
