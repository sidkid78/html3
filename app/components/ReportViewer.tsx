"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { DomainReport, DOMAIN_REPORTS, EXECUTIVE_REPORT, WORKER_REPORTS_DOMAIN_1 } from "../lib/reports";

interface ReportViewerProps {
  currentReport: DomainReport;
  embedded?: boolean;
  onSelectReport?: (reportId: string) => void;
}

export default function ReportViewer({ currentReport, embedded = false, onSelectReport }: ReportViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if current report is Domain Report 1 or one of its workers
  const isDomain1Context =
    currentReport.id === "domain-report-1" ||
    currentReport.id.startsWith("worker-1");

  // Reset loading indicator whenever currentReport changes or iframe is reloaded
  useEffect(() => {
    setIsLoading(true);
  }, [currentReport.id, iframeKey]);

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {
          setIsFullscreen(true);
        });
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
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const getThemeColors = (theme: DomainReport["themeColor"]) => {
    switch (theme) {
      case "cyan":
        return {
          border: "border-cyan-500/40",
          glow: "shadow-[0_0_25px_rgba(6,182,212,0.15)]",
          accent: "text-cyan-400",
          bgBadge: "bg-cyan-950/60 text-cyan-300 border-cyan-500/50",
          button: "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/40",
        };
      case "red":
        return {
          border: "border-red-500/40",
          glow: "shadow-[0_0_25px_rgba(239,68,68,0.15)]",
          accent: "text-red-400",
          bgBadge: "bg-red-950/60 text-red-300 border-red-500/50",
          button: "bg-red-500/20 hover:bg-red-500/30 text-red-300 border-red-500/40",
        };
      case "amber":
        return {
          border: "border-amber-500/40",
          glow: "shadow-[0_0_25px_rgba(245,158,11,0.15)]",
          accent: "text-amber-400",
          bgBadge: "bg-amber-950/60 text-amber-300 border-amber-500/50",
          button: "bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/40",
        };
    }
  };

  const theme = getThemeColors(currentReport.themeColor);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col w-full bg-black text-zinc-100 transition-all duration-300 ${
        isFullscreen
          ? "fixed inset-0 z-50 h-screen w-screen"
          : embedded
          ? "h-175 rounded-xl border border-zinc-800"
          : "h-[calc(100vh-80px)] rounded-xl border border-zinc-800"
      } ${theme.glow}`}
    >
      {/* HUD Control Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-zinc-950/90 border-b border-zinc-800/80 backdrop-blur-md select-none">
        {/* Left: Metadata & Status */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            PORTAL LIVE
          </span>

          <span className="text-zinc-600 hidden sm:inline">|</span>

          <span className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded border ${theme.bgBadge}`}>
            {currentReport.classification}
          </span>

          <span className="text-zinc-300 text-xs font-mono font-semibold truncate max-w-65 md:max-w-none">
            {currentReport.shortTitle}
          </span>

          {isLoading && (
            <span className="text-[11px] font-mono text-cyan-400 animate-pulse flex items-center gap-1 bg-cyan-950/40 px-2 py-0.5 rounded">
              <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              RENDERING INTEL...
            </span>
          )}
        </div>

        {/* Center/Right: Quick Switcher Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {/* Executive Brief Shortcut */}
          <Link
            href={embedded ? "#preview-executive-report" : "/reports/executive-report"}
            onClick={(e) => {
              if (embedded && onSelectReport) {
                e.preventDefault();
                onSelectReport("executive-report");
              }
            }}
            className={`text-[11px] font-mono uppercase px-2.5 py-1 rounded transition-colors whitespace-nowrap border ${
              currentReport.id === "executive-report"
                ? "bg-purple-950/80 text-purple-300 border-purple-500/60 font-bold"
                : "text-zinc-400 bg-zinc-900/60 hover:text-zinc-200 hover:bg-zinc-800/60 border-zinc-800/80"
            }`}
          >
            EXEC BRIEF
          </Link>

          {/* Domain Reports 1, 2, 3 */}
          {DOMAIN_REPORTS.map((rep) => {
            const isActive = rep.id === currentReport.id || (rep.id === "domain-report-1" && currentReport.id.startsWith("worker-1"));
            return (
              <Link
                key={rep.id}
                href={embedded ? `#preview-${rep.id}` : `/reports/${rep.id}`}
                onClick={(e) => {
                  if (embedded && onSelectReport) {
                    e.preventDefault();
                    onSelectReport(rep.id);
                  }
                }}
                className={`text-[11px] font-mono uppercase px-2.5 py-1 rounded transition-colors whitespace-nowrap border ${
                  isActive
                    ? `${theme.bgBadge} font-bold shadow-sm`
                    : "text-zinc-400 bg-zinc-900/60 hover:text-zinc-200 hover:bg-zinc-800/60 border-zinc-800/80"
                }`}
              >
                REP {rep.number}
              </Link>
            );
          })}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Refresh Frame */}
          <button
            onClick={handleRefresh}
            title="Reload Report Frame"
            className="p-1.5 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 transition-colors border border-zinc-800"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>

          {/* Direct Raw Link */}
          <a
            href={currentReport.publicPath}
            target="_blank"
            rel="noopener noreferrer"
            title="Open Raw Standalone Report (New Tab)"
            className="flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-700/60"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="hidden sm:inline">RAW HTML</span>
          </a>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            className={`flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded transition-colors border ${theme.button}`}
          >
            {isFullscreen ? (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>EXIT</span>
              </>
            ) : (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                <span>EXPAND</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Domain Report 1 Tactical Annexes Sub-Bar */}
      {isDomain1Context && (
        <div className="flex items-center justify-between gap-2 px-4 py-1.5 bg-zinc-950 border-b border-zinc-800 text-[11px] font-mono overflow-x-auto select-none">
          <div className="flex items-center gap-2 shrink-0 text-zinc-400">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></span>
            <span className="font-bold text-cyan-300">DOMAIN 1 ANNEXES:</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto">
            {/* Core Domain Report 1 Link */}
            <Link
              href={embedded ? "#preview-domain-report-1" : "/reports/domain-report-1"}
              onClick={(e) => {
                if (embedded && onSelectReport) {
                  e.preventDefault();
                  onSelectReport("domain-report-1");
                }
              }}
              className={`px-2 py-0.5 rounded border transition-colors whitespace-nowrap ${
                currentReport.id === "domain-report-1"
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-500 font-bold"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200"
              }`}
            >
              Core: Strategic Comp.
            </Link>

            {/* 4 Worker Reports */}
            {WORKER_REPORTS_DOMAIN_1.map((worker) => {
              const isSelected = currentReport.id === worker.id;
              return (
                <Link
                  key={worker.id}
                  href={embedded ? `#preview-${worker.id}` : `/reports/${worker.id}`}
                  onClick={(e) => {
                    if (embedded && onSelectReport) {
                      e.preventDefault();
                      onSelectReport(worker.id);
                    }
                  }}
                  className={`px-2 py-0.5 rounded border transition-colors whitespace-nowrap ${
                    isSelected
                      ? "bg-red-500/20 text-red-300 border-red-500 font-bold shadow-sm"
                      : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200"
                  }`}
                >
                  Annex {worker.workerNumber}: {worker.shortTitle}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Frame Container */}
      <div className="relative flex-1 w-full h-full overflow-hidden bg-black">
        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="relative flex items-center justify-center mb-4">
              <div className="w-12 h-12 border-2 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin"></div>
              <div className="absolute font-mono text-[9px] text-cyan-400 tracking-tighter">INTEL</div>
            </div>
            <p className="text-xs font-mono text-zinc-300 tracking-wider uppercase mb-1">
              INITIALIZING STRATEGIC DOMAIN ASSETS...
            </p>
            <p className="text-[11px] font-mono text-zinc-500">
              Payload: {currentReport.fileSize} // Node: Turbopack Local
            </p>
          </div>
        )}

        {/* Embedded Report Frame */}
        <iframe
          key={`${currentReport.id}-${iframeKey}`}
          src={currentReport.publicPath}
          title={currentReport.title}
          className="w-full h-full border-0 bg-black"
          onLoad={() => setIsLoading(false)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>

      {/* Subtle Bottom Status Bar */}
      <div className="flex items-center justify-between px-3 py-1 bg-zinc-950/95 border-t border-zinc-900 text-[10px] font-mono text-zinc-500 select-none">
        <div className="flex items-center gap-3">
          <span>THEATER: {currentReport.theater}</span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">FILE: {currentReport.publicPath}</span>
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <span>REVISION: {currentReport.revision}</span>
          <span>•</span>
          <span className="text-emerald-400">READY</span>
        </div>
      </div>
    </div>
  );
}
