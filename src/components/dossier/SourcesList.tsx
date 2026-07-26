import React from "react";
import {
  LinkIcon,
  ShieldCheckIcon,
  ShieldAlertIcon,
  ExternalLinkIcon } from
"lucide-react";
import type { SourceRef } from "../../data/types";

export function SourcesList({ sources }: {sources: SourceRef[];}) {
  return (
    <ul className="space-y-2.5">
      {sources.map((s) =>
      <li key={s.id}>
          <a
          href={s.url}
          className="group flex items-center gap-3 rounded-xl bg-white p-3 shadow-card ring-1 ring-ink-900/5 transition hover:ring-brand-300">
          
            <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
            s.reliable ?
            "bg-emerald-50 text-emerald-600" :
            "bg-amber-50 text-amber-600"}`
            }>
            
              {s.reliable ?
            <ShieldCheckIcon className="h-5 w-5" /> :

            <ShieldAlertIcon className="h-5 w-5" />
            }
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink-900">
                {s.title}
              </p>
              <p className="flex items-center gap-1 text-xs text-ink-500">
                <LinkIcon className="h-3 w-3" />
                {s.outlet}
                <span
                className={`ml-1 rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                s.reliable ?
                "bg-emerald-50 text-emerald-700" :
                "bg-amber-50 text-amber-700"}`
                }>
                
                  {s.reliable ? "Source fiable" : "À recouper"}
                </span>
              </p>
            </div>
            <ExternalLinkIcon className="h-4 w-4 shrink-0 text-ink-400 transition group-hover:text-brand-600" />
          </a>
        </li>
      )}
    </ul>);

}