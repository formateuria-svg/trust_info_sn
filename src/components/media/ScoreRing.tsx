import React from "react";
import { motion } from "framer-motion";

function scoreColor(score: number) {
  if (score >= 80) return "#0f9d58";
  if (score >= 65) return "#f5b70a";
  if (score >= 50) return "#f5a623";
  return "#e2333f";
}

export function ScoreRing({
  score,
  size = 64,
  stroke = 6,
  label





}: {score: number;size?: number;stroke?: number;label?: string;}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const color = scoreColor(score);

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`Score de fiabilité ${score} sur 100`}>
      
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#e9ecf4"
          strokeWidth={stroke} />
        
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c - score / 100 * c }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }} />
        
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-display font-800 leading-none"
          style={{ fontSize: size * 0.28, color }}>
          
          {score}
        </span>
        {label &&
        <span className="mt-0.5 text-[9px] font-medium uppercase text-ink-500">
            {label}
          </span>
        }
      </div>
    </div>);

}