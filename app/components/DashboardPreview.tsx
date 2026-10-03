"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  DOMAIN_REPORTS,
  EXECUTIVE_REPORT,
  WORKER_REPORTS_DOMAIN_1,
  DomainReport,
  getReportById,
} from "../lib/reports";
import ReportViewer from "./ReportViewer";

export default function DashboardPreview() {
  const [selectedReportId, setSelectedReportId] = useState<string>("executive-report");

  const selectedReport: DomainReport =
    getReportById(selectedReportId) || EXECUTIVE_REPORT;

  const isDomain1Context =
    selectedReport.id === "domain-report-1" ||
    selectedReport.id.startsWith("worker-1");

  return (
    <div id="interactive-console" className="w-full space-y-3">
      {/* Primary Selector Tabs Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-zinc-950 rounded-xl border border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-mono font-semibold text-zinc-300 tracking-wider uppercase">
            LIVE EMBEDDED CONSOLE
          </span>
        </div>

        {/* Primary Tab Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Executive Strategic Brief */}
          <button
            onClick={() => setSelectedReportId("executive-report")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all border ${
              selectedReport.id === "executive-report"
                ? "bg-purple-950/80 text-purple-300 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.25)] font-bold"
                : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:bg-zinc-800"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
            <span>EXEC: Global Threat Posture</span>
          </button>

          {/* Domain Reports 1, 2, 3 */}
          {DOMAIN_REPORTS.map((report) => {
            const isActive =
              report.id === selectedReport.id ||
              (report.id === "domain-report-1" && isDomain1Context);
            return (
              <button
                key={report.id}
                onClick={() => setSelectedReportId(report.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all border ${
                  isActive
                    ? "bg-cyan-950/80 text-cyan-300 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.25)] font-bold"
                    : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:bg-zinc-800"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
                <span>REP 0{report.number}: {report.shortTitle}</span>
              </button>
            );
          })}

          {/* EdgeCraft RevOps Runbook */}
          <button
            onClick={() => setSelectedReportId("edgecraft-blog")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all border ${
              selectedReport.id === "edgecraft-blog"
                ? "bg-amber-950/80 text-amber-300 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.25)] font-bold"
                : "bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:bg-zinc-800"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>EDGECRAFT: RevOps Runbook</span>
          </button>
        </div>

        {/* Action Link to Full Dedicated Page */}
        <Link
          href={`/reports/${selectedReport.id}`}
          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 hover:underline"
        >
          <span>Open Dedicated Page</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {/* Domain 1 Worker Annexes Quick Switcher Bar */}
      {isDomain1Context && (
        <div className="flex items-center justify-between gap-2 p-2.5 bg-zinc-950/90 rounded-lg border border-cyan-900/40 text-xs font-mono overflow-x-auto">
          <div className="flex items-center gap-2 shrink-0 text-cyan-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>DOMAIN 1 TACTICAL ANNEXES:</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto">
            <button
              onClick={() => setSelectedReportId("domain-report-1")}
              className={`px-2.5 py-1 rounded text-[11px] font-medium border transition-colors whitespace-nowrap ${
                selectedReport.id === "domain-report-1"
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-500 font-bold"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200"
              }`}
            >
              Core Synthesis
            </button>

            {WORKER_REPORTS_DOMAIN_1.map((worker) => {
              const isSelected = selectedReport.id === worker.id;
              return (
                <button
                  key={worker.id}
                  onClick={() => setSelectedReportId(worker.id)}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium border transition-colors whitespace-nowrap ${
                    isSelected
                      ? "bg-red-500/20 text-red-300 border-red-500 font-bold"
                      : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200"
                  }`}
                >
                  Worker {worker.workerNumber}: {worker.shortTitle}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Embedded Viewer */}
      <ReportViewer
        currentReport={selectedReport}
        embedded={true}
        onSelectReport={(id) => setSelectedReportId(id)}
      />
    </div>
  );
}
