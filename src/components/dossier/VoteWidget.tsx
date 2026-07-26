import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import type { VoteTally, VoteOption } from "../../data/types";
import { VERDICTS } from "../../data/constants";

const OPTIONS: {key: VoteOption;verdict: keyof typeof VERDICTS;}[] = [
{ key: "vrai", verdict: "vrai" },
{ key: "faux", verdict: "faux" },
{ key: "trompeur", verdict: "trompeur" },
{ key: "contexte", verdict: "contexte" },
{ key: "indeterminable", verdict: "indeterminable" }];


export function VoteWidget({ initial }: {initial: VoteTally;}) {
  const [tally, setTally] = useState<VoteTally>(initial);
  const [voted, setVoted] = useState<VoteOption | null>(null);

  const total = useMemo(
    () =>
    tally.vrai +
    tally.faux +
    tally.trompeur +
    tally.contexte +
    tally.indeterminable,
    [tally]
  );

  const cast = (key: VoteOption) => {
    if (voted === key) return;
    setTally((prev) => {
      const next = { ...prev };
      if (voted) next[voted] = Math.max(0, next[voted] - 1);
      next[key] = next[key] + 1;
      return next;
    });
    setVoted(key);
  };

  return (
    <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-900/5">
      <div className="mb-1 flex items-center justify-between">
        <h3 className="font-display text-base font-700 text-ink-900">
          Votre vote compte
        </h3>
        <span className="text-xs font-medium text-ink-500">
          {total.toLocaleString("fr-FR")} votes
        </span>
      </div>
      <p className="mb-4 text-sm text-ink-600">
        Que pensez-vous de cette information&nbsp;?
      </p>

      <div className="space-y-2.5">
        {OPTIONS.map(({ key, verdict }) => {
          const meta = VERDICTS[verdict];
          const Icon = meta.icon;
          const count = tally[key];
          const pct = total ? Math.round(count / total * 100) : 0;
          const isMine = voted === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => cast(key)}
              className={`group relative w-full overflow-hidden rounded-xl border px-3 py-2.5 text-left transition ${
              isMine ?
              "border-transparent ring-2" :
              "border-ink-900/8 hover:border-ink-900/20"}`
              }
              style={isMine ? { boxShadow: `inset 0 0 0 2px ${meta.color}` } : {}}>
              
              <motion.span
                className="absolute inset-y-0 left-0 rounded-xl opacity-15"
                style={{ backgroundColor: meta.color }}
                initial={false}
                animate={{ width: `${voted ? pct : 0}%` }}
                transition={{ type: "spring", stiffness: 180, damping: 26 }} />
              
              <span className="relative flex items-center gap-2.5">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${meta.color}1a`, color: meta.color }}>
                  
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex-1 text-sm font-semibold text-ink-900">
                  {meta.label}
                </span>
                {isMine &&
                <CheckIcon
                  className="h-4 w-4"
                  style={{ color: meta.color }} />

                }
                {voted &&
                <span className="text-sm font-bold tabular-nums text-ink-700">
                    {pct}%
                  </span>
                }
              </span>
            </button>);

        })}
      </div>

      {voted &&
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-3 text-center text-xs font-medium text-brand-600">
        
          Merci&nbsp;! Votre vote a été enregistré.
        </motion.p>
      }
    </div>);

}