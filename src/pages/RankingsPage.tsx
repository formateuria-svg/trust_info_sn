import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrophyIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  ZapIcon,
  FlameIcon,
  RotateCcwIcon,
  ArrowRightIcon } from
"lucide-react";
import { mediaOutlets } from "../data/mediaOutlets";
import { CATEGORY_LIST, CATEGORIES } from "../data/constants";
import { ScoreRing } from "../components/media/ScoreRing";
import type { Category, MediaOutlet } from "../data/types";

const RANKINGS = [
{ key: "reliable", label: "Les plus fiables", icon: TrendingUpIcon, color: "#0f9d58", sort: (a: MediaOutlet, b: MediaOutlet) => b.credibility - a.credibility, metric: (m: MediaOutlet) => `${m.credibility}/100` },
{ key: "unreliable", label: "Les moins fiables", icon: TrendingDownIcon, color: "#e2333f", sort: (a: MediaOutlet, b: MediaOutlet) => a.credibility - b.credibility, metric: (m: MediaOutlet) => `${m.credibility}/100` },
{ key: "reactive", label: "Les plus réactifs", icon: ZapIcon, color: "#f5b70a", sort: (a: MediaOutlet, b: MediaOutlet) => b.reactivity - a.reactivity, metric: (m: MediaOutlet) => `${m.avgCorrectionHours}h` },
{ key: "contested", label: "Les plus contestés", icon: FlameIcon, color: "#db2777", sort: (a: MediaOutlet, b: MediaOutlet) => b.contested - a.contested, metric: (m: MediaOutlet) => `${m.contested} litiges` },
{ key: "corrected", label: "Les plus corrigés", icon: RotateCcwIcon, color: "#2b7fff", sort: (a: MediaOutlet, b: MediaOutlet) => b.correctionRate - a.correctionRate, metric: (m: MediaOutlet) => `${m.correctionRate}%` }] as
const;

export function RankingsPage() {
  const [category, setCategory] = useState<Category | "Toutes">("Toutes");

  const scoped = useMemo(() => {
    if (category === "Toutes") return mediaOutlets;
    return [...mediaOutlets].sort((a, b) => {
      const da = a.weakTopics.find((t) => t.category === category)?.disputes ?? 0;
      const db = b.weakTopics.find((t) => t.category === category)?.disputes ?? 0;
      return db - da;
    });
  }, [category]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-600">
          <TrophyIcon className="h-6 w-6" />
        </span>
        <div>
          <h1 className="font-display text-2xl font-800 text-ink-900 sm:text-3xl">
            Classements des médias
          </h1>
          <p className="mt-1 text-ink-600">
            Cinq lectures complémentaires, croisées avec les catégories.
          </p>
        </div>
      </div>

      {/* Category filter for the by-category ranking */}
      <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto">
        {(["Toutes", ...CATEGORY_LIST] as const).map((c) => {
          const active = category === c;
          const color = c === "Toutes" ? "#0f1729" : CATEGORIES[c as Category].color;
          return (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
              active ? "text-white" : "bg-white text-ink-700 ring-1 ring-ink-900/5 hover:ring-ink-900/15"}`
              }
              style={active ? { backgroundColor: color } : {}}>
              
              {c}
            </button>);

        })}
      </div>

      {category !== "Toutes" &&
      <RankingCard
        title={`Les plus contestés en ${category}`}
        icon={FlameIcon}
        color={CATEGORIES[category].color}
        rows={scoped.slice(0, 5).map((m) => ({
          outlet: m,
          metric: `${m.weakTopics.find((t) => t.category === category)?.disputes ?? 0} litiges`
        }))} />

      }

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {RANKINGS.map((r) => {
          const rows = [...mediaOutlets].
          sort(r.sort).
          slice(0, 5).
          map((m) => ({ outlet: m, metric: r.metric(m) }));
          return (
            <RankingCard
              key={r.key}
              title={r.label}
              icon={r.icon}
              color={r.color}
              rows={rows} />);


        })}
      </div>
    </div>);

}

function RankingCard({
  title,
  icon: Icon,
  color,
  rows





}: {title: string;icon: typeof TrophyIcon;color: string;rows: {outlet: MediaOutlet;metric: string;}[];}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-900/5">
      
      <div className="mb-4 flex items-center gap-2.5">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${color}18`, color }}>
          
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="font-display text-base font-700 text-ink-900">{title}</h2>
      </div>
      <ul className="space-y-1">
        {rows.map((row, i) =>
        <li key={row.outlet.id}>
            <Link
            to={`/media/${row.outlet.id}`}
            className="group flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-paper">
            
              <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-800 ${
              i === 0 ? "bg-gold-500/20 text-gold-600" : "bg-ink-50 text-ink-600"}`
              }>
              
                {i + 1}
              </span>
              <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-800 text-white"
              style={{ backgroundColor: row.outlet.logoColor }}>
              
                {row.outlet.initials}
              </span>
              <span className="min-w-0 flex-1 truncate text-sm font-semibold text-ink-900">
                {row.outlet.name}
              </span>
              <span className="shrink-0 text-sm font-700" style={{ color }}>
                {row.metric}
              </span>
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-ink-300 transition group-hover:translate-x-0.5 group-hover:text-ink-500" />
            </Link>
          </li>
        )}
      </ul>
    </motion.section>);

}