import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  ArrowLeftIcon,
  MapPinIcon,
  EyeIcon,
  Share2Icon,
  ClockIcon,
  ImagesIcon,
  ScaleIcon,
  HistoryIcon,
  LibraryIcon,
  BuildingIcon,
  ChevronRightIcon,
  BookmarkIcon } from
"lucide-react";
import { getDossier } from "../data/dossiers";
import { getOutlet } from "../data/mediaOutlets";
import { VERDICTS, CategoryChip, PLATFORMS } from "../data/constants";
import { MediaGallery } from "../components/media/MediaGallery";
import { VoteWidget } from "../components/dossier/VoteWidget";
import { ArgumentsPanel } from "../components/dossier/ArgumentsPanel";
import { Timeline } from "../components/dossier/Timeline";
import { SourcesList } from "../components/dossier/SourcesList";
import { ScoreRing } from "../components/media/ScoreRing";
import { NotFoundPage } from "./NotFoundPage";

export function DossierPage() {
  const { slug } = useParams();
  const dossier = slug ? getDossier(slug) : undefined;

  if (!dossier) return <NotFoundPage />;

  const verdict = VERDICTS[dossier.verdict];
  const VerdictIcon = verdict.icon;
  const Platform = PLATFORMS[dossier.platform];
  const outlet = getOutlet(dossier.mediaOutletId);

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
      <Link
        to="/"
        className="mb-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-600 transition hover:text-ink-900">
        
        <ArrowLeftIcon className="h-4 w-4" />
        Retour à l'accueil
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink-900/5">
        
        <div className="relative aspect-[16/8]">
          <img
            src={dossier.cover}
            alt={dossier.claim}
            className="h-full w-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
            <CategoryChip category={dossier.category} />
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink-800 backdrop-blur">
              <Platform.icon className="h-3.5 w-3.5" style={{ color: Platform.color }} />
              {dossier.platform}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-700 text-white shadow-float"
              style={{ backgroundColor: verdict.color }}>
              
              <VerdictIcon className={`h-4 w-4 ${dossier.verdict === "encours" ? "animate-spin" : ""}`} />
              {verdict.label}
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-7">
          <h1 className="font-display text-2xl font-800 leading-tight text-ink-900 sm:text-3xl">
            {dossier.claim}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-600">
            {dossier.summary}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="h-4 w-4" />
              {dossier.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4" />
              {format(new Date(dossier.publishedAt), "d MMM yyyy", { locale: fr })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <EyeIcon className="h-4 w-4" />
              {dossier.views.toLocaleString("fr-FR")} vues
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Share2Icon className="h-4 w-4" />
              {dossier.shares.toLocaleString("fr-FR")} partages
            </span>
            <button className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-ink-50 px-3 py-1.5 font-semibold text-ink-700 transition hover:bg-ink-100">
              <BookmarkIcon className="h-4 w-4" />
              Suivre
            </button>
          </div>

          {/* Virality bar */}
          <div className="mt-5 rounded-2xl bg-paper p-4">
            <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-ink-600">
              <span>Niveau de viralité</span>
              <span>{dossier.virality}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-ink-900/10">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                  dossier.virality > 75 ?
                  "#e2333f" :
                  dossier.virality > 50 ?
                  "#f5a623" :
                  "#0f9d58"
                }}
                initial={{ width: 0 }}
                animate={{ width: `${dossier.virality}%` }}
                transition={{ duration: 0.9, ease: "easeOut" }} />
              
            </div>
          </div>
        </div>
      </motion.div>

      {/* Body grid */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-10">
          {/* Media library */}
          <Block icon={ImagesIcon} color="#8b5cf6" title="Bibliothèque de preuves" subtitle="Captures, photos, vidéos et audios du dossier">
            <MediaGallery items={dossier.media} />
          </Block>

          {/* Arguments */}
          <Block icon={ScaleIcon} color="#f5b70a" title="Vérification collaborative" subtitle="Arguments, sources et témoignages">
            <ArgumentsPanel args={dossier.arguments} />
          </Block>

          {/* Timeline */}
          <Block icon={HistoryIcon} color="#2b7fff" title="Chronologie de l'enquête" subtitle="Comment le dossier a évolué">
            <Timeline events={dossier.timeline} />
          </Block>

          {/* Sources */}
          <Block icon={LibraryIcon} color="#0f9d58" title="Sources & documents" subtitle="Preuves consultables et vérifiées">
            <SourcesList sources={dossier.sources} />
          </Block>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-20 lg:self-start">
          <VoteWidget initial={dossier.votes} />

          {/* Certified verifiers note */}
          <div className="rounded-2xl bg-blue-50 p-4 ring-1 ring-blue-100">
            <h3 className="flex items-center gap-2 text-sm font-700 text-blue-900">
              <ScaleIcon className="h-4 w-4" />
              Vote pondéré
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-blue-800/80">
              Les votes des vérificateurs certifiés — journalistes, ONG,
              universitaires et experts — ont un poids renforcé dans le verdict
              final.
            </p>
          </div>

          {/* Media outlet card */}
          {outlet &&
          <Link
            to={`/media/${outlet.id}`}
            className="block rounded-2xl bg-white p-4 shadow-card ring-1 ring-ink-900/5 transition hover:ring-brand-200">
            
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
                <BuildingIcon className="h-4 w-4" />
                Média source
              </div>
              <div className="flex items-center gap-3">
                <span
                className="flex h-11 w-11 items-center justify-center rounded-xl font-800 text-white"
                style={{ backgroundColor: outlet.logoColor }}>
                
                  {outlet.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-sm font-700 text-ink-900">
                    {outlet.name}
                  </p>
                  <p className="text-xs text-ink-500">{outlet.type}</p>
                </div>
                <ScoreRing score={outlet.credibility} size={48} stroke={5} />
              </div>
              <span className="mt-3 flex items-center justify-end gap-1 text-xs font-semibold text-brand-600">
                Voir la fiche
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </span>
            </Link>
          }
        </aside>
      </div>
    </div>);

}

function Block({
  icon: Icon,
  color,
  title,
  subtitle,
  children






}: {icon: typeof ImagesIcon;color: string;title: string;subtitle: string;children: React.ReactNode;}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}>
      
      <div className="mb-4 flex items-start gap-3">
        <span
          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${color}18`, color }}>
          
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h2 className="font-display text-lg font-700 text-ink-900">{title}</h2>
          <p className="text-sm text-ink-500">{subtitle}</p>
        </div>
      </div>
      {children}
    </motion.section>);

}