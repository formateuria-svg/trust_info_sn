import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPinIcon, MapIcon, InfoIcon } from "lucide-react";
import { dossiers } from "../data/dossiers";
import { DossierCard } from "../components/cards/DossierCard";

const MAP_IMG = "/d40e517e-4252-469a-a0d4-7d7777d7f2ef.jpg";


interface Zone {
  id: string;
  name: string;
  x: number;
  y: number;
  level: "high" | "medium" | "low";
  rumors: number;
  verified: number;
}

const ZONES: Zone[] = [
{ id: "z1", name: "Dakar", x: 16, y: 45, level: "high", rumors: 128, verified: 340 },
{ id: "z2", name: "Thiès", x: 26, y: 52, level: "medium", rumors: 64, verified: 180 },
{ id: "z3", name: "Saint-Louis", x: 30, y: 22, level: "low", rumors: 22, verified: 96 },
{ id: "z4", name: "Ziguinchor", x: 24, y: 82, level: "high", rumors: 88, verified: 120 },
{ id: "z5", name: "Touba", x: 40, y: 45, level: "medium", rumors: 54, verified: 140 },
{ id: "z6", name: "Tambacounda", x: 66, y: 58, level: "low", rumors: 18, verified: 74 },
{ id: "z7", name: "Kolda", x: 46, y: 78, level: "medium", rumors: 41, verified: 88 }];


const LEVEL = {
  high: { color: "#e2333f", label: "Forte circulation" },
  medium: { color: "#f5a623", label: "Circulation modérée" },
  low: { color: "#0f9d58", label: "Faible circulation" }
};

export function CartographyPage() {
  const [active, setActive] = useState<Zone | null>(ZONES[0]);

  const zoneDossiers = active ?
  dossiers.filter((d) => d.location === active.name) :
  [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
          <MapIcon className="h-6 w-6" />
        </span>
        <div>
          <h1 className="font-display text-2xl font-800 text-ink-900 sm:text-3xl">
            Cartographie de l'information
          </h1>
          <p className="mt-1 max-w-2xl text-ink-600">
            Visualisez les zones où circulent le plus de rumeurs ou
            d'informations vérifiées à travers le Sénégal.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Map */}
        <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-card ring-1 ring-ink-900/5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={MAP_IMG}
              alt="Carte du Sénégal"
              className="h-full w-full object-cover" />
            
            {ZONES.map((z) => {
              const meta = LEVEL[z.level];
              const isActive = active?.id === z.id;
              return (
                <button
                  key={z.id}
                  onClick={() => setActive(z)}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${z.x}%`, top: `${z.y}%` }}
                  aria-label={z.name}>
                  
                  <span
                    className="absolute inset-0 animate-ping rounded-full opacity-40"
                    style={{ backgroundColor: meta.color }} />
                  
                  <span
                    className={`relative flex items-center justify-center rounded-full ring-2 ring-white transition ${
                    isActive ? "h-6 w-6" : "h-4 w-4"}`
                    }
                    style={{ backgroundColor: meta.color }}>
                    
                    {isActive && <MapPinIcon className="h-3.5 w-3.5 text-white" />}
                  </span>
                  <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink-900 px-2 py-0.5 text-[10px] font-semibold text-white opacity-0 transition group-hover:opacity-100">
                    {z.name}
                  </span>
                </button>);

            })}
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap items-center gap-4">
            {Object.entries(LEVEL).map(([k, v]) =>
            <span key={k} className="flex items-center gap-1.5 text-xs font-medium text-ink-600">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: v.color }} />
                {v.label}
              </span>
            )}
          </div>
        </div>

        {/* Zone detail */}
        <div>
          {active &&
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-white p-5 shadow-card ring-1 ring-ink-900/5">
            
              <div className="flex items-center gap-2">
                <span
                className="flex h-9 w-9 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: LEVEL[active.level].color }}>
                
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-700 text-ink-900">
                    {active.name}
                  </h2>
                  <p className="text-xs text-ink-500">
                    {LEVEL[active.level].label}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-red-50 p-3">
                  <p className="font-display text-2xl font-800 text-red-600">
                    {active.rumors}
                  </p>
                  <p className="text-xs text-red-700/70">Rumeurs signalées</p>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-3">
                  <p className="font-display text-2xl font-800 text-emerald-600">
                    {active.verified}
                  </p>
                  <p className="text-xs text-emerald-700/70">Infos vérifiées</p>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-2 rounded-2xl bg-blue-50 p-3 text-xs text-blue-800">
                <InfoIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <p>
                  Les données de circulation sont anonymisées et basées sur les
                  signalements des contributeurs de la zone.
                </p>
              </div>
            </motion.div>
          }

          {zoneDossiers.length > 0 &&
          <div className="mt-5">
              <h3 className="mb-3 text-sm font-700 text-ink-900">
                Dossiers dans cette zone
              </h3>
              <div className="space-y-4">
                {zoneDossiers.map((d) =>
              <DossierCard key={d.id} dossier={d} />
              )}
              </div>
            </div>
          }
        </div>
      </div>
    </div>);

}