import React from "react";
import Link from "next/link";
import { DOMAIN_REPORTS } from "./lib/reports";
import DashboardPreview from "./components/DashboardPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Global Command Bar */}
      <header className="sticky top-0 z-40 w-full bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-md px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/50 text-cyan-400 font-mono font-bold text-xs shadow-[0_0_12px_rgba(6,182,212,0.3)]">
            DR
          </div>
          <div>
            <h1 className="text-sm font-mono font-bold tracking-wider text-white">
              STRATEGIC DOMAIN INTELLIGENCE CONSOLE
            </h1>
            <p className="text-[10px] font-mono text-zinc-400">
              NEXT.JS 16 OPERATIONS ENVIRONMENT // APPDATA: MULTI-THEATER
            </p>
          </div>
        </div>

        {/* Global Nav Badges */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>SYSTEM ONLINE</span>
            <span className="text-zinc-600">|</span>
            <span className="text-cyan-400">TURBOPACK READY</span>
          </div>

          <a
            href="#interactive-console"
            className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-black transition-colors"
          >
            QUICK VIEWER
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* Hero Strategic Overview */}
        <section className="relative p-6 sm:p-8 rounded-2xl bg-linear-to-b from-zinc-950 to-zinc-900/60 border border-zinc-800/90 shadow-2xl overflow-hidden">
          {/* Ambient Glow Effects */}
          <div className="absolute top-0 -left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-4xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/50">
                ACTIVE DOMAINS: 03
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-zinc-900 text-zinc-400 border border-zinc-800">
                GEOPOLITICAL & DEFENSE ASSESSMENTS
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-500/40">
                STATIC ASSETS INTEGRATED
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight">
              Global Strategic Defense <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-300 to-red-400">
                Domain Intelligence Reporting
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
              Centralized Next.js portal providing interactive access to high-fidelity intelligence assessments.
              Equipped with deep-dive technical syntheses, multi-domain threat vectors, timeline animations, and
              direct standalone report viewers.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#domain-reports-grid"
                className="px-4 py-2 rounded-lg text-xs font-mono font-bold bg-cyan-500 hover:bg-cyan-400 text-black transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                BROWSE 3 DOMAIN REPORTS
              </a>
              <a
                href="#interactive-console"
                className="px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-colors"
              >
                OPEN EMBEDDED CONSOLE
              </a>
            </div>
          </div>
        </section>

        {/* 3 Domain Reports Showcase Grid */}
        <section id="domain-reports-grid" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2">
                <span className="text-cyan-400">#</span> STRATEGIC INTELLIGENCE DOSSIERS
              </h3>
              <p className="text-xs font-mono text-zinc-400">
                Select a dossier to launch in the dedicated Next.js viewer or access standalone raw HTML
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              3 REPORTS LOADED FROM /PUBLIC
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DOMAIN_REPORTS.map((report) => {
              const isCyan = report.themeColor === "cyan";
              const isRed = report.themeColor === "red";

              const borderColor = isCyan
                ? "border-cyan-500/40 hover:border-cyan-400"
                : isRed
                ? "border-red-500/40 hover:border-red-400"
                : "border-amber-500/40 hover:border-amber-400";

              const glowColor = isCyan
                ? "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                : isRed
                ? "hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]"
                : "hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]";

              const headerBg = isCyan
                ? "bg-cyan-950/40 text-cyan-300 border-cyan-500/30"
                : isRed
                ? "bg-red-950/40 text-red-300 border-red-500/30"
                : "bg-amber-950/40 text-amber-300 border-amber-500/30";

              return (
                <div
                  key={report.id}
                  className={`flex flex-col justify-between rounded-xl bg-zinc-950 border ${borderColor} ${glowColor} transition-all duration-300 p-5 space-y-4 relative overflow-hidden group`}
                >
                  {/* Subtle Corner Accent */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 ${
                      isCyan ? "bg-cyan-500/10" : isRed ? "bg-red-500/10" : "bg-amber-500/10"
                    } rounded-bl-full pointer-events-none transition-transform group-hover:scale-125`}
                  />

                  <div className="space-y-3">
                    {/* Badge & Meta */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${headerBg}`}>
                        REPORT 0{report.number}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {report.fileSize}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h4 className="text-lg font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                        {report.title}
                      </h4>
                      <p className="text-xs font-mono text-zinc-400 mt-1">
                        {report.theater}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                      {report.description}
                    </p>

                    {/* Key Stats Pill Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {report.keyStats.slice(0, 2).map((s, idx) => (
                        <div key={idx} className="p-2 rounded bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono">
                          <span className="text-zinc-500 block truncate">{s.label}</span>
                          <span className="text-zinc-200 font-bold mt-0.5 block">{s.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights Preview */}
                    <div className="space-y-1.5 pt-2 border-t border-zinc-900">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">Core Focus Areas:</span>
                      <ul className="text-[11px] font-mono text-zinc-400 space-y-1 list-disc list-inside">
                        {report.highlights.slice(0, 2).map((h, i) => (
                          <li key={i} className="truncate">{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-zinc-900/80 flex items-center gap-2">
                    <Link
                      href={`/reports/${report.id}`}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-bold text-center transition-colors border ${
                        isCyan
                          ? "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/40"
                          : isRed
                          ? "bg-red-500/20 hover:bg-red-500/30 text-red-300 border-red-500/40"
                          : "bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/40"
                      }`}
                    >
                      VIEW IN APP
                    </Link>

                    <a
                      href={report.publicPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Raw HTML File"
                      className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/70 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Live Interactive Console Section */}
        <section className="space-y-3 pt-6 border-t border-zinc-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2">
              <span className="text-cyan-400">#</span> INTEGRATED TACTICAL CONSOLE
            </h3>
            <p className="text-xs font-mono text-zinc-400">
              Interactive embedded viewer with instant tab switching, frame reload & fullscreen support
            </p>
          </div>

          <DashboardPreview />
        </section>

        {/* Technical Architecture & Integration Verification */}
        <section className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
            <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
              Integration Architecture & Available Endpoints
            </h4>
          </div>

          <p className="text-xs font-mono text-zinc-400 leading-relaxed">
            All three domain reports are integrated into the Next.js App Router workspace with high-performance
            static asset delivery, dynamic App Router routes, and URL rewrite support:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
              <span className="text-cyan-400 font-bold block">Domain Report 01</span>
              <div className="text-zinc-400 text-[11px] space-y-0.5">
                <p>App Route: <Link href="/reports/domain-report-1" className="text-zinc-200 underline">/reports/domain-report-1</Link></p>
                <p>Clean URL: <a href="/domain-report-1" target="_blank" className="text-zinc-200 underline">/domain-report-1</a></p>
                <p>Direct File: <a href="/domain-report-1.html" target="_blank" className="text-zinc-200 underline">/domain-report-1.html</a></p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
              <span className="text-red-400 font-bold block">Domain Report 02 (2025)</span>
              <div className="text-zinc-400 text-[11px] space-y-0.5">
                <p>App Route: <Link href="/reports/domain-report-2" className="text-zinc-200 underline">/reports/domain-report-2</Link></p>
                <p>Clean URL: <a href="/domain-report-2" target="_blank" className="text-zinc-200 underline">/domain-report-2</a></p>
                <p>Direct File: <a href="/domain-report-2.html" target="_blank" className="text-zinc-200 underline">/domain-report-2.html</a></p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
              <span className="text-amber-400 font-bold block">Domain Report 03 (2024)</span>
              <div className="text-zinc-400 text-[11px] space-y-0.5">
                <p>App Route: <Link href="/reports/domain-report-3" className="text-zinc-200 underline">/reports/domain-report-3</Link></p>
                <p>Clean URL: <a href="/domain-report-3" target="_blank" className="text-zinc-200 underline">/domain-report-3</a></p>
                <p>Direct File: <a href="/domain-report-3.html" target="_blank" className="text-zinc-200 underline">/domain-report-3.html</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <footer className="w-full bg-zinc-950 border-t border-zinc-900 px-4 sm:px-6 py-4 text-center text-xs font-mono text-zinc-500">
        STRATEGIC DOMAIN INTELLIGENCE CONSOLE // POWERED BY NEXT.JS 16 & TURBOPACK // PUBLIC HTML ARTIFACTS VERIFIED
      </footer>
    </div>
  );
}
