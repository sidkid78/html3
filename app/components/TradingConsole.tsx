"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { TRADING_REPORTS, TRADING_EXECUTIVE_REPORT } from "../lib/reports";

interface GlossaryItem {
  term: string;
  category: "Game Theory" | "Microstructure" | "Reinforcement Learning" | "Regulatory / Risk";
  definition: string;
  sourceDoc: string;
}

const GLOSSARY_TERMS: GlossaryItem[] = [
  {
    term: "Adverse Selection (Glosten-Milgrom)",
    category: "Microstructure",
    definition:
      "Information asymmetry where informed agents exploit stale quotes posted by slower market makers or liquidity providers, causing systematic losses on passive fills.",
    sourceDoc: "Trading Report 2",
  },
  {
    term: "Centralized Training with Decentralized Execution (CTDE)",
    category: "Reinforcement Learning",
    definition:
      "A paradigm where critic networks access global market state and competitor actions during offline training, while actors execute independently on local private observations in live trading.",
    sourceDoc: "Trading Report 2",
  },
  {
    term: "Counterfactual Multi-Agent (COMA) Credit Assignment",
    category: "Reinforcement Learning",
    definition:
      "Policy gradient method using a centralized critic to compute counterfactual baselines, isolating the exact marginal alpha or risk contribution of a specific agent from team P&L.",
    sourceDoc: "Trading Report 2",
  },
  {
    term: "Heterogeneous Agent Models (HAMs)",
    category: "Game Theory",
    definition:
      "Market representations featuring boundedly rational agents with conflicting heuristics (e.g., fundamentalists vs. chartists/momentum followers) that endogenously generate stylized facts like volatility clustering.",
    sourceDoc: "Trading Report 2",
  },
  {
    term: "Markov Perfect Equilibrium (MPE)",
    category: "Game Theory",
    definition:
      "Game-theoretic profile where each agent's strategy is optimal given opponent policies, conditioning strictly on current payoff-relevant states rather than entire historical trajectories.",
    sourceDoc: "Trading Report 2",
  },
  {
    term: "Minority Game & El Farol Mechanics",
    category: "Game Theory",
    definition:
      "Inductive reasoning framework where agents win only if they take the minority side (e.g., selling when majority buys), modeling crowded trade unwinds and liquidity squeezes.",
    sourceDoc: "Trading Report 2",
  },
  {
    term: "Moving Target Problem (Non-Stationarity)",
    category: "Reinforcement Learning",
    definition:
      "Violation of Markov decision process stationarity caused by simultaneous learning among competing agents, invalidating standard convergence guarantees under Fed SR 11-7.",
    sourceDoc: "Trading Report 1 & 2",
  },
  {
    term: "Quantal Response Equilibrium (QRE)",
    category: "Game Theory",
    definition:
      "Statistical extension of Nash equilibrium incorporating human or model error, where agents play better responses more frequently while accounting for noisy competitor actions.",
    sourceDoc: "Trading Report 2",
  },
  {
    term: "Reflexivity (Soros Dynamic)",
    category: "Microstructure",
    definition:
      "Feedback loop where market participants' cognitive biases alter price distributions, which in turn feed back to reshape participants' future expectations and algorithmic rules.",
    sourceDoc: "Trading Report 2",
  },
  {
    term: "Sim-to-Real Abyss & MA-IRL Equifinality",
    category: "Reinforcement Learning",
    definition:
      "Failure of backtested MARL policies in live markets due to toxic order flow, execution slippage, queue priority decay, and multiple distinct reward functions yielding identical simulated paths.",
    sourceDoc: "Trading Report 2",
  },
  {
    term: "SEC Rule 15c3-5 & Decoupled Collars",
    category: "Regulatory / Risk",
    definition:
      "Mandate requiring deterministic pre-trade risk controls (capital limits, price collars) to reside outside the trading logic loop, forbidding multi-agent negotiation over credit limits.",
    sourceDoc: "Trading Executive & Report 1",
  },
  {
    term: "MiFID II Quote-to-Trade Ratios & Kill Switches",
    category: "Regulatory / Risk",
    definition:
      "Regulatory enforcement of atomic kill switches capable of instantly canceling outstanding orders across all lit and dark venues, alongside strict thresholds on algorithmic order cancellations.",
    sourceDoc: "Trading Executive & Report 1",
  },
];

export default function TradingConsole() {
  const [selectedReportId, setSelectedReportId] = useState<string>("trading-executive");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loadedReportKey, setLoadedReportKey] = useState<string>("");
  const [iframeKey, setIframeKey] = useState(0);
  const [deviceScale, setDeviceScale] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [glossaryFilter, setGlossaryFilter] = useState<string>("All");
  const [glossarySearch, setGlossarySearch] = useState<string>("");
  const [killSwitchEngaged, setKillSwitchEngaged] = useState<boolean>(false);
  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const allReports = [TRADING_EXECUTIVE_REPORT, ...TRADING_REPORTS];
  const activeReport = allReports.find((r) => r.id === selectedReportId) || TRADING_EXECUTIVE_REPORT;

  const currentKey = `${selectedReportId}-${iframeKey}`;
  const isLoading = loadedReportKey !== currentKey;

  // Auto-dismiss safety timer (800ms) ensuring the loading overlay never freezes
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadedReportKey(currentKey);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentKey]);

  const selectReport = (id: string) => {
    if (id !== selectedReportId) {
      setSelectedReportId(id);
    }
  };

  const handleRefresh = () => {
    setIframeKey((prev) => prev + 1);
  };

  const toggleFullscreen = () => {
    if (!viewerContainerRef.current) return;
    if (!isFullscreen) {
      if (viewerContainerRef.current.requestFullscreen) {
        viewerContainerRef.current.requestFullscreen().catch(() => setIsFullscreen(true));
      } else {
        setIsFullscreen(true);
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  const filteredGlossary = GLOSSARY_TERMS.filter((item) => {
    const matchesCategory = glossaryFilter === "All" || item.category === glossaryFilter;
    const matchesSearch =
      glossarySearch === "" ||
      item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.definition.toLowerCase().includes(glossarySearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* 3-Tab Fast Switcher Card Header */}
      <section id="interactive-trading-viewer" className="space-y-4 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                Interactive Multi-Agent HUD & Document Switcher
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
              Live Artifact Telemetry & Document Viewer
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
              Seamlessly preview and analyze all 3 quantitative trading publications within the Next.js console
            </p>
          </div>

          {/* Quick Page Links */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-zinc-500 mr-1 hidden sm:inline">Direct Views:</span>
            <a
              href="/trading-executive.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-cyan-300 border border-zinc-700/80 transition-colors"
            >
              Exec Brief ↗
            </a>
            <a
              href="/trading-report-1.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-cyan-300 border border-zinc-700/80 transition-colors"
            >
              Report 1 ↗
            </a>
            <a
              href="/trading-report-2.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-red-300 border border-zinc-700/80 transition-colors"
            >
              Report 2 ↗
            </a>
          </div>
        </div>

        {/* Tab Selection Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {allReports.map((report, idx) => {
            const isSelected = selectedReportId === report.id;
            return (
              <button
                key={report.id}
                onClick={() => selectReport(report.id)}
                className={`p-4 rounded-xl text-left transition-all border relative overflow-hidden group ${
                  isSelected
                    ? "bg-zinc-900 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.25)] ring-1 ring-cyan-500/50"
                    : "bg-zinc-950/80 border-zinc-800/80 hover:bg-zinc-900/50 hover:border-zinc-700"
                }`}
              >
                {/* Glow accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-opacity ${
                    isSelected ? "bg-cyan-500/20 opacity-100" : "bg-cyan-500/5 opacity-0 group-hover:opacity-100"
                  }`}
                />

                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected
                        ? "bg-cyan-950 text-cyan-300 border border-cyan-500/40"
                        : "bg-zinc-900 text-zinc-400 border border-zinc-800"
                    }`}
                  >
                    PAGE 0{idx + 1} {"//"} {report.id === "trading-executive" ? "EXECUTIVE" : `REPORT ${report.number}`}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">{report.fileSize}</span>
                </div>

                <h4 className="text-sm font-mono font-bold text-white line-clamp-1 group-hover:text-cyan-200 transition-colors">
                  {report.shortTitle}
                </h4>
                <p className="text-xs text-zinc-400 line-clamp-2 mt-1 leading-relaxed">
                  {report.description}
                </p>

                <div className="mt-3 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono">
                  <span className={isSelected ? "text-cyan-400 font-semibold" : "text-zinc-500"}>
                    {isSelected ? "● ACTIVE VIEWER" : "CLICK TO INSPECT"}
                  </span>
                  <span className="text-zinc-500">HTML HUD</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Embedded Tactical Viewer Screen */}
        <div
          ref={viewerContainerRef}
          className={`rounded-2xl border bg-black overflow-hidden flex flex-col transition-all shadow-2xl ${
            isFullscreen
              ? "fixed inset-0 z-50 rounded-none border-none"
              : "border-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          }`}
          style={{ height: isFullscreen ? "100vh" : "780px" }}
        >
          {/* Viewer Toolbar */}
          <div className="bg-zinc-950 px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between flex-wrap gap-2 text-xs font-mono select-none">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></span>
              <span className="font-bold text-white tracking-wide uppercase">
                {activeReport.shortTitle}
              </span>
              <span className="text-zinc-600 hidden sm:inline">|</span>
              <span className="text-[11px] text-zinc-400 hidden sm:inline">
                {activeReport.publicPath}
              </span>
            </div>

            {/* Viewer Controls */}
            <div className="flex items-center gap-2">
              {/* Scale preview */}
              <div className="hidden lg:flex items-center gap-1 bg-zinc-900 border border-zinc-800 p-0.5 rounded-lg text-[10px]">
                <button
                  onClick={() => setDeviceScale("desktop")}
                  className={`px-2 py-0.5 rounded ${
                    deviceScale === "desktop" ? "bg-cyan-950 text-cyan-300 font-bold" : "text-zinc-400"
                  }`}
                  title="Full Width"
                >
                  DESKTOP
                </button>
                <button
                  onClick={() => setDeviceScale("tablet")}
                  className={`px-2 py-0.5 rounded ${
                    deviceScale === "tablet" ? "bg-cyan-950 text-cyan-300 font-bold" : "text-zinc-400"
                  }`}
                  title="768px Width"
                >
                  TABLET
                </button>
                <button
                  onClick={() => setDeviceScale("mobile")}
                  className={`px-2 py-0.5 rounded ${
                    deviceScale === "mobile" ? "bg-cyan-950 text-cyan-300 font-bold" : "text-zinc-400"
                  }`}
                  title="420px Width"
                >
                  MOBILE
                </button>
              </div>

              {/* Reload */}
              <button
                onClick={handleRefresh}
                className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors text-[11px]"
                title="Reload Iframe"
              >
                ↻ RELOAD
              </button>

              {/* Open Direct */}
              <a
                href={activeReport.publicPath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-cyan-400 border border-zinc-800 transition-colors text-[11px]"
                title="Open in new window"
              >
                OPEN DIRECT ↗
              </a>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="px-2.5 py-1 rounded bg-cyan-600 hover:bg-cyan-500 text-black font-bold transition-colors text-[11px]"
                title="Toggle Fullscreen"
              >
                {isFullscreen ? "EXIT FULLSCREEN" : "FULLSCREEN"}
              </button>
            </div>
          </div>

          {/* Iframe Viewport */}
          <div className="flex-1 w-full bg-zinc-950 relative overflow-hidden flex items-center justify-center">
            {/* Loading Indicator */}
            {isLoading && (
              <div
                onClick={() => setLoadedReportKey(currentKey)}
                className="absolute inset-0 z-20 bg-black/90 backdrop-blur-xs flex flex-col items-center justify-center gap-3 cursor-pointer select-none"
                title="Click anywhere to skip loading screen"
              >
                <div className="w-10 h-10 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                <div className="font-mono text-xs text-cyan-400 tracking-wider animate-pulse">
                  INITIALIZING QUANT TELEMETRY HUD...
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLoadedReportKey(currentKey);
                  }}
                  className="mt-1 px-3 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 border border-zinc-700 hover:border-cyan-500/50 transition-colors shadow-sm"
                >
                  Skip Loading Screen →
                </button>
              </div>
            )}

            <div
              className={`h-full transition-all duration-300 flex items-center justify-center ${
                deviceScale === "desktop"
                  ? "w-full"
                  : deviceScale === "tablet"
                  ? "w-[768px] border-x border-zinc-800 shadow-2xl"
                  : "w-[420px] border-x border-zinc-800 shadow-2xl"
              }`}
            >
              <iframe
                key={currentKey}
                src={activeReport.publicPath}
                title={activeReport.title}
                className="w-full h-full border-none bg-black"
                onLoad={() => setLoadedReportKey(currentKey)}
                allow="fullscreen"
              />
            </div>
          </div>

          {/* Viewer Footer Bar with Sequential Next/Prev */}
          <div className="bg-zinc-950 px-4 py-2 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-4">
              <span className="text-zinc-500">
                CLASSIFICATION:{" "}
                <strong className="text-cyan-400 font-semibold">{activeReport.classification}</strong>
              </span>
              <span className="hidden md:inline text-zinc-600">|</span>
              <span className="hidden md:inline text-zinc-500">
                REVISION: <span className="text-zinc-300">{activeReport.revision}</span>
              </span>
            </div>

            {/* Quick Sequential Navigation */}
            <div className="flex items-center gap-2">
              {selectedReportId === "trading-executive" && (
                <button
                  onClick={() => selectReport("trading-report-1")}
                  className="px-3 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-900 transition-colors font-bold text-[11px]"
                >
                  NEXT PAGE: Commercial SOTA →
                </button>
              )}
              {selectedReportId === "trading-report-1" && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => selectReport("trading-executive")}
                    className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 transition-colors text-[11px]"
                  >
                    ← PREV: Exec Brief
                  </button>
                  <button
                    onClick={() => selectReport("trading-report-2")}
                    className="px-3 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-900 transition-colors font-bold text-[11px]"
                  >
                    NEXT PAGE: Academic Deep Dive →
                  </button>
                </div>
              )}
              {selectedReportId === "trading-report-2" && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => selectReport("trading-report-1")}
                    className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 transition-colors text-[11px]"
                  >
                    ← PREV: Report 1
                  </button>
                  <button
                    onClick={() => selectReport("trading-executive")}
                    className="px-3 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-900 transition-colors font-bold text-[11px]"
                  >
                    RETURN TO EXEC BRIEFING ↻
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Report Metadata & Tactical Breakdown */}
      <section className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40 uppercase font-bold">
              DOCUMENT SYNTHESIS // {activeReport.id.toUpperCase()}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mt-2">
              {activeReport.title}
            </h3>
            <p className="text-xs font-mono text-zinc-400 mt-1">{activeReport.theater}</p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/reports/${activeReport.id}`}
              className="text-xs font-mono px-3 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
              STANDALONE REPORT ROUTE →
            </Link>
          </div>
        </div>

        {/* Key Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {activeReport.keyStats.map((stat, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800/80 flex flex-col justify-between"
            >
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide">
                {stat.label}
              </span>
              <span className="text-base sm:text-lg font-mono font-bold text-cyan-300 mt-1">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Highlights & Risk Vectors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-cyan-500 rounded-xs"></span>
              CORE STRATEGIC & PRODUCTION HIGHLIGHTS
            </h4>
            <div className="space-y-2">
              {activeReport.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/60 text-xs text-zinc-300 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="text-cyan-400 font-mono font-bold mt-0.5">0{idx + 1}.</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-red-500 rounded-xs"></span>
              CRITICAL MICROSTRUCTURE & REGULATORY VECTORS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeReport.threatVectors.map((vector, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-red-950/20 border border-red-900/30 flex items-center gap-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-xs font-mono font-semibold text-red-200">{vector}</span>
                </div>
              ))}
            </div>

            {/* Kill Switch Simulation Trigger */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 mt-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      killSwitchEngaged ? "bg-red-500 animate-ping" : "bg-emerald-500"
                    }`}
                  ></span>
                  MIFID II / SEC 15c3-5 KILL SWITCH COLLAR
                </span>
                <button
                  onClick={() => setKillSwitchEngaged(!killSwitchEngaged)}
                  className={`text-[10px] font-mono font-bold px-3 py-1 rounded transition-colors ${
                    killSwitchEngaged
                      ? "bg-red-600 text-white"
                      : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                  }`}
                >
                  {killSwitchEngaged ? "ENGAGED (ORDERS PURGED)" : "TEST KILL SWITCH"}
                </button>
              </div>
              <p className="text-[11px] font-mono text-zinc-400 leading-relaxed">
                {killSwitchEngaged
                  ? "SYSTEM STATE: ALL TRADING SESSIONS ISOLATED. PENDING CHILD ORDERS RECALLED ACROSS FIX ENGINES. SHUTDOWN COMPLETED IN < 500μs."
                  : "SIMULATION MONITOR: Pre-trade price collars and message-rate limits armed. Decoupled from neural model reasoning."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latency & Architectural Matrix */}
      <section className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 space-y-6">
        <div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/40 uppercase font-bold">
            LATENCY BOUNDARIES & PIPELINE HIERARCHY
          </span>
          <h3 className="text-2xl font-bold font-mono text-white mt-2">
            The Latency Abyss: Multi-Agent AI vs. Sub-Millisecond Execution
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
            Why multi-agent systems thrive in alpha research and portfolio sizing, but require deterministic C++/FPGA air-gaps for live execution
          </p>
        </div>

        {/* Latency Breakdown Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-cyan-500/30 space-y-2">
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
              1. SENSORY & ALPHA DISCOVERY
            </span>
            <div className="text-xl font-mono font-bold text-white">100ms - 10 Minutes</div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Multi-persona LLM debate, unstructured alternative data normalization, and macro signal fusion. Tolerates higher latency.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-amber-500/30 space-y-2">
            <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">
              2. RL CONSENSUS & SIZING
            </span>
            <div className="text-xl font-mono font-bold text-white">2ms - 50ms Drag</div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Internal virtual auctions and CTDE critic evaluations. Neural forward pass introduces latency unsuited for HFT tick races.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-emerald-500/30 space-y-2">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
              3. SMART ORDER ROUTING & RISK
            </span>
            <div className="text-xl font-mono font-bold text-white">&lt; 10 Microseconds</div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Deterministic C++, Rust, and FPGA cores slicing parent orders, evaluating FIFO queue priority, and enforcing credit collars.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Academic Glossary from Report 2 */}
      <section className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-500/40 uppercase font-bold">
              THEORETICAL FOUNDATIONS
            </span>
            <h3 className="text-2xl font-bold font-mono text-white mt-2">
              Definitive Academic Glossary (Trading Report 2)
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
              Explore mathematical equilibrium, game theory, and market microstructure definitions
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search concepts or definitions..."
              value={glossarySearch}
              onChange={(e) => setGlossarySearch(e.target.value)}
              className="w-full px-3 py-1.5 bg-zinc-900 border border-zinc-700 rounded-lg text-xs font-mono text-white placeholder-zinc-500 focus:outline-hidden focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          {["All", "Game Theory", "Reinforcement Learning", "Microstructure", "Regulatory / Risk"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setGlossaryFilter(category)}
                className={`text-xs font-mono px-3 py-1 rounded-full transition-colors ${
                  glossaryFilter === category
                    ? "bg-cyan-500 text-black font-bold"
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Glossary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredGlossary.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">{item.sourceDoc}</span>
                </div>
                <h5 className="text-sm font-mono font-bold text-cyan-300 mb-2">{item.term}</h5>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.definition}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
