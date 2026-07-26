import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function CardRail({ children }: {children: React.ReactNode;}) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Précédent"
        className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 shadow-float ring-1 ring-ink-900/5 transition hover:scale-105 md:flex">
        
        <ChevronLeftIcon className="h-5 w-5 text-ink-800" />
      </button>
      <div
        ref={ref}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        
        {React.Children.map(children, (child) =>
        <div className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]">
            {child}
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Suivant"
        className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 shadow-float ring-1 ring-ink-900/5 transition hover:scale-105 md:flex">
        
        <ChevronRightIcon className="h-5 w-5 text-ink-800" />
      </button>
    </div>);

}