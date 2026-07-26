import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CATEGORY_LIST, CATEGORIES } from "../../data/constants";
import { dossiers } from "../../data/dossiers";

export function CategoryStrip() {
  return (
    <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
      {CATEGORY_LIST.map((cat, i) => {
        const meta = CATEGORIES[cat];
        const count = dossiers.filter((d) => d.category === cat).length;
        return (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}>
            
            <Link
              to={`/recherche?cat=${encodeURIComponent(cat)}`}
              className="flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 shadow-card ring-1 ring-ink-900/5 transition hover:ring-2"
              style={{ ["--tw-ring-color" as string]: meta.color } as React.CSSProperties}>
              
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: meta.color }} />
              
              {cat}
              <span className="rounded-full bg-ink-50 px-1.5 text-xs text-ink-500">
                {count}
              </span>
            </Link>
          </motion.div>);

      })}
    </div>);

}