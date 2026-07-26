import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheckIcon, MailIcon, GlobeIcon } from "lucide-react";

const COLS = [
{
  title: "Explorer",
  links: [
  { label: "Accueil", to: "/" },
  { label: "Classements", to: "/classements" },
  { label: "Fiabilité des médias", to: "/fiabilite" },
  { label: "Cartographie", to: "/cartographie" }]

},
{
  title: "Participer",
  links: [
  { label: "Créer un signalement", to: "/signalement" },
  { label: "Recherche", to: "/recherche" },
  { label: "Notifications", to: "/notifications" },
  { label: "Devenir vérificateur", to: "/premium" }]

},
{
  title: "Institutions",
  links: [
  { label: "Offre Premium", to: "/premium" },
  { label: "API des dossiers", to: "/premium" },
  { label: "Tableaux de bord", to: "/premium" },
  { label: "Rapports statistiques", to: "/premium" }]

}];


export function Footer() {
  return (
    <footer className="mt-16 border-t border-ink-900/5 bg-ink-950 text-ink-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white">
                <ShieldCheckIcon className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-800 text-white">
                Séné<span className="text-brand-300">Fact</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-100/70">
              L'application collaborative de vérification de l'information au
              Sénégal. Vérifier ensemble, avec des preuves consultables et un
              processus transparent.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href="mailto:contact@senefact.sn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                aria-label="Email">
                
                <MailIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                aria-label="Site web">
                
                <GlobeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {COLS.map((col) =>
          <div key={col.title}>
              <h3 className="text-sm font-700 text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) =>
              <li key={l.label}>
                    <Link
                  to={l.to}
                  className="text-sm text-ink-100/70 transition hover:text-brand-300">
                  
                      {l.label}
                    </Link>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-ink-100/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} SéneFact — Vérifier l'information, pas désigner de coupables.</p>
          <p className="max-w-md sm:text-right">
            Les classements s'appuient sur des critères transparents et un droit
            de recours pour les médias concernés.
          </p>
        </div>
      </div>
    </footer>);

}