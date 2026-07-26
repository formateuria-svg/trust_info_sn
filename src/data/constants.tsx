import React from "react";
import { CheckCircle2Icon, XCircleIcon, AlertTriangleIcon, ScissorsIcon, HelpCircleIcon, LoaderIcon, FacebookIcon, InstagramIcon, MessageCircleIcon, MusicIcon, TwitterIcon, NewspaperIcon, BoxIcon } from "lucide-react";
import { Verdict, Category, Platform } from "./types";
interface VerdictMeta {
  label: string;
  color: string; // hex
  bg: string; // tailwind bg class
  text: string; // tailwind text class
  ring: string;
  icon: BoxIcon;
}
export const VERDICTS: Record<Verdict, VerdictMeta> = {
  vrai: {
    label: "Vrai",
    color: "#0f9d58",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    ring: "ring-emerald-200",
    icon: CheckCircle2Icon
  },
  faux: {
    label: "Faux",
    color: "#e2333f",
    bg: "bg-red-50",
    text: "text-red-700",
    ring: "ring-red-200",
    icon: XCircleIcon
  },
  trompeur: {
    label: "Trompeur",
    color: "#f5a623",
    bg: "bg-amber-50",
    text: "text-amber-700",
    ring: "ring-amber-200",
    icon: AlertTriangleIcon
  },
  contexte: {
    label: "Sorti de son contexte",
    color: "#8b5cf6",
    bg: "bg-violet-50",
    text: "text-violet-700",
    ring: "ring-violet-200",
    icon: ScissorsIcon
  },
  indeterminable: {
    label: "Impossible à vérifier",
    color: "#64748b",
    bg: "bg-slate-100",
    text: "text-slate-600",
    ring: "ring-slate-200",
    icon: HelpCircleIcon
  },
  encours: {
    label: "En cours d'analyse",
    color: "#2b7fff",
    bg: "bg-blue-50",
    text: "text-blue-700",
    ring: "ring-blue-200",
    icon: LoaderIcon
  }
};
interface CategoryMeta {
  color: string;
  bg: string;
  text: string;
}
export const CATEGORIES: Record<Category, CategoryMeta> = {
  Politique: {
    color: "#e2333f",
    bg: "bg-red-50",
    text: "text-red-700"
  },
  Sport: {
    color: "#0f9d58",
    bg: "bg-emerald-50",
    text: "text-emerald-700"
  },
  Économie: {
    color: "#f5b70a",
    bg: "bg-amber-50",
    text: "text-amber-700"
  },
  Santé: {
    color: "#2b7fff",
    bg: "bg-blue-50",
    text: "text-blue-700"
  },
  Justice: {
    color: "#8b5cf6",
    bg: "bg-violet-50",
    text: "text-violet-700"
  },
  Sécurité: {
    color: "#0891b2",
    bg: "bg-cyan-50",
    text: "text-cyan-700"
  },
  International: {
    color: "#db2777",
    bg: "bg-pink-50",
    text: "text-pink-700"
  }
};
export const CATEGORY_LIST = Object.keys(CATEGORIES) as Category[];
export const PLATFORMS: Record<Platform, {
  icon: BoxIcon;
  color: string;
}> = {
  Facebook: {
    icon: FacebookIcon,
    color: "#1877f2"
  },
  TikTok: {
    icon: MusicIcon,
    color: "#010101"
  },
  WhatsApp: {
    icon: MessageCircleIcon,
    color: "#25d366"
  },
  X: {
    icon: TwitterIcon,
    color: "#0f1729"
  },
  Instagram: {
    icon: InstagramIcon,
    color: "#e1306c"
  },
  "Presse en ligne": {
    icon: NewspaperIcon,
    color: "#007b49"
  }
};
export const PLATFORM_LIST = Object.keys(PLATFORMS) as Platform[];
export function VerdictBadge({
  verdict,
  size = "md"



}: {verdict: Verdict;size?: "sm" | "md";}) {
  const meta = VERDICTS[verdict];
  const Icon = meta.icon;
  const sizeClass = size === "sm" ? "text-[11px] px-2 py-0.5 gap-1" : "text-xs px-2.5 py-1 gap-1.5";
  return <span className={`inline-flex items-center rounded-full font-semibold ring-1 ${meta.bg} ${meta.text} ${meta.ring} ${sizeClass}`}>
      <Icon className={`${size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5"} ${verdict === "encours" ? "animate-spin" : ""}`} />
      {meta.label}
    </span>;
}
export function CategoryChip({
  category


}: {category: Category;}) {
  const meta = CATEGORIES[category];
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${meta.bg} ${meta.text}`}>
      {category}
    </span>;
}