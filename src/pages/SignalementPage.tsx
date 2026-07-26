import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileTextIcon,
  ImageIcon,
  VideoIcon,
  MicIcon,
  LinkIcon,
  CalendarIcon,
  BuildingIcon,
  CheckCircle2Icon,
  UploadCloudIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CameraIcon } from
"lucide-react";
import { CATEGORY_LIST, CATEGORIES, PLATFORM_LIST, PLATFORMS } from "../data/constants";
import type { Category, Platform } from "../data/types";

const MEDIA_TYPES = [
{ key: "capture", label: "Capture d'écran", icon: CameraIcon, color: "#8b5cf6" },
{ key: "photo", label: "Photo", icon: ImageIcon, color: "#0f9d58" },
{ key: "video", label: "Vidéo", icon: VideoIcon, color: "#e2333f" },
{ key: "audio", label: "Audio", icon: MicIcon, color: "#f5b70a" }];


export function SignalementPage() {
  const [step, setStep] = useState(0);
  const [claim, setClaim] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState<Category | null>(null);
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [source, setSource] = useState("");
  const [attachments, setAttachments] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const steps = ["L'information", "Contexte", "Preuves"];
  const canNext =
  step === 0 ?
  claim.trim().length > 8 && category && platform :
  true;

  const toggleAttachment = (key: string) =>
  setAttachments((prev) =>
  prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
  );

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-20 text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          
          <CheckCircle2Icon className="h-10 w-10" />
        </motion.div>
        <h1 className="mt-6 font-display text-2xl font-800 text-ink-900">
          Signalement envoyé
        </h1>
        <p className="mt-2 text-ink-600">
          Merci&nbsp;! Votre dossier va être ouvert à la vérification
          collaborative. La communauté et les vérificateurs certifiés vont
          l'analyser.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-brand-600 px-5 py-3 text-sm font-700 text-white transition hover:bg-brand-700">
            
            Retour à l'accueil
          </Link>
          <button
            onClick={() => {
              setSubmitted(false);
              setStep(0);
              setClaim("");
              setDetails("");
              setCategory(null);
              setPlatform(null);
              setLink("");
              setDate("");
              setSource("");
              setAttachments([]);
            }}
            className="rounded-full bg-ink-50 px-5 py-3 text-sm font-700 text-ink-700 transition hover:bg-ink-100">
            
            Nouveau signalement
          </button>
        </div>
      </div>);

  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <div className="mb-2 text-center">
        <h1 className="font-display text-2xl font-800 text-ink-900 sm:text-3xl">
          Créer un signalement
        </h1>
        <p className="mt-1.5 text-ink-600">
          Documentez une information virale pour la faire vérifier ensemble.
        </p>
      </div>

      {/* Stepper */}
      <div className="mx-auto mt-6 mb-8 flex max-w-md items-center">
        {steps.map((s, i) =>
        <React.Fragment key={s}>
            <div className="flex flex-col items-center gap-1.5">
              <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-700 transition ${
              i <= step ?
              "bg-brand-600 text-white" :
              "bg-ink-100 text-ink-500"}`
              }>
              
                {i < step ? <CheckCircle2Icon className="h-4 w-4" /> : i + 1}
              </span>
              <span
              className={`text-[11px] font-semibold ${
              i <= step ? "text-brand-700" : "text-ink-400"}`
              }>
              
                {s}
              </span>
            </div>
            {i < steps.length - 1 &&
          <div className="mx-2 mb-5 h-0.5 flex-1 overflow-hidden rounded bg-ink-100">
                <div
              className="h-full bg-brand-500 transition-all duration-500"
              style={{ width: i < step ? "100%" : "0%" }} />
            
              </div>
          }
          </React.Fragment>
        )}
      </div>

      <div className="rounded-3xl bg-white p-5 shadow-card ring-1 ring-ink-900/5 sm:p-7">
        <AnimatePresence mode="wait">
          {step === 0 &&
          <motion.div
            key="s0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-5">
            
              <Field label="Quelle est l'information à vérifier ?" icon={FileTextIcon} required>
                <textarea
                value={claim}
                onChange={(e) => setClaim(e.target.value)}
                rows={3}
                placeholder="Ex : Un communiqué annonce la fermeture des écoles dès lundi…"
                className="w-full resize-none rounded-xl border border-ink-900/10 bg-paper px-3.5 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100" />
              
              </Field>

              <div>
                <label className="mb-2 block text-sm font-700 text-ink-900">
                  Catégorie <span className="text-faux">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {CATEGORY_LIST.map((c) => {
                  const meta = CATEGORIES[c];
                  const active = category === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCategory(c)}
                      className={`rounded-full px-3.5 py-2 text-sm font-semibold transition ${
                      active ?
                      "text-white" :
                      "bg-ink-50 text-ink-700 hover:bg-ink-100"}`
                      }
                      style={active ? { backgroundColor: meta.color } : {}}>
                      
                        {c}
                      </button>);

                })}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-700 text-ink-900">
                  Où circule-t-elle ? <span className="text-faux">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {PLATFORM_LIST.map((p) => {
                  const meta = PLATFORMS[p];
                  const Icon = meta.icon;
                  const active = platform === p;
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPlatform(p)}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                      active ?
                      "border-brand-500 bg-brand-50 text-brand-700" :
                      "border-ink-900/10 text-ink-700 hover:border-ink-900/25"}`
                      }>
                      
                        <Icon className="h-4 w-4" style={{ color: meta.color }} />
                        <span className="truncate">{p}</span>
                      </button>);

                })}
                </div>
              </div>
            </motion.div>
          }

          {step === 1 &&
          <motion.div
            key="s1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-5">
            
              <Field label="Détails & contexte" icon={FileTextIcon}>
                <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                placeholder="Décrivez ce que vous savez : origine, personnes concernées, pourquoi cela pose question…"
                className="w-full resize-none rounded-xl border border-ink-900/10 bg-paper px-3.5 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100" />
              
              </Field>
              <Field label="Lien vers la publication" icon={LinkIcon}>
                <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://…"
                className="w-full rounded-xl border border-ink-900/10 bg-paper px-3.5 py-3 text-sm focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100" />
              
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Date de l'information" icon={CalendarIcon}>
                  <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-ink-900/10 bg-paper px-3.5 py-3 text-sm focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100" />
                
                </Field>
                <Field label="Source présumée" icon={BuildingIcon}>
                  <input
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder="Ex : Buzz Sénégal, un ami…"
                  className="w-full rounded-xl border border-ink-900/10 bg-paper px-3.5 py-3 text-sm focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100" />
                
                </Field>
              </div>
            </motion.div>
          }

          {step === 2 &&
          <motion.div
            key="s2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-5">
            
              <div>
                <label className="mb-2 block text-sm font-700 text-ink-900">
                  Ajoutez vos preuves
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {MEDIA_TYPES.map((m) => {
                  const Icon = m.icon;
                  const active = attachments.includes(m.key);
                  return (
                    <button
                      key={m.key}
                      type="button"
                      onClick={() => toggleAttachment(m.key)}
                      className={`flex flex-col items-center gap-2 rounded-2xl border-2 border-dashed p-4 transition ${
                      active ?
                      "border-transparent bg-paper" :
                      "border-ink-900/10 hover:border-ink-900/25"}`
                      }
                      style={active ? { boxShadow: `inset 0 0 0 2px ${m.color}` } : {}}>
                      
                        <span
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${m.color}1a`, color: m.color }}>
                        
                          {active ? <CheckCircle2Icon className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                        </span>
                        <span className="text-xs font-semibold text-ink-800">
                          {m.label}
                        </span>
                      </button>);

                })}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-ink-900/10 bg-paper py-10 text-center">
                <UploadCloudIcon className="h-8 w-8 text-ink-400" />
                <p className="mt-2 text-sm font-semibold text-ink-700">
                  Glissez vos fichiers ici
                </p>
                <p className="text-xs text-ink-500">
                  Images, vidéos, audios — jusqu'à 50 Mo
                </p>
                <button
                type="button"
                className="mt-3 rounded-full bg-white px-4 py-2 text-xs font-700 text-ink-800 shadow-sm ring-1 ring-ink-900/10 transition hover:ring-brand-300">
                
                  Parcourir les fichiers
                </button>
              </div>

              <div className="rounded-2xl bg-amber-50 p-4 text-xs leading-relaxed text-amber-800 ring-1 ring-amber-100">
                En publiant, vous acceptez que votre dossier soit vérifié
                collaborativement. Les signalements abusifs peuvent être rejetés
                par la modération.
              </div>
            </motion.div>
          }
        </AnimatePresence>

        {/* Nav */}
        <div className="mt-7 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-700 text-ink-600 transition enabled:hover:bg-ink-50 disabled:opacity-0">
            
            <ArrowLeftIcon className="h-4 w-4" />
            Retour
          </button>
          {step < 2 ?
          <button
            type="button"
            onClick={() => canNext && setStep((s) => s + 1)}
            disabled={!canNext}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-700 text-white transition enabled:hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40">
            
              Continuer
              <ArrowRightIcon className="h-4 w-4" />
            </button> :

          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-700 text-white transition hover:bg-brand-700">
            
              <CheckCircle2Icon className="h-4 w-4" />
              Publier le signalement
            </button>
          }
        </div>
      </div>
    </div>);

}

function Field({
  label,
  icon: Icon,
  required,
  children





}: {label: string;icon: typeof FileTextIcon;required?: boolean;children: React.ReactNode;}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-1.5 text-sm font-700 text-ink-900">
        <Icon className="h-4 w-4 text-ink-500" />
        {label}
        {required && <span className="text-faux">*</span>}
      </label>
      {children}
    </div>);

}