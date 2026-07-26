import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  EyeIcon,
  Share2Icon,
  MessageSquareIcon,
  PlayCircleIcon } from
"lucide-react";
import type { Dossier } from "../../data/types";
import { VerdictBadge, CategoryChip, PLATFORMS } from "../../data/constants";

function totalVotes(d: Dossier) {
  const v = d.votes;
  return v.vrai + v.faux + v.trompeur + v.contexte + v.indeterminable;
}

export function DossierCard({
  dossier,
  featured = false



}: {dossier: Dossier;featured?: boolean;}) {
  const Platform = PLATFORMS[dossier.platform];
  const hasVideo = dossier.media.some((m) => m.kind === "video");

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group h-full overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-900/5">
      
      <Link to={`/dossier/${dossier.slug}`} className="flex h-full flex-col">
        <div
          className={`relative overflow-hidden ${
          featured ? "aspect-[16/10]" : "aspect-[16/9]"}`
          }>
          
          <img
            src={dossier.cover}
            alt={dossier.claim}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/5 to-transparent" />
          <div className="absolute left-3 top-3 flex items-center gap-2">
            <VerdictBadge verdict={dossier.verdict} size="sm" />
          </div>
          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur">
            <Platform.icon
              className="h-4 w-4"
              style={{ color: Platform.color }} />
            
          </div>
          {hasVideo &&
          <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[11px] font-medium text-white backdrop-blur">
              <PlayCircleIcon className="h-3.5 w-3.5" /> Vidéo
            </div>
          }
          <div className="absolute bottom-3 left-3">
            <CategoryChip category={dossier.category} />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3
            className={`font-display font-700 leading-snug text-ink-900 ${
            featured ? "text-lg sm:text-xl" : "text-[15px]"} line-clamp-2`
            }>
            
            {dossier.claim}
          </h3>
          {featured &&
          <p className="mt-2 line-clamp-2 text-sm text-ink-600">
              {dossier.summary}
            </p>
          }
          <div className="mt-auto flex items-center gap-4 pt-4 text-[12px] text-ink-600">
            <span className="inline-flex items-center gap-1">
              <EyeIcon className="h-3.5 w-3.5" />
              {(dossier.views / 1000).toFixed(1)}k
            </span>
            <span className="inline-flex items-center gap-1">
              <MessageSquareIcon className="h-3.5 w-3.5" />
              {totalVotes(dossier)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Share2Icon className="h-3.5 w-3.5" />
              {(dossier.shares / 1000).toFixed(1)}k
            </span>
            <span className="ml-auto font-medium text-ink-500">
              {dossier.location}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>);

}