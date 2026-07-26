import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { GaugeCircleIcon, SearchIcon, InfoIcon } from "lucide-react";
import { mediaOutlets } from "../data/mediaOutlets";
import { MediaOutletCard } from "../components/media/MediaOutletCard";

type Sort = "credibility" | "reactivity" | "contested" | "corrections";

const SORTS: {key: Sort;label: string;}[] = [
{ key: "credibility", label: "Crédibilité" },
{ key: "reactivity", label: "Réactivité" },
{ key: "contested", label: "Les plus contestés" },
{ key: "corrections", label: "Les plus corrigés" }];


export function ReliabilityPage() {
  const [sort, setSort] = useState<Sort>("credibility");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    let l = [...mediaOutlets];
    if (query.trim()) {
      l = l.filter((m) =>
      m.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    l.sort((a, b) => {
      switch (sort) {
        case "reactivity":
          return b.reactivity - a.reactivity;
        case "contested":
          return b.contested - a.contested;
        case "corrections":
          return b.correctionRate - a.correctionRate;
        default:
          return b.credibility - a.credibility;
      }
    });
    return l;
  }, [sort, query]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
          <GaugeCircleIcon className="h-6 w-6" />
        </span>
        <div>
          <h1 className="font-display text-2xl font-800 text-ink-900 sm:text-3xl">
            Tableau de fiabilité des médias
          </h1>
          <p className="mt-1 max-w-2xl text-ink-600">
            Score de crédibilité, fake news détectées, informations exactes,
            taux et délai moyen de correction — appuyés sur des dossiers
            consultables.
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-start gap-2 rounded-2xl bg-blue-50 p-4 text-sm text-blue-800 ring-1 ring-blue-100">
        <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          Ces indicateurs s'appuient sur des critères transparents et des preuves
          consultables. Chaque média dispose d'un droit de recours. L'objectif est
          d'aider à vérifier l'information, pas de désigner arbitrairement de
          «&nbsp;bons&nbsp;» ou «&nbsp;mauvais&nbsp;» médias.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {SORTS.map((s) =>
          <button
            key={s.key}
            onClick={() => setSort(s.key)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
            sort === s.key ?
            "bg-ink-900 text-white" :
            "bg-white text-ink-700 ring-1 ring-ink-900/5 hover:ring-ink-900/15"}`
            }>
            
              {s.label}
            </button>
          )}
        </div>
        <div className="flex items-center rounded-full bg-white px-3 py-2 ring-1 ring-ink-900/5 focus-within:ring-brand-300 sm:w-64">
          <SearchIcon className="h-4 w-4 text-ink-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filtrer un média…"
            className="w-full bg-transparent px-2 text-sm focus:outline-none" />
          
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((m, i) =>
        <motion.div
          key={m.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i % 3 * 0.05 }}>
          
            <MediaOutletCard outlet={m} rank={i + 1} />
          </motion.div>
        )}
      </div>
    </div>);

}