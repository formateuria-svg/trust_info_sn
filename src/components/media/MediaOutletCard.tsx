import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  XCircleIcon,
  CheckCircle2Icon,
  RotateCcwIcon,
  TimerIcon } from
"lucide-react";
import type { MediaOutlet } from "../../data/types";
import { ScoreRing } from "./ScoreRing";

export function MediaOutletCard({
  outlet,
  rank



}: {outlet: MediaOutlet;rank?: number;}) {
  return (
    <motion.div whileHover={{ y: -3 }} className="h-full">
      <Link
        to={`/media/${outlet.id}`}
        className="flex h-full flex-col rounded-2xl bg-white p-4 shadow-card ring-1 ring-ink-900/5 transition hover:ring-brand-200">
        
        <div className="flex items-center gap-3">
          {rank !== undefined &&
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-ink-50 text-sm font-800 text-ink-700">
              {rank}
            </span>
          }
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-800 text-white"
            style={{ backgroundColor: outlet.logoColor }}>
            
            {outlet.initials}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-sm font-700 text-ink-900">
              {outlet.name}
            </p>
            <p className="text-xs text-ink-500">{outlet.type}</p>
          </div>
          <ScoreRing score={outlet.credibility} size={52} stroke={5} />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <Stat
            icon={CheckCircle2Icon}
            color="#0f9d58"
            value={outlet.exactCount}
            label="Infos exactes" />
          
          <Stat
            icon={XCircleIcon}
            color="#e2333f"
            value={outlet.fakeCount}
            label="Fake news" />
          
          <Stat
            icon={RotateCcwIcon}
            color="#2b7fff"
            value={`${outlet.correctionRate}%`}
            label="Taux correction" />
          
          <Stat
            icon={TimerIcon}
            color="#f5b70a"
            value={`${outlet.avgCorrectionHours}h`}
            label="Délai moyen" />
          
        </div>
      </Link>
    </motion.div>);

}

function Stat({
  icon: Icon,
  color,
  value,
  label





}: {icon: typeof XCircleIcon;color: string;value: React.ReactNode;label: string;}) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-paper px-2.5 py-2">
      <Icon className="h-4 w-4 shrink-0" style={{ color }} />
      <div className="min-w-0">
        <p className="text-sm font-700 leading-none text-ink-900">{value}</p>
        <p className="mt-0.5 truncate text-[10px] text-ink-500">{label}</p>
      </div>
    </div>);

}