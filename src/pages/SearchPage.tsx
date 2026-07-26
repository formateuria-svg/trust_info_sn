import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SearchIcon, SlidersHorizontalIcon, XIcon } from "lucide-react";
import { dossiers } from "../data/dossiers";
import { DossierCard } from "../components/cards/DossierCard";
import {
  CATEGORY_LIST,
  CATEGORIES,
  VERDICTS } from
"../data/constants";
import type { Category, Verdict } from "../data/types";

const VERDICT_KEYS = Object.keys(VERDICTS) as Verdict[];

export function SearchPage() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [category, setCategory] = useState<Category | null>(
    params.get("cat") as Category ?? null
  );
  const [verdict, setVerdict] = useState<Verdict | null>(
    params.get("verdict") as Verdict ?? null
  );

  useEffect(() => {
    const next = new URLSearchParams();
    if (query) next.set("q", query);
    if (category) next.set("cat", category);
    if (verdict) next.set("verdict", verdict);
    setParams(next, { replace: true });
  }, [query, category, verdict, setParams]);

  const results = useMemo(() => {
    return dossiers.filter((d) => {
      const q = query.trim().toLowerCase();
      const matchQ =
      !q ||
      d.claim.toLowerCase().includes(q) ||
      d.summary.toLowerCase().includes(q) ||
      d.location.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q);
      const matchC = !category || d.category === category;
      const matchV = !verdict || d.verdict === verdict;
      return matchQ && matchC && matchV;
    });
  }, [query, category, verdict]);

  const hasFilters = category || verdict || query;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-2xl font-800 text-ink-900 sm:text-3xl">
        Rechercher
      </h1>
      <p className="mt-1 text-ink-600">
        Par média, journaliste, personnalité, événement ou mot-clé.
      </p>

      <div className="mt-5 flex items-center rounded-2xl bg-white px-4 py-3 shadow-card ring-1 ring-ink-900/5 focus-within:ring-2 focus-within:ring-brand-300">
        <SearchIcon className="h-5 w-5 text-ink-500" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher une information, un lieu, une catégorie…"
          className="w-full bg-transparent px-3 text-base focus:outline-none"
          autoFocus />
        
        {query &&
        <button onClick={() => setQuery("")} aria-label="Effacer">
            <XIcon className="h-5 w-5 text-ink-400 hover:text-ink-700" />
          </button>
        }
      </div>

      {/* Filters */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
          <SlidersHorizontalIcon className="h-3.5 w-3.5" />
          Catégorie
        </div>
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {CATEGORY_LIST.map((c) => {
            const meta = CATEGORIES[c];
            const active = category === c;
            return (
              <button
                key={c}
                onClick={() => setCategory(active ? null : c)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                active ? "text-white" : "bg-white text-ink-700 ring-1 ring-ink-900/5"}`
                }
                style={active ? { backgroundColor: meta.color } : {}}>
                
                {c}
              </button>);

          })}
        </div>
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {VERDICT_KEYS.map((v) => {
            const meta = VERDICTS[v];
            const active = verdict === v;
            return (
              <button
                key={v}
                onClick={() => setVerdict(active ? null : v)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                active ? "text-white" : "bg-white text-ink-700 ring-1 ring-ink-900/5"}`
                }
                style={active ? { backgroundColor: meta.color } : {}}>
                
                {meta.label}
              </button>);

          })}
        </div>
      </div>

      <div className="mb-4 mt-6 flex items-center justify-between">
        <p className="text-sm font-semibold text-ink-700">
          {results.length} résultat{results.length > 1 ? "s" : ""}
        </p>
        {hasFilters &&
        <button
          onClick={() => {
            setQuery("");
            setCategory(null);
            setVerdict(null);
          }}
          className="text-sm font-semibold text-brand-600 hover:text-brand-700">
          
            Réinitialiser
          </button>
        }
      </div>

      {results.length === 0 ?
      <div className="flex flex-col items-center rounded-3xl bg-white py-16 text-center shadow-card ring-1 ring-ink-900/5">
          <SearchIcon className="h-10 w-10 text-ink-300" />
          <p className="mt-3 font-semibold text-ink-700">Aucun résultat</p>
          <p className="text-sm text-ink-500">
            Essayez d'autres mots-clés ou retirez des filtres.
          </p>
        </div> :

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((d, i) =>
        <motion.div
          key={d.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i % 4 * 0.04 }}>
          
              <DossierCard dossier={d} />
            </motion.div>
        )}
        </div>
      }
    </div>);

}