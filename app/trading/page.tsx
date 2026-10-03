import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TradingConsole from "../components/TradingConsole";

export const metadata: Metadata = {
  title: "Autonomous Multi-Agent Trading Systems | Quantitative Intelligence Suite",
  description:
    "Institutional Next.js portal providing interactive executive synthesis, commercial state of the art, and academic theoretical foundations for multi-agent reinforcement learning (MARL) in financial markets.",
};

export default function TradingPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Global Command Bar */}
      <header className="sticky top-0 z-40 w-full bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-md px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/50 text-cyan-400 font-mono font-bold text-xs shadow-[0_0_12px_rgba(6,182,212,0.3)] hover:bg-cyan-900 transition-colors"
            title="Return to Defense Intelligence Console"
          >
            ←
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-wider text-white">
                QUANTITATIVE MULTI-AGENT TRADING CONSOLE
              </span>
              <span className="hidden sm:inline px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                3 ARTIFACT SUITE
              </span>
            </div>
            <p className="text-[10px] font-mono text-zinc-400">
              NEXT.JS 16 HIGH-TEMPO OPERATIONS // COMMERCIAL SOTA, ACADEMIC MARL & EXECUTIVE DIRECTIVES
            </p>
          </div>
        </div>

        {/* Global Nav Badges */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>SYSTEM ONLINE</span>
            <span className="text-zinc-600">|</span>
            <span className="text-cyan-400">3 VERIFIED PUBLICATIONS</span>
          </div>

          <Link
            href="/"
            className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 transition-colors"
          >
            GLOBAL CONSOLE
          </Link>

          <a
            href="#interactive-trading-viewer"
            className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-black transition-colors"
          >
            INTERACTIVE VIEWER
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        {/* Hero Section */}
        <section className="relative p-6 sm:p-8 md:p-10 rounded-2xl bg-linear-to-b from-zinc-950 to-zinc-900/60 border border-zinc-800/90 shadow-2xl overflow-hidden">
          {/* Ambient Glow Effects */}
          <div className="absolute top-0 -left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-4xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/50">
                EXECUTIVE BRIEFING INCLUDED
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-zinc-900 text-zinc-300 border border-zinc-700">
                REPORT 01: COMMERCIAL SOTA
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-red-950/80 text-red-300 border border-red-500/40">
                REPORT 02: SIM-TO-REAL ABYSS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-mono tracking-tight text-white leading-tight">
              Multi-Agent Trading Systems <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-400">
                Quantitative Intelligence Portal
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
              Unified Next.js intelligence interface integrating three landmark quantitative publications:
              the Executive Briefing on dual-track C++/FPGA architectures and regulatory standards,
              Commercial SOTA on virtual auctions and SOR execution, and Academic Deep Dives into
              Heterogeneous Agent Models (HAMs), Markov Perfect Equilibrium, and the Sim-to-Real Abyss.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#interactive-trading-viewer"
                className="px-4 py-2 rounded-lg text-xs font-mono font-bold bg-cyan-500 hover:bg-cyan-400 text-black transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                OPEN INTERACTIVE HUD VIEWER
              </a>
              <a
                href="#three-pillar-overview"
                className="px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-colors"
              >
                EXPLORE 3 CORE PUBLICATIONS
              </a>
            </div>
          </div>
        </section>

        {/* 3 Pillars Overview Section */}
        <section id="three-pillar-overview" className="space-y-4 scroll-mt-20">
          <div className="border-b border-zinc-800 pb-3">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              PUBLICATION MATRIX
            </span>
            <h2 className="text-2xl font-bold font-mono text-white mt-1">
              Three Distinct Analytical Angles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Executive Briefing Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-cyan-500/50 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40 uppercase font-bold">
                    EXECUTIVE BRIEF
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">7.1 MB</span>
                </div>
                <h3 className="text-lg font-mono font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Strategic Integration of Multi-Agent Systems
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Synthesizes institutional hedge fund viability, the strict 2-50ms latency boundary, mandatory dual-track C++/FPGA isolation, and regulatory risk compliance (SR 11-7, SEC 15c3-5, MiFID II).
                </p>

                <div className="space-y-1.5 pt-2 border-t border-zinc-900 text-xs font-mono text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Latency Drag: 2-50ms Boundary
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Dual-Track Air-Gapped Arch
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Fed SR 11-7 & SEC 15c3-5
                  </div>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between">
                <a
                  href="/trading-executive.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                >
                  View Full HTML ↗
                </a>
                <Link
                  href="/reports/trading-executive"
                  className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700"
                >
                  App Route →
                </Link>
              </div>
            </div>

            {/* Commercial Report 1 Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-cyan-500/50 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-cyan-300 border border-zinc-700 uppercase font-bold">
                    REPORT 01 // SOTA
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">5.4 MB</span>
                </div>
                <h3 className="text-lg font-mono font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Commercial State of the Art
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  End-to-end production architecture: Sensory feature extractors, virtual internal auctions for alpha consensus, low-latency Aeron/ZeroMQ buses, and FIX execution reconciliation.
                </p>

                <div className="space-y-1.5 pt-2 border-t border-zinc-900 text-xs font-mono text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Virtual Auction Allocation
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Aeron / Kafka Messaging
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Pre-Trade Atomic Kill Switches
                  </div>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between">
                <a
                  href="/trading-report-1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                >
                  View Full HTML ↗
                </a>
                <Link
                  href="/reports/trading-report-1"
                  className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700"
                >
                  App Route →
                </Link>
              </div>
            </div>

            {/* Academic Report 2 Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-red-500/50 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-500/40 uppercase font-bold">
                    REPORT 02 // THEORY
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">8.2 MB</span>
                </div>
                <h3 className="text-lg font-mono font-bold text-white group-hover:text-red-300 transition-colors">
                  The Sim-to-Real Abyss
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Rigorous academic exploration of Heterogeneous Agent Models (HAMs), Markov Perfect Equilibrium, CTDE training, COMA credit assignment, toxic order flow, and systemic flash crashes.
                </p>

                <div className="space-y-1.5 pt-2 border-t border-zinc-900 text-xs font-mono text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="text-red-400">▸</span> Non-Stationary Moving Targets
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400">▸</span> COMA Counterfactual Policy
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400">▸</span> 12-Term Academic Glossary
                  </div>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between">
                <a
                  href="/trading-report-2.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-red-400 hover:text-red-300 flex items-center gap-1 font-semibold"
                >
                  View Full HTML ↗
                </a>
                <Link
                  href="/reports/trading-report-2"
                  className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700"
                >
                  App Route →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Live Interactive Console with Viewer & Glossary */}
        <TradingConsole />
      </main>

      {/* Global Footer */}
      <footer className="mt-16 border-t border-zinc-900 bg-zinc-950/80 px-6 py-8 text-center text-xs font-mono text-zinc-500 space-y-2">
        <div>
          QUANTITATIVE MULTI-AGENT TRADING OPERATIONS // 3 REPORT ARTIFACTS VERIFIED
        </div>
        <div className="text-[11px] text-zinc-600">
          Integrated with Next.js 16 App Router &bull; C++ / FPGA Execution Boundaries &bull; Fed SR 11-7 Compliance
        </div>
      </footer>
    </div>
  );
}
