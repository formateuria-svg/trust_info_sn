import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CrownIcon,
  CodeIcon,
  LayoutDashboardIcon,
  BarChart3Icon,
  CheckIcon,
  ShieldCheckIcon,
  NewspaperIcon,
  BuildingIcon,
  GraduationCapIcon } from
"lucide-react";

const FEATURES = [
{
  icon: CodeIcon,
  color: "#2b7fff",
  title: "API des dossiers vérifiés",
  desc: "Accédez par API à l'ensemble des dossiers vérifiés et à leurs verdicts, sources et chronologies."
},
{
  icon: LayoutDashboardIcon,
  color: "#8b5cf6",
  title: "Tableaux de bord rédactions",
  desc: "Suivez en temps réel les informations virales, les sujets sensibles et l'état de vos vérifications."
},
{
  icon: BarChart3Icon,
  color: "#0f9d58",
  title: "Rapports statistiques anonymisés",
  desc: "Analysez les tendances de la désinformation par thème, région et plateforme, sans données personnelles."
},
{
  icon: ShieldCheckIcon,
  color: "#f5b70a",
  title: "Badge de vérificateur certifié",
  desc: "Vos votes et analyses pèsent davantage dans les verdicts collaboratifs."
}];


const AUDIENCE = [
{ icon: NewspaperIcon, label: "Journalistes & rédactions" },
{ icon: BuildingIcon, label: "ONG & institutions" },
{ icon: GraduationCapIcon, label: "Chercheurs & universités" }];


const PLANS = [
{
  name: "Citoyen",
  price: { mois: "Gratuit", annee: "Gratuit" },
  tagline: "Pour participer à la vérification",
  features: ["Signalements illimités", "Vote & arguments", "Suivi de dossiers", "Notifications"],
  cta: "Commencer",
  to: "/signalement",
  highlight: false
},
{
  name: "Vérificateur",
  price: { mois: "9 000 F", annee: "90 000 F" },
  tagline: "Pour les journalistes & experts",
  features: ["Tout Citoyen", "Badge certifié", "Vote pondéré", "Tableaux de bord", "Support prioritaire"],
  cta: "Passer Vérificateur",
  to: "/signalement",
  highlight: true
},
{
  name: "Institution",
  price: { mois: "Sur devis", annee: "Sur devis" },
  tagline: "Pour rédactions, ONG & recherche",
  features: ["Tout Vérificateur", "Accès API complet", "Rapports statistiques", "Comptes multiples", "Intégration sur mesure"],
  cta: "Nous contacter",
  to: "/signalement",
  highlight: false
}];


export function PremiumPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-12 text-center sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl" />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative inline-flex items-center gap-2 rounded-full bg-gold-500/15 px-3 py-1.5 text-xs font-700 text-gold-400 ring-1 ring-gold-500/20">
            
            <CrownIcon className="h-4 w-4" />
            SéneFact Premium
          </motion.span>
          <h1 className="relative mx-auto mt-5 max-w-2xl font-display text-3xl font-800 text-white sm:text-4xl">
            Des outils professionnels pour les acteurs de l'information
          </h1>
          <p className="relative mx-auto mt-4 max-w-xl text-white/70">
            Pour les journalistes, ONG, chercheurs et institutions qui veulent
            aller plus loin dans la lutte contre la désinformation.
          </p>
          <div className="relative mt-7 flex flex-wrap justify-center gap-3">
            {AUDIENCE.map((a) =>
            <span
              key={a.label}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15">
              
                <a.icon className="h-4 w-4 text-brand-300" />
                {a.label}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURES.map((f, i) =>
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-900/5">
            
              <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${f.color}18`, color: f.color }}>
              
                <f.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-base font-700 text-ink-900">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
        <div className="mb-8 flex flex-col items-center">
          <h2 className="font-display text-2xl font-800 text-ink-900">
            Choisissez votre formule
          </h2>
          <div className="mt-4 inline-flex items-center rounded-full bg-white p-1 shadow-card ring-1 ring-ink-900/5">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              !annual ? "bg-ink-900 text-white" : "text-ink-600"}`
              }>
              
              Mensuel
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              annual ? "bg-ink-900 text-white" : "text-ink-600"}`
              }>
              
              Annuel <span className="text-brand-500">-17%</span>
            </button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {PLANS.map((p) =>
          <motion.div
            key={p.name}
            whileHover={{ y: -4 }}
            className={`flex flex-col rounded-3xl p-6 shadow-card ring-1 ${
            p.highlight ?
            "bg-ink-950 text-white ring-transparent" :
            "bg-white ring-ink-900/5"}`
            }>
            
              {p.highlight &&
            <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-gold-500/20 px-2.5 py-1 text-xs font-700 text-gold-400">
                  <CrownIcon className="h-3.5 w-3.5" />
                  Recommandé
                </span>
            }
              <h3 className={`font-display text-lg font-800 ${p.highlight ? "text-white" : "text-ink-900"}`}>
                {p.name}
              </h3>
              <p className={`text-sm ${p.highlight ? "text-white/60" : "text-ink-500"}`}>
                {p.tagline}
              </p>
              <p className="mt-4 font-display text-3xl font-800">
                {annual ? p.price.annee : p.price.mois}
                {p.price.mois.includes("F") &&
              <span className={`text-sm font-500 ${p.highlight ? "text-white/50" : "text-ink-400"}`}>
                    /{annual ? "an" : "mois"}
                  </span>
              }
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {p.features.map((f) =>
              <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckIcon
                  className={`h-4 w-4 shrink-0 ${p.highlight ? "text-brand-400" : "text-brand-600"}`} />
                
                    <span className={p.highlight ? "text-white/80" : "text-ink-700"}>
                      {f}
                    </span>
                  </li>
              )}
              </ul>
              <Link
              to={p.to}
              className={`mt-6 rounded-full py-3 text-center text-sm font-700 transition ${
              p.highlight ?
              "bg-brand-500 text-white hover:bg-brand-400" :
              "bg-ink-900 text-white hover:bg-ink-800"}`
              }>
              
                {p.cta}
              </Link>
            </motion.div>
          )}
        </div>

        <div className="mt-8 rounded-2xl bg-blue-50 p-5 text-sm leading-relaxed text-blue-800 ring-1 ring-blue-100">
          <strong className="font-700">Garde-fous&nbsp;:</strong> les
          fonctionnalités Premium respectent les mêmes critères transparents que
          la version citoyenne. Les rapports sont anonymisés et les médias
          conservent un droit de recours sur leurs évaluations.
        </div>
      </section>
    </div>);

}