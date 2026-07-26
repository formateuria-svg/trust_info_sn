import React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { TimelineEvent } from "../../data/types";

export function Timeline({ events }: {events: TimelineEvent[];}) {
  return (
    <ol className="relative space-y-6 pl-6">
      <span className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-900/10" />
      {events.map((ev, i) =>
      <motion.li
        key={ev.id}
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        className="relative">
        
          <span className="absolute -left-6 top-1 flex h-3.5 w-3.5 items-center justify-center">
            <span className="h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-500 shadow" />
          </span>
          <time className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {format(new Date(ev.date), "d MMM yyyy · HH'h'mm", { locale: fr })}
          </time>
          <h4 className="mt-0.5 text-sm font-700 text-ink-900">{ev.title}</h4>
          <p className="mt-0.5 text-sm text-ink-600">{ev.description}</p>
        </motion.li>
      )}
    </ol>);

}