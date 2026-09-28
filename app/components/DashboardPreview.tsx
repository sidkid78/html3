"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DOMAIN_REPORTS, DomainReport } from "../lib/reports";
import ReportViewer from "./ReportViewer";

export default function DashboardPreview() {
  const [selectedReportId, setSelectedReportId] = useState<string>(DOMAIN_REPORTS[0].id);

  const selectedReport: DomainReport =
    DOMAIN_REPORTS.find((r) => r.id === selectedReportId) || DOMAIN_REPORTS[0];

  return (
    <div id="interactive-console" className="w-full space-y-4">
      {/* Selector Tabs Bar */}
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

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {DOMAIN_REPORTS.map((report) => {
            const isActive = report.id === selectedReport.id;
            return (
              <button
                key={report.id}
                onClick={() => setSelectedReportId(report.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all border ${
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

      {/* Embedded Viewer */}
      <ReportViewer currentReport={selectedReport} embedded={true} />
    </div>
  );
}
