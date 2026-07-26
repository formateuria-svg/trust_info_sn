import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheckIcon,
  SearchIcon,
  BellIcon,
  PlusIcon,
  MenuIcon,
  XIcon } from
"lucide-react";
import { notifications } from "../../data/notifications";

const NAV = [
{ to: "/", label: "Accueil" },
{ to: "/classements", label: "Classements" },
{ to: "/fiabilite", label: "Fiabilité des médias" },
{ to: "/cartographie", label: "Cartographie" },
{ to: "/premium", label: "Premium" }];


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const unread = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/recherche?q=${encodeURIComponent(query)}`);
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
      scrolled ?
      "bg-white/85 shadow-sm backdrop-blur-lg" :
      "bg-white/60 backdrop-blur"}`
      }>
      
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
            <ShieldCheckIcon className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-800 tracking-tight text-ink-900">
            Séné<span className="text-brand-600">Fact</span>
          </span>
        </Link>

        <nav className="ml-4 hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
            `rounded-lg px-3 py-2 text-sm font-semibold transition ${
            isActive ?
            "bg-brand-50 text-brand-700" :
            "text-ink-600 hover:bg-ink-50 hover:text-ink-900"}`

            }>
            
              {item.label}
            </NavLink>
          )}
        </nav>

        <form
          onSubmit={submitSearch}
          className="ml-auto hidden items-center md:flex">
          
          <div className="flex items-center rounded-full bg-ink-50 px-3 py-2 ring-1 ring-transparent transition focus-within:bg-white focus-within:ring-brand-300">
            <SearchIcon className="h-4 w-4 text-ink-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un média, un fait…"
              className="w-44 bg-transparent px-2 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none xl:w-56"
              aria-label="Rechercher" />
            
          </div>
        </form>

        <div className="ml-auto flex items-center gap-1.5 md:ml-2">
          <Link
            to="/recherche"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-600 transition hover:bg-ink-50 md:hidden"
            aria-label="Rechercher">
            
            <SearchIcon className="h-5 w-5" />
          </Link>
          <Link
            to="/notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink-600 transition hover:bg-ink-50"
            aria-label="Notifications">
            
            <BellIcon className="h-5 w-5" />
            {unread > 0 &&
            <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-faux px-1 text-[10px] font-bold text-white">
                {unread}
              </span>
            }
          </Link>
          <Link
            to="/signalement"
            className="hidden items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 sm:inline-flex">
            
            <PlusIcon className="h-4 w-4" />
            Signaler
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-700 transition hover:bg-ink-50 lg:hidden"
            aria-label="Menu">
            
            {mobileOpen ?
            <XIcon className="h-5 w-5" /> :

            <MenuIcon className="h-5 w-5" />
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden border-t border-ink-900/5 bg-white lg:hidden">
          
            <div className="space-y-1 px-4 py-3">
              <form onSubmit={submitSearch} className="mb-2 md:hidden">
                <div className="flex items-center rounded-full bg-ink-50 px-3 py-2.5">
                  <SearchIcon className="h-4 w-4 text-ink-500" />
                  <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Rechercher…"
                  className="w-full bg-transparent px-2 text-sm focus:outline-none" />
                
                </div>
              </form>
              {NAV.map((item) =>
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
              `block rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
              isActive ?
              "bg-brand-50 text-brand-700" :
              "text-ink-700 hover:bg-ink-50"}`

              }>
              
                  {item.label}
                </NavLink>
            )}
              <Link
              to="/signalement"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white">
              
                <PlusIcon className="h-4 w-4" />
                Créer un signalement
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}