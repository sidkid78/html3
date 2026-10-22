import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CONSULTING_REPORTS, getConsultingReport } from "../../lib/consulting";
import ConsultingViewer from "../../components/ConsultingViewer";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return CONSULTING_REPORTS.map((r) => ({ id: r.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const report = getConsultingReport(id);
  if (!report) return { title: "Report Not Found | Intelligence Portal" };
  return {
    title: `${report.title} | AI Consulting Research`,
    description: report.description,
  };
}

export default async function ConsultingReportPage({ params }: PageProps) {
  const { id } = await params;
  const report = getConsultingReport(id);
  if (!report) notFound();

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans">
      <header className="sticky top-0 z-40 bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-md px-4 py-3 flex items-center justify-between text-xs font-mono">
        <Link href="/consulting" className="px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/60 text-zinc-300">
          ← CONSULTING RESEARCH
        </Link>
        <span className="text-emerald-400 font-semibold">{report.id.toUpperCase()}</span>
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 space-y-4">
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-bold font-mono text-white">{report.title}</h1>
          <p className="text-sm text-zinc-400 max-w-4xl">{report.description}</p>
        </div>
        <ConsultingViewer initialId={report.id} />
      </main>
    </div>
  );
}
