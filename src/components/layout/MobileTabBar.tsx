import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  TrophyIcon,
  PlusIcon,
  MapIcon,
  BellIcon } from
"lucide-react";
import { notifications } from "../../data/notifications";

const TABS = [
{ to: "/", label: "Accueil", icon: HomeIcon, end: true },
{ to: "/classements", label: "Classement", icon: TrophyIcon },
{ to: "/signalement", label: "Signaler", icon: PlusIcon, primary: true },
{ to: "/cartographie", label: "Carte", icon: MapIcon },
{ to: "/notifications", label: "Alertes", icon: BellIcon }];


export function MobileTabBar() {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-900/5 bg-white/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around px-2">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          if (tab.primary) {
            return (
              <NavLink
                key={tab.to}
                to={tab.to}
                className="flex flex-col items-center gap-0.5 py-2">
                
                <span className="flex h-11 w-11 -translate-y-3 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-float">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="-mt-2 text-[10px] font-semibold text-brand-700">
                  {tab.label}
                </span>
              </NavLink>);

          }
          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
              `relative flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-semibold transition ${
              isActive ? "text-brand-700" : "text-ink-500"}`

              }>
              
              <Icon className="h-5 w-5" />
              {tab.label}
              {tab.to === "/notifications" && unread > 0 &&
              <span className="absolute right-4 top-1.5 h-2 w-2 rounded-full bg-faux" />
              }
            </NavLink>);

        })}
      </div>
    </nav>);

}