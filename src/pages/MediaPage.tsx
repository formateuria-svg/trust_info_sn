import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  CheckCircle2Icon,
  XCircleIcon,
  RotateCcwIcon,
  TimerIcon,
  ZapIcon,
  FlameIcon,
  AlertTriangleIcon,
  ExternalLinkIcon } from
"lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid } from
"recharts";
import { mediaOutlets, getOutlet } from "../data/mediaOutlets";
import { dossiers } from "../data/dossiers";
import { ScoreRing } from "../components/media/ScoreRing";
import { DossierCard } from "../components/cards/DossierCard";
import { CATEGORIES } from "../data/constants";
import { NotFoundPage } from "./NotFoundPage";

export function MediaPage() {
  const { id } = useParams();
  const outlet = id ? getOutlet(id) : undefined;
  if (!outlet) return <NotFoundPage />;

  const relatedDossiers = dossiers.filter((d) => d.mediaOutletId === outlet.id);
  const others = mediaOutlets.filter((m) => m.id !== outlet.id).slice(0, 3);

  const stats = [
  { icon: CheckCircle2Icon, color: "#0f9d58", value: outlet.exactCount, label: "Informations exactes" },
  { icon: XCircleIcon, color: "#e2333f", value: outlet.fakeCount, label: "Fake news détectées" },
  { icon: RotateCcwIcon, color: "#2b7fff", value: `${outlet.correctionRate}%`, label: "Taux de correction" },
  { icon: TimerIcon, color: "#f5b70a", value: `${outlet.avgCorrectionHours}h`, label: "Délai moyen de correction" },
  { icon: ZapIcon, color: "#8b5cf6", value: `${outlet.reactivity}/100`, label: "Réactivité" },
  { icon: FlameIcon, color: "#db2777", value: outlet.contested, label: "Sujets contestés" }];


  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
      <Link
        to="/fiabilite"
        className="mb-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-600 transition hover:text-ink-900">
        
        <ArrowLeftIcon className="h-4 w-4" />
        Tableau de fiabilité
      </Link>

      {/* Header card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-white p-5 shadow-card ring-1 ring-ink-900/5 sm:p-7">
        
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <span
            className="flex h-16 w-16 items-center justify-center rounded-2xl font-800 text-2xl text-white"
            style={{ backgroundColor: outlet.logoColor }}>
            
            {outlet.initials}
          </span>
          <div className="flex-1">
            <h1 className="font-display text-2xl font-800 text-ink-900">
              {outlet.name}
            </h1>
            <p className="text-ink-500">{outlet.type}</p>
          </div>
          <ScoreRing score={outlet.credibility} size={84} stroke={7} label="Fiabilité" />
        </div>
      </motion.div>

      {/* Stats grid */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {stats.map((s, i) =>
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
          className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-ink-900/5">
          
            <span
            className="flex h-9 w-9 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${s.color}18`, color: s.color }}>
            
              <s.icon className="h-5 w-5" />
            </span>
            <p className="mt-3 font-display text-xl font-800 text-ink-900">
              {s.value}
            </p>
            <p className="text-xs text-ink-500">{s.label}</p>
          </motion.div>
        )}
      </div>

      {/* Score evolution */}
      <section className="mt-6 rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-900/5">
        <h2 className="font-display text-lg font-700 text-ink-900">
          Évolution du score de fiabilité
        </h2>
        <p className="mb-4 text-sm text-ink-500">6 derniers mois</p>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={outlet.history} margin={{ left: -20, right: 8, top: 8 }}>
              <defs>
                <linearGradient id="score" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={outlet.logoColor} stopOpacity={0.35} />
                  <stop offset="100%" stopColor={outlet.logoColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#eef0f6" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid #eef0f6",
                  fontSize: 13
                }} />
              
              <Area
                type="monotone"
                dataKey="score"
                stroke={outlet.logoColor}
                strokeWidth={2.5}
                fill="url(#score)" />
              
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Weak topics */}
      <section className="mt-6 rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-900/5">
        <h2 className="flex items-center gap-2 font-display text-lg font-700 text-ink-900">
          <AlertTriangleIcon className="h-5 w-5 text-amber-500" />
          Sujets les plus souvent remis en cause
        </h2>
        <div className="mt-4 space-y-3">
          {outlet.weakTopics.map((t) => {
            const max = Math.max(...outlet.weakTopics.map((w) => w.disputes));
            const meta = CATEGORIES[t.category];
            return (
              <div key={t.category}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-semibold text-ink-800">{t.category}</span>
                  <span className="text-ink-500">{t.disputes} litiges</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-ink-900/5">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: meta.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${t.disputes / max * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }} />
                  
                </div>
              </div>);

          })}
        </div>
      </section>

      {/* Corrections */}
      <section className="mt-6 rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-900/5">
        <h2 className="flex items-center gap-2 font-display text-lg font-700 text-ink-900">
          <RotateCcwIcon className="h-5 w-5 text-blue-500" />
          Corrections publiées
        </h2>
        <ul className="mt-4 space-y-2">
          {outlet.corrections.map((c) =>
          <li key={c.date}>
              <Link
              to={`/dossier/${c.dossierSlug}`}
              className="group flex items-center gap-3 rounded-xl bg-paper p-3 transition hover:bg-ink-50">
              
                <span className="rounded-lg bg-white px-2 py-1 text-xs font-semibold text-ink-600 ring-1 ring-ink-900/5">
                  {c.date}
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-medium text-ink-800">
                  {c.title}
                </span>
                <ExternalLinkIcon className="h-4 w-4 shrink-0 text-ink-400 group-hover:text-brand-600" />
              </Link>
            </li>
          )}
        </ul>
      </section>

      <div className="mt-5 flex items-start gap-2 rounded-2xl bg-blue-50 p-4 text-xs leading-relaxed text-blue-800 ring-1 ring-blue-100">
        <AlertTriangleIcon className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          Ces indicateurs sont accompagnés de liens vers les dossiers d'enquête
          pour éviter des conclusions hâtives. {outlet.name} dispose d'un droit de
          recours sur toute évaluation.
        </p>
      </div>

      {/* Related dossiers */}
      {relatedDossiers.length > 0 &&
      <section className="mt-8">
          <h2 className="mb-4 font-display text-lg font-700 text-ink-900">
            Dossiers liés à ce média
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedDossiers.map((d) =>
          <DossierCard key={d.id} dossier={d} />
          )}
          </div>
        </section>
      }

      {/* Compare */}
      <section className="mt-8">
        <h2 className="mb-4 font-display text-lg font-700 text-ink-900">
          Comparer avec d'autres médias
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {others.map((m) =>
          <Link
            key={m.id}
            to={`/media/${m.id}`}
            className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-card ring-1 ring-ink-900/5 transition hover:ring-brand-200">
            
              <span
              className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-800 text-white"
              style={{ backgroundColor: m.logoColor }}>
              
                {m.initials}
              </span>
              <span className="min-w-0 flex-1 truncate text-sm font-semibold text-ink-900">
                {m.name}
              </span>
              <ScoreRing score={m.credibility} size={40} stroke={4} />
            </Link>
          )}
        </div>
      </section>
    </div>);

}