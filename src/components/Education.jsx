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
  FileCheck
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
            Formal computer science training, academic excellence, and specialized technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Formal Education */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800/80">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Academic Degrees
              </h3>
            </div>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div
                  key={edu.institution}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-5 sm:p-6 hover:border-indigo-500/40 transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="self-start sm:self-auto text-xs font-mono font-bold px-3 py-1 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-300">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mt-2 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800/80">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Professional Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-5 sm:p-6 hover:border-amber-500/40 transition-all group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-950/50 border border-amber-800/50 text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {cert.title}
                        </h4>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-amber-300 border border-slate-800">
                          {cert.tag}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-indigo-400">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed pt-1">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Ready to Deploy Note */}
              <div className="rounded-2xl bg-slate-950/80 border border-indigo-900/40 p-5 text-center">
                <p className="text-xs font-mono text-indigo-300">
                  ⚡ Ready to onboard immediately with zero ramp-up friction
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
