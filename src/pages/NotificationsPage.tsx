import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BellIcon,
  FileSearchIcon,
  VoteIcon,
  CheckCircle2Icon,
  RefreshCwIcon,
  CheckCheckIcon } from
"lucide-react";
import {
  notifications as initial,
  type Notification,
  type NotifType } from
"../data/notifications";

const META: Record<NotifType, {icon: typeof BellIcon;color: string;}> = {
  enquete: { icon: FileSearchIcon, color: "#8b5cf6" },
  vote: { icon: VoteIcon, color: "#f5b70a" },
  verifie: { icon: CheckCircle2Icon, color: "#0f9d58" },
  maj: { icon: RefreshCwIcon, color: "#2b7fff" }
};

export function NotificationsPage() {
  const [items, setItems] = useState<Notification[]>(initial);
  const unread = items.filter((n) => !n.read).length;

  const markAll = () =>
  setItems((prev) => prev.map((n) => ({ ...n, read: true })));

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <BellIcon className="h-6 w-6" />
            {unread > 0 &&
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-faux px-1 text-[11px] font-bold text-white">
                {unread}
              </span>
            }
          </span>
          <div>
            <h1 className="font-display text-2xl font-800 text-ink-900">
              Notifications
            </h1>
            <p className="text-sm text-ink-500">
              {unread > 0 ? `${unread} non lue${unread > 1 ? "s" : ""}` : "Tout est à jour"}
            </p>
          </div>
        </div>
        {unread > 0 &&
        <button
          onClick={markAll}
          className="inline-flex items-center gap-1.5 rounded-full bg-ink-50 px-3.5 py-2 text-sm font-semibold text-ink-700 transition hover:bg-ink-100">
          
            <CheckCheckIcon className="h-4 w-4" />
            Tout marquer lu
          </button>
        }
      </div>

      <ul className="space-y-2.5">
        {items.map((n, i) => {
          const meta = META[n.type];
          const Icon = meta.icon;
          const body =
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            onClick={() =>
            setItems((prev) =>
            prev.map((x) => x.id === n.id ? { ...x, read: true } : x)
            )
            }
            className={`flex items-start gap-3 rounded-2xl p-4 shadow-card ring-1 transition ${
            n.read ?
            "bg-white ring-ink-900/5" :
            "bg-white ring-brand-200"}`
            }>
            
              <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${meta.color}18`, color: meta.color }}>
              
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-700 text-ink-900">{n.title}</p>
                  {!n.read &&
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                }
                </div>
                <p className="mt-0.5 text-sm text-ink-600">{n.body}</p>
                <p className="mt-1 text-xs text-ink-400">{n.time}</p>
              </div>
            </motion.div>;


          return (
            <li key={n.id}>
              {n.dossierSlug ?
              <Link to={`/dossier/${n.dossierSlug}`}>{body}</Link> :

              body
              }
            </li>);

        })}
      </ul>
    </div>);

}