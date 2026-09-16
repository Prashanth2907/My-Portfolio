import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './Icons';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Download,
  CheckCircle2,
  Copy,
  Terminal,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open for Entry-Level Software Engineer Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                {personalInfo.title}
              </p>
            </div>

            {/* Objective / Summary */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
              {personalInfo.summary}
            </p>

            {/* Critical Verified Social & Contact Links */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Direct Profiles & Channels
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {/* LinkedIn Badge */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-indigo-500/40 hover:border-indigo-400 hover:bg-indigo-950/40 text-slate-200 hover:text-white transition-all shadow-sm hover:shadow-indigo-500/20 group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-semibold">LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </a>

                {/* GitHub Badge */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-950/40 text-slate-200 hover:text-white transition-all shadow-sm hover:shadow-cyan-500/20 group"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-semibold">GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* Email Chip */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>{personalInfo.email}</span>
                </a>

                {/* Phone Chip */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm transition-all"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>{personalInfo.phoneFormatted}</span>
                </a>

                {/* Location Chip */}
                <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all group"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Hero Column: Recruiter Summary Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-indigo-400" />
                  <span className="text-xs font-mono font-bold tracking-wide uppercase text-slate-300">
                    Candidate_Quick_Card.json
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                  Ready to Interview
                </span>
              </div>

              {/* Snapshot Metrics */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/60">
                  <p className="text-xs text-slate-400 font-mono">Academic Foundation</p>
                  <p className="text-sm font-semibold text-slate-200 mt-0.5">
                    B.Tech in Computer Science (2021 – 2025)
                  </p>
                  <p className="text-xs text-indigo-400 mt-0.5">Vardhaman College of Engineering • CGPA 7.34</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/60">
                  <p className="text-xs text-slate-400 font-mono">Hands-on Industry Exposure</p>
                  <p className="text-sm font-semibold text-slate-200 mt-0.5">
                    Salesforce (CRM, Apex, Automation)
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    TechnoHack (Cybersecurity, Network Scanning, Wireshark)
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/60">
                  <p className="text-xs text-slate-400 font-mono">Key Project Competencies</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-indigo-950/50 text-indigo-300 border border-indigo-800/50">
                      React Hooks & OMDb API
                    </span>
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-cyan-950/50 text-cyan-300 border border-cyan-800/50">
                      RAG Architecture & FAISS
                    </span>
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-purple-950/50 text-purple-300 border border-purple-800/50">
                      LangChain & LLaMA
                    </span>
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-emerald-950/50 text-emerald-300 border border-emerald-800/50">
                      DSA & OOP
                    </span>
                  </div>
                </div>

                {/* Direct quick action for recruiter */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Contact: {personalInfo.email}</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-indigo-400 hover:underline font-semibold"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
