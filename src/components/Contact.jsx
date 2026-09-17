import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './Icons';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  CheckCircle2,
  Send,
  Sparkles,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  Loader2
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _replyto: formState.email,
          subject: formState.subject || `Portfolio Inquiry from ${formState.name}`,
          _subject: `New Portfolio Inquiry from ${formState.name}: ${formState.subject || 'Opportunity'}`,
          message: formState.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();
      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('Could not deliver directly via web. You can click below to open your email client.');
    }
  };

  const handleMailtoFallback = () => {
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name || 'Recruiter'}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 bg-[#060a12] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Recruiter & Hiring Contact Hub
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Actively interviewing for Entry-Level Software Engineer roles. Send an inquiry below to deliver directly to my email inbox, or reach out via LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Channels & Verified Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 sm:p-7 space-y-5">
              <h3 className="text-lg font-bold text-white">
                Direct Contact Channels
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-emerald-950/60 text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs text-slate-400">Email Address</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-emerald-400 truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-sky-950/60 text-sky-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Phone / WhatsApp</p>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-semibold text-slate-200 hover:text-sky-400 transition-colors"
                    >
                      {personalInfo.phoneFormatted}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyPhone}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-sky-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-950/60 text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location Base</p>
                  <p className="text-sm font-semibold text-slate-200">
                    {personalInfo.location} (Open to On-site & Remote)
                  </p>
                </div>
              </div>

              {/* Extracted Profiles */}
              <div className="pt-2 border-t border-slate-800/80 space-y-3">
                <p className="text-xs font-mono uppercase text-slate-400 font-semibold">
                  Verified Online Profiles
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 border border-indigo-500/40 hover:border-indigo-400 hover:bg-indigo-950/30 text-slate-200 text-xs sm:text-sm font-semibold transition-all group"
                  >
                    <Linkedin className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-950/30 text-slate-200 text-xs sm:text-sm font-semibold transition-all group"
                  >
                    <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill this out to deliver your message directly to <span className="text-indigo-300 font-mono">{personalInfo.email}</span>.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/80 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-600/50">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Inquiry Sent Directly to Prashanth's Inbox!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your message has been delivered directly to <span className="text-emerald-400 font-mono">{personalInfo.email}</span>. I will review it and reply as soon as possible.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="px-4 py-2 rounded-lg bg-emerald-900/50 hover:bg-emerald-900 border border-emerald-700/60 text-xs font-semibold text-emerald-300 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name / Company *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Connor / TechCorp"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. recruiter@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject / Role Opportunity *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Software Engineer Opportunity at..."
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Prashanth, I came across your portfolio and would like to connect regarding an opening..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-800/60 text-xs text-rose-300 space-y-2">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleMailtoFallback}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-200 underline hover:text-white"
                      >
                        Open default email app to dispatch
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-md shadow-indigo-600/30 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Directly to Prashanth's Inbox...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Direct Inquiry to Inbox</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center pt-1 font-mono">
                    🔒 Messages are encrypted in transit and delivered straight to {personalInfo.email}
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
