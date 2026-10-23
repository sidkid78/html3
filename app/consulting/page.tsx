import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { CONSULTING_GROUPS, CONSULTING_REPORTS } from "../lib/consulting";
import ConsultingViewer from "../components/ConsultingViewer";

export const metadata: Metadata = {
  title: "AI Consulting Research | Strategic Intelligence Console",
  description:
    "Executive brief, domain reports and worker analyses covering the AI consulting ecosystem, buyer landscape, service offerings and pricing models.",
};

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/30">
      <header className="sticky top-0 z-40 w-full bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-md px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/50 text-emerald-400 font-mono font-bold text-xs hover:bg-emerald-900 transition-colors"
            title="Back to console"
          >
            ←
          </Link>
          <span className="text-xs font-mono font-bold tracking-wider text-white">
            AI CONSULTING RESEARCH
            <span className="ml-2 px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-500/40">
              {CONSULTING_REPORTS.length} ARTIFACTS
            </span>
          </span>
        </div>
        <a
          href="#consulting-viewer"
          className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-black transition-colors"
        >
          INTERACTIVE VIEWER
        </a>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <section className="relative p-6 sm:p-8 rounded-2xl bg-linear-to-b from-zinc-950 to-zinc-900/60 border border-zinc-800/90 overflow-hidden">
          <div className="absolute top-0 -left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-3 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white">
              The Modern{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-300 to-cyan-400">
                AI Consulting Landscape
              </span>
            </h1>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Ecosystem players, enterprise buyer demand, service offerings and the death of pure
              Time &amp; Materials billing, across one executive brief, three domain reports and twelve worker analyses.
            </p>
          </div>
        </section>

        {CONSULTING_GROUPS.map((g) => (
          <section key={g.id} className="space-y-3">
            <div className="border-b border-zinc-800 pb-2">
              <h2 className="text-lg font-bold font-mono text-white">
                <span className="text-emerald-400">#</span> {g.label}
              </h2>
              <p className="text-xs font-mono text-zinc-400">{g.blurb}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CONSULTING_REPORTS.filter((r) => r.group === g.id).map((r) => (
                <div
                  key={r.id}
                  className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 transition-colors flex flex-col justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 uppercase font-bold">
                        {r.label}
                      </span>
                      <span className="text-zinc-500">{r.fileSize}</span>
                    </div>
                    <h3 className="text-sm font-mono font-bold text-white">{r.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{r.description}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <a href={r.publicPath} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                      Raw HTML ↗
                    </a>
                    <Link
                      href={`/consulting/${r.id}`}
                      className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700"
                    >
                      View in app →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="space-y-3">
          <h2 className="text-lg font-bold font-mono text-white">
            <span className="text-emerald-400">#</span> Interactive Viewer
          </h2>
          <ConsultingViewer initialId="executive-brief" />
        </section>
      </main>
    </div>
  );
}
