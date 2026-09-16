import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Github } from './Icons';
import {
  ExternalLink,
  FolderGit2,
  Cpu,
  Layers,
  Sparkles,
  ChevronRight,
  Database,
  Film,
  Zap,
  CheckCircle2,
  LayoutDashboard,
  TrendingUp,
  BarChart3,
  CreditCard,
  Share2,
  UtensilsCrossed
} from 'lucide-react';

export default function Projects() {
  const [selectedChunking, setSelectedChunking] = useState('Semantic');
  const [activeFilter, setActiveFilter] = useState('All');

  const chunkingDescriptions = {
    'Fixed': 'Splits text into static token/character windows with preset overlap. Fast and simple baseline.',
    'Semantic': 'Splits based on semantic embeddings and similarity distance between consecutive sentences.',
    'Recursive': 'Hierarchically decomposes text by paragraphs, newlines, and sentence punctuation.',
    'Documentation': 'Preserves markdown, headers, and code block structures for structured technical data.',
    'Agentic': 'Dynamically groups content using LLM reasoning to evaluate context cohesion.'
  };

  const filterCategories = ['All', 'Web & React', 'AI & RAG', 'Machine Learning', 'Data Analytics'];

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => {
    if (activeFilter === 'Web & React') return p.category.includes('Web') || p.category.includes('Frontend');
    if (activeFilter === 'AI & RAG') return p.category.includes('AI') || p.category.includes('NLP') || p.category.includes('RAG');
    if (activeFilter === 'Machine Learning') return p.category.includes('Machine Learning') || p.category.includes('Predictive');
    if (activeFilter === 'Data Analytics') return p.category.includes('Analytics') || p.category.includes('Data Science');
    return true;
  });

  const renderProjectVisual = (project) => {
    if (project.id === 'netflix-clone') {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-red-500" />
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                Netflix Discovery UI
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/50">
              OMDb Live Feed
            </span>
          </div>

          <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 font-mono">
              <span className="text-indigo-400">🔍</span>
              <span>Interstellar, Inception, Dark Knight...</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="rounded-lg bg-slate-950/80 p-2.5 border border-slate-800 space-y-1">
                <div className="h-20 rounded bg-gradient-to-tr from-indigo-950 to-slate-800 flex items-center justify-center text-xs font-mono text-indigo-300">
                  Poster Preview
                </div>
                <p className="text-xs font-semibold text-slate-200 truncate">Sci-Fi Movie</p>
                <p className="text-[10px] text-amber-400 font-mono">★ 8.8/10 IMDb</p>
              </div>
              <div className="rounded-lg bg-slate-950/80 p-2.5 border border-slate-800 space-y-1">
                <div className="h-20 rounded bg-gradient-to-tr from-purple-950 to-slate-800 flex items-center justify-center text-xs font-mono text-purple-300">
                  Poster Preview
                </div>
                <p className="text-xs font-semibold text-slate-200 truncate">Action & Drama</p>
                <p className="text-[10px] text-amber-400 font-mono">★ 9.0/10 IMDb</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center pt-2">
            {project.stats.map(s => (
              <div key={s.label} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                <p className="text-xs font-bold text-indigo-300 font-mono">{s.value}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (project.id === 'rag-qa-system') {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                RAG Chunking Explorer
              </span>
            </div>
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/50">
              FAISS Vector Index
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-mono text-slate-400">
              Select Chunking Strategy to inspect:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Fixed', 'Semantic', 'Recursive', 'Documentation', 'Agentic'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSelectedChunking(mode)}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                    selectedChunking === mode
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-cyan-900/40 space-y-1.5">
            <p className="text-xs font-mono font-semibold text-cyan-300">
              Strategy: {selectedChunking} Chunking
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              {chunkingDescriptions[selectedChunking]}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center pt-2">
            {project.stats.map(s => (
              <div key={s.label} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                <p className="text-xs font-bold text-cyan-300 font-mono">{s.value}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (project.id === 'loan-approval-prediction') {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                Loan Decision Engine
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/50">
              Scikit-Learn Model
            </span>
          </div>

          <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-2.5 font-mono text-xs">
            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 flex items-center justify-between">
              <span>Features: Income, Credit, Loan Amount</span>
              <span className="text-indigo-400">Encoded</span>
            </div>
            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 flex items-center justify-between">
              <span>Classifier: Random Forest + KNN</span>
              <span className="text-emerald-400">Trained</span>
            </div>
            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 flex items-center justify-between">
              <span>Validation: Train/Test Split (80/20)</span>
              <span className="text-cyan-400">High Accuracy</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center pt-2">
            {project.stats.map(s => (
              <div key={s.label} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                <p className="text-xs font-bold text-emerald-300 font-mono">{s.value}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (project.id === 'figma-assignment') {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                Dashboard Architecture
              </span>
            </div>
            <span className="text-[11px] font-mono text-purple-400 bg-purple-950/50 px-2 py-0.5 rounded border border-purple-800/50">
              React 19 + Tailwind
            </span>
          </div>

          <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-2.5 font-mono text-xs">
            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 flex items-center justify-between">
              <span>Layout: Sidebar + Dynamic Topbar</span>
              <span className="text-purple-400">Responsive</span>
            </div>
            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 flex items-center justify-between">
              <span>Components: /dashboard /common /layout</span>
              <span className="text-indigo-400">Modular</span>
            </div>
            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 flex items-center justify-between">
              <span>Build Tooling: Vite + PostCSS</span>
              <span className="text-emerald-400">Fast HMR</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center pt-2">
            {project.stats.map(s => (
              <div key={s.label} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                <p className="text-xs font-bold text-purple-300 font-mono">{s.value}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (project.id === 'zomato-data-analysis') {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                Restaurant EDA Visualizer
              </span>
            </div>
            <span className="text-[11px] font-mono text-rose-400 bg-rose-950/50 px-2 py-0.5 rounded border border-rose-800/50">
              Seaborn & Pandas
            </span>
          </div>

          <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-2.5 font-mono text-xs">
            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 flex items-center justify-between">
              <span>Rating vs Approximate Cost For Two</span>
              <span className="text-rose-400">Correlated</span>
            </div>
            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 flex items-center justify-between">
              <span>Online Delivery Distribution</span>
              <span className="text-amber-400">Analyzed</span>
            </div>
            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 flex items-center justify-between">
              <span>Top Restaurant Chains & Cuisines</span>
              <span className="text-emerald-400">Mapped</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center pt-2">
            {project.stats.map(s => (
              <div key={s.label} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                <p className="text-xs font-bold text-rose-300 font-mono">{s.value}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (project.id === 'instagram-analysis') {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-pink-400" />
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                Audience Reach Breakdown
              </span>
            </div>
            <span className="text-[11px] font-mono text-pink-400 bg-pink-950/50 px-2 py-0.5 rounded border border-pink-800/50">
              Social Analytics
            </span>
          </div>

          <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-2.5 font-mono text-xs">
            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 flex items-center justify-between">
              <span>Impression Channels: Home, Explore, Hashtags</span>
              <span className="text-pink-400">Mapped</span>
            </div>
            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 flex items-center justify-between">
              <span>Engagement: Likes, Shares, Saves, Comments</span>
              <span className="text-indigo-400">Calculated</span>
            </div>
            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-300 flex items-center justify-between">
              <span>Conversion to Profile Follows</span>
              <span className="text-emerald-400">Evaluated</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center pt-2">
            {project.stats.map(s => (
              <div key={s.label} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                <p className="text-xs font-bold text-pink-300 font-mono">{s.value}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="projects" className="py-20 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Verified Codebases & Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Implementations
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Verified public codebases featuring modern React applications, applied RAG architectures, machine learning predictors, and data analytics pipelines.
          </p>
        </div>

        {/* Project Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Stack */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-900/50 border border-slate-800/90 overflow-hidden hover:border-indigo-500/40 transition-all hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left Column: Project Overview & Deep Details */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Category & Timeline */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {project.timeline}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="mt-5 space-y-2.5">
                      {project.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                          <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Badges & Action Links */}
                  <div className="space-y-5 pt-4 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all group"
                      >
                        <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                        <span>View Repository Code</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
                      </a>

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 hover:text-indigo-200 text-xs sm:text-sm font-semibold transition-all"
                      >
                        <Zap className="w-4 h-4 text-indigo-400" />
                        <span>Inspect Implementation</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Interactive Demo / Architecture Visualizer */}
                <div className="lg:col-span-5 bg-slate-950/80 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-slate-800/80 flex flex-col justify-center">
                  {renderProjectVisual(project)}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
