import React, { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  XIcon,
  PlayIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ImageIcon,
  VideoIcon,
  MicIcon } from
"lucide-react";
import type { MediaItem } from "../../data/types";

const KIND_ICON = {
  image: ImageIcon,
  video: VideoIcon,
  audio: MicIcon
} as const;

export function MediaGallery({ items }: {items: MediaItem[];}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: -1 | 1) =>
    setOpen((i) => {
      if (i === null) return i;
      return (i + dir + items.length) % items.length;
    }),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, go]);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {items.map((item, i) => {
          const KindIcon = KIND_ICON[item.kind];
          const isVideo = item.kind === "video";
          const isAudio = item.kind === "audio";
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setOpen(i)}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-2xl bg-ink-100 ring-1 ring-ink-900/5 ${
              i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-[4/3]" : "aspect-square"}`
              }>
              
              <img
                src={item.url}
                alt={item.caption}
                loading="lazy"
                className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                isAudio ? "brightness-90" : ""}`
                } />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80" />
              <span className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-ink-800 backdrop-blur">
                <KindIcon className="h-3.5 w-3.5" />
              </span>
              {(isVideo || isAudio) &&
              <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-float transition group-hover:scale-110">
                    <PlayIcon className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                </span>
              }
              {item.duration &&
              <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white">
                  {item.duration}
                </span>
              }
              <span className="absolute bottom-2 left-2 right-10 truncate text-left text-[11px] font-medium text-white">
                {item.caption}
              </span>
            </motion.button>);

        })}
      </div>

      <AnimatePresence>
        {open !== null &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true">
          
            <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
            
              <XIcon className="h-5 w-5" />
            </button>
            <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Précédent"
            className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6">
            
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Suivant"
            className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6">
            
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            <motion.figure
            key={items[open].id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-ink-900"
            onClick={(e) => e.stopPropagation()}>
            
              <div className="relative">
                <img
                src={items[open].url}
                alt={items[open].caption}
                className="max-h-[70vh] w-full object-contain" />
              
                {items[open].kind !== "image" &&
              <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-ink-900 shadow-float">
                      <PlayIcon className="ml-1 h-7 w-7 fill-current" />
                    </span>
                  </span>
              }
              </div>
              <figcaption className="flex items-center justify-between gap-3 px-5 py-3 text-sm text-white/90">
                <span className="truncate">{items[open].caption}</span>
                <span className="shrink-0 text-white/50">
                  {open + 1} / {items.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}