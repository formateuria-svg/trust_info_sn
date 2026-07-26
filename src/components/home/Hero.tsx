import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PlusIcon,
  TrophyIcon,
  UsersIcon,
  FileSearchIcon,
  ShieldCheckIcon } from
"lucide-react";

const HERO_IMG = "/691aa800-ae76-469b-9aef-8e3fd546ee4b.jpg";


const STATS = [
{ icon: FileSearchIcon, value: "1 240", label: "Dossiers vérifiés" },
{ icon: UsersIcon, value: "18 500", label: "Contributeurs" },
{ icon: ShieldCheckIcon, value: "312", label: "Vérificateurs certifiés" }];


export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-8 sm:px-6 sm:pt-12">
        <div className="relative overflow-hidden rounded-3xl bg-ink-950">
          <img
            src={HERO_IMG}
            alt="Des citoyens sénégalais vérifient ensemble l'information"
            className="absolute inset-0 h-full w-full object-cover opacity-55" />
          
          <div className="absolute inset-0 bg-gradient-to-tr from-ink-950 via-ink-950/70 to-transparent" />

          <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-brand-200 ring-1 ring-white/15 backdrop-blur">
              
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
              Vérification collaborative · Sénégal
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-5 max-w-2xl font-display text-3xl font-800 leading-tight text-white sm:text-4xl lg:text-5xl">
              
              Vérifions ensemble l'information qui circule au Sénégal.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
              
              Une application citoyenne pour analyser, documenter et vérifier les
              informations virales sur Facebook, TikTok, WhatsApp, X, Instagram
              et la presse en ligne.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-7 flex flex-wrap gap-3">
              
              <Link
                to="/signalement"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-700 text-white shadow-float transition hover:bg-brand-400">
                
                <PlusIcon className="h-4 w-4" />
                Créer un signalement
              </Link>
              <Link
                to="/classements"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-700 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20">
                
                <TrophyIcon className="h-4 w-4" />
                Classement des médias
              </Link>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              
              {STATS.map((s) =>
              <div key={s.label} className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-brand-300">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <dd className="mt-1 font-display text-2xl font-800 text-white">
                    {s.value}
                  </dd>
                  <dt className="text-xs text-white/60">{s.label}</dt>
                </div>
              )}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>);

}