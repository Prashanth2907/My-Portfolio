import React from 'react';
import { educationList, certifications } from '../data/portfolioData';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle,
  Sparkles,
  BookOpen,
  FileCheck,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#070b14] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Formal computer science education, technical training, and specialized professional credentials.
          </p>
        </div>

        {/* 1. Academic Degrees Grid (Full Width 3 Columns) */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-indigo-950/60 border border-indigo-800/50 text-indigo-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Academic Background
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
              3 Qualifications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationList.map((edu, idx) => (
              <div
                key={edu.institution}
                className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/50 border border-indigo-800/50 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  <h4 className="text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors mb-1.5 leading-snug">
                    {edu.degree}
                  </h4>

                  <p className="text-sm font-semibold text-slate-300 mb-3">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-4">
                    <span className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-md border border-slate-800">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-md border border-slate-800">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Professional Certifications Grid (Full Width 2/3 Columns) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-amber-950/60 border border-amber-800/50 text-amber-400">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Professional Certifications & Credentials
              </h3>
            </div>
            <span className="text-xs font-mono text-amber-300 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-800/50">
              {certifications.length} Verified Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-5 hover:border-amber-500/40 transition-all hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="p-2 rounded-xl bg-amber-950/50 border border-amber-800/50 text-amber-400 group-hover:scale-105 transition-transform shrink-0">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-amber-300 border border-slate-800 truncate">
                      {cert.tag}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-xs font-semibold text-indigo-400 mt-1 mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Balanced 8th Highlight Card */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900/80 to-purple-950/60 border border-indigo-700/50 p-5 flex flex-col justify-between">
              <div>
                <div className="p-2 rounded-xl bg-indigo-950/70 border border-indigo-700/60 text-indigo-400 w-fit mb-3">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Immediate Onboarding Ready
                </h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Equipped with modern cloud architecture, full-stack engineering, and AI-era security foundations for rapid team integration.
                </p>
              </div>
              <div className="pt-3 border-t border-indigo-800/40 mt-3 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified & Ready to Deploy</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
