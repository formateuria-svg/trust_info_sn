import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ThumbsUpIcon,
  FileTextIcon,
  PlusIcon,
  ThumbsDownIcon } from
"lucide-react";
import type { Argument } from "../../data/types";
import { Avatar } from "../ui/Avatar";

function ArgumentCard({ arg }: {arg: Argument;}) {
  const [votes, setVotes] = useState(arg.upvotes);
  const [liked, setLiked] = useState(false);
  const isPour = arg.side === "pour";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-ink-900/5">
      
      <div className="mb-3 flex items-center gap-2.5">
        <Avatar contributor={arg.author} size={34} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink-900">
            {arg.author.name}
          </p>
          <p className="text-xs text-ink-500">{arg.author.role}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-ink-700">{arg.text}</p>
      <div className="mt-3 flex items-center gap-3 text-xs text-ink-500">
        <button
          type="button"
          onClick={() => {
            setLiked((v) => !v);
            setVotes((n) => liked ? n - 1 : n + 1);
          }}
          className={`inline-flex items-center gap-1 rounded-full px-2 py-1 font-semibold transition ${
          liked ?
          isPour ?
          "bg-emerald-50 text-emerald-700" :
          "bg-red-50 text-red-700" :
          "text-ink-500 hover:bg-ink-50"}`
          }>
          
          <ThumbsUpIcon className="h-3.5 w-3.5" />
          {votes}
        </button>
        {arg.sources > 0 &&
        <span className="inline-flex items-center gap-1">
            <FileTextIcon className="h-3.5 w-3.5" />
            {arg.sources} source{arg.sources > 1 ? "s" : ""}
          </span>
        }
      </div>
    </motion.div>);

}

export function ArgumentsPanel({ args }: {args: Argument[];}) {
  const pour = args.filter((a) => a.side === "pour");
  const contre = args.filter((a) => a.side === "contre");

  const Column = ({
    title,
    icon: Icon,
    color,
    items





  }: {title: string;icon: typeof ThumbsUpIcon;color: string;items: Argument[];}) =>
  <div>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
          className="flex h-7 w-7 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${color}1a`, color }}>
          
            <Icon className="h-4 w-4" />
          </span>
          <h4 className="font-display text-sm font-700 text-ink-900">
            {title}
          </h4>
          <span className="rounded-full bg-ink-50 px-2 py-0.5 text-xs font-semibold text-ink-600">
            {items.length}
          </span>
        </div>
      </div>
      <div className="space-y-3">
        {items.length === 0 ?
      <p className="rounded-2xl border border-dashed border-ink-900/10 p-4 text-center text-xs text-ink-500">
            Aucun argument pour l'instant.
          </p> :

      items.map((a) => <ArgumentCard key={a.id} arg={a} />)
      }
        <button
        type="button"
        className="flex w-full items-center justify-center gap-1.5 rounded-2xl border border-dashed border-ink-900/15 py-2.5 text-xs font-semibold text-ink-600 transition hover:border-brand-400 hover:text-brand-700">
        
          <PlusIcon className="h-4 w-4" />
          Ajouter un argument
        </button>
      </div>
    </div>;


  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Column
        title="Arguments POUR"
        icon={ThumbsUpIcon}
        color="#0f9d58"
        items={pour} />
      
      <Column
        title="Arguments CONTRE"
        icon={ThumbsDownIcon}
        color="#e2333f"
        items={contre} />
      
    </div>);

}