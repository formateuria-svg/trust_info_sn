import React from "react";
import { BadgeCheckIcon } from "lucide-react";
import type { Contributor } from "../../data/types";

export function Avatar({
  contributor,
  size = 36



}: {contributor: Contributor;size?: number;}) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div
        className="flex h-full w-full items-center justify-center rounded-full font-semibold text-white"
        style={{
          backgroundColor: contributor.avatarColor,
          fontSize: size * 0.38
        }}
        aria-hidden="true">
        
        {contributor.initials}
      </div>
      {contributor.certified &&
      <span
        className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center rounded-full bg-white"
        style={{ width: size * 0.44, height: size * 0.44 }}
        title="Vérificateur certifié">
        
          <BadgeCheckIcon
          className="text-blue-500"
          style={{ width: size * 0.44, height: size * 0.44 }} />
        
        </span>
      }
    </div>);

}