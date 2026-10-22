"use client";

import React, { useState } from "react";
import { CONSULTING_GROUPS, CONSULTING_REPORTS } from "../lib/consulting";

export default function ConsultingViewer({ initialId }: { initialId: string }) {
  const [activeId, setActiveId] = useState(initialId);
  const [loadedId, setLoadedId] = useState("");
  const active = CONSULTING_REPORTS.find((r) => r.id === activeId) ?? CONSULTING_REPORTS[0];
  const loading = loadedId !== active.id;

  return (
    <div
      id="consulting-viewer"
      className="flex flex-col w-full h-[80vh] rounded-xl border border-zinc-800 bg-black overflow-hidden scroll-mt-20"
    >
      <div className="px-3 py-2 bg-zinc-950 border-b border-zinc-800 space-y-2">
        {CONSULTING_GROUPS.map((g) => (
          <div key={g.id} className="flex items-center gap-1.5 overflow-x-auto">
            <span className="shrink-0 w-32 text-[10px] font-mono uppercase text-zinc-500">{g.label}</span>
            {CONSULTING_REPORTS.filter((r) => r.group === g.id).map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveId(r.id)}
                className={`shrink-0 text-[11px] font-mono uppercase px-2.5 py-1 rounded border transition-colors ${
                  r.id === active.id
                    ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/60 font-bold"
                    : "text-zinc-400 bg-zinc-900/60 border-zinc-800 hover:text-zinc-200 hover:bg-zinc-800/60"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-1.5 bg-zinc-950/90 border-b border-zinc-900 text-[11px] font-mono">
        <span className="text-zinc-200 font-semibold truncate">{active.title}</span>
        <a
          href={active.publicPath}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-2 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700"
        >
          RAW HTML ↗
        </a>
      </div>

      <div className="relative flex-1 bg-black">
        {loading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/90 text-xs font-mono text-zinc-400 gap-2">
            <div className="w-10 h-10 border-2 border-emerald-500/20 border-t-emerald-400 rounded-full animate-spin" />
            <span>LOADING {active.fileSize}…</span>
            <button
              onClick={() => setLoadedId(active.id)}
              className="px-3 py-1 rounded bg-zinc-900 border border-zinc-700 text-emerald-400 hover:border-emerald-500/50"
            >
              Skip →
            </button>
          </div>
        )}
        <iframe
          key={active.id}
          src={active.publicPath}
          title={active.title}
          className="w-full h-full border-0 bg-black"
          onLoad={() => setLoadedId(active.id)}
        />
      </div>
    </div>
  );
}
