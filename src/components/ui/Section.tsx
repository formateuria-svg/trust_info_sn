import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, BoxIcon } from "lucide-react";
export function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  color = "#007b49",
  action









}: {icon: BoxIcon;title: string;subtitle?: string;color?: string;action?: {label: string;to: string;};}) {
  return <div className="mb-5 flex items-end justify-between gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{
        backgroundColor: `${color}18`,
        color
      }}>
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h2 className="font-display text-lg font-700 text-ink-900 sm:text-xl">
            {title}
          </h2>
          {subtitle && <p className="mt-0.5 text-sm text-ink-600">{subtitle}</p>}
        </div>
      </div>
      {action && <Link to={action.to} className="group inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-600 transition hover:text-brand-700">
          {action.label}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>}
    </div>;
}