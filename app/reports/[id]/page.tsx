import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getReportById,
  DOMAIN_REPORTS,
  WORKER_REPORTS_DOMAIN_1,
  TRADING_REPORTS,
} from "../../lib/reports";
import ReportViewer from "../../components/ReportViewer";

interface ReportPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const params: { id: string }[] = [];

  // Domain Reports
  DOMAIN_REPORTS.forEach((report) => {
    params.push({ id: report.id });
    params.push({ id: String(report.number) });
    params.push({ id: report.slug });
  });

  // Executive Report
  params.push({ id: "executive-report" });
  params.push({ id: "executive" });
  params.push({ id: "executive-strategic-brief" });

  // Domain Correction & Aliases
  params.push({ id: "domain-correction" });
  params.push({ id: "middle-east-theater" });
  params.push({ id: "middle-east" });

  // Worker Reports
  WORKER_REPORTS_DOMAIN_1.forEach((worker) => {
    params.push({ id: worker.id });
    params.push({ id: worker.workerNumber });
    params.push({ id: worker.slug });
  });

  // Trading Executive Report
  params.push({ id: "trading-executive" });
  params.push({ id: "trading-exec" });
  params.push({ id: "trading-executive-report" });

  // Trading Reports (1 and 2)
  TRADING_REPORTS.forEach((report) => {
    params.push({ id: report.id });
    params.push({ id: report.slug });
    params.push({ id: `trading-${report.number}` });
  });

  // EdgeCraft RevOps Runbook
  params.push({ id: "edgecraft-blog" });
  params.push({ id: "edgecraft" });
  params.push({ id: "edgecraft-runbook" });
  params.push({ id: "edgecraft-revops" });

  return params;
}

export async function generateMetadata({ params }: ReportPageProps): Promise<Metadata> {
  const { id } = await params;
  const report = getReportById(id);

  if (!report) {
    return {
      title: "Report Not Found | Intelligence Portal",
    };
  }

  return {
    title: `${report.title} | Strategic Intelligence Console`,
    description: report.description,
  };
}

export default async function ReportPage({ params }: ReportPageProps) {
  const { id } = await params;
  const report = getReportById(id);

  if (!report) {
    notFound();
  }

  const isWorkerReport = report.id.startsWith("worker-1");
  const isExecutiveReport = report.id === "executive-report";

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Global Command Bar */}
      <header className="sticky top-0 z-40 w-full bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-md px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>CONSOLE HUB</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span>/</span>
            <span className="text-zinc-400">
              {isExecutiveReport ? "EXECUTIVE" : isWorkerReport ? "DOMAIN 1 ANNEX" : "REPORTS"}
            </span>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">{report.id.toUpperCase()}</span>
          </div>
        </div>

        {/* Global Report Navigation Bar */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1.5 mr-2">
            <Link
              href="/reports/executive-report"
              className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-all ${
                isExecutiveReport
                  ? "bg-purple-950/80 text-purple-300 border-purple-500/60 font-semibold shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                  : "bg-zinc-900/70 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:bg-zinc-800/60"
              }`}
            >
              EXEC BRIEF
            </Link>

            {DOMAIN_REPORTS.map((r) => {
              const isCurrent = r.id === report.id || (r.id === "domain-report-1" && isWorkerReport);
              return (
                <Link
                  key={r.id}
                  href={`/reports/${r.id}`}
                  className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-all ${
                    isCurrent
                      ? "bg-cyan-950/80 text-cyan-300 border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.2)] font-semibold"
                      : "bg-zinc-900/70 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:bg-zinc-800/60"
                  }`}
                >
                  REP 0{r.number}
                </Link>
              );
            })}
          </div>

          <a
            href={report.publicPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900/40 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>STANDALONE TAB</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full flex flex-col p-2 sm:p-4 md:p-6 max-w-7xl mx-auto gap-4">
        {/* Worker Report Parent Breadcrumb Callout */}
        {isWorkerReport && (
          <div className="flex items-center justify-between p-3 rounded-lg bg-red-950/30 border border-red-900/50 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-zinc-400">TACTICAL INTELLIGENCE ANNEX FOR:</span>
              <Link href="/reports/domain-report-1" className="text-cyan-400 font-bold hover:underline">
                DOMAIN REPORT 01: US-CHINA STRATEGIC COMPETITION
              </Link>
            </div>
            <Link
              href="/reports/domain-report-1"
              className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700"
            >
              ← Back to Core Domain 1
            </Link>
          </div>
        )}

        {/* Report Overview Card */}
        <div className="p-4 sm:p-5 rounded-xl bg-zinc-950 border border-zinc-800/80 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-700/60">
                  {isExecutiveReport
                    ? "EXECUTIVE BRIEF"
                    : isWorkerReport
                    ? "TACTICAL ANNEX"
                    : `DOMAIN REPORT #${report.number}`}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/40">
                  {report.classification}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-emerald-400 border border-emerald-500/40">
                  {report.status}
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white font-mono">
                {report.title}
              </h1>

              <p className="text-sm text-zinc-400 max-w-4xl leading-relaxed">
                {report.description}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 lg:min-w-85">
              {report.keyStats.map((stat, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800/90 flex flex-col">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">{stat.label}</span>
                  <span className="text-sm font-mono font-bold text-cyan-300 mt-0.5">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Threat Vector Badges */}
          <div className="mt-4 pt-3 border-t border-zinc-900 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 uppercase">Core Vectors:</span>
            {report.threatVectors.map((v, i) => (
              <span key={i} className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                • {v}
              </span>
            ))}
          </div>
        </div>

        {/* Embedded Interactive Viewer */}
        <div className="w-full flex-1">
          <ReportViewer currentReport={report} embedded={false} />
        </div>
      </main>
    </div>
  );
}
