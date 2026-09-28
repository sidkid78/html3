import React from "react";
import Link from "next/link";
import { DOMAIN_REPORTS, EXECUTIVE_REPORT, WORKER_REPORTS_DOMAIN_1 } from "./lib/reports";
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
              NEXT.JS 16 OPERATIONS ENVIRONMENT // EXECUTIVE & MULTI-THEATER ARTIFACTS
            </p>
          </div>
        </div>

        {/* Global Nav Badges */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>SYSTEM ONLINE</span>
            <span className="text-zinc-600">|</span>
            <span className="text-cyan-400">8 ARTIFACTS VERIFIED</span>
          </div>

          <Link
            href="/reports/executive-report"
            className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-purple-950 text-purple-300 border border-purple-500/50 hover:bg-purple-900/50 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          >
            EXECUTIVE BRIEF
          </Link>

          <a
            href="#interactive-console"
            className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-black transition-colors"
          >
            LIVE CONSOLE
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* Hero Strategic Overview */}
        <section className="relative p-6 sm:p-8 rounded-2xl bg-linear-to-b from-zinc-950 to-zinc-900/60 border border-zinc-800/90 shadow-2xl overflow-hidden">
          {/* Ambient Glow Effects */}
          <div className="absolute top-0 -left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-4xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-purple-950/80 text-purple-300 border border-purple-500/50">
                EXECUTIVE BRIEF INTEGRATED
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/50">
                03 STRATEGIC DOMAINS
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-red-950/60 text-red-300 border border-red-500/40">
                04 TACTICAL WORKER ANNEXES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono tracking-tight text-white leading-tight">
              Global Strategic Defense <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-cyan-300 to-red-400">
                Domain Intelligence Reporting
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
              Centralized Next.js portal providing interactive access to executive-level global syntheses,
              multi-domain strategic competition assessments, and frontline operational worker briefings.
              Fully integrated with dedicated App Router pages, URL rewrites, and embedded tactical viewers.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/reports/executive-report"
                className="px-4 py-2 rounded-lg text-xs font-mono font-bold bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                OPEN EXECUTIVE BRIEF
              </Link>
              <a
                href="#domain-reports-grid"
                className="px-4 py-2 rounded-lg text-xs font-mono font-bold bg-cyan-500 hover:bg-cyan-400 text-black transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                BROWSE DOMAIN REPORTS
              </a>
              <a
                href="#interactive-console"
                className="px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-colors"
              >
                TACTICAL CONSOLE
              </a>
            </div>
          </div>
        </section>

        {/* Featured Flagship Card: Executive Strategic Brief */}
        <section className="relative p-6 rounded-2xl bg-zinc-950 border border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.12)] space-y-4 overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none transition-transform group-hover:scale-125" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/50">
                  FLAGSHIP OVERVIEW // MULTI-THEATER
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  {EXECUTIVE_REPORT.fileSize}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded bg-emerald-950/30">
                  {EXECUTIVE_REPORT.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-mono text-white group-hover:text-purple-300 transition-colors">
                {EXECUTIVE_REPORT.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {EXECUTIVE_REPORT.description}
              </p>

              {/* Core Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs font-mono text-zinc-400">
                {EXECUTIVE_REPORT.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <span className="text-purple-400 mt-0.5">▶</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics & Actions */}
            <div className="flex flex-col gap-3 min-w-70">
              <div className="grid grid-cols-2 gap-2">
                {EXECUTIVE_REPORT.keyStats.map((stat, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-mono">
                    <span className="text-zinc-500 block truncate">{stat.label}</span>
                    <span className="text-purple-300 font-bold mt-0.5 block">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Link
                  href="/reports/executive-report"
                  className="flex-1 py-2.5 px-4 rounded-lg text-xs font-mono font-bold text-center bg-purple-600 hover:bg-purple-500 text-white transition-colors shadow-md"
                >
                  VIEW EXECUTIVE BRIEF
                </Link>
                <a
                  href={EXECUTIVE_REPORT.publicPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open Raw HTML"
                  className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Strategic Domain Reports Showcase Grid */}
        <section id="domain-reports-grid" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2">
                <span className="text-cyan-400">#</span> STRATEGIC INTELLIGENCE DOSSIERS
              </h3>
              <p className="text-xs font-mono text-zinc-400">
                Core domain reports featuring detailed assessments, threat modeling, and tactical worker annexes
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              REPORTS LOADED FROM /PUBLIC
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
                  {/* Corner Glow Accent */}
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

                    {/* Domain Report 1 Tactical Worker Annexes Pills */}
                    {report.id === "domain-report-1" && (
                      <div className="p-2.5 rounded-lg bg-red-950/20 border border-red-900/40 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-red-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                            4 TACTICAL WORKER ANNEXES:
                          </span>
                          <span className="text-[9px] font-mono text-zinc-500">LEVANT / CENTCOM</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          {WORKER_REPORTS_DOMAIN_1.map((w) => (
                            <Link
                              key={w.id}
                              href={`/reports/${w.id}`}
                              className="px-2 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-[10px] font-mono text-zinc-300 border border-zinc-800 hover:border-red-500/50 truncate block transition-colors"
                              title={w.title}
                            >
                              ▶ {w.workerNumber}: {w.shortTitle}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

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
              Interactive embedded viewer with instant tab switching across all Executive, Domain, and Worker reports
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
            All reports and worker annexes are integrated into the Next.js App Router workspace with high-performance
            static asset delivery, dynamic App Router routes, and URL rewrite support:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
            {/* Executive Report */}
            <div className="p-3 rounded-lg bg-zinc-900 border border-purple-900/60 space-y-1">
              <span className="text-purple-400 font-bold block">Executive Strategic Brief</span>
              <div className="text-zinc-400 text-[11px] space-y-0.5">
                <p>App: <Link href="/reports/executive-report" className="text-zinc-200 underline">/reports/executive-report</Link></p>
                <p>Rewrite: <a href="/executive-report" target="_blank" className="text-zinc-200 underline">/executive-report</a></p>
                <p>File: <a href="/executive-report.html" target="_blank" className="text-zinc-200 underline">/executive-report.html</a></p>
              </div>
            </div>

            {/* Domain Report 1 & Workers */}
            <div className="p-3 rounded-lg bg-zinc-900 border border-cyan-900/60 space-y-1">
              <span className="text-cyan-400 font-bold block">Domain Report 01 + Workers</span>
              <div className="text-zinc-400 text-[11px] space-y-0.5">
                <p>Core App: <Link href="/reports/domain-report-1" className="text-zinc-200 underline">/reports/domain-report-1</Link></p>
                <p>Worker 1.1: <Link href="/reports/worker-1" className="text-zinc-200 underline">/reports/worker-1</Link></p>
                <p>Worker 1.2: <Link href="/reports/worker-1-2" className="text-zinc-200 underline">/reports/worker-1-2</Link></p>
                <p>Worker 1.3: <Link href="/reports/worker-1-3" className="text-zinc-200 underline">/reports/worker-1-3</Link></p>
                <p>Worker 1.4: <Link href="/reports/worker-1-4" className="text-zinc-200 underline">/reports/worker-1-4</Link></p>
              </div>
            </div>

            {/* Domain Report 2 */}
            <div className="p-3 rounded-lg bg-zinc-900 border border-red-900/60 space-y-1">
              <span className="text-red-400 font-bold block">Domain Report 02 (2025)</span>
              <div className="text-zinc-400 text-[11px] space-y-0.5">
                <p>App Route: <Link href="/reports/domain-report-2" className="text-zinc-200 underline">/reports/domain-report-2</Link></p>
                <p>Clean URL: <a href="/domain-report-2" target="_blank" className="text-zinc-200 underline">/domain-report-2</a></p>
                <p>Direct File: <a href="/domain-report-2.html" target="_blank" className="text-zinc-200 underline">/domain-report-2.html</a></p>
              </div>
            </div>

            {/* Domain Report 3 */}
            <div className="p-3 rounded-lg bg-zinc-900 border border-amber-900/60 space-y-1">
              <span className="text-amber-400 font-bold block">Domain Report 03 (Middle East)</span>
              <div className="text-zinc-400 text-[11px] space-y-0.5">
                <p>App Route: <Link href="/reports/domain-report-3" className="text-zinc-200 underline">/reports/domain-report-3</Link></p>
                <p>Clean URL: <a href="/domain-report-3" target="_blank" className="text-zinc-200 underline">/domain-report-3</a> (or <a href="/domain-correction" target="_blank" className="text-zinc-200 underline">/domain-correction</a>)</p>
                <p>Direct File: <a href="/domain-report-3.html" target="_blank" className="text-zinc-200 underline">/domain-report-3.html</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <footer className="w-full bg-zinc-950 border-t border-zinc-900 px-4 sm:px-6 py-4 text-center text-xs font-mono text-zinc-500">
        STRATEGIC DOMAIN INTELLIGENCE CONSOLE // POWERED BY NEXT.JS 16 & TURBOPACK // 8 PUBLIC HTML ARTIFACTS VERIFIED
      </footer>
    </div>
  );
}
