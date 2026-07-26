import React from "react";
import { Link } from "react-router-dom";
import { SearchXIcon, HomeIcon, SearchIcon } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-20 text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-ink-50 text-ink-400">
        <SearchXIcon className="h-10 w-10" />
      </span>
      <h1 className="mt-6 font-display text-3xl font-800 text-ink-900">
        Page introuvable
      </h1>
      <p className="mt-2 text-ink-600">
        Ce dossier ou cette page n'existe pas ou a été déplacé.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-700 text-white transition hover:bg-brand-700">
          
          <HomeIcon className="h-4 w-4" />
          Accueil
        </Link>
        <Link
          to="/recherche"
          className="inline-flex items-center gap-2 rounded-full bg-ink-50 px-5 py-3 text-sm font-700 text-ink-700 transition hover:bg-ink-100">
          
          <SearchIcon className="h-4 w-4" />
          Rechercher
        </Link>
      </div>
    </div>);

}